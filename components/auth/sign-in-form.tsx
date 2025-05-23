"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import ForgotPassword from "./forgot-password"

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    try {
      setIsSubmitting(true)
      // Here you would implement actual authentication logic
      console.log("Signing in with:", { email, password, rememberMe })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, always succeed
      window.location.href = "/dashboard"
    } catch (err) {
      setError("Invalid email or password")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {showForgotPassword ? (
        <ForgotPassword onBack={() => setShowForgotPassword(false)} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/50 text-red-400 text-sm rounded-md">{error}</div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-pixel text-[var(--color-text-secondary)]">
              EMAIL
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[var(--color-midnight)] border border-[var(--color-cosmic-dust)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-aurora)] text-white"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-pixel text-[var(--color-text-secondary)]">
                PASSWORD
              </label>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-xs text-[var(--color-aurora)] hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-[var(--color-midnight)] border border-[var(--color-cosmic-dust)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-aurora)] text-white pr-10"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image
                  src={showPassword ? "/icons/eye-off.png" : "/icons/eye.png"}
                  alt={showPassword ? "Hide password" : "Show password"}
                  width={20}
                  height={20}
                  className="opacity-60 hover:opacity-100"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 border-[var(--color-cosmic-dust)] rounded bg-[var(--color-midnight)] text-[var(--color-aurora)] focus:ring-[var(--color-aurora)]"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--color-text-secondary)]">
              Remember me
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full pixel-button primary">
            {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>
      )}
    </>
  )
}
