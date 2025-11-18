import React from "react";
import { cn } from "@/lib/utils";

export function ImportantNotesSection() {
  return (
    <section className={cn("")}>
      <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>Not tradable</li>
          <li>Non-expiring</li>
          <li>Minimum & maximum buying limits</li>
          <li>Pump/Tank protection</li>
        </ul>
        <div className="hidden md:block">
          <div className="w-full h-40 bg-zinc-200 dark:bg-zinc-800 rounded" />
        </div>
      </div>
    </section>
  );
}
