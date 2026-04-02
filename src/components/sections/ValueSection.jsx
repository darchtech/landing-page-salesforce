import { VALUE_CARDS, LEARNING_OUTCOMES } from "../../constants";
import { Section, SectionTitle, FadeIn, GlassCard, Icons } from "../ui";

export default function ValueSection() {
  return (
    <Section id="value">
      <SectionTitle
        badge="Why Salesforce?"
        title="The Most In-Demand Cloud Platform"
        subtitle="Salesforce professionals earn 25-40% more than average IT roles"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {VALUE_CARDS.map((card, i) => {
          const Icon = Icons[card.icon];
          return (
            <FadeIn key={i} delay={i * 0.08}>
              <GlassCard className="p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-500/15 dark:to-indigo-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </GlassCard>
            </FadeIn>
          );
        })}

        {/* Learning Outcomes highlight card */}
        <FadeIn delay={0.4}>
          <GlassCard className="p-6 h-full sm:col-span-2 lg:col-span-1 border-blue-200/60 dark:border-blue-500/20 bg-gradient-to-br from-blue-50/80 dark:from-blue-500/5 to-transparent">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/25">
              <Icons.BookOpen />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Learning Outcomes
            </h3>
            <div className="flex flex-wrap gap-2">
              {LEARNING_OUTCOMES.map((outcome) => (
                <span
                  key={outcome}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/20"
                >
                  <Icons.Check size={11} /> {outcome}
                </span>
              ))}
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </Section>
  );
}
