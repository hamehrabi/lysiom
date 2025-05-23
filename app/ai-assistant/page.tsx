import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AIAssistant } from "@/components/ai/ai-assistant"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function AIAssistantPage() {
  return (
    <div className="flex min-h-screen flex-col scanlines">
      <Header />

      <main className="flex-1 py-8 relative overflow-hidden pixel-grid">
        {/* Background elements similar to main page for consistency */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
          <div
            className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl bottom-1/4 -right-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-72 h-72 rounded-full bg-[var(--color-nebula)] blur-3xl top-3/4 left-1/3 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-start mb-6">
            <Link href="/" className="pixel-button flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-['Press_Start_2P'] mb-4 gradient-text-aurora">AI RESEARCH ASSISTANT</h1>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Your personal AI assistant to help with literature reviews, data analysis, and research planning.
              </p>
            </div>

            <div className="h-[calc(100vh-300px)] min-h-[500px]">
              <AIAssistant />
            </div>
          </div>
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-midnight)] to-transparent"></div>
      </main>

      <Footer />
    </div>
  )
}
