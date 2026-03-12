import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"
import CTA from "../components/sections/CTA"

export default function About() {
  return (
    <PageWrapper>
      <SEO
        title="About"
        description="Learn more about Society 22 and the people behind our curated gatherings."
      />

      <section
        className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about/renzi6.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full h-full bg-black/50 backdrop-blur-[2px] flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-6 text-center max-w-5xl w-full">
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-montserrat tracking-[0.25em] font-light uppercase drop-shadow-lg">
              ABOUT <span className="font-bold text-[#C49A45]">US</span>
            </h1>

            <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C49A45] to-transparent my-4"></div>

            <p className="text-gray-200 font-ibm-plex text-sm sm:text-lg md:text-xl tracking-[0.3em] uppercase font-light drop-shadow-md">
              Society 22
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0a0a0a] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="w-full">
              <img
                src="/images/about/renzi7.webp"
                alt="Renzi Keith Yanes"
                className="w-full h-[520px] md:h-[680px] object-cover object-top rounded-[18px] border border-[#C49A45]/30 shadow-[0_14px_34px_rgba(196,154,69,0.28)]"
                loading="lazy"
              />
            </div>

            <div className="w-full">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#C49A45] mb-8">
                About the Founder
              </h2>

              <div className="space-y-5 text-gray-200 font-ibm-plex text-base md:text-lg leading-relaxed font-light">
                <p>
                  Renzi Keith Yanes is an entrepreneur who believes that some of the most meaningful moments in life begin with a simple gathering.
                </p>
                <p>
                  With a background in design, business, and community-building, she has spent years creating spaces and experiences that bring people together. From crafting timeless jewelry through Lily & Co., designing warm and intentional living spaces with Cozier Interiors, to building an active sports community at Central Town Badminton Court, her work has always revolved around one idea: connection.
                </p>
                <p>Society 22 was born from that same philosophy.</p>
                <p>
                  In a world where social interactions are often rushed or superficial, she envisioned a space where people could slow down, meet new faces, share conversations, and form genuine connections through thoughtfully curated gatherings.
                </p>
                <p>
                  Society 22 is more than an events platform. It is a place where strangers can become friends, and where every gathering is designed to feel personal, intentional, and memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#050505] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug max-w-4xl mx-auto">
              Private Social Gatherings
              <br />
              For Meaningful Connection
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <article className="group text-center">
              <div className="overflow-hidden mb-6 rounded-[18px] border border-[#C49A45]/30 shadow-[0_12px_30px_rgba(196,154,69,0.24)]">
                <img
                  src="/images/about/Unique-venues-about-page.webp"
                  alt="Unique Venues"
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-4 text-white">Unique Venues</h3>
              <p className="font-ibm-plex text-gray-400 text-sm leading-relaxed font-light">
                Rooftops, gardens, poolside spaces, and occasionally hidden locations across Pampanga create a refreshing atmosphere for every gathering.
              </p>
            </article>

            <article className="group text-center">
              <div className="overflow-hidden mb-6 rounded-[18px] border border-[#C49A45]/30 shadow-[0_12px_30px_rgba(196,154,69,0.24)]">
                <img
                  src="/images/about/Curated-guest-about-page.webp"
                  alt="Curated Guests"
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-4 text-white">Curated Guests</h3>
              <p className="font-ibm-plex text-gray-400 text-sm leading-relaxed font-light">
                Each event brings together a balanced mix of professionals, creatives, entrepreneurs, and individuals open to meeting new people.
              </p>
            </article>

            <article className="group text-center">
              <div className="overflow-hidden mb-6 rounded-[18px] border border-[#C49A45]/30 shadow-[0_12px_30px_rgba(196,154,69,0.24)]">
                <img
                  src="/images/about/Natural-Connections-about-page.webp"
                  alt="Natural Connections"
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-4 text-white">Natural Connections</h3>
              <p className="font-ibm-plex text-gray-400 text-sm leading-relaxed font-light">
                Some attend to expand their network, while others simply come to enjoy the evening and have fun. Conversations flow naturally and meaningful connections often follow.
              </p>
            </article>
          </div>
        </div>
      </section>

        <CTA />
      </PageWrapper>
  )
}
