export const legacySite = 'https://www.mapadamente.com.br';

export const assets = {
  legacyHeader: legacySite + '/img/img_home/cabecalho.jpg',
  alfredo: legacySite + '/foto%20fredo.fw.png'
};

export const pages = {
  ansiedade: {
    slug: 'ansiedade',
    group: 'Temas',
    title: 'Ansiedade e transtorno do pânico',
    deck: 'O acervo aborda o pânico como experiência intensa, seus sinais, o impacto na vida cotidiana e caminhos de tratamento.',
    sourceUrl: legacySite + '/ansiedade.htm',
    historical: true,
    sections: [
      {
        title: 'O foco do material original',
        body: 'A página histórica do Mapa da Mente concentra-se especialmente no transtorno do pânico: crises súbitas, manifestações físicas e emocionais e o medo de novas crises. O texto também discute como a evitação pode restringir a rotina e os vínculos.'
      },
      {
        title: 'Cuidado e tratamento',
        body: 'O material original defende que o sofrimento não deve ser minimizado e descreve tratamento combinado, com acompanhamento médico e psicoterapia. Nesta nova versão, o conteúdo é preservado como acervo e deve ser lido junto a orientação profissional atual.'
      }
    ],
    note: 'Conteúdo histórico reorganizado. Critérios diagnósticos e tratamentos devem ser confirmados em avaliação profissional atual.'
  },
  depressao: {
    slug: 'depressao',
    group: 'Temas',
    title: 'Depressão',
    deck: 'Uma narrativa do acervo aproxima biologia, sofrimento psíquico, psiquiatria e psicanálise sem reduzir a experiência humana a uma única explicação.',
    sourceUrl: legacySite + '/depressao.htm',
    historical: true,
    sections: [
      {
        title: 'Uma história para falar de sofrimento',
        body: 'A página original usa a personagem Nina para mostrar como a depressão pode atravessar corpo, tempo, desejo e rotina. A narrativa introduz serotonina, psiquiatria e psicanálise como linguagens diferentes para compreender e tratar o sofrimento.'
      },
      {
        title: 'A pergunta que fica',
        body: 'O texto contrasta a busca por explicações biológicas com a necessidade de escutar a história singular de quem sofre. Essa tensão entre organismo, experiência e palavra é um dos eixos editoriais mais característicos do projeto.'
      }
    ]
  },
  tdah: {
    slug: 'tdah',
    group: 'Temas',
    title: 'Hiperatividade e TDAH',
    deck: 'Material histórico sobre desatenção, hiperatividade, impacto acadêmico e social e a importância de uma avaliação que considere diferentes contextos.',
    sourceUrl: legacySite + '/hiperatividade.htm',
    historical: true,
    sections: [
      {
        title: 'Avaliação em contexto',
        body: 'O acervo destaca que a avaliação não deve se limitar a um sintoma isolado. O material considera duração, frequência, intensidade, prejuízo funcional e informações vindas de diferentes ambientes, como família e escola.'
      },
      {
        title: 'Impacto além da atenção',
        body: 'A página histórica também discute dificuldades acadêmicas, relacionais e emocionais associadas ao quadro. Como critérios e recomendações mudam ao longo do tempo, esta versão sinaliza o conteúdo como arquivo e não como protocolo diagnóstico atual.'
      }
    ],
    note: 'Os critérios descritos no site legado refletem a época de publicação. Para diagnóstico, use diretrizes atuais e avaliação profissional.'
  },
  alzheimer: {
    slug: 'alzheimer',
    group: 'Temas',
    title: 'Alzheimer',
    deck: 'Entrada do acervo dedicada à doença de Alzheimer e aos transtornos cognitivos, preservada dentro da nova organização editorial.',
    sourceUrl: legacySite + '/alzheimer.htm',
    historical: true,
    sections: [
      {
        title: 'Acervo temático',
        body: 'A página integra o conjunto histórico de temas clínicos do Mapa da Mente. A nova versão mantém o acesso e a contextualiza junto ao índice de saúde mental, sem apresentar o material antigo como diretriz médica atual.'
      }
    ]
  },
  remedios: {
    slug: 'remedios',
    group: 'Temas',
    title: 'Remédios psiquiátricos',
    deck: 'Um mapa introdutório do acervo para organizar grandes grupos de psicotrópicos pela função clínica, sem substituir prescrição ou acompanhamento médico.',
    sourceUrl: legacySite + '/remedios_psiq.htm',
    historical: true,
    sections: [
      {
        title: 'Organizar para compreender',
        body: 'O material original procura reduzir a sensação de excesso de informação em psicofarmacologia ao agrupar medicamentos em famílias como antidepressivos, estabilizadores do humor, ansiolíticos, antipsicóticos e psicoestimulantes.'
      },
      {
        title: 'Informação não é prescrição',
        body: 'A organização é educativa. Escolha de medicamento, dose, duração e manejo de efeitos adversos dependem de avaliação individual e acompanhamento profissional.'
      }
    ],
    note: 'Nunca inicie, interrompa ou ajuste medicação a partir desta página.'
  },
  obesidade: {
    slug: 'obesidade',
    group: 'Temas',
    title: 'Obesidade, saúde e experiência psicológica',
    deck: 'O acervo aproxima aspectos médicos, sociais e psicológicos da obesidade e discute o papel do acompanhamento em tratamentos de maior complexidade.',
    sourceUrl: legacySite + '/obesidade.htm',
    historical: true,
    sections: [
      {
        title: 'Uma condição multifatorial',
        body: 'O texto legado apresenta a obesidade como fenômeno que envolve fatores biológicos, comportamentais, sociais e psicológicos. Também chama atenção para estigma, qualidade de vida e sofrimento emocional.'
      },
      {
        title: 'Material que precisa de atualização clínica',
        body: 'A página histórica inclui classificações, indicações terapêuticas e informações sobre cirurgia bariátrica próprias de sua época. Por isso, a nova versão preserva o valor documental do texto, mas não o apresenta como recomendação clínica atual.'
      }
    ],
    note: 'Informações clínicas e critérios terapêuticos desta página devem ser conferidos em fontes médicas atuais.'
  },
  psicologiaHospitalar: {
    slug: 'psicologia-hospitalar',
    group: 'Pensamento',
    title: 'Psicologia Hospitalar',
    deck: 'Um dos núcleos mais fortes do projeto: compreender e tratar os aspectos psicológicos que atravessam a experiência do adoecimento.',
    sourceUrl: legacySite + '/psico_hospitalar.htm',
    sections: [
      {
        title: 'Adoecer também reorganiza a vida',
        body: 'No acervo do Mapa da Mente, Psicologia Hospitalar não se restringe a doenças de origem psicológica. O foco está na experiência subjetiva que acompanha qualquer adoecimento e no modo como a pessoa precisa reconstruir sentidos, vínculos e posição diante da doença.'
      },
      {
        title: 'A palavra como instrumento clínico',
        body: 'O texto histórico apresenta a escuta e a conversa clínica como ferramentas centrais do psicólogo hospitalar. O objetivo não é substituir a medicina, mas trabalhar a relação do sujeito com o adoecer, o tratamento, a equipe e a própria história.'
      }
    ]
  },
  psiquiatriaPsicanalise: {
    slug: 'psiquiatria-psicanalise',
    group: 'Pensamento',
    title: 'Psiquiatria & Psicanálise',
    deck: 'Um eixo de diálogo do projeto entre diagnóstico, tratamento médico, escuta e construção de sentido.',
    sourceUrl: legacySite + '/psiquiatria_psica.htm',
    sections: [
      {
        title: 'Pontes e diferenças',
        body: 'O acervo do Mapa da Mente reúne conteúdos que colocam psiquiatria e psicanálise em relação sem tratá-las como sinônimos. A nova organização preserva esse eixo como espaço de comparação, aproximação e tensão clínica.'
      }
    ]
  },
  subjetividade: {
    slug: 'subjetividade-artificial',
    group: 'Pensamento',
    title: 'A Subjetividade Artificial',
    subtitle: 'Da inteligência artificial à subjetividade artificial',
    author: 'Alfredo Simonetti',
    deck: 'Um ensaio especulativo do acervo sobre tecnologia, desejo, emoção e a possibilidade de dispositivos não apenas ampliarem capacidades humanas, mas modularem a própria experiência subjetiva.',
    sourceUrl: legacySite + '/subjetividade.html',
    feature: true,
    sections: [
      {
        title: 'Da substituição física à substituição afetiva',
        body: 'O ensaio percorre uma história de ferramentas que substituem ou ampliam capacidades humanas: força, sentidos e processamento cognitivo. A pergunta central surge quando essa lógica alcança desejo, afetos e decisões íntimas.'
      },
      {
        title: 'O que seria uma subjetividade artificial?',
        body: 'Simonetti propõe a expressão para pensar uma subjetividade humana modulada por dispositivos tecnológicos. O texto aproxima inteligência artificial, medicamentos, escolhas mediadas por algoritmos e ficção para explorar um limite ainda difícil de imaginar.'
      },
      {
        title: 'Uma pergunta que ficou mais atual',
        body: 'Lido hoje, o texto ganha outra camada: sistemas capazes de recomendar relações, consumo, caminhos e respostas já participam da vida cotidiana. O valor do ensaio está menos em prever uma tecnologia específica e mais em perguntar o que acontece quando delegamos partes da experiência de querer, sentir e decidir.'
      }
    ],
    quote: '“Gozai por nós”',
    quoteContext: 'frase-síntese do ensaio no acervo original'
  },
  psicologiaMedica: {
    slug: 'psicologia-medica',
    group: 'Pensamento',
    title: 'Psicologia Médica',
    deck: 'Conteúdos do acervo sobre a dimensão psicológica presente na relação entre medicina, paciente, profissional e experiência de adoecer.',
    sourceUrl: legacySite + '/psico_medica.htm',
    sections: [
      {
        title: 'Um campo de interface',
        body: 'Esta entrada preserva o lugar da Psicologia Médica dentro da arquitetura histórica do site e a conecta às páginas de Psicologia Hospitalar, Psiquiatria e formação.'
      }
    ]
  },
  historiaMedicina: {
    slug: 'historia-da-medicina',
    group: 'Pensamento',
    title: 'História da Medicina',
    deck: 'Um espaço do acervo para olhar a medicina também como construção histórica, cultural e humana.',
    sourceUrl: legacySite + '/hist_med.htm',
    sections: [
      {
        title: 'Contexto para compreender práticas',
        body: 'A nova versão mantém essa área como parte do eixo de pensamento do projeto, aproximando história, cultura, clínica e modos de compreender saúde e doença.'
      }
    ]
  },
  vidaMedico: {
    slug: 'vida-de-medico',
    group: 'Pensamento',
    title: 'Vida de Médico',
    deck: 'Textos que deslocam o olhar do diagnóstico para a experiência de quem cuida, ensina e vive a prática médica.',
    sourceUrl: legacySite + '/vida_medico.htm',
    sections: [
      {
        title: 'Profissão e experiência',
        body: 'O acervo reserva um espaço para reflexões sobre a vida profissional, suas tensões e sua dimensão humana. Na nova arquitetura, esse material fica próximo de História da Medicina e Psicologia Médica.'
      }
    ]
  },
  cursos: {
    slug: 'cursos-e-palestras',
    group: 'Acervo',
    title: 'Cursos & Palestras',
    deck: 'Programações e temas formativos preservados como arquivo histórico, sem sugerir que turmas antigas ainda estejam abertas.',
    sourceUrl: legacySite + '/CURSOS.HTM',
    historical: true,
    items: [
      'Transtorno do Pânico — o que é e o que fazer',
      'Estresse Pós-Traumático',
      'Timidez e Fobia',
      'Ansiedade',
      'Hiperatividade (TDAH)',
      'TOC — Transtorno obsessivo-compulsivo',
      'Autismo',
      'Psicologia Hospitalar',
      'O Mapa dos Remédios',
      'Psiquiatria e Psicanálise — Pontes e Abismos',
      'O Mapa da Loucura — Triagem em Saúde Mental'
    ],
    sections: [
      {
        title: 'Arquivo de formação',
        body: 'O site original reúne cursos e palestras de diferentes períodos, incluindo programação de 2020. A nova versão trata esse material como registro de temas e trajetória formativa; datas, inscrições e contatos devem ser confirmados antes de qualquer divulgação atual.'
      }
    ]
  },
  cid10: {
    slug: 'cid-10',
    group: 'Acervo',
    title: 'CID-10 — índice histórico',
    deck: 'Um atalho de consulta para a classificação de transtornos mentais presente no acervo original.',
    sourceUrl: legacySite + '/CID10.html',
    historical: true,
    codeGroups: [
      ['F00–F09', 'Transtornos mentais orgânicos, inclusive sintomáticos'],
      ['F20', 'Esquizofrenia'],
      ['F32', 'Episódios depressivos'],
      ['F33', 'Transtorno depressivo recorrente'],
      ['F40', 'Transtornos fóbico-ansiosos'],
      ['F41', 'Outros transtornos ansiosos']
    ],
    sections: [
      {
        title: 'Referência, não diagnóstico',
        body: 'A página original funciona como índice de códigos e categorias. Ela é preservada como referência histórica do acervo, mas classificação diagnóstica exige contexto clínico e versões oficiais atualizadas.'
      }
    ],
    note: 'Use fontes oficiais e atualizadas para codificação clínica.'
  },
  objetivos: {
    slug: 'objetivos',
    group: 'Sobre',
    title: 'Objetivos do projeto',
    deck: 'O propósito histórico do Mapa da Mente continua sendo a base da nova versão.',
    sourceUrl: legacySite + '/objetivo_site.htm',
    objectives: [
      'Oferecer informações atualizadas e em linguagem clara sobre saúde mental.',
      'Facilitar o acesso de pacientes aos serviços de saúde mental.',
      'Promover o trabalho de profissionais da área.',
      'Orientar pais e professores sobre estratégias educacionais.',
      'Facilitar a relação entre pacientes, familiares e profissionais.',
      'Difundir estratégias de inclusão social.',
      'Articular psiquiatria e psicanálise em um modelo de atendimento clínico.'
    ],
    sections: [
      {
        title: 'O que muda na nova versão',
        body: 'A missão permanece; o que muda é a forma de chegar ao conteúdo. A nova arquitetura organiza o acervo por temas, pensamento, formação e atendimento, com leitura responsiva, busca e sinalização de materiais históricos.'
      }
    ]
  },
  coordenador: {
    slug: 'coordenador',
    group: 'Sobre',
    title: 'Alfredo Simonetti',
    deck: 'Coordenador histórico do Mapa da Mente, apresentado no site original como médico psiquiatra, psicanalista e psicólogo clínico e hospitalar.',
    sourceUrl: legacySite + '/coordenadores.htm',
    image: assets.alfredo,
    historical: true,
    sections: [
      {
        title: 'Trajetória apresentada no acervo',
        body: 'O perfil histórico reúne atuação em psiquiatria, psicologia hospitalar, psicanálise, ensino e pesquisa, além da coordenação do próprio Mapa da Mente. O site original também registra vínculos com AMBAN/HC-FMUSP, NEPPHO, PUC-SP e UNIFESP em diferentes momentos.'
      },
      {
        title: 'Livros citados no perfil',
        body: 'Entre as obras listadas estão Manual de Psicologia Hospitalar, Nó e o Laço e Psicologia Hospitalar e Psicanálise. Vínculos institucionais, títulos e dados profissionais devem ser confirmados pelo responsável antes da versão definitiva.'
      }
    ],
    note: 'Perfil histórico do site original; revisar vínculos e dados atuais com o coordenador.'
  },
  consultas: {
    slug: 'consultas',
    group: 'Atendimento',
    title: 'Consultas',
    deck: 'Informações de contato para atendimento associadas ao coordenador do site original.',
    sourceUrl: legacySite + '/consultas.html',
    historical: true,
    contact: {
      address: 'Rua Augusta, 2.676 — conj. 184 — Jardim América — São Paulo/SP',
      phone: '(11) 3064-3936',
      whatsapp: '(11) 94553-5858'
    },
    sections: [
      {
        title: 'Antes de marcar',
        body: 'Os dados acima vêm do site legado. Como telefone, endereço, disponibilidade e valores podem mudar, a nova versão sinaliza que o contato deve ser confirmado diretamente antes de qualquer deslocamento.'
      }
    ],
    note: 'Confirmar endereço, telefones e disponibilidade com o responsável antes da publicação definitiva.'
  },
  indicador: {
    slug: 'indicador-profissional',
    group: 'Atendimento',
    title: 'Indicador Profissional',
    deck: 'Um caminho histórico do site para aproximar usuários de profissionais de saúde mental.',
    sourceUrl: legacySite + '/indicador_prof.htm',
    sections: [
      {
        title: 'Acesso a profissionais',
        body: 'Esta área faz parte do objetivo original de facilitar o encontro entre pacientes, familiares e profissionais. A nova página mantém o caminho do acervo e reserva espaço para uma versão atualizada do indicador.'
      }
    ]
  },
  tratamentoPublico: {
    slug: 'tratamento-publico',
    group: 'Atendimento',
    title: 'Tratamento público',
    deck: 'Referências históricas do acervo para acesso à rede pública de saúde mental.',
    sourceUrl: legacySite + '/mapa_brasil.html',
    historical: true,
    sections: [
      {
        title: 'Lista histórica de serviços',
        body: 'O Mapa da Mente reúne referências de CAPS e outros serviços públicos. Endereços, telefones e cobertura podem mudar; use a lista como ponto de partida histórico e confirme os dados em canais oficiais locais antes de se deslocar.'
      }
    ],
    extraLink: legacySite + '/CAPS_SP.pdf',
    note: 'Os contatos do acervo podem estar desatualizados.'
  },
  faleConosco: {
    slug: 'fale-conosco',
    group: 'Atendimento',
    title: 'Fale conosco',
    deck: 'Canal de contato e dúvidas do projeto, reorganizado como uma saída clara dentro da nova arquitetura.',
    sourceUrl: legacySite + '/fale.htm',
    sections: [
      {
        title: 'Contato do projeto',
        body: 'Enquanto a nova versão não recebe um formulário próprio validado pelo responsável, este caminho preserva o acesso à página de contato do acervo original.'
      }
    ]
  }
};

export const navGroups = [
  {
    label: 'Temas',
    items: ['ansiedade', 'depressao', 'tdah', 'alzheimer', 'remedios', 'obesidade']
  },
  {
    label: 'Pensamento',
    items: ['psicologiaHospitalar', 'psiquiatriaPsicanalise', 'subjetividade', 'psicologiaMedica', 'historiaMedicina', 'vidaMedico']
  },
  {
    label: 'Acervo',
    items: ['cursos', 'cid10']
  },
  {
    label: 'Sobre',
    items: ['objetivos', 'coordenador']
  }
];

export const careItems = ['consultas', 'indicador', 'tratamentoPublico', 'faleConosco'];

export const topicItems = ['ansiedade', 'depressao', 'tdah', 'alzheimer', 'remedios', 'obesidade'];
export const thinkingItems = ['psicologiaHospitalar', 'psiquiatriaPsicanalise', 'subjetividade', 'psicologiaMedica', 'historiaMedicina', 'vidaMedico'];
export const archiveItems = ['cursos', 'cid10'];

export const pageList = Object.values(pages);
