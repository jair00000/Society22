import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Services from "../components/sections/Services"
import Testimonials from "../components/sections/Testimonials"
import CTA from "../components/sections/CTA"
import Contact from "../components/sections/Contact"

export default function Home() {
  return (
    <PageWrapper>
      <SEO 
        title="Home" 
        description="Welcome to Society, your reliable web development partner." 
      />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
    </PageWrapper>
  )
}
