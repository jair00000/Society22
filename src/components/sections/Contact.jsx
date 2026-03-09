export default function Contact() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Inquiries
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6">
            Get In Touch
          </h3>
          <div className="w-24 h-[1px] bg-[#C49A45] mx-auto mb-8"></div>
          <p className="font-ibm-plex text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Have questions about our events or wish to inquire about private hosting? We would be delighted to assist you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#050505] border border-[#C49A45]/20 p-8 md:p-12 rounded-xl shadow-2xl">
          <form className="flex flex-col gap-6 font-ibm-plex">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm tracking-wider uppercase text-gray-400">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your full name" 
                  className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm tracking-wider uppercase text-gray-400">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Your email address" 
                  className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm tracking-wider uppercase text-gray-400">Subject</label>
              <input 
                type="text" 
                id="subject"
                placeholder="Inquiry topic" 
                className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm tracking-wider uppercase text-gray-400">Message</label>
              <textarea 
                id="message"
                placeholder="How can we help you?" 
                rows="5" 
                className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C49A45] transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-4 bg-[#C49A45] text-white py-4 px-8 rounded-sm font-bold tracking-widest uppercase hover:bg-[#A67C2F] transition-colors w-full md:w-auto md:self-end shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </section>
  )
}
