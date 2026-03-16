import { useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { HiCheckCircle, HiClock, HiCreditCard, HiLockClosed, HiShieldCheck } from "react-icons/hi"
import PageWrapper from "../components/layout/PageWrapper"
import SEO from "../seo/SEO"
import { EVENTS_DATA } from "../data/events"

const BASE_TICKET_PRICE = 2200
const SERVICE_FEE_RATE = 0.06

export default function Payment() {
  const location = useLocation()
  const eventFromState = location.state?.event

  const [paymentData, setPaymentData] = useState({
    approvalTicket: "",
    guestName: "",
    email: "",
    mobile: "",
    quantity: 1,
    paymentMethod: "gcash",
  })

  const selectedEvent = useMemo(() => {
    if (eventFromState?.id) {
      return EVENTS_DATA.find((event) => event.id === eventFromState.id) || EVENTS_DATA[0]
    }
    return EVENTS_DATA[0]
  }, [eventFromState])

  const subtotal = paymentData.quantity * BASE_TICKET_PRICE
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE)
  const total = subtotal + serviceFee

  const handleChange = (event) => {
    const { name, value } = event.target
    setPaymentData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Math.min(5, Math.max(1, Number(value) || 1)) : value,
    }))
  }

  const fieldClass =
    "h-11 w-full rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 font-ibm-plex text-sm text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"

  return (
    <PageWrapper>
      <SEO
        title="Payment"
        description="Society 22 payment interface prepared for the upcoming approval ticket payment system."
      />

      <section className="bg-[#050505] px-4 py-8 font-ibm-plex sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <header className="mb-8 rounded-3xl border border-[#C49A45]/20 bg-gradient-to-r from-[#1E1A14] via-[#111111] to-[#1A1510] px-6 py-7 shadow-[0_18px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(196,154,69,0.12)] sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C49A45]">Society 22 Payment System</p>
            <h1 className="mt-2 font-playfair text-3xl text-white sm:text-4xl">Payment UI</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#E0E0E0] sm:text-base">
              This page is prepared for the payment system flow: the guest answers the form, waits for approval, receives an Approval Ticket if approved, then pays directly on the website.
            </p>
          </header>

          <div className="mb-8 rounded-2xl border border-[#C49A45]/20 bg-[#0A0A0A] px-5 py-5 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C49A45]">Process Overview</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[#C49A45]/20 bg-[#0D0D0D] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A45]">Step 1</p>
                <h2 className="mt-2 text-base font-semibold text-white">Answer the Form</h2>
                <p className="mt-2 text-xs leading-relaxed text-[#CFCFCF]">
                  Submit the Join Us application and send your event request details.
                </p>
              </div>
              <div className="rounded-xl border border-[#C49A45]/20 bg-[#0D0D0D] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A45]">Step 2</p>
                <h2 className="mt-2 text-base font-semibold text-white">Wait for Approval</h2>
                <p className="mt-2 text-xs leading-relaxed text-[#CFCFCF]">
                  The Society 22 team reviews the application before unlocking payment.
                </p>
              </div>
              <div className="rounded-xl border border-[#C49A45]/20 bg-[#0D0D0D] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A45]">Step 3</p>
                <h2 className="mt-2 text-base font-semibold text-white">If Approved: Ticket and Payment</h2>
                <p className="mt-2 text-xs leading-relaxed text-[#CFCFCF]">
                  Approved guests receive an Approval Ticket and complete payment directly on the website.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <section className="rounded-2xl border border-[#C49A45]/30 bg-[#0A0A0A] p-5 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.65)] sm:p-7">
                <div className="flex items-start gap-3">
                  <HiLockClosed className="mt-0.5 h-5 w-5 shrink-0 text-[#C49A45]" />
                  <div>
                    <h2 className="text-xl text-white">Approval Ticket Gate</h2>
                    <p className="mt-1 text-xs leading-relaxed text-[#BEBEBE]">
                      Approval is not connected yet, but this field is ready for the future payment system.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
                  <input
                    name="approvalTicket"
                    type="text"
                    value={paymentData.approvalTicket}
                    onChange={handleChange}
                    className={fieldClass + " font-semibold uppercase tracking-[0.24em]"}
                    placeholder="ENTER APPROVAL TICKET"
                  />
                  <button
                    type="button"
                    className="rounded-lg border border-[#C49A45]/35 bg-[#15120E] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#C49A45] transition-colors hover:border-[#C49A45] hover:text-white"
                  >
                    Verify Ticket
                  </button>
                </div>

                <div className="mt-4 rounded-xl border border-[#C49A45]/15 bg-[#0D0D0D] px-4 py-4 text-xs leading-relaxed text-[#CFCFCF]">
                  <div className="flex items-start gap-2">
                    <HiClock className="mt-0.5 h-4 w-4 shrink-0 text-[#C49A45]" />
                    <p>
                      Temporary status: UI ready. Approval verification will be connected to the real approval system later.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-[#C49A45]/30 bg-[#0A0A0A] p-5 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.65)] sm:p-7">
                <h2 className="text-xl text-white">Payment Details</h2>
                <p className="mt-1 text-xs leading-relaxed text-[#BEBEBE]">
                  This interface is prepared for direct website checkout once the approval flow is complete.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="guestName" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-white">
                      Guest Name
                    </label>
                    <input
                      id="guestName"
                      name="guestName"
                      type="text"
                      value={paymentData.guestName}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-white">
                      Tickets
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      max="5"
                      value={paymentData.quantity}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={paymentData.email}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-white">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={paymentData.mobile}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="09XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#C49A45]">Choose Payment Method</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { value: "gcash", title: "GCash", body: "Wallet payment" },
                      { value: "maya", title: "Maya", body: "Digital checkout" },
                      { value: "card", title: "Card", body: "Website card payment" },
                    ].map((method) => (
                      <label
                        key={method.value}
                        className={`cursor-pointer rounded-xl border p-4 transition-colors ${
                          paymentData.paymentMethod === method.value
                            ? "border-[#C49A45] bg-[#15120E]"
                            : "border-[#C49A45]/20 bg-[#0D0D0D] hover:border-[#C49A45]/45"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={paymentData.paymentMethod === method.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-center gap-2">
                          <HiCreditCard className="h-4 w-4 text-[#C49A45]" />
                          <span className="text-sm font-semibold text-white">{method.title}</span>
                        </div>
                        <p className="mt-2 text-xs text-[#CFCFCF]">{method.body}</p>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#4C9E6F]/25 bg-[#0E1712] px-4 py-4 text-xs leading-relaxed text-[#CFF8DD]">
                  <div className="flex items-start gap-2">
                    <HiShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#6DBD8E]" />
                    <p>
                      Payment system ready state: the UI is prepared for approval-ticket validation, direct website checkout, and live payment provider integration.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-lg bg-[#C49A45] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#A67C2F]"
                  >
                    Pay Now
                  </button>
                  <Link
                    to="/join"
                    className="rounded-lg border border-[#C49A45]/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#C49A45] transition-colors hover:border-[#C49A45] hover:text-white"
                  >
                    Back to Join Form
                  </Link>
                </div>
              </section>
            </div>

            <aside className="rounded-2xl border border-[#C49A45]/30 bg-[#090909] p-5 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.65)] sm:p-7">
              <h2 className="text-xl text-white">Order Summary</h2>
              <div className="mt-5 rounded-xl border border-[#C49A45]/20 bg-[#0D0D0D] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C49A45]">Selected Event</p>
                <h3 className="mt-2 text-lg leading-snug text-white">
                  {(eventFromState?.title || selectedEvent.title).replaceAll("\n", " ")}
                </h3>
                <p className="mt-1 text-xs text-[#BEBEBE]">
                  {eventFromState?.date || selectedEvent.date || "Date disclosed after approval and payment."}
                </p>
              </div>

              <div className="mt-5 space-y-2 border-t border-[#C49A45]/20 pt-4 text-sm text-[#E6E6E6]">
                <div className="flex items-center justify-between">
                  <span>Ticket subtotal</span>
                  <span>PHP {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Service fee</span>
                  <span>PHP {serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#C49A45]/20 pt-2 text-base font-semibold text-white">
                  <span>Total</span>
                  <span>PHP {total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-[#C49A45]/15 bg-[#0D0D0D] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C49A45]">Current Status</p>
                <div className="mt-3 space-y-3 text-xs text-[#D6D6D6]">
                  <div className="flex items-start gap-2">
                    <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#6DBD8E]" />
                    <span>Payment layout is ready for development handoff.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <HiClock className="mt-0.5 h-4 w-4 shrink-0 text-[#C49A45]" />
                    <span>Approval-ticket verification is pending backend completion.</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
