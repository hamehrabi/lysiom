import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Lysiom - Premium Research Platform",
  description: "Get in touch with the Lysiom team for inquiries, support, or collaboration opportunities.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen scanlines">
      {/* Hero Section */}
      <div className="relative py-16 pixel-grid overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
          <div
            className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl bottom-1/4 -right-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-72 h-72 rounded-full bg-[var(--color-nebula)] blur-3xl opacity-10 bottom-0 left-1/3 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="artisan-container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] mb-6"
          >
            <Image src="/icons/arrow-left.png" alt="Back" width={16} height={16} className="mr-2 pixel-art" />
            <span className="font-['Press_Start_2P'] text-xs">BACK TO HOME</span>
          </Link>

          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="bg-[var(--color-deep-space)] rounded-full p-6 mb-6 glow">
              <Image src="/icons/collaboration.png" alt="Contact" width={48} height={48} className="pixel-art" />
            </div>
            <h1 className="text-3xl md:text-4xl font-['Press_Start_2P'] gradient-text mb-4">Contact Us</h1>
            <p className="text-[var(--color-text-secondary)] max-w-2xl">
              Have questions or want to collaborate? Reach out to the Lysiom team for inquiries, support, or partnership
              opportunities. We're here to help advance scientific research together.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16">
        <div className="artisan-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="artisan-card p-6 hover-lift">
              <h2 className="font-['Press_Start_2P'] text-xl mb-6 gradient-text-aurora">Send a Message</h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[var(--color-text-secondary)] text-sm">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[var(--color-twilight)] border border-[var(--color-cosmic-dust)] p-3 text-[var(--color-text-primary)] focus:border-[var(--color-aurora)] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[var(--color-text-secondary)] text-sm">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[var(--color-twilight)] border border-[var(--color-cosmic-dust)] p-3 text-[var(--color-text-primary)] focus:border-[var(--color-aurora)] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-[var(--color-text-secondary)] text-sm">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-[var(--color-twilight)] border border-[var(--color-cosmic-dust)] p-3 text-[var(--color-text-primary)] focus:border-[var(--color-aurora)] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[var(--color-text-secondary)] text-sm">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-[var(--color-twilight)] border border-[var(--color-cosmic-dust)] p-3 text-[var(--color-text-primary)] focus:border-[var(--color-aurora)] focus:outline-none transition-colors"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="pixel-button primary w-full font-['Press_Start_2P'] text-xs py-4">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="artisan-card p-6 hover-lift">
                <h2 className="font-['Press_Start_2P'] text-xl mb-6 gradient-text-nebula">Connect With Us</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[var(--color-twilight)] p-3 rounded-md mr-4">
                      <Image src="/icons/collaboration.png" alt="Email" width={24} height={24} className="pixel-art" />
                    </div>
                    <div>
                      <h3 className="text-[var(--color-text-primary)] font-semibold mb-1">Email</h3>
                      <p className="text-[var(--color-text-secondary)]">contact@lysiom.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[var(--color-twilight)] p-3 rounded-md mr-4">
                      <Image src="/icons/data.png" alt="Location" width={24} height={24} className="pixel-art" />
                    </div>
                    <div>
                      <h3 className="text-[var(--color-text-primary)] font-semibold mb-1">Location</h3>
                      <p className="text-[var(--color-text-secondary)]">
                        123 Innovation Way
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[var(--color-twilight)] p-3 rounded-md mr-4">
                      <Image src="/icons/code.png" alt="Phone" width={24} height={24} className="pixel-art" />
                    </div>
                    <div>
                      <h3 className="text-[var(--color-text-primary)] font-semibold mb-1">Phone</h3>
                      <p className="text-[var(--color-text-secondary)]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="artisan-card p-6 hover-lift">
                <h2 className="font-['Press_Start_2P'] text-xl mb-6 gradient-text-sunset">Follow Us</h2>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[var(--color-twilight)] p-3 rounded-md hover:bg-[var(--color-cosmic-dust)] transition-colors"
                  >
                    <Image src="/icons/twitter.png" alt="Twitter" width={24} height={24} className="pixel-art" />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--color-twilight)] p-3 rounded-md hover:bg-[var(--color-cosmic-dust)] transition-colors"
                  >
                    <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} className="pixel-art" />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--color-twilight)] p-3 rounded-md hover:bg-[var(--color-cosmic-dust)] transition-colors"
                  >
                    <Image src="/icons/github.png" alt="GitHub" width={24} height={24} className="pixel-art" />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--color-twilight)] p-3 rounded-md hover:bg-[var(--color-cosmic-dust)] transition-colors"
                  >
                    <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} className="pixel-art" />
                  </a>
                </div>
              </div>

              <div className="artisan-card p-6 hover-lift">
                <h2 className="font-['Press_Start_2P'] text-xl mb-6 gradient-text-aurora">Office Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-secondary)]">Monday - Friday</span>
                    <span className="text-[var(--color-text-primary)]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-secondary)]">Saturday</span>
                    <span className="text-[var(--color-text-primary)]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-secondary)]">Sunday</span>
                    <span className="text-[var(--color-text-primary)]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="font-['Press_Start_2P'] text-2xl text-center gradient-text mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="artisan-card p-6 hover-lift">
                <h3 className="text-[var(--color-aurora)] font-semibold mb-2">
                  How can I join the Lysiom research community?
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  You can join by creating an account on our platform. Once registered, you'll have access to our
                  research problems, collaboration tools, and community forums.
                </p>
              </div>

              <div className="artisan-card p-6 hover-lift">
                <h3 className="text-[var(--color-aurora)] font-semibold mb-2">How do I submit a research problem?</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Research problems can be submitted through your dashboard after logging in. Our team reviews all
                  submissions to ensure they meet our quality standards before publishing.
                </p>
              </div>

              <div className="artisan-card p-6 hover-lift">
                <h3 className="text-[var(--color-aurora)] font-semibold mb-2">
                  Can I collaborate with other researchers?
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Yes! Lysiom is designed for collaboration. You can form teams, share resources, and work together on
                  solving complex research problems across disciplines.
                </p>
              </div>

              <div className="artisan-card p-6 hover-lift">
                <h3 className="text-[var(--color-aurora)] font-semibold mb-2">How does funding work on Lysiom?</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Successful solutions can attract funding from our network of investors and institutions. We facilitate
                  connections between researchers and potential funders.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="artisan-card p-8 gradient-border inline-block">
              <h2 className="font-['Press_Start_2P'] text-xl mb-4 gradient-text">Ready to Explore?</h2>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
                Discover groundbreaking research problems and connect with brilliant minds from around the world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/problems" className="pixel-button primary font-['Press_Start_2P'] text-xs">
                  EXPLORE PROBLEMS
                </Link>
                <Link href="/about" className="pixel-button secondary font-['Press_Start_2P'] text-xs">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
