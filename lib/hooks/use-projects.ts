"use client";

import { useState, useMemo } from "react";
import { projects } from "../data";
import { Project, ProjectFilters } from "../types";

export function useProjects(initialFilters?: ProjectFilters) {
  const [filters, setFilters] = useState<ProjectFilters>(initialFilters || {});

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          );
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && filters.category !== "all") {
        if (project.category !== filters.category) return false;
      }

      // Technology filter
      if (filters.technology && filters.technology !== "all") {
        if (!project.technologies.includes(filters.technology)) return false;
      }

      return true;
    });
  }, [filters]);

  const featuredProjects = useMemo(() => {
    return projects.filter((project) => project.featured);
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return Array.from(cats);
  }, []);

  const technologies = useMemo(() => {
    const techs = new Set(projects.flatMap((p) => p.technologies));
    return Array.from(techs).sort();
  }, []);

  return {
    projects: filteredProjects,
    featuredProjects,
    categories,
    technologies,
    filters,
    setFilters,
  };
}

export function useProjectDetail(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
