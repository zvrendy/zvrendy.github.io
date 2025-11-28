import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
};

interface SocialLinksProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function SocialLinks({ className, size = "icon" }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size={size}
          asChild
        >
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {iconMap[link.icon] || <span>{link.name[0]}</span>}
          </Link>
        </Button>
      ))}
    </div>
  );
}
