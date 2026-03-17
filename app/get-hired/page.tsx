//app/get-hired/page.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload, HiMail, HiMenuAlt3, HiX } from 'react-icons/hi';
import { projectsData } from '@/lib/data';

// ── Animation variants ─────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
const fadeUpTransition = { duration: 0.7, ease: 'easeOut' };

const fadeUpInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const services = [
  {
    num: '01', icon: '🧩', title: 'UI Development',
    desc: 'Pixel-perfect implementation of designs into responsive, accessible React or Next.js components with attention to every micro-interaction.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    num: '02', icon: '⚡', title: 'Web Apps & Dashboards',
    desc: 'Full-featured SPAs, admin dashboards, and data-driven interfaces backed by REST APIs and real-time data visualization.',
    tags: ['API Integration', 'Recharts', 'MongoDB'],
  },
  {
    num: '03', icon: '🎨', title: 'Design Systems',
    desc: 'Component libraries, design tokens, and style guides that keep your product consistent as it scales across teams and platforms.',
    tags: ['Figma', 'Tailwind', 'Shadcn/UI'],
  },
];

const roles = [
  {
    icon: '🖥️', title: 'Front-End Developer',
    desc: 'Building product UIs, landing pages, and component libraries using modern React ecosystems.',
    types: ['Full-time', 'Contract', 'Remote'],
  },
  {
    icon: '🔧', title: 'Full-Stack (JS) Developer',
    desc: 'End-to-end feature development with React/Next.js frontend and Node.js/Express backend.',
    types: ['Full-time', 'Hybrid'],
  },
  {
    icon: '🚀', title: 'Freelance / Contract Work',
    desc: 'Short or long-term projects: MVPs, redesigns, e-commerce builds, or performance optimizations.',
    types: ['Freelance', 'Remote'],
  },
  {
    icon: '💡', title: 'Startup / Scaleup Teams',
    desc: 'Joining early-stage teams to move fast, ship often, and build foundations that scale.',
    types: ['Full-time', 'Equity', 'Remote'],
  },
];

const steps = [
  {
    num: '01', title: 'Share your needs',
    desc: "Fill in the form below or reach out directly. Tell me about your project, team, and what you're looking for.",
  },
  {
    num: '02', title: 'Discovery call',
    desc: 'We hop on a short call to get aligned on goals, timeline, and the kind of collaboration that works best.',
  },
  {
    num: '03', title: 'Proposal & kick-off',
    desc: "I send a clear proposal or we schedule a start date. No vague promises — just concrete next steps.",
  },
  {
    num: '04', title: 'Build & ship',
    desc: "Regular updates, clean code, and a final product you're proud to put in front of your users.",
  },
];

// ── Bento project card ─────────────────────────────────────────────────────────

type BentoCardProps = {
  project: typeof projectsData[number];
  i: number;
  className?: string;
  accent?: string;
  featured?: boolean;
};

