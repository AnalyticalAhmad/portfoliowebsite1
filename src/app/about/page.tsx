import { AboutHero } from "@/features/about/hero";
import { PersonalIntro } from "@/features/about/personal-intro";
import { DesignEngineering } from "@/features/about/design-engineering";
import { ProductPrinciples } from "@/features/about/product-principles";
import { CapabilitiesOverview } from "@/features/about/capabilities-overview";
import { BuiltAroundCuriosity } from "@/features/about/built-around-curiosity";
import { TypographyInterlude } from "@/features/about/typography-interlude";
import { TechnologyToolbox } from "@/features/about/technology-toolbox";
import { BuildProcess } from "@/features/about/build-process";
import { CurrentFocus } from "@/features/about/current-focus";
import { PersonalStatement } from "@/features/about/personal-statement";
import { AboutWorkCTA } from "@/features/about/about-work-cta";
import { AboutContactCTA } from "@/features/about/about-contact-cta";

export default function About() {
  return (
    <div className="w-full bg-bg-primary">
      <AboutHero />
      <PersonalIntro />
      <DesignEngineering />
      <ProductPrinciples />
      <CapabilitiesOverview />
      <BuiltAroundCuriosity />
      <TypographyInterlude />
      <TechnologyToolbox />
      <BuildProcess />
      <CurrentFocus />
      <PersonalStatement />
      <AboutWorkCTA />
      <AboutContactCTA />
    </div>
  );
}
