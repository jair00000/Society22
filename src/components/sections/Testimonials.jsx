import { FaQuoteLeft } from "react-icons/fa"

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Testimonials
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6 leading-snug">
            Stories From Our Guests
          </h3>
          <div className="w-24 h-[1px] bg-[#C49A45] mx-auto mb-8"></div>
          <p className="font-ibm-plex text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Hear what our guests have to say about their experiences at our curated social gatherings and exclusive events.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Testimonial 1 */}
          <div className="bg-[#050505] border border-white/5 rounded-xl p-10 flex flex-col relative transition-all duration-300 hover:border-[#C49A45]/30 hover:-translate-y-1">
            <FaQuoteLeft className="text-[#C49A45] text-3xl mb-6 opacity-80" />
            <p className="font-playfair text-lg text-gray-300 italic mb-8 flex-grow leading-relaxed">
              "Be the first to share your Society 22 experience. Your testimonial will help future guests understand the value of our curated gatherings for professionals."
            </p>
            <div className="mt-auto">
              <div className="w-12 h-[1px] bg-[#C49A45]/40 mb-4"></div>
              <h4 className="font-montserrat font-semibold text-white tracking-widest uppercase text-sm mb-1">
                Unknown
              </h4>
              <p className="font-ibm-plex text-[#C49A45] text-xs uppercase tracking-wider">
                Entrepreneur
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#050505] border border-white/5 rounded-xl p-10 flex flex-col relative transition-all duration-300 hover:border-[#C49A45]/30 hover:-translate-y-1">
            <FaQuoteLeft className="text-[#C49A45] text-3xl mb-6 opacity-80" />
            <p className="font-playfair text-lg text-gray-300 italic mb-8 flex-grow leading-relaxed">
              "Be the first to provide a testimonial from a creative and professional perspective. We welcome thoughtful feedback on the atmosphere, curation, and quality of connections."
            </p>
            <div className="mt-auto">
              <div className="w-12 h-[1px] bg-[#C49A45]/40 mb-4"></div>
              <h4 className="font-montserrat font-semibold text-white tracking-widest uppercase text-sm mb-1">
                Unknown
              </h4>
              <p className="font-ibm-plex text-[#C49A45] text-xs uppercase tracking-wider">
                Creative Director
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#050505] border border-white/5 rounded-xl p-10 flex flex-col relative transition-all duration-300 hover:border-[#C49A45]/30 hover:-translate-y-1">
            <FaQuoteLeft className="text-[#C49A45] text-3xl mb-6 opacity-80" />
            <p className="font-playfair text-lg text-gray-300 italic mb-8 flex-grow leading-relaxed">
              "Be the first corporate voice to leave a testimonial. Share how Society 22 supported meaningful networking and delivered a polished, high-quality guest experience."
            </p>
            <div className="mt-auto">
              <div className="w-12 h-[1px] bg-[#C49A45]/40 mb-4"></div>
              <h4 className="font-montserrat font-semibold text-white tracking-widest uppercase text-sm mb-1">
                Unknown
              </h4>
              <p className="font-ibm-plex text-[#C49A45] text-xs uppercase tracking-wider">
                Corporate Executive
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
