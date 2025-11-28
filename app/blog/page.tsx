"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBlogPosts } from "@/lib/hooks";

export default function BlogPage() {
  const { posts, categories, tags, filters, setFilters } = useBlogPosts();
  const [searchInput, setSearchInput] = useState(filters.search || "");

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    setFilters({ ...filters, search: value });
  };

  const handleCategoryChange = (value: string) => {
    setFilters({ ...filters, category: value });
  };

  const handleTagChange = (value: string) => {
    setFilters({ ...filters, tag: value });
  };

  const clearFilters = () => {
    setSearchInput("");
    setFilters({});
  };

  const hasActiveFilters = filters.search || filters.category || filters.tag;

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
          Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development
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
              placeholder="Search blog posts..."
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

          {/* Tag Filter */}
          <Select value={filters.tag || "all"} onValueChange={handleTagChange}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tags</SelectItem>
              {tags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
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
          Showing {posts.length} post{posts.length !== 1 ? "s" : ""}
        </p>
      </motion.div>

      {/* Blog Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <BlogCard post={post} />
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
            No blog posts found matching your criteria
          </p>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </motion.div>
      )}
    </div>
  );
}
