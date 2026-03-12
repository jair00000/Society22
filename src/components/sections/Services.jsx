import { Link } from "react-router-dom"

export default function Services() {
  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Our Events
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6">
            Upcoming Gatherings
          </h3>
          <div className="w-24 h-[1px] bg-[#C49A45] mx-auto mb-8"></div>
          <p className="font-ibm-plex text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            Curated social gatherings for entrepreneurs, founders, and professionals. Connect with like-minded individuals in an atmosphere of pure elegance.
          </p>
        </div>

        {/* Learn More */}
        <div className="text-center">
          <Link
            to="/events"
            className="inline-block bg-[#C49A45] hover:bg-[#A67C2F] text-white font-ibm-plex font-bold tracking-widest uppercase py-4 px-12 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(196,154,69,0.3)] hover:shadow-[0_0_30px_rgba(196,154,69,0.5)]"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  )
}
