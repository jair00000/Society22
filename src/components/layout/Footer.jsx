import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-6">
              <img src="/icons/societylogo.webp" alt="Society 22 Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="font-ibm-plex text-gray-400 text-sm font-light max-w-xs leading-relaxed">
              Curated social gatherings designed for meaningful connections. Join us as we redefine exploration and discovery in Pampanga.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-montserrat text-[#C49A45] tracking-[0.2em] uppercase text-sm font-semibold mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4 font-ibm-plex text-sm text-gray-400 font-light">
              <Link to="/about" className="hover:text-[#C49A45] transition-colors w-max">About Us</Link>
              <Link to="/services" className="hover:text-[#C49A45] transition-colors w-max">Seating Plan</Link>
              <Link to="/testimonials" className="hover:text-[#C49A45] transition-colors w-max">Testimonials</Link>
              <Link to="/contact" className="hover:text-[#C49A45] transition-colors w-max">Contact</Link>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-montserrat text-[#C49A45] tracking-[0.2em] uppercase text-sm font-semibold mb-6">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C49A45] hover:border-[#C49A45] transition-all">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588421893457" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C49A45] hover:border-[#C49A45] transition-all">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C49A45] hover:border-[#C49A45] transition-all">
                <FaTwitter className="text-lg" />
              </a>
            </div>
            <p className="font-ibm-plex text-gray-400 text-sm font-light">
              Pampanga, Philippines<br />
              info@society22.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-ibm-plex text-gray-500 text-xs font-light">
            &copy; {new Date().getFullYear()} Society 22. All rights reserved.
          </p>
          <div className="flex gap-6 font-ibm-plex text-gray-500 text-xs font-light">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
