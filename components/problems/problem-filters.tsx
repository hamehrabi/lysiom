"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FilterOption {
  id: string
  name: string
}

interface ProblemFiltersProps {
  disciplines: FilterOption[]
  statuses: FilterOption[]
  difficulties: FilterOption[]
  onFilterChange: (filters: {
    discipline: string
    status: string
    difficulty: string
    search: string
  }) => void
}

export function ProblemFilters({ disciplines, statuses, difficulties, onFilterChange }: ProblemFiltersProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = () => {
    onFilterChange({
      discipline: selectedDiscipline,
      status: selectedStatus,
      difficulty: selectedDifficulty,
      search: searchQuery,
    })
  }

  const clearFilters = () => {
    setSelectedDiscipline("all")
    setSelectedStatus("all")
    setSelectedDifficulty("all")
    setSearchQuery("")
    onFilterChange({
      discipline: "all",
      status: "all",
      difficulty: "all",
      search: "",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search by keyword or phrase..."
            className="h-10 w-full rounded-md border border-border bg-background pl-10 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleFilterChange()
              }
            }}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <div className="hidden md:flex gap-2">
            <select
              className="h-10 rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedDiscipline}
              onChange={(e) => {
                setSelectedDiscipline(e.target.value)
                handleFilterChange()
              }}
            >
              <option value="all">All Disciplines</option>
              {disciplines.map((discipline) => (
                <option key={discipline.id} value={discipline.id}>
                  {discipline.name}
                </option>
              ))}
            </select>
            <select
              className="h-10 rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value)
                handleFilterChange()
              }}
            >
              <option value="all">All Statuses</option>
              {statuses.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
            <select
              className="h-10 rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value)
                handleFilterChange()
              }}
            >
              <option value="all">All Difficulties</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty.id} value={difficulty.id}>
                  {difficulty.name}
                </option>
              ))}
            </select>
          </div>
          <Button variant="ghost" size="sm" onClick={clearFilters} className="hidden md:flex">
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="md:hidden space-y-4 p-4 border border-border rounded-md bg-background/50">
          <div className="space-y-2">
            <label className="text-sm font-medium">Discipline</label>
            <select
              className="h-10 w-full rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
            >
              <option value="all">All Disciplines</option>
              {disciplines.map((discipline) => (
                <option key={discipline.id} value={discipline.id}>
                  {discipline.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <select
              className="h-10 w-full rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              {statuses.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Difficulty</label>
            <select
              className="h-10 w-full rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="all">All Difficulties</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty.id} value={difficulty.id}>
                  {difficulty.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
            <Button
              size="sm"
              onClick={() => {
                handleFilterChange()
                setShowFilters(false)
              }}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {selectedDiscipline !== "all" && (
          <Badge variant="outline" className="flex items-center gap-1">
            {disciplines.find((d) => d.id === selectedDiscipline)?.name}
            <button
              onClick={() => {
                setSelectedDiscipline("all")
                handleFilterChange()
              }}
              className="ml-1 rounded-full hover:bg-background/20"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove discipline filter</span>
            </button>
          </Badge>
        )}
        {selectedStatus !== "all" && (
          <Badge variant="outline" className="flex items-center gap-1">
            {statuses.find((s) => s.id === selectedStatus)?.name}
            <button
              onClick={() => {
                setSelectedStatus("all")
                handleFilterChange()
              }}
              className="ml-1 rounded-full hover:bg-background/20"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove status filter</span>
            </button>
          </Badge>
        )}
        {selectedDifficulty !== "all" && (
          <Badge variant="outline" className="flex items-center gap-1">
            {difficulties.find((d) => d.id === selectedDifficulty)?.name}
            <button
              onClick={() => {
                setSelectedDifficulty("all")
                handleFilterChange()
              }}
              className="ml-1 rounded-full hover:bg-background/20"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove difficulty filter</span>
            </button>
          </Badge>
        )}
      </div>
    </div>
  )
}
