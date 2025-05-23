"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"

export default function NewProjectPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/dashboard/projects"
        className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="font-['VT323'] text-lg">BACK TO PROJECTS</span>
      </Link>

      <div className="artisan-card p-6 mb-8">
        <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">CREATE NEW PROJECT</h2>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    currentStep > index + 1
                      ? "bg-[var(--color-aurora)] text-[var(--color-midnight)]"
                      : currentStep === index + 1
                        ? "bg-[var(--color-aurora)]/20 text-[var(--color-aurora)] border border-[var(--color-aurora)]"
                        : "bg-[var(--color-twilight)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={`h-1 w-16 sm:w-32 ${
                      currentStep > index + 1 ? "bg-[var(--color-aurora)]" : "bg-[var(--color-twilight)]"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-[var(--color-text-secondary)]">PROJECT DETAILS</span>
            <span className="text-xs text-[var(--color-text-secondary)]">COLLABORATORS</span>
            <span className="text-xs text-[var(--color-text-secondary)]">SETTINGS</span>
          </div>
        </div>

        {/* Step 1: Project Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                PROJECT NAME
              </label>
              <input
                type="text"
                placeholder="Enter project name"
                className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
              />
            </div>

            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                PROJECT DESCRIPTION
              </label>
              <textarea
                rows={4}
                placeholder="Describe your research project"
                className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">CATEGORY</label>
                <select className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg">
                  <option value="">Select a category</option>
                  <option value="research">Research Paper</option>
                  <option value="experiment">Experiment</option>
                  <option value="analysis">Data Analysis</option>
                  <option value="review">Literature Review</option>
                </select>
              </div>

              <div>
                <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                  DEADLINE (OPTIONAL)
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">TAGS</label>
              <input
                type="text"
                placeholder="Add tags separated by commas (e.g., quantum, algorithm, optimization)"
                className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
              />
            </div>

            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                UPLOAD FILES (OPTIONAL)
              </label>
              <div className="border-2 border-dashed border-[var(--color-twilight)] rounded-md p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-[var(--color-twilight)] flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-[var(--color-text-secondary)]" />
                </div>
                <p className="text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                  Drag and drop files here or click to browse
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Supports PDF, DOCX, XLSX, CSV, JPG, PNG (Max 50MB)
                </p>
                <input type="file" className="hidden" multiple />
                <button className="pixel-button mt-4">BROWSE FILES</button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Collaborators */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                INVITE COLLABORATORS (OPTIONAL)
              </label>
              <input
                type="text"
                placeholder="Enter email addresses separated by commas"
                className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
              />
            </div>

            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                PERMISSION LEVEL
              </label>
              <select className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg">
                <option value="view">View only</option>
                <option value="comment">Can comment</option>
                <option value="edit">Can edit</option>
                <option value="admin">Admin (full access)</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                ADD A MESSAGE (OPTIONAL)
              </label>
              <textarea
                rows={3}
                placeholder="Add a personal message to your invitation"
                className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] font-['VT323'] text-lg"
              ></textarea>
            </div>

            <div className="artisan-card p-4 bg-[var(--color-twilight)]">
              <h3 className="font-['VT323'] text-lg mb-3 gradient-text">SUGGESTED COLLABORATORS</h3>

              <div className="space-y-3">
                {suggestedCollaborators.map((collaborator, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-[var(--color-deep-space)] rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src={collaborator.avatar || "/placeholder.svg"}
                          alt={collaborator.name}
                          className="h-full w-full object-cover pixel-art"
                        />
                      </div>
                      <div>
                        <p className="font-['VT323'] text-lg">{collaborator.name}</p>
                        <p className="text-xs text-[var(--color-text-secondary)]">{collaborator.role}</p>
                      </div>
                    </div>
                    <button className="pixel-button text-xs">INVITE</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Settings */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                PRIVACY SETTINGS
              </label>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border border-[var(--color-twilight)] rounded-md">
                  <input type="radio" name="privacy" id="private" className="h-4 w-4" defaultChecked />
                  <label htmlFor="private" className="flex-1">
                    <p className="font-['VT323'] text-lg">PRIVATE</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      Only you and invited collaborators can access this project
                    </p>
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 border border-[var(--color-twilight)] rounded-md">
                  <input type="radio" name="privacy" id="organization" className="h-4 w-4" />
                  <label htmlFor="organization" className="flex-1">
                    <p className="font-['VT323'] text-lg">ORGANIZATION</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      Anyone in your organization can access this project
                    </p>
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 border border-[var(--color-twilight)] rounded-md">
                  <input type="radio" name="privacy" id="public" className="h-4 w-4" />
                  <label htmlFor="public" className="flex-1">
                    <p className="font-['VT323'] text-lg">PUBLIC</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      Anyone with the link can view this project
                    </p>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                NOTIFICATION SETTINGS
              </label>
              <div className="space-y-3">
                {notificationSettings.map((setting, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border-b border-[var(--color-twilight)]"
                  >
                    <div>
                      <p className="font-['VT323'] text-lg">{setting.name}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{setting.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={setting.enabled} className="sr-only peer" />
                      <div className="w-11 h-6 bg-[var(--color-twilight)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-aurora)]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[var(--color-text-secondary)] mb-2 font-['VT323'] text-lg">
                AI ASSISTANT INTEGRATION
              </label>
              <div className="flex items-center justify-between p-3 border border-[var(--color-twilight)] rounded-md">
                <div>
                  <p className="font-['VT323'] text-lg">ENABLE AI ASSISTANT</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Allow the AI assistant to help with research, data analysis, and writing
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                  <div className="w-11 h-6 bg-[var(--color-twilight)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-aurora)]"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={goToPreviousStep}
            className={`pixel-button ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentStep === 1}
          >
            PREVIOUS
          </button>

          {currentStep < totalSteps ? (
            <button onClick={goToNextStep} className="pixel-button primary">
              NEXT
            </button>
          ) : (
            <button className="pixel-button primary">CREATE PROJECT</button>
          )}
        </div>
      </div>
    </div>
  )
}

// Suggested collaborators
const suggestedCollaborators = [
  {
    name: "Dr. Sarah Chen",
    role: "Quantum Physicist",
    avatar: "/avatars/researcher1.png",
  },
  {
    name: "Prof. James Rodriguez",
    role: "Computer Scientist",
    avatar: "/avatars/researcher2.png",
  },
  {
    name: "Dr. Emily Wong",
    role: "Mathematician",
    avatar: "/avatars/researcher3.png",
  },
]

// Notification settings
const notificationSettings = [
  {
    name: "Collaborator Updates",
    description: "Receive notifications when collaborators make changes",
    enabled: true,
  },
  {
    name: "Comment Notifications",
    description: "Get notified when someone comments on your project",
    enabled: true,
  },
  {
    name: "Deadline Reminders",
    description: "Receive reminders as the project deadline approaches",
    enabled: true,
  },
  {
    name: "Email Notifications",
    description: "Receive email notifications for important updates",
    enabled: false,
  },
]
