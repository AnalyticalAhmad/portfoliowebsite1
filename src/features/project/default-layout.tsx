import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export function DefaultProjectLayout({ project }: { project: Project }) {
  return (
    <div className="w-full min-h-screen bg-bg-primary pt-32 pb-24">
      <article className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <header className="mb-16 md:mb-32">
          <h1 className="text-5xl md:text-[120px] leading-[0.9] font-medium tracking-tighter mb-8">
            {project.title}
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-8 text-text-secondary border-t border-border pt-8">
            <div className="max-w-md">
              <p className="text-lg text-text-primary mb-2 font-medium">Overview</p>
              <p>{project.description}</p>
            </div>
            <div>
              <p className="text-lg text-text-primary mb-2 font-medium">Role / Technologies</p>
              <ul className="flex flex-col gap-1">
                {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-lg text-text-primary mb-2 font-medium">Year</p>
              <p>{project.year}</p>
            </div>
          </div>
        </header>

        {/* Hero Media */}
        <div className="relative w-full aspect-video bg-bg-secondary mb-24 md:mb-48 overflow-hidden">
          <Image 
            src={project.cover} 
            alt={project.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>

        {/* Challenge / Solution (Placeholder for deeper case study content) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-48">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium">The Challenge</h2>
          </div>
          <div className="md:col-span-8 text-lg md:text-2xl text-text-secondary leading-relaxed">
            <p>
              Creating a premium experience requires balancing high-performance engineering with 
              meticulous design details. For {project.title}, the objective was to craft an interface 
              that feels native, responsive, and completely invisible to the user's ultimate goal.
            </p>
          </div>
        </section>

      </article>

      {/* Next Project Footer */}
      <div className="w-full bg-bg-dark text-text-inverse py-24 md:py-48 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <p className="text-text-inverse-secondary mb-8 uppercase tracking-widest text-sm">Next Project</p>
          <Link href="/work" className="text-5xl md:text-8xl font-medium hover:opacity-70 transition-opacity">
            Back to Archive
          </Link>
        </div>
      </div>
    </div>
  );
}
