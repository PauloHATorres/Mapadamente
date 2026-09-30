# O Mapa da Mente — nova versão

Redesign e reorganização do acervo do [Mapa da Mente](https://www.mapadamente.com.br/) na direção visual **Arquivo Cultural e Intelectual**.

## Stack
- React 18
- Vite
- Lucide React
- GitHub Pages via GitHub Actions

## Rodar localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Arquitetura
- `src/content.js`: conteúdo, rotas e fontes históricas.
- `src/App.jsx`: homepage, busca, navegação e templates internos.
- `src/styles.css`: sistema visual e responsividade.
- `PRODUCT.md`: verdade do produto e limites editoriais.
- `DESIGN.md`: direção visual aprovada.
- `.impeccable/design.json`: tokens principais do sistema.

## Regra editorial
Conteúdo clínico antigo é identificado como **acervo histórico** quando critérios, contatos ou tratamentos podem ter mudado. A nova versão não transforma material legado em orientação clínica atual sem revisão.

## Publicação
Cada push na `main` dispara o workflow de GitHub Pages.