function BentoCard({ project, i, className = '', accent = '#1e1e2e', featured = false }: BentoCardProps) {
  const icons = ['🌐', '🛒', '📚', '🏖️', '📊'];
  return (
    <motion.a
      href={project.liveDemoLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/20 p-7 min-h-[220px] ${className}`}
      style={{ background: accent }}
    >
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDQiLz48L3N2Zz4=')] opacity-60 pointer-events-none" />

      {/* Top row: icon + index badge */}
      <div className="flex items-start justify-between relative z-10">
        <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/[0.14] transition-colors">
          {icons[i]}
        </div>
        <span className="font-[family-name:var(--font-syne)] text-[10px] font-bold tracking-[0.12em] text-white/25">
          {String(i + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Bottom: title + description + tags */}
      <div className="relative z-10 mt-6">
        {featured && (
          <div className="relative h-28 rounded-xl overflow-hidden mb-4 bg-black/20">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover object-top opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              sizes="400px"
            />
          </div>
        )}
        <h3 className="font-[family-name:var(--font-syne)] font-bold text-white leading-snug mb-2 group-hover:text-[#ff5c35] transition-colors"
          style={{ fontSize: featured ? '1.25rem' : '1rem' }}
        >
          {project.title}
        </h3>
        <p className="text-xs text-white/45 leading-[1.65] line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-white/[0.07] text-white/50 text-[10px] px-2 py-0.5 rounded-full border border-white/[0.06]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow — appears on hover */}
      <span className="absolute bottom-6 right-6 text-white/20 group-hover:text-[#ff5c35] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-lg z-10">
        ↗
      </span>
    </motion.a>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function GetHiredPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', role: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert('Please fill in Name, Email, and Role.');
      return;
    }
    // TODO: connect to EmailJS or Formspree here
    // EmailJS: emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", formRef.current, "PUBLIC_KEY")
    // Formspree: fetch("https://formspree.io/f/YOUR_ID", { method:"POST", body: JSON.stringify(formData) })
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', role: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-[#f5f2ec] font-[family-name:var(--font-dm-sans)]">

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ec]/90 backdrop-blur-md border-b border-black/10">
        <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-6xl mx-auto">
          <a
            href="#hero"
            className="font-[family-name:var(--font-syne)] font-extrabold text-lg tracking-tight text-[#0d0d0d] hover:text-[#ff5c35] transition-colors"
          >
            Ethmane Didi
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-[#7a7468] hover:text-[#0d0d0d] transition-colors">Services</a>
            <a href="#projects" className="text-sm font-medium text-[#7a7468] hover:text-[#0d0d0d] transition-colors">Projects</a>
            <a href="#roles"    className="text-sm font-medium text-[#7a7468] hover:text-[#0d0d0d] transition-colors">Roles</a>
            <a href="#process"  className="text-sm font-medium text-[#7a7468] hover:text-[#0d0d0d] transition-colors">Process</a>
            <a href="#contact"  className="bg-[#0d0d0d] text-[#f5f2ec] rounded-full px-5 py-2.5 text-sm font-medium hover:bg-[#ff5c35] transition-colors">
              Hire Me
            </a>
          </div>

          {/* Mobile: Hire Me + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a href="#contact" className="bg-[#0d0d0d] text-[#f5f2ec] rounded-full px-4 py-2 text-xs font-semibold hover:bg-[#ff5c35] transition-colors">
              Hire Me
            </a>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg hover:bg-black/5 transition-colors text-[#0d0d0d]"
            >
              {isNavOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-black/10 px-6 py-4 flex flex-col gap-1"
          >
            {[
              { href: '#services', label: 'Services' },
              { href: '#projects', label: 'Projects' },
              { href: '#roles',    label: 'Roles' },
              { href: '#process',  label: 'Process' },
              { href: '#contact',  label: 'Hire Me' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsNavOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-[#3a3530] hover:bg-black/5 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen bg-[#f5f2ec] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center pt-[120px] pb-20 px-6 md:px-12 gap-16">

        {/* Background blob */}
        <div className="absolute -top-32 -right-16 w-[600px] h-[600px] rounded-full bg-[#ff5c35]/10 blur-3xl pointer-events-none" />

        {/* LEFT — text */}
        <motion.div
          className="flex flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
          initial="initial"
          animate="animate"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-[#ff5c35]" />
            <span className="text-[#ff5c35] text-xs font-medium tracking-[0.12em] uppercase">
              Available for hire
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-syne)] text-5xl md:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1a1a2e] mb-6"
          >
            Find your next{' '}
            <em className="not-italic text-[#ff5c35]">front-end</em>{' '}
            partner.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg leading-[1.7] text-[#7a7468] font-light max-w-[480px] mb-10"
          >
            I&apos;m Ethmane — a front-end developer building fast, accessible,
            and beautifully crafted web experiences. Let&apos;s work together
            on your next product.
          </motion.p>

          {/* Buttons — same pattern as intro.tsx */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group bg-[#ff5c35] text-white px-8 py-3.5 flex items-center gap-2 rounded-full font-medium text-sm shadow-[0_4px_20px_rgba(255,92,53,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,92,53,0.4)] transition-all duration-300"
            >
              Get in Touch
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/EthmaneDidi_Jr Frontend Developer-CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-[1.5px] border-[#0d0d0d] text-[#0d0d0d] px-8 py-3.5 flex items-center gap-2 rounded-full font-medium text-sm hover:bg-[#0d0d0d] hover:text-[#f5f2ec] transition-all duration-300"
            >
              Download CV
              <HiDownload className="opacity-60" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — photo card */}
        <motion.div {...fadeUp} transition={fadeUpTransition} className="relative flex justify-center md:block order-first md:order-last">
          <div
            className="relative rounded-3xl overflow-hidden w-[260px] h-[320px] md:w-full md:h-[520px] shadow-[0_24px_64px_rgba(0,0,0,0.10)]"
            style={{ background: 'linear-gradient(135deg, #ede9e1 0%, #e8e2d8 100%)' }}
          >
            <Image
              src="/ousman.png"
              alt="Ethmane Didi"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 260px, 580px"
              priority
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ borderRadius: 14, padding: '14px 18px' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0 animate-pulse-green" />
              <span className="text-[#0d0d0d] text-sm font-medium">
                Open to work
                <span className="text-[#7a7468] font-normal"> · Remote &amp; On-site</span>
              </span>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* ── SKILLS STRIP ──────────────────────────────────────────────────── */}
      <section id="skills" className="bg-[#ede9e1] border-t border-b border-black/10 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-xs tracking-[0.1em] uppercase text-[#7a7468] font-medium mb-4">
          My Tech Stack
        </p>
        <div className="flex flex-wrap gap-2.5">
          {['React', 'Next.js'].map((skill) => (
            <span key={skill} className="bg-[#0d0d0d] text-[#f5f2ec] border border-[#0d0d0d] rounded-full px-4 py-2 text-sm">
              {skill}
            </span>
          ))}
          {['TypeScript', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Framer Motion', 'REST APIs', 'Figma', 'HTML/CSS', 'Shadcn/UI', 'Flutter', 'Prismic', 'SQL', 'Prisma'].map((skill) => (
            <span key={skill} className="bg-white text-[#0d0d0d] border border-black/10 rounded-full px-4 py-2 text-sm hover:border-[#ff5c35] hover:text-[#ff5c35] transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#f5f2ec] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#7a7468]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[#7a7468] font-medium">What I do</span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1a1a2e] mb-16 max-w-xl leading-[1.15]">
            Services I offer to your team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black/10">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUpInView}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#f5f2ec] hover:bg-[#ede9e1] transition-colors p-10 md:p-12"
              >
                <p className="font-[family-name:var(--font-syne)] text-xs font-bold tracking-[0.08em] text-[#ff5c35] mb-7">{s.num}</p>
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#0d0d0d] mb-3.5">{s.title}</h3>
                <p className="text-sm leading-[1.7] text-[#7a7468]">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {s.tags.map((t) => (
                    <span key={t} className="bg-black/[0.06] text-[#0d0d0d] text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section id="projects" className="bg-[#1a1a2e] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-white/30" />
            <span className="text-xs tracking-[0.12em] uppercase text-white/40 font-medium">Selected work</span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-16 max-w-xl leading-[1.15]">
            Projects I&apos;ve built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:auto-rows-[260px]">
            {projectsData[0] && <BentoCard project={projectsData[0]} i={0} className="md:col-span-1 md:row-span-1" accent="#2a1f3d" />}
            {projectsData[1] && <BentoCard project={projectsData[1]} i={1} className="md:col-span-1 md:row-span-2" accent="#1e2a1e" featured />}
            {projectsData[2] && <BentoCard project={projectsData[2]} i={2} className="md:col-span-1 md:row-span-1" accent="#1e1e2e" />}
            {projectsData[3] && <BentoCard project={projectsData[3]} i={3} className="md:col-span-1 md:row-span-1" accent="#2a2a1a" />}
            {projectsData[4] && <BentoCard project={projectsData[4]} i={4} className="md:col-span-1 md:row-span-1" accent="#1a2a2a" />}
          </div>
        </div>
      </section>

      {/* ── ROLES ─────────────────────────────────────────────────────────── */}
      <section id="roles" className="bg-[#ede9e1] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#7a7468]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[#7a7468] font-medium">Roles I&apos;m open to</span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1a1a2e] mb-0 max-w-xl leading-[1.15]">
            Where I can add value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-[1.5px] border-black/10 hover:border-[#ff5c35] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex items-start gap-5 transition-all cursor-default"
              >
                <div className="w-[52px] h-[52px] rounded-xl bg-[#f5f2ec] flex items-center justify-center text-2xl flex-shrink-0">{r.icon}</div>
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-[#0d0d0d] mb-1.5">{r.title}</h3>
                  <p className="text-sm text-[#7a7468] leading-[1.6]">{r.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {r.types.map((t) => (
                      <span key={t} className="border border-black/10 text-[#7a7468] text-xs px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section id="process" className="bg-[#f5f2ec] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#7a7468]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[#7a7468] font-medium">How it works</span>
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1a1a2e] mb-0 max-w-xl leading-[1.15]">
            From first message to shipped product
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-16 divide-x divide-black/10">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUpInView}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-9"
              >
                <p className="font-[family-name:var(--font-syne)] text-7xl font-extrabold text-[#0d0d0d]/[0.06] leading-none mb-4 select-none">{s.num}</p>
                <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-[#0d0d0d] mb-2.5">{s.title}</h3>
                <p className="text-sm leading-[1.6] text-[#7a7468]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#1a1a2e] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[1.5px] bg-white/30" />
              <span className="text-xs tracking-[0.12em] uppercase text-white/40 font-medium">Get in touch</span>
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
              Let&apos;s build something{' '}
              <em className="not-italic text-[#ff5c35]">great</em> together.
            </h2>
            <p className="text-base leading-[1.7] text-white/60 mb-10">
              Whether you need a full-time team member or a contractor for a specific
              project — I&apos;d love to hear from you. Drop me a message and I&apos;ll
              get back within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:ethmane.ousman37@gmail.com"
                className="flex items-center gap-3.5 text-white/70 hover:text-white text-sm no-underline transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <HiMail className="text-base" />
                </span>
                ethmane.ousman37@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/ethmane-ousman-34885844/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-white/70 hover:text-white text-sm no-underline transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <BsLinkedin className="text-base" />
                </span>
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/Ousman37"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-white/70 hover:text-white text-sm no-underline transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <FaGithubSquare className="text-base" />
                </span>
                GitHub — Ousman37
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="flex flex-col gap-5">

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.08em] uppercase text-white/50 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 text-base outline-none focus:border-[#ff5c35] transition-colors w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.08em] uppercase text-white/50 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 text-base outline-none focus:border-[#ff5c35] transition-colors w-full"
                />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[0.08em] uppercase text-white/50 font-medium">
                Company / Project
              </label>
              <input
                type="text"
                placeholder="Your company or project name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 text-base outline-none focus:border-[#ff5c35] transition-colors w-full"
              />
            </div>

            {/* Role select */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[0.08em] uppercase text-white/50 font-medium">
                Role / Engagement Type *
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white text-base appearance-none outline-none focus:border-[#ff5c35] transition-colors w-full cursor-pointer"
                style={{ color: formData.role ? 'white' : 'rgba(255,255,255,0.3)' }}
              >
                <option value="" disabled className="bg-[#1a1a2e]">Select type...</option>
                <option value="fulltime"  className="bg-[#1a1a2e] text-white">Full-time Position</option>
                <option value="freelance" className="bg-[#1a1a2e] text-white">Freelance / Contract</option>
                <option value="parttime"  className="bg-[#1a1a2e] text-white">Part-time / Consulting</option>
                <option value="other"     className="bg-[#1a1a2e] text-white">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[0.08em] uppercase text-white/50 font-medium">
                Tell me about the project or role
              </label>
              <textarea
                placeholder="What are you building? What's the timeline?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 text-base outline-none focus:border-[#ff5c35] transition-colors w-full min-h-[120px] resize-none"
              />
            </div>

            {/* Success message */}
            {submitted && (
              <div className="flex items-center gap-3 bg-green-500/15 border border-green-500/30 rounded-xl px-5 py-4 text-green-300 text-sm">
                ✅&nbsp; Message sent! I&apos;ll get back to you within 24 hours.
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="self-start bg-[#ff5c35] text-white rounded-full px-9 py-4 text-sm font-medium shadow-[0_4px_20px_rgba(255,92,53,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,92,53,0.5)] transition-all duration-300"
            >
              Send Message →
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0d0d0d] py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/50">
          &copy; 2025 Ethmane Didi. All rights reserved.
        </p>
        <div className="flex gap-8">
          {[
            { label: 'Portfolio', href: '/' },
            { label: 'GitHub',    href: 'https://github.com/Ousman37' },
            { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ethmane-ousman-34885844/' },
            { label: 'CV',        href: '/EthmaneDidi_Jr Frontend Developer-CV.pdf' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white no-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        </div>
      </footer>

    </main>
  );
}
