interface SectionHeaderProps {
  title: string
  description?: string
  gradient?: "cosmic" | "sunset" | "aurora" | "nebula"
  alignment?: "left" | "center" | "right"
}

export function SectionHeader({ title, description, gradient = "cosmic", alignment = "center" }: SectionHeaderProps) {
  const gradientClass = {
    cosmic: "gradient-text",
    sunset: "gradient-text-sunset",
    aurora: "gradient-text-aurora",
    nebula: "gradient-text-nebula",
  }[gradient]

  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[alignment]

  return (
    <div className={`mb-12 ${alignmentClass}`}>
      <h2 className={`text-xl mb-4 ${gradientClass}`}>{title}</h2>
      {description && <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
