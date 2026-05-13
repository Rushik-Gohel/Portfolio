import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  const navItems = ['Experience', 'Projects', 'Awards', 'Skills', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-[var(--color-border)] bg-white/80 backdrop-blur-md flex items-center"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-bold text-lg tracking-tighter uppercase">
          Rushik<span className="text-[var(--color-muted)] font-light">Gohel</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-medium text-[var(--color-muted)] hover:text-black transition-all uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="font-mono text-[10px] hidden lg:block text-[var(--color-muted)]">
          [ AVAILABLE FOR HIRE ]
        </div>
      </div>
    </motion.nav>
  );
}
