"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <AlertCircle className="h-20 w-20 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Something went wrong!</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          An error occurred while loading this page. Please try again.
        </p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
