import { useEffect, useId, useState } from "react";
import { PlanetMark } from "./pixel-icons";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="shell nav-bar">
        <a className="brand" href="#inicio" onClick={close}>
          <PlanetMark />
          <span className="brand-text">
            <span className="brand-name pixel">César</span>
            <span className="brand-place">Zacatecas</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-teal" href="#contacto">
            Escribir
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <nav id={menuId} className="nav-mobile" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-teal" href="#contacto" onClick={close}>
            Escribir
          </a>
        </nav>
      )}
    </header>
  );
}
