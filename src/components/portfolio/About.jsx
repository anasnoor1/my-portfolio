import { motion } from "framer-motion";
const stats = [
    { k: "25%", v: "Frontend perf gain" },
    { k: "40%", v: "Faster page loads" },
    { k: "90+", v: "Lighthouse score" },
    { k: "4+", v: "Production apps" },
];
export function About() {
    return (<section id="about" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-widest text-muted-foreground">
            <span className="h-px w-10 bg-accent"/>
            ABOUT
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-none">
            Code with <span className="italic text-accent">intent.</span>
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            I'm <span className="text-foreground">Muhammad Anas</span> — a performance-driven
            Full Stack Developer specializing in the MERN stack. I architect RESTful APIs,
            implement real-time WebSockets, and integrate secure Stripe payment flows.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
            I most recently interned at <span className="text-foreground">Seebiz</span>,
            where I shipped reusable React components, automated API testing, and led
            Git-based collaboration that cut deployment errors significantly.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            Outside of building products, I'm an active open-source contributor —
            obsessed with clean architecture, snappy interfaces, and getting the details right.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border/60">
            {stats.map((s, i) => (<motion.div key={s.k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="font-serif text-4xl md:text-5xl text-foreground">{s.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
              </motion.div>))}
          </div>
        </div>
      </div>
    </section>);
}
