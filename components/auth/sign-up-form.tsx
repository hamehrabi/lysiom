"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export default function SignUpForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const getPasswordStrength = (password: string) => {
    if (!password) return 0

    let strength = 0

    // Length check
    if (password.length >= 8) strength += 1

    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1

    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1

    // Contains number
    if (/[0-9]/.test(password)) strength += 1

    // Contains special char
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    return strength
  }

  const passwordStrength = getPasswordStrength(password)

  const getStrengthLabel = (strength: number) => {
    if (strength === 0) return ""
    if (strength <= 2) return "Weak"
    if (strength <= 4) return "Good"
    return "Strong"
  }

  const getStrengthColor = (strength: number) => {
    if (strength === 0) return "bg-[var(--color-cosmic-dust)]"
    if (strength <= 2) return "bg-red-500"
    if (strength <= 4) return "bg-yellow-500"
    return "bg-green-500"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (passwordStrength < 3) {
      setError("Please use a stronger password")
      return
    }

    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy")
      return
    }

    try {
      setIsSubmitting(true)
      // Here you would implement actual registration logic
      console.log("Signing up with:", { name, email, password })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, always succeed
      window.location.href = "/dashboard"
    } catch (err) {
      setError("Failed to create account. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-900/20 border border-red-500/50 text-red-400 text-sm rounded-md">{error}</div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-pixel text-[var(--color-text-secondary)]">
          FULL NAME
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-[var(--color-midnight)] border border-[var(--color-cosmic-dust)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-aurora)] text-white"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="signup-email" className="block text-sm font-pixel text-[var(--color-text-secondary)]">
          EMAIL
        </label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-[var(--color-midnight)] border border-[var(--color-cosmic-dust)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-aurora)] text-white"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="signup-password" className="block text-sm font-pixel text-[var(--color-text-secondary)]">
          PASSWORD
        </label>
        <div className="relative">
          <input
            id="signup-password"
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

        {password && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs text-[var(--color-text-secondary)]">Password strength:</div>
              <div
                className="text-xs font-medium"
                style={{ color: passwordStrength <= 2 ? "#ef4444" : passwordStrength <= 4 ? "#eab308" : "#22c55e" }}
              >
                {getStrengthLabel(passwordStrength)}
              </div>
            </div>
            <div className="h-1 w-full bg-[var(--color-cosmic-dust)] rounded-full overflow-hidden">
              <div
                className={`h-full ${getStrengthColor(passwordStrength)} transition-all duration-300`}
                style={{ width: `${(passwordStrength / 5) * 100}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full ${i < passwordStrength ? getStrengthColor(passwordStrength) : "bg-[var(--color-cosmic-dust)]"}`}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="confirm-password" className="block text-sm font-pixel text-[var(--color-text-secondary)]">
          CONFIRM PASSWORD
        </label>
        <div className="relative">
          <input
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-4 py-2 bg-[var(--color-midnight)] border ${
              confirmPassword && password !== confirmPassword ? "border-red-500" : "border-[var(--color-cosmic-dust)]"
            } rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-aurora)] text-white pr-10`}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Image
              src={showConfirmPassword ? "/icons/eye-off.png" : "/icons/eye.png"}
              alt={showConfirmPassword ? "Hide password" : "Show password"}
              width={20}
              height={20}
              className="opacity-60 hover:opacity-100"
            />
          </button>
        </div>
        {confirmPassword && password !== confirmPassword && (
          <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
        )}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="h-4 w-4 border-[var(--color-cosmic-dust)] rounded bg-[var(--color-midnight)] text-[var(--color-aurora)] focus:ring-[var(--color-aurora)]"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="text-[var(--color-text-secondary)]">
            I agree to the{" "}
            <a href="/terms" className="text-[var(--color-aurora)] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[var(--color-aurora)] hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" disabled={isSubmitting} className="w-auto px-8 pixel-button primary">
          {isSubmitting ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
        </button>
      </div>
    </form>
  )
}
