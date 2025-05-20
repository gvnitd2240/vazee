import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MainNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full px-4 py-3 md:px-10 relative z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex flex-row justify-center items-center gap-1">
          {/* <Image
            src="/assets/logo.png"
            alt="Vazee Logo"
            width={80}
            height={80}
            className="w-20 h-20"
          /> */}
          <Link href="/" className="text-3xl md:text-3xl font-bold text-[#ae1198] hover:text-[#ae1198]">Vazee</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-[#ae1198]">
          <Link href="/about-us" className="text-xl font-bold text-[#ae1198] hover:text-[#ae1198]">About</Link>
          <Link href="/products" className="text-xl font-bold text-[#ae1198] hover:text-[#ae1198]">Products</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right-Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="px-6 pt-6 pb-10 flex flex-col gap-6 text-[rgba(26,38,85,1)] h-full">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-3xl text-gray-700">
              &times;
            </button>
          </div>
          <Link href="/about-us" className="text-lg hover:text-[##ae1198]-600" onClick={toggleMenu}>About</Link>
          <Link href="/products" className="text-lg hover:text-[##ae1198]-600" onClick={toggleMenu}>Products</Link>
        </div>
      </div>

      {/* Optional backdrop when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default MainNav;
