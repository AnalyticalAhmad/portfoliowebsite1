import { projects } from "@/data/projects";
import { DefaultProjectLayout } from "@/features/project/default-layout";
import { notFound } from "next/navigation";

// Next.js 15 route params type
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <DefaultProjectLayout project={project} />;
}
