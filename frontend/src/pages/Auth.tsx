import { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  // State to toggle between Login and Sign Up mode
  const [isLogin, setIsLogin] = useState(true);
  // State to track if a new user is signing up as a client or a professional
  const [userType, setUserType] = useState<"client" | "professional">("client");

  return (
    <div className="min-h-screen bg-white flex">
      
      {/* --- Left Side: Editorial Image (Hidden on small screens) --- */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1595426114652-3269b2d23b30?auto=format&fit=crop&q=80&w=1200" 
          alt="Beauty Portrait" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle dark overlay */}
        <div className="absolute bottom-12 left-12 text-white">
          <Link to="/" className="text-3xl font-medium tracking-tight mb-4 block">The Hair Hub</Link>
          <p className="text-lg text-white/90 max-w-md">Connect with top-tier professionals and discover your perfect look.</p>
        </div>
      </div>

      {/* --- Right Side: The Form --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24 bg-[#fcfbf9]">
        <div className="w-full max-w-md">
          
          {/* Mobile Logo (Only shows on phones) */}
          <Link to="/" className="text-2xl font-medium tracking-tight block lg:hidden mb-12 text-center">
            The Hair Hub
          </Link>

          {/* Header */}
          <h2 className="text-3xl font-medium mb-2">
            {isLogin ? "Welcome back" : "Create an account"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isLogin ? "Enter your details to access your account." : "Join our community of beauty enthusiasts and professionals."}
          </p>

          {/* User Type Toggle (Only visible if signing up) */}
          {!isLogin && (
            <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
              <button 
                onClick={() => setUserType("client")}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${userType === "client" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-800"}`}
              >
                I'm a Client
              </button>
              <button 
                onClick={() => setUserType("professional")}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${userType === "professional" ? "bg-[#111827] text-white shadow-sm" : "text-gray-500 hover:text-gray-800"}`}
              >
                I'm a Professional
              </button>
            </div>
          )}

          {/* The Form Fields */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Field (Only for Sign Up) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Maya Thompson"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                {isLogin && <a href="#" className="text-xs text-gray-500 hover:text-black hover:underline">Forgot password?</a>}
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button className="w-full bg-[#111827] text-white py-3.5 rounded-xl font-medium hover:bg-black transition-colors mt-4">
              {isLogin ? "Log In" : "Create Account"}
            </button>
          </form>

          {/* Toggle Login/Signup Footer */}
          <div className="mt-8 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-black font-medium hover:underline"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}