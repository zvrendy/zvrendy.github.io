import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ProjectDetailClient } from "./project-detail-client";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
