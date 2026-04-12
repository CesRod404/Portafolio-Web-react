import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm">04. Contacto</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
          ¿Interesado en trabajar conmigo?
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Estoy abierto a nuevas oportunidades y desafíos. Si tienes un proyecto en mente o
          simplemente quieres conectar, no dudes en contactarme.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground mb-12"
        >
          <a href="mailto:TU_EMAIL_AQUI">
            <Mail className="w-5 h-5 mr-2" />
            Enviar mensaje
          </a>
        </Button>

        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.linkedin.com/in/cesrodriguezsif"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/CesRod404"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="mailto:TU_EMAIL_AQUI"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
