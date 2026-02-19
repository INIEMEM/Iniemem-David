"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Smartphone,
  Server,
  GitBranch,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Download,
  Layers,
  Zap,
  Shield,
  Cpu,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Chaindustry",
    role: "Full Stack Lead Engineer",
    live: "https://app.chaindustry.io/",
    category: "Web Platform",
    problem:
      "Users needed a reliable task-based earning platform, but the existing system lacked scalability, secure payments, and structured task validation.",
    solution:
      "Architected a scalable full-stack platform using Next.js (TSX) and Node.js with MongoDB. Containerized services with Docker and structured deployment pipelines for consistent production releases.",
    impact: [
      "Scaled to active multi-user environment",
      "Reduced deployment time by 45%",
      "Improved system reliability with containerized infra"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Docker",
      "CI/CD"
    ],
    highlight: "Production Web Application"
  },
  {
    id: 2,
    title: "Venier",
    role: "Lead Mobile Engineer",
    category: "Mobile Application",
    problem:
      "Event discovery was fragmented. Users struggled to find nearby events and organizers lacked a structured system to manage ticketing and attendees.",
    solution:
      "Built a cross-platform React Native application enabling geo-based event discovery, secure ticket purchases, and organizer dashboards. Integrated scalable backend services and real-time updates.",
    impact: [
      "Unified attendee & organizer workflows",
      "Cross-platform (iOS & Android)",
      "Secure in-app ticket transactions"
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Payment Integration",
      "Firebase"
    ],
    highlight: "Event Discovery & Ticketing Platform"
  },
  {
    id: 3,
    title: "Brodameko",
    role: "Mobile Systems Architect",
    category: "Multi-Sided Marketplace",
    problem:
      "Car owners faced difficulty finding trusted mechanics and verified spare parts sellers within their area.",
    solution:
      "Engineered a three-role mobile marketplace (Car Owner, Mechanic, Spare Parts Seller) with structured onboarding, service requests, and transactional workflows. Designed modular architecture for role-based access and scalable backend services.",
    impact: [
      "Three-role marketplace architecture",
      "Service booking + product commerce",
      "Modular scalable system design"
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Cloud Hosting",
      "Push Notifications"
    ],
    highlight: "Automotive Service Marketplace"
  }
];


const skills = [
  { name: "React Native", icon: Smartphone, level: 98 },
  { name: "TypeScript", icon: Code2, level: 95 },
  { name: "Node.js", icon: Server, level: 92 },
  { name: "CI/CD & DevOps", icon: GitBranch, level: 90 },
  { name: "Cloud (AWS/Firebase)", icon: Layers, level: 88 },
  { name: "Automation", icon: Zap, level: 85 },
];

const metrics = [
  { value: "99.95", label: "Uptime Achieved", suffix: "%" },
  { value: "52", label: "Sales Growth", suffix: "%" },
  { value: "35", label: "Engagement Boost", suffix: "%" },
  { value: "70", label: "Faster Onboarding", suffix: "%" },
];

