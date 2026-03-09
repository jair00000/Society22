import Navbar from "./Navbar"
import Footer from "./Footer"

export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
