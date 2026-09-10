import { ProjectIndex } from "@/features/work/project-index";
import { ProjectNovaaacode } from "@/features/work/project-novaaacode";
import { VisualInterlude } from "@/features/work/visual-interlude";
import { ProjectCVBuilder } from "@/features/work/project-cv-builder";
import { AdditionalProjects } from "@/features/work/additional-projects";
import { WorkPhilosophy } from "@/features/work/work-philosophy";
import { WorkCTA } from "@/features/work/work-cta";

export default function WorkIndex() {
  return (
    <div className="w-full bg-bg-primary">
      {/* Existing Work Hero */}
      <div className="pt-32 px-6 max-w-7xl mx-auto min-h-[50vh] md:min-h-[70vh] flex flex-col justify-end pb-24">
        <header className="mb-0">
          <h1 className="text-5xl md:text-8xl font-medium tracking-tight">Selected Work.</h1>
          <p className="text-text-secondary text-lg mt-6 max-w-md">
            An archive of digital experiences, platforms, and products designed and engineered by Novaaacode.
          </p>
        </header>
      </div>

      <ProjectIndex />
      <ProjectNovaaacode />
      <VisualInterlude />
      <ProjectCVBuilder />
      <AdditionalProjects />
      <WorkPhilosophy />
      <WorkCTA />
    </div>
  );
}
