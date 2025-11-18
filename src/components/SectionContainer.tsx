import { cn } from "@/lib/utils";
import React from "react";

export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("max-w-screen-xl mx-auto px-6 py-12 ", className)}>
      {children}
    </section>
  );
}
