// Dados centralizados do Studio Soul - Guarapuava, PR

export const STUDIO_INFO = {
  name: "Studio Soul",
  tagline: "Instituto de Música • Áudio & Vídeo",
  city: "Guarapuava",
  state: "Paraná",
  address: "Rua Vicente Machado, 1420 - Centro (Próximo à Lagoa das Lágrimas)",
  fullLocation: "Guarapuava - PR, CEP 85010-020",
  phone: "(42) 99824-3310",
  whatsappNumber: "5542998243310", // Número formatado para wa.me
  email: "contato@studiosoulguarapuava.com.br",
  instagram: "@studiosoul_guarapuava",
  instagramUrl: "https://instagram.com",
  youtube: "Studio Soul Produções",
  youtubeUrl: "https://youtube.com",
  openingHours: {
    weekdays: "Segunda a Sexta: 08:30 às 22:00",
    saturday: "Sábado: 08:30 às 18:00",
    nightRehearsal: "Ensaios noturnos após as 22h e domingos/feriados com agendamento prévio"
  },
  producer: {
    name: "André Prado",
    role: "Produtor Musical & Engenheiro de Áudio/Vídeo",
    experience: "+20 anos de experiência",
    photo: "/images/andre-prado.jpg",
    bio: "Com mais de duas décadas dedicadas à produção musical, captação e pós-produção audiovisual em Guarapuava e todo o Paraná. Experiência sólida em múltiplos estilos musicais, arranjos modernos e finalização em padrão streaming e rádio."
  }
};

export const COURSES = [
  {
    id: "violao",
    title: "Violão Popular e Fingerstyle",
    category: "Cordas",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
    description: "Do zero aos ritmos mais tocados, dedilhados, cifras, solos e repertório personalizado ao seu gosto musical.",
    levels: ["Iniciante", "Intermediário", "Avançado"],
    highlights: ["Técnica de palhetada e dedos", "Ritmos brasileiros e pop/rock", "Leitura de tablaturas e cifras", "Prática com metrônomo"]
  },
  {
    id: "guitarra",
    title: "Guitarra Elétrica",
    category: "Cordas",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80",
    description: "Aprenda riffs, licks, escalas pentatônicas, modos gregos, solos, timbragem de pedais e pegada de palco.",
    levels: ["Iniciante", "Intermediário", "Avançado"],
    highlights: ["Rock, Blues, Gospel, Metal, Pop", "Improvisação e técnica de solo", "Setup de pedaleiras e amps no estúdio", "Prática em conjunto"]
  },
  {
    id: "teclado",
    title: "Teclado & Piano",
    category: "Teclas",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=800&q=80",
    description: "Coordenação motora, acordes, harmonias modernas, condução e acompanhamento de bandas e cantores.",
    levels: ["Iniciante", "Intermediário", "Avançado"],
    highlights: ["Harmonia funcional e inversões", "Independência das mãos", "Uso de timbres e sintetizadores", "Repertório clássico e popular"]
  },
  {
    id: "canto",
    title: "Canto & Técnica Vocal",
    category: "Voz",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    description: "Descubra sua voz natural, respiração diafragmática, afinação, potência sem esforço e interpretação cênica.",
    levels: ["Iniciante", "Intermediário", "Avançado"],
    highlights: ["Apoio respiratório e ressonância", "Extensão e alcance de agudos", "Afinação e ritmo", "Gravação da voz para análise em estúdio"]
  },
  {
    id: "bateria",
    title: "Bateria Acústica",
    category: "Percussão",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
    description: "Coordenação motora nos 4 membros, viradas dinâmicas, pegada com metrônomo e sala tratada acusticamente.",
    levels: ["Iniciante", "Intermediário", "Avançado"],
    highlights: ["Grooves de Rock, Pop, Samba, Sertanejo", "Rudimentos essenciais", "Dinâmica e pegada profissional", "Sala equipada com bateria completa"]
  },
  {
    id: "baixo",
    title: "Contrabaixo Elétrico",
    category: "Cordas",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    description: "Seja a fundação de qualquer banda: condução de harmonia, slap, groove, técnica de dedos e palheta.",
    levels: ["Iniciante", "Intermediário", "Avançado"],
    highlights: ["Entrosamento rítmico com a bateria", "Técnicas de Slap e Pizzicato", "Construção de linhas de baixo", "Arranjos modernos"]
  },
  {
    id: "producao",
    title: "Produção Musical & Home Studio",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    description: "Aprenda na prática dentro de uma sala de controle real: DAWs, plug-ins, equalização, compressão e mixagem.",
    levels: ["Iniciante ao Avançado"],
    highlights: ["Captação de microfones", "Trabalho em DAWs profissionais", "Técnicas de mixagem e masterização", "Fluxo de trabalho de mercado"]
  }
];

