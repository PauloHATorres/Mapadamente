const mediaBase = import.meta.env.BASE_URL + 'media/';

export const assets = {
  brandArchive: mediaBase + 'hero-mapadamente.webp',
  alfredo: mediaBase + 'alfredo.png'
};

export const pages = {
  ansiedade: {
    slug: 'ansiedade',
    group: 'Temas',
    title: 'Ansiedade e transtorno do pânico',
    deck: 'O acervo aborda o pânico como experiência intensa, seus sinais, o impacto na vida cotidiana e caminhos de tratamento.',
    sections: [
      {
        title: 'Pânico, ansiedade e impacto cotidiano',
        body: 'O conteúdo aborda especialmente o transtorno do pânico: crises súbitas, manifestações físicas e emocionais e o medo de novas crises. O texto também discute como a evitação pode restringir a rotina e os vínculos.'
      },
      {
        title: 'Cuidado e tratamento',
        body: 'O conteúdo destaca que o sofrimento não deve ser minimizado e descreve tratamento combinado, com acompanhamento médico e psicoterapia. O conteúdo deve ser lido como informação educativa e junto a orientação profissional atual.'
      }
    ],
    note: 'Informações gerais para compreensão do tema. Diagnóstico e tratamento exigem avaliação profissional individual.'
  },
  depressao: {
    slug: 'depressao',
    group: 'Temas',
    title: 'Depressão',
    deck: 'Uma narrativa do acervo aproxima biologia, sofrimento psíquico, psiquiatria e psicanálise sem reduzir a experiência humana a uma única explicação.',
    sections: [
      {
        title: 'Uma história para falar de sofrimento',
        body: 'O texto usa a personagem Nina para mostrar como a depressão pode atravessar corpo, tempo, desejo e rotina. A narrativa introduz serotonina, psiquiatria e psicanálise como linguagens diferentes para compreender e tratar o sofrimento.'
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
    deck: 'Conteúdo sobre desatenção, hiperatividade, impacto acadêmico e social e a importância de uma avaliação que considere diferentes contextos.',
    sections: [
      {
        title: 'Avaliação em contexto',
        body: 'O acervo destaca que a avaliação não deve se limitar a um sintoma isolado. O material considera duração, frequência, intensidade, prejuízo funcional e informações vindas de diferentes ambientes, como família e escola.'
      },
      {
        title: 'Impacto além da atenção',
        body: 'O conteúdo também discute dificuldades acadêmicas, relacionais e emocionais associadas ao quadro. Como critérios e recomendações mudam ao longo do tempo, esta versão sinaliza o conteúdo como arquivo e não como protocolo diagnóstico atual.'
      }
    ],
    note: 'Critérios diagnósticos devem ser interpretados por profissionais e confrontados com diretrizes clínicas atuais.'
  },
  alzheimer: {
    slug: 'alzheimer',
    group: 'Temas',
    title: 'Alzheimer',
    deck: 'Entrada do acervo dedicada à doença de Alzheimer e aos transtornos cognitivos, preservada dentro da nova organização editorial.',
    sections: [
      {
        title: 'Acervo temático',
        body: 'A página integra o conjunto de temas clínicos do Mapa da Mente e organiza informações sobre Alzheimer dentro do índice de saúde mental.'
      }
    ]
  },
  remedios: {
    slug: 'remedios',
    group: 'Temas',
    title: 'Remédios psiquiátricos',
    deck: 'Um mapa introdutório do acervo para organizar grandes grupos de psicotrópicos pela função clínica, sem substituir prescrição ou acompanhamento médico.',
    sections: [
      {
        title: 'Organizar para compreender',
        body: 'O conteúdo procura reduzir a sensação de excesso de informação em psicofarmacologia ao agrupar medicamentos em famílias como antidepressivos, estabilizadores do humor, ansiolíticos, antipsicóticos e psicoestimulantes.'
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
    sections: [
      {
        title: 'Uma condição multifatorial',
        body: 'O conteúdo apresenta a obesidade como fenômeno que envolve fatores biológicos, comportamentais, sociais e psicológicos. Também chama atenção para estigma, qualidade de vida e sofrimento emocional.'
      },
      {
        title: 'Material que precisa de atualização clínica',
        body: 'A página reúne aspectos médicos, psicológicos e terapêuticos relacionados à obesidade. Indicações e critérios clínicos devem ser individualizados e confirmados com profissionais e diretrizes atuais.'
      }
    ],
    note: 'Informações clínicas e critérios terapêuticos desta página devem ser conferidos em fontes médicas atuais.'
  },
  psicologiaHospitalar: {
    slug: 'psicologia-hospitalar',
    group: 'Pensamento',
    title: 'Psicologia Hospitalar',
    deck: 'Um dos núcleos mais fortes do projeto: compreender e tratar os aspectos psicológicos que atravessam a experiência do adoecimento.',
    sections: [
      {
        title: 'Adoecer também reorganiza a vida',
        body: 'No acervo do Mapa da Mente, Psicologia Hospitalar não se restringe a doenças de origem psicológica. O foco está na experiência subjetiva que acompanha qualquer adoecimento e no modo como a pessoa precisa reconstruir sentidos, vínculos e posição diante da doença.'
      },
      {
        title: 'A palavra como instrumento clínico',
        body: 'O texto apresenta a escuta e a conversa clínica como ferramentas centrais do psicólogo hospitalar. O objetivo não é substituir a medicina, mas trabalhar a relação do sujeito com o adoecer, o tratamento, a equipe e a própria história.'
      }
    ]
  },
  psiquiatriaPsicanalise: {
    slug: 'psiquiatria-psicanalise',
    group: 'Pensamento',
    title: 'Psiquiatria & Psicanálise',
    deck: 'Um eixo de diálogo do projeto entre diagnóstico, tratamento médico, escuta e construção de sentido.',
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
    quoteContext: 'frase-síntese do ensaio'
  },
  psicologiaMedica: {
    slug: 'psicologia-medica',
    group: 'Pensamento',
    title: 'Psicologia Médica',
    deck: 'Conteúdos do acervo sobre a dimensão psicológica presente na relação entre medicina, paciente, profissional e experiência de adoecer.',
    sections: [
      {
        title: 'Um campo de interface',
        body: 'A Psicologia Médica integra o eixo de pensamento do projeto e se conecta às páginas de Psicologia Hospitalar, Psiquiatria e formação.'
      }
    ]
  },
  historiaMedicina: {
    slug: 'historia-da-medicina',
    group: 'Pensamento',
    title: 'História da Medicina',
    deck: 'Um espaço para olhar a medicina também como construção histórica, cultural e humana.',
    sections: [
      {
        title: 'Contexto para compreender práticas',
        body: 'Esta área integra o eixo de pensamento do projeto, aproximando história, cultura, clínica e modos de compreender saúde e doença.'
      }
    ]
  },
  vidaMedico: {
    slug: 'vida-de-medico',
    group: 'Pensamento',
    title: 'Vida de Médico',
    deck: 'Textos que deslocam o olhar do diagnóstico para a experiência de quem cuida, ensina e vive a prática médica.',
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
    deck: 'Cursos, palestras e temas formativos reunidos em um mesmo espaço.',
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
        body: 'O Mapa da Mente reúne cursos e palestras de diferentes períodos. Programações, datas, inscrições e disponibilidade devem ser confirmadas antes de participar.'
      }
    ]
  },
  cid10: {
    slug: 'cid-10',
    group: 'Acervo',
    title: 'CID-10',
    deck: 'Um atalho de consulta para a classificação de transtornos mentais organizada por códigos e categorias.',
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
        body: 'A página funciona como índice de códigos e categorias. Classificação diagnóstica exige contexto clínico e consulta a versões oficiais atualizadas.'
      }
    ],
    note: 'Use fontes oficiais e atualizadas para codificação clínica.'
  },
  objetivos: {
    slug: 'objetivos',
    group: 'Sobre',
    title: 'Objetivos do projeto',
    deck: 'Os objetivos do Mapa da Mente orientam toda a organização do projeto.',
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
        title: 'Como o conteúdo se organiza',
        body: 'A arquitetura organiza o conteúdo por temas, pensamento, formação e atendimento, com leitura responsiva e busca para facilitar o acesso.'
      }
    ]
  },
  coordenador: {
    slug: 'coordenador',
    group: 'Sobre',
    title: 'Alfredo Simonetti',
    deck: 'Coordenador do Mapa da Mente, médico psiquiatra, psicanalista e psicólogo clínico e hospitalar.',
    image: assets.alfredo,
    sections: [
      {
        title: 'Trajetória',
        body: 'O perfil reúne atuação em psiquiatria, psicologia hospitalar, psicanálise, ensino e pesquisa, além da coordenação do próprio Mapa da Mente. Sua trajetória inclui vínculos com AMBAN/HC-FMUSP, NEPPHO, PUC-SP e UNIFESP em diferentes momentos.'
      },
      {
        title: 'Livros citados no perfil',
        body: 'Entre as obras listadas estão Manual de Psicologia Hospitalar, Nó e o Laço e Psicologia Hospitalar e Psicanálise. Vínculos institucionais, títulos e dados profissionais devem ser confirmados pelo responsável antes da versão definitiva.'
      }
    ],
    note: 'Informações profissionais podem ser atualizadas diretamente pelo coordenador do projeto.'
  },
  consultas: {
    slug: 'consultas',
    group: 'Atendimento',
    title: 'Consultas',
    deck: 'Informações de contato para atendimento com Alfredo Simonetti.',
    contact: {
      address: 'Rua Augusta, 2.676 — conj. 184 — Jardim América — São Paulo/SP',
      phone: '(11) 3064-3936',
      whatsapp: '(11) 94553-5858'
    },
    sections: [
      {
        title: 'Antes de marcar',
        body: 'Telefone, endereço, disponibilidade e valores podem mudar. Confirme diretamente antes de qualquer deslocamento.'
      }
    ],
    note: 'Confirmar endereço, telefones e disponibilidade com o responsável antes da publicação definitiva.'
  },
  indicador: {
    slug: 'indicador-profissional',
    group: 'Atendimento',
    title: 'Indicador Profissional',
    deck: 'Um caminho para aproximar usuários de profissionais de saúde mental.',
    sections: [
      {
        title: 'Acesso a profissionais',
        body: 'Esta área faz parte do objetivo de facilitar o encontro entre pacientes, familiares e profissionais. A página organiza esse caminho e reserva espaço para ampliar o indicador profissional.'
      }
    ]
  },
  tratamentoPublico: {
    slug: 'tratamento-publico',
    group: 'Atendimento',
    title: 'Tratamento público',
    deck: 'Referências para acesso à rede pública de saúde mental.',
    sections: [
      {
        title: 'Rede de serviços',
        body: 'O Mapa da Mente reúne referências de CAPS e outros serviços públicos. Endereços, telefones e cobertura podem mudar; confirme os dados em canais oficiais locais antes de se deslocar.'
      }
    ],
    extraLink: mediaBase + 'CAPS_SP.pdf',
    note: 'Os contatos do acervo podem estar desatualizados.'
  },
  faleConosco: {
    slug: 'fale-conosco',
    group: 'Atendimento',
    title: 'Fale conosco',
    deck: 'Canal de contato e dúvidas do projeto, reorganizado como uma saída clara dentro da nova arquitetura.',
    sections: [
      {
        title: 'Contato do projeto',
        body: 'Esta área reúne o canal de contato e dúvidas do projeto.'
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
