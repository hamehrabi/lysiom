"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, CreditCard, MessageSquare, Plus, Video, Zap } from "lucide-react"

export default function DashboardPage() {
  const [projects] = useState([
    { id: 1, name: "QUANTUM RESEARCH PAPER", status: "IN PROGRESS", progress: 65, lastUpdated: "2 hours ago" },
    { id: 2, name: "AI ETHICS STUDY", status: "DRAFT", progress: 20, lastUpdated: "Yesterday" },
  ])

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="artisan-card p-6 border-[var(--color-aurora)] border-opacity-30 bg-[var(--color-aurora)]/5">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-xl font-['Press_Start_2P'] gradient-text-aurora mb-4">WELCOME BACK, RESEARCHER</h2>
            <p className="text-[var(--color-text-secondary)] mb-6 font-['VT323'] text-lg">
              Your research journey continues. What would you like to work on today?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard/projects">
                <button className="pixel-button flex items-center gap-2">
                  <Plus className="h-4 w-4" /> NEW PROJECT
                </button>
              </Link>
              <Link href="/dashboard/videos">
                <button className="pixel-button flex items-center gap-2">
                  <Video className="h-4 w-4" /> CREATE VIDEO
                </button>
              </Link>
              <Link href="/dashboard/chat">
                <button className="pixel-button flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> AI ASSISTANT
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="artisan-card p-4">
              <h3 className="text-sm font-['Press_Start_2P'] gradient-text mb-3">SUBSCRIPTION</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-md bg-[var(--color-aurora)]/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-[var(--color-aurora)]" />
                </div>
                <div>
                  <p className="font-['VT323'] text-lg">PRO PLAN</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">Active until May 15, 2025</p>
                </div>
              </div>
              <Link href="/dashboard/billing">
                <button className="pixel-button w-full text-sm">MANAGE SUBSCRIPTION</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="artisan-card p-4">
            <h3 className="text-sm font-['Press_Start_2P'] gradient-text mb-3">{stat.title}</h3>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold gradient-text-aurora">{stat.value}</div>
              <div className="h-10 w-10 rounded-md bg-[var(--color-aurora)]/20 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-[var(--color-aurora)]" />
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mt-2">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-['Press_Start_2P'] gradient-text">RECENT PROJECTS</h2>
          <Link href="/dashboard/projects">
            <button className="pixel-button text-sm">VIEW ALL</button>
          </Link>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="artisan-card p-4 hover-lift">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-['VT323'] text-xl gradient-text-aurora mb-2">{project.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span
                      className={`px-2 py-0.5 rounded-full ${
                        project.status === "IN PROGRESS"
                          ? "bg-[var(--color-aurora)]/20 text-[var(--color-aurora)]"
                          : "bg-[var(--color-twilight)] text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {project.lastUpdated}
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-48">
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

                <Link href={`/dashboard/projects/${project.id}`}>
                  <button className="pixel-button">CONTINUE</button>
                </Link>
              </div>
            </div>
          ))}

          <Link href="/dashboard/projects/new">
            <div className="artisan-card p-6 border-dashed hover-lift flex items-center justify-center">
              <button className="pixel-button flex items-center gap-2">
                <Plus className="h-4 w-4" /> CREATE NEW PROJECT
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-lg font-['Press_Start_2P'] gradient-text mb-4">QUICK ACCESS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quickAccess.map((item, index) => (
            <Link href={item.path} key={index}>
              <div className="artisan-card p-6 hover-lift h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="h-16 w-16 rounded-full bg-[var(--color-nebula)]/20 flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-[var(--color-nebula)]" />
                  </div>
                  <h3 className="font-['VT323'] text-xl gradient-text-nebula mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-6">{item.description}</p>
                  <button className="pixel-button mt-auto">{item.buttonText}</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Quick stats data
const quickStats = [
  {
    title: "PROJECTS",
    value: "2",
    description: "1 active, 1 draft",
    icon: Plus,
  },
  {
    title: "VIDEOS",
    value: "3",
    description: "Created this month",
    icon: Video,
  },
  {
    title: "BILLING",
    value: "$49",
    description: "Next payment: May 15, 2025",
    icon: CreditCard,
  },
]

// Quick access data
const quickAccess = [
  {
    title: "VIDEO CREATION",
    description: "Create engaging videos to explain your research",
    icon: Video,
    buttonText: "CREATE VIDEO",
    path: "/dashboard/videos",
  },
  {
    title: "AI ASSISTANT",
    description: "Get help with research, writing, and analysis",
    icon: MessageSquare,
    buttonText: "CHAT NOW",
    path: "/dashboard/chat",
  },
  {
    title: "BILLING",
    description: "Manage your subscription and payment methods",
    icon: CreditCard,
    buttonText: "VIEW PLANS",
    path: "/dashboard/billing",
  },
]
