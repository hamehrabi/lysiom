"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 glass ${scrollY > 50 ? "backdrop-blur-md" : ""}`}>
      <div className="artisan-container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-3 z-10">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden">
            <Image
              src="/new-lysiom-logo.png"
              alt="Lysiom - Platform for Unsolved Scientific Problems"
              width={56}
              height={56}
              className="pixel-art object-contain"
              priority
            />
          </div>
          <span className="font-['Press_Start_2P'] text-sm gradient-text hidden sm:inline">LYSIOM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/problems"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors"
          >
            PROBLEMS
          </Link>
          <Link
            href="/solutions"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-nebula)] transition-colors"
          >
            SOLUTIONS
          </Link>
          <Link
            href="/about"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-solar)] transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="/faq"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-plasma)] transition-colors"
          >
            FAQ
          </Link>
          <div className="ml-4 overflow-hidden rounded-md flex items-center h-full">
            <Link href="/auth" className="pixel-button primary overflow-hidden inline-block h-full flex items-center">
              SIGN IN
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden pixel-button py-1 px-2 text-xs overflow-hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-[var(--color-twilight)]">
          <nav className="artisan-container py-6 flex flex-col gap-6">
            <Link
              href="/problems"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)]"
              onClick={() => setIsMenuOpen(false)}
            >
              PROBLEMS
            </Link>
            <Link
              href="/solutions"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-nebula)]"
              onClick={() => setIsMenuOpen(false)}
            >
              SOLUTIONS
            </Link>
            <Link
              href="/about"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-solar)]"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/faq"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-plasma)]"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="overflow-hidden rounded-md inline-block">
              <Link
                href="/auth"
                className="pixel-button primary mt-2 overflow-hidden inline-block h-full flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                SIGN IN
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
