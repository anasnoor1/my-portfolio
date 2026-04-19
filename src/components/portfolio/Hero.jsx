import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
const word = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.08 },
  }),
};
export function Hero() {
  const line1 = ["Full", "Stack"];
  const line2 = ["Developer."];
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 md:px-10 overflow-hidden grain"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs tracking-widest text-muted-foreground"
        >
          <span className="h-px w-10 bg-accent" />
          <span>PORTFOLIO / 2026 — MUHAMMAD ANAS</span>
        </motion.div>

        <h1 className="font-serif text-[18vw] md:text-[11vw] leading-[0.88] tracking-tight">
          {[line1, line2].map((line, li) => (
            <div key={li} className="overflow-hidden block">
              <motion.div className="flex flex-wrap gap-x-6">
                {line.map((w, i) => (
                  <motion.span
                    key={w}
                    variants={word}
                    initial="hidden"
                    animate="show"
                    custom={li * 3 + i}
                    className="inline-block"
                  >
                    {li === 1 && i === 0 ? <span className="italic text-accent">{w}</span> : w}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="md:col-span-5 text-lg md:text-xl text-muted-foreground leading-relaxed text-balance"
          >
            I'm a MERN stack engineer based in Lahore, building fast, scalable web applications —
            from real-time marketplaces to AI-driven platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="md:col-span-4 md:col-start-9 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for work · Q2 2026
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/anasnoor1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 3 .1 3.3.8.8 1.3 2 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/anas-noor6"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21H17v-5.4c0-1.3 0-3-1.8-3-1.9 0-2.2 1.4-2.2 2.9V21H9z" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#compose?to=anasnoor099@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-xs text-muted-foreground"
      >
        <span>SCROLL</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
