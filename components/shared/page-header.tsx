import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  gradient?: "cosmic" | "sunset" | "aurora" | "nebula"
  icon?: string
  backgroundPattern?: boolean
  showBackButton?: boolean
}

export function PageHeader({
  title,
  description,
  gradient = "cosmic",
  icon,
  backgroundPattern = false,
  showBackButton = true,
}: PageHeaderProps) {
  const gradientClass = {
    cosmic: "gradient-text",
    sunset: "gradient-text-sunset",
    aurora: "gradient-text-aurora",
    nebula: "gradient-text-nebula",
  }[gradient]

  return (
    <div className={`py-12 relative overflow-hidden ${backgroundPattern ? "pixel-grid" : ""}`}>
      {backgroundPattern && (
        <>
          <div className="absolute inset-0 z-0">
            <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
            <div
              className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl bottom-1/4 -right-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-midnight)] to-transparent"></div>
        </>
      )}

      <div className="artisan-container relative z-10">
        {showBackButton && (
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>
        )}
        <div className="flex flex-col items-center text-center">
          {icon && (
            <div className="mb-6 w-16 h-16 flex items-center justify-center">
              <Image src={`/icons/${icon}.png`} alt={title} width={48} height={48} className="pixel-art" />
            </div>
          )}
          <h1 className={`text-2xl mb-4 ${gradientClass}`}>{title}</h1>
          {description && <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">{description}</p>}
        </div>
      </div>
    </div>
  )
}
