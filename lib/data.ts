import {
  Project,
  BlogPost,
  Skill,
  SkillCategory,
  TimelineItem,
  PersonalInfo,
  SocialLink,
} from "./types";

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Full Stack Developer & UI/UX Enthusiast",
  bio: "Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in React, Next.js, and Node.js with a keen eye for design and user experience. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  email: "john.doe@example.com",
  location: "San Francisco, CA",
  phone: "+1 (555) 123-4567",
  avatar: "/images/avatar.jpg",
  resume: "/resume.pdf",
};

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:john.doe@example.com",
    icon: "mail",
  },
];

// Skills
export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: SkillCategory.FRONTEND },
  { name: "Next.js", level: 90, category: SkillCategory.FRONTEND },
  { name: "TypeScript", level: 90, category: SkillCategory.FRONTEND },
  { name: "JavaScript", level: 95, category: SkillCategory.FRONTEND },
  { name: "HTML/CSS", level: 95, category: SkillCategory.FRONTEND },
  { name: "Tailwind CSS", level: 90, category: SkillCategory.FRONTEND },
  { name: "Vue.js", level: 75, category: SkillCategory.FRONTEND },
  { name: "Redux", level: 85, category: SkillCategory.FRONTEND },

  // Backend
  { name: "Node.js", level: 90, category: SkillCategory.BACKEND },
  { name: "Express", level: 85, category: SkillCategory.BACKEND },
  { name: "Python", level: 80, category: SkillCategory.BACKEND },
  { name: "Django", level: 75, category: SkillCategory.BACKEND },
  { name: "REST API", level: 90, category: SkillCategory.BACKEND },
  { name: "GraphQL", level: 80, category: SkillCategory.BACKEND },

  // Database
  { name: "PostgreSQL", level: 85, category: SkillCategory.DATABASE },
  { name: "MongoDB", level: 85, category: SkillCategory.DATABASE },
  { name: "Redis", level: 75, category: SkillCategory.DATABASE },
  { name: "Prisma", level: 80, category: SkillCategory.DATABASE },

  // DevOps
  { name: "Docker", level: 80, category: SkillCategory.DEVOPS },
  { name: "AWS", level: 75, category: SkillCategory.DEVOPS },
  { name: "CI/CD", level: 80, category: SkillCategory.DEVOPS },
  { name: "Vercel", level: 90, category: SkillCategory.DEVOPS },

  // Tools
  { name: "Git", level: 95, category: SkillCategory.TOOLS },
  { name: "VS Code", level: 95, category: SkillCategory.TOOLS },
  { name: "Figma", level: 85, category: SkillCategory.TOOLS },
  { name: "Postman", level: 90, category: SkillCategory.TOOLS },
];

// Timeline (Experience & Education)
export const timeline: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Senior Full Stack Developer",
    organization: "TechCorp Inc.",
    location: "San Francisco, CA",
    startDate: "2022-01",
    current: true,
    description: "Leading development of enterprise-scale web applications using React, Next.js, and Node.js",
    achievements: [
      "Architected and developed a microservices-based platform serving 100k+ users",
      "Reduced page load time by 60% through optimization and code splitting",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipeline reducing deployment time by 75%"
    ],
    type: "experience",
  },
  {
    id: "exp-2",
    title: "Full Stack Developer",
    organization: "StartupXYZ",
    location: "San Francisco, CA",
    startDate: "2020-03",
    endDate: "2021-12",
    current: false,
    description: "Developed and maintained multiple client-facing web applications",
    achievements: [
      "Built responsive web applications using React and Node.js",
      "Integrated third-party APIs and payment gateways",
      "Improved application performance by 40%",
      "Collaborated with designers to implement pixel-perfect UIs"
    ],
    type: "experience",
  },
  {
    id: "exp-3",
    title: "Frontend Developer",
    organization: "WebAgency Co.",
    location: "Remote",
    startDate: "2019-01",
    endDate: "2020-02",
    current: false,
    description: "Created modern, responsive websites for various clients",
    achievements: [
      "Developed 20+ websites using React and Vue.js",
      "Implemented SEO best practices increasing organic traffic by 150%",
      "Created reusable component libraries",
      "Worked directly with clients to gather requirements"
    ],
    type: "experience",
  },
  {
    id: "edu-1",
    title: "Bachelor of Science in Computer Science",
    organization: "University of California",
    location: "Berkeley, CA",
    startDate: "2015-09",
    endDate: "2019-05",
    current: false,
    description: "Focused on software engineering and web development",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List all semesters",
      "President of Web Development Club",
      "Completed senior thesis on Progressive Web Applications"
    ],
    type: "education",
  },
];

