import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">
          {"// Hola, mi nombre es"}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          César Rodríguez
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
          Full Stack Developer
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
          Construyendo aplicaciones web funcionales, escalables y centradas en el usuario.
          Especializado en React, Node.js y bases de datos modernas.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#proyectos">Ver proyectos</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary text-foreground"
          >
            <a href="#contacto">Contactarme</a>
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/cesrodriguezsif"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/CesRod404"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block animate-bounce">
          <a href="#sobre-mi" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
