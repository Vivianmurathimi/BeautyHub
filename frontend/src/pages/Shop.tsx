import { useState } from "react";

// --- Mock Data: Premium Products ---
const inventory = [
  { 
    id: 1, 
    brand: "Ela De Pure", 
    name: "Moisturizing Shampoo 01", 
    price: "$28.00", 
    category: "Wash", 
    rating: 4.9,
    reviews: 128,
    img: "https://images.unsplash.com/photo-1608248593842-8021c6a8f107?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    brand: "Ela De Pure", 
    name: "Smoothing Conditioner 04", 
    price: "$32.00", 
    category: "Wash", 
    rating: 4.8,
    reviews: 94,
    img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    brand: "Crown Rituals", 
    name: "Deep Hydration Mask", 
    price: "$45.00", 
    category: "Treat", 
    rating: 5.0,
    reviews: 215,
    img: "https://images.unsplash.com/photo-1615397323282-59bc7dd2b75a?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    brand: "Lumière", 
    name: "Silk Press Serum", 
    price: "$38.00", 
    category: "Style", 
    rating: 4.7,
    reviews: 86,
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    brand: "Botanica", 
    name: "Scalp Renewal Oil", 
    price: "$42.00", 
    category: "Treat", 
    rating: 4.9,
    reviews: 302,
    img: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    brand: "Edge Control", 
    name: "Flawless Hold Pomade", 
    price: "$18.00", 
    category: "Style", 
    rating: 4.6,
    reviews: 411,
    img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800" 
  }
];

const categories = ["All", "Wash", "Treat", "Style", "Tools"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedProducts = activeCategory === "All" 
    ? inventory 
    : inventory.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f9f8f6] font-sans text-gray-900 pt-16 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-3">Shop</h1>
          <p className="text-gray-500 text-lg">Premium products recommended by professionals</p>
        </div>

        {/* --- Category Filter --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#111827] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              
              {/* Product Image Box */}
              <div className="bg-[#f2f0eb] rounded-2xl aspect-square mb-4 overflow-hidden relative flex items-center justify-center p-6">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover rounded-xl mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Quick Add Button (Shows on Hover) */}
                <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-white/90 backdrop-blur text-black py-3 rounded-xl text-sm font-medium hover:bg-black hover:text-white transition-colors shadow-sm">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">{product.brand}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="text-yellow-500 mr-1">★</span>
                    {product.rating}
                  </div>
                </div>
                <h3 className="text-lg font-medium leading-snug mb-2">{product.name}</h3>
                <p className="text-gray-900 mt-auto">{product.price}</p>
              </div>
              
            </div>
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No products found in this category.
          </div>
        )}

      </div>
    </div>
  );
}