import { motion } from 'motion/react';
import { Award, FileCheck, Trophy, ExternalLink } from 'lucide-react';

const awards = [
  {
    title: "Top Contributor",
    issuer: "IBM AI Innovation Lab",
    date: "2024",
    category: "RESEARCH_&_DEV",
    description: "Awarded for exceptional architecture in Flow Assist's RAG core."
  },
  {
    title: "AI Excellence",
    issuer: "IBM App Connect Team",
    date: "2023",
    category: "PRODUCT_IMPACT",
    description: "Recognized for 10x reduction in prompt deployment latency."
  }
];

export default function Awards() {
  return (
    <section id="awards" className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-5xl font-bold tracking-tighter uppercase mb-20 italic">
          RECOGNITION
        </h2>

        <div className="grid md:grid-cols-2 gap-20">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-[var(--color-muted)]">
                  {award.date}
                </span>
                <div className="h-px w-8 bg-[var(--color-border)]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">
                  {award.category}
                </span>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight">{award.title}</h3>
                <p className="text-lg text-[var(--color-muted)] font-light mt-1">{award.issuer}</p>
              </div>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md">
                {award.description}
              </p>
              
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-black hover:underline transition-all">
                <FileCheck className="w-3.5 h-3.5" />
                View Document
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
