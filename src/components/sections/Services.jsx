import { HiCheck } from "react-icons/hi"

export default function Services() {
  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#C49A45] font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Exclusive Access
          </h2>
          <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6">
            Society 22 Seating Plan
          </h3>
          <div className="w-24 h-[1px] bg-[#C49A45] mx-auto mb-8"></div>
          <p className="font-ibm-plex text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            Choose your level of experience. Each tier offers a curated set of benefits designed to make your evening unforgettable.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          
          {/* Silver Tier */}
          <div className="bg-[#0a0a0a] border border-[#C49A45]/20 rounded-xl p-8 flex flex-col relative overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-[#C49A45] text-black text-xs font-bold tracking-widest uppercase py-1 px-4 rounded-sm inline-block w-max mb-6">
              Starter
            </div>
            <h4 className="font-playfair text-3xl mb-2">Silver</h4>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-playfair text-[#C49A45] text-2xl">₱</span>
              <span className="font-playfair text-[#C49A45] text-5xl font-bold">499</span>
            </div>
            
            <ul className="flex-1 space-y-4 mb-10 font-ibm-plex text-gray-300 text-sm font-light">
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>General Admission Access</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Standard Event Wristband</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Access to open social areas</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Complimentary Welcome Drink</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-md border border-[#C49A45] text-gray-300 font-ibm-plex font-medium tracking-widest text-sm uppercase hover:bg-[#C49A45] hover:text-black transition-colors">
              Reserve Seat
            </button>
          </div>

          {/* Gold Tier (Highlighted) */}
          <div className="bg-[#0a0a0a] border border-[#C49A45] rounded-xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(196,154,69,0.15)] transform md:-translate-y-4 transition-transform duration-300 hover:-translate-y-6 z-10">
            <div className="bg-[#C49A45] text-black text-xs font-bold tracking-widest uppercase py-1 px-4 rounded-sm inline-block w-max mb-6">
              Most Popular
            </div>
            <h4 className="font-playfair text-3xl mb-2">Gold</h4>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-playfair text-[#C49A45] text-2xl">₱</span>
              <span className="font-playfair text-[#C49A45] text-5xl font-bold">999</span>
            </div>
            
            <ul className="flex-1 space-y-4 mb-10 font-ibm-plex text-gray-300 text-sm font-light">
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Priority Admission Access</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Premium Event Wristband</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Access to exclusive Gold Lounge</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Complimentary Welcome Drink & Appetizers</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Priority queue for event activities</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-md bg-[#C49A45] text-black font-ibm-plex font-medium tracking-widest text-sm uppercase hover:bg-[#A67C2F] transition-colors">
              Reserve Seat
            </button>
          </div>

          {/* VIP Tier */}
          <div className="bg-[#0a0a0a] border border-[#C49A45]/20 rounded-xl p-8 flex flex-col relative overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-[#C49A45] text-black text-xs font-bold tracking-widest uppercase py-1 px-4 rounded-sm inline-block w-max mb-6">
              Premium (Limited)
            </div>
            <h4 className="font-playfair text-3xl mb-2">VIP</h4>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-playfair text-[#C49A45] text-2xl">₱</span>
              <span className="font-playfair text-[#C49A45] text-5xl font-bold">1,999</span>
            </div>
            
            <ul className="flex-1 space-y-4 mb-10 font-ibm-plex text-gray-300 text-sm font-light">
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>VIP Fast Lane Entrance</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>VIP Event Wristband</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Reserved premium seating area</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Unlimited premium drinks & catered food</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Exclusive networking with special guests</span>
              </li>
              <li className="flex gap-3">
                <HiCheck className="text-[#C49A45] text-lg shrink-0 mt-0.5" />
                <span>Professional Photo (1 edited soft-copy)</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-md border border-[#C49A45] text-gray-300 font-ibm-plex font-medium tracking-widest text-sm uppercase hover:bg-[#C49A45] hover:text-black transition-colors">
              Reserve Seat
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
