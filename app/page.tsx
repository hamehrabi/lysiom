"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import problemsData from "@/data/problems.json"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate featured projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  // Parallax effect calculation
  const parallaxOffset = scrollY * 0.4

  // Use the first 3 problems from our data source for featured projects
  const featuredProjects = problemsData.problems.slice(0, 3).map((problem) => ({
    title: problem.title,
    category: problem.category,
    difficulty: problem.difficulty,
    description: problem.description,
    submissions: problem.submissions,
    image: `/projects/${problem.icon}.png`,
    id: problem.id,
  }))

  const howItWorks = [
    {
      title: "EXPLORE & SELECT",
      description: "Browse our curated list of unsolved problems and select one that matches your expertise.",
      icon: "magnifier",
    },
    {
      title: "AI-POWERED RESEARCH",
      description: "Use our AI tools to develop ideas and gather information for your solution.",
      icon: "brain",
    },
    {
      title: "CREATE ARTICLE",
      description: "Develop a comprehensive article detailing your innovative solution approach.",
      icon: "paper",
    },
    {
      title: "COMMUNITY REVIEW",
      description: "Get upvoted by the community for expert peer-review validation.",
      icon: "community",
    },
    {
      title: "SECURE FUNDING",
      description: "Validated solutions move to fundraising from universities and institutes.",
      icon: "coins",
    },
    {
      title: "RETAIN IP RIGHTS",
      description: "Final IP belongs to you and your sponsoring institutions.",
      icon: "certificate",
    },
  ]

  const disciplines = [
    { id: "physics", name: "PHYSICS", icon: "einstein", count: 12 },
    { id: "mathematics", name: "MATHEMATICS", icon: "gauss", count: 8 },
    { id: "computer-science", name: "COMPUTER SCIENCE", icon: "turing", count: 15 },
    { id: "medicine", name: "MEDICINE", icon: "hippocrates", count: 18 },
    { id: "biology", name: "BIOLOGY", icon: "darwin", count: 10 },
    { id: "environmental", name: "ENVIRONMENTAL", icon: "environment", count: 14 },
    { id: "engineering", name: "ENGINEERING", icon: "engineering", count: 16 },
    { id: "economics", name: "ECONOMICS", icon: "economics", count: 9 },
  ]

  const testimonials = [
    {
      quote:
        "Lysiom's platform enabled our team to solve a problem that had stumped researchers for decades. The AI assistant was instrumental in our breakthrough.",
      name: "Dr. Sarah Chen",
      title: "MIT Quantum Computing Lab",
      avatar: "/avatars/researcher1.png",
    },
    {
      quote:
        "The collaborative environment and access to cross-disciplinary expertise helped us develop a novel approach to carbon capture that's now being implemented globally.",
      name: "Prof. James Rodriguez",
      title: "Stanford Environmental Science",
      avatar: "/avatars/researcher2.png",
    },
  ]

  const socialLinks = [
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "GitHub", icon: "github", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
  ]

  const investors = [
    { name: "Sequoia Capital", logo: "sequoia.png", width: 120 },
    { name: "Andreessen Horowitz", logo: "a16z.png", width: 120 },
    { name: "Y Combinator", logo: "yc.png", width: 100 },
    { name: "Accel", logo: "accel.png", width: 100 },
  ]

  return (
    <div className="min-h-screen scanlines">
      {/* Sophisticated Header with Glass Effect */}
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
            <span className="font-['Press_Start_2P'] text-sm gradient-text">LYSIOM</span>
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
            <div className="ml-4 overflow-hidden rounded-md flex items-center h-full">
              <Link href="/auth" className="pixel-button primary overflow-hidden inline-block h-full flex items-center">
                SIGN IN
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden pixel-button py-1 px-2 text-xs overflow-hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden glass border-t border-[var(--color-twilight)]">
            <nav className="artisan-container py-6 flex flex-col gap-6">
              <Link
                href="/problems"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)]"
                onClick={() => setMenuOpen(false)}
              >
                PROBLEMS
              </Link>
              <Link
                href="/solutions"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-nebula)]"
                onClick={() => setMenuOpen(false)}
              >
                SOLUTIONS
              </Link>
              <Link
                href="/about"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-solar)]"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT
              </Link>
              <div className="overflow-hidden rounded-md inline-block">
                <Link
                  href="/auth"
                  className="pixel-button primary mt-2 overflow-hidden inline-block h-full flex items-center justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  SIGN IN
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Artisan Hero Section with Parallax Effect */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden pixel-grid"
        >
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
            <div
              className="absolute w-72 h-72 rounded-full bg-[var(--color-nebula)] blur-3xl opacity-10 top-3/4 left-1/3 animate-pulse"
              style={{ animationDelay: "2s", transform: `translateY(${parallaxOffset * 0.3}px)` }}
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

          {/* Hero Content */}
          <div className="artisan-container relative z-10 text-center px-4">
            <h1
              className="text-3xl md:text-4xl mb-6 leading-relaxed"
              style={{ transform: `translateY(${-parallaxOffset * 0.15}px)` }}
            >
              <span className="gradient-text-nebula block mb-2">SOLVING HUMANITY'S</span>
              <span className="gradient-text-aurora">GREATEST CHALLENGES USING AI</span>
            </h1>

            <p
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 text-lg"
              style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
            >
              Lysiom connects elite researchers, academics, and problem solvers to address the world's most pressing
              challenges through collaborative innovation.
            </p>

            <div
              className="flex flex-wrap justify-center gap-4 mb-16"
              style={{ transform: `translateY(${-parallaxOffset * 0.25}px)` }}
            >
              <div className="overflow-hidden rounded-md">
                <Link href="/problems" className="pixel-button secondary overflow-hidden inline-block">
                  EXPLORE PROBLEMS
                </Link>
              </div>
              <div className="overflow-hidden rounded-md">
                <Link
                  href="/ai-assistant"
                  className="pixel-button primary hover:scale-105 transition-transform overflow-hidden inline-block"
                >
                  AI RESEARCH ASSISTANT
                </Link>
              </div>
            </div>
          </div>

          {/* Gradient Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-midnight)] to-transparent"></div>
        </section>

        {/* How It Works Section */}
        <section
          className="py-16 relative overflow-hidden"
          style={{
            backgroundColor: "#151528",
            backgroundImage: `linear-gradient(rgba(88, 59, 138, 0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(88, 59, 138, 0.03) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        >
          <div className="artisan-container relative z-10">
            <h2
              className="text-center text-2xl mb-6 font-['Press_Start_2P']"
              style={{
                background: "linear-gradient(to right, #b57edc, #8a5cf5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 8px rgba(181, 126, 220, 0.6)",
              }}
            >
              HOW IT WORKS
            </h2>
            <p className="text-center text-[#8aa2cc] max-w-2xl mx-auto mb-12">
              Our streamlined process for turning breakthrough ideas into funded solutions
            </p>

            {/* Desktop View - Single Row */}
            <div className="hidden lg:block relative mb-8">
              {/* Connecting Line */}
              <div className="absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-[var(--color-twilight)]"></div>

              <div className="grid grid-cols-6 gap-2">
                {howItWorks.map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center text-center">
                    <div className="absolute -top-5 w-10 h-10 rounded-full bg-[#151528] border-2 border-[var(--color-twilight)] flex items-center justify-center z-10">
                      <span className="font-['Press_Start_2P'] text-sm gradient-text">{index + 1}</span>
                    </div>
                    <div className="artisan-card p-3 w-full flex flex-col items-center hover-lift mt-8 h-[160px]">
                      <h3 className="mb-1 text-sm gradient-text-aurora h-[40px] flex items-center justify-center">
                        {step.title}
                      </h3>
                      <div className="flex-1 flex items-center">
                        <p className="text-[var(--color-text-secondary)] text-xs">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet View - Two Rows */}
            <div className="hidden md:block lg:hidden relative mb-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* First Row */}
                <div className="relative">
                  <div className="absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-[var(--color-twilight)]"></div>
                  {howItWorks.slice(0, 3).map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center">
                      <div className="absolute -top-5 w-10 h-10 rounded-full bg-[#151528] border-2 border-[var(--color-twilight)] flex items-center justify-center z-10">
                        <span className="font-['Press_Start_2P'] text-sm gradient-text">{index + 1}</span>
                      </div>
                      <div className="artisan-card p-3 w-full flex flex-col items-center hover-lift mt-8 h-[160px]">
                        <h3 className="mb-1 text-sm gradient-text-aurora h-[40px] flex items-center justify-center">
                          {step.title}
                        </h3>
                        <div className="flex-1 flex items-center">
                          <p className="text-[var(--color-text-secondary)] text-xs">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Row */}
                <div className="relative">
                  <div className="absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-[var(--color-twilight)]"></div>
                  {howItWorks.slice(3, 6).map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center">
                      <div className="absolute -top-5 w-10 h-10 rounded-full bg-[#151528] border-2 border-[var(--color-twilight)] flex items-center justify-center z-10">
                        <span className="font-['Press_Start_2P'] text-sm gradient-text">{index + 4}</span>
                      </div>
                      <div className="artisan-card p-3 w-full flex flex-col items-center hover-lift mt-8 h-[160px]">
                        <h3 className="mb-1 text-sm gradient-text-aurora h-[40px] flex items-center justify-center">
                          {step.title}
                        </h3>
                        <div className="flex-1 flex items-center">
                          <p className="text-[var(--color-text-secondary)] text-xs">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile View - Vertical Steps */}
            <div className="md:hidden">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[var(--color-twilight)]"></div>

                {howItWorks.map((step, index) => (
                  <div key={index} className="relative flex items-start mb-8 pl-12">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#151528] border-2 border-[var(--color-twilight)] flex items-center justify-center z-10">
                      <span className="font-['Press_Start_2P'] text-sm gradient-text">{index + 1}</span>
                    </div>
                    <div className="artisan-card p-4 w-full hover-lift min-h-[100px] flex flex-col">
                      <div className="flex items-center mb-3 h-[30px]">
                        <h3 className="text-sm gradient-text-aurora">{step.title}</h3>
                      </div>
                      <div className="flex-1 flex items-center">
                        <p className="text-[var(--color-text-secondary)] text-xs">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="overflow-hidden rounded-md inline-block">
                <Link href="/problems" className="pixel-button primary overflow-hidden inline-block">
                  START YOUR JOURNEY
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Carousel */}

        {/* Pixel Divider */}

        {/* Featured Projects Carousel */}
        <section className="py-16 relative overflow-hidden">
          <div className="artisan-container">
            <h2 className="text-center text-xl mb-12 gradient-text-sunset">BREAKTHROUGH RESEARCH OPPORTUNITIES</h2>

            <div className="relative">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="artisan-card p-8 glow h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <div className="mb-6 flex justify-between items-center">
                              <span className="gradient-text-aurora">{project.category}</span>
                              <span className="text-[var(--color-text-secondary)] text-sm px-3 py-1 glass rounded-full">
                                {project.difficulty}
                              </span>
                            </div>
                            <h3 className="text-xl mb-4 gradient-text-nebula">{project.title}</h3>
                            <p className="text-[var(--color-text-secondary)] mb-6">{project.description}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[var(--color-text-secondary)] text-sm">
                              {project.submissions} SUBMISSIONS
                            </span>
                            <div className="overflow-hidden rounded-md inline-block">
                              <Link
                                href={`/problems/${project.id || project.title.toLowerCase().replace(/\s+/g, "-")}`}
                                className="pixel-button secondary text-xs overflow-hidden inline-block"
                              >
                                VIEW DETAILS
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="relative h-64 w-64 float flex items-center justify-center">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={256}
                              height={256}
                              className="pixel-art object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Navigation */}
              <div className="flex justify-center mt-8 gap-3">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-sm transition-all ${
                      currentProject === index ? "bg-[var(--color-plasma)] w-6" : "bg-[var(--color-twilight)]"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pixel Divider */}
        <div className="pixel-divider"></div>

        {/* Disciplines Grid */}
        <section className="py-16">
          <div className="artisan-container">
            <h2 className="text-center text-xl mb-12 gradient-text-nebula">EXPLORE BY DISCIPLINE</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {disciplines.map((discipline, index) => (
                <Link
                  key={discipline.id}
                  href={`/problems?discipline=${discipline.id}`}
                  className="artisan-card p-6 flex flex-col items-center text-center hover-lift"
                >
                  <div className="mb-4 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[var(--color-twilight)] to-[var(--color-cosmic-dust)] border-2 border-[var(--color-twilight)] rounded-md p-2 pixel-art relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                    <Image
                      src={`/icons/${discipline.icon}.png`}
                      alt={
                        discipline.name === "PHYSICS"
                          ? "Physics discipline - Albert Einstein pixel art"
                          : discipline.name === "MATHEMATICS"
                            ? "Mathematics discipline - Carl Friedrich Gauss pixel art"
                            : discipline.name === "COMPUTER SCIENCE"
                              ? "Computer Science discipline - Alan Turing pixel art"
                              : discipline.name === "MEDICINE"
                                ? "Medicine discipline - Hippocrates pixel art"
                                : discipline.name === "BIOLOGY"
                                  ? "Biology discipline - Charles Darwin pixel art"
                                  : discipline.name === "ENVIRONMENTAL"
                                    ? "Environmental discipline - Rachel Carson pixel art"
                                    : discipline.name === "ENGINEERING"
                                      ? "Engineering discipline - Nikola Tesla pixel art"
                                      : discipline.name === "ECONOMICS"
                                        ? "Economics discipline - Adam Smith pixel art"
                                        : discipline.name
                      }
                      width={40}
                      height={40}
                      className={`pixel-art relative z-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] ${
                        discipline.icon === "einstein" || discipline.icon === "gauss" ? "scale-110" : ""
                      }`}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 className="text-sm mb-2 gradient-text">{discipline.name}</h3>
                  <p className="text-[var(--color-text-secondary)] text-xs">{discipline.count} PROBLEMS</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section with Animated Counters */}
        <section className="py-16 bg-[var(--color-deep-space)]">
          <div className="artisan-container">
            <h2 className="text-center text-xl mb-4 gradient-text">PLATFORM METRICS</h2>
            <p className="text-center text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12">
              Our ambitious targets for the first 6 months of operation
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "ACTIVE PROBLEMS" },
                { value: "750+", label: "RESEARCHERS" },
                { value: "$2.8M", label: "FUNDING SECURED" },
                { value: "12", label: "SOLVED PROBLEMS" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-['Press_Start_2P'] mb-3 gradient-text">{stat.value}</div>
                  <p className="text-[var(--color-text-secondary)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="artisan-container">
            <h2 className="text-center text-xl mb-12 gradient-text-sunset">SUCCESS STORIES</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="artisan-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden gradient-border">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="pixel-art"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-[var(--color-text-secondary)] mb-4">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold gradient-text">{testimonial.name}</p>
                        <p className="text-[var(--color-text-secondary)] text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Add this before the CTA section */}
        <section
          className="py-16 relative overflow-hidden"
          style={{
            backgroundColor: "#151528",
            backgroundImage: `linear-gradient(rgba(88, 59, 138, 0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(88, 59, 138, 0.03) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        >
          <div className="artisan-container relative z-10 text-center">
            <h2 className="text-xl mb-6 gradient-text-nebula">HAVE QUESTIONS?</h2>
            <p className="text-center text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
              Find answers to common questions about how Lysiom works, our approach to AI in research, intellectual
              property rights, and more.
            </p>
            <div className="overflow-hidden rounded-md inline-block">
              <Link href="/faq" className="pixel-button primary overflow-hidden inline-block">
                VISIT FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden pixel-grid">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
            <div
              className="absolute w-80 h-80 rounded-full bg-[var(--color-nebula)] blur-3xl bottom-1/4 -right-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="artisan-container relative z-10 text-center">
            <h2 className="text-xl mb-6 gradient-text-nebula">READY TO SOLVE REAL-WORLD PROBLEMS?</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 text-lg">
              Join our elite community of problem solvers and contribute to solutions that make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="overflow-hidden rounded-md inline-block">
                <Link href="/auth" className="pixel-button secondary overflow-hidden inline-block">
                  JOIN LYSIOM
                </Link>
              </div>
              <div className="overflow-hidden rounded-md inline-block">
                <Link href="/problems" className="pixel-button primary overflow-hidden inline-block">
                  EXPLORE PROBLEMS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-twilight)] py-12 bg-[var(--color-deep-space)]">
        <div className="artisan-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 overflow-hidden">
                  <Image
                    src="/new-lysiom-logo.png"
                    alt="Lysiom - Platform for Unsolved Scientific Problems"
                    width={48}
                    height={48}
                    className="pixel-art object-contain"
                  />
                </div>
                <span className="font-['Press_Start_2P'] text-sm gradient-text">LYSIOM</span>
              </div>
              <p className="text-[var(--color-text-secondary)] mb-6">
                A premium platform for collaborative research to address humanity's greatest challenges.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors"
                    aria-label={social.name}
                  >
                    <Image
                      src={`/icons/${social.icon}.png`}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="pixel-art"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-['Press_Start_2P'] mb-6 text-sm gradient-text">PLATFORM</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/problems"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors"
                  >
                    PROBLEMS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-nebula)] transition-colors"
                  >
                    SOLUTIONS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disciplines"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-solar)] transition-colors"
                  >
                    DISCIPLINES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-assistant"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-plasma)] transition-colors"
                  >
                    AI ASSISTANT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-['Press_Start_2P'] mb-6 text-sm gradient-text-aurora">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investors"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-nebula)] transition-colors"
                  >
                    INVESTORS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-solar)] transition-colors"
                  >
                    CAREERS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-plasma)] transition-colors"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-['Press_Start_2P'] mb-6 text-sm gradient-text-nebula">LEGAL</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors"
                  >
                    TERMS OF SERVICE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-nebula)] transition-colors"
                  >
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-solar)] transition-colors"
                  >
                    COOKIE POLICY
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--color-twilight)] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 md:mb-0">
              © 2025 LYSIOM, INC. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center">
              <span className="text-xs text-[var(--color-text-secondary)] mr-2">BACKED BY</span>
              <div className="flex gap-4">
                {investors.slice(0, 3).map((investor, index) => (
                  <div key={index} className="h-6 w-auto relative grayscale opacity-60">
                    <Image
                      src={`/investors/${investor.logo}`}
                      alt={investor.name}
                      width={investor.width / 2}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        
      </footer>
    </div>
  );
}
