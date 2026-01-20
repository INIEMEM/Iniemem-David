import React, { useState, useEffect } from 'react';
import Chain from './assets/chain.png'
import Skool from './assets/skool.png'
import Air from './assets/air.png'
import Glob from './assets/glob.png'
import { li, link } from 'framer-motion/client';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrollY > 50 ? 'bg-[#0a0e27]/80 backdrop-blur-md' : 'bg-transparent';

  const skills = [
    {
      title: 'Frontend Architecture',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GraphQL', 'Redux', 'Webpack']
    },
    {
      title: 'Backend & APIs',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST', 'WebSockets', 'Prisma', 'MongoDB']
    },
    {
      title: 'DevOps & Infrastructure',
      tags: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Jenkins', 'Nginx', 'CloudFlare']
    },
    {
      title: 'Automation & Tooling',
      tags: ['CI/CD', 'Monitoring', 'Jest', 'Cypress', 'Performance', 'Security', 'Analytics', 'Logging']
    }
  ];

  const experiences = [
    {
      role: 'Senior Frontend Engineer',
      company: 'Chaindustry',
      period: '2024 - 2025',
      highlight: 'Led design system migration across 10+ product teams',
      achievements: [
        'Reduced component development time by 60% through reusable library',
        'Improved accessibility compliance from 72% to 98% WCAG AA',
        'Established automated visual regression testing pipeline'
      ],
      tech: ['Next JS', 'TypeScript', 'Zustand', 'Figma', 'GitHub Actions']
    },
    {
      role: 'Mobile App Developer',
      company: 'Air Learn',
      period: '2024 - 2025',
      highlight: 'Developed cross-platform mobile app for e-learning platform',
      achievements: [
        'Achieved 4.8-star rating on Play Store with 500+ downloads',
        'Integrated offline content access and progress sync',
        'Implemented push notifications boosting engagement by 30%'
      ],
      tech: ['React-native', 'Native Wind', 'Javascript', 'Axios', 'AWS']
    },
    {
      role: 'Senior Software Engineer',
      company: 'Global Task Funds',
      period: '2022 - 2024',
      highlight: 'Built real-time collaboration features for SaaS platform',
      achievements: [
        'Shipped WebSocket-based live editing with conflict resolution',
        'Optimized bundle size from 2.4MB to 380KB (84% reduction)',
        'Implemented offline-first architecture with IndexedDB sync'
      ],
      tech: ['React', 'Node JS', 'Mongo DB', 'IndexedDB', 'Webpack', 'Docker']
    }
  ];

  const projects = [
    {
      title: 'Design System Platform',
      category: 'Platform',
      description: 'Task based application where users can create and manage tasks efficiently with collaboration features.',
      tech: ['NextJs', 'TypeScript', 'Zustand', 'Framer-motion', 'Tailwind CSS'],
      span: 'md:col-span-2',
      image: Chain,
      link: 'https://app.chaindustry.io'
    },
    {
      title: 'Real-Time Collaboration Engine',
      category: 'Infrastructure',
      description: 'WebSocket-based live editing system with operational transformation and conflict resolution for concurrent users.',
      tech: ['Node.js', 'WebSockets', 'Redis', 'PostgreSQL'],
      span: '',
      image: Air,
      link: 'https://readdy.link/preview/9cabeffa-1bd7-4355-b31e-ee131fb0eaf2/5361066'
    },
    {
      title: 'Performance Monitoring Dashboard',
      category: 'Tooling',
      description: 'Custom observability platform tracking Core Web Vitals, API latency, and error rates across microservices.',
      tech: ['React', 'D3.js', 'Prometheus', 'Grafana'],
      span: '',
      image: Glob,
      link: 'https://readdy.link/preview/0b186241-0af2-4524-8284-512ef6e449c1/5219000'
    },
    {
      title: 'Microservices Migration Framework',
      category: 'Architecture',
      description: 'Zero-downtime migration toolkit that decomposed monolithic Rails app into 12 independent services over 6 months.',
      tech: ['Docker', 'Kubernetes', 'Terraform', 'AWS'],
      span: 'md:col-span-2',
      image: Skool,
      link: 'https://skoolpilot.com.ng'
    },
    {
      title: 'CI/CD Automation Pipeline',
      category: 'DevOps',
      description: 'Automated deployment system enabling 50+ daily releases with integrated testing, security scanning, and rollback capabilities.',
      tech: ['GitHub Actions', 'Docker', 'AWS', 'Terraform'],
      span: 'md:col-span-2',
      image: 'https://readdy.ai/api/search-image?query=Modern%20continuous%20integration%20and%20deployment%20pipeline%20visualization%2C%20automated%20workflow%20diagram%20with%20connected%20stages%2C%20clean%20technical%20illustration%2C%20dark%20navy%20background%2C%20purple%20and%20blue%20gradient%20accents%2C%20professional%20DevOps%20tool%20aesthetic%2C%20geometric%20shapes%20representing%20automation%20processes%2C%20contemporary%20software%20development%20visualization&width=800&height=600&seq=proj5&orientation=landscape'
    }
  ];

  const testimonials = [
    {
      quote: "One of the most technically mature engineers I've worked with. They don't just solve problems—they prevent them. Their architectural decisions saved us months of refactoring down the line.",
      name: 'Sarah Chen',
      title: 'VP of Engineering, TechCorp'
    },
    {
      quote: "What sets them apart is the ability to balance speed with quality. They shipped our design system migration ahead of schedule while maintaining zero production incidents. That's rare.",
      name: 'Michael Rodriguez',
      title: 'CTO, CloudScale Inc'
    },
    {
      quote: "They transformed our deployment process from a weekly ritual to something we do 50 times a day without thinking. The automation they built is still running flawlessly two years later.",
      name: 'Emily Thompson',
      title: 'Head of Product, StartupXYZ'
    },
    {
      quote: "Their code reviews are masterclasses in software design. Every comment teaches something new about performance, maintainability, or edge cases I hadn't considered.",
      name: 'David Park',
      title: 'Senior Engineer, TechCorp'
    }
  ];

  return (
    <div className="relative bg-[#0a0e27] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed top-[-400px] right-[-400px] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-400px] left-[-400px] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-600/10 to-purple-600/10 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
          <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-lg font-bold">P</div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Portfolio</span>
            </div>
            <div className="flex items-center gap-8">
              {['About', 'Work', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
          <div className="max-w-[1280px] w-full">
            <div className="max-w-[900px]">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-8">
                Senior Software Engineer
              </p>
              <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                Building systems that <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">scale and survive</span>
              </h1>
              <p className="text-lg text-white/75 leading-relaxed max-w-[560px] mb-12">
                I architect frontend platforms, automate infrastructure, and ship features that handle millions of requests without waking engineers at 3am.
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => scrollToSection('work')}
                  className="px-8 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
                >
                  View Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 h-14 rounded-full border border-white/20 text-white font-semibold backdrop-blur-sm hover:border-purple-400/50 hover:bg-white/5 transition-all duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-[2px] h-10 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-pulse" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-40 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Systems Thinking
                </p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  I don't just write code—I design systems that outlive the sprint.
                </h2>
                <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                  <p>Over the past decade, I've built platforms that serve millions of users, migrated monoliths to microservices without downtime, and automated deployment pipelines that reduced release cycles from weeks to hours.</p>
                  <p>My approach combines deep technical expertise with product intuition. I don't just implement features—I question requirements, propose alternatives, and ensure every line of code serves a measurable business outcome.</p>
                  <p>Whether it's architecting a design system that scales across 40+ teams, optimizing database queries that cut response times by 75%, or building CI/CD infrastructure that enables 50+ daily deployments, I focus on leverage: small changes with outsized impact.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '99.97%', label: 'Uptime' },
                  { value: '40%', label: 'Faster Deploys' },
                  { value: '12', label: 'Services Migrated' },
                  { value: 'Zero', label: 'Downtime Releases' }
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-purple-400/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-40 px-8">
          <div className="max-w-[1120px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-16">
              Technical Domains
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-6">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, j) => (
                      <span key={j} className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-sm text-white hover:bg-purple-500/20 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-40 px-8">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-20">
              Experience
            </h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 to-blue-400 hidden md:block" />
              <div className="space-y-20">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative md:pl-20">
                    <div className="absolute left-[-7px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border-[3px] border-[#0a0e27] hidden md:block" />
                    <div className="p-8 md:p-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-purple-400/30 hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {exp.role} <span className="text-white/50">@</span> {exp.company}
                      </h3>
                      <p className="text-sm text-white/50 mb-6">{exp.period}</p>
                      <p className="text-lg font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        {exp.highlight}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className="flex items-start gap-3 text-white/70">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, j) => (
                          <span key={j} className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-xs text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="relative py-40 px-8">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-20">
              Selected Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
               <a href={project?.link}> <div key={i} className={`group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-purple-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer ${project.span}`}>
               <div className="relative h-[400px] overflow-hidden">
                 <div className="absolute inset-0 w-full h-full">
                   <img 
                     alt={project.title}
                     className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                     src={project.image}
                   />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/95 via-[#0a0e27]/60 to-transparent group-hover:from-[#0a0e27]/98 transition-all duration-500" />
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                 <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-xs font-semibold text-white mb-4">
                   {project.category}
                 </span>
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
                 <p className="text-white/70 mb-6 line-clamp-2">{project.description}</p>
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.tech.map((tech, j) => (
                     <span key={j} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">
                       {tech}
                     </span>
                   ))}
                 </div>
                 <div className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300">
                   View Details →
                 </div>
               </div>
             </div></a>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="relative py-40 px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
          <div className="relative max-w-[1120px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-16">
              Measured Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '⚡', value: '0.8s', title: 'Page Load Time', subtitle: 'Down from 3.2s' },
                { icon: '🚀', value: '50+', title: 'Daily Deployments', subtitle: 'Automated pipeline' },
                { icon: '🛡️', value: '99.97%', title: 'System Uptime', subtitle: 'Last 12 months' },
                { icon: '📦', value: '84%', title: 'Bundle Size Reduction', subtitle: 'Optimized builds' }
              ].map((metric, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-purple-400/30 hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="text-4xl mb-6">{metric.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    {metric.value}
                  </div>
                  <div className="text-base font-medium text-white mb-2">{metric.title}</div>
                  <div className="text-sm text-white/60">{metric.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-40 px-8">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-16">
              Testimonials
            </h2>
            <div className="relative">
              <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="flex-shrink-0 w-full md:w-[480px] snap-center">
                    <div className="p-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300 h-full">
                      <div className="text-3xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">"</div>
                      <p className="text-lg text-white/80 leading-relaxed italic mb-8">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-base font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-white/50 mt-1">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`transition-all duration-300 rounded-full ${
                      activeTestimonial === i
                        ? 'w-8 h-2 bg-gradient-to-r from-purple-400 to-blue-400'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative min-h-screen flex items-center justify-center px-8 py-40">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-purple-600/15 to-blue-600/15 blur-[150px]" />
          </div>
          <div className="relative max-w-[800px] mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Let's Build
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to ship something great?</h2>
            <p className="text-lg text-white/70 mb-12 max-w-[560px] mx-auto">
              I'm open to senior/lead roles, consulting, or technical advisory opportunities where I can make meaningful impact.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:davidiniemem2000@gmail.com"
                className="px-12 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch
              </a>
              <a href="mailto:davidiniemem2000@gmail.com" className="text-base font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:underline">
              davidiniemem2000@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-16">
              {['GitHub', 'LinkedIn', 'Twitter'].map(platform => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-purple-400/50 hover:bg-white/5 transition-all duration-300"
                  aria-label={platform}
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/8 py-10 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
              <div>© 2025 All rights reserved</div>
              <div className="flex items-center gap-6">
                {['GitHub', 'LinkedIn', 'Twitter'].map(link => (
                  <a key={link} href={`https://${link.toLowerCase()}.com`} className="hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;