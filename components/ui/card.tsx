"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const cardVariants = cva("rounded-lg border border-border text-foreground", {
  variants: {
    variant: {
      default: "bg-foreground/5 shadow-sm",
      research: "bg-[var(--color-deep-space)] border-[var(--color-twilight)] artisan-card",
      fullscreen: "fixed inset-0 z-50 flex flex-col bg-[var(--color-midnight)] overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  onClose?: () => void
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, onClose, children, ...props }, ref) => {
  const isFullscreen = variant === "fullscreen"

  return (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, className }),
        isFullscreen && "animate-in fade-in duration-300 research-fullscreen-mode",
      )}
      {...props}
      tabIndex={isFullscreen ? 0 : undefined}
      aria-modal={isFullscreen ? true : undefined}
      role={isFullscreen ? "dialog" : undefined}
      onKeyDown={isFullscreen && onClose ? (e) => e.key === "Escape" && onClose() : undefined}
    >
      {isFullscreen && (
        <div className="absolute inset-0 -z-10 pixel-grid">
          <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
          <div
            className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl bottom-1/4 -right-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-72 h-72 rounded-full bg-[var(--color-nebula)] blur-3xl top-3/4 left-1/3 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      )}

      {isFullscreen && onClose && (
        <div className="flex justify-end p-2 absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-[var(--color-twilight)] flex items-center justify-center hover:bg-[var(--color-cosmic-dust)] transition-colors"
            aria-label="Close fullscreen view"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      {children}
    </div>
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted", className)} {...props} />,
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

// New components for research functionality
const ResearchToolbar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-4 border-b border-[var(--color-twilight)] bg-[var(--color-deep-space)]",
        className,
      )}
      {...props}
    />
  ),
)
ResearchToolbar.displayName = "ResearchToolbar"

const ResearchSidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-64 border-r border-[var(--color-twilight)] bg-[var(--color-deep-space)] h-full overflow-y-auto",
        className,
      )}
      {...props}
    />
  ),
)
ResearchSidebar.displayName = "ResearchSidebar"

const ResearchContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 overflow-y-auto p-6", className)} {...props} />
  ),
)
ResearchContent.displayName = "ResearchContent"

const ResearchPanel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { title: string; icon?: React.ReactNode }
>(({ className, title, icon, children, ...props }, ref) => (
  <div ref={ref} className={cn("mb-6 artisan-card p-4", className)} {...props}>
    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[var(--color-twilight)]">
      {icon}
      <h4 className="font-['Press_Start_2P'] text-xs gradient-text">{title}</h4>
    </div>
    {children}
  </div>
))
ResearchPanel.displayName = "ResearchPanel"

const ResearchOption = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean }
>(({ className, selected, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "w-full text-left p-3 mb-2 text-sm border border-[var(--color-twilight)] hover:border-[var(--color-aurora)] transition-colors",
      selected ? "bg-[var(--color-twilight)] border-[var(--color-aurora)]" : "bg-[var(--color-deep-space)]",
      className,
    )}
    {...props}
  >
    {children}
  </button>
))
ResearchOption.displayName = "ResearchOption"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ResearchToolbar,
  ResearchSidebar,
  ResearchContent,
  ResearchPanel,
  ResearchOption,
}
