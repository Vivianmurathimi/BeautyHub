export default function Booking() {
  return (
    <div className="min-h-screen bg-[#f9f8f6] font-sans text-gray-900 pt-16 pb-24 px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* --- Header & Search Bar --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-3">Book your perfect stylist</h1>
          <p className="text-gray-500 text-lg">Find texture-inclusive professionals in your area</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-20 flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 px-1">Service</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-600 outline-none focus:ring-2 focus:ring-black appearance-none">
              <option>Select service</option>
              <option>Braids & Twists</option>
              <option>Silk Press</option>
              <option>Color & Highlights</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 px-1">Location</label>
            <input type="text" placeholder="City or ZIP code" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 px-1">Date</label>
            <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 outline-none focus:ring-2 focus:ring-black" />
          </div>
          <button className="bg-[#111827] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-black transition-colors w-full md:w-auto h-[52px] flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            Search Stylists
          </button>
        </div>

        {/* --- Stylist Results Section --- */}
        <div>
          <h2 className="text-2xl font-medium mb-1">Available Stylists Near You</h2>
          <p className="text-gray-500 text-sm mb-8">2 professionals match your search</p>

          {/* Stylist Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row mb-6 hover:shadow-md transition-shadow">
            
            {/* Image Side */}
            <div className="md:w-72 h-72 md:h-auto">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bfd8c?auto=format&fit=crop&q=80&w=800" alt="Maya Thompson" className="w-full h-full object-cover" />
            </div>
            
            {/* Details Side */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-medium">Maya Thompson</h3>
                  <p className="text-gray-500">Texture & Tone Salon</p>
                  <p className="text-gray-400 text-sm mt-1">Natural Hair Specialist</p>
                </div>
                <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-md">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-gray-800 font-medium text-sm">4.9 <span className="text-gray-400 font-normal">(234)</span></span>
                </div>
              </div>
              
              <div className="mb-5 mt-2">
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">Texture Inclusive Certified</span>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                <span className="mr-6">1.2 mi</span>
                <span className="font-medium text-gray-700">Starting at $85+</span>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">Available Times</p>
                <div className="flex flex-wrap gap-2">
                  <button className="border border-gray-200 text-gray-600 rounded-lg px-4 py-2 text-sm hover:border-black hover:text-black transition-colors">Today 3:00 PM</button>
                  <button className="border border-gray-200 text-gray-600 rounded-lg px-4 py-2 text-sm hover:border-black hover:text-black transition-colors">Today 5:30 PM</button>
                  <button className="border border-gray-200 text-gray-600 rounded-lg px-4 py-2 text-sm hover:border-black hover:text-black transition-colors">Tomorrow 10:00 AM</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex gap-3 pt-6 border-t border-gray-100">
                <button className="flex-1 py-3 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">View Profile</button>
                <button className="flex-1 bg-[#111827] text-white py-3 rounded-xl text-sm font-medium hover:bg-black transition-colors flex justify-center items-center gap-2">
                  Book Now 
                  <span className="text-lg leading-none">&rsaquo;</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}