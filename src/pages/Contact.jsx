import PageWrapper from "../components/layout/PageWrapper"
import CTA from "../components/sections/CTA"
import ContactSection from "../components/sections/Contact"

export default function Contact() {
  return (
    <PageWrapper>

      {/* Hero */}
      <section
        className="relative w-full h-[55vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact/hero-contact.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
          <p className="font-montserrat text-[#C49A45] text-sm tracking-[0.45em] uppercase">
            Society 22
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-white font-light drop-shadow-lg">
            Contact
          </h1>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C49A45] to-transparent mt-2"></div>
        </div>
      </section>

      <CTA />
      <ContactSection />

    </PageWrapper>
  )
}
