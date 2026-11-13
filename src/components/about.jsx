import { stackUsedInProjects } from "@/data/projects";
import { site } from "@/data/site";
import { Window } from "./window";

const stack = stackUsedInProjects();

export function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="shell">
        <Window title="Sobre mí">
          <div className="about-grid">
            <figure className="portrait">
              <img
                src="/MiCarita.png"
                alt="Retrato de César Neftalí Rodríguez Sifuentes."
                width="396"
                height="396"
              />
              <figcaption>{site.place}</figcaption>
            </figure>
            <div className="about-copy">
              <p>
                Soy {site.name}, {site.role.toLowerCase()} en {site.place}. Me
                gusta dejarle a un negocio una página que se entienda rápido:
                qué vende, dónde está y cómo te hablan.
              </p>
              <p>
                Cuando una página se queda corta, armo el sistema. En este
                sitio hay ejemplos de hospitalidad, un restaurante, un flyer
                con tipos de boleto y un tablero para empresas, exámenes y
                facturación.
              </p>
              <p>Estas herramientas salen de esos proyectos:</p>
              <ul className="tags" aria-label="Herramientas">
                {stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
}
