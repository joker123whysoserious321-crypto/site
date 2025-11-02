"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // TODO: Replace this with your actual API integration
    // Example API call structure:
    // try {
    //   const response = await fetch('/api/chat', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ message: input, history: messages })
    //   });
    //   const data = await response.json();
    //   setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    // Placeholder response (replace with your API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "This is a placeholder response. Connect your AI API here to enable real conversations with citations and evidence-based responses.",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
          <div className="h-6 w-px bg-white/20" />
          <h1 className="text-lg font-medium">foreseeAI Chat</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 text-sm rounded-md border border-white/20 hover:bg-white/10 transition-colors">
            Clear History
          </button>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col pt-20 pb-32">
        <div className="flex-1 overflow-y-auto px-4 md:px-8 max-w-4xl w-full mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <div className="text-6xl md:text-8xl font-light mb-4">foresee</div>
              <p className="text-xl text-gray-400 max-w-2xl">
                Ask questions and get evidence-based answers with citations from thousands of hours of analyzed content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 w-full max-w-2xl">
                <button
                  onClick={() => setInput("What are the main conspiracy theories discussed?")}
                  className="p-4 text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  <div className="text-sm font-medium mb-1">Conspiracy Theories</div>
                  <div className="text-xs text-gray-400">Explore analyzed theories</div>
                </button>
                <button
                  onClick={() => setInput("Show me evidence on a specific topic")}
                  className="p-4 text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  <div className="text-sm font-medium mb-1">Evidence Analysis</div>
                  <div className="text-xs text-gray-400">Get cited information</div>
                </button>
                <button
                  onClick={() => setInput("Compare different sources on this topic")}
                  className="p-4 text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  <div className="text-sm font-medium mb-1">Source Comparison</div>
                  <div className="text-xs text-gray-400">Cross-reference claims</div>
                </button>
                <button
                  onClick={() => setInput("What are the most reliable sources?")}
                  className="p-4 text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  <div className="text-sm font-medium mb-1">Source Reliability</div>
                  <div className="text-xs text-gray-400">Assess credibility</div>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 py-8">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 text-xs font-bold">
                      AI
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3 ${
                      message.role === "user"
                        ? "bg-white/10 backdrop-blur-sm"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    {message.role === "ai" && (
                      <div className="mt-3 pt-3 border-t border-white/10 flex gap-2 text-xs text-gray-400">
                        <button className="hover:text-white transition-colors">
                          📎 Sources
                        </button>
                        <button className="hover:text-white transition-colors">
                          ⏱️ Timestamps
                        </button>
                        <button className="hover:text-white transition-colors">
                          📊 Evidence
                        </button>
                      </div>
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs">
                      You
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-4 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 text-xs font-bold">
                    AI
                  </div>
                  <div className="max-w-[70%] rounded-2xl px-5 py-3 bg-white/5 border border-white/10">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 px-4 py-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Ask about evidence, conspiracy theories, or request source analysis..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-white/20 transition-all max-h-32"
                rows={1}
                style={{ minHeight: "48px" }}
              />
              <div className="absolute right-3 bottom-3 text-xs text-gray-500">
                {input.length > 0 && `${input.length} chars`}
              </div>
            </div>
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-6 py-3 bg-white text-black rounded-2xl font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI outputs may be inaccurate. Verify all claims with provided sources.
          </p>
        </form>
      </div>
    </div>
  );
}
