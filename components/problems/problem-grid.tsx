import { ProblemCard } from "@/components/problems/problem-card"
import { Atom, Stethoscope, CircuitBoard, Leaf, Droplet, Zap, BarChart3, Brain, Users, Rocket } from "lucide-react"

interface Problem {
  id: string
  title: string
  description: string
  disciplineId: string
  difficulty: "Low" | "Medium" | "High"
  metrics: {
    submissions: number
  }
  status: "active" | "solved"
}

interface Discipline {
  id: string
  name: string
  icon: string
}

interface ProblemGridProps {
  problems: Problem[]
  disciplines: Record<string, Discipline>
}

export function ProblemGrid({ problems, disciplines }: ProblemGridProps) {
  const getIconForDiscipline = (iconName: string) => {
    switch (iconName) {
      case "atom":
        return <Atom className="h-12 w-12 text-physics" />
      case "stethoscope":
        return <Stethoscope className="h-12 w-12 text-medicine" />
      case "circuit":
        return <CircuitBoard className="h-12 w-12 text-computerScience" />
      case "leaf":
        return <Leaf className="h-12 w-12 text-biology" />
      case "droplet":
        return <Droplet className="h-12 w-12 text-environmental" />
      case "zap":
        return <Zap className="h-12 w-12 text-engineering" />
      case "chart":
        return <BarChart3 className="h-12 w-12 text-economics" />
      case "brain":
        return <Brain className="h-12 w-12 text-psychology" />
      case "users":
        return <Users className="h-12 w-12 text-social" />
      case "rocket":
        return <Rocket className="h-12 w-12 text-space" />
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          id={problem.id}
          title={problem.title}
          description={problem.description}
          discipline={{
            id: problem.disciplineId,
            name: disciplines[problem.disciplineId]?.name || "Unknown",
          }}
          difficulty={problem.difficulty}
          submissions={problem.metrics.submissions}
          status={problem.status}
          icon={getIconForDiscipline(disciplines[problem.disciplineId]?.icon || "")}
        />
      ))}
    </div>
  )
}
