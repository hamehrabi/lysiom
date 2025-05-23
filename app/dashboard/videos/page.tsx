"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, Download, Edit, Play, Plus, Search, Trash2 } from "lucide-react"

export default function VideosPage() {
  const [activeTab, setActiveTab] = useState("create")

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="border-b border-[var(--color-twilight)] mb-6">
        <div className="flex overflow-x-auto">
          {videoTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-['Press_Start_2P'] whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-[var(--color-aurora)] border-b-2 border-[var(--color-aurora)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Create Video Tab */}
      {activeTab === "create" && (
        <div className="space-y-8">
          <div className="artisan-card p-6">
            <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">CREATE NEW VIDEO</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoCreationOptions.map((option, index) => (
                <div key={index} className="artisan-card p-6 hover-lift">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="h-16 w-16 rounded-full bg-[var(--color-nebula)]/20 flex items-center justify-center mb-4">
                      <option.icon className="h-8 w-8 text-[var(--color-nebula)]" />
                    </div>
                    <h3 className="font-['VT323'] text-xl gradient-text-nebula mb-3">{option.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-6">{option.description}</p>
                    <button className="pixel-button mt-auto">{option.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="artisan-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora">VIDEO TEMPLATES</h2>

              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="w-full pl-10 pr-4 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videoTemplates.map((template, index) => (
                <div key={index} className="artisan-card overflow-hidden hover-lift">
                  <div className="relative h-40 bg-[var(--color-deep-space)]">
                    <Image
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-midnight)]/50 opacity-0 hover:opacity-100 transition-opacity">
                      <button className="h-12 w-12 rounded-full bg-[var(--color-aurora)] flex items-center justify-center">
                        <Play className="h-6 w-6 text-[var(--color-midnight)]" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-['VT323'] text-lg gradient-text-nebula mb-1">{template.title}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-3">{template.duration}</p>
                    <button className="pixel-button w-full text-sm">USE TEMPLATE</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* My Videos Tab */}
      {activeTab === "my-videos" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora">MY VIDEOS</h2>

            <div className="flex items-center gap-3">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full pl-10 pr-4 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)]"
                />
              </div>
              <button className="pixel-button flex items-center gap-2">
                <Plus className="h-4 w-4" /> NEW VIDEO
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {myVideos.map((video, index) => (
              <div key={index} className="artisan-card overflow-hidden hover-lift">
                <div className="relative h-40 bg-[var(--color-deep-space)]">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-midnight)]/50 opacity-0 hover:opacity-100 transition-opacity">
                    <button className="h-12 w-12 rounded-full bg-[var(--color-aurora)] flex items-center justify-center">
                      <Play className="h-6 w-6 text-[var(--color-midnight)]" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-['VT323'] text-lg gradient-text-nebula mb-1">{video.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {video.createdAt}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{video.duration}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="pixel-button flex-1 text-xs flex items-center justify-center gap-1">
                      <Edit className="h-3 w-3" /> EDIT
                    </button>
                    <button className="pixel-button flex-1 text-xs flex items-center justify-center gap-1">
                      <Download className="h-3 w-3" /> DOWNLOAD
                    </button>
                    <button className="pixel-button flex-1 text-xs flex items-center justify-center gap-1">
                      <Trash2 className="h-3 w-3" /> DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Video tabs
const videoTabs = [
  { id: "create", label: "CREATE VIDEO" },
  { id: "my-videos", label: "MY VIDEOS" },
]

// Video creation options
const videoCreationOptions = [
  {
    title: "AI GENERATED",
    description: "Create a video using AI with just a text prompt",
    icon: Play,
    buttonText: "CREATE WITH AI",
  },
  {
    title: "FROM TEMPLATE",
    description: "Start with a pre-designed template for your research video",
    icon: Plus,
    buttonText: "CHOOSE TEMPLATE",
  },
  {
    title: "FROM SCRATCH",
    description: "Build a custom video with full creative control",
    icon: Edit,
    buttonText: "START CREATING",
  },
]

// Video templates
const videoTemplates = [
  {
    title: "RESEARCH PRESENTATION",
    thumbnail: "/data-visualization-abstract.png",
    duration: "2-3 minutes",
  },
  {
    title: "EXPERIMENT WALKTHROUGH",
    thumbnail: "/quantum-computing-concept.png",
    duration: "3-5 minutes",
  },
  {
    title: "SCIENTIFIC EXPLAINER",
    thumbnail: "/placeholder-o779s.png",
    duration: "1-2 minutes",
  },
  {
    title: "LITERATURE REVIEW",
    thumbnail: "/placeholder-3mx6p.png",
    duration: "4-6 minutes",
  },
  {
    title: "RESEARCH FINDINGS",
    thumbnail: "/placeholder-lw0zb.png",
    duration: "2-4 minutes",
  },
  {
    title: "METHODOLOGY OVERVIEW",
    thumbnail: "/placeholder-llbx6.png",
    duration: "3-4 minutes",
  },
]

// My videos
const myVideos = [
  {
    title: "QUANTUM COMPUTING BASICS",
    thumbnail: "/quantum-computing-concept.png",
    createdAt: "2 days ago",
    duration: "3:42",
  },
  {
    title: "TENSOR NETWORK METHODS",
    thumbnail: "/data-visualization-abstract.png",
    createdAt: "1 week ago",
    duration: "5:18",
  },
  {
    title: "RESEARCH METHODOLOGY",
    thumbnail: "/placeholder-o779s.png",
    createdAt: "2 weeks ago",
    duration: "2:56",
  },
]
