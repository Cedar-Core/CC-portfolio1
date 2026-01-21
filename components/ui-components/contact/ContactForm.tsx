"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input, Textarea, Label, Icon } from "@/components/ui";
import { Button } from "@/components/ui-components/shared";
import { motion, AnimatePresence } from "framer-motion";

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

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const MAX_MESSAGE_LENGTH = 500;

const validateField = (name: string, value: string): string | null => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.length < 2) return "Name is too short";
      return null;
    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email";
      }
      return null;
    case "subject":
      if (!value.trim()) return "Subject is required";
      return null;
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.length < 10) return "Message is too short (minimum 10 characters)";
      if (value.length > MAX_MESSAGE_LENGTH) return `Message is too long (maximum ${MAX_MESSAGE_LENGTH} characters)`;
      return null;
    default:
      return null;
  }
};

const ContactForm = ({ onSubmit, className }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (onSubmit) {
      onSubmit(formData);
    }

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
      setSubmitted(false);
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("text-center py-12 px-6", className)}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-6 bg-cedar/20 rounded-full flex items-center justify-center"
        >
          <Icon name="Check" size={40} className="text-cedar" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold text-foreground mb-3"
        >
          Message Sent!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-foreground-muted max-w-sm mx-auto"
        >
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </motion.p>
      </motion.div>
    );
  }

  const messageLength = formData.message.length;
  const isMessageNearLimit = messageLength > MAX_MESSAGE_LENGTH * 0.8;

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {/* Name and Email Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(
              touched.name && errors.name && "border-red-500/50 focus:border-red-500"
            )}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          <AnimatePresence>
            {touched.name && errors.name && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-red-400 flex items-center gap-1"
              >
                <Icon name="AlertCircle" size={12} />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2"
        >
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(
              touched.email && errors.email && "border-red-500/50 focus:border-red-500"
            )}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <AnimatePresence>
            {touched.email && errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-red-400 flex items-center gap-1"
              >
                <Icon name="AlertCircle" size={12} />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Subject */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="subject" className="text-sm font-medium">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            touched.subject && errors.subject && "border-red-500/50 focus:border-red-500"
          )}
          aria-invalid={touched.subject && !!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        <AnimatePresence>
          {touched.subject && errors.subject && (
            <motion.p
              id="subject-error"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-red-400 flex items-center gap-1"
            >
              <Icon name="AlertCircle" size={12} />
              {errors.subject}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-2"
      >
        <div className="flex items-center justify-between">
          <Label htmlFor="message" className="text-sm font-medium">
            Message
          </Label>
          <span
            className={cn(
              "text-xs font-mono transition-colors",
              isMessageNearLimit ? "text-primary" : "text-foreground-muted"
            )}
          >
            {messageLength}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            touched.message && errors.message && "border-red-500/50 focus:border-red-500"
          )}
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <AnimatePresence>
          {touched.message && errors.message && (
            <motion.p
              id="message-error"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-red-400 flex items-center gap-1"
            >
              <Icon name="AlertCircle" size={12} />
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          type="submit"
          text={isSubmitting ? "Sending..." : "Send Message"}
          rightIconName={isSubmitting ? undefined : "Send"}
          disabled={isSubmitting}
          className="w-full rounded-xl py-6 bg-linear-to-r from-primary to-secondary hover:opacity-90 disabled:opacity-50 transition-opacity"
        />
      </motion.div>
    </form>
  );
};

export default ContactForm;
