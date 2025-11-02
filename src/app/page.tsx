import CapabilitiesSection from "@/components/CapabilitiesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-12">
          <a href="#" className="text-lg font-medium tracking-tight">foreseeai.com</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#overview" className="hover:text-gray-300 transition-colors">Overview</a>
            <a href="#capabilities" className="hover:text-gray-300 transition-colors">Capabilities</a>
            <a href="#partners" className="hover:text-gray-300 transition-colors">Supporters</a>
            <a href="#gallery" className="hover:text-gray-300 transition-colors">Feed</a>
            <a href="#pricing" className="hover:text-gray-300 transition-colors">Pricing</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 text-sm rounded-md border border-white/20 hover:bg-white/10 transition-colors">
            Account
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          style={{ transform: 'scale(1.2)' }}
        >
          <source src="https://ext.same-assets.com/2076288903/3247278819.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3248]/80 via-[#1c3248]/50 to-black/90" />

        <div className="relative z-10 text-center px-6">
          <p className="text-sm mb-8 animate-fade-in">
            <span className="font-bold">* UPDATE *</span> +10.000 hours of truth analyzed and searchable—AI replies with citations.
          </p>

          <div className="mb-12">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light tracking-tight">
              foresee
            </h1>
          </div>

          <p className="text-2xl md:text-3xl mb-8 max-w-2xl mx-auto leading-relaxed">
            the <span className="animate-pulse font-semibold">truth</span>
          </p>

          <a
            href="/chat"
            className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all typing-animation"
          >
            <span className="typing-text">escape</span><span className="typing-cursor">|</span>
          </a>

          <p className="mt-6 text-xs text-gray-400">
            <span>Explore <a href="#" className="underline">foreseeAI Subscriptions.</a></span>
            {' '}
            <span>See <a href="#" className="underline">FAQ</a>.</span>
          </p>
        </div>
      </section>

      {/* Spacer Text Section */}
      <section id="spacer-text" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Filterless AI, trained on the record, returning the black truths of humanity with citations in every reply.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Power lines, fault lines, lifelines. Follow the evidence.
          </p>
        </div>
      </section>

      {/* Overview Video Section */}
      <section
        id="overview"
        className="relative py-32 px-6"
        style={{
          background: 'radial-gradient(circle at center, rgba(28, 50, 72, 0.3) 0%, rgba(0, 0, 0, 1) 70%)'
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all">
                <div className="w-0 h-0 border-l-[24px] border-l-black border-y-[14px] border-y-transparent ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Partners Section */}
      <section id="partners" className="relative py-32 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c3248]/10 to-transparent" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-sm mb-16 text-gray-400">Supported by:</h2>

          <div className="space-y-8 mb-16">
            <a href="#" className="block">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light hover:opacity-70 transition-opacity">
                Andrew Tate
              </h2>
            </a>
            <a href="#" className="block">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light hover:opacity-70 transition-opacity">
                Myron Gaines
              </h2>
            </a>
            <a href="#" className="block">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light hover:opacity-70 transition-opacity">

              </h2>
            </a>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8z"/>
            </svg>
            Watch the truth only.
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-24 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        <div className="relative flex gap-6 justify-center mb-12">
          <div className="flex flex-col gap-4 animate-scroll-down">
            {['FIT CHECK', 'THE DEGENERATES', 'Alt Spectrum', 'ZOO BREAK', 'FIT CHECK', 'THE DEGENERATES', 'Alt Spectrum', 'ZOO BREAK'].map((title, i) => (
              <div key={i} className="w-64 h-40 rounded-lg bg-gray-900 flex items-end p-4 shrink-0">
                <span className="text-xs font-medium">{title}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 animate-scroll-up">
            {['PASSENGERS', "It's all yarn", 'MICROVERSE', 'Mobile Homes', 'PASSENGERS', "It's all yarn", 'MICROVERSE', 'Mobile Homes'].map((title, i) => (
              <div key={i} className="w-64 h-40 rounded-lg bg-gray-900 flex items-end p-4 shrink-0">
                <span className="text-xs font-medium">{title}</span>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col gap-4 animate-scroll-down">
            {['Off season Santa', 'MUNDO QUESO', 'ULTRA WIDE', 'WINDOW SEAT', 'Off season Santa', 'MUNDO QUESO', 'ULTRA WIDE', 'WINDOW SEAT'].map((title, i) => (
              <div key={i} className="w-64 h-40 rounded-lg bg-gray-900 flex items-end p-4 shrink-0">
                <span className="text-xs font-medium">{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8z"/>
            </svg>
            Watch truthfull content picked by foreseeAI
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-6">"What is real? How do you define 'real'?"</h2>
          <h3 className="text-lg text-center text-gray-300 mb-16">
            Truth is expensive. This is the cheapest you'll ever get it.
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Google AI Pro */}
            <div className="border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl mb-6">foreseeAI Pro</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-gray-400 line-through">$19.99</span>
                  <span className="text-5xl font-light">$11.25/mo</span>
                </div>
                <p className="text-sm text-gray-400">for 1 month</p>
              </div>

              <div className="space-y-2 mb-8 text-sm">
                <p>Every claim links to sources, timestamps, and quotes.</p>
                <p>Filterless summaries; facts separated from commentary.</p>
                <p>Compresses 25 hours of content / month into precise answers.</p>
                <p>Compares sources and highlights where they agree/differ.</p>
                <p>Shows strength of evidence and what's uncertain.</p>
                <p>Topic feeds, saved threads, and custom watchlists.</p>
                <p>Fast, lightweight responses even on slow connections.</p>
                <p>250.000 credits renewed monthly</p>
                <p></p>
              </div>

              <div className="text-xs text-gray-500 space-y-1">
                <p className="opacity-70">Also included in this plan:</p>
                <p>&nbsp;</p>
                <p>API integration ; foreseeAI database access</p>
                <p>foreseeAI in Gmail, Docs, and more</p>
                <p>2 TB of Storage</p>
                <p></p>
              </div>
            </div>

            {/* Google AI Ultra */}
            <div className="border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl mb-6">foreseeAI Ultra</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-gray-400 line-through">$249.99</span>
                  <span className="text-5xl font-light">$112.99/mo</span>
                </div>
                <p className="text-sm text-gray-400">for 3 months</p>
              </div>

              <div className="space-y-2 mb-8 text-sm">
                <p>Everything in foreseeAI Pro</p>
                <p>+</p>
                <p>250 hours of content analysis renewed every month.</p>
                <p>Unlimited credits available.</p>
                <p>Analysis of information found in classified documents.</p>
              </div>

              <div className="text-xs text-gray-500 space-y-1">
                <p className="opacity-70">Also included in this plan:</p>
                <p>&nbsp;</p>
                <p>More API integration ; foreseeAI database access</p>
                <p>Project Bluebeam (EU only)</p>
                <p>Individual plan ; Access to secret information.</p>
                <p>10 TB of Storage</p>
                <p>And other AI Ultra benefits</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <a
              href="http://one.google.com/ai"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full transition-all font-medium"
            >
              Get
            </a>
          </div>

          <p className="text-xs text-center text-gray-500">
            Available in every country except a few.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 mb-4">
            Disclaimer: AI outputs may be offensive or inaccurate. Everything is meant for entertainment purposes only. Purchase at your own will.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="hover:text-white">
              Privacy
            </a>
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
