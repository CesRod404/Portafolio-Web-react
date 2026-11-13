import { BRACKETS, PERSON, PHONE, PixelIcon, SMILEY, STORE } from "./pixel-icons";

const MESSAGE =
  "Sitios para cafés, restaurantes y tiendas   ·   Software a la medida   ·   Boletos para eventos   ·   Mantenimiento   ·   Hecho en Zacatecas   ·   ";

const notes = [
  {
    art: STORE,
    title: "Negocio local",
    text: "Cafés, restaurantes y tiendas",
  },
  {
    art: BRACKETS,
    title: "A la medida",
    text: "Sistemas para operar de verdad",
  },
  {
    art: PHONE,
    title: "En el celular",
    text: "Se lee bien en pantalla chica",
  },
  {
    art: PERSON,
    title: "Persona real",
    text: "El soporte lo doy yo",
  },
];

export function HelloStrip() {
  return (
    <>
      <div className="ticker" role="region" aria-label="Lo que puedo armar">
        <p className="sr-only">{MESSAGE}</p>
        <div className="ticker-track" aria-hidden="true">
          <span>{MESSAGE}</span>
          <span>{MESSAGE}</span>
        </div>
      </div>

      <section className="band band-orange hello" aria-label="Presentación">
        <div className="shell hello-inner">
          <div className="hello-hi">
            <PixelIcon art={SMILEY} className="hello-face" />
            <p className="pixel hello-word">Hola</p>
          </div>
          <p className="hello-copy">
            Páginas claras para que tu negocio se encuentre y se entienda.
            Si la operación pide más, armo el sistema.
          </p>
          <ul className="hello-notes">
            {notes.map((note) => (
              <li key={note.title}>
                <PixelIcon art={note.art} />
                <strong>{note.title}</strong>
                <span>{note.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
