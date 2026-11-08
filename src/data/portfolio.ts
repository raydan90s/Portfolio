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
  bio: {
    es: 'Estudiante de Ciencias de la Computación en ESPOL, fundador de Alata y CEO de AI BOTS. Construyo apps móviles, agentes de IA y software empresarial sobre AWS.',
    en: 'Computer Science student at ESPOL, founder of Alata and CEO of AI BOTS. I build mobile apps, AI agents and business software on AWS.',
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
      es: 'App de carpooling universitario que conecta a estudiantes conductores y pasajeros en Guayaquil. Dirijo la estrategia de producto y la arquitectura de la app móvil y del backend, desplegado en AWS.',
      en: 'University carpooling app that connects student drivers and passengers in Guayaquil. I lead product strategy and the architecture of the mobile app and backend, deployed on AWS.',
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
      es: 'Doxi: chatbots con IA que atienden, agendan y venden en la web y en WhatsApp, y Doxi Concilia, conciliación bancaria para contadores. Presento las soluciones a colegios y clientes; el Colegio Alemán ya es cliente.',
      en: 'Doxi: AI chatbots that answer, book and sell on the web and WhatsApp, plus Doxi Concilia, bank reconciliation for accountants. I pitch the solutions to schools and clients; the German School is already a client.',
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
      es: 'ERP a medida (SOAC) para la clínica dental Consultorios Arrobo: agenda de citas por doctor, historia clínica y odontograma, inventario y bodegas, contabilidad y facturación electrónica autorizada por el SRI.',
      en: 'Custom ERP (SOAC) for the Consultorios Arrobo dental clinic: per-doctor appointment scheduling, clinical records and dental charts, inventory and warehouses, accounting and SRI-authorized electronic invoicing.',
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Docker', '.NET'],
    color: '#2E2F93', // morado de marca Arrobo
    image: '/fotos/proyectos/arrobo.webp',
    links: [{ label: 'consultoriosarrobo.com', href: 'https://consultoriosarrobo.com' }],
  },
  {
    title: 'Brokeate',
    role: { es: 'Robo-advisor con IA · 1.er lugar hackathon', en: 'AI robo-advisor · Hackathon 1st place' },
    period: { es: '2026', en: '2026' },
    desc: {
      es: 'Robo-advisor con asesor humano en el lazo: el cliente hace un test de riesgo, el sistema arma una propuesta de portafolio y un agente de IA (LangGraph) la explica. App móvil, web y API FastAPI desplegada en AWS.',
      en: 'Robo-advisor with a human advisor in the loop: the client takes a risk test, the system builds a portfolio proposal and an AI agent (LangGraph) explains it. Mobile app, web and FastAPI backend deployed on AWS.',
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
      es: 'Ecuador Tech Week · 18 jul 2026. Premio de $1,000 con Brokeate, robo-advisor con agentes de IA.',
      en: 'Ecuador Tech Week · Jul 18, 2026. $1,000 prize with Brokeate, an AI-agent robo-advisor.',
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
      es: '5 jun 2026. Premio de $500 con una solución de inteligencia artificial.',
      en: 'Jun 5, 2026. $500 prize with an artificial intelligence solution.',
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
    desc: { es: '', en: '' },
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
    desc: { es: 'Apoyo a estudiantes en tareas, laboratorios y resolución de problemas.', en: 'Supported students with coursework, labs and problem-solving.' },
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
