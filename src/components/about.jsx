export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Sobre mí</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Soy un <span className="text-foreground font-medium">Full Stack Developer Junior</span> con
              experiencia en desarrollo web utilizando tecnologías modernas. Mi enfoque está en crear
              soluciones <span className="text-primary">funcionales, escalables y bien estructuradas</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              He desarrollado proyectos como e-commerce, sistemas CRUD y aplicaciones conectadas a APIs REST.
              Me apasiona la resolución de problemas y el aprendizaje constante de nuevas tecnologías.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Actualmente busco oportunidades para crecer profesionalmente y aportar valor a equipos de
              desarrollo que trabajen con tecnologías de vanguardia.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-card rounded-lg border border-border overflow-hidden group">
              <div className="absolute inset-0 bg-transparent group-hover:bg-primary/20 transition-colors duration-300" />
              <img src="../public/MiCarita.png" alt="Foto mia jeje" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
