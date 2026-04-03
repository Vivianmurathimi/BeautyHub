import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Explore from "./pages/Explore";
import Salons from "./pages/Salons.tsx"; 

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f9f8f6] font-sans text-gray-900 selection:bg-gray-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/salons" element={<Salons />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}