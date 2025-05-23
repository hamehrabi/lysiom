import type React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

interface ProblemCardProps {
  id: string
  title: string
  description: string
  discipline: {
    id: string
    name: string
  }
  difficulty: "Low" | "Medium" | "High"
  submissions: number
  status: "active" | "solved"
  icon?: React.ReactNode
}

export function ProblemCard({
  id,
  title,
  description,
  discipline,
  difficulty,
  submissions,
  status,
  icon,
}: ProblemCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "low":
        return "success"
      case "medium":
        return "warning"
      case "high":
        return "error"
      default:
        return "default"
    }
  }

  const getDisciplineColor = (disciplineId: string) => {
    switch (disciplineId) {
      case "physics-astronomy":
        return "physics"
      case "medicine-healthcare":
        return "medicine"
      case "computer-science-ai":
        return "computerScience"
      case "biology":
        return "biology"
      case "environmental-science":
        return "environmental"
      case "engineering":
        return "engineering"
      case "economics":
        return "economics"
      case "psychology-neuroscience":
        return "psychology"
      case "social-sciences":
        return "social"
      case "space-exploration":
        return "space"
      default:
        return "default"
    }
  }

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="bg-background/50 p-6 flex justify-center items-center h-40">
        {icon || (
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-3xl">?</span>
          </div>
        )}
      </div>
      <CardContent className="flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={getDisciplineColor(discipline.id)}>{discipline.name}</Badge>
          <Badge variant={getDifficultyColor(difficulty)}>{difficulty}</Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Users className="h-4 w-4" />
          <span>{submissions} submissions</span>
        </div>
        <Link href={`/problems/${id}`}>
          <Button variant="ghost" size="sm" className="gap-1">
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
