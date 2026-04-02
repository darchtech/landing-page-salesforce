import { COURSE_CATEGORIES, COLOR_MAP } from "../../constants";
import { Section, SectionTitle, FadeIn, GlassCard, Icons } from "../ui";

export default function CoursesSection() {
  return (
    <Section id="courses">
      <SectionTitle
        badge="📚 Course Catalog"
        title="Explore Our Training Programs"
        subtitle="Comprehensive courses designed for every stage of your tech career"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {COURSE_CATEGORIES.map((cat, i) => {
          const c = COLOR_MAP[cat.color];
          return (
            <FadeIn key={i} delay={i * 0.08}>
              <GlassCard className={`p-5 h-full ${c.border}`}>
                <div
                  className={`inline-flex w-10 h-10 rounded-lg ${c.bg} ${c.text} items-center justify-center mb-3`}
                >
                  <Icons.GraduationCap size={18} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.courses.map((course) => (
                    <span
                      key={course}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${c.pill} border ${c.border}`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
