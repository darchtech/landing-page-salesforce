import { TARGET_AUDIENCES } from "../../constants";
import { Section, SectionTitle, FadeIn, GlassCard, Icons } from "../ui";

export default function AudienceSection() {
  return (
    <Section>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 dark:from-blue-950/20 to-transparent pointer-events-none" />

      <SectionTitle
        badge="👥 Who Is This For?"
        title="Built for Ambitious Professionals"
        subtitle="Whether you're starting fresh or switching lanes — this is for you"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {TARGET_AUDIENCES.map((audience, i) => {
          const Icon = Icons[audience.icon];
          return (
            <FadeIn key={i} delay={i * 0.08}>
              <GlassCard className="p-5 text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-500/15 dark:to-indigo-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                  {Icon && <Icon size={22} />}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                  {audience.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {audience.desc}
                </p>
              </GlassCard>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
