import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="legal">
      <p>
        © {year} {site.name}. Hecho en Zacatecas, con píxeles.
      </p>
      <p className="legal-links">
        <a href={site.emailHref}>Correo</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
          <span className="sr-only">, se abre en una pestaña nueva</span>
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
          <span className="sr-only">, se abre en una pestaña nueva</span>
        </a>
      </p>
    </footer>
  );
}
