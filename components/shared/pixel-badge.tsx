import type React from "react"

interface PixelBadgeProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "secondary" | "accent" | "highlight"
  size?: "sm" | "md" | "lg"
}

export function PixelBadge({ children, variant = "default", size = "md" }: PixelBadgeProps) {
  const variantClass = {
    default: "bg-[var(--color-twilight)] text-[var(--color-text-primary)]",
    primary: "bg-[var(--color-plasma)] text-[var(--color-text-primary)]",
    secondary: "bg-[var(--color-aurora)] text-[var(--color-midnight)]",
    accent: "bg-[var(--color-nebula)] text-[var(--color-text-primary)]",
    highlight: "bg-[var(--color-solar)] text-[var(--color-midnight)]",
  }[variant]

  const sizeClass = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  }[size]

  return <span className={`inline-block ${variantClass} ${sizeClass} font-['VT323']`}>{children}</span>
}
