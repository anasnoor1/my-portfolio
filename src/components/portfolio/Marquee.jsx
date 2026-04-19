const items = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express",
    "TypeScript",
    "Socket.io",
    "Stripe",
    "Tailwind CSS",
    "Redux Toolkit",
    "PostgreSQL",
    "Docker",
    "JWT Auth",
];
export function Marquee() {
    return (<section className="border-y border-border/60 py-8 overflow-hidden bg-surface/40">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (<div key={i} className="flex items-center gap-12 px-6 font-serif text-3xl md:text-5xl">
            <span className="text-foreground/80">{it}</span>
            <span className="text-accent">✦</span>
          </div>))}
      </div>
    </section>);
}
