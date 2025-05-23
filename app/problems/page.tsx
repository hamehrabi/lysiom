"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import { PageHeader } from "@/components/shared/page-header"
import { SectionHeader } from "@/components/shared/section-header"
import { PixelBadge } from "@/components/shared/pixel-badge"
import problemsData from "@/data/problems.json"

export default function ProblemsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const disciplineParam = searchParams.get("discipline")

  const [activeFilter, setActiveFilter] = useState(disciplineParam?.toUpperCase() || "all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (disciplineParam) {
      setActiveFilter(disciplineParam.toUpperCase())
    }
  }, [disciplineParam])

  // Filter problems based on active filter and search query
  const filteredProblems = problems.filter((problem) => {
    const matchesFilter = activeFilter === "all" || problem.category === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilter && matchesSearch
  })

  // Pagination
  const problemsPerPage = 9
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage)
  const paginatedProblems = filteredProblems.slice((currentPage - 1) * problemsPerPage, currentPage * problemsPerPage)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    if (filter === "all") {
      router.push("/problems")
    } else {
      router.push(`/problems?discipline=${filter.toLowerCase()}`)
    }
  }

  return (
    <div className="min-h-screen scanlines">
      <PageHeader
        title="UNSOLVED PROBLEMS"
        description="Explore our database of unsolved problems across various disciplines and contribute your solutions."
        gradient="sunset"
        backgroundPattern={true}
      />

      <main className="py-12">
        <div className="artisan-container">
          {/* Filters and Search */}
          <div className="mb-12 artisan-card p-6">
            <div className="flex flex-col gap-6 w-full">
              <div className="w-full flex flex-col gap-3">
                <div className="grid grid-cols-5 gap-3">
                  <button
                    onClick={() => handleFilterChange("all")}
                    className={`pixel-button w-full ${activeFilter === "all" ? "primary" : ""}`}
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => handleFilterChange("PHYSICS")}
                    className={`pixel-button w-full ${activeFilter === "PHYSICS" ? "primary" : ""}`}
                  >
                    PHYSICS
                  </button>
                  <button
                    onClick={() => handleFilterChange("MATHEMATICS")}
                    className={`pixel-button w-full ${activeFilter === "MATHEMATICS" ? "primary" : ""}`}
                  >
                    MATHEMATICS
                  </button>
                  <button
                    onClick={() => handleFilterChange("COMPUTER")}
                    className={`pixel-button w-full ${activeFilter === "COMPUTER" ? "primary" : ""}`}
                  >
                    COMPUTER SCIENCE
                  </button>
                  <button
                    onClick={() => handleFilterChange("MEDICINE")}
                    className={`pixel-button w-full ${activeFilter === "MEDICINE" ? "primary" : ""}`}
                  >
                    MEDICINE
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <button
                    onClick={() => handleFilterChange("BIOLOGY")}
                    className={`pixel-button w-full ${activeFilter === "BIOLOGY" ? "primary" : ""}`}
                  >
                    BIOLOGY
                  </button>
                  <button
                    onClick={() => handleFilterChange("ENVIRONMENTAL")}
                    className={`pixel-button w-full ${activeFilter === "ENVIRONMENTAL" ? "primary" : ""}`}
                  >
                    ENVIRONMENTAL
                  </button>
                  <button
                    onClick={() => handleFilterChange("ENGINEERING")}
                    className={`pixel-button w-full ${activeFilter === "ENGINEERING" ? "primary" : ""}`}
                  >
                    ENGINEERING
                  </button>
                  <button
                    onClick={() => handleFilterChange("ECONOMICS")}
                    className={`pixel-button w-full ${activeFilter === "ECONOMICS" ? "primary" : ""}`}
                  >
                    ECONOMICS
                  </button>
                  <div></div> {/* Empty div to maintain grid alignment */}
                </div>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-plasma)]"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Image src="/icons/search.png" alt="Search" width={20} height={20} className="pixel-art" />
                </div>
              </div>
            </div>
          </div>

          {/* Problems Grid */}
          <div className="mb-12">
            <SectionHeader title={`${filteredProblems.length} PROBLEMS FOUND`} gradient="aurora" alignment="left" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProblems.map((problem) => (
                <Link key={problem.id} href={`/problems/${problem.id}`} className="hover-lift">
                  <div className="artisan-card h-full flex flex-col overflow-hidden">
                    <div className="p-6 flex justify-center items-center bg-[var(--color-deep-space)]">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <Image
                          src={`/icons/${problem.icon}.png`}
                          alt={problem.title}
                          width={48}
                          height={48}
                          className="pixel-art"
                        />
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-center mb-4">
                        <PixelBadge variant="primary">{problem.category}</PixelBadge>
                        <PixelBadge
                          variant={
                            problem.difficulty === "HIGH"
                              ? "accent"
                              : problem.difficulty === "MEDIUM"
                                ? "highlight"
                                : "secondary"
                          }
                          size="sm"
                        >
                          {problem.difficulty}
                        </PixelBadge>
                      </div>
                      <h3 className="text-lg mb-3 gradient-text-aurora">{problem.title}</h3>
                      <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-3">{problem.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--color-text-secondary)] text-sm">
                          {problem.submissions} SUBMISSIONS
                        </span>
                        <span className="text-[var(--color-aurora)] text-sm">VIEW DETAILS →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="pixel-button"
                  aria-label="Previous page"
                >
                  ←
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`pixel-button ${currentPage === page ? "primary" : ""}`}
                    aria-label={`Page ${page}`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="pixel-button"
                  aria-label="Next page"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// Import data from external file
const { categories, problems } = problemsData
