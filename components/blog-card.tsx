import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        {/* Blog Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder.jpg";
            }}
          />
        </div>

        {/* Content */}
        <CardHeader>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formattedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <Link href={`/blog/${post.id}`}>
            <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>

          <Badge variant="secondary" className="w-fit mt-2">
            {post.category}
          </Badge>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-1 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{post.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button asChild variant="default" size="sm" className="w-full">
            <Link href={`/blog/${post.id}`}>Read More</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
