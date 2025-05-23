"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUp, Code, FileText, ImageIcon, Paperclip, Send } from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI research assistant. How can I help with your research today?",
      timestamp: new Date().toISOString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate AI typing
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      // Add AI response
      const aiResponse: Message = {
        role: "assistant",
        content: getAIResponse(inputValue),
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1500)
  }

  // Simple AI response simulation
  const getAIResponse = (query: string): string => {
    if (query.toLowerCase().includes("quantum")) {
      return "Quantum computing is a fascinating field that leverages quantum mechanics to perform computations. The basic unit is a qubit, which unlike classical bits, can exist in superposition states. This allows quantum computers to potentially solve certain problems much faster than classical computers. Would you like me to elaborate on a specific aspect of quantum computing?"
    } else if (query.toLowerCase().includes("tensor")) {
      return "Tensor networks are mathematical frameworks used to efficiently represent quantum many-body states. They're particularly useful in quantum simulation because they can capture the entanglement structure of quantum systems while avoiding the exponential scaling problem. The most common types include Matrix Product States (MPS), Projected Entangled Pair States (PEPS), and Multi-scale Entanglement Renormalization Ansatz (MERA). Would you like more information on any of these specific tensor network types?"
    } else if (query.toLowerCase().includes("research") || query.toLowerCase().includes("paper")) {
      return "I can help with various aspects of research paper writing, including literature reviews, methodology development, data analysis, and formatting. Would you like assistance with a specific part of your research paper?"
    } else {
      return "That's an interesting question. As your AI research assistant, I can help with literature reviews, data analysis, code generation, and explaining complex concepts. Could you provide more details about your research needs so I can assist more effectively?"
    }
  }

  return (
    <div className="h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)] flex flex-col">
      <div className="artisan-card p-6 mb-6">
        <h2 className="text-lg font-['Press_Start_2P'] gradient-text-aurora mb-4">AI RESEARCH ASSISTANT</h2>
        <p className="text-[var(--color-text-secondary)] font-['VT323'] text-lg">
          Your personal AI assistant to help with literature reviews, data analysis, and research planning.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-1 overflow-hidden">
        {/* Chat Area */}
        <div className="artisan-card flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    message.role === "user"
                      ? "bg-[var(--color-plasma)] text-white"
                      : "bg-[var(--color-twilight)] ai-message-glow"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-aurora)] flex items-center justify-center">
                        <span className="text-[var(--color-midnight)] text-xs">AI</span>
                      </div>
                      <span className="text-xs gradient-text">AI ASSISTANT</span>
                    </div>
                  )}
                  <p className="font-['VT323'] text-lg whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs opacity-50 mt-2 text-right">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-4 rounded-lg bg-[var(--color-twilight)] ai-message-glow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-aurora)] flex items-center justify-center">
                      <span className="text-[var(--color-midnight)] text-xs">AI</span>
                    </div>
                    <span className="text-xs gradient-text">AI ASSISTANT</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-aurora)] animate-pulse"></span>
                    <span
                      className="w-2 h-2 rounded-full bg-[var(--color-aurora)] animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-2 h-2 rounded-full bg-[var(--color-aurora)] animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[var(--color-twilight)]">
            <div className="flex items-center gap-2">
              <button className="h-10 w-10 rounded-md bg-[var(--color-twilight)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)] transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <div className="relative flex-1">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder="Ask your research question..."
                  className="w-full px-4 py-3 bg-[var(--color-deep-space)] border border-[var(--color-twilight)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-aurora)] rounded-md resize-none font-['VT323'] text-lg"
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-md bg-[var(--color-aurora)] flex items-center justify-center text-[var(--color-midnight)] hover:bg-[var(--color-aurora)]/80 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-64 artisan-card p-4 overflow-y-auto">
          <h3 className="font-['Press_Start_2P'] text-sm gradient-text mb-4">QUICK ACTIONS</h3>

          <div className="space-y-3 mb-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full text-left p-3 border border-[var(--color-twilight)] hover:border-[var(--color-aurora)] transition-colors rounded-md flex items-center gap-2"
                onClick={() => setInputValue(action.prompt)}
              >
                <div className="h-8 w-8 rounded-md bg-[var(--color-twilight)] flex items-center justify-center">
                  <action.icon className="h-4 w-4 text-[var(--color-aurora)]" />
                </div>
                <span className="font-['VT323'] text-lg">{action.label}</span>
              </button>
            ))}
          </div>

          <h3 className="font-['Press_Start_2P'] text-sm gradient-text mb-4">RECENT CHATS</h3>

          <div className="space-y-3">
            {recentChats.map((chat, index) => (
              <div
                key={index}
                className="p-3 border border-[var(--color-twilight)] hover:border-[var(--color-aurora)] transition-colors rounded-md cursor-pointer"
              >
                <p className="font-['VT323'] text-lg mb-1 truncate">{chat.title}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{chat.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Types
interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: string
}

// Quick actions
const quickActions = [
  {
    label: "Literature Review",
    prompt: "Can you help me find recent papers on quantum computing algorithms?",
    icon: FileText,
  },
  {
    label: "Code Generation",
    prompt: "Generate Python code for tensor network simulation",
    icon: Code,
  },
  {
    label: "Data Visualization",
    prompt: "What's the best way to visualize quantum entanglement data?",
    icon: ImageIcon,
  },
  {
    label: "Research Summary",
    prompt: "Summarize the key findings in quantum error correction from the last 2 years",
    icon: ArrowUp,
  },
]

// Recent chats
const recentChats = [
  {
    title: "Quantum Computing Research",
    date: "Yesterday",
  },
  {
    title: "Tensor Network Methods",
    date: "3 days ago",
  },
  {
    title: "Research Paper Draft",
    date: "1 week ago",
  },
]
