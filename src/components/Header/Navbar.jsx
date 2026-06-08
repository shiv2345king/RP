import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ's", href: "#faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ height: "100px" }}>
      <div className="max-w-[1920px] mx-auto px-10 h-full flex items-center justify-between relative">

        {/* Logo */}
        <a href="#home" className="text-black"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "28px", fontWeight: 400, lineHeight: "46px" }}>
          Elementum
        </a>

        {/* Desktop nav links — centered */}
        <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}
                className="text-black text-base font-normal hover:opacity-50 transition-opacity duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — only on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-between"
          style={{ width: "45px", height: "10.5px" }}
        >
          <span className="block w-full bg-black" style={{ height: "1.5px" }} />
          <span className="block w-full bg-black" style={{ height: "1.5px" }} />
        </button>

        {/* Desktop — 2-line icon on right (clickable) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="hidden md:flex flex-col justify-between cursor-pointer"
          style={{ width: "45px", height: "10.5px" }}
        >
          <span className="block w-full bg-black" style={{ height: "1.5px" }} />
          <span className="block w-full bg-black" style={{ height: "1.5px" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-10 py-6 relative z-50">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}
                  className="text-black text-lg font-normal hover:opacity-50 transition-opacity duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}