"use client";

import { useState, useEffect } from "react";

type TabType = "evidence" | "truth" | "reality";

interface TabContent {
  title: string;
  description: string;
  videos: {
    src: string;
    alt: string;
  }[];
}

const tabContent: Record<TabType, TabContent> = {
  evidence: {
    title: "Evidence",
    description: "Bring your own ideas, conspiracy theories and videos to find out the truth using foreseeAI.",
    videos: [
      { src: "https://ext.same-assets.com/2076288903/2157371254.mp4", alt: "Evidence video 1" },
      { src: "https://ext.same-assets.com/2076288903/3005829998.mp4", alt: "Evidence video 2" },
    ],
  },
  truth: {
    title: "Truth",
    description: "Analyze multiple sources simultaneously. Cross-reference claims and uncover what's real from what's fabricated.",
    videos: [
      { src: "https://ext.same-assets.com/2076288903/3005829998.mp4", alt: "Truth video 1" },
      { src: "https://ext.same-assets.com/2076288903/2157371254.mp4", alt: "Truth video 2" },
    ],
  },
  reality: {
    title: "Reality",
    description: "Deep dive into complex topics with AI-powered analysis. Separate facts from fiction with precision.",
    videos: [
      { src: "https://ext.same-assets.com/2076288903/3247278819.mp4", alt: "Reality video 1" },
      { src: "https://ext.same-assets.com/2076288903/2157371254.mp4", alt: "Reality video 2" },
    ],
  },
};

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("evidence");
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle through tabs when not hovering
  useEffect(() => {
    if (isHovering) return;

    const tabs: TabType[] = ["evidence", "truth", "reality"];
    const currentIndex = tabs.indexOf(activeTab);

    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    }, 5000); // Change tab every 5 seconds

    return () => clearTimeout(timer);
  }, [activeTab, isHovering]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const tabs: TabType[] = ["evidence", "truth", "reality"];
      const currentIndex = tabs.indexOf(activeTab);

      if (e.key === "ArrowLeft") {
        const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
        setActiveTab(tabs[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [activeTab]);

  return (
    <section
      id="capabilities"
      className="relative py-24 px-6 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #8b7355 0%, #5a4a3a 50%, #2d2520 100%)',
          opacity: 0.3
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex gap-8 mb-12 justify-center">
          <button
            onClick={() => setActiveTab("evidence")}
            className={`text-3xl md:text-4xl font-light pb-2 transition-all duration-300 ${
              activeTab === "evidence"
                ? "opacity-100 border-b-2 border-white scale-105"
                : "opacity-40 hover:opacity-60 hover:scale-102"
            }`}
          >
            Evidence
          </button>
          <button
            onClick={() => setActiveTab("truth")}
            className={`text-3xl md:text-4xl font-light pb-2 transition-all duration-300 ${
              activeTab === "truth"
                ? "opacity-100 border-b-2 border-white scale-105"
                : "opacity-40 hover:opacity-60 hover:scale-102"
            }`}
          >
            Truth
          </button>
          <button
            onClick={() => setActiveTab("reality")}
            className={`text-3xl md:text-4xl font-light pb-2 transition-all duration-300 ${
              activeTab === "reality"
                ? "opacity-100 border-b-2 border-white scale-105"
                : "opacity-40 hover:opacity-60 hover:scale-102"
            }`}
          >
            Reality
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {(["evidence", "truth", "reality"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeTab === tab ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Switch to ${tab} tab`}
            />
          ))}
        </div>

        <div className="transition-all duration-500 ease-in-out">
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto animate-fade-in">
            {tabContent[activeTab].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tabContent[activeTab].videos.map((video, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="aspect-video rounded-lg overflow-hidden bg-black group relative animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium">{video.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
