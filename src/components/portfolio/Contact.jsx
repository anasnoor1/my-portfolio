import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
export function Contact() {
    return (<section id="contact" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 font-mono text-xs tracking-widest text-muted-foreground">
          <span className="h-px w-10 bg-accent"/>
          GET IN TOUCH
        </div>

        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="font-serif text-[14vw] md:text-[10vw] leading-[0.9] tracking-tight text-balance">
          Let's build <br />
          <span className="italic text-accent">something great.</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Got an idea, a product, or a problem worth solving? I'm currently
              taking on new full-stack projects and freelance collaborations.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-4">
            <a href="https://mail.google.com/mail/u/0/#compose?to=anasnoor099@gmail.com" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-border/60 hover:border-accent hover:bg-surface/40 transition group">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-accent"/>
                <div>
                  <div className="font-mono text-xs text-muted-foreground">EMAIL</div>
                  <div className="text-lg">anasnoor099@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition"/>
            </a>

            <a href="tel:+923124212906" className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-border/60 hover:border-accent hover:bg-surface/40 transition group">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-accent"/>
                <div>
                  <div className="font-mono text-xs text-muted-foreground">PHONE</div>
                  <div className="text-lg">+92 312 4212906</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition"/>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border/60">
              <MapPin className="h-5 w-5 text-accent"/>
              <div>
                <div className="font-mono text-xs text-muted-foreground">BASED IN</div>
                <div className="text-lg">Lahore, Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
export function Footer() {
    return (<footer className="px-6 md:px-10 py-10 border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div>© 2026 Muhammad Anas. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/anasnoor1" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
          <a href="https://linkedin.com/in/anas-noor6" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="https://mail.google.com/mail/u/0/#compose?to=anasnoor099@gmail.com" target="_blank" rel="noreferrer" className="hover:text-accent">Email</a>
        </div>
      </div>
    </footer>);
}
