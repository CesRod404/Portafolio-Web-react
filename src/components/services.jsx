import { BRACKETS, LIFEBUOY, PixelIcon, STORE } from "./pixel-icons";
import { Window } from "./window";

const services = [
  {
    title: "Sitios",
    art: STORE,
    text: "Páginas y landings para cafés, restaurantes y comercios: menú, horarios, fotos y un camino claro para que te escriban o hagan un pedido.",
  },
  {
    title: "Sistemas",
    art: BRACKETS,
    text: "Software web a la medida. Boletos de un evento, órdenes, empresas, empleados o reportes, armados para tu forma de trabajar.",
  },
  {
    title: "Soporte",
    art: LIFEBUOY,
    text: "Después de publicar sigo cerca: cambio textos y fotos, reviso que el sitio siga en línea y corrijo lo que se rompa.",
  },
];

export function Services() {
  return (
    <section className="section" id="servicios" aria-labelledby="servicios-title">
      <div className="shell">
        <h2 id="servicios-title" className="section-title pixel">
          Servicios
        </h2>
        <p className="section-lead">Tres formas de ayudar a un negocio local.</p>
        <div className="service-grid">
          {services.map((service) => (
            <Window key={service.title} title={service.title} level={3} className="service-window">
              <div className="icon-badge">
                <PixelIcon art={service.art} />
              </div>
              <p>{service.text}</p>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
}
