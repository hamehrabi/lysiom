"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, FileText, Code, Database } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AI research assistant for Lysiom. I can help you with understanding research papers, suggesting approaches to problems, and answering questions about various scientific disciplines. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I'd be happy to help with your research! I can search for relevant papers, analyze data, suggest methodologies, or help you brainstorm solutions to complex problems. What specific area of research are you working on?",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="flex flex-col h-full artisan-card overflow-hidden border-2 border-[var(--color-twilight)]">
      <CardHeader className="border-b border-[var(--color-twilight)] bg-[var(--color-deep-space)]">
        <CardTitle className="text-lg gradient-text flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-aurora)] flex items-center justify-center">
            <span className="text-[var(--color-midnight)] text-xs font-['Press_Start_2P']">AI</span>
          </div>
          AI RESEARCH ASSISTANT
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--color-deep-space)] border-b border-[var(--color-twilight)]">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-[var(--color-plasma)] text-white shadow-md"
                    : "bg-[var(--color-twilight)] text-white border border-[var(--color-cosmic-dust)] shadow-md"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-3 border-b border-[var(--color-cosmic-dust)] pb-2">
                    <div className="h-6 w-6 rounded-full bg-[var(--color-aurora)] flex items-center justify-center">
                      <span className="text-[var(--color-midnight)] text-xs font-bold">AI</span>
                    </div>
                    <span className="font-semibold gradient-text text-base">AI Assistant</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap text-base leading-relaxed">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="max-w-[80%] rounded-lg p-4 bg-[var(--color-twilight)] text-white border border-[var(--color-cosmic-dust)] shadow-md">
                <div className="flex items-center gap-2 mb-3 border-b border-[var(--color-cosmic-dust)] pb-2">
                  <div className="h-6 w-6 rounded-full bg-[var(--color-aurora)] flex items-center justify-center">
                    <span className="text-[var(--color-midnight)] text-xs font-bold">AI</span>
                  </div>
                  <span className="font-semibold gradient-text text-base">AI Assistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[var(--color-aurora)] animate-bounce"></div>
                  <div className="h-3 w-3 rounded-full bg-[var(--color-aurora)] animate-bounce delay-100"></div>
                  <div className="h-3 w-3 rounded-full bg-[var(--color-aurora)] animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[var(--color-twilight)] bg-[var(--color-deep-space)]">
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            <button className="pixel-button text-xs whitespace-nowrap">
              <FileText className="h-3 w-3 mr-1" />
              Research papers
            </button>
            <button className="pixel-button text-xs whitespace-nowrap">
              <Code className="h-3 w-3 mr-1" />
              Methodology help
            </button>
            <button className="pixel-button text-xs whitespace-nowrap">
              <Database className="h-3 w-3 mr-1" />
              Data analysis
            </button>
          </div>

          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about your research..."
              className="flex-1 h-10 min-h-[40px] max-h-[120px] px-3 py-2 rounded-md border border-[var(--color-twilight)] bg-[var(--color-midnight)] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--color-aurora)] resize-y"
            />
            <div className="flex gap-2">
              <button type="button" className="pixel-button" onClick={handleSend} disabled={!input.trim() || isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </div>

          <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
            Your AI assistant has access to research resources and can help with various scientific disciplines.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
