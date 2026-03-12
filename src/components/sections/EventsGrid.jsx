import { useState } from "react"
import { EVENTS_DATA } from "../../data/events"
import EventModal from "../ui/EventModal"

export default function EventsGrid() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <>
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              Our Events
            </h2>
            <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Upcoming Gatherings
            </h3>
            <div className="w-24 h-[1px] bg-[#C49A45] mx-auto"></div>
          </div>

          {/* Events Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS_DATA.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Card */}
                <div
                  onClick={() => setSelectedEvent(event)}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-[#C49A45]/35 bg-[#0a0a0a] shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] transition-all duration-300 hover:border-[#C49A45]/65 hover:shadow-[0_14px_22px_-16px_rgba(196,154,69,0.9)]"
                >
                  {/* Event Image */}
                  <div className="h-56 overflow-hidden bg-black">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Event Info */}
                  <div className="p-4">
                    <h4 className="font-ibm-plex text-base font-normal text-white mb-2 whitespace-pre-line">
                      {event.title}
                    </h4>
                    {event.date && (
                      <p className="font-ibm-plex text-xs text-[#D5D5D5] mb-3">
                        {event.date}
                      </p>
                    )}
                    <p className="font-ibm-plex text-xs text-[#C49A45]">
                      Click to view
                    </p>
                  </div>
                </div>

                {/* Coming Soon Overlay - On each card individually */}
                {index !== 0 && (
                  <div className="absolute inset-0 rounded-xl bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <h4 className="font-playfair text-2xl md:text-3xl text-white font-light">
                        Coming <span className="text-[#C49A45] font-bold">Soon</span>
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  )
}
