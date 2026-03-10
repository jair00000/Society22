import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

export default function Faqs() {
  return (
    <PageWrapper>
      <SEO
        title="FAQs"
        description="Frequently asked questions about Society 22 gatherings and how to join."
      />

      <section className="w-full bg-[#0a0a0a] text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#C49A45] mb-8">FAQs</h1>
          <div className="space-y-6 font-ibm-plex text-[16px] text-gray-300 leading-relaxed font-light">
            <div>
              <h2 className="text-xl text-white mb-2">How can I join a Society 22 event?</h2>
              <p>
                You can contact us through the contact page or our social channels. Our team will guide you
                through upcoming event options and registration details.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white mb-2">Are events open to everyone?</h2>
              <p>
                Events are curated to keep the experience balanced and intentional. Availability may vary by
                event type, location, and capacity.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white mb-2">Where are the events usually held?</h2>
              <p>
                Gatherings are hosted in selected venues around Pampanga, including rooftops, gardens,
                private spaces, and partner locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
