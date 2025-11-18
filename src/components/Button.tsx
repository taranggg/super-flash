import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <HoverBorderGradient
      as="button"
      containerClassName="glassmorphic-btn-container"
      className="glassmorphic-btn"
      {...props}
    >
      {children}
    </HoverBorderGradient>
  );
}
