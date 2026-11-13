import { site } from "@/data/site";
import { DOG, PixelIcon } from "./pixel-icons";

export function Contact() {
  return (
    <section className="band band-purple contact" id="contacto" aria-labelledby="contacto-title">
      <div className="shell contact-grid">
        <div>
          <h2 id="contacto-title" className="pixel contact-title">
            Contacto
          </h2>
          <p className="contact-lead">
            ¿Tienes un café, un restaurante o una tienda? Cuéntame qué
            necesitas. Si la idea es un sistema, como boletos para un evento
            o un tablero, también lo armo.
          </p>
          <p className="mail-row">
            <a className="mail-chip" href={site.emailHref}>
              {site.email}
            </a>
            <a className="btn btn-orange" href={site.emailHref}>
              Escribir
            </a>
          </p>
        </div>

        <ul className="contact-links">
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="sr-only">, se abre en una pestaña nueva</span>
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="sr-only">, se abre en una pestaña nueva</span>
            </a>
          </li>
          <li>
            <a href={site.cv} download>
              Currículum
              <span className="sr-only">, archivo PDF</span>
            </a>
          </li>
        </ul>

        <figure className="mascot">
          <PixelIcon art={DOG} className="dog" label="Perro pixelado saludando" />
          <figcaption>
            <span className="pixel mascot-word">Hola</span>
            <span>Gracias por pasarte</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
