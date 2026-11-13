/**
 * Proyectos publicados en el portafolio.
 * El orden del arreglo es el orden en la página.
 *
 * Para sumar uno (FerIA, la app de hackathon, cuando tenga URL en vivo),
 * agrega un objeto. No lo publiques antes de tener demoUrl.
 *
 * Campos: id, title, kind, summary, stack, demoUrl, repoUrl, image, imageAlt.
 * image es opcional: sin captura, la tarjeta muestra las iniciales.
 */

const STACK_ORDER = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "WordPress",
];

export const projects = [
  {
    id: "villa-coco",
    title: "Villa Coco",
    kind: "Hospitalidad",
    summary:
      "Sitio de las villas Lola, Encantada, Coco y Cielo, en Isla Mujeres. Incluye el catálogo, un configurador para combinar dos villas y los servicios de concierge. El contenido puede salir de WordPress.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress"],
    demoUrl: "https://villa-coco.vercel.app",
    repoUrl: "https://github.com/CesRod404/Villa-Coco",
    image: "/projects/villa-coco.jpg",
    imageAlt:
      "Captura del sitio Villa Coco: portada de las villas frente a la costa de Isla Mujeres.",
  },
  {
    id: "la-perla",
    title: "La Perla del Pacífico",
    kind: "Restaurante",
    summary:
      "Landing de un restaurante de mariscos en Zacatecas. Muestra platillos destacados, datos de contacto y un botón para pedir por WhatsApp.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://v0-landing-restaurante-la-perla-del-tau.vercel.app",
    repoUrl:
      "https://github.com/CesRod404/v0-landing-restaurante-la-perla-del-pacifico",
    image: "/projects/la-perla.jpg",
    imageAlt:
      "Captura de la landing La Perla del Pacífico, restaurante de mariscos en Zacatecas.",
  },
  {
    id: "fiesta-neon",
    title: "Fiesta Neón",
    kind: "Eventos",
    summary:
      "Flyer web de un evento: cartel, lineup, horario y tipos de boleto, más una sección de próximos eventos.",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://flayer-fiesta.vercel.app",
    repoUrl: "https://github.com/CesRod404/FlayerFiesta",
    image: "/projects/fiesta-neon.jpg",
    imageAlt:
      "Captura del flyer Fiesta Neón, con el cartel del evento, el horario y los tipos de boleto.",
  },
  {
    id: "servicios-medicos",
    title: "Servicios Médicos Empresariales",
    kind: "Sistema web",
    summary:
      "Sistema para una clínica de salud ocupacional. Administra empresas, órdenes de exámenes, empleados y reportes de facturación, con acceso por roles y datos en Supabase.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    demoUrl: "https://servicios-medicos-empresariales.vercel.app",
    repoUrl: "https://github.com/CesRod404/Servicios-Medicos-Empresariales",
    image: "/projects/servicios-medicos.jpg",
    imageAlt:
      "Captura del sitio de Servicios Médicos Empresariales, con la portada de evaluaciones para empresas.",
  },
];

export function stackUsedInProjects() {
  const used = new Set(projects.flatMap((project) => project.stack));
  const ordered = STACK_ORDER.filter((name) => used.has(name));
  const rest = [...used]
    .filter((name) => !STACK_ORDER.includes(name))
    .sort((a, b) => a.localeCompare(b, "es"));
  return [...ordered, ...rest];
}
