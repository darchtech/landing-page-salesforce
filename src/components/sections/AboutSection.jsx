import { ABOUT_FEATURES } from "../../constants";
import { Section, SectionTitle, FadeIn, GlassCard, Icons } from "../ui";
import founderImage from "../../assets/images/archnanigade.png";

export default function AboutSection() {
  return (
    <Section>
      <SectionTitle
        badge="🏢 Training Partner"
        title="About Orange iTech"
        subtitle="Empowering careers through practical, industry-relevant training"
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Founder / Branding Visual */}
        <FadeIn>
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200/40 dark:border-orange-500/15 shadow-xl">
            <div className="aspect-[4/3] relative flex items-center justify-center">
              <img
                src={founderImage}
                alt="Orange iTech Founder"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xl font-bold">Orange iTech</p>
                <p className="text-sm text-white/70">
                  Training Excellence Since Day One
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right: Feature cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {ABOUT_FEATURES.map((feature, i) => {
            const Icon = Icons[feature.icon];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="p-5 h-full">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
