import { PRICE, HERO_HIGHLIGHTS } from "../../constants";
import { Section, FadeIn, CTAButton, Icons } from "../ui";
import heroVideo from "../../assets/videos/video.mp4";

export default function HeroSection() {
  return (
    <Section id="hero" className="pt-32 md:pt-32 pb-12 md:pb-16">
      {/* Ambient background blobs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ── Left: Copy ── */}
        <div className="p-4">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 mb-6 border border-blue-200/50 dark:border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Masterclass · 12th April 2026
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.08] tracking-tight mb-6">
              Salesforce Career
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Accelerator
              </span>
              Masterclass
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
              Launch a{" "}
              <strong className="text-gray-900 dark:text-white">
                high-paying career
              </strong>{" "}
              in the Salesforce ecosystem. Guided by an industry expert with 15+
              years of experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {HERO_HIGHLIGHTS.map((text) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-500/15 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                    <Icons.Check size={12} />
                  </span>
                  {text}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton>
                Enroll Now @ {PRICE.current} <Icons.ArrowRight size={18} />
              </CTAButton>
              <CTAButton variant="secondary">Reserve Your Seat</CTAButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <Icons.Users size={16} /> 2,400+ enrolled
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icons.Star key={i} size={13} />
                  ))}
                </span>
                4.9 rating
              </span>
            </div>
          </FadeIn>
        </div>

        {/* ── Right: Video ── */}
        <FadeIn delay={0.2} direction="left">
          <div className="relative group flex justify-center p-4">
            {/* 🔹 Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* 🔹 Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/20 dark:border-white/10 bg-gray-900 max-w-sm w-full h-[85vh] md:h-[85vh] lg:h-[85vh]">
              {/* 🔹 Video */}
              <video
                src={heroVideo}
                autoPlay
                controls
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-top"
              />

              {/* 🔹 Grid Overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* 🔹 Optional Dark Overlay (Improves Readability if text added later) */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
