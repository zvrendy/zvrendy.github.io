"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProjects } from "@/lib/hooks";

export default function ProjectsPage() {
  const { projects, categories, technologies, filters, setFilters } = useProjects();
  const [searchInput, setSearchInput] = useState(filters.search || "");

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    setFilters({ ...filters, search: value });
  };

  const handleCategoryChange = (value: string) => {
    setFilters({ ...filters, category: value });
  };

  const handleTechnologyChange = (value: string) => {
    setFilters({ ...filters, technology: value });
  };

  const clearFilters = () => {
    setSearchInput("");
    setFilters({});
  };

  const hasActiveFilters = filters.search || filters.category || filters.technology;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of web development projects and applications
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select
            value={filters.category || "all"}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Technology Filter */}
          <Select
            value={filters.technology || "all"}
            onValueChange={handleTechnologyChange}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Technology" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Technologies</SelectItem>
              {technologies.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <p className="text-sm text-muted-foreground">
          Showing {projects.length} project{projects.length !== 1 ? "s" : ""}
        </p>
      </motion.div>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <p className="text-lg text-muted-foreground mb-4">
            No projects found matching your criteria
          </p>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </motion.div>
      )}
    </div>
  );
}
