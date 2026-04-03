import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Explore from "./pages/Explore.tsx"; // 1. Import the new page

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f9f8f6] font-sans text-gray-900 selection:bg-gray-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/explore" element={<Explore />} /> {/* 2. Add the route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}