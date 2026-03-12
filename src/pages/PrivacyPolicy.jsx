import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <SEO
        title="Privacy Policy"
        description="Read Society 22's privacy policy and how we collect, use, and protect your information."
      />

      <section className="w-full bg-[#0a0a0a] text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#C49A45] mb-8">Privacy Policy</h1>
          <div className="space-y-6 font-ibm-plex text-[16px] text-gray-300 leading-relaxed font-light">
            <p>
              Society 22 respects your privacy and is committed to protecting your personal information.
              This page explains what information we collect, how we use it, and your choices regarding
              your data.
            </p>
            <p>
              We may collect basic details you provide when you contact us or register for events, such as
              your name, email address, and relevant event preferences. We use this information only to
              manage inquiries, improve experiences, and communicate event-related updates.
            </p>
            <p>
              We do not sell your personal information. We only share information when required to deliver
              our services, comply with legal obligations, or protect the rights and safety of our users.
            </p>
            <p>
              By using our website, you agree to this policy. We may update this page from time to time,
              and continued use of the site means you accept the latest version.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
