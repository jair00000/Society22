import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "../components/layout/ScrollToTop"
import Home from "../pages/Home"
import About from "../pages/About"
import Events from "../pages/Events"
import Projects from "../pages/Projects"
import Blog from "../pages/Blog"
import BlogDetail from "../pages/BlogDetail"
import EventDetail from "../pages/EventDetail"
import Contact from "../pages/Contact"
import Join from "../pages/Join"
import Payment from "../pages/Payment"
import NotFound from "../pages/NotFound"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Faqs from "../pages/Faqs"
import CookiePolicy from "../pages/CookiePolicy"
import TermsOfService from "../pages/TermsOfService"
import RefundPolicy from "../pages/RefundPolicy"

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}
