"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills, timeline } from "@/lib/data";
import { SkillCategory } from "@/lib/types";
import type { Metadata } from "next";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  const experiences = timeline.filter((item) => item.type === "experience");
  const education = timeline.filter((item) => item.type === "education");

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get to know more about my background, skills, and experience
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-20"
      >
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder-avatar.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
                  <p className="text-xl text-primary mb-4">{personalInfo.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{personalInfo.location}</span>
                  </div>
                  {personalInfo.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{personalInfo.phone}</span>
                    </div>
                  )}
                </div>

                <Button asChild>
                  <a href={personalInfo.resume} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <Card key={category}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-2">
                    <Badge variant={exp.current ? "default" : "secondary"}>
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.title}</h3>
                    <p className="text-primary font-medium">{edu.organization}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    {edu.startDate} - {edu.endDate}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
