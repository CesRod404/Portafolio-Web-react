import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { HelloStrip } from "../components/hello-strip";
import { Services } from "../components/services";
import { Projects } from "../components/projects";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <HelloStrip />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
