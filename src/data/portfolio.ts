// ✏️ Edita aquí tu contenido. Los textos con { es, en } se muestran según el idioma.

export type Lang = 'es' | 'en';
type T = { es: string; en: string };

/** Ícono: slug de https://simpleicons.org o ruta local en /public (ej. '/icons/aws.svg') */
const icon = (slugOrPath: string) =>
  slugOrPath.startsWith('/') ? slugOrPath : `https://cdn.simpleicons.org/${slugOrPath}`;

export const profile = {
  name: 'Diego Parrales',
  role: { es: 'Desarrollador de Software', en: 'Software Developer' } as T,
  location: 'Guayaquil, Ecuador',
  // ==texto== = resaltado con el color de acento · **texto** = resaltado en blanco/negrita
  bio: {
    es: '==Fundador== de **Alata** y ==CEO== de **AI BOTS**. Llevo productos de la idea a producción: **apps móviles**, **agentes de IA** y **software empresarial** sobre AWS. Ganador del **1.er lugar** en una hackathon de agentes de IA. Ciencias de la Computación en ESPOL.',
    en: '==Founder== of **Alata** and ==CEO== of **AI BOTS**. I take products from idea to production: **mobile apps**, **AI agents** and **business software** on AWS. **1st place** winner at an AI agents hackathon. Computer Science at ESPOL.',
  } as T,
  photo: '/fotos/portada.webp',
  email: 'diegoparrales2005@gmail.com',
  cv: { es: '/cv-es.pdf', en: '/cv-es.pdf' } as T, // TODO: subir versión en inglés como /cv-en.pdf
  socials: [
    { label: 'GitHub', href: 'https://github.com/raydan90s', icon: icon('github') },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diego-parrales-409345277/', icon: icon('/icons/linkedin.svg') },
    { label: 'WhatsApp', href: 'https://wa.me/593985763228', icon: icon('whatsapp') },
  ],
  // level: 1–5 (segmentos llenos en la barra)
  languages: [
    { name: { es: 'Español', en: 'Spanish' } as T, level: { es: 'Nativo', en: 'Native' } as T, score: 5 },
    { name: { es: 'Inglés', en: 'English' } as T, level: { es: 'Intermedio-avanzado', en: 'Upper-intermediate' } as T, score: 4 },
  ],
};

// Skills del carrusel: cada lista es una fila (la 2.ª se mueve al revés).
// Los logos salen de src/data/tech.ts (mismo nombre).
export const skillRows = [
  ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', '.NET', 'React', 'React Native', 'Expo', 'Tailwind CSS', 'Node.js'],
  ['AWS', 'Docker', 'Linux', 'Express', 'FastAPI', 'PostgreSQL', 'MySQL', 'Supabase', 'LangGraph', 'Claude', 'n8n'],
];

