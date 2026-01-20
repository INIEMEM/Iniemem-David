// Senior-level single-page React portfolio
// React (JSX) + Tailwind CSS + Framer Motion

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Portfolio from "./Portfolio";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, ease: "easeOut", duration: 0.6 },
  }),
};

export default function App() {
  return (
    <Portfolio/>
  );
}

function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />
    </div>
  );
}

function Section({ eyebrow, title, children }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="uppercase tracking-widest text-sm text-purple-400 mb-3">
          {eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6">
          Building
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Scalable Systems
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10">
          I’m Iniemem David — a senior-minded software engineer focused on
          frontend architecture, DevOps automation, and high-impact product
          delivery.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-medium shadow-lg shadow-purple-900/30 hover:scale-[1.02] transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl border border-white/10 hover:border-purple-500 transition"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-6 mt-12 text-gray-400">
          <Github className="hover:text-white transition" />
          <Linkedin className="hover:text-white transition" />
          <Mail className="hover:text-white transition" />
        </div>
      </motion.div>

      <ArrowDown className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50" />
    </section>
  );
}

function About() {
  return (
    <Section eyebrow="Overview" title="Engineer with Product & Infrastructure DNA">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <p className="text-lg leading-relaxed text-gray-400">
          I design and build systems that scale — technically and operationally.
          My background spans frontend architecture, DevOps automation, and
          developer enablement. I focus on clean abstractions, measurable
          outcomes, and long-term maintainability.
        </p>
        <ul className="space-y-4 text-gray-300">
          <li>• 99.95% production uptime across systems</li>
          <li>• CI/CD pipelines reducing deploy errors by 80%</li>
          <li>• Led teams, mentored engineers, shipped revenue-driving features</li>
        </ul>
      </div>
    </Section>
  );
}

function Skills() {
  const categories = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    Backend: ["Node.js", "Express", "MongoDB", "Firebase"],
    DevOps: ["Docker", "GitHub Actions", "Jenkins", "Nginx", "AWS"],
    Automation: ["PowerShell", "Bash", "CI/CD", "Monitoring"],
  };

  return (
    <Section eyebrow="Expertise" title="Technical Skillset">
      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(categories).map(([group, items]) => (
          <div
            key={group}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold mb-6">{group}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const roles = [
    {
      company: "Chaindustry.io",
      role: "Lead Developer / Blockchain Instructor",
      impact: "Reduced deploy time by 45%, scaled team from 2 → 6",
    },
    {
      company: "Helios Internship Program",
      role: "Mid Software Engineer",
      impact: "Improved team velocity by 30% through process automation",
    },
    {
      company: "BloomZon",
      role: "Frontend & Mobile Developer",
      impact: "Shipped React dashboards and RN apps used by sellers",
    },
  ];

  return (
    <Section eyebrow="Career" title="Experience & Impact">
      <div className="space-y-8">
        {roles.map((r) => (
          <div
            key={r.company}
            className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10"
          >
            <h3 className="text-2xl font-semibold">{r.role}</h3>
            <p className="text-gray-400">{r.company}</p>
            <p className="mt-4 text-gray-300">{r.impact}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      name: "Phenom Web Platform",
      desc: "High-performance Next.js app with CI/CD, Docker, and NGINX.",
      link: "https://test.phenom.ng/",
    },
    {
      name: "Chaindustry App",
      desc: "Containerized MERN + Blockchain platform with automated delivery.",
      link: "#",
    },
    {
      name: "BloomZon Admin",
      desc: "Analytics dashboard with Netlify CI and Firebase backend.",
      link: "https://bright-jalebi-deafaf.netlify.app/",
    },
  ];

  return (
    <Section eyebrow="Work" title="Selected Projects">
      <div id="projects" className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition">
              {p.name}
            </h3>
            <p className="text-gray-400">{p.desc}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  const stats = [
    { label: "Deploy Frequency", value: "Daily" },
    { label: "System Uptime", value: "99.95%" },
    { label: "Sales Growth", value: "52%" },
    { label: "Deploy Errors Reduced", value: "80%" },
  ];

  return (
    <Section eyebrow="Results" title="Impact Metrics">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 text-center"
          >
            <p className="text-4xl font-extrabold mb-2">{s.value}</p>
            <p className="text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section eyebrow="Connect" title="Let’s Build Something">
      <div id="contact" className="max-w-xl">
        <p className="text-gray-400 mb-6">
          Interested in working together or discussing a role? Reach out.
        </p>
        <div className="space-y-2">
          <p>Email: davidiniemem2000@gmail.com</p>
          <p>Location: Akwa Ibom, Nigeria</p>
        </div>
      </div>
    </Section>
  );
}
