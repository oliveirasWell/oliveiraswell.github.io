import navDasa from "../utils/assets/nav-dasa.jpg";
import popmenu from "../utils/assets/popmenu.jpg";

// Hand-picked, in display order. Descriptions are written per language so a
// project stays a single unit; only the copy is translated, never the links.
export const projectGroups = [
  {
    id: "experience",
    items: [
      {
        title: "Popmenu for Owners",
        link: "https://apps.apple.com/us/app/popmenu-for-owners/id1491255509",
        image: popmenu,
        tools: ["React Native", "TypeScript", "GraphQL", "REST"],
        description: {
          en: "Mobile app for Popmenu, a SaaS serving thousands of US restaurants, letting owners run their digital presence on the go: live menu edits, orders, reviews, analytics and marketing campaigns. As a senior engineer I shipped user-facing features, cut crashes and latency, and worked with the US product and design teams. Across the platform, I also cut customer onboarding from 4 days to 5 hours with an AI agent pipeline.",
          pt: "App mobile do Popmenu, SaaS que atende milhares de restaurantes nos EUA, onde o dono gerencia toda a presença digital: edição de cardápio em tempo real, pedidos, avaliações, analytics e campanhas de marketing. Como engenheiro sênior entreguei features, reduzi crashes e latência, e trabalhei com os times de produto e design nos EUA. Na plataforma, também reduzi o onboarding de clientes de 4 dias para 5 horas com um pipeline de agentes de IA.",
          es: "App móvil de Popmenu, un SaaS que atiende a miles de restaurantes en EE. UU., donde el dueño del restaurante gestiona toda su presencia digital: edición de menú en tiempo real, pedidos, reseñas, analítica y campañas de marketing. Como ingeniero senior entregué funcionalidades, reduje caídas y latencia, y trabajé con los equipos de producto y diseño en EE. UU. En la plataforma, también reduje el onboarding de clientes de 4 días a 5 horas con un pipeline de agentes de IA.",
          fr: "Application mobile de Popmenu, un SaaS au service de milliers de restaurants américains, où le restaurateur pilote toute sa présence numérique : menu modifiable en direct, commandes, avis, analytique et campagnes marketing. En tant qu'ingénieur senior, j'ai livré des fonctionnalités, réduit les plantages et la latence, et travaillé avec les équipes produit et design aux États-Unis. Sur la plateforme, j'ai aussi ramené l'onboarding des clients de 4 jours à 5 heures grâce à un pipeline d'agents IA.",
        },
      },
      {
        title: "Nav Dasa",
        link: "https://apps.apple.com/br/app/nav-dasa-exames-e-consultas/id1553834596",
        image: navDasa,
        tools: ["React Native", "React", "TypeScript", "Node.js"],
        description: {
          en: "Mobile health platform for Dasa, the largest diagnostics network in Brazil, now serving about 2 million monthly users: telemedicine appointments, exam and vaccine scheduling, and a personal health record. I was deputy technical lead and automated the App Store and Google Play releases with Fastlane.",
          pt: "Plataforma de saúde mobile da Dasa, a maior rede de diagnósticos do Brasil, hoje com cerca de 2 milhões de usuários por mês: teleconsultas, agendamento de exames e vacinas e histórico de saúde. Fui líder técnico adjunto e automatizei as publicações na App Store e no Google Play com Fastlane.",
          es: "Plataforma de salud móvil de Dasa, la mayor red de diagnósticos de Brasil, que hoy atiende a unos 2 millones de usuarios al mes: teleconsultas, agendamiento de exámenes y vacunas e historial de salud. Fui líder técnico adjunto y automaticé las publicaciones en la App Store y en Google Play con Fastlane.",
          fr: "Plateforme de santé mobile de Dasa, le plus grand réseau de diagnostics du Brésil, qui sert aujourd'hui environ 2 millions d'utilisateurs par mois : téléconsultations, prise de rendez-vous pour examens et vaccins, et dossier de santé. J'étais responsable technique adjoint et j'ai automatisé les publications sur l'App Store et Google Play avec Fastlane.",
        },
      },
    ],
  },
  {
    id: "projects",
    items: [
      {
        title: "Remote Engineering Radar",
        link: "https://remote-engineering-radar.vercel.app",
        tools: ["Next.js", "TypeScript", "Prisma", "GitHub Actions"],
        description: {
          en: "Daily overview of remote senior frontend and fullstack roles. Public job boards are ingested once a day, scored with simple heuristics, and linked back to the original posting.",
          pt: "Panorama atualizado todo dia de vagas remotas sênior de frontend e fullstack. Boards públicos são coletados uma vez por dia, pontuados com heurísticas simples e ligados de volta à vaga original.",
          es: "Resumen cotidiano de roles remotos senior de frontend y fullstack. Los tableros públicos se ingieren una vez al día, se puntúan con heurísticas simples y enlazan al anuncio original.",
          fr: "Tour d'horizon quotidien des postes remote senior frontend et fullstack. Les boards publics sont ingérés une fois par jour, scorés avec des heuristiques simples, et reliés à l'offre d'origine.",
        },
      },
      {
        title: "Diário",
        link: "https://github.com/oliveirasWell/diario",
        tools: ["Next.js", "TypeScript", "GraphQL", "Prisma", "MongoDB"],
        description: {
          en: "Teacher dashboard for classes, students, attendance, evaluations, grades and class invitations. A pnpm/Turbo monorepo with a Next.js App Router front end over its own GraphQL API and Google sign-in.",
          pt: "Painel para professores gerenciarem turmas, alunos, presença, avaliações, notas e convites. Monorepo pnpm/Turbo com front-end Next.js App Router sobre a própria API GraphQL e login com Google.",
          es: "Panel para que profesores gestionen clases, alumnos, asistencia, evaluaciones, notas e invitaciones. Monorepo pnpm/Turbo con front-end Next.js App Router sobre su propia API GraphQL e inicio de sesión con Google.",
          fr: "Tableau de bord permettant aux enseignants de gérer classes, élèves, présences, évaluations, notes et invitations. Monorepo pnpm/Turbo avec un front-end Next.js App Router sur sa propre API GraphQL et une connexion Google.",
        },
      },
      {
        title: "Weather Forecast",
        link: "https://dev-pro-weather.vercel.app",
        tools: ["Next.js", "TypeScript", "TanStack Query", "Zod", "Cypress"],
        description: {
          en: "City search with current conditions and a 5-day forecast. Route handlers proxy the provider so the API key stays server-side, and responses are validated with Zod at the adapter boundary.",
          pt: "Busca de cidades com condições atuais e previsão de 5 dias. Route handlers fazem proxy do provedor para a chave da API não vazar ao cliente, e as respostas são validadas com Zod na borda do adaptador.",
          es: "Búsqueda de ciudades con condiciones actuales y pronóstico de 5 días. Los route handlers hacen de proxy del proveedor para que la clave de la API no llegue al cliente, y las respuestas se validan con Zod en el borde del adaptador.",
          fr: "Recherche de villes avec conditions actuelles et prévisions sur 5 jours. Les route handlers servent de proxy au fournisseur pour que la clé d'API ne parte jamais côté client, et les réponses sont validées avec Zod à la frontière de l'adaptateur.",
        },
      },
      {
        title: "ERC-20 community detection",
        link: "https://github.com/oliveirasWell/mba-ia-big-data-usp-tcc-2024",
        tools: ["PySpark", "GraphFrames", "AWS EMR"],
        description: {
          en: "MBA thesis (USP, 2024) comparing Label Propagation and Louvain on Ethereum token-transfer graphs, from 10k to 10M edges, running on EMR Serverless. The README carries an errata for bugs a later audit found in the published numbers.",
          pt: "TCC do MBA (USP, 2024) comparando Label Propagation e Louvain em grafos de transferências de tokens Ethereum, de 10k a 10M de arestas, rodando em EMR Serverless. O README traz uma errata dos bugs que uma auditoria posterior encontrou nos números publicados.",
          es: "Tesis del MBA (USP, 2024) que compara Label Propagation y Louvain en grafos de transferencias de tokens Ethereum, de 10k a 10M de aristas, ejecutados en EMR Serverless. El README incluye una fe de erratas por los fallos que una auditoría posterior encontró en las cifras publicadas.",
          fr: "Mémoire de MBA (USP, 2024) comparant Label Propagation et Louvain sur des graphes de transferts de jetons Ethereum, de 10k à 10M d'arêtes, exécutés sur EMR Serverless. Le README porte un erratum sur les bugs qu'un audit ultérieur a trouvés dans les chiffres publiés.",
        },
      },
      {
        title: "Neural networks — CIFAR-100 and RAG",
        link: "https://github.com/oliveirasWell/ufms-redes-neurais-2025",
        tools: ["Python", "Jupyter"],
        description: {
          en: "Coursework from the neural networks class at UFMS (2025): a multi-head classifier over CIFAR-100 and a retrieval-augmented generation pipeline, written up as notebooks.",
          pt: "Trabalhos da disciplina de redes neurais da UFMS (2025): um classificador multi-head sobre o CIFAR-100 e um pipeline de RAG, documentados em notebooks.",
          es: "Trabajos de la asignatura de redes neuronales de la UFMS (2025): un clasificador multi-head sobre CIFAR-100 y un pipeline de RAG, documentados en notebooks.",
          fr: "Travaux du cours de réseaux de neurones de l'UFMS (2025) : un classifieur multi-tête sur CIFAR-100 et un pipeline RAG, présentés sous forme de notebooks.",
        },
      },
      {
        title: "Temperature logger for under $5",
        link: "https://github.com/oliveirasWell/firebase-esp8266-dht11-logger",
        tools: ["ESP8266", "DHT11", "Firebase"],
        description: {
          en: "An ESP8266 and a DHT11 sensor streaming temperature and humidity straight into Firebase, so a room can be monitored for the price of a coffee.",
          pt: "Um ESP8266 e um sensor DHT11 enviando temperatura e umidade direto para o Firebase, monitorando um cômodo pelo preço de um café.",
          es: "Un ESP8266 y un sensor DHT11 enviando temperatura y humedad directamente a Firebase, monitorizando una habitación por el precio de un café.",
          fr: "Un ESP8266 et un capteur DHT11 qui envoient température et humidité directement dans Firebase, pour surveiller une pièce au prix d'un café.",
        },
      },
    ],
  },
];
