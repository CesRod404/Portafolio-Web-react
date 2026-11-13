import { projects } from "@/data/projects";
import { site } from "@/data/site";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Window } from "./window";

const links = [
  { href: site.github, label: "GitHub", note: "Código", external: true },
  { href: site.linkedin, label: "LinkedIn", note: "Perfil", external: true },
  { href: site.emailHref, label: "Correo", note: site.email, external: false },
  { href: site.cv, label: "Currículum", note: "PDF", external: false, download: true },
];

function initials(title) {
  return title
    .split(" ")
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function ProjectShot({ project }) {
  if (!project.image) {
    return (
      <div className="shot shot-fallback" role="img" aria-label={project.imageAlt || project.title}>
        <span aria-hidden="true">{initials(project.title)}</span>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="shot-btn" aria-label={`Ampliar captura de ${project.title}`}>
          <img
            src={project.image}
            alt={project.imageAlt || `Captura de ${project.title}`}
            width="1200"
            height="750"
            decoding="async"
          />
        </button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="retro-dialog">
        <figure className="lightbox">
          <img
            src={project.image}
            alt={project.imageAlt || `Captura ampliada de ${project.title}`}
          />
          <figcaption>
            <div>
              <DialogTitle className="lightbox-title">{project.title}</DialogTitle>
              <DialogDescription className="lightbox-desc">
                Captura del demo. Se puede abrir el sitio en otra pestaña.
              </DialogDescription>
            </div>
            <div className="lightbox-actions">
              {project.demoUrl && (
                <a className="btn btn-teal" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Demo
                  <span className="sr-only"> de {project.title}, se abre en una pestaña nueva</span>
                </a>
              )}
              <DialogClose className="btn btn-orange">Cerrar</DialogClose>
            </div>
          </figcaption>
        </figure>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  return (
    <section className="band band-teal" id="proyectos">
      <div className="shell projects-layout">
        <Window title="Proyectos">
          <p className="window-intro">
            Trabajos que ya están en línea. Cada uno tiene demo y repositorio.
          </p>
          <ul className="project-grid">
            {projects.map((project) => (
              <li key={project.id}>
                <article className="project-card">
                  <ProjectShot project={project} />
                  <div className="project-body">
                    <p className="project-kind">{project.kind}</p>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    {project.stack?.length > 0 && (
                      <ul className="tags" aria-label={`Tecnologías de ${project.title}`}>
                        {project.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <div className="project-actions">
                      {project.demoUrl && (
                        <a className="btn btn-teal" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Demo
                          <span className="sr-only"> de {project.title}, se abre en una pestaña nueva</span>
                        </a>
                      )}
                      {project.repoUrl && (
                        <a className="btn btn-ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          GitHub
                          <span className="sr-only"> de {project.title}, se abre en una pestaña nueva</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Window>

        <Window title="Enlaces" className="window-cool">
          <ul className="link-list">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(link.download ? { download: true } : {})}
                >
                  <span className="link-label">{link.label}</span>
                  <span className="link-note">{link.note}</span>
                  {link.external && (
                    <span className="sr-only">, se abre en una pestaña nueva</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-orange link-cta" href={site.emailHref}>
            Escríbeme
          </a>
        </Window>
      </div>
    </section>
  );
}
