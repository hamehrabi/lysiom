"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/shared/page-header"
import { FaqAccordion } from "@/components/faq/faq-accordion"
import { faqData } from "@/data/faq-data"

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter FAQs based on search query and active category
  const filteredFaqs = faqData.flatMap((category) =>
    category.questions
      .filter(
        (faq) =>
          (activeCategory === "all" || category.id === activeCategory) &&
          (searchQuery === "" ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      .map((faq) => ({
        ...faq,
        categoryId: category.id,
        categoryName: category.name,
      })),
  )

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative bg-[var(--color-deep-space)] border-b border-[var(--color-twilight)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl opacity-10 bottom-1/4 -right-20"></div>
        </div>

        <PageHeader
          title="FREQUENTLY ASKED QUESTIONS"
          description="Find answers to common questions about Lysiom's platform, processes, and policies."
          className="relative z-10"
        />
      </div>

      {/* Search and Filter Section */}
      <div className="artisan-container mt-8 mb-12">
        <div className="artisan-card p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-2/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image src="/icons/search.png" alt="Search" width={20} height={20} className="pixel-art opacity-70" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--color-cosmic-dust)] border border-[var(--color-twilight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-aurora)] text-[var(--color-text-primary)]"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-1/3 justify-center md:justify-end">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1 text-xs rounded-full ${
                  activeCategory === "all"
                    ? "bg-[var(--color-aurora)] text-[var(--color-midnight)]"
                    : "bg-[var(--color-cosmic-dust)] text-[var(--color-text-secondary)]"
                }`}
              >
                ALL
              </button>
              {faqData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 text-xs rounded-full ${
                    activeCategory === category.id
                      ? "bg-[var(--color-aurora)] text-[var(--color-midnight)]"
                      : "bg-[var(--color-cosmic-dust)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {category.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="artisan-container">
        {searchQuery && filteredFaqs.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl gradient-text-aurora mb-4">No results found</h3>
            <p className="text-[var(--color-text-secondary)]">Try different keywords or browse all categories</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
              className="mt-6 pixel-button secondary"
            >
              CLEAR SEARCH
            </button>
          </div>
        ) : (
          <>
            {activeCategory === "all" && searchQuery === "" ? (
              // Display by categories when no search or filter is active
              faqData.map((category) => (
                <div key={category.id} className="mb-12">
                  <h2 className="text-xl gradient-text-nebula mb-6">{category.name.toUpperCase()}</h2>
                  <FaqAccordion faqs={category.questions} />
                </div>
              ))
            ) : (
              // Display filtered results
              <div>
                <h2 className="text-xl gradient-text-nebula mb-6">
                  {searchQuery ? "SEARCH RESULTS" : activeCategory.toUpperCase()}
                </h2>
                <FaqAccordion
                  faqs={filteredFaqs.map((faq) => ({
                    question: faq.question,
                    answer: faq.answer,
                  }))}
                />
              </div>
            )}
          </>
        )}

        {/* Contact Section */}
        <div className="artisan-card p-8 mt-12 text-center">
          <h3 className="text-lg gradient-text-aurora mb-4">STILL HAVE QUESTIONS?</h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            If you couldn't find the answer you were looking for, our support team is here to help.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="pixel-button primary">
              CONTACT SUPPORT
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
