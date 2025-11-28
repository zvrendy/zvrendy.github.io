"use client";

import { useState, useMemo } from "react";
import { blogPosts } from "../data";
import { BlogPost, BlogFilters } from "../types";

export function useBlogPosts(initialFilters?: BlogFilters) {
  const [filters, setFilters] = useState<BlogFilters>(initialFilters || {});

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.content.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && filters.category !== "all") {
        if (post.category !== filters.category) return false;
      }

      // Tag filter
      if (filters.tag && filters.tag !== "all") {
        if (!post.tags.includes(filters.tag)) return false;
      }

      return true;
    });
  }, [filters]);

  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map((p) => p.category));
    return Array.from(cats);
  }, []);

  const tags = useMemo(() => {
    const allTags = new Set(blogPosts.flatMap((p) => p.tags));
    return Array.from(allTags).sort();
  }, []);

  const recentPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 5);
  }, []);

  return {
    posts: filteredPosts,
    recentPosts,
    categories,
    tags,
    filters,
    setFilters,
  };
}

export function useBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
