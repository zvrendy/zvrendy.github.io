"use client";

import Link from "next/link";
import { SocialLinks } from "./social-links";
import { personalInfo } from "@/lib/data";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {personalInfo.title}
            </p>
            <SocialLinks className="flex gap-2" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.location}</p>
              {personalInfo.phone && <p>{personalInfo.phone}</p>}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
