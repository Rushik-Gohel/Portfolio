import { motion, useScroll, useSpring } from 'motion/react';
import { ExternalLink, Github, MonitorPlay, Ruler, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  id: string;
  github?: string;
  visit?: string;
}

const projects: Project[] = [
  {
    title: "Safe Growth Researcher",
    subtitle: "LEAD_RESEARCH_MODULE",
    description: "Advanced AI-driven research platform focused on strategic growth analysis and safety-aligned technology forecasting.",
    tags: ["AI_Research", "Safety_Alignment", "Forecasting"],
    id: "SPEC_01",
    github: "https://github.com/Rushik-Gohel/Safe-Growth-Lead-Researcher/tree/main",
    visit: "https://rushiks-safe-growth-lead-researcher.onrender.com/"
  },
  {
    title: "API Agent",
    subtitle: "LIFECYCLE_AUTOMATION",
    description: "AI assistant built on an agentic framework automating API spec generation, validation, and governance enforcement.",
    tags: ["Agentic", "OpenAPI", "Governance"],
    id: "SPEC_03",
    visit: "https://www.ibm.com/products/api-connect/api-agent"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: "x"
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="projects" className="py-32 bg-[var(--color-secondary)] overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex items-center gap-4">
            <MonitorPlay className="w-8 h-8" />
            <h2 className="text-5xl font-bold tracking-tighter uppercase italic">
              Selected <br />
              Projects
            </h2>
          </div>
          <div className="flex flex-col items-end gap-4 min-w-[200px]">
            <div className="font-mono text-[9px] text-[var(--color-muted)] uppercase tracking-widest pb-2 border-b border-[var(--color-border)] w-full text-right">
              SCROLL TO EXPLORE — {projects.length} ITEMS
            </div>
            <div className="relative w-full h-px bg-[var(--color-border)] overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-black origin-left"
                style={{ scaleX, width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="min-w-[85vw] md:min-w-[400px] bg-white p-10 notebook-border snap-start flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="font-mono text-[10px] text-[var(--color-muted)]">
                      {project.id}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold uppercase mb-2 tracking-tight">{project.title}</h3>
                  <p className="font-mono text-[9px] text-[var(--color-muted)] uppercase tracking-widest mb-6 px-1.5 border-l border-black">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-base text-[var(--color-muted)] font-light leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-[var(--color-muted)] uppercase border border-[var(--color-border)] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 pt-10 mt-10 border-t border-[var(--color-border)]">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[var(--color-muted)] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                  {project.visit && (
                    <a 
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[var(--color-muted)] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
