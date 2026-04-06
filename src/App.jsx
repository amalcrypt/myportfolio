import './index.css';
import heroImage from './assets/hero.png';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/80 shadow-slate-100 shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-slate-900 font-bold text-xl tracking-tight">Amal Binu.</div>
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
      </div>
      <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800">
        Get In Touch
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-8">
    <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.1),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_24%)]" />
    <div className="relative max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center text-center lg:text-left">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <p className="text-slate-500 text-lg md:text-xl mb-4 font-medium italic">Hey, I'm Amal 👋</p>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-slate-950">
          <span className="text-primary">Full</span>stack<br />Developer
        </h1>
        <p className="mt-8 max-w-xl text-slate-600 text-lg leading-relaxed mx-auto lg:mx-0">
          I'm a Full-stack developer focused on crafting high-performance web applications, with a growing expertise in machine learning and AI-driven solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/20 transition hover:bg-slate-800">
            Get In Touch
          </a>
          <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Browse Projects
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-slate-200/80 bg-slate-100 shadow-2xl shadow-slate-900/5 overflow-hidden">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <img src={heroImage} alt="Amal portrait" className="absolute inset-4 rounded-full object-cover w-[calc(100%-32px)] h-[calc(100%-32px)]" />
          <div className="absolute -left-10 top-1/4 h-16 w-16 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm" />
          <div className="absolute right-8 bottom-6 h-24 w-24 rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-sm" />
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16 px-2">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-4">Projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
            <span className="text-primary">Selected</span> works I’ve shipped recently.
          </h2>
        </div>
        <a href="#" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 shadow-sm">
          View All Projects
        </a>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {[
          { title: 'Portfolio UI', subtitle: 'A modern portfolio hero concept for designers.', accent: 'from-violet-600 to-indigo-700' },
          { title: 'Agency Landing', subtitle: 'Clean landing page with subtle motion and hierarchy.', accent: 'from-slate-900 via-slate-700 to-slate-900' },
          { title: 'Product Dashboard', subtitle: 'Analytics dashboard interface with data cards.', accent: 'from-cyan-500 to-blue-700' },
          { title: 'Creative Studio', subtitle: 'Digital experience for a high-end design agency.', accent: 'from-pink-600 to-rose-700' },
        ].map(project => (
          <div key={project.title} className="group rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 hover:border-primary/30 transition-all duration-300">
            <div className={`mb-6 h-64 sm:h-80 rounded-[2rem] bg-gradient-to-br ${project.accent} shadow-inner shadow-black/10 overflow-hidden`}>
               <div className="w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-3">{project.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{project.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 lg:px-8 bg-slate-50 border-y border-slate-200/50">
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-4">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-8 leading-tight">
            <span className="text-primary">I design</span> & build products that people love.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-6 mx-0 text-justify">
            I’m a passionate full-stack developer dedicated to building modern web applications that balance performance, scalability, and great user experience.
            With a strong foundation in both frontend and backend technologies, I focus on crafting clean, efficient solutions that solve real problems. I believe great software is not just about code, it’s about creating meaningful digital experiences.
          </p>
        </div>
        <div className="text-left">
          <div className="rounded-[2.5rem] bg-slate-950 p-10 text-slate-100 shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/30 transition-colors" />
            <h3 className="text-2xl font-bold mb-6 relative z-10 text-white">My Stack.</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Tailwind', 'Python', 'Flask'].map(item => (
                <div key={item} className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const categories = [
    { title: 'Frontend', items: ['Python', 'ReactJS', 'NextJS', 'Tailwind CSS'] },
    { title: 'Backend', items: ['NodeJS', 'MongoDB', 'ExpressJS', 'Flask'] },
    { title: 'Soft Skills', items: ['Communication', 'Collaboration', 'Problem Solving', 'Leadership'] },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-4 text-center">Expertise</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-16 text-center">
          My <span className="text-primary">technical</span> toolbox.
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map(category => (
            <div key={category.title} className="group rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-slate-950 mb-6 group-hover:text-primary transition-colors">{category.title}</h3>
              <ul className="space-y-4 mt-auto">
                {category.items.map(item => (
                  <li key={item} className="text-slate-600 text-sm flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary/50 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto rounded-[3rem] bg-slate-950 p-12 sm:p-20 shadow-2xl shadow-slate-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center relative z-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-6">Contact</p>
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-8">Let’s build something great together.</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            If you have a project, idea, or just want to say hello, I’m always open to new opportunities and interesting conversations.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=amala2627@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-slate-950 shadow-xl transition hover:bg-slate-100 hover:scale-105 active:scale-95 duration-200"
>
  Email Me
</a>
          <div className="text-center lg:text-left px-4">
            <p className="text-slate-400 text-sm font-medium mb-4">Email: amala2627@gmail.com</p>
            <div className="flex justify-center lg:justify-start gap-8 text-slate-400 text-sm font-medium">
              <a href="https://linkedin.com/in/cryptadiar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/amalcrypt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-6 py-16 lg:px-8 bg-white border-t border-slate-100">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
      <div className="text-slate-900 font-bold text-lg tracking-tight">Amal Binu.</div>
      <div className="text-sm text-slate-500 font-medium">
    
        © 2026 Amal Binu. All rights reserved.<br />
         Built with passion in India.
      </div>
      <div className="flex gap-8 text-sm font-semibold text-slate-600">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-primary/20 selection:text-primary text-slate-700">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
