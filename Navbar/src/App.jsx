import "./App.css";
import { useState } from "react";

function App() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <nav className="w-full p-4 bg-gray-800 text-white flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-2xl">My Navbar</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden bg-[#222] p-3 z-50"
          onClick={() => setPopup(!popup)}
        >
          {popup ? "❌" : "☰"}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white
        p-6 flex flex-col gap-6 z-40
        transform transition-transform duration-300
        ${popup ? "translate-x-0" : "-translate-x-full"}`}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
    </>
  );
}

export default App;
