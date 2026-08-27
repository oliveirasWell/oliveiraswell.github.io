// Hand-picked, in display order. Descriptions are written per language so a
// project stays a single unit; only the copy is translated, never the links.
export const projectGroups = [
  {
    id: "experience",
    items: [
      {
        title: "Popmenu for Owners",
        link: "https://apps.apple.com/us/app/popmenu-for-owners/id1491255509",
        tools: ["React Native", "TypeScript", "GraphQL", "REST"],
        description: {
          en: "Mobile app for the US restaurant SaaS Popmenu, letting owners run their digital presence on the go: live menu edits, orders, reviews, analytics and marketing campaigns. As a senior engineer I shipped user-facing features, cut crashes and latency, and worked with the US product and design teams.",
          pt: "App mobile do Popmenu, SaaS americano para restaurantes, onde o dono gerencia toda a presença digital: edição de cardápio em tempo real, pedidos, avaliações, analytics e campanhas de marketing. Como engenheiro sênior entreguei features, reduzi crashes e latência, e trabalhei com os times de produto e design nos EUA.",
        },
      },
      {
        title: "Nav Dasa",
        link: "https://apps.apple.com/br/app/nav-dasa-exames-e-consultas/id1553834596",
        tools: ["React Native", "React", "TypeScript", "Node.js"],
        description: {
          en: "Mobile health platform for Dasa, the largest diagnostics network in Brazil: telemedicine appointments, exam and vaccine scheduling, and a personal health record. I was one of the lead engineers and automated the App Store and Google Play releases with Fastlane.",
          pt: "Plataforma de saúde mobile da Dasa, a maior rede de diagnósticos do Brasil: teleconsultas, agendamento de exames e vacinas e histórico de saúde. Fui um dos engenheiros líderes e automatizei as publicações na App Store e no Google Play com Fastlane.",
        },
      },
    ],
  },
  {
    id: "projects",
    items: [
      {
        title: "Diário",
        link: "https://github.com/oliveirasWell/diario",
        tools: ["Next.js", "TypeScript", "GraphQL", "Prisma", "MongoDB"],
        description: {
          en: "Teacher dashboard for classes, students, attendance, evaluations, grades and class invitations. A pnpm/Turbo monorepo with a Next.js App Router front end over its own GraphQL API and Google sign-in.",
          pt: "Painel para professores gerenciarem turmas, alunos, presença, avaliações, notas e convites. Monorepo pnpm/Turbo com front-end Next.js App Router sobre a própria API GraphQL e login com Google.",
        },
      },
      {
        title: "Weather Forecast",
        link: "https://dev-pro-weather.vercel.app",
        tools: ["Next.js", "TypeScript", "TanStack Query", "Zod", "Cypress"],
        description: {
          en: "City search with current conditions and a 5-day forecast. Route handlers proxy the provider so the API key stays server-side, and responses are validated with Zod at the adapter boundary.",
          pt: "Busca de cidades com condições atuais e previsão de 5 dias. Route handlers fazem proxy do provedor para a chave da API não vazar ao cliente, e as respostas são validadas com Zod na borda do adaptador.",
        },
      },
      {
        title: "ERC-20 community detection",
        link: "https://github.com/oliveirasWell/mba-ia-big-data-usp-tcc-2024",
        tools: ["PySpark", "GraphFrames", "AWS EMR"],
        description: {
          en: "MBA thesis (USP, 2024) comparing Label Propagation and Louvain on Ethereum token-transfer graphs, from 10k to 10M edges, running on EMR Serverless. The README carries an errata for bugs a later audit found in the published numbers.",
          pt: "TCC do MBA (USP, 2024) comparando Label Propagation e Louvain em grafos de transferências de tokens Ethereum, de 10k a 10M de arestas, rodando em EMR Serverless. O README traz uma errata dos bugs que uma auditoria posterior encontrou nos números publicados.",
        },
      },
      {
        title: "Neural networks — CIFAR-100 and RAG",
        link: "https://github.com/oliveirasWell/ufms-redes-neurais-2025",
        tools: ["Python", "Jupyter"],
        description: {
          en: "Coursework from the neural networks class at UFMS (2025): a multi-head classifier over CIFAR-100 and a retrieval-augmented generation pipeline, written up as notebooks.",
          pt: "Trabalhos da disciplina de redes neurais da UFMS (2025): um classificador multi-head sobre o CIFAR-100 e um pipeline de RAG, documentados em notebooks.",
        },
      },
      {
        title: "Temperature logger for under $5",
        link: "https://github.com/oliveirasWell/firebase-esp8266-dht11-logger",
        tools: ["ESP8266", "DHT11", "Firebase"],
        description: {
          en: "An ESP8266 and a DHT11 sensor streaming temperature and humidity straight into Firebase, so a room can be monitored for the price of a coffee.",
          pt: "Um ESP8266 e um sensor DHT11 enviando temperatura e umidade direto para o Firebase, monitorando um cômodo pelo preço de um café.",
        },
      },
    ],
  },
];
