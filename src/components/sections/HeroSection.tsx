import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center text-center gap-6 pt-36 pb-24 "
      )}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400 drop-shadow-lg">
        Fast for everyone
      </h1>
      <p className="text-lg md:text-2xl max-w-xl mb-8 text-cyan-200">
        SuperFlash is the fastest way to buy FLASH USDT. Instant, secure, and
        trusted by thousands.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/payment/1" className="no-underline">
          <Button className="px-6 py-3 font-semibold">Buy Now</Button>
        </a>
        <a href="#how-it-works" className="no-underline">
          <Button className="px-6 py-3 font-semibold">How it works</Button>
        </a>
      </div>
    </section>
  );
}
