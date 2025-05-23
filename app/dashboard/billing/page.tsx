"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, CreditCard, Download } from "lucide-react"

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <div className="space-y-8">
      {/* Current Plan */}
      <div className="artisan-card p-6">
        <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">CURRENT PLAN</h2>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-md bg-[var(--color-plasma)]/20 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-[var(--color-plasma)]" />
              </div>
              <div>
                <h3 className="font-['VT323'] text-2xl gradient-text-plasma">PRO PLAN</h3>
                <p className="text-[var(--color-text-secondary)]">$49/month • Renews on May 15, 2025</p>
              </div>
            </div>

            <p className="text-[var(--color-text-secondary)] mb-6 font-['VT323'] text-lg">
              Your Pro plan gives you unlimited access to all features, including advanced AI capabilities, unlimited
              video creation, and priority support.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="pixel-button">CHANGE PLAN</button>
              <button className="pixel-button">CANCEL SUBSCRIPTION</button>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="artisan-card p-4 bg-[var(--color-twilight)]">
              <h4 className="font-['VT323'] text-lg mb-3 gradient-text">PAYMENT METHOD</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-[var(--color-deep-space)] flex items-center justify-center">
                  <Image src="/placeholder-lyamm.png" alt="Visa" width={24} height={24} />
                </div>
                <div>
                  <p className="font-['VT323'] text-lg">•••• •••• •••• 4242</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">Expires 12/25</p>
                </div>
              </div>
              <button className="pixel-button w-full text-sm">UPDATE PAYMENT</button>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="artisan-card p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora">SUBSCRIPTION PLANS</h2>

          <div className="flex items-center p-1 bg-[var(--color-twilight)] rounded-md">
            <button
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                billingCycle === "monthly"
                  ? "bg-[var(--color-aurora)] text-[var(--color-midnight)]"
                  : "text-[var(--color-text-secondary)]"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              MONTHLY
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                billingCycle === "yearly"
                  ? "bg-[var(--color-aurora)] text-[var(--color-midnight)]"
                  : "text-[var(--color-text-secondary)]"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              YEARLY (SAVE 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.name}
              className={`artisan-card p-6 ${plan.name === "Pro" ? "border-[var(--color-plasma)] border-2" : ""}`}
            >
              <div className="text-center mb-6">
                <h3 className="font-['Press_Start_2P'] text-lg mb-2 gradient-text">{plan.name.toUpperCase()}</h3>
                <div className="flex justify-center items-baseline gap-1 mb-2">
                  <span className="font-['VT323'] text-3xl">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-[var(--color-aurora)]/20 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-[var(--color-aurora)]" />
                    </div>
                    <span className="text-[var(--color-text-secondary)] font-['VT323'] text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`pixel-button w-full ${plan.name === "Pro" ? "primary" : ""}`}>
                {plan.name === "Pro" ? "CURRENT PLAN" : `UPGRADE TO ${plan.name.toUpperCase()}`}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="artisan-card p-6">
        <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-6">BILLING HISTORY</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-twilight)]">
                <th className="text-left py-3 px-4 font-['Press_Start_2P'] text-xs text-[var(--color-text-secondary)]">
                  DATE
                </th>
                <th className="text-left py-3 px-4 font-['Press_Start_2P'] text-xs text-[var(--color-text-secondary)]">
                  DESCRIPTION
                </th>
                <th className="text-left py-3 px-4 font-['Press_Start_2P'] text-xs text-[var(--color-text-secondary)]">
                  AMOUNT
                </th>
                <th className="text-left py-3 px-4 font-['Press_Start_2P'] text-xs text-[var(--color-text-secondary)]">
                  STATUS
                </th>
                <th className="text-right py-3 px-4 font-['Press_Start_2P'] text-xs text-[var(--color-text-secondary)]">
                  INVOICE
                </th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[var(--color-twilight)] hover:bg-[var(--color-twilight)]/20 transition-colors"
                >
                  <td className="py-4 px-4 font-['VT323'] text-lg">{item.date}</td>
                  <td className="py-4 px-4 font-['VT323'] text-lg">{item.description}</td>
                  <td className="py-4 px-4 font-['VT323'] text-lg">${item.amount}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-md text-xs ${
                        item.status === "Paid"
                          ? "bg-[var(--color-aurora)]/20 text-[var(--color-aurora)]"
                          : "bg-[var(--color-nebula)]/20 text-[var(--color-nebula)]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="inline-flex items-center gap-1 text-[var(--color-aurora)] hover:text-[var(--color-aurora)]/80 transition-colors">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Subscription plans
const subscriptionPlans = [
  {
    name: "Basic",
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: "Perfect for individual researchers",
    features: ["5 Projects", "10 Video Creations/month", "Basic AI Assistant", "Standard Support"],
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: "For serious researchers and small teams",
    features: [
      "Unlimited Projects",
      "Unlimited Video Creations",
      "Advanced AI Assistant",
      "Priority Support",
      "Collaboration Tools",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "For research institutions and large teams",
    features: [
      "Unlimited Projects",
      "Unlimited Video Creations",
      "Premium AI Assistant",
      "24/7 Dedicated Support",
      "Advanced Collaboration Tools",
      "Custom Integrations",
    ],
  },
]

// Billing history
const billingHistory = [
  {
    date: "Apr 15, 2025",
    description: "Pro Plan Subscription",
    amount: 49,
    status: "Paid",
  },
  {
    date: "Mar 15, 2025",
    description: "Pro Plan Subscription",
    amount: 49,
    status: "Paid",
  },
  {
    date: "Feb 15, 2025",
    description: "Pro Plan Subscription",
    amount: 49,
    status: "Paid",
  },
  {
    date: "Jan 15, 2025",
    description: "Basic to Pro Plan Upgrade",
    amount: 30,
    status: "Paid",
  },
  {
    date: "Jan 15, 2025",
    description: "Basic Plan Subscription",
    amount: 19,
    status: "Paid",
  },
]
