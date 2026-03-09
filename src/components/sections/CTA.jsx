import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="py-24 bg-[#050505] text-center relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C49A45]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.4em] uppercase mb-4">
          Reserve Your Experience
        </h2>
        <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight max-w-3xl mx-auto">
          Ready to Step Beyond Expectations?
        </h3>
        <p className="font-ibm-plex text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Secure your spot at our next exclusive gathering. Connect with like-minded individuals in an atmosphere of pure elegance and curated perfection.
        </p>
        <Link 
          to="/join" 
          className="bg-[#C49A45] hover:bg-[#A67C2F] text-white font-ibm-plex font-bold tracking-widest uppercase py-4 px-12 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(196,154,69,0.3)] hover:shadow-[0_0_30px_rgba(196,154,69,0.5)] inline-block"
        >
          Secure Your Seat
        </Link>
      </div>
    </section>
  )
}
