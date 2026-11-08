// Logo de cada tecnología usada en los "tags" de proyectos.
// icon: slug de https://simpleicons.org o ruta local en /public.
// mono: true → toma el color del texto (logos negros que no se verían en modo oscuro).
// Si un tag no está aquí, se muestra solo como texto.

type Tech = { icon: string; mono?: boolean };

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export const tech: Record<string, Tech> = {
  'AWS': { icon: '/icons/aws.svg' },
  'React': { icon: si('react') },
  'React Native': { icon: si('react') },
  'TypeScript': { icon: si('typescript') },
  'Expo': { icon: si('expo'), mono: true },
  'LangGraph': { icon: si('langgraph'), mono: true },
  'FastAPI': { icon: si('fastapi') },
  'Supabase': { icon: si('supabase') },
  'PostgreSQL': { icon: si('postgresql') },
  'PHP': { icon: si('php') },
  'Node.js': { icon: si('nodedotjs') },
  'Python': { icon: si('python') },
  'WhatsApp': { icon: si('whatsapp') },
  'JavaScript': { icon: si('javascript') },
  'Java': { icon: si('openjdk'), mono: true },
  'C': { icon: si('c') },
  'Tailwind CSS': { icon: si('tailwindcss') },
  'Express': { icon: si('express'), mono: true },
  'MySQL': { icon: si('mysql') },
  'n8n': { icon: si('n8n') },
  'Linux': { icon: si('linux'), mono: true },
  'Docker': { icon: si('docker') },
  '.NET': { icon: si('dotnet') },
  'Claude': { icon: si('claude') },
  'IA': { icon: si('claude') },
  'AI': { icon: si('claude') },
  'Chatbots': { icon: '/icons/chatbot.svg', mono: true },
};
