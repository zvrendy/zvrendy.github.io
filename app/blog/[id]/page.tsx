import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { BlogPostClient } from "./blog-post-client";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
