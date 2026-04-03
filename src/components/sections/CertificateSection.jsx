import { CERTIFICATE_POINTS, PRICE } from "../../constants";
import { Section, FadeIn, CTAButton, Icons } from "../ui";

export default function CertificateSection() {
  return (
    <Section id="certificate">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 dark:from-blue-950/20 via-transparent to-indigo-50/30 dark:to-indigo-950/10 pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 items-center p-5 rounded-[20px]">
        {/* Left: Certificate visual */}
        <FadeIn direction="right">
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-orange-500/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/30 dark:border-white/10 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-amber-600 dark:text-amber-400 mb-4">
                  <Icons.Award size={64} />
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Certificate of Completion
                </p>
                <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
                  Salesforce Career Accelerator Masterclass
                </p>
                <div className="mt-6 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
                <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                  Issued by Cloud Gyani & Orange iTech
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right: Content */}
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-100 dark:bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 mb-5 border border-yellow-200/50 dark:border-yellow-500/20">
              <Icons.Award size={15} /> Certificate Included
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Earn Your Salesforce
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                Masterclass Certificate
              </span>
            </h2>
          </FadeIn>

          <div className="space-y-4 mb-8">
            {CERTIFICATE_POINTS.map((point, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-green-100 dark:bg-green-500/15 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                    <Icons.Check size={14} />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {point}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <CTAButton>
              Get Certified Now @ {PRICE.current}{" "}
              <Icons.ArrowRight size={18} />
            </CTAButton>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
