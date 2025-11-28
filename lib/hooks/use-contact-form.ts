"use client";

import { useState } from "react";
import { ContactFormData } from "../types";

interface UseContactFormReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submitForm: (data: ContactFormData) => Promise<void>;
  reset: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would send this to your backend
      console.log("Form submitted:", data);

      setIsSuccess(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    reset,
  };
}
