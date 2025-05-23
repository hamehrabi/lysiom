"use client"

import Image from "next/image"

export default function SocialLogin() {
  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`)
    // Here you would implement the actual social login logic
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      <button
        type="button"
        onClick={() => handleSocialLogin("Google")}
        className="flex justify-center items-center px-4 py-2 border border-[var(--color-cosmic-dust)] rounded-md shadow-sm bg-[var(--color-midnight)] hover:bg-[var(--color-midnight)]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-aurora)] focus:ring-offset-[var(--color-deep-space)]"
      >
        <Image src="/icons/google.png" alt="Google" width={20} height={20} />
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("GitHub")}
        className="flex justify-center items-center px-4 py-2 border border-[var(--color-cosmic-dust)] rounded-md shadow-sm bg-[var(--color-midnight)] hover:bg-[var(--color-midnight)]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-aurora)] focus:ring-offset-[var(--color-deep-space)]"
      >
        <Image src="/icons/github.png" alt="GitHub" width={20} height={20} />
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("Twitter")}
        className="flex justify-center items-center px-4 py-2 border border-[var(--color-cosmic-dust)] rounded-md shadow-sm bg-[var(--color-midnight)] hover:bg-[var(--color-midnight)]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-aurora)] focus:ring-offset-[var(--color-deep-space)]"
      >
        <Image src="/icons/twitter.png" alt="Twitter" width={20} height={20} />
      </button>
    </div>
  )
}
