import { useState } from "react"
import { HiX } from "react-icons/hi"
import { Link } from "react-router-dom"

export default function EventModal({ event, onClose }) {
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const largeImage = event.modalImage || event.image

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0a0a0a] rounded-xl overflow-hidden max-w-4xl w-full border border-[#C49A45]/35 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-[#C49A45] transition-colors"
        >
          <HiX className="text-3xl" />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          
          {/* Large Image */}
          <div className="h-80 md:h-96 rounded-lg flex items-center justify-center">
            <div className="relative h-full max-w-full">
              <img
                src={largeImage}
                alt={event.title}
                className="block h-full w-auto max-w-full cursor-zoom-in object-contain"
                onClick={() => setIsImageExpanded(true)}
              />
              {event.blurBottomSection && (
                <div className="pointer-events-none absolute bottom-0 left-0 h-[25%] w-1/2 rounded-bl-lg bg-black/20 backdrop-blur-md" />
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col justify-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">
              {event.title}
            </h2>
            <div className="w-16 h-[1px] bg-[#C49A45] mb-6"></div>
            <p className="font-montserrat text-[#C49A45] text-sm tracking-[0.2em] uppercase mb-6">
              {event.date}
            </p>
            <p className="font-ibm-plex text-gray-300 text-base leading-relaxed mb-4">
              {event.description}
            </p>
            {event.notice && (
              <p className="font-ibm-plex text-xs text-[#C49A45]/80 leading-relaxed mb-8 italic">
                {event.notice}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/join"
                onClick={onClose}
                className="w-max bg-[#C49A45] hover:bg-[#A67C2F] text-white font-ibm-plex font-bold uppercase px-8 py-3 rounded-sm transition-colors shadow-lg"
              >
                Join Us
              </Link>
              <button
                onClick={onClose}
                className="w-max border border-[#C49A45]/50 text-[#E7E7E7] hover:text-white hover:border-[#C49A45] font-ibm-plex font-bold uppercase px-8 py-3 rounded-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>

        </div>
      </div>

      {isImageExpanded && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={largeImage}
              alt={event.title}
              className="block max-h-[95vh] w-auto max-w-[95vw] object-contain"
            />
            {event.blurBottomSection && (
              <div className="pointer-events-none absolute bottom-0 left-0 h-[25%] w-1/2 bg-black/20 backdrop-blur-md" />
            )}
            <button
              onClick={() => setIsImageExpanded(false)}
              className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:text-[#C49A45]"
              aria-label="Close"
            >
              <HiX className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
