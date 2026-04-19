import { motion } from "framer-motion";
const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full border border-border/60 bg-background/60 backdrop-blur-xl px-5 md:px-7 py-3">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
          <span className="font-mono text-sm tracking-tight">anas.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition"
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
