import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

const TERMS_SECTIONS = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using the Society 22 website, services, or events, you agree to comply with and be bound by these Terms of Service.",
    ],
  },
  {
    title: "Event Participation",
    paragraphs: [
      "Society 22 organizes curated social gatherings and events. Participation in these events is voluntary and may require registration or confirmation.",
      "By participating in an event, you agree to conduct yourself respectfully and responsibly toward other attendees, hosts, and venues.",
      "Society 22 reserves the right to deny participation or remove individuals from events if their behavior violates community standards or disrupts the experience of others.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All content on the Society 22 website, including text, design elements, graphics, logos, and other materials, is the property of Society 22 unless otherwise stated.",
      "Users may not reproduce, distribute, or use any content from the website without prior permission.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "The website may contain links to third-party websites or services. Society 22 is not responsible for the content, policies, or practices of these external websites.",
      "Users access third-party services at their own discretion.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "Society 22 strives to provide accurate and reliable information on the website. However, the website and its content are provided on an \"as-is\" basis without warranties of any kind.",
      "Society 22 shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the website or participation in events.",
    ],
  },
  {
    title: "Changes to the Terms",
    paragraphs: [
      "Society 22 may update or modify these Terms of Service at any time. Changes will take effect once posted on the website.",
      "Users are encouraged to review the Terms periodically to stay informed of any updates.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions regarding these Terms of Service, you may contact us through the contact information provided on the website.",
    ],
  },
  {
    title: "Last Updated",
    paragraphs: ["March 2026"],
  },
]

export default function TermsOfService() {
  return (
    <PageWrapper>
      <SEO
        title="Terms of Service"
        description="Read Society 22's terms of service for website use, event participation, and legal guidelines."
      />

      <section className="w-full bg-[#050505] py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 font-ibm-plex sm:px-6 lg:px-8">
          <h1 className="mb-6 font-playfair text-3xl font-normal leading-tight text-[#C49A45] md:mb-7 md:text-4xl">
            Terms of Service
          </h1>

          <div className="space-y-4">
            {TERMS_SECTIONS.map((section) => (
              <article
                key={section.title}
                className="overflow-hidden rounded-xl border border-[#C49A45]/35 bg-[#0A0A0A] px-4 py-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:px-5 sm:py-5"
              >
                <h2 className="font-ibm-plex text-base font-normal leading-snug text-white md:text-lg">
                  {section.title}
                </h2>

                <div className="mt-2.5 space-y-3.5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="font-ibm-plex text-xs leading-relaxed text-[#D5D5D5] md:text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
