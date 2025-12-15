"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input, Textarea, Label, Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = ({ onSubmit, className }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (onSubmit) {
      onSubmit(formData);
    }

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "text-center py-12 px-6 bg-surface dark:bg-surface rounded-2xl border border-border",
          className
        )}
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
          <Icon name="Check" size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-foreground-muted">
          Thank you for reaching out. Well get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        text={isSubmitting ? "Sending..." : "Send Message"}
        rightIconName="Send"
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
        className="w-full rounded-xl py-6 bg-linear-to-r from-primary to-secondary hover:opacity-90"
      />
    </form>
  );
};

export default ContactForm;
