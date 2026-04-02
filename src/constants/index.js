/* ═══════════════════════════════════════════════
   CONSTANTS — Single source of truth for all data
   ═══════════════════════════════════════════════ */

export const SITE_CONFIG = {
  name: "CloudGyani",
  tagline: "Salesforce Career Accelerator Masterclass",
  year: new Date().getFullYear(),
};

export const PAYMENT_LINK =
  "https://app.cloudgyani.com/web/checkout/685fdda1380b713204046fc4";

export const PRICE = {
  current: "₹99",
  original: "₹1,999",
};

export const COUNTDOWN_TARGET = new Date("2026-04-05T10:00:00+05:30");

export const NAV_LINKS = [
  { label: "Masterclass", href: "#hero" },
  { label: "Mentor", href: "#mentor" },
  { label: "Certificate", href: "#certificate" },
  { label: "Courses", href: "#courses" },
];

export const HERO_HIGHLIGHTS = [
  "No prior experience needed",
  "Step-by-step roadmap",
  "Job-ready skills",
];

export const HERO_STATS = [
  { text: "2,400+ enrolled" },
  { text: "4.9 rating", hasStars: true },
];

export const VALUE_CARDS = [
  {
    icon: "Globe",
    title: "What is Salesforce?",
    desc: "The world's #1 CRM platform powering 150,000+ companies globally.",
  },
  {
    icon: "Zap",
    title: "Power of Salesforce",
    desc: "Cloud-first, AI-driven solutions transforming every industry.",
  },
  {
    icon: "Target",
    title: "Career Roadmap",
    desc: "Clear progression from beginner to certified Salesforce professional.",
  },
  {
    icon: "Briefcase",
    title: "Opportunities",
    desc: "4.2M+ new jobs expected in the Salesforce ecosystem by 2028.",
  },
  {
    icon: "Shield",
    title: "Certifications",
    desc: "Industry-recognized credentials that command premium salaries.",
  },
];

export const LEARNING_OUTCOMES = [
  "Admin",
  "Developer",
  "Tester",
  "Business Analyst",
  "Architect",
  "Certification Strategy",
  "Live Project Experience",
];

export const CERTIFICATE_POINTS = [
  "Industry-recognized certificate",
  "Boost your resume & LinkedIn profile",
  "Validate your Salesforce skills",
  "Increase job opportunities significantly",
  "Proof of live expert-led training",
];

export const MENTOR = {
  name: "Dnyaneshwar Aghaw",
  alias: "Cloud Gyani",
  initials: "DA",
  role: "Salesforce Technical Architect",
  image: "dayneshwaragaw.jpeg",
  stats: [
    { num: "15+", label: "Years Experience" },
    { num: "20+", label: "Certifications" },
    { num: "100+", label: "Projects Delivered" },
    { num: "50+", label: "Enterprise Clients" },
  ],
  skills: [
    "Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "MuleSoft Integration",
    "AI-powered Salesforce",
  ],
  certifications: [
    "Application Architect",
    "System Architect",
    "Data Architect",
    "Integration Architect",
    "Platform Developer I",
    "Platform Developer II",
    "Sales Cloud Consultant",
    "Service Cloud Consultant",
    "Experience Cloud Consultant",
    "MuleSoft Architect",
  ],
};

export const ABOUT_FEATURES = [
  {
    icon: "Target",
    title: "Practical Training",
    desc: "Hands-on approach with real-world case studies",
  },
  {
    icon: "Briefcase",
    title: "Industry-Ready Skills",
    desc: "Curriculum aligned with current market demands",
  },
  {
    icon: "BookOpen",
    title: "Real-World Projects",
    desc: "Build portfolio-worthy projects during training",
  },
  {
    icon: "Zap",
    title: "Updated Curriculum",
    desc: "Content refreshed with latest Salesforce releases",
  },
];

export const COURSE_CATEGORIES = [
  {
    title: "Full Stack",
    courses: ["Java", "Python", "PHP", ".NET", "MERN", "MEAN"],
    color: "blue",
  },
  {
    title: "Frontend",
    courses: ["Angular", "React"],
    color: "cyan",
  },
  {
    title: "Mobile",
    courses: ["Android", "Flutter"],
    color: "green",
  },
  {
    title: "Basics",
    courses: ["C", "Core Java", "Adv Java", "DSA", "RDBMS"],
    color: "purple",
  },
  {
    title: "Specialized",
    courses: [
      "Data Science & AI",
      "DevOps",
      "Cyber Security",
      "Salesforce Testing",
      "Digital Marketing",
      "UI/UX",
    ],
    color: "indigo",
  },
];

export const COLOR_MAP = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-500/15",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200/50 dark:border-blue-500/20",
    pill: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300",
  },
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-500/15",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200/50 dark:border-cyan-500/20",
    pill: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-500/15",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200/50 dark:border-green-500/20",
    pill: "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-300",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-500/15",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200/50 dark:border-purple-500/20",
    pill: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-500/15",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200/50 dark:border-indigo-500/20",
    pill: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  },
};

export const TARGET_AUDIENCES = [
  {
    icon: "GraduationCap",
    title: "Fresh Graduates",
    desc: "Kickstart your career with Salesforce skills",
  },
  {
    icon: "Briefcase",
    title: "Tech Professionals",
    desc: "Upskill and command higher salaries",
  },
  {
    icon: "Users",
    title: "BPO Employees",
    desc: "Transition into high-growth tech roles",
  },
  {
    icon: "Shield",
    title: "Testers & DBAs",
    desc: "Expand your domain into cloud CRM",
  },
  {
    icon: "Zap",
    title: "Career Switchers",
    desc: "No coding background? No problem.",
  },
];

export const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];
