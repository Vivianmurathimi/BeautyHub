import { Link } from "react-router-dom";

// --- Mock Data: Premium Salons ---
const salonDirectory = [
  { 
    id: 1, 
    name: "Texture & Tone Studios", 
    neighborhood: "Downtown", 
    rating: 4.9, 
    reviews: 312, 
    image: "https://images.unsplash.com/photo-1600948836101-f9ff5f58c73c?auto=format&fit=crop&q=80&w=800",
    tags: ["Luxury", "Natural Hair", "Color Specialists"]
  },
  { 
    id: 2, 
    name: "The Crown Collective", 
    neighborhood: "West End", 
    rating: 4.8, 
    reviews: 184, 
    image: "https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&q=80&w=800",
    tags: ["Minimalist", "Protective Styles", "Braiding Bar"]
  },
  { 
    id: 3, 
    name: "Oasis Beauty Lounge", 
    neighborhood: "Midtown", 
    rating: 4.7, 
    reviews: 95, 
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800",
    tags: ["Eco-Friendly", "Silk Press", "Treatments"]
  },
  { 
    id: 4, 
    name: "Vanguard Hair Artistry", 
    neighborhood: "Arts District", 
    rating: 5.0, 
    reviews: 420, 
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800",
    tags: ["Editorial", "Extensions", "Custom Color"]
  }
];

export default function Salons() {
  return (
    <div className="min-h-screen bg-[#f9f8f6] font-sans text-gray-900 pt-16 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-3">Salons</h1>
          <p className="text-gray-500 text-lg">Find the perfect space with the expertise you deserve</p>
        </div>

        {/* --- The Salon Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {salonDirectory.map((salon) => (
            <div key={salon.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              
              {/* Salon Image */}
              <div className="h-72 w-full overflow-hidden relative">
                <img 
                  src={salon.image} 
                  alt={salon.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center shadow-sm">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-sm font-bold">{salon.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({salon.reviews})</span>
                </div>
              </div>

              {/* Salon Details */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-medium mb-1">{salon.name}</h3>
                    <p className="text-gray-500 flex items-center text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                      {salon.neighborhood}
                    </p>
                  </div>
                </div>

                {/* Vibe / Speciality Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {salon.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to="/booking" 
                  className="block w-full text-center bg-transparent border border-gray-300 hover:border-black text-gray-800 hover:text-black hover:bg-gray-50 px-8 py-3.5 rounded-xl font-medium transition-colors"
                >
                  View Stylists & Book
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}