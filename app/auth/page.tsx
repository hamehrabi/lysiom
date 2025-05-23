import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import AuthForm from "@/components/auth/auth-form"

export const metadata: Metadata = {
  title: "Authentication | Lysiom",
  description: "Sign in or create an account to join the Lysiom platform",
}

export default function AuthPage() {
  return (
    <div className="min-h-screen scanlines">
      {/* Hero Section with cosmic background */}
      <div className="relative py-16 pixel-grid overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl bottom-1/4 -right-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500 opacity-20 blur-xl rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-purple-500 opacity-20 blur-xl rounded-full animate-float-slow"></div>
          <div className="absolute top-2/3 left-1/5 w-20 h-20 bg-teal-500 opacity-25 blur-xl rounded-full animate-float-fast"></div>

          {/* Enhanced background with blue-green gradient */}
          <div className="absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-blue-900 via-teal-600 to-emerald-700 opacity-70"></div>
        </div>

        <div className="artisan-container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] mb-6"
          >
            <Image src="/icons/arrow-left.png" alt="Back" width={16} height={16} className="mr-2" />
            BACK TO HOME
          </Link>

          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[var(--color-cosmic-dust)] rounded-full flex items-center justify-center">
                    <Image src="/icons/user.png" alt="Authentication" width={32} height={32} />
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-pixel mb-2 gradient-text">Join The Collective</h1>
                <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
                  Sign in to your account or create a new one to join the Lysiom platform and contribute to solving the
                  world's most challenging problems.
                </p>
              </div>

              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
