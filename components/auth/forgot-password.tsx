"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface ForgotPasswordProps {
  onBack: () => void
}

export default function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    try {
      setIsSubmitting(true)
      // Here you would implement actual password reset logic
      console.log("Password reset for:", email)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
    } catch (err) {
      setError("Failed to send reset email. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] mb-4"
      >
        <Image src="/icons/arrow-left.png" alt="Back" width={16} height={16} className="mr-2" />
        Back to sign in
      </button>

      <h3 className="text-lg font-pixel mb-2">Reset Password</h3>

      {isSubmitted ? (
        <div className="p-4 bg-green-900/20 border border-green-500/50 text-green-400 rounded-md">
          <p className="text-sm">
            If an account exists with the email <span className="font-medium">{email}</span>, you will receive password
            reset instructions.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Enter your email address and we'll send you instructions to reset your password.
          </p>

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/50 text-red-400 text-sm rounded-md">{error}</div>
          )}

          <div className="space-y-2">
            <label htmlFor="reset-email" className="block text-sm font-pixel text-[var(--color-text-secondary)]">
              EMAIL
            </label>
            <input
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[var(--color-midnight)] border border-[var(--color-cosmic-dust)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-aurora)] text-white"
              placeholder="your@email.com"
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full pixel-button primary">
            {isSubmitting ? "SENDING..." : "SEND RESET LINK"}
          </button>
        </form>
      )}
    </div>
  )
}
