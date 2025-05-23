"use client"

import { useState } from "react"
import SignInForm from "./sign-in-form"
import SignUpForm from "./sign-up-form"
import SocialLogin from "./social-login"

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin")

  return (
    <div className="artisan-card">
      <div className="mb-6 border-b border-[var(--color-cosmic-dust)]">
        <div className="flex">
          <button
            onClick={() => setActiveTab("signin")}
            className={`px-4 py-3 text-sm font-pixel relative ${
              activeTab === "signin"
                ? "text-[var(--color-aurora)]"
                : "text-[var(--color-text-secondary)] hover:text-white"
            }`}
            aria-selected={activeTab === "signin"}
          >
            SIGN IN
            {activeTab === "signin" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-aurora)] to-[var(--color-nebula)]"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`px-4 py-3 text-sm font-pixel relative ${
              activeTab === "signup"
                ? "text-[var(--color-aurora)]"
                : "text-[var(--color-text-secondary)] hover:text-white"
            }`}
            aria-selected={activeTab === "signup"}
          >
            SIGN UP
            {activeTab === "signup" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-aurora)] to-[var(--color-nebula)]"></span>
            )}
          </button>
        </div>
      </div>

      <div className="p-1">
        {activeTab === "signin" ? <SignInForm /> : <SignUpForm />}

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-[var(--color-cosmic-dust)]"></div>
          <span className="px-4 text-xs text-[var(--color-text-secondary)]">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-[var(--color-cosmic-dust)]"></div>
        </div>

        <SocialLogin />
      </div>
    </div>
  )
}
