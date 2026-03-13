import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

const REFUND_SECTIONS = [
  {
    title: "1. No Refunds for Non-Attendance",
    paragraphs: [
      "All ticket purchases are final. Once payment has been completed and a ticket has been issued, refunds will not be granted if a guest chooses not to attend the event. By confirming payment, guests acknowledge that they are reserving a limited seat in a curated gathering, and that seat is held exclusively for them.",
    ],
  },
  {
    title: "2. Event Cancellation by Society 22",
    paragraphs: [
      "If an event is canceled by Society 22 and will not proceed as scheduled, guests who have already paid will be eligible for a full refund of the ticket amount. Refunds will be processed using the original payment method whenever possible.",
    ],
  },
  {
    title: "3. Event Rescheduling",
    paragraphs: [
      "If an event must be rescheduled due to unforeseen circumstances, guests will be notified promptly. Paid guests may choose to attend the rescheduled date or request a refund if they are unable to participate on the new date.",
    ],
  },
  {
    title: "4. Payment Processing Issues",
    paragraphs: [
      "Society 22 uses third-party payment providers to process transactions. In the event of technical issues, delays, or transaction errors caused by external payment systems, Society 22 is not directly liable for system-related disruptions. However, we will make reasonable efforts to coordinate with the payment provider and assist guests in resolving the matter.",
    ],
  },
  {
    title: "5. Duplicate or Accidental Payments",
    paragraphs: [
      "If a guest is accidentally charged more than once for the same event ticket, the duplicate payment will be reviewed and refunded after proper verification.",
    ],
  },
  {
    title: "6. Unused Seats and Ticket Transfers",
    paragraphs: [
      "Tickets are non-transferable and may only be used by the registered guest whose name appears on the ticket. If a guest is unable to attend the event, the reserved seat will remain unused and will not be refunded or transferred to another individual.",
    ],
  },
  {
    title: "7. Refund Processing Time",
    paragraphs: [
      "Approved refunds may require several business days to process depending on the payment provider, financial institutions, or digital wallet services involved.",
    ],
  },
  {
    title: "8. Policy Acknowledgment",
    paragraphs: [
      "By completing payment for a Society 22 event, guests acknowledge and agree to the terms outlined in this Refund Policy.",
    ],
  },
]

export default function RefundPolicy() {
  return (
    <PageWrapper>
      <SEO
        title="Refund Policy"
        description="Read Society 22's refund policy for event cancellations, billing errors, and refund request guidelines."
      />

      <section className="w-full bg-[#050505] py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 font-ibm-plex sm:px-6 lg:px-8">
          <h1 className="mb-6 font-playfair text-3xl font-normal leading-tight text-[#C49A45] md:mb-7 md:text-4xl">
            Society 22 - Refund Policy
          </h1>

          <div className="space-y-4">
            {REFUND_SECTIONS.map((section) => (
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
