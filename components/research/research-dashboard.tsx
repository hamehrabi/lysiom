"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Card,
  ResearchToolbar,
  ResearchSidebar,
  ResearchContent,
  ResearchPanel,
  ResearchOption,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  X,
  User,
  BookOpen,
  FileText,
  Users,
  Filter,
  Download,
  Search,
  BarChart,
  MessageSquare,
  CheckCircle,
  Clock,
  ArrowUpDown,
  Zap,
} from "lucide-react"

export function ResearchDashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("literature")
  const [selectedScientist, setSelectedScientist] = useState<string | null>(null)
  const [reviewType, setReviewType] = useState<string | null>(null)

  if (!isOpen) {
    return (
      <div className="flex justify-center my-8">
        <Button className="pixel-button primary" onClick={() => setIsOpen(true)}>
          <Zap className="mr-2 h-4 w-4" />
          Open Research Tools
        </Button>
      </div>
    )
  }

  return (
    <Card variant="fullscreen" onClose={() => setIsOpen(false)}>
      <ResearchToolbar>
        <div className="flex items-center gap-4">
          <div className="relative w-8 h-8 gradient-border rounded-md overflow-hidden">
            <Image src="/pixel-logo.png" alt="Lysiom Logo" width={32} height={32} className="pixel-art" />
          </div>
          <h2 className="font-['Press_Start_2P'] text-sm gradient-text">RESEARCH ASSISTANT</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search papers, authors, topics..."
              className="w-64 px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
          </div>

          <div className="flex gap-2">
            <button className="pixel-button">
              <Download className="h-4 w-4 mr-1" />
              Export
            </button>
            <button className="pixel-button primary" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4 mr-1" />
              Close
            </button>
          </div>
        </div>
      </ResearchToolbar>

      <div className="flex flex-1 overflow-hidden">
        <ResearchSidebar>
          <div className="p-4">
            <h3 className="font-['Press_Start_2P'] text-xs gradient-text mb-4">RESEARCH TOOLS</h3>

            <div className="space-y-2 mb-6">
              <button
                className={`w-full text-left p-2 text-sm ${activeTab === "literature" ? "gradient-text-aurora" : "text-[var(--color-text-secondary)]"}`}
                onClick={() => setActiveTab("literature")}
              >
                <BookOpen className="h-4 w-4 inline mr-2" />
                Literature Review
              </button>

              <button
                className={`w-full text-left p-2 text-sm ${activeTab === "critical" ? "gradient-text-aurora" : "text-[var(--color-text-secondary)]"}`}
                onClick={() => setActiveTab("critical")}
              >
                <FileText className="h-4 w-4 inline mr-2" />
                Critical Analysis
              </button>

              <button
                className={`w-full text-left p-2 text-sm ${activeTab === "reviewers" ? "gradient-text-aurora" : "text-[var(--color-text-secondary)]"}`}
                onClick={() => setActiveTab("reviewers")}
              >
                <Users className="h-4 w-4 inline mr-2" />
                Multiple Reviewers
              </button>

              <button
                className={`w-full text-left p-2 text-sm ${activeTab === "metrics" ? "gradient-text-aurora" : "text-[var(--color-text-secondary)]"}`}
                onClick={() => setActiveTab("metrics")}
              >
                <BarChart className="h-4 w-4 inline mr-2" />
                Research Metrics
              </button>
            </div>

            <h3 className="font-['Press_Start_2P'] text-xs gradient-text-sunset mb-4">RECENT PAPERS</h3>

            <div className="space-y-3">
              {recentPapers.map((paper, index) => (
                <div
                  key={index}
                  className="p-2 border border-[var(--color-twilight)] hover:border-[var(--color-aurora)] cursor-pointer"
                >
                  <p className="text-xs gradient-text-aurora truncate">{paper.title}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{paper.authors}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-[var(--color-text-secondary)]">{paper.date}</span>
                    <span className="text-xs text-[var(--color-aurora)]">{paper.journal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ResearchSidebar>

        <ResearchContent>
          {activeTab === "literature" && (
            <div>
              <h2 className="text-xl gradient-text-aurora mb-6">LITERATURE REVIEW</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResearchPanel
                  title="SEARCH PARAMETERS"
                  icon={<Filter className="h-4 w-4 text-[var(--color-aurora)]" />}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Keywords</label>
                      <input
                        type="text"
                        placeholder="e.g., quantum computing, optimization"
                        className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Date Range</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="From"
                          className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]"
                        />
                        <input
                          type="text"
                          placeholder="To"
                          className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Journals</label>
                      <select className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]">
                        <option value="">All Journals</option>
                        <option value="nature">Nature</option>
                        <option value="science">Science</option>
                        <option value="cell">Cell</option>
                        <option value="pnas">PNAS</option>
                      </select>
                    </div>

                    <button className="pixel-button primary w-full">
                      <Search className="h-4 w-4 mr-1" />
                      Search Literature
                    </button>
                  </div>
                </ResearchPanel>

                <ResearchPanel
                  title="REVIEW OPTIONS"
                  icon={<FileText className="h-4 w-4 text-[var(--color-aurora)]" />}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-2 block">Review Type</label>
                      <div className="space-y-2">
                        <ResearchOption
                          selected={reviewType === "systematic"}
                          onClick={() => setReviewType("systematic")}
                        >
                          <p className="font-medium">Systematic Review</p>
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            Comprehensive analysis of all relevant literature
                          </p>
                        </ResearchOption>

                        <ResearchOption selected={reviewType === "meta"} onClick={() => setReviewType("meta")}>
                          <p className="font-medium">Meta-Analysis</p>
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            Statistical analysis combining results from multiple studies
                          </p>
                        </ResearchOption>

                        <ResearchOption selected={reviewType === "scoping"} onClick={() => setReviewType("scoping")}>
                          <p className="font-medium">Scoping Review</p>
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            Preliminary assessment to identify knowledge gaps
                          </p>
                        </ResearchOption>
                      </div>
                    </div>

                    <button className="pixel-button w-full">
                      <Zap className="h-4 w-4 mr-1" />
                      Generate Review Template
                    </button>
                  </div>
                </ResearchPanel>
              </div>

              <ResearchPanel title="RECENT FINDINGS" icon={<BookOpen className="h-4 w-4 text-[var(--color-aurora)]" />}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium">Top Papers in Your Field</h4>
                    <button className="flex items-center text-xs text-[var(--color-aurora)]">
                      <ArrowUpDown className="h-3 w-3 mr-1" />
                      Sort by: Relevance
                    </button>
                  </div>

                  <div className="space-y-4">
                    {topPapers.map((paper, index) => (
                      <div
                        key={index}
                        className="p-4 border border-[var(--color-twilight)] hover:border-[var(--color-aurora)] cursor-pointer"
                      >
                        <div className="flex justify-between">
                          <h5 className="text-sm gradient-text-aurora">{paper.title}</h5>
                          <span className="text-xs text-[var(--color-text-secondary)]">{paper.date}</span>
                        </div>
                        <p className="text-xs text-[var(--color-text-secondary)] mb-2">{paper.authors}</p>
                        <p className="text-xs text-[var(--color-text-secondary)] mb-3">{paper.abstract}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[var(--color-aurora)]">{paper.journal}</span>
                          <div className="flex gap-2">
                            <button className="pixel-button text-xs">View PDF</button>
                            <button className="pixel-button text-xs">Add to Review</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ResearchPanel>
            </div>
          )}

          {activeTab === "reviewers" && (
            <div>
              <h2 className="text-xl gradient-text-aurora mb-6">MULTIPLE REVIEWERS</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <ResearchPanel title="SELECT SCIENTISTS" icon={<User className="h-4 w-4 text-[var(--color-aurora)]" />}>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Search scientists by name or field"
                      className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]"
                    />

                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {scientists.map((scientist, index) => (
                        <ResearchOption
                          key={index}
                          selected={selectedScientist === scientist.id}
                          onClick={() => setSelectedScientist(scientist.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={scientist.avatar || "/placeholder.svg"}
                                alt={scientist.name}
                                width={32}
                                height={32}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{scientist.name}</p>
                              <p className="text-xs text-[var(--color-text-secondary)]">{scientist.field}</p>
                            </div>
                          </div>
                        </ResearchOption>
                      ))}
                    </div>
                  </div>
                </ResearchPanel>

                <ResearchPanel title="REVIEW PLAN" icon={<Clock className="h-4 w-4 text-[var(--color-aurora)]" />}>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Review Timeline</label>
                      <select className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]">
                        <option value="1week">1 Week</option>
                        <option value="2weeks">2 Weeks</option>
                        <option value="1month">1 Month</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Review Method</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="radio" id="double-blind" name="review-method" className="mr-2" />
                          <label htmlFor="double-blind" className="text-sm">
                            Double-blind
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="single-blind" name="review-method" className="mr-2" />
                          <label htmlFor="single-blind" className="text-sm">
                            Single-blind
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="open" name="review-method" className="mr-2" />
                          <label htmlFor="open" className="text-sm">
                            Open review
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">
                        Number of Reviewers
                      </label>
                      <select className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]">
                        <option value="2">2 Reviewers</option>
                        <option value="3">3 Reviewers</option>
                        <option value="5">5 Reviewers</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                </ResearchPanel>

                <ResearchPanel
                  title="REVIEW CRITERIA"
                  icon={<CheckCircle className="h-4 w-4 text-[var(--color-aurora)]" />}
                >
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="methodology" className="mr-2" checked />
                      <label htmlFor="methodology" className="text-sm">
                        Methodology
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="results" className="mr-2" checked />
                      <label htmlFor="results" className="text-sm">
                        Results & Analysis
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="novelty" className="mr-2" checked />
                      <label htmlFor="novelty" className="text-sm">
                        Novelty & Innovation
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="literature" className="mr-2" checked />
                      <label htmlFor="literature" className="text-sm">
                        Literature Review
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="clarity" className="mr-2" checked />
                      <label htmlFor="clarity" className="text-sm">
                        Clarity & Presentation
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="ethics" className="mr-2" checked />
                      <label htmlFor="ethics" className="text-sm">
                        Ethical Considerations
                      </label>
                    </div>

                    <button className="pixel-button text-xs w-full">
                      <span className="text-[var(--color-aurora)]">+</span> Add Custom Criterion
                    </button>
                  </div>
                </ResearchPanel>
              </div>

              <ResearchPanel title="SELECTED REVIEWERS" icon={<Users className="h-4 w-4 text-[var(--color-aurora)]" />}>
                <div className="space-y-4">
                  {selectedScientist ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {scientists
                        .filter((s) => s.id === selectedScientist)
                        .map((scientist, index) => (
                          <div
                            key={index}
                            className="p-4 border border-[var(--color-aurora)] bg-[var(--color-twilight)]"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                  src={scientist.avatar || "/placeholder.svg"}
                                  alt={scientist.name}
                                  width={48}
                                  height={48}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium gradient-text">{scientist.name}</p>
                                <p className="text-xs text-[var(--color-text-secondary)]">{scientist.field}</p>
                                <p className="text-xs text-[var(--color-text-secondary)]">{scientist.affiliation}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-[var(--color-text-secondary)]">Publications:</span>
                                <span>{scientist.publications}</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-[var(--color-text-secondary)]">Citations:</span>
                                <span>{scientist.citations}</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-[var(--color-text-secondary)]">h-index:</span>
                                <span>{scientist.hIndex}</span>
                              </div>
                            </div>
                            <div className="mt-3 flex justify-between">
                              <button className="pixel-button text-xs">View Profile</button>
                              <button className="pixel-button text-xs" onClick={() => setSelectedScientist(null)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}

                      <div className="p-4 border border-dashed border-[var(--color-twilight)] flex items-center justify-center">
                        <button className="pixel-button text-xs">
                          <span className="text-[var(--color-aurora)]">+</span> Add Another Reviewer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6">
                      <p className="text-[var(--color-text-secondary)] mb-4">No reviewers selected yet</p>
                      <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                        Select scientists from the panel above to add them as reviewers
                      </p>
                      <button className="pixel-button">
                        <User className="h-4 w-4 mr-1" />
                        Select Scientists
                      </button>
                    </div>
                  )}
                </div>
              </ResearchPanel>

              <div className="flex justify-end mt-6">
                <button className="pixel-button primary">
                  <Zap className="h-4 w-4 mr-1" />
                  Create Review Plan
                </button>
              </div>
            </div>
          )}

          {activeTab === "critical" && (
            <div>
              <h2 className="text-xl gradient-text-aurora mb-6">CRITICAL ANALYSIS</h2>

              <p className="text-[var(--color-text-secondary)] mb-6">
                Upload a research paper or article to receive a comprehensive critical analysis, including methodology
                assessment, statistical validation, and identification of potential weaknesses or areas for improvement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ResearchPanel title="UPLOAD PAPER" icon={<FileText className="h-4 w-4 text-[var(--color-aurora)]" />}>
                  <div className="border-2 border-dashed border-[var(--color-twilight)] rounded-lg p-6 flex flex-col items-center justify-center">
                    <FileText className="h-12 w-12 text-[var(--color-text-secondary)] mb-4" />
                    <p className="text-sm text-center mb-2">Drag and drop your paper here, or click to browse</p>
                    <p className="text-xs text-[var(--color-text-secondary)] text-center mb-4">
                      PDF, DOCX, or TXT format (max 20MB)
                    </p>
                    <button className="pixel-button">Browse Files</button>
                  </div>
                </ResearchPanel>

                <ResearchPanel
                  title="ANALYSIS OPTIONS"
                  icon={<Filter className="h-4 w-4 text-[var(--color-aurora)]" />}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Analysis Depth</label>
                      <select className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]">
                        <option value="basic">Basic (Overview)</option>
                        <option value="standard">Standard (Detailed)</option>
                        <option value="comprehensive">Comprehensive (In-depth)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Focus Areas</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="methodology-check" className="mr-2" checked />
                          <label htmlFor="methodology-check" className="text-sm">
                            Methodology
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="statistical" className="mr-2" checked />
                          <label htmlFor="statistical" className="text-sm">
                            Statistical Analysis
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="literature-check" className="mr-2" checked />
                          <label htmlFor="literature-check" className="text-sm">
                            Literature Context
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="conclusions" className="mr-2" checked />
                          <label htmlFor="conclusions" className="text-sm">
                            Conclusions & Claims
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-[var(--color-text-secondary)] mb-1 block">Output Format</label>
                      <select className="w-full px-3 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]">
                        <option value="report">Detailed Report</option>
                        <option value="summary">Executive Summary</option>
                        <option value="annotated">Annotated Paper</option>
                      </select>
                    </div>
                  </div>
                </ResearchPanel>
              </div>

              <div className="flex justify-end">
                <button className="pixel-button primary">
                  <Zap className="h-4 w-4 mr-1" />
                  Start Critical Analysis
                </button>
              </div>
            </div>
          )}

          {activeTab === "metrics" && (
            <div>
              <h2 className="text-xl gradient-text-aurora mb-6">RESEARCH METRICS</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="artisan-card p-6 text-center">
                  <BarChart className="h-10 w-10 mx-auto text-[var(--color-aurora)] mb-3" />
                  <h3 className="gradient-text text-lg mb-1">42</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">Publications</p>
                </div>

                <div className="artisan-card p-6 text-center">
                  <Users className="h-10 w-10 mx-auto text-[var(--color-nebula)] mb-3" />
                  <h3 className="gradient-text-nebula text-lg mb-1">1,248</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">Citations</p>
                </div>

                <div className="artisan-card p-6 text-center">
                  <Zap className="h-10 w-10 mx-auto text-[var(--color-solar)] mb-3" />
                  <h3 className="gradient-text-sunset text-lg mb-1">18</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">h-index</p>
                </div>
              </div>

              <ResearchPanel
                title="PUBLICATION IMPACT"
                icon={<BarChart className="h-4 w-4 text-[var(--color-aurora)]" />}
              >
                <div className="h-64 flex items-center justify-center">
                  <p className="text-[var(--color-text-secondary)]">
                    Interactive publication impact chart would appear here
                  </p>
                </div>
              </ResearchPanel>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ResearchPanel
                  title="TOP COLLABORATORS"
                  icon={<Users className="h-4 w-4 text-[var(--color-aurora)]" />}
                >
                  <div className="space-y-3">
                    {topCollaborators.map((collaborator, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 border border-[var(--color-twilight)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={collaborator.avatar || "/placeholder.svg"}
                              alt={collaborator.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm">{collaborator.name}</p>
                            <p className="text-xs text-[var(--color-text-secondary)]">{collaborator.affiliation}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm gradient-text">{collaborator.papers}</p>
                          <p className="text-xs text-[var(--color-text-secondary)]">joint papers</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ResearchPanel>

                <ResearchPanel
                  title="RESEARCH TOPICS"
                  icon={<MessageSquare className="h-4 w-4 text-[var(--color-aurora)]" />}
                >
                  <div className="flex flex-wrap gap-2">
                    {researchTopics.map((topic, index) => (
                      <div
                        key={index}
                        className="px-3 py-1 border border-[var(--color-twilight)] text-sm"
                        style={{
                          fontSize: `${Math.max(0.7, topic.weight * 0.05)}rem`,
                          opacity: 0.5 + topic.weight * 0.5,
                        }}
                      >
                        {topic.name}
                      </div>
                    ))}
                  </div>
                </ResearchPanel>
              </div>
            </div>
          )}
        </ResearchContent>
      </div>
    </Card>
  )
}

// Sample data
const recentPapers = [
  {
    title: "Quantum Computing Applications in Optimization Problems",
    authors: "Chen et al.",
    date: "2023",
    journal: "Nature Physics",
  },
  {
    title: "Novel Approaches to Tensor Network Representations",
    authors: "Smith et al.",
    date: "2023",
    journal: "Quantum",
  },
  {
    title: "Machine Learning for Quantum Algorithm Discovery",
    authors: "Johnson et al.",
    date: "2022",
    journal: "Science",
  },
]

const topPapers = [
  {
    title: "Quantum Advantage in Optimization Problems Using Tensor Networks",
    authors: "Chen, S., Smith, J., & Johnson, K.",
    date: "2023",
    journal: "Nature Physics",
    abstract:
      "This paper demonstrates a novel approach to solving complex optimization problems using tensor network representations in quantum computing, achieving exponential speedup compared to classical methods.",
  },
  {
    title: "Hybrid Quantum-Classical Algorithms for Combinatorial Optimization",
    authors: "Rodriguez, J., & Williams, T.",
    date: "2023",
    journal: "Quantum Information Processing",
    abstract:
      "We propose a hybrid approach that combines quantum computing with classical optimization techniques to solve large-scale combinatorial problems more efficiently.",
  },
]

const scientists = [
  {
    id: "s1",
    name: "Dr. Sarah Chen",
    field: "Quantum Computing",
    affiliation: "MIT",
    avatar: "/avatars/researcher1.png",
    publications: 78,
    citations: 3420,
    hIndex: 28,
  },
  {
    id: "s2",
    name: "Prof. James Rodriguez",
    field: "Computer Science",
    affiliation: "Stanford University",
    avatar: "/avatars/researcher2.png",
    publications: 112,
    citations: 5840,
    hIndex: 35,
  },
  {
    id: "s3",
    name: "Dr. Emily Wong",
    field: "Quantum Physics",
    affiliation: "Princeton University",
    avatar: "/avatars/researcher3.png",
    publications: 64,
    citations: 2180,
    hIndex: 24,
  },
]

const topCollaborators = [
  {
    name: "Dr. Sarah Chen",
    affiliation: "MIT",
    avatar: "/avatars/researcher1.png",
    papers: 12,
  },
  {
    name: "Prof. James Rodriguez",
    affiliation: "Stanford University",
    avatar: "/avatars/researcher2.png",
    papers: 8,
  },
  {
    name: "Dr. Emily Wong",
    affiliation: "Princeton University",
    avatar: "/avatars/researcher3.png",
    papers: 5,
  },
]

const researchTopics = [
  { name: "Quantum Computing", weight: 10 },
  { name: "Tensor Networks", weight: 8 },
  { name: "Optimization", weight: 7 },
  { name: "Machine Learning", weight: 6 },
  { name: "Algorithms", weight: 5 },
  { name: "Quantum Simulation", weight: 9 },
  { name: "Quantum Error Correction", weight: 7 },
  { name: "Quantum Cryptography", weight: 4 },
  { name: "Quantum Advantage", weight: 8 },
  { name: "NISQ Devices", weight: 6 },
]
