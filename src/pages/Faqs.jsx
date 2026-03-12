import { useState } from "react"
import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

const FAQ_ITEMS = [
  {
    question: "How can I join a Society 22 event?",
    answer:
      "To join a Society 22 event, you can contact us through our Contact Page or our official social media channels. Our team will provide information about upcoming events and guide you through the registration process.",
  },
  {
    question: "Do I need to pay to attend an event?",
    answer:
      "Yes. Society 22 events require a registration or participation fee. This helps us manage event capacity, organize the experience, and ensure a high-quality gathering for all attendees.",
  },
  {
    question: "When will I receive the event location?",
    answer:
      "The exact event location will be shared only after your registration is confirmed and payment has been successfully verified. Once payment is completed, you will receive a confirmation message with the full event details and location.",
  },
  {
    question: "Why is the event location shared only after confirmation?",
    answer:
      "To maintain the privacy, security, and exclusivity of our gatherings, event locations are only shared with confirmed participants. This helps ensure a safe and well-organized experience for everyone attending.",
  },
  {
    question: "Where are Society 22 events usually held?",
    answer:
      "Society 22 gatherings are hosted in carefully selected venues around Pampanga, including rooftops, gardens, private venues, and partner locations chosen to create a unique and memorable atmosphere.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment methods may vary depending on the event. Accepted options may include bank transfer, digital wallets, or other approved payment channels. Full payment instructions will be provided during the registration process.",
  },
  {
    question: "How will I know my registration is confirmed?",
    answer:
      "After your payment has been verified, you will receive a confirmation message that includes your event details, schedule, and the exact venue location.",
  },
  {
    question: "Is there a dress code for events?",
    answer:
      "Some Society 22 events may have a recommended dress code depending on the theme or venue. If applicable, the dress guidelines will be included in the event confirmation details.",
  },
  {
    question: "What happens if I can no longer attend?",
    answer:
      "If you are unable to attend after registering, please contact our team as soon as possible. Our team will assist you and provide the appropriate options based on the event guidelines.",
  },
]

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <PageWrapper>
      <SEO
        title="FAQs"
        description="Frequently asked questions about Society 22 gatherings and how to join."
      />

      <section className="w-full bg-[#050505] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-5 font-ibm-plex text-3xl font-normal leading-tight text-[#C49A45] md:text-4xl">
            Frequently Asked Questions (FAQs)
          </h1>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = index === openIndex

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-[#C49A45]/35 bg-[#0A0A0A] shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)]"
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left sm:px-5"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                  >
                    <h2 className="font-ibm-plex text-base font-normal leading-snug text-white md:text-lg">
                      {item.question}
                    </h2>
                    <span className="mt-0.5 text-lg font-normal leading-none text-[#C49A45]">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#C49A45]/20 px-4 pb-5 pt-2 sm:px-5">
                      <p className="font-ibm-plex text-xs leading-relaxed text-[#D5D5D5] md:text-sm">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
