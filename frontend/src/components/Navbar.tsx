export default function Navbar() {
  return (
    <nav className="w-full px-8 py-5 bg-white border-b border-gray-100 flex justify-between items-center sticky top-0 z-50">
      
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide cursor-pointer">
        <span className="text-slate-600">The BeutyHub</span>
      </div>

      {/* Middle Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Book Now</a>
        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Explore Styles</a>
        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Salons</a>
        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Shop</a>
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

        {/* Log In & Register Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Log In</button>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">Register</button>
        </div>
      </div>

    </nav>
  );
}