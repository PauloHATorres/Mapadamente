import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  ExternalLink,
  Library,
  Mail,
  MapPin,
  Menu,
  Search,
  Stethoscope,
  X
} from 'lucide-react';
import {
  archiveItems,
  assets,
  careItems,
  navGroups,
  pageList,
  pages,
  thinkingItems,
  topicItems
} from './content.js';

const routeFor = (page) => '#/p/' + page.slug;
const findPage = (slug) => pageList.find((page) => page.slug === slug);

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/');
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [hash]);
  return hash;
}

function useDocumentMeta(page) {
  useEffect(() => {
    const title = page ? page.title + ' — O Mapa da Mente' : 'O Mapa da Mente';
    const description = page?.deck || 'Informações, orientações e acervo em saúde mental, psicologia, psiquiatria e pensamento.';
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [page]);
}

function Brand({ compact = false }) {
  return (
    <a className={'brand' + (compact ? ' brand--compact' : '')} href="#/" aria-label="O Mapa da Mente — página inicial">
      <span className="brand__name">O MAPA DA MENTE</span>
      <span className="brand__tagline">Informações & Orientações em Saúde Mental</span>
    </a>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const close = () => {
      setMobileOpen(false);
      setSearchOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('hashchange', close);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('hashchange', close);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__bar shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <button className="nav-group__trigger" type="button">
                {group.label}
                <ChevronDown size={14} strokeWidth={1.6} aria-hidden="true" />
              </button>
              <div className="nav-group__panel">
                <span className="nav-group__label">{group.label}</span>
                {group.items.map((key) => (
                  <a key={key} href={routeFor(pages[key])}>
                    <span>{pages[key].title}</span>
                    <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a className="nav-direct" href="#/atendimento">Atendimento</a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-label={searchOpen ? 'Fechar busca' : 'Abrir busca'}
            aria-expanded={searchOpen}
          >
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}

      {mobileOpen && (
        <nav className="mobile-nav shell" aria-label="Navegação mobile">
          {navGroups.map((group) => (
            <details key={group.label}>
              <summary>{group.label}<ChevronDown size={16} /></summary>
              <div className="mobile-nav__group">
                {group.items.map((key) => (
                  <a key={key} href={routeFor(pages[key])}>{pages[key].title}</a>
                ))}
              </div>
            </details>
          ))}
          <a className="mobile-nav__care" href="#/atendimento">Atendimento</a>
        </nav>
      )}
    </header>
  );
}

function SearchPanel({ onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('pt-BR');
    if (!normalized) return pageList.slice(0, 7);
    return pageList.filter((page) => {
      const haystack = [page.title, page.deck, page.group, ...(page.sections || []).map((s) => s.title)]
        .join(' ')
        .toLocaleLowerCase('pt-BR');
      return haystack.includes(normalized);
    }).slice(0, 9);
  }, [query]);

  return (
    <section className="search-panel" aria-label="Busca no acervo">
      <div className="shell search-panel__inner">
        <div className="search-field">
          <Search size={20} strokeWidth={1.5} aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Busque por tema, texto, autor ou área…"
            aria-label="Buscar no Mapa da Mente"
          />
        </div>
        <div className="search-results">
          <span className="search-results__meta" aria-live="polite">{query ? results.length + ' resultados' : 'Comece pelo acervo'}</span>
          {results.length ? results.map((page) => (
            <a key={page.slug} href={routeFor(page)} onClick={onClose}>
              <span>
                <small>{page.group}</small>
                <strong>{page.title}</strong>
              </span>
              <ArrowRight size={17} />
            </a>
          )) : <p>Nenhum resultado encontrado. Tente outro termo.</p>}
        </div>
      </div>
    </section>
  );
}

function ArchiveRelic({ compact = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={'archive-relic' + (compact ? ' archive-relic--compact' : '')}>
      <div className="archive-relic__index" aria-hidden="true">
        <span>ARQ.</span><span>MENTE</span><span>001</span>
      </div>
      {!failed ? (
        <img
          src={assets.brandArchive}
          alt="Identidade visual de O Mapa da Mente"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          decoding="async"
          fetchPriority={compact ? 'auto' : 'high'}
        />
      ) : (
        <div className="archive-relic__fallback">
          <strong>O Mapa da Mente</strong>
          <span>memória visual do projeto</span>
        </div>
      )}
      <figcaption>
        <span>O Mapa da Mente</span>
        <span>memória visual do projeto</span>
      </figcaption>
    </figure>
  );
}

function Home() {
  useDocumentMeta(null);
  return (
    <>
      <Header />
      <main id="conteudo">
        <section className="hero shell">
          <div className="hero__copy">
            <h1>Uma travessia pelo pensamento humano.</h1>
            <p className="hero__lead">
              Um arquivo vivo para compreender saúde mental com linguagem clara, preservar ideias e aproximar pessoas de conhecimento e cuidado.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#/p/subjetividade-artificial">
                Ler o ensaio em destaque <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#/p/objetivos">Conhecer o projeto</a>
            </div>
          </div>
          <div className="hero__relic">
            <ArchiveRelic />
          </div>
        </section>

        <section className="index-section shell" aria-labelledby="temas-title">
          <SectionHeader
            number="01"
            title="Explore por tema"
            text="Um índice direto para os assuntos clínicos que estruturam o acervo."
            id="temas-title"
          />
          <div className="topic-index">
            {topicItems.map((key, index) => {
              const page = pages[key];
              return (
                <a className="topic-index__row" key={key} href={routeFor(page)}>
                  <span className="topic-index__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="topic-index__title">{page.title}</span>
                  <span className="topic-index__desc">{page.deck}</span>
                  <ArrowRight size={19} strokeWidth={1.5} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </section>

        <FeatureEssay />

        <section className="thought-section shell" aria-labelledby="pensamento-title">
          <SectionHeader
            number="03"
            title="Pensamento e prática"
            text="Textos e áreas que atravessam clínica, história, palavra e experiência profissional."
            id="pensamento-title"
          />
          <div className="thought-grid">
            {thinkingItems.filter((key) => key !== 'subjetividade').map((key) => (
              <a href={routeFor(pages[key])} key={key} className="thought-entry">
                <small>{pages[key].group}</small>
                <h3>{pages[key].title}</h3>
                <p>{pages[key].deck}</p>
                <span>Entrar no conteúdo <ArrowRight size={15} /></span>
              </a>
            ))}
          </div>
        </section>

        <ArchiveSection />
        <AboutSection />
        <CareSection />
      </main>
      <Footer />
    </>
  );
}

function SectionHeader({ number, title, text, id }) {
  return (
    <header className="section-header">
      <div className="section-header__number">{number}</div>
      <div>
        <h2 id={id}>{title}</h2>
        <p>{text}</p>
      </div>
    </header>
  );
}

function FeatureEssay() {
  const page = pages.subjetividade;
  return (
    <section className="feature-essay" aria-labelledby="feature-title">
      <div className="shell feature-essay__grid">
        <div className="feature-essay__marker">
          <span>02</span>
          <span>Em destaque</span>
        </div>
        <div className="feature-essay__title">
          <h2 id="feature-title">A Subjetividade Artificial</h2>
          <p>{page.subtitle}</p>
          <span>Alfredo Simonetti</span>
        </div>
        <div className="feature-essay__body">
          <p>{page.deck}</p>
          <blockquote>
            <span>{page.quote}</span>
            <small>{page.quoteContext}</small>
          </blockquote>
          <a className="button button--light" href={routeFor(page)}>
            Ler ensaio <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section className="archive-section shell" aria-labelledby="acervo-title">
      <SectionHeader
        number="04"
        title="Acervo e formação"
        text="Materiais de diferentes épocas apresentados com contexto, sem transformar programação antiga em novidade."
        id="acervo-title"
      />
      <div className="archive-ledger">
        {archiveItems.map((key, index) => {
          const page = pages[key];
          return (
            <a key={key} href={routeFor(page)} className="archive-ledger__row">
              <span>{index === 0 ? <BookOpen size={21} /> : <Library size={21} />}</span>
              <strong>{page.title}</strong>
              <p>{page.deck}</p>
              <span className="archive-ledger__status">Acervo</span>
              <ArrowRight size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
}

function AboutSection() {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <section className="about-section">
      <div className="shell about-section__grid">
        <div className="about-section__portrait">
          {!imageFailed ? (
            <img
              src={assets.alfredo}
              alt="Alfredo Simonetti, coordenador do Mapa da Mente"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              decoding="async"
            />
          ) : (
            <div className="portrait-fallback">AS</div>
          )}
          <span>Alfredo Simonetti</span>
        </div>
        <div className="about-section__copy">
          <span className="chapter-label">05 · Sobre o projeto</span>
          <h2>Conhecimento como ponte entre sofrimento, cuidado e palavra.</h2>
          <p>
            O Mapa da Mente nasceu com objetivos muito concretos: informar com clareza, facilitar acesso a serviços, aproximar pacientes e profissionais e criar pontes entre psiquiatria e psicanálise.
          </p>
          <div className="about-section__links">
            <a href="#/p/objetivos">Ver objetivos <ArrowRight size={16} /></a>
            <a href="#/p/coordenador">Conhecer Alfredo Simonetti <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareSection() {
  return (
    <section className="care-section shell" id="atendimento" aria-labelledby="care-title">
      <SectionHeader
        number="06"
        title="Atendimento e caminhos de cuidado"
        text="Saídas claras para consulta, profissionais, rede pública e contato com o projeto."
        id="care-title"
      />
      <div className="care-list">
        {careItems.map((key, index) => {
          const page = pages[key];
          const Icon = index === 0 ? Stethoscope : index === 1 ? Search : index === 2 ? MapPin : Mail;
          return (
            <a key={key} href={routeFor(page)} className="care-list__item">
              <Icon size={20} strokeWidth={1.5} />
              <span>
                <strong>{page.title}</strong>
                <small>{page.deck}</small>
              </span>
              <ArrowRight size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ContentPage({ page }) {
  useDocumentMeta(page);
  const related = useMemo(() => (
    pageList
      .filter((candidate) => candidate.group === page.group && candidate.slug !== page.slug)
      .slice(0, 4)
  ), [page]);

  return (
    <>
      <Header />
      <main id="conteudo" className="content-page">
        <div className="shell breadcrumb">
          <a href="#/">Início</a>
          <span>/</span>
          <span>{page.group}</span>
          <span>/</span>
          <strong>{page.title}</strong>
        </div>

        <article>
          <header className="content-hero shell">
            <div className="content-hero__main">
              <div className="content-meta">
                <span>{page.group}</span>
                {page.author && <span>Por {page.author}</span>}
              </div>
              <h1>{page.title}</h1>
              {page.subtitle && <p className="content-hero__subtitle">{page.subtitle}</p>}
              <p className="content-hero__deck">{page.deck}</p>
              <div className="content-hero__actions">
                <a className="text-link" href="#/">Voltar ao índice</a>
              </div>
            </div>
            <div className="content-hero__aside">
              {page.image ? (
                <figure className="profile-plate">
                  <img src={page.image} alt={page.title} referrerPolicy="no-referrer" />
                  <figcaption>Alfredo Simonetti · O Mapa da Mente</figcaption>
                </figure>
              ) : (
                <ArchiveRelic compact />
              )}
            </div>
          </header>

          <div className="shell article-layout">
            <div className="article-content">
              {page.quote && (
                <blockquote className="essay-quote">
                  <span>{page.quote}</span>
                  <small>{page.quoteContext}</small>
                </blockquote>
              )}

              {(page.sections || []).map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}

              {page.objectives && (
                <section>
                  <h2>Objetivos do projeto</h2>
                  <ol className="objective-list">
                    {page.objectives.map((objective) => <li key={objective}>{objective}</li>)}
                  </ol>
                </section>
              )}

              {page.items && (
                <section>
                  <h2>Temas registrados no acervo</h2>
                  <div className="course-list">
                    {page.items.map((item, index) => (
                      <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
                    ))}
                  </div>
                </section>
              )}

              {page.codeGroups && (
                <section>
                  <h2>Atalhos preservados</h2>
                  <dl className="code-list">
                    {page.codeGroups.map(([code, label]) => (
                      <div key={code}><dt>{code}</dt><dd>{label}</dd></div>
                    ))}
                  </dl>
                </section>
              )}

              {page.contact && (
                <section>
                  <h2>Contato</h2>
                  <address className="contact-box">
                    <div><MapPin size={18} /><span>{page.contact.address}</span></div>
                    <div><span className="contact-box__label">Telefone</span><span>{page.contact.phone}</span></div>
                    <div><span className="contact-box__label">WhatsApp</span><span>{page.contact.whatsapp}</span></div>
                  </address>
                </section>
              )}

              {page.note && (
                <aside className="archive-note">
                  <strong>Nota editorial</strong>
                  <p>{page.note}</p>
                </aside>
              )}

              {page.extraLink && (
                <a className="source-row" href={page.extraLink} target="_blank" rel="noreferrer">
                  <span>
                    <small>Documento do acervo</small>
                    <strong>Abrir lista de CAPS em PDF</strong>
                  </span>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            <aside className="related-rail">
              <span>Continue no {page.group.toLocaleLowerCase('pt-BR')}</span>
              {related.map((item) => (
                <a key={item.slug} href={routeFor(item)}>
                  <small>{item.group}</small>
                  <strong>{item.title}</strong>
                  <ArrowRight size={15} />
                </a>
              ))}
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function AtendimentoIndex() {
  useDocumentMeta({ title: 'Atendimento', deck: 'Caminhos de cuidado e contato do Mapa da Mente.' });
  return (
    <>
      <Header />
      <main id="conteudo" className="landing-page shell">
        <div className="landing-page__intro">
          <span>Atendimento</span>
          <h1>Caminhos para transformar informação em acesso.</h1>
          <p>Facilitar o acesso aos serviços de saúde mental faz parte dos objetivos do projeto. Esta área reúne caminhos para consultas, profissionais, rede pública e contato.</p>
        </div>
        <div className="landing-page__list">
          {careItems.map((key, index) => {
            const page = pages[key];
            return (
              <a key={key} href={routeFor(page)}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{page.title}</strong><p>{page.deck}</p></div>
                <ArrowRight size={20} />
              </a>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  useDocumentMeta({ title: 'Página não encontrada', deck: 'Conteúdo não encontrado.' });
  return (
    <>
      <Header />
      <main id="conteudo" className="not-found shell">
        <span>404</span>
        <h1>Este caminho ainda não faz parte do mapa.</h1>
        <p>Volte ao índice principal e continue pelo acervo.</p>
        <a className="button button--primary" href="#/">Voltar ao início <ArrowRight size={16} /></a>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <Brand compact />
        <nav aria-label="Navegação do rodapé">
          <a href="#/p/objetivos">Objetivos</a>
          <a href="#/p/coordenador">Coordenador</a>
          <a href="#/p/cursos-e-palestras">Cursos & Palestras</a>
          <a href="#/atendimento">Atendimento</a>
        </nav>
        <div className="site-footer__close">
          <strong>Mais conhecimento.</strong>
          <span>Mais humanidade.</span>
        </div>
      </div>
      <div className="shell site-footer__fineprint">
        <span>O Mapa da Mente · Informações & Orientações em Saúde Mental.</span>
        <span>Saúde mental, psicologia, psiquiatria e pensamento.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const hash = useHashRoute();

  if (hash === '#/' || hash === '#') return <Home />;
  if (hash === '#/atendimento') return <AtendimentoIndex />;
  if (hash.startsWith('#/p/')) {
    const slug = decodeURIComponent(hash.replace('#/p/', '').split('?')[0]);
    const page = findPage(slug);
    if (page) return <ContentPage page={page} />;
  }
  return <NotFound />;
}