// Planos de Aulas extraídos fielmente do flyer
export const LESSON_PLANS = [
  {
    name: "Mensal",
    frequency: "1 aula semanal",
    price: 230,
    priceNote: "por mês",
    badge: "Flexibilidade",
    popular: false,
    features: [
      "1 aula por semana (duração de 50 a 60 min)",
      "Atendimento individual ou em dupla",
      "Material didático em PDF e áudios de apoio",
      "Sem carência ou fidelidade contratual longa",
      "Acesso ao estúdio climatizado"
    ]
  },
  {
    name: "Trimestral",
    frequency: "1 aula semanal",
    price: 200,
    priceNote: "por mês",
    badge: "Economia Inteligente",
    popular: false,
    features: [
      "1 aula por semana (duração de 50 a 60 min)",
      "Economia de R$ 90 no período",
      "Metodologia contínua para evolução mais rápida",
      "Acompanhamento e suporte via WhatsApp",
      "Parcelamento no cartão até 10x"
    ]
  },
  {
    name: "Semestral",
    frequency: "1 aula semanal",
    price: 180,
    priceNote: "por mês",
    badge: "Mais Procurado ⭐",
    popular: true,
    features: [
      "1 aula por semana (duração de 50 a 60 min)",
      "Economia de R$ 300 no período",
      "Gravação de uma música teste no estúdio",
      "Participação em audições e apresentações",
      "Parcelamento no cartão até 10x"
    ]
  },
  {
    name: "Anual",
    frequency: "1 aula semanal",
    price: 170,
    priceNote: "por mês",
    badge: "Melhor Custo-Benefício 🏆",
    popular: false,
    features: [
      "1 aula por semana (duração de 50 a 60 min)",
      "Menor valor por mês: economia de R$ 720/ano",
      "Formação musical estruturada e sólida",
      "Desconto especial em horas de estúdio e ensaio",
      "Parcelamento no cartão até 10x"
    ]
  }
];

// Pacotes de Gravação extraídos fielmente do flyer do André Prado
export const RECORDING_PACKAGES = [
  {
    id: "pkg-1",
    name: "Pacote 1 Música",
    songsCount: 1,
    price: 1500,
    priceFormatted: "R$ 1.500,00",
    description: "Ideal para lançar seu primeiro single profissional nas plataformas de streaming.",
    items: [
      "1 produção musical completa",
      "Arranjos exclusivos para o estilo do artista",
      "Captação de voz e instrumentos em alta resolução",
      "Mixagem e Masterização profissional para Spotify, Apple Music e Rádio",
      "Orientação e direção artística por André Prado"
    ],
    popular: false
  },
  {
    id: "pkg-2",
    name: "Pacote 2 Músicas",
    songsCount: 2,
    price: 2600,
    priceFormatted: "R$ 2.600,00",
    description: "Excelente para lançar um single duplo (Lado A / Lado B) ou dois hits consecutivos.",
    items: [
      "2 produções musicais completas",
      "Arranjos musicais personalizados",
      "Mixagem e Masterização refinada",
      "Gravação em sala acusticamente tratada",
      "Economia de R$ 400 em relação a faixas avulsas"
    ],
    popular: true,
    badge: "Melhor Relação Custo/Música"
  },
  {
    id: "pkg-3",
    name: "Pacote 3 Músicas",
    songsCount: 3,
    price: 3000,
    priceFormatted: "R$ 3.000,00",
    description: "Perfeito para o lançamento de um EP completo ou projeto autoral consistente.",
    items: [
      "3 produções musicais completas",
      "Arranjos detalhados para cada faixa",
      "Mixagem e Masterização com consistência sonora de álbum",
      "Direção de André Prado (+20 anos de experiência)",
      "Sai por apenas R$ 1.000,00 por produção completa!"
    ],
    popular: false,
    badge: "Máxima Economia 💎"
  }
];

