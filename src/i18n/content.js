// Last role, kept as a link because the bio still refers to it.
export const company = {
  name: "BairesDev",
  link: "https://www.bairesdev.com/",
};

export const resume = "/docs/resume.pdf";

// The ?month= param Calendly hands out pins the widget to one month, which
// would age into the past; the bare event URL always opens on today.
export const calendly = "https://calendly.com/well-oliveira-snt/nova-reuniao";

// Each language carries the same keys; the switcher labels itself from the
// endonyms in useLanguage.js, so nothing here needs to name another language.
export const content = {
  en: {
    roles: [
      "Senior Software Engineer",
      "Computer Engineer",
      "MSc student in Computer Science",
    ],
    availability:
      "Available for remote work · GMT-4, overlapping EST and Pacific hours",
    intro:
      "Hi there — I build mobile and full-stack products, lately with React Native, TypeScript and Ruby on Rails.",
    experience:
      "For five years at {company} I worked on a hospitality app for iOS and Android — online ordering, payments, reservations — plus the Rails and GraphQL behind it and the LLM-powered features on top. Along the way I ran more than 300 technical interviews and co-designed the scorecards behind them.",
    background:
      "Before that I led a squad at TecSinapse, where back in 2019 we shipped one of Brazil's first offline PWAs, and built a health app at Dextra that serves around 10,000 people. Computer engineer from UFMS, MBA in Artificial Intelligence from USP, currently an MSc student in Computer Science.",
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
  },
  pt: {
    roles: [
      "Engenheiro de Software Sênior",
      "Engenheiro de Computação",
      "Mestrando em Ciência da Computação",
    ],
    availability:
      "Disponível para trabalho remoto · GMT-4, com sobreposição a EST e Pacific",
    intro:
      "Olá — construo produtos mobile e full-stack, ultimamente com React Native, TypeScript e Ruby on Rails.",
    experience:
      "Por cinco anos na {company} trabalhei num app de hospitalidade para iOS e Android — pedidos online, pagamentos, reservas — além do Rails e GraphQL por trás e das funcionalidades com LLM em cima. No caminho, conduzi mais de 300 entrevistas técnicas e ajudei a desenhar os scorecards de avaliação.",
    background:
      "Antes disso liderei um squad na TecSinapse, onde lá em 2019 entregamos um dos primeiros PWAs offline do Brasil, e construí na Dextra um app de saúde que atende cerca de 10 mil pessoas. Engenheiro de computação pela UFMS, MBA em Inteligência Artificial pela USP e atualmente mestrando em Ciência da Computação.",
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
  },
  es: {
    roles: [
      "Ingeniero de Software Senior",
      "Ingeniero en Computación",
      "Estudiante de maestría en Ciencias de la Computación",
    ],
    availability:
      "Disponible para trabajo remoto · GMT-4, con solapamiento con EST y Pacific",
    intro:
      "Hola — construyo productos móviles y full-stack, últimamente con React Native, TypeScript y Ruby on Rails.",
    experience:
      "Durante cinco años en {company} trabajé en una app de hostelería para iOS y Android — pedidos en línea, pagos, reservas — además del Rails y GraphQL por detrás y de las funcionalidades con LLM por encima. En el camino realicé más de 300 entrevistas técnicas y ayudé a diseñar los scorecards de evaluación.",
    background:
      "Antes de eso lideré un squad en TecSinapse, donde en 2019 lanzamos una de las primeras PWA offline de Brasil, y construí en Dextra una app de salud que atiende a unas 10.000 personas. Ingeniero en computación por la UFMS, MBA en Inteligencia Artificial por la USP y actualmente estudiante de maestría en Ciencias de la Computación.",
    interestsIntro: "Mis intereses actuales son",
    conjunction: "y",
    interests: [
      "Agentes de IA",
      "Aplicaciones con LLM",
      "Calidad de código",
      "Automatización de entornos",
    ],
    interestsOutro:
      "desde scripts que arrancan apps al iniciar el sistema hasta domótica.",
    contact: "Mándame un",
    contactLink: "correo",
    contactOr: "o",
    bookCall: "agenda una llamada aquí",
    resumeText: "También puedes leer mi",
    resumeLink: "currículum",
    projectGroups: {
      experience: "Experiencia",
      projects: "Proyectos",
    },
    linksTitle: "Enlaces",
    linkGroups: {
      projects: "Guías y perfiles",
      studies: "Estudios",
      writing: "Publicaciones",
    },
  },
  fr: {
    roles: [
      "Ingénieur logiciel senior",
      "Ingénieur en informatique",
      "Étudiant en master d'informatique",
    ],
    availability:
      "Disponible pour du travail à distance · GMT-4, en chevauchement avec EST et Pacific",
    intro:
      "Bonjour — je construis des produits mobiles et full-stack, dernièrement avec React Native, TypeScript et Ruby on Rails.",
    experience:
      "Pendant cinq ans chez {company}, j'ai travaillé sur une application pour la restauration sur iOS et Android — commandes en ligne, paiements, réservations — ainsi que sur le Rails et le GraphQL derrière et les fonctionnalités LLM par-dessus. En chemin, j'ai mené plus de 300 entretiens techniques et co-conçu les grilles d'évaluation.",
    background:
      "Avant cela, j'ai dirigé une équipe chez TecSinapse, où nous avons livré en 2019 l'une des premières PWA hors ligne du Brésil, et construit chez Dextra une application de santé qui sert environ 10 000 personnes. Ingénieur en informatique (UFMS), MBA en intelligence artificielle (USP), actuellement en master d'informatique.",
    interestsIntro: "Mes centres d'intérêt actuels sont",
    conjunction: "et",
    interests: [
      "Agents IA",
      "Applications LLM",
      "Qualité du code",
      "Automatisation d'environnements",
    ],
    interestsOutro:
      "des scripts qui lancent des applications au démarrage à la domotique.",
    contact: "Envoyez-moi un",
    contactLink: "e-mail",
    contactOr: "ou",
    bookCall: "réservez un appel ici",
    resumeText: "Vous pouvez aussi lire mon",
    resumeLink: "CV",
    projectGroups: {
      experience: "Expérience",
      projects: "Projets",
    },
    linksTitle: "Liens",
    linkGroups: {
      projects: "Guides et profils",
      studies: "Études",
      writing: "Publications",
    },
  },
};
