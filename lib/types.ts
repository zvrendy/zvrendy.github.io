// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  readTime: number;
  image: string;
}

// Skill types
export interface Skill {
  name: string;
  level: number; // 1-100
  category: SkillCategory;
  icon?: string;
}

export enum SkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  DEVOPS = "DevOps",
  TOOLS = "Tools",
  OTHER = "Other"
}

// Experience & Education types
export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  type: "experience" | "education";
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social links types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Personal info types
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  phone?: string;
  avatar: string;
  resume: string;
}

// Filter types
export interface ProjectFilters {
  search?: string;
  category?: string;
  technology?: string;
}

export interface BlogFilters {
  search?: string;
  category?: string;
  tag?: string;
}
