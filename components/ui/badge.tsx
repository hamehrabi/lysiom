import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outline: "text-foreground border border-current",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-error text-white",
        success: "bg-success text-white",
        warning: "bg-warning text-white",
        physics: "bg-physics text-white",
        medicine: "bg-medicine text-white",
        computerScience: "bg-computerScience text-white",
        biology: "bg-biology text-white",
        environmental: "bg-environmental text-white",
        engineering: "bg-engineering text-white",
        economics: "bg-economics text-white",
        psychology: "bg-psychology text-white",
        social: "bg-social text-white",
        space: "bg-space text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
