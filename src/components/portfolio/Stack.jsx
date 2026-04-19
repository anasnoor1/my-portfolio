import { motion } from "framer-motion";
const groups = [
    {
        label: "Frontend",
        items: ["React.js", "Redux Toolkit", "Context API", "JavaScript ES6+", "HTML5", "Tailwind CSS"],
    },
    {
        label: "Backend",
        items: ["Node.js", "Express.js", "RESTful APIs", "Socket.io", "JWT Auth", "Bcrypt"],
    },
    {
        label: "Databases",
        items: ["MongoDB / Mongoose", "MySQL", "PostgreSQL", "Database Design"],
    },
    {
        label: "Tools & DevOps",
        items: ["Git & GitHub", "Postman", "Stripe API", "Docker", "Vercel", "Agile"],
    },
];
export function Stack() {
    return (<section id="stack" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-widest text-muted-foreground">
          <span className="h-px w-10 bg-accent"/>
          THE TOOLBOX
        </div>
        <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-16 max-w-3xl text-balance">
          Tools I reach for <span className="italic text-accent">every day.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (<motion.div key={g.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="rounded-2xl border border-border/60 bg-surface/40 p-6 hover:border-accent/50 transition-colors">
              <div className="font-mono text-xs tracking-widest text-accent mb-4">
                0{i + 1} / {g.label.toUpperCase()}
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (<li key={it} className="text-foreground/90 text-lg font-serif">
                    {it}
                  </li>))}
              </ul>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