// Pacotes de Ensaio extraídos fielmente do flyer (Janeiro 2026)
export const REHEARSAL_PACKAGES = [
  {
    number: "1",
    name: "Ensaio Básico",
    price: 50,
    priceFormatted: "R$ 50/h",
    description: "Sala acusticamente tratada com ar condicionado.",
    included: ["Sala climatizada (Ar Condicionado)", "Tratamento acústico de estúdio", "Conexão de energia estabilizada"]
  },
  {
    number: "2",
    name: "Ensaio com Bateria",
    price: 60,
    priceFormatted: "R$ 60/h",
    description: "Sala climatizada com bateria completa montada.",
    included: ["Sala climatizada", "Bateria acústica completa (pratos, pedais e tambores)", "Conforto para bateristas"]
  },
  {
    number: "3",
    name: "Bateria + Caixa de Som",
    price: 70,
    priceFormatted: "R$ 70/h",
    description: "Sala climatizada com bateria e sistema de PA / caixa de som.",
    included: ["Sala climatizada", "Bateria completa", "Caixa de som amplificada para playback/teclado"]
  },
  {
    number: "4",
    name: "Bateria + Caixa + Microfones",
    price: 80,
    priceFormatted: "R$ 80/h",
    description: "Conjunto perfeito para vocalistas e bandas com dinâmica de voz.",
    included: ["Sala climatizada", "Bateria completa", "Caixa de som de alta definição", "Microfones profissionais com pedestais e cabos"]
  },
  {
    number: "5",
    name: "Pacote Completo VIP",
    price: 90,
    priceFormatted: "R$ 90/h",
    description: "Tudo incluso: ar, bateria, PA, microfones e amplificador de guitarra de alta potência.",
    included: ["Sala com ar condicionado", "Bateria completa pronta para tocar", "Caixa de som e P.A.", "Microfones de estúdio", "Amplificador de guitarra dedicado"],
    highlight: true
  }
];

// Amostras de Áudio para o player interativo
export const AUDIO_SAMPLES = [
  {
    id: 1,
    title: "Amor no Sertão (Sertanejo Acústico)",
    artist: "Lucas & Rafael - Prod. Studio Soul",
    genre: "Sertanejo",
    duration: "3:18",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Horizonte Aberto (Pop Rock)",
    artist: "Banda Ecos - Prod. André Prado",
    genre: "Pop Rock",
    duration: "3:42",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Voz & Piano: Dias de Paz",
    artist: "Mariana Souza - Gravado no Studio Soul",
    genre: "Acústico / MPB",
    duration: "2:54",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    title: "Luz na Tempestade (Gospel Contemporâneo)",
    artist: "Pr. Daniel & Coral - Mix & Master Studio Soul",
    genre: "Gospel",
    duration: "4:10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  }
];

// Galeria de Fotos e Vídeos
export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Estúdio & Controle",
    title: "Mesa de Som e Sala de Mixagem",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
    caption: "Ambiente acusticamente isolado e afinado para mixagem e masterização de alta precisão."
  },
  {
    id: 2,
    category: "Gravações",
    title: "Captação de Voz com Microfone Valvulado",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    caption: "Microfonação condensadora para valorizar cada detalhe tímbrico da voz do intérprete."
  },
  {
    id: 3,
    category: "Aulas",
    title: "Aula Prática de Guitarra e Técnica",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
    caption: "Aulas individuais focadas nos objetivos específicos de cada aluno, do iniciante ao virtuoso."
  },
  {
    id: 4,
    category: "Equipamentos",
    title: "Bateria Acústica Profissional",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=80",
    caption: "Kit completo afinado para gravações com microfones dedicados e para ensaios dinâmicos."
  },
  {
    id: 5,
    category: "Aulas",
    title: "Aulas de Teclado e Harmonia Funcional",
    image: "https://images.unsplash.com/photo-1520523839898-507127022830?auto=format&fit=crop&w=900&q=80",
    caption: "Estruturação teórica e prática para acompanhamento musical, arranjos e composições."
  },
  {
    id: 6,
    category: "Gravações",
    title: "Produção de Áudio & Vídeo para Redes e Clipes",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    caption: "Captação de imagem e áudio sincronizados para YouTube, Reels e materiais de divulgação."
  }
];

