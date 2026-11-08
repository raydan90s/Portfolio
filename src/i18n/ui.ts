// Textos fijos de la interfaz (títulos, botones, labels) en ambos idiomas.
import type { Lang } from '../data/portfolio';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.work': 'Proyectos',
    'nav.achievements': 'Logros',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'theme.toggle': 'Cambiar tema',
    'lang.switch': 'Switch to English',
    'hero.greeting': 'Hola, soy',
    'hero.cta': 'Contáctame',
    'hero.cv': 'Descargar CV',
    'hero.photo': 'Tu foto aquí',
    'hero.scroll': 'Scroll',
    'skills.title': 'Mis skills principales',
    'projects.title': 'Proyectos destacados',
    'projects.desc': 'Productos que he fundado, liderado y construido.',
    'projects.image': 'Captura del proyecto',
    'projects.more': 'Otros proyectos',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.all': 'Ver todo en GitHub',
    'ach.title1': 'Mis',
    'ach.title2': 'Logros.',
    'ach.desc': 'Hackatones en las que competimos y ganamos construyendo soluciones con IA.',
    'ach.place': 'lugar',
    'exp.title': 'Experiencia',
    'exp.education': 'Educación',
    'exp.languages': 'Idiomas',
    'contact.title': 'Hablemos',
    'contact.desc': '¿Tienes un proyecto o una oportunidad?',
    'contact.copy': 'Copiar',
    'contact.copied': '¡Copiado!',
  },
  en: {
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.achievements': 'Awards',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Cambiar a español',
    'hero.greeting': 'Hi, I am',
    'hero.cta': 'Contact me',
    'hero.cv': 'Download CV',
    'hero.photo': 'Your photo here',
    'hero.scroll': 'Scroll',
    'skills.title': 'My main skills',
    'projects.title': 'Featured projects',
    'projects.desc': 'Products I have founded, led and built.',
    'projects.image': 'Project screenshot',
    'projects.more': 'Other projects',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.all': 'See everything on GitHub',
    'ach.title1': 'My',
    'ach.title2': 'Achievements.',
    'ach.desc': 'Hackathons where we competed and won by building AI solutions.',
    'ach.place': 'place',
    'exp.title': 'Experience',
    'exp.education': 'Education',
    'exp.languages': 'Languages',
    'contact.title': 'Let’s connect',
    'contact.desc': 'Have a project or an opportunity?',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied!',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

/** Idioma actual a partir de Astro.currentLocale */
export const getLang = (locale: string | undefined): Lang => (locale === 'en' ? 'en' : 'es');

/** t('hero.cta') → texto en el idioma actual */
export const useTranslations = (lang: Lang) => (key: UIKey) => ui[lang][key];

/** Elige el idioma de un campo { es, en } del contenido */
export const pick = (v: { es: string; en: string }, lang: Lang) => v[lang];