// Proyectos principales (en este orden). image: ruta en /public. Vacío = placeholder.
export const projects = [
  {
    title: 'Alata',
    role: { es: 'Fundador y CEO', en: 'Founder & CEO' },
    period: { es: '2026 – Actualidad', en: '2026 – Present' },
    desc: {
      es: '**App de carpooling universitario** publicada en **iOS y Android** que conecta a estudiantes conductores y pasajeros verificados de Guayaquil. Dirijo la **estrategia de producto** y la **arquitectura** de la app y del backend en AWS.',
      en: '**University carpooling app** live on **iOS and Android** that connects verified student drivers and passengers in Guayaquil. I lead **product strategy** and the **architecture** of the app and backend on AWS.',
    },
    tags: ['React Native', 'Expo', 'AWS', 'TypeScript'],
    color: '#F1B007', // dorado de marca Alata
    image: '/fotos/proyectos/alata.webp',
    links: [
      { label: 'Web', href: 'https://alata-ec.com' },
      { label: 'App Store', href: 'https://apps.apple.com/app/id6818165556', icon: icon('appstore') },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.alataec.app', icon: icon('googleplay') },
      { label: 'Instagram', href: 'https://www.instagram.com/alata_ec/', icon: icon('instagram') },
    ],
  },
  {
    title: 'AI BOTS',
    role: { es: 'CEO · Colaboración y desarrollo', en: 'CEO · Collaboration & development' },
    period: { es: '2026 – Actualidad', en: '2026 – Present' },
    desc: {
      es: 'Plataforma de **agentes de IA** para negocios. Doxi **atiende, agenda citas y vende** las **24 horas** en la web, WhatsApp, Messenger e Instagram, entrenado con la información de cada empresa y con un panel para gestionar conversaciones, clientes y estadísticas.',
      en: '**AI agents** platform for businesses. Doxi **answers, books appointments and sells** **24/7** on the web, WhatsApp, Messenger and Instagram, trained on each company’s own information, with a dashboard to manage conversations, clients and analytics.',
    },
    tags: ['IA', 'Chatbots', 'WhatsApp', 'AWS'],
    color: '#D72B2B', // rojo de marca AI BOTS
    image: '/fotos/proyectos/aibots.webp',
    links: [
      { label: 'ai-bots.us', href: 'https://ai-bots.us' },
      { label: 'Doxi', href: 'https://doxi.ai-bots.us' },
    ],
  },
  {
    title: 'Consultorio Arrobo',
    role: { es: 'Líder de proyecto · ERP empresarial', en: 'Project lead · Business ERP' },
    period: { es: 'Nov 2025 – Nov 2026', en: 'Nov 2025 – Nov 2026' },
    desc: {
      es: '**ERP a medida** que centraliza toda la operación de la clínica dental Consultorios Arrobo en una sola plataforma: **agenda de citas** por doctor, **historia clínica** con odontograma, inventario y bodegas, contabilidad y **facturación electrónica** autorizada por el SRI. Lideré el proyecto de punta a punta.',
      en: '**Custom ERP** that runs the entire operation of the Consultorios Arrobo dental clinic on a single platform: per-doctor **appointment scheduling**, **clinical records** with dental charts, inventory and warehouses, accounting and SRI-authorized **electronic invoicing**. I led the project end to end.',
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Docker', '.NET'],
    color: '#2E2F93', // morado de marca Arrobo
    image: '/fotos/proyectos/arrobo.webp',
    links: [{ label: 'consultoriosarrobo.com', href: 'https://consultoriosarrobo.com' }],
  },
  {
    title: 'Brokeate',
    role: { es: 'Propuestas de portafolio de inversión con IA · 1.er lugar hackathon', en: 'AI investment portfolio proposals · Hackathon 1st place' },
    period: { es: '2026', en: '2026' },
    desc: {
      es: 'Arma **propuestas de portafolio de inversión** según el perfil de riesgo de cada cliente. Un **agente de IA** explica cada decisión y un **asesor humano** la aprueba.',
      en: 'Builds **investment portfolio proposals** based on each client’s risk profile. An **AI agent** explains every decision and a **human advisor** approves it.',
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'LangGraph', 'Supabase', 'AWS'],
    color: '#22C55E',
    image: '/fotos/proyectos/brokeate.webp',
    links: [
      // La demo (brokeate-web.vercel.app) está caída: su backend responde 502. Volver a ponerla cuando esté arriba.
      { label: 'GitHub', href: 'https://github.com/raydan90s/BROKEATE-APP', icon: icon('github') },
    ],
  },
];

// Otros proyectos (lista compacta debajo de los principales)
export const otherProjects = [
  {
    title: 'Sistema de Delivery',
    desc: { es: 'Gestión de pedidos y delivery de comida.', en: 'Food ordering and delivery management.' },
    tags: ['React', 'TypeScript', 'Supabase'],
    href: 'https://sistema-delivery-seven.vercel.app',
    repo: 'https://github.com/raydan90s/SistemaDelivery',
  },
  {
    title: 'Gestión de Eventos ESPOL',
    desc: { es: 'Publicación e inscripción a eventos con control de aforo en tiempo real.', en: 'Event publishing and sign-ups with real-time capacity control.' },
    tags: ['React', 'PHP', 'PostgreSQL'],
    href: '',
    repo: 'https://github.com/raydan90s/GestionEventosESPOLFrontend-LP',
  },
];

// Logros. image: ruta en /public. Vacío = placeholder con el puesto.
export const achievements = [
  {
    place: { es: '1.er lugar', en: '1st place' },
    rank: '1',
    event: { es: 'Hackathon Agentic Scale by TAWS', en: 'Agentic Scale Hackathon by TAWS' },
    year: '2026',
    desc: {
      es: 'Ecuador Tech Week · 18 jul 2026. Premio de $1,000 con Brokeate, propuestas de portafolio de inversión con agentes de IA.',
      en: 'Ecuador Tech Week · Jul 18, 2026. $1,000 prize with Brokeate, AI-agent investment portfolio proposals.',
    },
    href: 'https://www.instagram.com/p/DcGjKz5lrTw/',
    color: '#d3e97a',
    image: '/fotos/1Lugar.webp',
  },
  {
    place: { es: '3.er lugar', en: '3rd place' },
    rank: '3',
    event: { es: 'HackIAthon 3.ª edición by Viamatica', en: 'HackIAthon 3rd edition by Viamatica' },
    year: '2026',
    desc: {
      es: '5 jun 2026. Premio de $500 con una solución de IA que detecta y advierte posibles fraudes.',
      en: 'Jun 5, 2026. $500 prize with an AI solution that detects and flags potential fraud.',
    }, // TODO: nombre del proyecto presentado
    href: 'https://lnkd.in/p/eVdNAFmp',
    color: '#c98a4b',
    image: '/fotos/3Lugar.webp',
  },
];

export const experience = [
  {
    org: 'DOX S.A.',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    period: { es: 'Mar 2025 – Actualidad', en: 'Mar 2025 – Present' },
    desc: { es: 'Diseño e implemento automatizaciones de procesos para optimizar operaciones de negocio.', en: 'Design and implement process automations to streamline business operations.' },
  },
  {
    org: 'ESPOL',
    role: { es: 'Ayudante de Laboratorio de Computación — FCSH', en: 'Computer Lab Assistant — FCSH' },
    period: { es: 'Oct 2026 – Feb 2027', en: 'Oct 2026 – Feb 2027' },
    desc: {
      es: 'Me encargo de que todos los servicios tecnológicos funcionen correctamente en las áreas a mi cargo.',
      en: 'I make sure all technology services run properly across the areas under my responsibility.',
    },
  },
  {
    org: 'ESPOL',
    role: { es: 'Ayudante — Centro de Transformación Digital e Investigación', en: 'Assistant — Digital Transformation Center & Research' },
    period: { es: 'May 2025 – Ago 2025', en: 'May 2025 – Aug 2025' },
    desc: { es: 'Colaboración en iniciativas de transformación digital e investigación.', en: 'Supported digital transformation and research initiatives.' },
  },
  {
    org: 'ESPOL',
    role: { es: 'Ayudante de Cátedra — Fundamentos de Programación', en: 'Teaching Assistant — Fundamentals of Programming' },
    period: { es: 'Oct 2024 – Ene 2025', en: 'Oct 2024 – Jan 2025' },
    desc: {
      es: 'Apoyo a estudiantes en tareas, laboratorios y resolución de problemas, guiándolos con ejercicios prácticos de programación.',
      en: 'Supported students with coursework, labs and problem-solving, guiding them through hands-on programming exercises.',
    },
  },
];

export const education = [
  {
    org: 'Escuela Superior Politécnica del Litoral (ESPOL)',
    degree: { es: 'Ingeniería en Ciencias de la Computación', en: 'B.S. in Computer Science Engineering' },
    period: { es: 'May 2023 – Actualidad', en: 'May 2023 – Present' },
    note: { es: '', en: '' },
  },
  {
    org: 'Unidad Educativa Fiscal Aguirre Abad',
    degree: { es: 'Bachiller', en: 'High School Diploma' },
    period: { es: '2018 – 2023', en: '2018 – 2023' },
    note: { es: 'Abanderado y Mejor Bachiller · promedio 9.84/10', en: 'Valedictorian & Flag Bearer · GPA 9.84/10' },
  },
];
