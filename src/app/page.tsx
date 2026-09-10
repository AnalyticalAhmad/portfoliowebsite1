import { HeroComposition } from "@/features/home/hero";
import { IdentityStatement } from "@/features/home/identity-statement";
import { SelectedWorkIntro } from "@/features/home/selected-work-intro";
import { FeaturedProjects } from "@/features/home/featured-project";
import { FeaturedWorkExit } from "@/features/home/featured-work-exit";
import { MotionInterlude } from "@/features/home/motion-interlude";
import { Capabilities } from "@/features/home/capabilities";
import { PhilosophyStatement } from "@/features/home/philosophy-statement";
import { TechnologyExperience } from "@/features/home/technology-experience";
import { AboutTeaser } from "@/features/home/about-teaser";
import { FinalCTA } from "@/features/home/final-cta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroComposition />
      <IdentityStatement />
      <SelectedWorkIntro />
      <FeaturedProjects />
      <FeaturedWorkExit />
      <MotionInterlude />
      <Capabilities />
      <PhilosophyStatement />
      <TechnologyExperience />
      <AboutTeaser />
      <FinalCTA />
    </div>
  );
}
