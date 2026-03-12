import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

const COOKIE_SECTIONS = [
  {
    title: "What Are Cookies",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help websites function properly and allow website owners to understand how visitors interact with their pages.",
      "Cookies can store information such as your browsing preferences or basic technical details that help improve the performance and usability of a website.",
    ],
  },
  {
    title: "How We Use Cookies",
    paragraphs: [
      "Society 22 uses cookies to support essential website functionality and to enhance the overall browsing experience.",
      "Essential cookies help the website operate correctly and ensure core features work as expected. Performance cookies help us understand how visitors interact with the website, such as which pages are visited most often. This information helps us improve the website and provide a better user experience.",
    ],
  },
  {
    title: "Managing Cookies",
    paragraphs: [
      "You can manage, restrict, or disable cookies through your browser settings at any time. Most web browsers allow you to control cookies through their privacy or security settings.",
      "Please note that disabling certain cookies may affect the functionality or performance of some parts of the website.",
    ],
  },
  {
    title: "Consent",
    paragraphs: [
      "By continuing to use this website, you consent to the use of cookies as described in this Cookie Policy.",
    ],
  },
  {
    title: "Last Updated",
    paragraphs: ["March 2026"],
  },
]

export default function CookiePolicy() {
  return (
    <PageWrapper>
      <SEO
        title="Cookie Policy"
        description="Learn how Society 22 uses cookies to improve website functionality and experience."
      />

      <section className="w-full bg-[#050505] py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 font-ibm-plex sm:px-6 lg:px-8">
          <h1 className="mb-6 font-playfair text-3xl font-normal leading-tight text-[#C49A45] md:mb-7 md:text-4xl">
            Cookie Policy
          </h1>

          <div className="space-y-4">
            {COOKIE_SECTIONS.map((section) => (
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