const AnimatedCounter = ({ value, suffix }) => (
  <div className="flex flex-col items-center justify-center">
    <span className="text-5xl md:text-7xl font-bold text-white tracking-tight">
      {value}
      <span className="text-indigo-400">{suffix}</span>
    </span>
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`glass-card p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-16 md:mb-24">
    {subtitle && (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-bold text-white tracking-tight"
    >
      {children}
    </motion.h2>
  </div>
);

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0B0F19]">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation - FIXED CONTRAST */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-800/50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-white tracking-tighter"
        >
          ID<span className="text-indigo-400">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {["Work", "Expertise", "Impact", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-400 transition-colors duration-300 text-slate-300"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium text-white transition-all"
        >
          Hire Me <ArrowRight size={14} />
        </motion.a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0F19] flex flex-col items-center justify-center gap-8 md:hidden">
          {["Work", "Expertise", "Impact", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-white hover:text-indigo-400"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <main className="relative z-10">
        {/* HERO - FIXED CONTRAST */}
        <section className="min-h-screen flex flex-col justify-center pt-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for Senior Roles
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
                <span className="text-white block">Engineering</span>
                <span className="text-gradient block mt-2">Mobile Scale.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-8 leading-relaxed">
                I build cross-platform mobile systems that don't break under growth. 
                From React Native architecture to automated DevOps pipelines.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#0B0F19] rounded-full font-semibold flex items-center gap-2 hover:bg-slate-200 transition-colors"
                >
                  View Projects <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800 border border-slate-600 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors"
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>

            {/* Device Mockup */}
            <motion.div
              style={{ y: y1, rotateX, opacity }}
              className="relative h-[600px] hidden lg:flex items-center justify-center perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
              
              <div className="relative w-[320px] h-[650px] bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl overflow-hidden transform rotate-y-12 rotate-z-6 hover:rotate-y-0 hover:rotate-z-0 transition-transform duration-700 ease-out">
                <div className="w-full h-full bg-[#0B0F19] p-6 flex flex-col gap-4 relative overflow-hidden">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 px-2">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2.5 bg-slate-600 rounded-sm" />
                      <div className="w-0.5 h-2.5 bg-slate-600 rounded-sm" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -mr-10 -mt-10" />
                      <div className="text-white font-bold text-lg">Dashboard</div>
                      <div className="text-indigo-100 text-xs mt-1">System Operational</div>
                      <div className="mt-4 flex gap-2">
                        <div className="h-8 w-16 bg-white/20 rounded-lg backdrop-blur-md" />
                        <div className="h-8 w-16 bg-white/20 rounded-lg backdrop-blur-md" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center px-4 gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-indigo-400 rounded-full" />
                          </div>
                          <div className="space-y-2 flex-1">
                            <div className="h-2 w-24 bg-slate-600 rounded-full" />
                            <div className="h-2 w-16 bg-slate-700 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 top-20 bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-xl"
                  >
                    <Zap size={20} className="text-yellow-400" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-8 bottom-32 bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-xl"
                  >
                    <Shield size={20} className="text-green-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-sm"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="rotate-90" size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT - FIXED */}
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0B0F19] relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Strategic Value">
              Systems that scale, <br />
              <span className="text-slate-500">not just code that runs.</span>
            </SectionHeading>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-slate-300 leading-relaxed"
              >
                <p>
                  I don't just write code; I architect ecosystems. With deep expertise in{" "}
                  <span className="text-indigo-400 font-semibold">React Native</span> and{" "}
                  <span className="text-indigo-400 font-semibold">Expo</span>, I build mobile
                  applications that feel native, perform flawlessly, and scale to millions of users.
                </p>
                <p>
                  My background in{" "}
                  <span className="text-purple-400 font-semibold">Full Stack</span> engineering and{" "}
                  <span className="text-purple-400 font-semibold">DevOps</span> means I own the
                  entire lifecycle—from the first line of TypeScript to the CI/CD pipeline
                  deploying to AWS.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  {["React Native", "TypeScript", "Node.js", "Docker", "AWS", "CI/CD"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Mobile Architecture",
                    desc: "Modular, scalable React Native structures.",
                    icon: Smartphone,
                  },
                  {
                    title: "DevOps Automation",
                    desc: "Dockerized environments & automated pipelines.",
                    icon: Cpu,
                  },
                  {
                    title: "Cloud Infrastructure",
                    desc: "AWS & Firebase configurations for scale.",
                    icon: Server,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="glass-card p-6 flex items-start gap-4 group cursor-default hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS - FIXED */}
        <section id="work" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Selected Work">
              Products that moved <br />
              <span className="text-slate-500">the needle.</span>
            </SectionHeading>

            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
                    <div className="relative glass-card p-2 glow-border">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 relative group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-3/4 h-3/4 border border-slate-600 rounded-lg bg-slate-900/90 p-6 flex flex-col gap-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                              <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                                <div className="w-8 h-8 rounded-full bg-slate-700" />
                                <div className="w-20 h-2 bg-slate-600 rounded-full" />
                              </div>
                              <div className="space-y-3">
                                <div className="w-full h-24 bg-slate-800 rounded-lg" />
                                <div className="w-2/3 h-4 bg-slate-700 rounded-full" />
                                <div className="w-1/2 h-4 bg-slate-700 rounded-full" />
                              </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-indigo-400 font-mono text-lg font-bold">0{project.id}</span>
                      <div className="h-px w-12 bg-indigo-500/50" />
                      <span className="text-slate-400 text-sm uppercase tracking-wider font-medium">{project.role}</span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white mb-6">{project.title}</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500" /> Problem
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" /> Solution
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {project?.metrics?.map((metric, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-center">
                          <div className="text-indigo-400 font-bold text-sm">{metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGINEERING DEPTH - FIXED */}
        <section id="expertise" className="py-32 px-6 md:px-12 lg:px-24 bg-[#050811] relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Engineering Depth">
              Beyond the UI Layer
            </SectionHeading>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "CI/CD Mastery",
                  desc: "Automated pipelines using GitHub Actions & Fastlane. Reduced deployment friction by 90%.",
                  icon: GitBranch,
                },
                {
                  title: "Infrastructure as Code",
                  desc: "Dockerized development environments ensuring 'works on my machine' is a thing of the past.",
                  icon: Layers,
                },
                {
                  title: "Performance Optimization",
                  desc: "Profiling React Native bridges, optimizing re-renders, and achieving 60fps consistently.",
                  icon: Zap,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 hover:bg-slate-800/80 transition-colors duration-300 group hover:border-indigo-500/30"
                >
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-bold text-white mb-12 text-center">Technical Proficiency</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
                    <div className="p-2 bg-slate-700 rounded-lg text-slate-300">
                      <skill.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-xs text-slate-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT METRICS - FIXED */}
        <section id="impact" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-indigo-950/20">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-8 glass-card bg-slate-900/90"
                >
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <div className="mt-2 text-slate-400 font-medium">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - FIXED */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0B0F19]">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading subtitle="Social Proof">
              Trusted by Product Teams
            </SectionHeading>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-16 relative mt-12 bg-slate-900/90"
            >
              <div className="text-6xl text-indigo-500/30 absolute top-8 left-8 font-serif">"</div>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed relative z-10 mb-8">
                Iniemem transformed our mobile strategy. He didn't just deliver code; he delivered a 
                robust system that reduced our crash rates to near zero and allowed us to ship features 
                twice as fast.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
                <div className="text-left">
                  <div className="text-white font-bold">Alex Chen</div>
                  <div className="text-slate-400 text-sm">CTO, Glopilot Inc.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA - FIXED */}
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 relative">
          <div className="max-w-5xl mx-auto glass-card p-12 md:p-24 text-center relative overflow-hidden bg-slate-900/90">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to scale your <br />
              <span className="text-gradient">mobile product?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm currently available for senior engineering roles and consulting opportunities. 
              Let's discuss how I can help your team build for the next 100,000 users.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a
                href="mailto:iniemem.david@example.com"
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-colors flex items-center gap-2"
              >
                <Mail size={20} /> Get in Touch
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-slate-800 border border-slate-600 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
              >
                <Download size={20} /> Download CV
              </a>
            </div>

            <div className="flex justify-center gap-8 text-slate-400">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-6 text-center text-slate-500 text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Iniemem David. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind & Framer Motion.</p>
        </footer>
      </main>
    </div>
  );
}