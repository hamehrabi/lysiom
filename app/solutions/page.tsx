"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ChevronLeft } from "lucide-react"

export default function SolutionsPage() {
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Parallax effect calculation
  const parallaxOffset = scrollY * 0.4

  return (
    <div className="min-h-screen scanlines">
      <Header />

      <main>
        {/* Back to Home Link */}
        <div className="artisan-container pt-8">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            BACK TO HOME
          </Link>
        </div>

        {/* Hero Section with Parallax Effect */}
        <section className="relative py-16 pixel-grid overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"
              style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
            ></div>
            <div
              className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl opacity-10 bottom-1/4 -right-20 animate-pulse"
              style={{ animationDelay: "1s", transform: `translateY(${parallaxOffset * 0.7}px)` }}
            ></div>
          </div>

          {/* Pixel Art Grid Lines */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(127, 90, 240, 0.05) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(127, 90, 240, 0.05) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              transform: `translateY(${parallaxOffset * 0.2}px)`,
            }}
          ></div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-midnight)] to-transparent"></div>

          <div className="artisan-container relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 w-20 h-20 gradient-border rounded-full overflow-hidden flex items-center justify-center bg-[var(--color-deep-space)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="gradient-text"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h1
                className="text-2xl md:text-3xl mb-4 font-['Press_Start_2P'] gradient-text"
                style={{ transform: `translateY(${-parallaxOffset * 0.15}px)` }}
              >
                SOLUTIONS HUB
              </h1>
              <p
                className="text-[var(--color-text-secondary)] max-w-2xl mx-auto"
                style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
              >
                This is the place where solved projects are demonstrated for fundraising by universities, laboratories,
                and research institutions.
              </p>
            </div>
          </div>
        </section>

        {/* No Solutions Notice */}
        <section className="py-8">
          <div className="artisan-container">
            <div className="artisan-card p-6 border-[var(--color-solar)] border-opacity-30 bg-[var(--color-solar)]/5 text-center">
              <p className="text-lg font-medium mb-2 text-[var(--color-solar)]">
                There are no solved problems available yet.
              </p>
              <p className="text-[var(--color-text-secondary)]">
                Solutions will be added as research teams make breakthroughs on the listed problems.
              </p>
            </div>
          </div>
        </section>

        {/* Institution Types */}
        <section className="py-12">
          <div className="artisan-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="artisan-card p-6 hover-lift flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[var(--color-deep-space)] flex items-center justify-center mb-4 gradient-border">
                  <Image src="/icons/excellence.png" alt="Universities" width={32} height={32} className="pixel-art" />
                </div>
                <h2 className="text-xl font-semibold mb-2 gradient-text-aurora">Universities</h2>
                <p className="text-[var(--color-text-secondary)]">
                  Showcase groundbreaking research and attract funding for continued innovation
                </p>
              </div>

              <div className="artisan-card p-6 hover-lift flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[var(--color-deep-space)] flex items-center justify-center mb-4 gradient-border">
                  <Image src="/icons/data.png" alt="Laboratories" width={32} height={32} className="pixel-art" />
                </div>
                <h2 className="text-xl font-semibold mb-2 gradient-text-nebula">Laboratories</h2>
                <p className="text-[var(--color-text-secondary)]">
                  Demonstrate practical applications of scientific discoveries and secure resources
                </p>
              </div>

              <div className="artisan-card p-6 hover-lift flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[var(--color-deep-space)] flex items-center justify-center mb-4 gradient-border">
                  <Image
                    src="/icons/collaboration.png"
                    alt="Institutions"
                    width={32}
                    height={32}
                    className="pixel-art"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2 gradient-text-plasma">Institutions</h2>
                <p className="text-[var(--color-text-secondary)]">
                  Present collaborative solutions to complex problems and find implementation partners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-12 bg-[var(--color-deep-space)] relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Multiple colorful gradient blobs for a more interesting background */}
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[var(--color-plasma)] opacity-10 blur-3xl rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[var(--color-aurora)] opacity-15 blur-3xl rounded-full transform translate-x-1/4 translate-y-1/4"></div>

            {/* Grid pattern with enhanced blend mode */}
            <div className="absolute inset-0 mix-blend-soft-light">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(127, 90, 240, 0.05) 1px, transparent 1px), 
                                   linear-gradient(90deg, rgba(127, 90, 240, 0.05) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>
          </div>

          <div className="artisan-container relative z-10">
            <h2 className="text-xl font-['Press_Start_2P'] mb-8 gradient-text-aurora text-center">HOW IT WORKS</h2>

            <div className="artisan-card p-6 mb-8">
              <div className="space-y-6">
                {[
                  "Research teams solve problems listed in our Unsolved Problems database",
                  "Solutions undergo peer review and verification",
                  "Verified solutions are published here with full attribution",
                  "Interested funders can connect directly with research teams",
                  "Successful projects receive implementation support and resources",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 rounded-full bg-[var(--color-aurora)] text-[var(--color-midnight)] items-center justify-center flex-shrink-0 pixel-border">
                      <span className="font-['Press_Start_2P'] text-xs">{index + 1}</span>
                    </div>
                    <div className="pt-1">
                      <p className="font-medium gradient-text-subtle">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="py-12 relative pixel-grid">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
            <div
              className="absolute w-80 h-80 rounded-full bg-[var(--color-nebula)] blur-3xl bottom-1/4 -right-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="artisan-container relative z-10 flex justify-center gap-4">
            <Link href="/problems" className="pixel-button primary">
              EXPLORE UNSOLVED PROBLEMS
            </Link>
            <Link href="/contact" className="pixel-button secondary">
              CONTACT US
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
