import { useState } from "react";
import { Link } from "react-router-dom";

// --- Mock Data: Our Style Gallery ---
const styleGallery = [
  { id: 1, title: "Boho Knotless Braids", category: "Braids", img: "https://images.unsplash.com/photo-1595426114652-3269b2d23b30?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Voluminous Silk Press", category: "Silk Press", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Copper Color Block", category: "Color", img: "https://images.unsplash.com/photo-1574344445831-218413b5ec18?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Wash & Go Definition", category: "Natural", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Platinum Blonde Coils", category: "Color", img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Goddess Locs", category: "Braids", img: "https://images.unsplash.com/photo-1567566276326-2a6288644558?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Defined Twist Out", category: "Natural", img: "https://images.unsplash.com/photo-1531123897727-8f129e1bfd8c?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Sleek Ponytail", category: "Silk Press", img: "https://images.unsplash.com/photo-1615163012209-6616016e344e?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", "Braids", "Natural", "Color", "Silk Press"];

export default function Explore() {
  // This state Remembers which filter button the user clicked
  const [activeFilter, setActiveFilter] = useState("All");

  // This filters the images based on the active button
  const displayedStyles = activeFilter === "All" 
    ? styleGallery 
    : styleGallery.filter(style => style.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#f9f8f6] font-sans text-gray-900 pt-16 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-3">Style Explorer</h1>
          <p className="text-gray-500 text-lg">Discover your next look from top-rated professionals</p>
        </div>

        {/* --- The Filter Bar --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-[#111827] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- The Masonry Grid --- */}
        {/* We use CSS columns to create the perfect Pinterest stagger effect */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {displayedStyles.map((style) => (
            <div key={style.id} className="relative group break-inside-avoid rounded-2xl overflow-hidden bg-gray-200">
              <img 
                src={style.img} 
                alt={style.title} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* --- The Dark Hover Overlay --- */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-1">{style.category}</span>
                <h3 className="text-white text-xl font-medium mb-4">{style.title}</h3>
                <Link 
                  to="/booking" 
                  className="bg-white text-black text-center py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Book this Style
                </Link>
              </div>
            </div>
          ))}
        </div>

        {displayedStyles.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No styles found for this category yet.
          </div>
        )}

      </div>
    </div>
  );
}