// Projects
export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and admin dashboard",
    longDescription: `
A comprehensive e-commerce solution built with Next.js and Node.js. Features include product catalog, shopping cart, secure checkout with Stripe integration, order management, and a full-featured admin dashboard.

The platform handles thousands of daily transactions and provides a seamless shopping experience with real-time inventory updates, personalized recommendations, and advanced search capabilities.

Key technical highlights include server-side rendering for SEO, optimistic UI updates, comprehensive error handling, and a fully responsive design that works flawlessly across all devices.
    `,
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    image: "/images/projects/ecommerce.jpg",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    featured: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task management application with team features",
    longDescription: `
A powerful task management application designed for teams. Built with React and Firebase, it offers real-time collaboration, drag-and-drop task organization, team workspaces, and comprehensive project tracking.

Features include Kanban boards, Gantt charts, time tracking, file attachments, comments, and notifications. The app uses WebSocket connections for instant updates across all team members.

The application emphasizes user experience with smooth animations, keyboard shortcuts, and an intuitive interface that makes project management effortless.
    `,
    technologies: ["React", "Firebase", "Material-UI", "Redux", "WebSocket"],
    category: "Frontend",
    image: "/images/projects/taskmanager.jpg",
    images: [
      "/images/projects/taskmanager-1.jpg",
      "/images/projects/taskmanager-2.jpg",
    ],
    liveUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/johndoe/task-manager",
    featured: true,
    createdAt: "2023-11-20",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI GPT API",
    longDescription: `
An innovative content generation platform that leverages OpenAI's GPT models to help users create high-quality written content. The application supports multiple content types including blog posts, social media content, email templates, and more.

Built with Next.js and Python, the platform features a clean interface for input customization, real-time preview, content history, and export options. It includes advanced features like tone adjustment, length control, and SEO optimization.

The backend implements rate limiting, caching, and cost optimization strategies to ensure efficient API usage while maintaining high-quality output.
    `,
    technologies: ["Next.js", "Python", "OpenAI API", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    image: "/images/projects/ai-content.jpg",
    images: [
      "/images/projects/ai-content-1.jpg",
      "/images/projects/ai-content-2.jpg",
    ],
    liveUrl: "https://ai-content-demo.example.com",
    githubUrl: "https://github.com/johndoe/ai-content-generator",
    featured: true,
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with forecasts and interactive maps",
    longDescription: `
A visually stunning weather dashboard that provides current conditions, hourly and daily forecasts, and interactive weather maps. The application integrates multiple weather APIs to provide accurate and comprehensive data.

Features include location-based weather, search functionality, favorite locations, severe weather alerts, and detailed meteorological data. The UI adapts based on current weather conditions with dynamic backgrounds and themed components.

Built with modern web technologies, the dashboard is fully responsive and works offline using service workers and cached data.
    `,
    technologies: ["React", "Weather API", "Mapbox", "Chart.js", "CSS"],
    category: "Frontend",
    image: "/images/projects/weather.jpg",
    images: ["/images/projects/weather-1.jpg"],
    liveUrl: "https://weather-demo.example.com",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    featured: false,
    createdAt: "2023-08-05",
  },
  {
    id: "5",
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media performance",
    longDescription: `
A comprehensive analytics platform that helps businesses track and analyze their social media performance across multiple platforms. The dashboard provides insights into engagement, reach, follower growth, and content performance.

Features include custom date ranges, comparative analysis, automated reporting, sentiment analysis, and competitor tracking. The platform integrates with major social media APIs and uses machine learning for trend prediction.

Built with scalability in mind, it handles large datasets efficiently and provides real-time updates through a sophisticated data pipeline.
    `,
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "D3.js", "Express"],
    category: "Full Stack",
    image: "/images/projects/analytics.jpg",
    images: [
      "/images/projects/analytics-1.jpg",
      "/images/projects/analytics-2.jpg",
    ],
    githubUrl: "https://github.com/johndoe/social-analytics",
    featured: false,
    createdAt: "2023-06-12",
  },
  {
    id: "6",
    title: "Recipe Sharing Platform",
    description: "Community platform for sharing and discovering recipes",
    longDescription: `
A vibrant community platform where food enthusiasts can share, discover, and save recipes. The platform features user profiles, recipe collections, ratings and reviews, and a sophisticated search system with filters for dietary restrictions, cuisine types, and cooking time.

Users can create meal plans, generate shopping lists, and interact with other members through comments and favorites. The platform includes a recipe scaling feature and nutritional information integration.

The responsive design ensures a great experience on all devices, with special attention to mobile usability for kitchen use.
    `,
    technologies: ["Next.js", "MongoDB", "Cloudinary", "Tailwind CSS", "NextAuth"],
    category: "Full Stack",
    image: "/images/projects/recipes.jpg",
    images: ["/images/projects/recipes-1.jpg", "/images/projects/recipes-2.jpg"],
    liveUrl: "https://recipes-demo.example.com",
    githubUrl: "https://github.com/johndoe/recipe-platform",
    featured: false,
    createdAt: "2023-04-18",
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 14 and Server Components",
    excerpt: "Learn how to build modern web applications using Next.js 14's powerful server components and app router.",
    content: `
# Getting Started with Next.js 14 and Server Components

Next.js 14 introduces powerful new features that make building web applications faster and more efficient. In this post, we'll explore server components and how they can revolutionize your development workflow.

## What are Server Components?

Server Components are a new way to build React applications that render on the server by default. This approach offers several benefits:

- **Better Performance**: Less JavaScript sent to the client
- **Improved SEO**: Content is rendered on the server
- **Direct Database Access**: Query data directly in components
- **Automatic Code Splitting**: Only load what's needed

## Building Your First Server Component

\`\`\`tsx
// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
      <h1>Server Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
\`\`\`

## Key Takeaways

Server Components represent a paradigm shift in how we build React applications. By embracing this new model, we can create faster, more efficient applications with better user experiences.

Stay tuned for more posts about Next.js 14!
    `,
    author: "John Doe",
    publishedAt: "2024-01-20",
    tags: ["Next.js", "React", "Web Development"],
    category: "Tutorial",
    readTime: 8,
    image: "/images/blog/nextjs-14.jpg",
  },
  {
    id: "2",
    title: "Mastering TypeScript: Advanced Types and Patterns",
    excerpt: "Deep dive into TypeScript's advanced type system and common patterns for building type-safe applications.",
    content: `
# Mastering TypeScript: Advanced Types and Patterns

TypeScript has become the de facto standard for building large-scale JavaScript applications. Let's explore some advanced patterns that will make your code more robust and maintainable.

## Conditional Types

Conditional types allow you to create types that depend on other types:

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type Result1 = IsString<"hello">; // true
type Result2 = IsString<42>; // false
\`\`\`

## Mapped Types

Transform existing types into new ones:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
\`\`\`

## Template Literal Types

Create string types based on patterns:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ClickEvent = EventName<"click">; // "onClick"
\`\`\`

## Conclusion

TypeScript's type system is incredibly powerful. By mastering these advanced patterns, you can write code that is both flexible and type-safe.
    `,
    author: "John Doe",
    publishedAt: "2024-02-05",
    tags: ["TypeScript", "JavaScript", "Programming"],
    category: "Tutorial",
    readTime: 12,
    image: "/images/blog/typescript.jpg",
  },
  {
    id: "3",
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to web accessibility and how to make your applications usable for everyone.",
    content: `
# Building Accessible Web Applications

Web accessibility is not just a nice-to-have feature—it's a fundamental requirement for creating inclusive web experiences. Let's explore how to build accessible applications from the ground up.

## Why Accessibility Matters

- **Inclusivity**: 15% of the world's population has some form of disability
- **Legal Requirements**: Many countries have accessibility laws
- **Better UX**: Accessible design benefits everyone
- **SEO**: Accessible sites rank better in search engines

## Key Principles (WCAG)

1. **Perceivable**: Information must be presentable to users in ways they can perceive
2. **Operable**: UI components must be operable by all users
3. **Understandable**: Information and UI operation must be understandable
4. **Robust**: Content must be robust enough to work with assistive technologies

## Practical Tips

### Semantic HTML

\`\`\`html
<!-- Bad -->
<div onclick="handleClick()">Click me</div>

<!-- Good -->
<button onclick="handleClick()">Click me</button>
\`\`\`

### ARIA Labels

\`\`\`html
<button aria-label="Close dialog">
  <svg>...</svg>
</button>
\`\`\`

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

\`\`\`typescript
function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ') {
    handleAction();
  }
}
\`\`\`

## Testing for Accessibility

- Use screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation testing
- Automated tools (axe, Lighthouse)
- Color contrast checkers

## Conclusion

Building accessible web applications is an ongoing process that requires attention and care. By following these principles, we can create experiences that work for everyone.
    `,
    author: "John Doe",
    publishedAt: "2024-03-01",
    tags: ["Accessibility", "Web Development", "UX"],
    category: "Best Practices",
    readTime: 10,
    image: "/images/blog/accessibility.jpg",
  },
  {
    id: "4",
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Learn how to identify and fix performance bottlenecks in your React applications.",
    content: `
# Optimizing React Performance: Tips and Tricks

Performance is crucial for user experience. Let's explore various techniques to make your React applications blazing fast.

## Use React DevTools Profiler

The React DevTools Profiler helps identify performance bottlenecks:

\`\`\`tsx
import { Profiler } from 'react';

function onRenderCallback(
  id: string,
  phase: string,
  actualDuration: number
) {
  console.log(\`\${id} took \${actualDuration}ms\`);
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
\`\`\`

## Memoization Techniques

### React.memo

\`\`\`tsx
const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
\`\`\`

### useMemo

\`\`\`tsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

### useCallback

\`\`\`tsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Code Splitting

Use dynamic imports to split your code:

\`\`\`tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
\`\`\`

## Virtual Lists

For long lists, use virtualization:

\`\`\`tsx
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={35}
>
  {Row}
</FixedSizeList>
\`\`\`

## Conclusion

React performance optimization is about finding the right balance. Don't over-optimize, but do measure and improve where it matters most.
    `,
    author: "John Doe",
    publishedAt: "2024-02-20",
    tags: ["React", "Performance", "Optimization"],
    category: "Tutorial",
    readTime: 15,
    image: "/images/blog/react-performance.jpg",
  },
];
