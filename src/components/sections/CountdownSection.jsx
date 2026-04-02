import { COUNTDOWN_TARGET, PRICE } from "../../constants";
import { useCountdown } from "../../hooks";
import { Section, FadeIn, GlassCard, CTAButton, Icons } from "../ui";

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(COUNTDOWN_TARGET);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <Section className="py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/20 to-transparent pointer-events-none" />

      <FadeIn>
        <GlassCard
          hover={false}
          className="p-8 md:p-12 text-center max-w-4xl mx-auto border-blue-200/50 dark:border-blue-500/15 relative"
        >
          {/* Floating badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30">
              <Icons.Clock size={15} /> Limited Time Offer
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-4 mb-2">
            Masterclass Starts In
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            5th April 2026, 10:00 AM IST
          </p>

          {/* Timer digits */}
          <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-lg mx-auto mb-8">
            {units.map(({ label, value }) => (
              <div key={label} className="relative">
                <div className="bg-gray-900 dark:bg-white/10 rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="text-3xl sm:text-5xl font-black text-white tabular-nums leading-none">
                    {String(value).padStart(2, "0")}
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-gray-400 line-through">
                {PRICE.original}
              </span>
              <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {PRICE.current}
              </span>
            </div>
            <CTAButton>
              Enroll Now @ {PRICE.current} <Icons.ArrowRight size={18} />
            </CTAButton>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Secure your spot before price increases
          </p>
        </GlassCard>
      </FadeIn>
    </Section>
  );
}
