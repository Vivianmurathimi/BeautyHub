import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-20 pb-24">
        
      {/* --- Top Hero Area --- */}
      <div className="max-w-3xl mb-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
          Where inspiration meets <br className="hidden md:block" /> 
          <span className="text-blue-600">expertise next to you</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
          The comprehensive platform for texture-inclusive hair care. Book appointments, discover styles, shop products, and join our community of professionals.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/booking" className="bg-[#111827] hover:bg-black text-white px-8 py-3 rounded-md font-medium transition-all shadow-sm flex items-center justify-center">
              Book Now
            </Link>
          <button className="bg-white border border-blue-200 hover:border-blue-600 text-blue-600 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm">
            Explore Styles
          </button>
        </div>
      </div>

      {/* --- Section 1: The 4 Main Pillars --- */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Everything you need in one place
        </h2>
        <p className="text-slate-500 text-lg">
          Four distinct pathways designed to serve every aspect of the hair care ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        
        {/* Card 1: Direct Booking */}
          <Link to="/booking" className="bg-[#fcfbf9] rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group block">
            <div className="h-64 w-full overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" alt="Booking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-4 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
              <h3 className="text-xl font-medium mb-2">Direct Booking</h3>
              <p className="text-gray-500">Book your appointment in seconds with top-rated stylists</p>
            </div>
          </Link>

        {/* Card 2: Style Explorer */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="h-64 w-full overflow-hidden bg-slate-100">
            <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80" alt="Styles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mb-4 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Style Explorer</h3>
            <p className="text-slate-500">Discover thousands of looks curated by expert stylists.</p>
          </div>
        </div>

        {/* Card 3: Salon Directory */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="h-64 w-full overflow-hidden bg-slate-100">
            <img src="https://media.istockphoto.com/id/1423513079/photo/luxury-hairdressing-and-beauty-salon-interior-with-chairs-mirrors-and-spotlights.jpg?s=612x612&w=0&k=20&c=T2cw6HblRzWPOlxPHsMcV9KRV8aLGOaLojvLe3Yoi_A=" alt="Salon Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mb-4 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Salon Directory</h3>
            <p className="text-slate-500">Explore salons near you and find your perfect vibe.</p>
          </div>
        </div>

        {/* Card 4: The Shop */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="h-64 w-full overflow-hidden bg-slate-100">
            <img src="https://blankabrand.com/cdn/shop/articles/Start_your_own_private_label_hair_care_brand_5df92c83-7f97-481c-9077-951b2f975972.jpg?v=1748026115&width=1100" alt="Products" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mb-4 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">The Shop</h3>
            <p className="text-slate-500">Premium products recommended by professionals.</p>
          </div>
        </div>
      </div>
    </main>
  );
}