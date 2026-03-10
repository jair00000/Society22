import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Projects from "../pages/Projects"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Faqs from "../pages/Faqs"
import CookiePolicy from "../pages/CookiePolicy"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}
