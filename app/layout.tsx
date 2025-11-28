import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "full stack",
    "React",
    "Next.js",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: personalInfo.name,
    description: personalInfo.bio,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: personalInfo.name,
    description: personalInfo.bio,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            {/* Header and Footer hidden during maintenance */}
            {/* <Header /> */}
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
