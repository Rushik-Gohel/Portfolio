import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "AI Engineer",
    company: "IBM Labs",
    period: "Jan 2024 – Present",
    description:
      "Contributing to the development of generative AI-powered tools that streamline backend processes and enhance user experience across integration and API lifecycle platforms.",

    highlights: [
      "Architected and deployed <strong>scalable, production-ready AI systems</strong> using <strong>GenAI</strong>, <strong>RAG</strong>, <strong>Knowledge Graphs</strong>, and <strong>Agentic Frameworks</strong> across IBM App Connect and API Connect platforms.",

      "Built <strong>Flow Assist</strong>, an LLM-powered conversational assistant enabling natural-language integration flow creation, achieving <strong>5× faster backend response times</strong> and <strong>10× lower deployment latency</strong>.",

      "Engineered AI-driven template generation pipelines leveraging <strong>IBM Granite</strong>, <strong>RAG</strong>, and automated mapping systems, reducing template development time from <strong>20 days to 2 days</strong> while generating <strong>61 production-ready templates in a single day</strong>.",

      "Developed intelligent API lifecycle automation solutions through <strong>API Agent</strong>, enabling automated <strong>OpenAPI generation</strong>, governance validation, testing workflows, and conversational developer assistance.",

      "Optimized enterprise-scale backend workflows and developer productivity by designing <strong>high-performance AI automation systems</strong> that reduced <strong>API development cycles by up to 70%</strong> and improved compliance accuracy through automated governance enforcement."
    ]
  },

  {
    role: "Technical Consultant Intern",
    company: "Microsoft",
    period: "June 2022 – July 2022",
    description:
      "Identified and resolved complex technical issues for enterprise clients, focusing on cloud infrastructure and software delivery optimization.",

    highlights: [
      "Collaborated with cross-functional teams to deliver technical solutions.",
      "Assisted in the deployment and configuration of Azure cloud services.",
      "Conducted technical assessments and provided recommendations for system improvements.",
      "Documented technical workflows and solutions for client reference."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-20">
          <Briefcase className="w-8 h-8" />
          
          <h2 className="text-5xl font-bold tracking-tighter uppercase italic">
            Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative border-l border-neutral-200 pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-black" />

              <div className="flex flex-col md:flex-row gap-10 md:gap-20">

                {/* Left Column */}
                <div className="w-full md:w-1/3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3 block">
                    {exp.period}
                  </span>

                  <h3 className="text-3xl font-bold uppercase tracking-tight">
                    {exp.role}
                  </h3>

                  <p className="font-mono text-xs text-neutral-500 uppercase tracking-[0.18em] mt-2">
                    {exp.company}
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-1 space-y-8">

                  {/* Description */}
                  <p className="text-lg text-neutral-600 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-4 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-3 flex-shrink-0" />

                        <p
                          className="text-[15px] md:text-base text-neutral-600 font-light leading-relaxed transition-colors duration-200 group-hover:text-black [&_strong]:text-black [&_strong]:font-semibold"
                          dangerouslySetInnerHTML={{ __html: highlight }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}