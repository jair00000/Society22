import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

const POLICY_SECTIONS = [
  {
    title: "At Society 22, we respect your privacy and are committed to protecting the personal information you share with us.",
    paragraphs: [
      "This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect basic information that you voluntarily provide when you contact us, register for events, or interact with our website. This information may include:",
    ],
    bullets: [
      "Your name",
      "Email address",
      "Event preferences or registration details",
      "Any information you choose to include in messages or inquiries",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: ["The information we collect is used to:"],
    bullets: [
      "Respond to your inquiries and messages",
      "Manage event registrations and participation",
      "Send event updates or important communications",
      "Improve our website and user experience",
    ],
  },
  {
    title: "Information Sharing",
    paragraphs: [
      "We respect your privacy and do not sell, rent, or trade your personal information. Your information may only be shared when necessary to:",
    ],
    bullets: [
      "Provide or support our services (such as event management tools)",
      "Comply with legal obligations or lawful requests",
      "Protect the rights, safety, and security of our users and our organization",
    ],
  },
  {
    title: "Data Protection",
    paragraphs: [
      "We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure. However, no online system can guarantee absolute security.",
    ],
  },
  {
    title: "Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page.",
    ],
  },
  {
    title: "Your Consent",
    paragraphs: [
      "By using our website or registering for our events, you agree to the terms of this Privacy Policy. Continued use of our website after updates means you accept the revised policy.",
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <SEO
        title="Privacy Policy"
        description="Read Society 22's privacy policy and how we collect, use, and protect your information."
      />

      <section className="w-full bg-[#050505] py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 font-ibm-plex sm:px-6 lg:px-8">
          <h1 className="mb-6 font-playfair text-3xl font-normal leading-tight text-[#C49A45] md:mb-7 md:text-4xl">
            Privacy Policy
          </h1>

          <div className="space-y-4">
            {POLICY_SECTIONS.map((section) => (
              <article
                key={section.title}
                className="overflow-hidden rounded-xl border border-[#C49A45]/35 bg-[#0A0A0A] px-4 py-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:px-5 sm:py-5"
              >
                <h2 className="font-ibm-plex text-base font-normal leading-snug text-white md:text-lg">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-2.5 font-ibm-plex text-xs leading-relaxed text-[#D5D5D5] md:text-sm"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 font-ibm-plex text-xs leading-relaxed text-[#D5D5D5] md:text-sm">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
