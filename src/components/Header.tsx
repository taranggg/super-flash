"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  const [shrunk, setShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setShrunk(y > 36);
    };
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onScroll();
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navLinks = useMemo(
    () => [
      { name: "Resale", href: "/resale" },
      { name: "Operative", href: "/operative" },
      { name: "Buy", href: "/payment/1" },
    ],
    []
  );

  // Desktop classes
  const outerDesktop = shrunk
    ? "rounded-full backdrop-blur-xl bg-white/6 dark:bg-black/20 border border-white/8 dark:border-black/20 border-t border-white/20 shadow-lg"
    : "backdrop-blur-xl bg-white/6 dark:bg-black/20 border-b border-white/6 dark:border-black/10 shadow-none";
  const contentDesktop = shrunk
    ? "max-w-7xl mx-auto flex items-center justify-between px-4 py-2"
    : "max-w-7xl mx-auto flex items-center justify-between py-4 px-6";
  // Mobile classes
  const outerMobile = shrunk
    ? "rounded-full backdrop-blur-xl bg-white/6 dark:bg-black/20 border-b border-white/8 dark:border-black/20 shadow-sm"
    : "backdrop-blur-xl bg-white/6 dark:bg-black/20 border-b border-white/6 dark:border-black/10 shadow-none";
  const contentMobile =
    "max-w-7xl mx-auto flex items-center justify-between px-4 py-3";
  // Helper to prefix desktop classes with md:
  const mdPrefix = (str: string) =>
    str
      .split(/\s+/)
      .map((c) => `md:${c}`)
      .join(" ");
  const outerClassName = `${outerMobile} ${mdPrefix(outerDesktop)}`;
  const contentClass = `${contentMobile} ${mdPrefix(contentDesktop)}`;

  return (
    <motion.header
      initial={false}
      animate={{
        left: !isMobile && shrunk ? 160 : 0,
        right: !isMobile && shrunk ? 160 : 0,
        top: !isMobile && shrunk ? 24 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={outerClassName}
      style={{
        position: "fixed",
        zIndex: 50,
        WebkitBackdropFilter: "blur(12px)",
        backgroundClip: "padding-box",
        borderRadius: shrunk ? "9999px" : undefined,
      }}
    >
      <motion.div
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={contentClass}
      >
        {/* Text Logo */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/"
            aria-label="Go to top"
            className="flex items-center gap-2"
          >
            <img
              src="/logoText.png"
              alt="SuperFlash Logo"
              className="h-10 w-auto drop-shadow-lg"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={
                shrunk
                  ? "relative px-3 py-2 rounded-full text-sm font-medium text-cosmic-light/80 hover:bg-white/8 hover:text-cosmic-light transition-colors duration-200"
                  : "relative px-4 py-3 rounded-full text-base font-medium text-cosmic-light/90 hover:bg-white/8 hover:text-cosmic-light transition-colors duration-200"
              }
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
