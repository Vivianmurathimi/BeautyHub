import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-5 bg-white border-b border-gray-100 flex justify-between items-center sticky top-0 z-50">
      
      {/* 1. Logo - Wrapped in a Link so it goes back Home! */}
      <Link to="/" className="text-xl font-bold tracking-wide cursor-pointer">
        <span className="text-slate-600">The BeautyHub</span>
      </Link>

      {/* Middle Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium">Home</Link>
        <Link to="/booking" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Book Now</Link>
        <Link to="/explore" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Explore Styles</Link>
        <Link to="/salons" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Salons</Link>
        <Link to="/shop" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Shop</Link>
      </div>

      {/* Right Side: Icons + Auth Buttons */}
      <div className="flex items-center space-x-5 text-slate-600">
        <button className="hover:text-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
        </button>
        
        <button className="hover:text-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
        </button>

        <div className="h-5 w-px bg-gray-200 hidden md:block"></div>

        {/* 3. The Login / Sign Up Buttons */}
          <div className="flex space-x-4 items-center">
            <Link to="/auth" className="hidden md:block text-gray-600 hover:text-black font-medium transition-colors duration-200">
              Log In
            </Link>
            <Link to="/auth" className="bg-[#111827] hover:bg-black text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-sm">
              Sign Up
            </Link>
          </div>
      </div>

    </nav>
  );
}