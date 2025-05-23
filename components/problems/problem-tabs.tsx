"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface ProblemTabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export function ProblemTabs({ tabs, defaultTab }: ProblemTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div>
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium whitespace-nowrap",
                activeTab === tab.id ? "border-b-2 border-primary text-foreground" : "text-muted hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="py-6">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  )
}