// Depoimentos de Alunos e Artistas de Guarapuava
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Matheus Silveira",
    role: "Aluno de Guitarra e Produção",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Comecei do zero sem saber segurar uma palheta. Em menos de 6 meses no Studio Soul já consigo tocar as músicas que amo e entender teoria musical de forma descomplicada. O ambiente é acolhedor e muito motivador!",
    tag: "Aulas de Música"
  },
  {
    id: 2,
    name: "Rodrigo & banda Insonia",
    role: "Gravação de Single & Ensaio Semanal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "O André Prado é um gênio da produção. O som da nossa banda foi elevado para outro patamar com os arranjos e a masterização dele. Ensaiar na sala 5 com ar condicionado e amplificador top faz toda a diferença para o nosso entrosamento.",
    tag: "Gravação & Ensaio"
  },
  {
    id: 3,
    name: "Camila Becker",
    role: "Aluna de Canto e Técnica Vocal",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Eu tinha muita vergonha de cantar em público e ficava com a garganta cansada. As técnicas de respiração e a paciência dos professores no Studio Soul destravaram minha voz. Já gravei minha primeira música teste!",
    tag: "Aulas de Canto"
  },
  {
    id: 4,
    name: "Felipe Castilho",
    role: "Cantor Solo Sertanejo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Fechei o pacote de 3 músicas com o André. A qualidade final bate de frente com grandes estúdios de Curitiba e São Paulo, com o conforto de estar aqui em Guarapuava. Vale cada centavo investido na carreira.",
    tag: "Produção Musical"
  }
];

// Perguntas frequentes
export const FAQS = [
  {
    question: "Preciso ter meu próprio instrumento para começar as aulas?",
    answer: "Não é obrigatório! Durante as aulas presenciais no Studio Soul, disponibilizamos os instrumentos (bateria, guitarras, violões, teclados e microfones) para sua prática. Para evolução em casa, nossos professores orientam sobre o melhor instrumento de entrada para adquirir."
  },
  {
    question: "Como funciona a aula experimental?",
    answer: "A aula experimental é uma oportunidade para você conhecer nosso espaço, conversar com o professor sobre seus objetivos e instrumentos preferidos, e vivenciar a metodologia prática sem nenhum custo ou compromisso!"
  },
  {
    question: "Como funciona o agendamento de ensaios?",
    answer: "Os ensaios são reservados por hora através do WhatsApp ou formulário. Dispomos de 5 opções de pacotes de R$ 50 a R$ 90/hora, incluindo sala com ar condicionado, bateria completa, caixas de som e amplificadores. Para horários após as 22h, domingos ou feriados, consulte disponibilidade prévia."
  },
  {
    question: "O estúdio faz gravação de áudio e vídeo juntos?",
    answer: "Sim! Sob a liderança do André Prado (+20 anos de experiência em áudio e vídeo), realizamos produções audiovisuais completas: captação em estúdio, live sessions acústicas, clipes e materiais voltados para lançamentos nas redes e plataformas digitais."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos Pix, Cartão de Crédito (com parcelamento em até 10x para planos de aulas e produções de gravação) e Dinheiro à vista."
  }
];
