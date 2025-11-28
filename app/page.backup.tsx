"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useProjects } from "@/lib/hooks";

export default function Home() {
  const { featuredProjects } = useProjects();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl text-lg text-muted-foreground"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>

            {/* Stats or features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 w-full max-w-3xl"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Clean Code</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Writing maintainable, scalable solutions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Fast Performance</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Optimized for speed and efficiency
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Modern Design</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Beautiful, intuitive interfaces
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent work and side projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 text-center text-primary-foreground"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
