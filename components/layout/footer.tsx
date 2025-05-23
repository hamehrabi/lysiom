import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-twilight)] py-12 bg-[var(--color-deep-space)]">
      <div className="artisan-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 gradient-border rounded-md overflow-hidden">
                <Image src="/pixel-logo.png" alt="Lysiom Logo" width={40} height={40} className="pixel-art" />
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
      </div>
    </footer>
  )
}

// Add these constants at the end of the file
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
