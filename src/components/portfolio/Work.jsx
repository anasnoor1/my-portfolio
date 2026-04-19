import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const projects = [
  {
    num: "01",
    title: "Connectify",
    tagline: "Brand × Influencer Marketplace",
    description:
      "A full-stack MERN marketplace connecting brands with creators. Real-time messaging via Socket.io, secure Stripe payments, RBAC + JWT, and Redux-powered dashboards.",
    stack: ["MERN", "Stripe", "Socket.io", "Redux Toolkit", "JWT"],
    url: "https://connectify-sigma-one.vercel.app/",
    image: "/projects/connectify.png",
    year: "2025",
    role: "Full-Stack Engineer",
  },
  {
    num: "02",
    title: "Aurelian",
    tagline: "Luxury Fashion E-Commerce",
    description:
      "An editorial e-commerce experience for a premium fashion label. Cinematic dark UI, refined typography, and a curated lookbook flow built for conversions.",
    stack: ["React", "Tailwind", "Framer Motion", "Vercel"],
    url: "https://aurelian-psi.vercel.app/",
    image: "/projects/aurelian.png",
    year: "2026",
    role: "Frontend / UI",
  },
  {
    num: "03",
    title: "JeeraFit",
    tagline: "Personalized Fitness Platform",
    description:
      "Custom workouts, macro-aware diet plans, BMI & calorie tools — packaged in a sleek dark UI that helps users actually stick with their goals.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    url: "https://jeera-fitness.vercel.app/",
    image: "/projects/jeera.png",
    year: "2026",
    role: "Full-Stack Engineer",
  },
  {
    num: "04",
    title: "WeNet Worlds",
    tagline: "Web3 VR English Learning Game",
    description:
      "The world's first Web3 VR English learning game for grades 3–12. 120 episodes, on-chain rewards, and immersive multiplayer adventures.",
    stack: ["React", "Web3", "VR", "Multiplayer"],
    url: "https://wenet-worlds.vercel.app/",
    image: "/projects/wenet.png",
    year: "2026",
    role: "Frontend Engineer",
  },
];
function Card({ p, i }) {
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.15 }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface aspect-[16/10] mb-6">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
        <div className="absolute top-5 left-5 font-mono text-xs tracking-widest text-foreground/80">
          {p.num} / {p.year}
        </div>
        <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
          <ArrowUpRight className="h-5 w-5" />
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="font-mono text-muted-foreground">{p.role}</span>
        <span className="text-muted-foreground/40">·</span>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-full border border-border/60 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
export function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-widest text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              SELECTED WORK
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-balance">
              Projects shipped <span className="italic text-accent">in production.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Four recent builds — from real-time marketplaces to immersive VR learning platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
