import { FaMapMarkedAlt, FaUserFriends, FaMagic } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Top Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            About Us
          </h2>
          <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug max-w-4xl mx-auto">
            Private Social Gatherings <br />
            For Meaningful Connection
          </h3>
          <div className="w-24 h-[1px] bg-[#C49A45] mx-auto mb-8"></div>
          <p className="font-ibm-plex text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Society 22 hosts curated social gatherings designed to bring people together in relaxed, welcoming spaces across Pampanga. Each event is thoughtfully crafted to encourage conversation, connection, and memorable experiences.
          </p>
        </div>

        {/* Three Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-[#C49A45]/30 flex items-center justify-center mb-6 group-hover:bg-[#C49A45]/10 transition-colors duration-500">
              <FaMapMarkedAlt className="text-2xl text-[#C49A45]" />
            </div>
            <h4 className="font-playfair text-2xl mb-4 text-white">Unique Venues</h4>
            <p className="font-ibm-plex text-gray-400 text-sm leading-relaxed font-light">
              Rooftops, gardens, poolside spaces, and occasionally hidden locations across Pampanga create a refreshing atmosphere for every gathering.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-[#C49A45]/30 flex items-center justify-center mb-6 group-hover:bg-[#C49A45]/10 transition-colors duration-500">
              <FaUserFriends className="text-2xl text-[#C49A45]" />
            </div>
            <h4 className="font-playfair text-2xl mb-4 text-white">Curated Guests</h4>
            <p className="font-ibm-plex text-gray-400 text-sm leading-relaxed font-light">
              Each event brings together a balanced mix of professionals, creatives, entrepreneurs, and individuals open to meeting new people.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-[#C49A45]/30 flex items-center justify-center mb-6 group-hover:bg-[#C49A45]/10 transition-colors duration-500">
              <FaMagic className="text-2xl text-[#C49A45]" />
            </div>
            <h4 className="font-playfair text-2xl mb-4 text-white">Natural Connections</h4>
            <p className="font-ibm-plex text-gray-400 text-sm leading-relaxed font-light">
              Some attend to expand their network, while others simply come to enjoy the evening and have fun. Conversations flow naturally and meaningful connections often follow.
            </p>
          </div>

        </div>

        {/* Closing Hook */}
        <div className="text-center pb-8 flex flex-col items-center gap-8">
          <p className="font-playfair text-2xl md:text-3xl italic text-[#C49A45]">
            Where every gathering goes beyond expectations.
          </p>
          <Link
            to="/about"
            className="inline-block border border-[#C49A45] text-[#C49A45] font-montserrat text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#C49A45] hover:text-black transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  )
}
