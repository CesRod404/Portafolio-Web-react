import { site } from "@/data/site";
import { CrtComputer } from "./crt-computer";
import { FOLDER, HOME, MAIL, PixelIcon, PlanetMark, STORE } from "./pixel-icons";

const shortcuts = [
  { href: "#inicio", label: "Inicio", art: HOME },
  { href: "#servicios", label: "Servicios", art: STORE },
  { href: "#proyectos", label: "Proyectos", art: FOLDER },
  { href: "#contacto", label: "Contacto", art: MAIL },
];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">{site.role} · {site.place}</p>
          <h1 className="hero-title pixel" aria-label={site.name}>
            <span className="line line-orange">César</span>
            <span className="line line-teal">Web</span>
          </h1>
          <p className="hero-name">{site.name}</p>
          <p className="hero-lead">
            Armo páginas para cafés, restaurantes y tiendas, y software cuando
            hace falta algo más que un sitio: boletos de un evento, pedidos o
            un tablero para operar.
          </p>
          <div className="hero-actions">
            <a className="btn btn-teal" href="#proyectos">
              Ver proyectos
            </a>
            <a className="btn btn-orange" href="#contacto">
              Platiquemos
            </a>
          </div>
          <p className="hero-note">
            <PlanetMark className="planet planet-sm" />
            <span>Desde Zacatecas. Hecho para verse bien en el celular.</span>
          </p>
        </div>

        <div className="hero-art">
          <CrtComputer />
          <p className="hero-badge pixel">Listo para tu negocio</p>
        </div>

        <nav className="rail" aria-label="Atajos">
          {shortcuts.map((item) => (
            <a key={item.href} href={item.href}>
              <PixelIcon art={item.art} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
