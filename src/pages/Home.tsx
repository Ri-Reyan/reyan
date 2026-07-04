import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certificate from "../sections/Certificate";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="certificate">
        <Certificate />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
