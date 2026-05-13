import { motion } from 'motion/react';
import { Award, FileCheck, Trophy, ExternalLink } from 'lucide-react';

const awards = [
  {
    title: "Outstanding Technical Achievement Award",
    issuer: "IBM Labs",
    date: "2025",
    category: "RESEARCH_&_DEV",
    description: "Awarded for outstanding innovation that brings intelligence and simplicity to API management.",
    link: "https://drive.google.com/file/d/105JTnxRT0zECda-AUDGgENd3D94ZjZ7h/view?usp=sharing"
  },
  {
    title: "Growth Award",
    issuer: "IBM Labs",
    date: "2024",
    category: "PRODUCT_IMPACT",
    description: "Recognized for significant business and cost impact for IBM by using AI to automate template generation.",
    link: "https://drive.google.com/file/d/1hGjACBFJrLtg45jQYa8_tKOz5kbNmn1G/view?usp=sharing"
  }
];

export default function Awards() {
  return (
    <section id="awards" className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-20">
          <Trophy className="w-8 h-8" />
          <h2 className="text-5xl font-bold tracking-tighter uppercase italic">
            Recognition
          </h2>
        </div>

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
              
              <div className="min-h-[100px] flex flex-col justify-end">
                <h3 className="text-3xl font-bold uppercase tracking-tight">{award.title}</h3>
                <p className="text-lg text-[var(--color-muted)] font-light mt-1">{award.issuer}</p>
              </div>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md min-h-[60px]">
                {award.description}
              </p>
              
              <a 
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-black hover:underline transition-all"
              >
                <FileCheck className="w-3.5 h-3.5" />
                View Document
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
