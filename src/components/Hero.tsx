import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Rushik Gohel / AI Engineering
          </div>

          <h1 className="text-7xl md:text-9xl font-bold tracking-tight m-0 leading-[0.9]">
            ENGINEERING <br />
            NEURAL SYSTEMS
          </h1>

          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed font-light">
              Designing and scaling production-ready AI architectures powered by GenAI, RAG, and agentic frameworks for high-performance enterprise automation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://drive.google.com/file/d/1fUye7ahqbqF1TcBj_Tt4yWVyNxTyaLC6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-black text-white font-medium text-sm transition-all hover:opacity-80 inline-block"
            >
              RESUME
            </a>
            <a 
              href="https://in.linkedin.com/in/rushik-gohel-729133168"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-[var(--color-border)] font-medium text-sm transition-all hover:bg-[var(--color-secondary)] inline-block"
            >
              LINKEDIN
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
