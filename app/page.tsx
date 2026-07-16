"use client";

import { motion } from "framer-motion";

const services = [
  ["Business Consulting", "Turn complex business questions into a focused plan with clear priorities, practical recommendations, and momentum."],
  ["Project Management", "Keep important work moving with organized plans, aligned stakeholders, and dependable delivery from start to finish."],
  ["Dashboards & Insights", "Build clean, useful dashboards that make performance easy to understand and action easier to take."],
  ["Digital Marketing", "Create thoughtful digital marketing support that helps your message reach the right people with purpose."],
  ["Creative Voiceovers", "Bring creative content to life with warm, polished voiceovers for campaigns, videos, and digital stories."],
];

const work = [
  ["Consulting", "A clear business plan for a growing team", "1", "aligned direction"],
  ["Dashboards", "A performance dashboard built for everyday decisions", "1", "source of truth"],
  ["Creative", "A polished audio presence for digital content", "100%", "on-brand voice"],
];

export default function Home() {
  const email = "sheadpandey@gmail.com";
  return <main>
    <div className="bg-black px-5 py-2.5 text-center text-xs font-medium text-white sm:px-8"><span className="text-white/75">Ready to discuss your next project?</span> <a className="ml-2 font-bold text-[#d6b560] underline underline-offset-4" href={`mailto:${email}?subject=${encodeURIComponent("Consultation request")}`}>Book a consultation →</a></div>
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#home" className="font-serif text-xl font-bold tracking-tight">Shreya<span className="text-[#b08b38]">.</span></a>
      <div className="hidden gap-7 text-sm font-medium text-neutral-700 md:flex"><a href="#services">Services</a><a href="#work">Portfolio</a><a href="#about">About</a></div>
      <a href={`mailto:${email}?subject=${encodeURIComponent("Consultation request")}`} className="rounded-sm bg-black px-4 py-2.5 text-xs font-bold text-white sm:px-5">Book consultation</a>
    </nav>

    <section id="home" className="border-y border-[#e8e1d5] bg-[#fbfaf8] px-5 py-20 text-center sm:px-8 sm:py-28">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="mx-auto max-w-4xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#b08b38]">Freelance consultant & creative partner</p>
        <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-[-.045em] text-black sm:text-6xl lg:text-7xl">Ideas, organized. Impact, delivered.</h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">I&apos;m Shreya Pandey, an independent freelancer helping businesses get organized, make stronger decisions, and communicate with clarity.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contact" className="rounded-sm bg-[#b08b38] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#93722c]">Book a consultation</a><a href="#services" className="rounded-sm border border-black px-6 py-3.5 text-sm font-bold text-black transition hover:bg-black hover:text-white">Explore services</a></div>
      </motion.div>
    </section>

    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-3xl text-center"><p className="section-label">Ways I can help</p><h2 className="section-title">Flexible support for business and creative work.</h2><p className="section-copy">Choose one focused service or bring me in as a versatile partner across a project.</p></div><div className="mt-10 flex flex-wrap justify-center gap-2">{services.map(([title]) => <a key={title} href="#contact" className="rounded-full border border-[#d8c59a] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#856626] transition hover:bg-[#b08b38] hover:text-white">{title}</a>)}</div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(([title, text]) => <motion.article whileHover={{ y: -4 }} key={title} className="rounded-sm border border-[#e4ddcf] bg-white p-6 shadow-[0_4px_18px_rgba(0,0,0,.025)] sm:p-7"><h3 className="font-serif text-2xl font-semibold text-black">{title}</h3><p className="mt-3 leading-7 text-neutral-600">{text}</p><a href="#contact" className="mt-5 inline-block text-sm font-bold text-[#a27d2d]">Ask about this service →</a></motion.article>)}</div></section>

    <section id="work" className="bg-black px-5 py-20 text-white sm:px-8 sm:py-28"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="section-label text-[#d6b560]">Selected work</p><h2 className="section-title text-white">Impact you can see.</h2><p className="section-copy text-white/65">Examples of the kind of business progress better intelligence can unlock.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{work.map(([tag, title, metric, label]) => <article key={tag} className="rounded-sm border border-white/20 p-6 sm:p-7"><p className="text-xs font-bold uppercase tracking-[.17em] text-[#d6b560]">{tag}</p><h3 className="mt-7 font-serif text-2xl leading-tight text-white">{title}</h3><div className="mt-12 border-t border-white/20 pt-5"><strong className="font-serif text-4xl text-[#d6b560]">{metric}</strong><span className="ml-2 text-sm text-white/60">{label}</span></div></article>)}</div></div></section>

    <section id="about" className="bg-[#f5f1e9] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2"><div className="order-2 md:order-1"><p className="section-label">About Shreya</p><h2 className="section-title !text-left">One reliable freelancer for your next important project.</h2><p className="mt-6 leading-7 text-neutral-700">I bring business thinking, project structure, data fluency, and creative care to the work I take on. Whether you need a clearer strategy, a dashboard your team will use, marketing support, or a voice for your content, I&apos;ll help you make it happen.</p><div className="mt-8 border-l-2 border-[#b08b38] pl-4 text-sm font-semibold text-neutral-700">Organized. Approachable. Detail-oriented.</div></div><div className="order-1 flex aspect-square items-center justify-center rounded-sm bg-[#b08b38] p-8 text-center text-white md:order-2"><p className="font-serif text-4xl leading-tight sm:text-5xl">“Good work should feel clear, capable, and considered.”</p></div></div></section>

    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-5xl rounded-sm bg-black px-6 py-12 text-center text-white sm:px-12 sm:py-16"><p className="section-label text-[#d6b560]">Start a conversation</p><h2 className="mx-auto max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">Let&apos;s make your next move your best one.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">Share a little about your challenge, and we&apos;ll start with a thoughtful conversation.</p><form className="mx-auto mt-9 max-w-xl text-left" onSubmit={(e) => { e.preventDefault(); const data = new FormData(e.currentTarget); const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject details:\n${data.get("message")}`; window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Consulting inquiry from ${data.get("name")}`)}&body=${encodeURIComponent(body)}`; }}><div className="grid gap-5 sm:grid-cols-2"><input name="name" required placeholder="Your name" /><input name="email" type="email" required placeholder="Work email" /></div><textarea name="message" required className="mt-5" placeholder="Tell me a little about what you need..." /><button type="submit" className="mt-6 w-full rounded-sm bg-[#b08b38] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#93722c]">Send inquiry</button></form><p className="mt-5 text-sm text-white/55">Or email <a className="font-semibold text-[#d6b560]" href={`mailto:${email}`}>{email}</a></p></div></section>

    <footer className="border-t border-[#e8e1d5] px-5 py-7 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs text-neutral-500 sm:flex-row sm:text-left"><span className="font-semibold text-black">Shreya Pandey <span className="text-[#b08b38]">/</span> Consulting</span><span>© 2026 · Better decisions, thoughtfully made.</span></div></footer>
  </main>;
}
