// Last role, kept as a link because the bio still refers to it.
export const company = {
  name: "BairesDev",
  link: "https://www.bairesdev.com/",
};

// The ?month= param Calendly hands out pins the widget to one month, which
// would age into the past; the bare event URL always opens on today.
export const resume = "/docs/resume.pdf";

export const calendly = "https://calendly.com/well-oliveira-snt/nova-reuniao";

export const content = {
  en: {
    roles: [
      "Senior Software Engineer",
      "Computer Engineer",
      "MSc student in Computer Science",
    ],
    intro:
      "Hi there \u2014 I build mobile and full-stack products, lately with React Native, TypeScript and Ruby on Rails.",
    experience:
      "For five years at {company} I worked on a hospitality app for iOS and Android \u2014 online ordering, payments, reservations \u2014 plus the Rails and GraphQL behind it and the LLM-powered features on top. Along the way I ran more than 300 technical interviews and co-designed the scorecards behind them.",
    background:
      "Before that I led a squad at TecSinapse, where we shipped Brazil's first offline PWA, and built a health app at Dextra that serves around 10,000 people. Computer engineer from UFMS, MBA in Artificial Intelligence from USP, currently an MSc student in Computer Science.",
    interestsIntro: "My current interests are",
    conjunction: "and",
    interests: [
      "AI agents",
      "LLM applications",
      "Code quality",
      "Environment automation",
    ],
    interestsOutro:
      "from scripts that start apps on boot to residential automation.",
    contact: "Send me an",
    contactLink: "e-mail",
    contactOr: "or",
    bookCall: "book a call here",
    resumeText: "You can also read my",
    resumeLink: "resume",
    projectGroups: {
      experience: "Experience",
      projects: "Projects",
    },
    linksTitle: "Links",
    linkGroups: {
      projects: "Guides & profiles",
      studies: "Studies",
      writing: "Writing",
    },
    switchLabel: "Ver em português",
    switchText: "PT",
  },
  pt: {
    roles: [
      "Engenheiro de Software Sênior",
      "Engenheiro de Computação",
      "Mestrando em Ciência da Computação",
    ],
    intro:
      "Olá \u2014 construo produtos mobile e full-stack, ultimamente com React Native, TypeScript e Ruby on Rails.",
    experience:
      "Por cinco anos na {company} trabalhei num app de hospitalidade para iOS e Android \u2014 pedidos online, pagamentos, reservas \u2014 além do Rails e GraphQL por trás e das funcionalidades com LLM em cima. No caminho, conduzi mais de 300 entrevistas técnicas e ajudei a desenhar os scorecards de avaliação.",
    background:
      "Antes disso liderei um squad na TecSinapse, onde entregamos o primeiro PWA offline do Brasil, e construí na Dextra um app de saúde que atende cerca de 10 mil pessoas. Engenheiro de computação pela UFMS, MBA em Inteligência Artificial pela USP e atualmente mestrando em Ciência da Computação.",
    interestsIntro: "Meus interesses atuais são",
    conjunction: "e",
    interests: [
      "Agentes de IA",
      "Aplicações com LLM",
      "Qualidade de código",
      "Automação de ambientes",
    ],
    interestsOutro:
      "de scripts que iniciam apps no boot à automação residencial.",
    contact: "Me manda um",
    contactLink: "e-mail",
    contactOr: "ou",
    bookCall: "agende uma call aqui",
    resumeText: "Você também pode ler meu",
    resumeLink: "currículo",
    projectGroups: {
      experience: "Experiência",
      projects: "Projetos",
    },
    linksTitle: "Links",
    linkGroups: {
      projects: "Guias e perfis",
      studies: "Estudos",
      writing: "Publicações",
    },
    switchLabel: "View in English",
    switchText: "EN",
  },
};
