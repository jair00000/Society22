import { useEffect, useMemo, useState } from "react"

import PageWrapper from "../components/layout/PageWrapper"
import PostCard from "../components/ui/PostCard"
import SEO from "../seo/SEO"
import { fetchPublishedPosts } from "../utils/api"

export default function Events() {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    let isMounted = true

    async function loadEvents() {
      try {
        setIsLoading(true)
        setErrorMessage("")

        const data = await fetchPublishedPosts("event")

        if (!isMounted) return
        setEvents(data)
      } catch (error) {
        if (!isMounted) return
        setErrorMessage(error?.response?.data?.message || "Unable to load event posts right now.")
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadEvents()

    return () => {
      isMounted = false
    }
  }, [])

  const hasEvents = useMemo(() => events.length > 0, [events])

  return (
    <PageWrapper>
      <SEO
        title="Events"
        description="Discover upcoming and published Society 22 event experiences."
      />

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

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              Published Events
            </h2>
            <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Upcoming Gatherings
            </h3>
            <div className="w-24 h-[1px] bg-[#C49A45] mx-auto"></div>
          </div>

          {isLoading && <p className="text-[#D5D5D5] font-ibm-plex">Loading published events...</p>}
          {!isLoading && errorMessage && <p className="text-red-400 font-ibm-plex">{errorMessage}</p>}
          {!isLoading && !errorMessage && !hasEvents && (
            <p className="text-[#D5D5D5] font-ibm-plex">No published events yet.</p>
          )}

          {!isLoading && !errorMessage && hasEvents && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <PostCard key={event.id} post={event} type="event" />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}