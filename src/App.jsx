import { useState } from 'react';
import './index.css';
import heroImage from './assets/hero.png';
import resumeFile from './assets/Amal_MCA.pdf';

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

const allProjects = [
  { 
    title: 'Educhain', 
    subtitle: 'A decentralized certificate validation system using blockchain.', 
    features: ['Smart Contracts', 'Immutable Records', 'Instant Verification'],
    accent: 'from-indigo-600 to-violet-700',
    link: 'https://liveeduchain.vercel.app/'
  },
  { 
    title: 'Movie Sentiment Analysis', 
    subtitle: 'An AI-powered tool to analyze movie reviews and sentiments.', 
    features: ['NLP', 'Sentiment Analysis', 'Machine Learning'],
    accent: 'from-blue-600 to-cyan-500',
    link: 'https://moviesentimentanalaysis.vercel.app/'
  },
  { 
    title: 'Project Beta', 
    subtitle: 'Coming Soon - Next generation analytics dashboard.', 
    accent: 'from-cyan-500 to-blue-700',
    isComingSoon: true
  },
  { 
    title: 'Project Gamma', 
    subtitle: 'Coming Soon - Creative studio experience.', 
    accent: 'from-emerald-500 to-teal-700',
    isComingSoon: true
  },
];

const ProjectCard = ({ project, i }) => (
  <div 
    key={project.title} 
    className={`group relative rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 transition-all duration-500 ease-out flex flex-col h-full ${
      !project.isComingSoon 
        ? 'hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5'
        : ''
    }`}
    style={{ animationDelay: `${i * 150}ms` }}
  >
    <div className={`mb-4 h-48 sm:h-52 rounded-2xl bg-gradient-to-br ${project.accent} shadow-inner shadow-black/10 overflow-hidden relative border border-slate-100 shrink-0`}>
       {!project.isComingSoon && project.link ? (
         <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
           <iframe 
             src={project.link} 
             className="w-[1200px] h-[800px] origin-top-left scale-[0.25] sm:scale-[0.28] pointer-events-none border-none opacity-0 transition-opacity duration-500"
             onLoad={(e) => e.target.classList.remove('opacity-0')}
             title={project.title}
             loading="lazy"
           />
           <a 
             href={project.link} 
             target="_blank" 
             rel="noopener noreferrer"
             className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 z-20"
           >
              <span className="px-5 py-2 rounded-full bg-slate-950 text-white text-xs font-bold shadow-2xl border border-white/10 backdrop-blur-sm">Visit Live Site</span>
           </a>
         </div>
       ) : (
         <>
           {project.isComingSoon && (
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-5 py-2 rounded-full bg-slate-900/50 backdrop-blur-md text-white text-xs font-bold border border-white/20">Coming Soon</span>
             </div>
           )}
         </>
       )}
    </div>
    <h3 className={`text-lg font-bold mb-2 transition-colors ${project.isComingSoon ? 'text-slate-400' : 'text-slate-950 group-hover:text-primary'}`}>
      {project.title}
    </h3>
    <p className="text-slate-600 leading-relaxed text-xs mb-4">{project.subtitle}</p>
    
    {!project.isComingSoon && project.features && (
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.features.map((feature) => (
          <span 
            key={feature} 
            className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-100 uppercase tracking-wider group-hover:border-primary/20 group-hover:text-primary/70 transition-colors"
          >
            {feature}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16 px-2">
          <div className="max-w-xl animate-in fade-in slide-in-from-left duration-1000">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-4">Project</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
              <span className="text-primary">Featured</span> work I’ve built recently.
            </h2>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95 shadow-lg shadow-slate-950/20"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
              {showAll ? 'View Less' : 'View All Projects'}
            </span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>

        <div 
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden transition-all duration-1000 ease-in-out ${
            showAll ? 'max-h-[3000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          {allProjects.slice(3).map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

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
            href={resumeFile}
            download="Amal_Resume.pdf"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-slate-950 shadow-xl transition hover:bg-slate-100 hover:scale-105 active:scale-95 duration-200"
          >
            Download Resume
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
