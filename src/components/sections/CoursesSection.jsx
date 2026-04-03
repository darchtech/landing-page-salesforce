import { Link } from "react-router-dom";
import { Section, SectionTitle, FadeIn, GlassCard } from "../ui";

const COURSES = [
  { title: "Java Fullstack Development", path: "https://orangeitech.com/courses/java-fullstack-development", color: "rose", tags: ["Java", "Spring Boot", "React", "MySQL"] },
  { title: "MERN Stack Development", path: "https://orangeitech.com/courses/mern-fullstack-development", color: "cyan", tags: ["MongoDB", "Express", "React", "Node.js"] },
  { title: "Python Fullstack Development", path: "https://orangeitech.com/courses/python-fullstack-development", color: "amberamber", tags: ["Python", "Django", "React", "PostgreSQL"] },
  { title: "Data Science & AI", path: "https://orangeitech.com/courses/data-science-ai", color: "purple", tags: ["Python", "ML", "Deep Learning", "NLP"] },
  { title: "MEAN Stack Development", path: "https://orangeitech.com/courses/mean-fullstack-development", color: "emerald", tags: ["MongoDB", "Express", "Angular", "Node.js"] },
  { title: ".NET Fullstack Development", path: "https://orangeitech.com/courses/dotnet-fullstack-development", color: "violet", tags: ["C#", "ASP.NET", "Angular", "SQL Server"] },
  { title: "DevOps", path: "https://orangeitech.com/courses/devops", color: "teal", tags: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { title: "PHP Fullstack Development", path: "https://orangeitech.com/courses/php-fullstack-development", color: "indigo", tags: ["PHP", "Laravel", "MySQL", "JavaScript"] },
  { title: "Cybersecurity", path: "https://orangeitech.com/courses/cybersecurity", color: "red", tags: ["Pen Testing", "Network Security", "SIEM", "Compliance"] },
  { title: "Digital Marketing", path: "https://orangeitech.com/courses/digital-marketing-course", color: "orange", tags: ["SEO", "Google Ads", "Social Media", "Analytics"] },
  { title: "UI/UX Development", path: "https://orangeitech.com/courses/ui-ux-developer", color: "fuchsia", tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"] },
  { title: "Android Development", path: "https://orangeitech.com/courses/android-development", color: "green", tags: ["Kotlin", "Java", "Firebase", "Jetpack Compose"] },
  { title: "Angular Development", path: "https://orangeitech.com/courses/angular-development", color: "red", tags: ["Angular", "TypeScript", "RxJS", "NgRx"] },
  { title: "ReactJS Development", path: "https://orangeitech.com/courses/reactjs-development", color: "sky", tags: ["React", "Redux", "Next.js", "TypeScript"] },
  { title: "Flutter Development", path: "https://orangeitech.com/courses/flutter-development", color: "blue", tags: ["Dart", "Flutter", "Firebase", "REST APIs"] },
  { title: "Salesforce Development", path: "https://orangeitech.com/courses/salesforce-testing", color: "sky", tags: ["Apex", "Lightning", "SOQL", "Admin"] },
  { title: "Advance Java", path: "https://orangeitech.com/courses/advance-java-course", color: "amber", tags: ["JSP", "Servlets", "Hibernate", "Spring"] },
  { title: "C Programming", path: "https://orangeitech.com/courses/c-programming-course", color: "slate", tags: ["C Language", "Data Structures", "Algorithms", "Pointers"] },
];

const COLOR_STYLES = {
  rose:    { border: "border-rose-200 dark:border-rose-800/40",    pill: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",       hover: "hover:border-rose-400 dark:hover:border-rose-500" },
  indigo:  { border: "border-indigo-200 dark:border-indigo-800/40",  pill: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", hover: "hover:border-indigo-400 dark:hover:border-indigo-500" },
  blue:    { border: "border-blue-200 dark:border-blue-800/40",    pill: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",       hover: "hover:border-blue-400 dark:hover:border-blue-500" },
  violet:  { border: "border-violet-200 dark:border-violet-800/40",  pill: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300", hover: "hover:border-violet-400 dark:hover:border-violet-500" },
  emerald: { border: "border-emerald-200 dark:border-emerald-800/40", pill: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300", hover: "hover:border-emerald-400 dark:hover:border-emerald-500" },
  cyan:    { border: "border-cyan-200 dark:border-cyan-800/40",    pill: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",       hover: "hover:border-cyan-400 dark:hover:border-cyan-500" },
  purple:  { border: "border-purple-200 dark:border-purple-800/40",  pill: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", hover: "hover:border-purple-400 dark:hover:border-purple-500" },
  teal:    { border: "border-teal-200 dark:border-teal-800/40",    pill: "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",       hover: "hover:border-teal-400 dark:hover:border-teal-500" },
  red:     { border: "border-red-200 dark:border-red-800/40",     pill: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300",          hover: "hover:border-red-400 dark:hover:border-red-500" },
  yellow:  { border: "border-yellow-200 dark:border-yellow-800/40",  pill: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", hover: "hover:border-yellow-400 dark:hover:border-yellow-500" },
  orange:  { border: "border-orange-200 dark:border-orange-800/40",  pill: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", hover: "hover:border-orange-400 dark:hover:border-orange-500" },
  fuchsia: { border: "border-fuchsia-200 dark:border-fuchsia-800/40", pill: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300", hover: "hover:border-fuchsia-400 dark:hover:border-fuchsia-500" },
  green:   { border: "border-green-200 dark:border-green-800/40",   pill: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",    hover: "hover:border-green-400 dark:hover:border-green-500" },
  sky:     { border: "border-sky-200 dark:border-sky-800/40",     pill: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",          hover: "hover:border-sky-400 dark:hover:border-sky-500" },
  slate:   { border: "border-slate-200 dark:border-slate-700/40",   pill: "bg-slate-50 text-slate-700 dark:bg-slate-800/50 dark:text-slate-300",    hover: "hover:border-slate-400 dark:hover:border-slate-500" },
  amber:   { border: "border-amber-200 dark:border-amber-800/40",   pill: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",    hover: "hover:border-amber-400 dark:hover:border-amber-500" },
};

export default function CoursesSection() {
  return (
    <Section id="courses">
      <SectionTitle
        badge="Course Catalog"
        title="Explore Our Training Programs"
        subtitle="Comprehensive courses designed for every stage of your tech career"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {COURSES.map((course, i) => {
          const c = COLOR_STYLES[course.color];
          return (
            <FadeIn key={course.path} delay={i * 0.06}>
              <a href={course.path} className="block h-full group">
                <GlassCard
                  className={`p-6 h-full ${c.border} ${c.hover} transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-lg text-md font-semibold border ${c.pill} ${c.border}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors mt-auto">
                    <span>View Curriculum</span>
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </GlassCard>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}