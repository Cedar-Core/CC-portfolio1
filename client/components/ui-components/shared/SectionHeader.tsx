import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="text-primary font-medium text-sm uppercase tracking-wider">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mt-3 mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-foreground-secondary dark:text-foreground-muted",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
