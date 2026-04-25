import { useState } from "react"
import { submitContactForm } from "../../utils/api"

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  extra_info: "",
}

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [status, setStatus] = useState({ type: "idle", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "idle", message: "" })

    const payload = {
      type: "contact",
      formData: {
        Name: formData.name,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message,
      },
    }

    try {
      const response = await submitContactForm(payload)

      console.log("Contact submission response:", response)
      window.alert(response?.message || "Message sent!")

      setStatus({
        type: "success",
        message: "Your message was sent. We will get back to you after the team reviews it.",
      })
      setFormData(INITIAL_FORM_STATE)
    } catch (error) {
      console.error("Contact submission failed:", error?.response?.data || error)
      const apiMessage = error?.response?.data?.message
      const fallbackMessage = error instanceof Error ? error.message : "Unable to send message right now."

      setStatus({
        type: "error",
        message: apiMessage || fallbackMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Inquiries
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6">
            Get In Touch
          </h3>
          <div className="w-24 h-[1px] bg-[#C49A45] mx-auto mb-8"></div>
          <p className="font-ibm-plex text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Have questions about our events or wish to inquire about private hosting? We would be delighted to assist you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#050505] border border-[#C49A45]/20 p-8 md:p-12 rounded-xl shadow-2xl">
          <form className="flex flex-col gap-6 font-ibm-plex" onSubmit={handleSubmit}>
            <input
              type="text"
              name="extra_info"
              value={formData.extra_info}
              onChange={handleChange}
              style={{
                position: "absolute",
                left: "-5000px",
                top: "-5000px",
                opacity: 0,
                zIndex: -1,
              }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            {status.type !== "idle" && (
              <div
                className={`rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-[#4C9E6F]/40 bg-[#0E1712] text-[#CFF8DD]"
                    : "border-red-500/30 bg-red-950/30 text-red-100"
                }`}
                aria-live="polite"
              >
                {status.message}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm tracking-wider uppercase text-gray-400">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name" 
                  className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors" 
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm tracking-wider uppercase text-gray-400">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address" 
                  className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors" 
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm tracking-wider uppercase text-gray-400">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Inquiry topic" 
                className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors" 
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm tracking-wider uppercase text-gray-400">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?" 
                rows="5" 
                className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-4 bg-[#C49A45] text-white py-4 px-8 rounded-sm font-bold tracking-widest uppercase hover:bg-[#A67C2F] transition-colors w-full md:w-auto md:self-end shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        
      </div>
    </section>
  )
}
