"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Check, Lock, Mail, User } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileImage, setProfileImage] = useState("/avatars/user-profile.png")

  return (
    <div className="space-y-8">
      <div className="artisan-card p-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative">
            <div className="w-32 h-32 rounded-lg overflow-hidden gradient-border">
              <Image
                src={profileImage || "/placeholder.svg"}
                alt="User Profile"
                width={128}
                height={128}
                className="pixel-art"
              />
            </div>
            <label
              htmlFor="profile-upload"
              className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-[var(--color-aurora)] flex items-center justify-center cursor-pointer"
            >
              <Camera className="h-4 w-4 text-[var(--color-midnight)]" />
              <input id="profile-upload" type="file" className="hidden" onChange={() => {}} />
            </label>
          </div>

          <div className="flex-grow text-center md:text-left">
            <h2 className="text-xl font-['Press_Start_2P'] mb-2 gradient-text">DR. ALEX MORGAN</h2>
            <p className="text-[var(--color-text-secondary)] mb-4 font-['VT323'] text-lg">
              Quantum Computing Researcher
            </p>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-2xl font-['VT323'] text-lg">
              Specializing in quantum algorithms and their applications in optimization problems. Currently researching
              tensor network methods for quantum simulation.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <button className="pixel-button">EDIT PROFILE</button>
              <button className="pixel-button primary">SAVE CHANGES</button>
            </div>
          </div>
        </div>
      </div>

      {/* Account Tabs */}
      <div className="border-b border-[var(--color-twilight)] mb-6">
        <div className="flex overflow-x-auto">
          {accountTabs.map((tab) => (
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

      {/* Profile Tab Content */}
      {activeTab === "profile" && (
        <div className="space-y-6">
          <div className="artisan-card p-6">
            <h3 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">PERSONAL INFORMATION</h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                    FULL NAME
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                    <input
                      type="text"
                      defaultValue="Dr. Alex Morgan"
                      className="w-full px-10 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                    <input
                      type="email"
                      defaultValue="alex.morgan@research.com"
                      className="w-full px-10 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 rounded-full bg-[var(--color-aurora)]/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-[var(--color-aurora)]" />
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-aurora)] mt-1">Email verified</p>
                </div>
              </div>

              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                  PROFESSIONAL BIO
                </label>
                <textarea
                  rows={4}
                  defaultValue="Specializing in quantum algorithms and their applications in optimization problems. Currently researching tensor network methods for quantum simulation."
                  className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                    INSTITUTION
                  </label>
                  <input
                    type="text"
                    defaultValue="Quantum Research Institute"
                    className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                    POSITION
                  </label>
                  <input
                    type="text"
                    defaultValue="Senior Researcher"
                    className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="artisan-card p-6">
            <h3 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">RESEARCH INTERESTS</h3>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-[var(--color-twilight)] text-[var(--color-text-primary)] rounded-md flex items-center gap-2 font-['VT323'] text-lg"
                  >
                    {interest}
                    <button className="h-5 w-5 rounded-full bg-[var(--color-cosmic-dust)] flex items-center justify-center text-xs">
                      ×
                    </button>
                  </div>
                ))}
                <div className="px-3 py-2 border border-dashed border-[var(--color-twilight)] text-[var(--color-text-secondary)] rounded-md font-['VT323'] text-lg">
                  + Add Interest
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="pixel-button primary">SAVE CHANGES</button>
          </div>
        </div>
      )}

      {/* Security Tab Content */}
      {activeTab === "security" && (
        <div className="space-y-6">
          <div className="artisan-card p-6">
            <h3 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">CHANGE PASSWORD</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                  CURRENT PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                  <input
                    type="password"
                    className="w-full px-10 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                  NEW PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                  <input
                    type="password"
                    className="w-full px-10 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                  CONFIRM NEW PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                  <input
                    type="password"
                    className="w-full px-10 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="pixel-button primary">UPDATE PASSWORD</button>
              </div>
            </div>
          </div>

          <div className="artisan-card p-6">
            <h3 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">TWO-FACTOR AUTHENTICATION</h3>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-['VT323'] text-lg mb-1">Enhance your account security</p>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </p>
              </div>
              <button className="pixel-button">ENABLE 2FA</button>
            </div>
          </div>

          <div className="artisan-card p-6">
            <h3 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">SESSIONS</h3>

            <div className="space-y-4">
              {sessions.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-[var(--color-twilight)] rounded-md"
                >
                  <div>
                    <p className="font-['VT323'] text-lg">{session.device}</p>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      {session.location} • Last active {session.lastActive}
                    </p>
                  </div>
                  {session.current ? (
                    <span className="px-2 py-1 bg-[var(--color-aurora)]/20 text-[var(--color-aurora)] rounded-md text-xs">
                      CURRENT
                    </span>
                  ) : (
                    <button className="pixel-button text-xs">LOGOUT</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Preferences Tab Content */}
      {activeTab === "preferences" && (
        <div className="space-y-6">
          <div className="artisan-card p-6">
            <h3 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">NOTIFICATION SETTINGS</h3>

            <div className="space-y-4">
              {notificationSettings.map((setting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-b border-[var(--color-twilight)]"
                >
                  <div>
                    <p className="font-['VT323'] text-lg">{setting.name}</p>
                    <p className="text-[var(--color-text-secondary)] text-sm">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={setting.enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-[var(--color-twilight)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-aurora)]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="artisan-card p-6">
            <h3 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">DISPLAY SETTINGS</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">LANGUAGE</label>
                <select className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>

              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                  TIME ZONE
                </label>
                <select className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg">
                  <option value="utc">UTC (Coordinated Universal Time)</option>
                  <option value="est">EST (Eastern Standard Time)</option>
                  <option value="pst">PST (Pacific Standard Time)</option>
                  <option value="cet">CET (Central European Time)</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-3 border-b border-[var(--color-twilight)]">
                <div>
                  <p className="font-['VT323'] text-lg">DARK MODE</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">Toggle between light and dark mode</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                  <div className="w-11 h-6 bg-[var(--color-twilight)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-aurora)]"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="pixel-button primary">SAVE PREFERENCES</button>
          </div>
        </div>
      )}
    </div>
  )
}

// Account tabs
const accountTabs = [
  { id: "profile", label: "PROFILE" },
  { id: "security", label: "SECURITY" },
  { id: "preferences", label: "PREFERENCES" },
]

// Research interests
const researchInterests = [
  "Quantum Computing",
  "Tensor Networks",
  "Quantum Algorithms",
  "Optimization",
  "Machine Learning",
]

// Sessions
const sessions = [
  {
    device: "Chrome on Windows",
    location: "New York, USA",
    lastActive: "Now",
    current: true,
  },
  {
    device: "Firefox on MacOS",
    location: "Boston, USA",
    lastActive: "2 days ago",
    current: false,
  },
  {
    device: "Safari on iPhone",
    location: "San Francisco, USA",
    lastActive: "1 week ago",
    current: false,
  },
]

// Notification settings
const notificationSettings = [
  {
    name: "Project Updates",
    description: "Receive notifications about your project updates and changes",
    enabled: true,
  },
  {
    name: "New Research Opportunities",
    description: "Get notified about new research opportunities matching your interests",
    enabled: true,
  },
  {
    name: "Collaboration Requests",
    description: "Receive notifications when someone wants to collaborate with you",
    enabled: true,
  },
  {
    name: "Platform Announcements",
    description: "Stay updated with platform news and feature releases",
    enabled: false,
  },
  {
    name: "Email Notifications",
    description: "Receive email notifications for important updates",
    enabled: true,
  },
]
