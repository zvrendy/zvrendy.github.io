import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder.jpg";
            }}
          />
          {project.featured && (
            <Badge className="absolute top-2 right-2">Featured</Badge>
          )}
        </div>

        {/* Content */}
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <Link href={`/projects/${project.id}`} className="flex-1">
              <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>
            </Link>
          </div>
          <Badge variant="secondary" className="w-fit">
            {project.category}
          </Badge>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button asChild variant="default" size="sm" className="flex-1">
            <Link href={`/projects/${project.id}`}>View Details</Link>
          </Button>
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub repository"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
