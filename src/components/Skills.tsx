import { motion } from 'motion/react';
import { Cpu, Code2, Database, ShieldCheck, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: "AI & LLM",
    icon: Cpu,
    skills: ["Large Language Models (LLM)", "RAG Architecture", "Prompt Engineering", "Agentic Frameworks", "Knowledge Graphs", "MCP", "MLOps"]
  },
  {
    title: "Backend & Systems",
    icon: Code2,
    skills: ["Python", "Java", "Go", "Docker", "REST APIs", "Microservices", "System Desgin"]
  },
  {
    title: "Data & Scaling",
    icon: Database,
    skills: ["Vector DB", "Distributed Systems", "PostgreSQL", "Data Integration", "Retrieval Optimization"]
  },
  {
    title: "Tools & Workflow",
    icon: Zap,
    skills: ["CrewAI", "LangGraph", "LangChain", "Git", "CI/CD Platforms"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[var(--color-secondary)]">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-20">
          <Cpu className="w-8 h-8" />
          <h2 className="text-5xl font-bold tracking-tighter uppercase italic">
            Technical Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <category.icon className="w-4 h-4 text-black" />
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-[13px] text-[var(--color-muted)] font-light leading-tight">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
