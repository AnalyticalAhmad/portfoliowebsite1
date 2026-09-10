import { ServicesHero } from "@/features/services/hero";
import { CapabilityStatement } from "@/features/services/capability-statement";
import { WebService } from "@/features/services/web-service";
import { MobileService } from "@/features/services/mobile-service";
import { FullstackService } from "@/features/services/fullstack-service";
import { VisualInterlude } from "@/features/services/visual-interlude";
import { UIImplementation } from "@/features/services/ui-implementation";
import { SurfaceToSystem } from "@/features/services/surface-to-system";
import { ProductLayers } from "@/features/services/product-layers";
import { BuildProcess } from "@/features/services/build-process";
import { TechnologyConnection } from "@/features/services/technology-connection";
import { ProjectTypes } from "@/features/services/project-types";
import { ServicesStatement } from "@/features/services/services-statement";
import { ServicesWorkCTA } from "@/features/services/services-work-cta";
import { ServicesContactCTA } from "@/features/services/services-contact-cta";

export default function Services() {
  return (
    <div className="w-full bg-bg-primary">
      <ServicesHero />
      <CapabilityStatement />
      <WebService />
      <MobileService />
      <FullstackService />
      <VisualInterlude />
      <UIImplementation />
      <SurfaceToSystem />
      <ProductLayers />
      <BuildProcess />
      <TechnologyConnection />
      <ProjectTypes />
      <ServicesStatement />
      <ServicesWorkCTA />
      <ServicesContactCTA />
    </div>
  );
}
