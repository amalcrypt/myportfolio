import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilityMarquee from './components/CapabilityMarquee';
import Projects from './components/Projects';
import About from './components/About';
import Workflow from './components/Workflow';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-700 antialiased selection:bg-primary/20 selection:text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-slate-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <CapabilityMarquee />
        <Projects />
        <About />
        <Workflow />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
