import { LazyMotion, domAnimation } from 'framer-motion';
import useTheme from './hooks/useTheme';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <LazyMotion features={domAnimation} strict>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  );
}

export default App;
