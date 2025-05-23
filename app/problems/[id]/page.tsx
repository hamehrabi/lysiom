"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { PixelBadge } from "@/components/shared/pixel-badge"
import problemsData from "@/data/problems.json"

export default function ProblemDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [submissionView, setSubmissionView] = useState<"list" | "form">("list")

  // Form state
  const [email, setEmail] = useState("")
  const [submissionMethod, setSubmissionMethod] = useState("upload")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [pdfLink, setPdfLink] = useState("")
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [authors, setAuthors] = useState("")
  const [abstract, setAbstract] = useState("")
  const [pages, setPages] = useState("")
  const [comment, setComment] = useState("")
  const [otherInstructions, setOtherInstructions] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Add this with the other state declarations at the top of the component
  const [videoAbstract, setVideoAbstract] = useState("")
  const [videoSummary, setVideoSummary] = useState("")
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false)
  const [videoGenerationSuccess, setVideoGenerationSuccess] = useState(false)

  // Find the problem based on the ID from the URL
  const problem = problemsData.problems.find((p) => p.id === params.id) || problemsData.problems[0]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    // Validate required fields
    if (
      !email ||
      !title ||
      !authors ||
      !abstract ||
      !pages ||
      (submissionMethod === "upload" && !pdfFile) ||
      (submissionMethod === "link" && !pdfLink) ||
      !category
    ) {
      setErrorMessage("Please complete all required fields marked with *")
      setIsSubmitting(false)
      return
    }

    try {
      // Here you would implement the actual submission logic
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      alert("Submission successful! Thank you for your contribution.")
      setSubmissionView("list")
    } catch (error) {
      setErrorMessage("An error occurred during submission. Please try again.")
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen scanlines">
      {/* Hero Section */}
      <div className="relative py-16 pixel-grid overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
          <div
            className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl bottom-1/4 -right-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="artisan-container relative z-10">
          <Link
            href="/problems"
            className="inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] mb-6"
          >
            <Image src="/icons/arrow-left.png" alt="Back" width={16} height={16} className="pixel-art mr-2" />
            BACK TO PROBLEMS
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-3 mb-4">
                <PixelBadge variant="primary">{problem.category}</PixelBadge>
                <PixelBadge
                  variant={
                    problem.difficulty === "HIGH"
                      ? "accent"
                      : problem.difficulty === "MEDIUM"
                        ? "highlight"
                        : "secondary"
                  }
                >
                  {problem.difficulty}
                </PixelBadge>
                <PixelBadge variant="default">{problem.submissions} SUBMISSIONS</PixelBadge>
              </div>

              <h1 className="text-2xl mb-6 gradient-text-nebula">{problem.title}</h1>

              <p className="text-[var(--color-text-secondary)] mb-6">{problem.description}</p>

              <div className="flex flex-wrap gap-3">
                <button
                  className="pixel-button primary"
                  onClick={() => {
                    setActiveTab("submissions")
                    setSubmissionView("form")
                  }}
                >
                  SUBMIT SOLUTION
                </button>
                <Link href="/ai-assistant" className="pixel-button">
                  AI RESEARCH ASSISTANT
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative h-48 w-48 float">
                <Image
                  src={`/icons/${problem.icon}.png`}
                  alt={problem.title}
                  width={192}
                  height={192}
                  className="pixel-art"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-midnight)] to-transparent"></div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-[var(--color-twilight)] sticky top-0 z-30 bg-[var(--color-midnight)] bg-opacity-95 backdrop-blur-sm">
        <div className="artisan-container">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  if (tab.id === "submissions") setSubmissionView("list")
                }}
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
      </div>

      {/* Tab Content */}
      <main className="py-12">
        <div className="artisan-container">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl mb-4 gradient-text">CHALLENGE OVERVIEW</h2>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {problem.detailedDescription ||
                      `This research challenge addresses a fundamental unsolved problem in ${problem.category.toLowerCase()} 
                      that has resisted conventional approaches. By leveraging artificial intelligence as a research tool, 
                      we aim to discover new insights and methodologies that can lead to significant breakthroughs.`}
                  </p>
                  <p className="text-[var(--color-text-secondary)]">
                    Unlike traditional competitions that focus on model performance, this initiative emphasizes novel
                    research approaches, theoretical advancements, and scientific discoveries. The goal is not simply to
                    build better models, but to use technology as a tool to expand human knowledge and solve previously
                    intractable problems.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-4 gradient-text-aurora">RESEARCH OBJECTIVES</h3>
                  <ul className="space-y-3">
                    {(problem.researchObjectives || defaultResearchObjectives).map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[var(--color-twilight)]">
                          <span className="text-[var(--color-aurora)]">→</span>
                        </div>
                        <p className="text-[var(--color-text-secondary)]">{objective}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg mb-4 gradient-text-sunset">APPROACH & METHODOLOGY</h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    This challenge encourages interdisciplinary approaches that combine domain expertise with AI-driven
                    research methods. Participants are encouraged to develop novel methodologies that go beyond applying
                    existing algorithms to the problem.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(problem.methodologies || defaultMethodologies).map((methodology, index) => (
                      <div key={index} className="artisan-card p-4">
                        <h4 className="font-['Press_Start_2P'] text-xs mb-2 gradient-text">{methodology.title}</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">{methodology.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="artisan-card p-6 sticky top-16 -mt-8">
                  <h3 className="text-lg mb-4 gradient-text-nebula">CHALLENGE DETAILS</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-[var(--color-text-secondary)] mb-1">Research Area</h4>
                      <p className="gradient-text">{problem.category}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-[var(--color-text-secondary)] mb-1">Difficulty</h4>
                      <p className="gradient-text-sunset">{problem.difficulty}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-[var(--color-text-secondary)] mb-1">Duration</h4>
                      <p>{problem.duration || "6 MONTHS"}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-[var(--color-text-secondary)] mb-1">Collaboration</h4>
                      <p>{problem.collaboration || "TEAMS OF 1-5 RESEARCHERS"}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-[var(--color-text-secondary)] mb-1">Evaluation</h4>
                      <p>{problem.evaluation || "PEER REVIEW + EXPERT PANEL"}</p>
                    </div>

                    <div className="pt-4 border-t border-[var(--color-twilight)]">
                      <h4 className="text-sm mb-3 gradient-text">EXPECTED OUTCOMES</h4>
                      <ul className="space-y-2">
                        {(problem.outcomes || defaultOutcomes).map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center bg-[var(--color-twilight)]">
                              <span className="text-[var(--color-aurora)] text-xs">✓</span>
                            </div>
                            <p className="text-[var(--color-text-secondary)] text-sm">{outcome}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className="pixel-button primary w-full mt-4"
                      onClick={() => {
                        setActiveTab("submissions")
                        setSubmissionView("form")
                      }}
                    >
                      SUBMIT SOLUTION
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 mt-8">
                <h3 className="text-lg mb-4 gradient-text-nebula">RESOURCES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-base mb-3 gradient-text-aurora">KEY LITERATURE</h4>
                    <ul className="space-y-2">
                      {(problem.literature || defaultLiterature).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center bg-[var(--color-twilight)]">
                            <span className="text-[var(--color-aurora)] text-xs">→</span>
                          </div>
                          <p className="text-[var(--color-text-secondary)]">{item.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base mb-3 gradient-text-sunset">DATASETS & TOOLS</h4>
                    <ul className="space-y-2">
                      {(problem.datasets || defaultDatasets).map((dataset, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center bg-[var(--color-twilight)]">
                            <span className="text-[var(--color-aurora)] text-xs">→</span>
                          </div>
                          <p className="text-[var(--color-text-secondary)]">{dataset.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div className="space-y-8">
              <h2 className="text-xl mb-6">Leaderboard</h2>

              <div className="artisan-card p-0 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--color-twilight)]">
                      <th className="py-4 px-6 text-left text-[var(--color-text-secondary)] w-1/4">Research Title</th>
                      <th className="py-4 px-6 text-left text-[var(--color-text-secondary)] w-1/4">Research Summary</th>
                      <th className="py-4 px-6 text-center text-[var(--color-text-secondary)]">Video</th>
                      <th className="py-4 px-6 text-center text-[var(--color-text-secondary)]">Status</th>
                      <th className="py-4 px-6 text-center text-[var(--color-text-secondary)]">Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardEntries
                      .sort((a, b) => b.likes - a.likes)
                      .slice(0, 5)
                      .map((entry, index) => (
                        <tr key={entry.id} className="border-b border-[var(--color-twilight)]">
                          <td className="py-4 px-6">
                            <div>
                              <p className="text-[var(--color-text-primary)] font-medium">{entry.title}</p>
                              <p className="text-[var(--color-text-secondary)] text-sm mt-1">{entry.author}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-[var(--color-text-secondary)] text-sm truncate max-w-md">
                              {entry.summary}
                            </p>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex flex-col items-center gap-2">
                              <button className="pixel-button text-xs">Watch Video</button>
                              <button
                                className="pixel-button text-xs hover:bg-[var(--color-aurora)] hover:text-[var(--color-midnight)] transition-colors"
                                onClick={() => {
                                  setActiveTab("video")
                                  // Pre-populate the video form with this entry's data
                                  setVideoAbstract(entry.summary)
                                  setVideoSummary(
                                    `Key points about ${entry.title}:\n- Important finding 1\n- Important finding 2\n- Important finding 3`,
                                  )
                                }}
                              >
                                Generate Video
                              </button>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex flex-col items-center gap-1">
                              {entry.status === "Accepted" ? (
                                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                  Accepted
                                </span>
                              ) : (
                                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                              )}
                              <div className="flex items-center gap-1 mt-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-[var(--color-text-secondary)]"
                                >
                                  <path d="M7 10v12"></path>
                                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                </svg>
                                <span className="text-[var(--color-text-secondary)]">{entry.likes}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex justify-center gap-2">
                              {entry.status === "Accepted" ? (
                                <>
                                  <button className="pixel-button text-xs">View</button>
                                  <button className="pixel-button text-xs">PDF</button>
                                </>
                              ) : (
                                <span className="text-[var(--color-text-secondary)]">Pending</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "video" && (
            <div className="space-y-8">
              <h2 className="text-xl mb-6 gradient-text">VIDEO GENERATION</h2>

              <div className="artisan-card p-8">
                <div className="bg-[var(--color-aurora)] text-center p-5 mb-8">
                  <h3 className="text-2xl font-['Press_Start_2P'] text-[var(--color-midnight)]">
                    {problem.title} - VIDEO CREATION
                  </h3>
                </div>

                {videoGenerationSuccess ? (
                  <div className="text-center space-y-6">
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                      <p className="text-lg">Video generation successful! Your video is now being processed.</p>
                    </div>
                    <div className="w-full max-w-md mx-auto h-64 bg-[var(--color-twilight)] flex items-center justify-center">
                      <p className="text-[var(--color-text-secondary)]">
                        Video preview will appear here once processing is complete.
                      </p>
                    </div>
                    <button
                      className="pixel-button primary px-8 py-3 text-lg"
                      onClick={() => {
                        setVideoAbstract("")
                        setVideoSummary("")
                        setVideoGenerationSuccess(false)
                      }}
                    >
                      CREATE ANOTHER VIDEO
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                      Create an AI-generated video presentation based on your research. Enter your abstract and a
                      summary of key points to generate a professional video that explains your work.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                          Research Abstract <span className="text-[var(--color-plasma)]">*</span>
                        </label>
                        <textarea
                          className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none h-40"
                          placeholder="Enter the abstract of your research paper..."
                          value={videoAbstract}
                          onChange={(e) => setVideoAbstract(e.target.value)}
                          required
                        ></textarea>
                        <p className="text-[var(--color-text-secondary)] text-sm mt-2">
                          This will be used as the introduction for your video.
                        </p>
                      </div>

                      <div>
                        <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                          Key Points Summary <span className="text-[var(--color-plasma)]">*</span>
                        </label>
                        <textarea
                          className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none h-40"
                          placeholder="Enter 3-5 key points from your research (one per line)..."
                          value={videoSummary}
                          onChange={(e) => setVideoSummary(e.target.value)}
                          required
                        ></textarea>
                        <p className="text-[var(--color-text-secondary)] text-sm mt-2">
                          These points will be highlighted in your video with relevant visuals.
                        </p>
                      </div>

                      <div className="pt-6">
                        <h4 className="text-lg mb-4 gradient-text-aurora">VIDEO OPTIONS</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="artisan-card p-4">
                            <h5 className="font-['Press_Start_2P'] text-xs mb-2 gradient-text">STYLE</h5>
                            <select className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] p-2 outline-none">
                              <option value="scientific">Scientific</option>
                              <option value="educational">Educational</option>
                              <option value="presentation">Presentation</option>
                              <option value="animated">Animated</option>
                            </select>
                          </div>
                          <div className="artisan-card p-4">
                            <h5 className="font-['Press_Start_2P'] text-xs mb-2 gradient-text">DURATION</h5>
                            <select className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] p-2 outline-none">
                              <option value="short">Short (1-2 minutes)</option>
                              <option value="medium">Medium (3-5 minutes)</option>
                              <option value="long">Long (6-10 minutes)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center pt-8">
                        <button
                          className="pixel-button primary px-10 py-4 text-xl"
                          disabled={isGeneratingVideo || !videoAbstract || !videoSummary}
                          onClick={() => {
                            setIsGeneratingVideo(true)
                            // Simulate video generation process
                            setTimeout(() => {
                              setIsGeneratingVideo(false)
                              setVideoGenerationSuccess(true)
                            }, 3000)
                          }}
                        >
                          {isGeneratingVideo ? (
                            <span className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              GENERATING VIDEO...
                            </span>
                          ) : (
                            "GENERATE VIDEO"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "submissions" && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl gradient-text">SUBMISSIONS</h2>
                {submissionView === "list" && (
                  <button className="pixel-button primary" onClick={() => setSubmissionView("form")}>
                    SUBMIT NEW SOLUTION
                  </button>
                )}
                {submissionView === "form" && (
                  <button className="pixel-button" onClick={() => setSubmissionView("list")}>
                    VIEW ALL SUBMISSIONS
                  </button>
                )}
              </div>

              {submissionView === "list" ? (
                submissions.length > 0 ? (
                  <div className="space-y-6">
                    {submissions.map((submission) => (
                      <div key={submission.id} className="artisan-card p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/4">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-full overflow-hidden gradient-border">
                                <Image
                                  src={submission.authorAvatar || "/placeholder.svg"}
                                  alt={submission.authorName}
                                  width={40}
                                  height={40}
                                  className="pixel-art"
                                />
                              </div>
                              <div>
                                <p className="gradient-text text-sm">{submission.authorName}</p>
                                <p className="text-[var(--color-text-secondary)] text-xs">
                                  {submission.authorAffiliation}
                                </p>
                              </div>
                            </div>
                            <p className="text-[var(--color-text-secondary)] text-xs">Submitted {submission.date}</p>
                          </div>

                          <div className="md:w-3/4">
                            <h3 className="text-lg mb-2 gradient-text-aurora">{submission.title}</h3>
                            <p className="text-[var(--color-text-secondary)] mb-4">{submission.abstract}</p>

                            <div className="flex flex-wrap gap-3">
                              <PixelBadge
                                variant={submission.status === "ACCEPTED" ? "secondary" : "default"}
                                size="sm"
                              >
                                {submission.status}
                              </PixelBadge>

                              <div className="flex items-center gap-1 text-[var(--color-text-secondary)] text-sm">
                                <Image
                                  src="/icons/star.png"
                                  alt="Rating"
                                  width={16}
                                  height={16}
                                  className="pixel-art"
                                />
                                <span>{submission.rating}/5</span>
                              </div>
                            </div>

                            <div className="flex justify-end mt-4">
                              <button className="pixel-button">VIEW DETAILS</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="artisan-card p-8 text-center">
                    <p className="text-[var(--color-text-secondary)] mb-4">
                      No submissions yet. Be the first to contribute!
                    </p>
                    <button className="pixel-button primary" onClick={() => setSubmissionView("form")}>
                      SUBMIT SOLUTION
                    </button>
                  </div>
                )
              ) : (
                <div className="artisan-card p-8">
                  <div className="bg-[var(--color-aurora)] text-center p-5 mb-8">
                    <h3 className="text-2xl font-['Press_Start_2P'] text-[var(--color-midnight)]">
                      {problem.title} - NEW SUBMISSION
                    </h3>
                  </div>

                  <div className="mb-6 text-[var(--color-text-secondary)] text-lg">
                    <p className="mb-3">
                      Use this form to submit a new AI-assisted scholarly article on {problem.title.toLowerCase()}{" "}
                      research.
                      <span className="text-[var(--color-aurora)] font-bold">
                        {" "}
                        The article must be typed, have article title, full author name and an Abstract (&lt; 400 words)
                        at the beginning
                      </span>
                      , and
                      <span className="text-[var(--color-plasma)]">
                        {" "}
                        avoid repeating the same work already deposited in our database. You should not submit a paper
                        which you know to be incomplete (or contain errors).
                      </span>
                    </p>
                    <p className="mb-3">
                      There are separate forms for{" "}
                      <span className="text-[var(--color-aurora)] cursor-pointer">replacement</span>,{" "}
                      <span className="text-[var(--color-aurora)] cursor-pointer">withdrawal</span> or{" "}
                      <span className="text-[var(--color-aurora)] cursor-pointer">cancellations</span>. You should have
                      read the <span className="text-[var(--color-aurora)] cursor-pointer">submission notes</span>{" "}
                      first.
                    </p>
                    <p className="mb-3">
                      Submissions are subject to screening for conformity with the guidelines of our platform and
                      adherence to scholarly norms.
                      <span className="text-[var(--color-plasma)] font-bold">
                        {" "}
                        Only scholarly papers are acceptable.
                      </span>{" "}
                      We reserve the right to correct or reject submissions for scholarly, technical, legal or other
                      reasons.
                    </p>
                    <p className="mb-3 font-bold">
                      If you have problems submitting this form, first make sure that all required fields are complete,
                      second try a different browser.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="bg-[var(--color-plasma)] bg-opacity-20 border border-[var(--color-plasma)] text-[var(--color-plasma)] p-5 mb-8 text-lg">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="mb-3 text-[var(--color-text-secondary)] text-lg">
                        Your e-mail address will not be published unless you include it yourself in the PDF file,
                        abstract or comment.
                      </p>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Your e-mail address <span className="text-[var(--color-plasma)]">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[var(--color-text-secondary)] text-base">
                        <strong>Submitted documents must be in PDF format only.</strong> Please search for free
                        utilities to convert other formats to PDF. Avoid filenames with non-latin characters or spaces
                        as this can cause problems with some browsers. It is best to use the upload submission method,
                        you may use a hyperlink. This must be a direct link to the PDF ending in '.pdf'.
                      </p>
                      <p className="mb-2 text-[var(--color-text-secondary)] text-base">
                        Some people are reporting problems uploading files when using certain language setting. If you
                        experience this problem and cannot resolve it, please send an email to support@lysiom.org with
                        your paper attached giving all entries you used on the form. We will then upload it on your
                        behalf.
                      </p>

                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        PDF submission method <span className="text-[var(--color-plasma)]">*</span>
                      </label>
                      <div className="flex items-center space-x-4 mb-2">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="submissionMethod"
                            value="upload"
                            checked={submissionMethod === "upload"}
                            onChange={() => setSubmissionMethod("upload")}
                            className="accent-[var(--color-aurora)]"
                          />
                          <span className="ml-2 text-[var(--color-text-secondary)] text-lg">Upload</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="submissionMethod"
                            value="link"
                            checked={submissionMethod === "link"}
                            onChange={() => setSubmissionMethod("link")}
                            className="accent-[var(--color-aurora)]"
                          />
                          <span className="ml-2 text-[var(--color-text-secondary)] text-lg">Link</span>
                        </label>
                      </div>

                      {submissionMethod === "upload" ? (
                        <div>
                          <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                            PDF document <span className="text-[var(--color-plasma)]">*</span>
                          </label>
                          <input
                            type="file"
                            accept=".pdf"
                            className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                            onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                            PDF link <span className="text-[var(--color-plasma)]">*</span>
                          </label>
                          <input
                            type="url"
                            className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                            placeholder="https://example.com/paper.pdf"
                            value={pdfLink}
                            onChange={(e) => setPdfLink(e.target.value)}
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Research Category <span className="text-[var(--color-plasma)]">*</span>
                      </label>
                      <select
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option value="">Select a category</option>
                        {problemsData.categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                        <option value="ai-methods">AI Methods in Research</option>
                        <option value="clinical-trials">Clinical Trials</option>
                        <option value="epidemiology">Epidemiology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <p className="mb-2 text-[var(--color-text-secondary)] text-base">
                        Title, authors and abstract should also be included in the PDF file. These should be in English.
                        If the submission is not in English please translate the title and abstract here.
                      </p>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Title of Paper <span className="text-[var(--color-plasma)]">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[var(--color-text-secondary)] text-base">
                        Authors should be listed with separating commas if there is more than one. For each put first
                        name(s) or initials first followed by the family name. Do not use all capitals and do not
                        include titles or letters such as Dr. or PhD.
                      </p>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Author(s) <span className="text-[var(--color-plasma)]">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                        placeholder="John Smith, Jane Doe"
                        value={authors}
                        onChange={(e) => setAuthors(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[var(--color-text-secondary)] text-base">
                        You can include basic HTML in the abstract for formatting if necessary. (e.g. subscripts,
                        italics, line breaks and special characters) Please do not use links, images, bold, font changes
                        or character sizes or colors.
                      </p>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Abstract <span className="text-[var(--color-plasma)]">*</span>
                      </label>
                      <textarea
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none h-40"
                        value={abstract}
                        onChange={(e) => setAbstract(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Number of pages <span className="text-[var(--color-plasma)]">*</span>
                      </label>
                      <input
                        type="number"
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                        min="1"
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[var(--color-text-secondary)] text-base">
                        The comment should be limited to short technical details about the submission such as the number
                        of pages, language if not English, any journal or conference reference and a specific copyright
                        license if desired. Do not add a description of the work that is more suitable for the abstract.
                        <em> The comment will appear on the abstract page and listings.</em>
                      </p>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Comment
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[var(--color-text-secondary)] text-base">
                        Other instructions for the administrator can be added below. These will not be published.
                      </p>
                      <label className="block mb-2 text-[var(--color-text-primary)] text-xl font-semibold">
                        Other instructions
                      </label>
                      <textarea
                        className="w-full bg-[var(--color-twilight)] border border-[var(--color-twilight)] focus:border-[var(--color-aurora)] text-[var(--color-text-primary)] text-lg p-3 outline-none h-24"
                        value={otherInstructions}
                        onChange={(e) => setOtherInstructions(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button type="submit" className="pixel-button primary px-10 py-4 text-xl" disabled={isSubmitting}>
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// Default data for tabs
const tabs = [
  { id: "overview", label: "OVERVIEW" },
  { id: "leaderboard", label: "LEADERBOARD" },
  { id: "submissions", label: "SUBMISSIONS" },
  { id: "video", label: "VIDEO" },
]

// Default data for when specific problem data is missing
const defaultResearchObjectives = [
  "Develop innovative methodologies that challenge existing paradigms in the field",
  "Uncover new patterns and relationships that advance our theoretical understanding",
  "Create practical applications that demonstrate the real-world impact of the research",
  "Establish new research directions that can inspire future scientific exploration",
]

const defaultMethodologies = [
  {
    title: "RESEARCH-FIRST APPROACH",
    description:
      "Focus on advancing scientific understanding rather than optimizing for specific metrics. The quality of insights and theoretical contributions will be valued over incremental performance improvements.",
  },
  {
    title: "AI AS A RESEARCH TOOL",
    description:
      "Utilize AI not just as an end product, but as a means to augment human research capabilities, discover patterns, generate hypotheses, and validate theories.",
  },
  {
    title: "INTERDISCIPLINARY COLLABORATION",
    description:
      "Combine expertise from multiple domains to approach the problem from different perspectives and develop comprehensive solutions.",
  },
  {
    title: "OPEN SCIENCE PRINCIPLES",
    description:
      "Embrace transparency, reproducibility, and knowledge sharing to accelerate collective progress and build upon each other's discoveries.",
  },
]

const defaultOutcomes = [
  "Published research papers",
  "New theoretical frameworks",
  "Open-source research tools",
  "Proof-of-concept applications",
  "New research collaborations",
]

const defaultLiterature = [
  {
    title: "Recent Advances in the Field",
    authors: "Smith, J., & Johnson, K. (2022)",
    journal: "Journal of Scientific Research, 15(3), 156-178",
  },
  {
    title: "Theoretical Foundations and Applications",
    authors: "Rodriguez, J., & Williams, T. (2021)",
    journal: "Scientific Reviews, 20(4), 89-112",
  },
  {
    title: "Novel Approaches and Future Directions",
    authors: "Wong, A., Garcia, M., & Patel, S. (2023)",
    journal: "Nature Research, 5, 203-245",
  },
]

const defaultDatasets = [
  {
    name: "Research Benchmark Suite",
    description: "A collection of standardized problems for benchmarking algorithms",
    size: "2.3 GB",
  },
  {
    name: "Simulation Toolkit",
    description: "Software tools for simulating and visualizing research scenarios",
    size: "456 MB",
  },
  {
    name: "Implementation Library",
    description: "Reference implementations of key algorithms for research problems",
    size: "1.1 GB",
  },
]

// Sample data for submissions and team sections
const submissions = [
  {
    id: "1",
    title: "Novel Approach Using Advanced Techniques",
    abstract:
      "This paper presents a new algorithm that leverages innovative representations to achieve exponential speedup compared to classical methods.",
    authorName: "Dr. Sarah Chen",
    authorAffiliation: "MIT Research Lab",
    authorAvatar: "/avatars/researcher1.png",
    date: "2 months ago",
    status: "ACCEPTED",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Hybrid Approach for Complex Problems",
    abstract:
      "We propose a hybrid approach that combines multiple techniques to solve large-scale problems more efficiently.",
    authorName: "Prof. James Rodriguez",
    authorAffiliation: "Stanford University",
    authorAvatar: "/avatars/researcher2.png",
    date: "3 months ago",
    status: "UNDER REVIEW",
    rating: 4.2,
  },
]

const team = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Lead Researcher",
    affiliation: "MIT Research Lab",
    avatar: "/avatars/researcher1.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
      { name: "GitHub", icon: "github", url: "#" },
    ],
  },
  {
    id: "2",
    name: "Prof. James Rodriguez",
    role: "Senior Researcher",
    affiliation: "Stanford University",
    avatar: "/avatars/researcher2.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
      { name: "GitHub", icon: "github", url: "#" },
    ],
  },
  {
    id: "3",
    name: "Dr. Alex Wong",
    role: "Data Scientist",
    affiliation: "Google Research",
    avatar: "/avatars/researcher3.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
      { name: "GitHub", icon: "github", url: "#" },
    ],
  },
]

// Sample data for leaderboard
const leaderboardData = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    affiliation: "MIT Research Lab",
    avatar: "/avatars/researcher1.png",
    score: 98.7,
    date: "2 months ago",
  },
  {
    id: "2",
    name: "Prof. James Rodriguez",
    affiliation: "Stanford University",
    avatar: "/avatars/researcher2.png",
    score: 95.2,
    date: "3 months ago",
  },
  {
    id: "3",
    name: "Dr. Alex Wong",
    affiliation: "Google Research",
    avatar: "/avatars/researcher3.png",
    score: 92.8,
    date: "1 month ago",
  },
  {
    id: "4",
    name: "Dr. Emily Johnson",
    affiliation: "Harvard University",
    avatar: "/avatars/researcher4.png",
    score: 89.5,
    date: "2 months ago",
  },
  {
    id: "5",
    name: "Prof. Michael Zhang",
    affiliation: "UC Berkeley",
    avatar: "/avatars/researcher5.png",
    score: 87.3,
    date: "3 months ago",
  },
  {
    id: "6",
    name: "Dr. Lisa Brown",
    affiliation: "Oxford University",
    avatar: "/avatars/researcher6.png",
    score: 85.9,
    date: "1 month ago",
  },
]

// Sample data for leaderboard entries
const leaderboardEntries = [
  {
    id: "1",
    author: "Dr. Sarah Chen",
    title: "Novel Biomarkers in Autoimmune Disorders",
    summary:
      "This research identifies new biomarkers for early detection of autoimmune disorders, enabling more timely interventions and improved patient outcomes.",
    status: "Accepted",
    likes: 7,
  },
  {
    id: "2",
    author: "Prof. James Rodriguez",
    title: "T-Cell Response in Rheumatoid Arthritis",
    summary:
      "Analysis of T-cell activation patterns in patients with rheumatoid arthritis reveals potential targets for more effective therapeutic interventions.",
    status: "Accepted",
    likes: 5,
  },
  {
    id: "3",
    author: "Alex Thompson",
    title: "Gut Microbiome and Autoimmunity",
    summary:
      "Investigating the relationship between gut microbiota composition and autoimmune disease development, with implications for preventive strategies.",
    status: "Pending",
    likes: 0,
  },
  {
    id: "4",
    author: "Dr. Emily Johnson",
    title: "Genetic Markers for Treatment Response",
    summary:
      "Identification of genetic markers that predict treatment response in patients with chronic inflammatory conditions.",
    status: "Accepted",
    likes: 4,
  },
  {
    id: "5",
    author: "Dr. Michael Zhang",
    title: "AI-Assisted Diagnosis of Rare Disorders",
    summary:
      "Development and validation of an AI system for improving the diagnosis of rare autoimmune disorders from clinical and laboratory data.",
    status: "Accepted",
    likes: 3,
  },
  {
    id: "6",
    author: "Dr. Lisa Brown",
    title: "Immunotherapy Approaches for Autoimmune Diseases",
    summary:
      "Novel immunotherapy approaches that target specific immune pathways to treat autoimmune diseases with fewer side effects than current treatments.",
    status: "Accepted",
    likes: 6,
  },
]
