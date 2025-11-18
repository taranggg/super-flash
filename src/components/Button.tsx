import React from "react";

export function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "relative px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-[rgba(20,20,30,0.7)] text-white shadow-xl backdrop-blur-lg border border-[rgba(255,255,255,0.12)] hover:border-cyan-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 " +
        (props.className || "")
      }
      style={{
        borderRadius: "9999px",
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(8px)",
        border: "2px solid rgba(255,255,255,0.12)",
        background: "rgba(20,20,30,0.7)",
      }}
    >
      {children}
      <span className="absolute inset-0 rounded-full pointer-events-none border-2 border-transparent hover:border-cyan-400 transition-all duration-200" />
    </button>
  );
}
