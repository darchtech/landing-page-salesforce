import { MENTOR, PRICE } from "../../constants";
import {
  Section,
  SectionTitle,
  FadeIn,
  GlassCard,
  CTAButton,
  Icons,
} from "../ui";
import mentorImage from "../../assets/images/dayneshwaragaw.jpeg";

export default function MentorSection() {
  return (
    <Section id="mentor">
      <SectionTitle
        badge="Your Mentor"
        title="Learn From the Best in the Industry"
        subtitle="Guided by a Salesforce Technical Architect with a proven track record"
      />

      <div className="grid lg:grid-cols-5 gap-10 items-center">
        {/* ── Mentor Card ── */}
        <FadeIn className="lg:col-span-2 flex justify-center">
          <GlassCard
            hover={false}
            className="p-8 text-center border-blue-200/50 dark:border-blue-500/15 w-full max-w-md"
          >
            {/* 🔥 Enlarged Avatar Section */}
            <div className="relative w-72 h-72 mx-auto mb-10">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-60 blur-2xl" />

              {/* Gradient Border */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-[5px] shadow-2xl">
                {/* Inner Ring */}
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-[5px]">
                  <img
                    src={mentorImage}
                    alt={MENTOR.name}
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl border-4 border-white dark:border-gray-900">
                <Icons.Award size={18} />
              </div>
            </div>

            {/* Mentor Info */}
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              {MENTOR.name}
            </h3>

            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
              {MENTOR.alias}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {MENTOR.role}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {MENTOR.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-100 dark:border-white/5"
                >
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                    {stat.num}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Expertise
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {MENTOR.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        </FadeIn>

        {/* ── Certifications Section ── */}
        <FadeIn delay={0.15} className="lg:col-span-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Icons.Shield
              size={20}
              className="text-blue-600 dark:text-blue-400"
            />
            Salesforce Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {MENTOR.certifications.map((cert, i) => (
              <FadeIn key={cert} delay={0.2 + i * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-200 dark:hover:border-blue-500/30 hover:bg-blue-50/50 dark:hover:bg-blue-500/5 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow">
                    <Icons.Award size={15} />
                  </div>

                  <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                    {cert}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} className="mt-8">
            <CTAButton variant="secondary" size="lg">
              Learn From This Expert @ {PRICE.current}
              <Icons.ArrowRight size={18} />
            </CTAButton>
          </FadeIn>
        </FadeIn>
      </div>
    </Section>
  );
}
