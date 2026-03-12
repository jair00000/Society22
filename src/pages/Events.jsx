import PageWrapper from "../components/layout/PageWrapper"
import EventsGrid from "../components/sections/EventsGrid"

export default function Events() {
  return (
    <PageWrapper>
      <section 
        className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/events/events-hero.webp')" }}
      >
        {/* Optional overlay to darken the background slightly */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Full-Width Dark Overlay wrapper for the content */}
        <div className="relative z-10 w-full h-full bg-black/50 backdrop-blur-[2px] flex items-center justify-center px-4">
          
          {/* Content Container */}
          <div className="flex flex-col items-center gap-6 text-center max-w-5xl w-full">
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-montserrat tracking-[0.25em] font-light uppercase drop-shadow-lg">
              <span className="font-bold text-[#C49A45]">Events</span>
            </h1>
            
            <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C49A45] to-transparent my-4"></div>
            
            <p className="text-gray-200 font-ibm-plex text-sm sm:text-lg md:text-xl tracking-[0.4em] uppercase font-light drop-shadow-md">
              Society 22
            </p>
          </div>
        </div>
      </section>

      <EventsGrid />
    </PageWrapper>
  )
}