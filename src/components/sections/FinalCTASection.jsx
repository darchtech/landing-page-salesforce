import { PAYMENT_LINK, PRICE } from "../../constants";
import { Section, FadeIn, Icons } from "../ui";

export default function FinalCTASection() {
  return (
    <Section className="py-24 md:py-32">
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 dark:from-blue-900 dark:via-indigo-950 dark:to-gray-950" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <FadeIn className="text-center max-w-3xl mx-auto p-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-white/15 text-white mb-6 border border-white/20 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          Limited Seats Available
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          Your Salesforce Career
          <br />
          Starts Right Here
        </h2>

        <p className="text-lg text-blue-100/80 mb-10 max-w-xl mx-auto">
          Don't let this opportunity slip away. Join 2,400+ professionals
          who've already taken the first step.
        </p>

        <a
          href={PAYMENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-white text-blue-700 font-extrabold text-lg shadow-2xl shadow-black/20 hover:shadow-3xl hover:scale-105 transition-all cursor-pointer group"
        >
          Join Now @ {PRICE.current}
          <span className="group-hover:translate-x-1 transition-transform">
            <Icons.ArrowRight size={20} />
          </span>
        </a>

        <p className="mt-6 text-sm text-blue-200/60">
          No risk · Instant access · Expert-led training
        </p>
      </FadeIn>
    </Section>
  );
}
