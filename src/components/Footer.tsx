import { motion } from 'motion/react';
import { Mail, Linkedin, Github, FileSignature } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 bg-[var(--color-secondary)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-5xl font-bold tracking-tighter uppercase italic">
              GET IN TOUCH
            </h2>
            <p className="text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-sm">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a 
              href="mailto:rushikgohel@gmail.com" 
              className="inline-block px-10 py-5 bg-black text-white font-medium text-sm transition-all hover:opacity-80"
            >
              SEND MESSAGE
            </a>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between h-full md:items-end">
            <div className="space-y-4 md:text-right">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)] block mb-6">
                SOCIAL CHANNELS
              </span>
              <div className="flex flex-col md:items-end gap-4">
                {[
                  { icon: Linkedin, label: 'LINKEDIN', href: 'https://in.linkedin.com/in/rushik-gohel-729133168' },
                  { icon: Github, label: 'GITHUB', href: 'https://github.com/Rushik-Gohel' },
                  { icon: Mail, label: 'EMAIL', href: 'mailto:rushikgohel@gmail.com' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 text-sm font-medium hover:text-[var(--color-muted)] transition-all group"
                  >
                    <span className="tracking-widest">{social.label}</span>
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-16 md:mt-0 md:text-right">
              <button 
                onClick={scrollToTop}
                className="text-[10px] font-bold uppercase tracking-widest hover:underline transition-all block mb-8"
              >
                BACK TO TOP ↑
              </button>
              <div className="font-mono text-[9px] text-[var(--color-muted)] uppercase tracking-widest">
                © 2024 RUSHIK GOHEL • ALL RIGHTS RESERVED
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
