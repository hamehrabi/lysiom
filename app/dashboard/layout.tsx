"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Bell, CreditCard, Home, LogOut, Settings, User, Video, Plus, MessageSquare } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notifications] = useState(3)

  return (
    <div className="min-h-screen scanlines bg-[var(--color-midnight)]">
      {/* Sidebar - Desktop */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-[var(--color-deep-space)] border-r border-[var(--color-twilight)] hidden md:block z-10">
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-[var(--color-twilight)]">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden gradient-border rounded-md">
                <Image
                  src="/new-lysiom-logo.png"
                  alt="Lysiom"
                  width={40}
                  height={40}
                  className="pixel-art object-contain"
                />
              </div>
              <span className="font-['Press_Start_2P'] text-sm gradient-text">LYSIOM</span>
            </Link>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      pathname === item.path
                        ? "bg-[var(--color-aurora)]/20 text-[var(--color-aurora)]"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-twilight)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-['VT323'] text-base">{item.name}</span>
                    {item.name === "Notifications" && notifications > 0 && (
                      <span className="ml-auto h-5 w-5 rounded-full bg-[var(--color-aurora)] text-xs flex items-center justify-center text-[var(--color-midnight)]">
                        {notifications}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-[var(--color-twilight)]">
            <button className="pixel-button w-full flex items-center justify-center gap-2">
              <LogOut className="h-4 w-4" />
              <span>SIGN OUT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-20 glass backdrop-blur-md border-b border-[var(--color-twilight)]">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="relative w-10 h-10 overflow-hidden gradient-border rounded-md">
              <Image
                src="/new-lysiom-logo.png"
                alt="Lysiom"
                width={40}
                height={40}
                className="pixel-art object-contain"
              />
            </div>
            <span className="font-['Press_Start_2P'] text-sm gradient-text">LYSIOM</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="pixel-button py-1 px-2 text-xs"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="glass border-t border-[var(--color-twilight)]">
            <nav className="py-4 px-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        pathname === item.path
                          ? "bg-[var(--color-aurora)]/20 text-[var(--color-aurora)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-twilight)] hover:text-[var(--color-text-primary)]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="font-['VT323'] text-base">{item.name}</span>
                      {item.name === "Notifications" && notifications > 0 && (
                        <span className="ml-auto h-5 w-5 rounded-full bg-[var(--color-aurora)] text-xs flex items-center justify-center text-[var(--color-midnight)]">
                          {notifications}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-[var(--color-text-secondary)] hover:bg-[var(--color-twilight)] hover:text-[var(--color-text-primary)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="font-['VT323'] text-base">Sign Out</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="md:ml-64 min-h-screen flex flex-col">
        {/* Desktop Header */}
        <header className="h-16 border-b border-[var(--color-twilight)] flex items-center px-6 sticky top-0 z-10 glass backdrop-blur-md hidden md:flex">
          <div className="flex-1">
            <h1 className="text-lg font-['Press_Start_2P'] gradient-text-aurora">{getCurrentPageTitle(pathname)}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="h-5 w-5 text-[var(--color-text-secondary)]" />
              {notifications > 0 && (
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[var(--color-aurora)] text-xs flex items-center justify-center text-[var(--color-midnight)]">
                  {notifications}
                </span>
              )}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden gradient-border">
                <Image
                  src="/avatars/user-profile.png"
                  alt="User Profile"
                  width={32}
                  height={32}
                  className="pixel-art"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Title - Mobile */}
        <div className="md:hidden p-4 border-b border-[var(--color-twilight)]">
          <h1 className="text-lg font-['Press_Start_2P'] gradient-text-aurora">{getCurrentPageTitle(pathname)}</h1>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

// Navigation items
const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: Home },
  { name: "Projects", path: "/dashboard/projects", icon: Plus },
  { name: "Video Creation", path: "/dashboard/videos", icon: Video },
  { name: "AI Assistant", path: "/dashboard/chat", icon: MessageSquare },
  { name: "Billing", path: "/dashboard/billing", icon: CreditCard },
  { name: "Account", path: "/dashboard/account", icon: User },
  { name: "Notifications", path: "/dashboard/notifications", icon: Bell },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
]

// Helper function to get current page title
function getCurrentPageTitle(pathname: string): string {
  const titles: Record<string, string> = {
    "/dashboard": "DASHBOARD",
    "/dashboard/projects": "PROJECTS",
    "/dashboard/videos": "VIDEO CREATION",
    "/dashboard/chat": "AI ASSISTANT",
    "/dashboard/billing": "BILLING & SUBSCRIPTION",
    "/dashboard/account": "ACCOUNT MANAGEMENT",
    "/dashboard/notifications": "NOTIFICATIONS",
    "/dashboard/settings": "SETTINGS",
  }

  return titles[pathname] || "DASHBOARD"
}
