"use client"

import { useState } from "react"
import Image from "next/image"

interface Faq {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: Faq[]
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`artisan-card transition-all duration-300 ${
            openIndex === index ? "border-[var(--color-aurora)]" : "border-[var(--color-twilight)]"
          }`}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-4 flex justify-between items-center text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-[var(--color-text-primary)]">{faq.question}</span>
            <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
              <Image
                src="/icons/arrow-down.png"
                alt={openIndex === index ? "Collapse" : "Expand"}
                width={16}
                height={16}
                className="pixel-art"
              />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-4 text-[var(--color-text-secondary)]">
              <div className="border-t border-[var(--color-twilight)] pt-4">{faq.answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
