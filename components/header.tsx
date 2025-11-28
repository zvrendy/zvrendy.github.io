"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Navigation } from "./navigation";
import { SocialLinks } from "./social-links";
import { personalInfo } from "@/lib/data";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </Link>

        {/* Navigation */}
        <Navigation />

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Social Links - Hidden on mobile */}
          <div className="hidden lg:flex">
            <SocialLinks />
          </div>

          {/* Resume Download */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:flex"
          >
            <a href={personalInfo.resume} download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
