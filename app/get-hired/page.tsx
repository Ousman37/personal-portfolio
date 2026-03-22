//app/get-hired/page.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiMail, HiMenuAlt3, HiX } from 'react-icons/hi';
import { projectsData } from '@/lib/data';
import { sendEmail } from '@/server/sendEmail';

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
  featured?: boolean;
};

function BentoCard({ project, i, className = '', featured = false }: BentoCardProps) {
  return (
    <motion.a
      href={project.liveDemoLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
      className={`group relative flex flex-col justify-end rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Screenshot — fills the whole card */}
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />

      {/* Index badge — top right */}
      <span className="absolute top-4 right-4 z-10 text-[10px] font-bold tracking-[0.12em] text-white/30 font-[family-name:var(--font-bricolage)]">
        {String(i + 1).padStart(2, '0')}
      </span>

      {/* Content — pinned to bottom */}
      <div className="relative z-10 p-5 md:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <span key={tag} className="bg-white/10 backdrop-blur-sm text-white/60 text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-white/[0.08]">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`font-[family-name:var(--font-bricolage)] font-bold text-white leading-snug group-hover:text-[#ff8c42] transition-colors duration-300 ${featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
          {project.title}
        </h3>

        {/* Description — slides in on hover */}
        <p className="text-xs text-white/50 leading-[1.7] mt-1.5 line-clamp-2 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
          {project.description}
        </p>

        {/* CTA link */}
        <div className="flex items-center gap-1 mt-3 text-[#ff5c35] text-xs font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          View project <span className="text-base leading-none">↗</span>
        </div>
      </div>
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
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert('Please fill in Name, Email, and Role.');
      return;
    }

    setSending(true);
    setSendError(null);

    const body = new FormData();
    body.append('senderName', formData.name);
    body.append('senderEmail', formData.email);
    body.append(
      'message',
      `Role: ${formData.role}${formData.company ? `\nCompany: ${formData.company}` : ''}\n\n${formData.message}`,
    );

    const result = await sendEmail(body);

    setSending(false);

    if (result.error) {
      setSendError(result.error);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', role: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-[#f5f2ec] font-[family-name:var(--font-dm-sans)]">

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ec]/90 backdrop-blur-md border-b border-black/10">
        <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 py-4 max-w-screen-xl mx-auto">
          <a
            href="#hero"
            className="font-[family-name:var(--font-bricolage)] font-extrabold text-lg tracking-tight text-[#0d0d0d] hover:text-[#ff5c35] transition-colors flex items-center gap-1"
          >
            <span className="text-[#ff5c35]">&lt;/&gt;</span>
            Ethmane.dev
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
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f5f2ec 0%, #fdf0ea 50%, #fde8dc 100%)' }}
      >
        {/* Layer 1 — radial glow top-right (near image) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 80% 10%, rgba(255,92,53,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Layer 2 — soft ambient blob bottom-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 10% 90%, rgba(255,179,71,0.13) 0%, transparent 65%)',
          }}
        />

        {/* Layer 3 — vignette (edges darker than center) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(30,20,10,0.07) 100%)',
          }}
        />

        {/* Layer 4 — grain / noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] items-center pt-[110px] md:pt-[140px] pb-24 md:pb-32 px-6 md:px-8 lg:px-12 gap-12 md:gap-16">

          {/* LEFT — text */}
          <motion.div
            className="flex flex-col min-w-0"
            variants={{ animate: { transition: { staggerChildren: 0.13 } } }}
            initial="initial"
            animate="animate"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-7">
              <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/[0.08] rounded-full px-4 py-1.5 text-xs font-medium text-[#3a3530] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c35]" />
                5 solo-shipped apps · 800 daily users pre-launch
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-bricolage)] text-[2.6rem] md:text-[3.4rem] lg:text-[3.8rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#1a1a2e] mb-7"
            >
              Five apps shipped{' '}
              <em
                className="not-italic"
                style={{
                  background: 'linear-gradient(90deg, #ff5c35 0%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                solo.
              </em>{' '}
              One hit 800 users before launch.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-[1.05rem] leading-[1.75] text-[#6b6560] font-light max-w-[460px] mb-10"
            >
              Auth, payments, real-time data — built alone, end to end.
              Now ready to build yours.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group relative bg-[#ff5c35] text-white px-8 py-3.5 flex items-center gap-2.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 24px rgba(255,92,53,0.35)' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 40px rgba(255,92,53,0.5)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,92,53,0.35)')}
              >
                Get in Touch
                <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/[0.10] text-[#1a1a2e] px-7 py-3.5 rounded-full font-medium text-sm hover:border-[#ff5c35]/40 hover:bg-white transition-all duration-300 shadow-sm"
              >
                View My Work
                <span className="group-hover:translate-y-0.5 transition-transform duration-200 inline-block">↓</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — profile card */}
          <motion.div
            {...fadeUp}
            transition={fadeUpTransition}
            className="relative flex justify-center md:justify-end order-first md:order-last"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-[-12px] rounded-[2.5rem] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(255,92,53,0.15) 0%, transparent 70%)' }}
            />

            {/* Card */}
            <div
              className="relative w-[300px] md:w-full max-w-[380px] rounded-[2rem] overflow-hidden border border-white/60"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.75) 0%, rgba(255,240,232,0.60) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset',
              }}
            >
              {/* Inner image area */}
              <div className="relative mx-6 mt-6 rounded-2xl overflow-hidden aspect-[4/5]"
                style={{ background: 'linear-gradient(160deg, #ede9e1 0%, #e8ddd4 100%)' }}>
                <Image
                  src="/ousman.png"
                  alt="Ethmane Didi"
                  fill
                  className="object-cover object-top"
                  sizes="380px"
                  priority
                />
              </div>

              {/* Card footer with badge */}
              <div className="flex items-center justify-center py-5">
                <div
                  className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 border border-black/[0.06]"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-[#0d0d0d] text-sm font-medium">Open to work</span>
                  <span className="text-[#9a9490] text-sm">· Remote &amp; On-site</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────────────────── */}
      <section id="skills" className="bg-[#ede9e1] border-t border-b border-black/10 py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">

          {/* Header */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#7a7468]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[#7a7468] font-medium">My Tech Stack</span>
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#1a1a2e] mb-12">
            Tools I work with every day
          </h2>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: '⚛️',
                label: 'Core',
                featured: ['React', 'Next.js', 'TypeScript'],
                skills: ['JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Cross-browser'],
              },
              {
                icon: '🎨',
                label: 'Frameworks & Libraries',
                featured: ['Tailwind CSS', 'Framer Motion'],
                skills: ['Bootstrap', 'SCSS / Sass', 'Shadcn/UI', 'Express.js'],
              },
              {
                icon: '🗄️',
                label: 'Data & Backend',
                featured: ['Node.js', 'MongoDB'],
                skills: ['Prisma', 'SQL', 'RESTful APIs', 'Flutter'],
              },
              {
                icon: '✏️',
                label: 'Design & UX',
                featured: ['Figma'],
                skills: ['UI Design', 'UX Design', 'Prismic CMS'],
              },
              {
                icon: '⚙️',
                label: 'Workflow',
                featured: ['Git', 'GitHub'],
                skills: ['Agile / Scrum', 'Trello', 'GitHub Projects', 'Version Control'],
              },
              {
                icon: '🧪',
                label: 'Testing & Quality',
                featured: ['Jest', 'React Testing Library'],
                skills: ['ESLint', 'Prettier', 'Lighthouse', 'Web Accessibility'],
              },
            ].map(({ icon, label, featured, skills }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-black/[0.06] hover:border-[#ff5c35]/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-xl bg-[#f5f2ec] flex items-center justify-center text-lg flex-shrink-0">
                    {icon}
                  </span>
                  <span className="font-[family-name:var(--font-bricolage)] text-sm font-bold text-[#1a1a2e] tracking-tight">
                    {label}
                  </span>
                </div>

                {/* Featured */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {featured.map((s) => (
                    <span key={s} className="bg-[#0d0d0d] text-[#f5f2ec] rounded-full px-3.5 py-1 text-xs font-semibold">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Secondary */}
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <span key={s} className="bg-[#f5f2ec] text-[#3a3530] rounded-full px-3 py-1 text-xs border border-black/[0.07] hover:border-[#ff5c35] hover:text-[#ff5c35] transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#f5f2ec] py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#7a7468]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[#7a7468] font-medium">What I do</span>
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1a1a2e] mb-16 max-w-xl leading-[1.15]">
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
                <p className="font-[family-name:var(--font-bricolage)] text-xs font-bold tracking-[0.08em] text-[#ff5c35] mb-7">{s.num}</p>
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-[family-name:var(--font-bricolage)] text-xl font-bold text-[#0d0d0d] mb-3.5">{s.title}</h3>
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
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-white/30" />
            <span className="text-xs tracking-[0.12em] uppercase text-white/40 font-medium">Selected work</span>
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-16 max-w-xl leading-[1.15]">
            Projects I&apos;ve built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[320px]">
            {projectsData[0] && <BentoCard project={projectsData[0]} i={0} className="md:col-span-2" featured />}
            {projectsData[1] && <BentoCard project={projectsData[1]} i={1} className="md:col-span-1" />}
            {projectsData[2] && <BentoCard project={projectsData[2]} i={2} className="md:col-span-1" />}
            {projectsData[3] && <BentoCard project={projectsData[3]} i={3} className="md:col-span-1" />}
            {projectsData[4] && <BentoCard project={projectsData[4]} i={4} className="md:col-span-2" featured />}
            {projectsData[5] && <BentoCard project={projectsData[5]} i={5} className="md:col-span-1" />}
          </div>
        </div>
      </section>

      {/* ── ROLES ─────────────────────────────────────────────────────────── */}
      <section id="roles" className="bg-[#ede9e1] py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#7a7468]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[#7a7468] font-medium">Roles I&apos;m open to</span>
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1a1a2e] mb-0 max-w-xl leading-[1.15]">
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
                  <h3 className="font-[family-name:var(--font-bricolage)] text-base font-bold text-[#0d0d0d] mb-1.5">{r.title}</h3>
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
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#7a7468]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[#7a7468] font-medium">How it works</span>
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1a1a2e] mb-0 max-w-xl leading-[1.15]">
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
                <p className="font-[family-name:var(--font-bricolage)] text-7xl font-extrabold text-[#0d0d0d]/[0.06] leading-none mb-4 select-none">{s.num}</p>
                <h3 className="font-[family-name:var(--font-bricolage)] text-base font-bold text-[#0d0d0d] mb-2.5">{s.title}</h3>
                <p className="text-sm leading-[1.6] text-[#7a7468]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#1a1a2e] py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[1.5px] bg-white/30" />
              <span className="text-xs tracking-[0.12em] uppercase text-white/40 font-medium">Get in touch</span>
            </div>
            <h2 className="font-[family-name:var(--font-bricolage)] text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
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

            {/* Error message */}
            {sendError && (
              <div className="flex items-center gap-3 bg-red-500/15 border border-red-500/30 rounded-xl px-5 py-4 text-red-300 text-sm">
                ⚠️&nbsp; {sendError}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="self-start bg-[#ff5c35] text-white rounded-full px-9 py-4 text-sm font-medium shadow-[0_4px_20px_rgba(255,92,53,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,92,53,0.5)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0d0d0d] py-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
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
