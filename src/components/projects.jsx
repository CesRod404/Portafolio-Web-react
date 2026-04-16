import { ExternalLink, Github, Folder, Maximize2, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const projects = [
  {
    title: "E-commerce de Ropa Infantil",
    description:
      "Aplicación web Full Stack para la venta de ropa infantil con gestión de productos y base de datos. Funcionalidades: catálogo dinámico de productos, carrito de compras, CRUD completo y conexión mediante API REST.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "CSS3"],
    liveUrl: "https://ecommerceropainfantil.web.app",
    githubUrl: "https://github.com/CesRod404",
    image: "../public/ecommerce.png",
  },
  {
    title: "Página de servicios medicos empresariales",
    description:
      "Aplicación web responsiva basada en un brief de Figma. Implementa un sistema de tarjetas dinámicas, likes y consumo de API para mostrar contenido dinámico.",
    technologies: ["HTML5", "CSS3", "JavaScript", "APIs"],
    liveUrl: "https://servicios-medicos-empresariales.vercel.app",
    githubUrl: "https://github.com/CesRod404/web_project_around",
    image: "/serviciosMedicos.png",
  },
  {
    title: "Maison Dorée - Restaurante Gourmet",
    description:
      "Landing page de restaurante responsiva desarrollada con TypeScript. Enfocada en un diseño visual atractivo y una experiencia de usuario fluida para el sector gastronómico.",
    technologies: ["HTML5", "CSS3", "TypeScript"],
    liveUrl: "https://landingrestaurante.netlify.app",
    githubUrl: "https://github.com/CesRod404",
    image: "/restaurant.png",
  },
  {
    title: "Biblioteca Triple Peaks – Proyecto Web",
    description:
      "Página web responsiva desarrollada como parte del programa de TripleTen a partir de un brief de diseño real. Uso de HTML5 semántico y Flexbox para un diseño profesional.",
    technologies: ["HTML5", "CSS3", "Flexbox"],
    liveUrl: "https://cesrod404.github.io/web_project_library_es/#staff",
    githubUrl: "https://github.com/CesRod404/web_project_library_es",
    image: "/biblioteca.png",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Proyectos </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-sm hover:shadow-md"
            >
              {/* Image & Modal */}
              <div className="relative w-full aspect-video bg-muted overflow-hidden shrink-0 border-b border-border/40">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="w-full h-full relative outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset cursor-zoom-in group/image"
                      aria-label={`Expandir imagen de ${project.title}`}
                    >
                      <img
                        src={project.image.replace('../public/', '/')}
                        alt={`Captura del proyecto ${project.title}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/image:scale-105"
                        onError={(e) => {
                          // Fallback en caso de no encontrarse la imagen en /MiCarita.png
                          e.target.src = "https://via.placeholder.com/800x450?text=Proyecto+Sin+Imagen";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize2 className="w-10 h-10 text-white drop-shadow-md" />
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent showCloseButton={false} className="max-w-[95vw] sm:max-w-[90vw] md:max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none z-50 flex justify-center items-center">
                    <DialogTitle className="sr-only">Visualización de {project.title}</DialogTitle>
                    <div className="relative max-w-full max-h-[85vh] rounded-md overflow-hidden bg-black/60 shadow-2xl">
                      <img
                        src={project.image.replace('../public/', '/')}
                        alt={`Vista expandida de ${project.title}`}
                        className="w-full max-h-[85vh] object-contain select-none"
                      />
                      <DialogClose className="absolute top-2 right-2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary z-[60]">
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="sr-only">Cerrar imagen</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex-1 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0 mt-1">
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

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
