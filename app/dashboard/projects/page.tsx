"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Filter, Plus, Search, SortDesc } from "lucide-react"

export default function ProjectsPage() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora">YOUR PROJECTS</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)]"
            />
          </div>

          <div className="flex gap-3">
            <button className="pixel-button flex items-center gap-2" onClick={() => setFilterOpen(!filterOpen)}>
              <Filter className="h-4 w-4" /> FILTER
            </button>
            <Link href="/dashboard/projects/new">
              <button className="pixel-button primary flex items-center gap-2">
                <Plus className="h-4 w-4" /> NEW PROJECT
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Filters */}
      {filterOpen && (
        <div className="artisan-card p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">STATUS</label>
            <select className="w-full px-4 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg">
              <option value="all">All Statuses</option>
              <option value="in-progress">In Progress</option>
              <option value="draft">Draft</option>
              <option value="completed">Completed</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div>
            <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">CATEGORY</label>
            <select className="w-full px-4 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg">
              <option value="all">All Categories</option>
              <option value="research">Research</option>
              <option value="experiment">Experiment</option>
              <option value="analysis">Analysis</option>
              <option value="paper">Paper</option>
            </select>
          </div>

          <div>
            <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">SORT BY</label>
            <div className="flex items-center gap-2">
              <select className="flex-1 px-4 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg">
                <option value="updated">Last Updated</option>
                <option value="created">Date Created</option>
                <option value="name">Name</option>
                <option value="progress">Progress</option>
              </select>
              <button className="h-10 w-10 flex items-center justify-center bg-[var(--color-deep-space)] border border-[var(--color-twilight)]">
                <SortDesc className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-end">
            <button className="pixel-button w-full">APPLY FILTERS</button>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link href={`/dashboard/projects/${project.id}`} key={project.id}>
            <div className="artisan-card p-6 hover-lift h-full">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs ${
                      project.status === "In Progress"
                        ? "bg-[var(--color-aurora)]/20 text-[var(--color-aurora)]"
                        : project.status === "Draft"
                          ? "bg-[var(--color-twilight)] text-[var(--color-text-secondary)]"
                          : "bg-[var(--color-nebula)]/20 text-[var(--color-nebula)]"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {project.lastUpdated}
                  </span>
                </div>

                <h3 className="font-['VT323'] text-xl gradient-text-aurora mb-2">{project.name}</h3>

                <p className="text-[var(--color-text-secondary)] mb-4 flex-grow font-['VT323'] text-lg">
                  {project.description}
                </p>

                <div className="space-y-4 mt-auto">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[var(--color-text-secondary)]">PROGRESS</span>
                      <span className="text-[var(--color-aurora)]">{project.progress}%</span>
                    </div>
                    <div className="w-full h-4 bg-[var(--color-twilight)]">
                      <div
                        className="h-full"
                        style={{
                          width: `${project.progress}%`,
                          background: "var(--gradient-aurora)",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.collaborators.map((collaborator, index) => (
                        <div
                          key={index}
                          className="h-8 w-8 rounded-full overflow-hidden border-2 border-[var(--color-deep-space)]"
                        >
                          <Image
                            src={collaborator.avatar || "/placeholder.svg"}
                            alt={collaborator.name}
                            width={32}
                            height={32}
                            className="pixel-art"
                          />
                        </div>
                      ))}
                      {project.collaborators.length > 0 && (
                        <div className="h-8 w-8 rounded-full bg-[var(--color-twilight)] flex items-center justify-center border-2 border-[var(--color-deep-space)]">
                          <Plus className="h-4 w-4" />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--color-text-secondary)]">{project.tasks} TASKS</span>
                      <span className="text-xs text-[var(--color-aurora)]">VIEW →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Create New Project Card */}
        <Link href="/dashboard/projects/new">
          <div className="artisan-card p-6 border-dashed hover-lift flex items-center justify-center h-full min-h-[240px]">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-[var(--color-aurora)]/20 flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-[var(--color-aurora)]" />
              </div>
              <h3 className="font-['VT323'] text-xl gradient-text-aurora mb-2">CREATE NEW PROJECT</h3>
              <p className="text-[var(--color-text-secondary)] mb-4 font-['VT323'] text-lg">
                Start a new research project or experiment
              </p>
              <button className="pixel-button">GET STARTED</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

// Projects data
const projects = [
  {
    id: 1,
    name: "QUANTUM RESEARCH PAPER",
    description: "Investigating quantum algorithms for optimization problems in logistics and supply chain management.",
    status: "In Progress",
    progress: 65,
    lastUpdated: "2 hours ago",
    collaborators: [
      { name: "Sarah Chen", avatar: "/avatars/researcher1.png" },
      { name: "James Rodriguez", avatar: "/avatars/researcher2.png" },
    ],
    tasks: 8,
  },
  {
    id: 2,
    name: "AI ETHICS STUDY",
    description: "Exploring ethical considerations in AI development and deployment in scientific research.",
    status: "Draft",
    progress: 20,
    lastUpdated: "Yesterday",
    collaborators: [],
    tasks: 5,
  },
  {
    id: 3,
    name: "TENSOR NETWORK SIMULATION",
    description: "Creating efficient tensor network representations for simulating quantum many-body systems.",
    status: "In Progress",
    progress: 40,
    lastUpdated: "3 days ago",
    collaborators: [{ name: "Emily Wong", avatar: "/avatars/researcher3.png" }],
    tasks: 12,
  },
  {
    id: 4,
    name: "QUANTUM ERROR CORRECTION",
    description:
      "Researching new approaches to quantum error correction to improve reliability of quantum computations.",
    status: "Completed",
    progress: 100,
    lastUpdated: "1 week ago",
    collaborators: [
      { name: "Michael Johnson", avatar: "/avatars/researcher4.png" },
      { name: "Lisa Zhang", avatar: "/avatars/researcher5.png" },
    ],
    tasks: 15,
  },
]
