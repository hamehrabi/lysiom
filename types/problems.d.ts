export interface Literature {
  title: string
  authors: string
  journal: string
}

export interface Dataset {
  name: string
  description: string
  size: string
}

export interface Methodology {
  title: string
  description: string
}

export interface Problem {
  id: string
  title: string
  category: string
  difficulty: "LOW" | "MEDIUM" | "HIGH"
  description: string
  submissions: number
  icon: string
  detailedDescription?: string
  researchObjectives?: string[]
  methodologies?: Methodology[]
  outcomes?: string[]
  duration?: string
  collaboration?: string
  evaluation?: string
  literature?: Literature[]
  datasets?: Dataset[]
}

export interface Category {
  id: string
  name: string
}

export interface ProblemsData {
  problems: Problem[]
  categories: Category[]
}

declare module "@/data/problems.json" {
  const data: ProblemsData
  export default data
}
