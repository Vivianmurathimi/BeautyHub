import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.tsx";
import Booking from "./pages/Booking.tsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* The background and font settings wrap the whole app */}
      <div className="min-h-screen bg-[#f9f8f6] font-sans text-gray-900 selection:bg-gray-300">
        
        {/* The Navbar sits outside the Routes so it NEVER disappears */}
        <Navbar />

        {/* The Traffic Cop decides which page goes here */}
        <Routes>
          {/* If the URL is just the standard site, show Home */}
          <Route path="/" element={<Home />} />
          
          {/* If the URL has /booking, show the Booking page */}
          <Route path="/booking" element={<Booking />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}