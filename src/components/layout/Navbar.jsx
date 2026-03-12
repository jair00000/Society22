import { useState } from "react"
import { Link } from "react-router-dom"
import { HiOutlineMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="w-full bg-[#050505] py-4 sticky top-0 z-50 border-b border-white/5 font-montserrat">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/icons/societylogo.webp" alt="Society 22 Logo" className="h-16 md:h-20 w-auto object-contain" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link to="/" className="text-sm font-medium text-white hover:text-[#C49A45] transition-colors whitespace-nowrap">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-[#C49A45] transition-colors whitespace-nowrap">About</Link>
          <Link to="/events" className="text-sm font-medium text-gray-300 hover:text-[#C49A45] transition-colors whitespace-nowrap">Events</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-[#C49A45] transition-colors whitespace-nowrap">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block shrink-0">
          <Link 
            to="/join" 
            className="bg-[#C49A45] hover:bg-[#A67C2F] text-white text-sm font-bold py-2.5 px-7 rounded-full transition-colors shadow-sm whitespace-nowrap inline-block"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white text-2xl focus:outline-none ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-[#0a0a0a] border-t border-gray-800 absolute w-full left-0 top-full flex flex-col items-center py-8 gap-6 shadow-2xl">
          <Link to="/" className="text-white font-medium hover:text-[#C49A45] transition-colors" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="text-gray-300 font-medium hover:text-[#C49A45] transition-colors" onClick={toggleMenu}>About</Link>
          <Link to="/events" className="text-gray-300 font-medium hover:text-[#C49A45] transition-colors" onClick={toggleMenu}>Events</Link>
          <Link to="/contact" className="text-gray-300 font-medium hover:text-[#C49A45] transition-colors" onClick={toggleMenu}>Contact</Link>
          <Link 
            to="/join" 
            className="bg-[#C49A45] hover:bg-[#A67C2F] text-white font-bold py-3 px-10 rounded-full transition-colors mt-4 shadow-sm"
            onClick={toggleMenu}
          >
            Join Us
          </Link>
        </nav>
      )}
    </header>
  )
}
