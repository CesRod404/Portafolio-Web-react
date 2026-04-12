import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: "E-commerce de Ropa Infantil",
    description:
      "Aplicación web Full Stack para la venta de ropa infantil con gestión de productos y base de datos. Funcionalidades: catálogo dinámico de productos, carrito de compras, CRUD completo y conexión mediante API REST.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "CSS3"],
    liveUrl: "https://ecommerceropainfantil.web.app",
    githubUrl: "https://github.com/CesRod404",
    image: "../public/MiCarita.png",
  },
  {
    title: "Web Project Around",
    description:
      "Aplicación web responsiva basada en un brief de Figma. Implementa un sistema de tarjetas dinámicas, likes y consumo de API para mostrar contenido dinámico.",
    technologies: ["HTML5", "CSS3", "JavaScript", "APIs"],
    liveUrl: "https://cesrod404.github.io/web_project_around",
    githubUrl: "https://github.com/CesRod404/web_project_around",
    image: "../public/MiCarita.png",
  },
  {
    title: "Maison Dorée - Restaurante Gourmet",
    description:
      "Landing page de restaurante responsiva desarrollada con TypeScript. Enfocada en un diseño visual atractivo y una experiencia de usuario fluida para el sector gastronómico.",
    technologies: ["HTML5", "CSS3", "TypeScript"],
    liveUrl: "https://landingrestaurante.netlify.app",
    githubUrl: "https://github.com/CesRod404",
    image: "../public/MiCarita.png",
  },
  {
    title: "Biblioteca Triple Peaks – Proyecto Web",
    description:
      "Página web responsiva desarrollada como parte del programa de TripleTen a partir de un brief de diseño real. Uso de HTML5 semántico y Flexbox para un diseño profesional.",
    technologies: ["HTML5", "CSS3", "Flexbox"],
    liveUrl: "https://cesrod404.github.io/web_project_library_es/#staff",
    githubUrl: "https://github.com/CesRod404/web_project_library_es",
    image: "../public/MiCarita.png",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Proyectos </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Ver código de ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
