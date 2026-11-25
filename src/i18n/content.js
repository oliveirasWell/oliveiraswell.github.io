// Employer behind both the current and the previous client role; the bio links it.
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
      "Senior Full Stack Engineer",
      "Computer Engineer",
      "MSc student in Computer Science",
    ],
    availability:
      "Available for remote work · GMT-4, overlapping EST and Pacific hours",
    intro:
      "Hi there — I'm a full-stack developer building web and mobile products with React, Next.js, TypeScript, Node.js, React Native and Ruby on Rails, plus LLM features, RAG and AI agents.",
    experience:
      "Since September 2026 I've been a Senior Full Stack Engineer at Stitch Fix via {company}, working across React/Next.js micro-frontends and Node.js and Rails microservices composed with Apollo Federation. Before that, also through them, I spent five years at Popmenu, a hospitality platform serving thousands of US restaurants: I put LLM-powered features and agentic systems into production with the Claude API and RAG, cut customer onboarding from 4 days to 5 hours with an AI agent pipeline, and delivered ordering, payments and reservations. As a part-time technical interviewer for them from 2022 to 2026, I ran more than 900 interviews for React, React Native, TypeScript and front-end roles and co-designed the evaluation scorecards.",
    background:
      "Earlier, I led a squad at TecSinapse, where back in 2019 we shipped one of Brazil's first offline-first PWAs, and then at Dextra I was deputy technical lead on Dasa Nav, a telemedicine and healthcare platform now serving about 2 million monthly users. Computer Engineering from UFMS (2016), MBA in Artificial Intelligence from USP (2024), currently an MSc student in Computer Science at UFMS (expected 2028).",
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
      "Engenheiro Full Stack Sênior",
      "Engenheiro de Computação",
      "Mestrando em Ciência da Computação",
    ],
    availability:
      "Disponível para trabalho remoto · GMT-4, com sobreposição a EST e Pacific",
    intro:
      "Olá — sou desenvolvedor full-stack, construindo produtos web e mobile com React, Next.js, TypeScript, Node.js, React Native e Ruby on Rails, além de funcionalidades com LLM, RAG e agentes de IA.",
    experience:
      "Desde setembro de 2026 sou Engenheiro Full Stack Sênior na Stitch Fix via {company}, trabalhando com micro-frontends em React/Next.js e microsserviços em Node.js e Rails compostos com Apollo Federation. Antes, também por meio dela, passei cinco anos no Popmenu, uma plataforma de hospitalidade que atende milhares de restaurantes nos EUA: coloquei em produção funcionalidades com LLM e sistemas agênticos com a Claude API e RAG, reduzi o onboarding de clientes de 4 dias para 5 horas com um pipeline de agentes de IA e entreguei pedidos, pagamentos e reservas. Como entrevistador técnico em meio período da empresa, de 2022 a 2026, conduzi mais de 900 entrevistas para vagas de React, React Native, TypeScript e front-end e ajudei a desenhar os scorecards de avaliação.",
    background:
      "Mais atrás, liderei um squad na TecSinapse, onde lá em 2019 entregamos um dos primeiros PWAs offline-first do Brasil, e depois, na Dextra, fui líder técnico adjunto no Dasa Nav, uma plataforma de telemedicina e saúde que hoje atende cerca de 2 milhões de usuários por mês. Engenharia de Computação pela UFMS (2016), MBA em Inteligência Artificial pela USP (2024) e atualmente mestrando em Ciência da Computação na UFMS (conclusão prevista para 2028).",
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
      "Ingeniero Full Stack Senior",
      "Ingeniero en Computación",
      "Estudiante de maestría en Ciencias de la Computación",
    ],
    availability:
      "Disponible para trabajo remoto · GMT-4, con solapamiento con EST y Pacific",
    intro:
      "Hola — soy desarrollador full-stack, construyo productos web y móviles con React, Next.js, TypeScript, Node.js, React Native y Ruby on Rails, además de funcionalidades con LLM, RAG y agentes de IA.",
    experience:
      "Desde septiembre de 2026 soy Ingeniero Full Stack Senior en Stitch Fix a través de {company}, trabajando con micro-frontends en React/Next.js y microservicios en Node.js y Rails compuestos con Apollo Federation. Antes, también a través de esa empresa, pasé cinco años en Popmenu, una plataforma de hostelería que atiende a miles de restaurantes en EE. UU.: puse en producción funcionalidades con LLM y sistemas agénticos con la Claude API y RAG, reduje el onboarding de clientes de 4 días a 5 horas con un pipeline de agentes de IA y entregué pedidos, pagos y reservas. Como entrevistador técnico a tiempo parcial de la empresa, de 2022 a 2026, realicé más de 900 entrevistas para puestos de React, React Native, TypeScript y front-end y ayudé a diseñar los scorecards de evaluación.",
    background:
      "Más atrás, lideré un squad en TecSinapse, donde en 2019 lanzamos una de las primeras PWA offline-first de Brasil, y después, en Dextra, fui líder técnico adjunto en Dasa Nav, una plataforma de telemedicina y salud que hoy atiende a unos 2 millones de usuarios al mes. Ingeniería en Computación por la UFMS (2016), MBA en Inteligencia Artificial por la USP (2024) y actualmente estudiante de maestría en Ciencias de la Computación en la UFMS (finalización prevista en 2028).",
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
      "Ingénieur full stack senior",
      "Ingénieur en informatique",
      "Étudiant en master d'informatique",
    ],
    availability:
      "Disponible pour du travail à distance · GMT-4, en chevauchement avec EST et Pacific",
    intro:
      "Bonjour — je suis développeur full-stack, je construis des produits web et mobiles avec React, Next.js, TypeScript, Node.js, React Native et Ruby on Rails, ainsi que des fonctionnalités LLM, du RAG et des agents IA.",
    experience:
      "Depuis septembre 2026, je suis ingénieur full stack senior chez Stitch Fix via {company}, où je travaille sur des micro-frontends React/Next.js et des microservices Node.js et Rails composés avec Apollo Federation. Auparavant, toujours par son intermédiaire, j'ai passé cinq ans chez Popmenu, une plateforme pour la restauration au service de milliers de restaurants américains : j'ai mis en production des fonctionnalités LLM et des systèmes agentiques avec la Claude API et le RAG, ramené l'onboarding des clients de 4 jours à 5 heures grâce à un pipeline d'agents IA, et livré les commandes, les paiements et les réservations. Intervieweur technique à temps partiel pour cette même entreprise de 2022 à 2026, j'ai mené plus de 900 entretiens pour des postes React, React Native, TypeScript et front-end et co-conçu les grilles d'évaluation.",
    background:
      "Plus tôt, j'ai dirigé une équipe chez TecSinapse, où nous avons livré en 2019 l'une des premières PWA offline-first du Brésil, puis, chez Dextra, j'ai été responsable technique adjoint sur Dasa Nav, une plateforme de télémédecine et de santé qui sert aujourd'hui environ 2 millions d'utilisateurs par mois. Ingénieur en informatique (UFMS, 2016), MBA en intelligence artificielle (USP, 2024), actuellement en master d'informatique à l'UFMS (fin prévue en 2028).",
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
