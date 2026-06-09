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
    <>
      <nav className="w-full bg-white fixed top-0 left-0 z-50">
        <div className="max-w-[1920px] mx-auto px-10 h-[100px] flex items-center justify-between relative">

          {/* Logo */}
          <a
            href="#home"
            className="text-black"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: "46px",
            }}
          >
            Elementum
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-black text-base hover:opacity-50 transition-opacity duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col justify-between cursor-pointer z-[100]"
            style={{ width: "45px", height: "10.5px" }}
          >
            <span
              className={`block w-full bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
              style={{ height: "1.5px" }}
            />

            <span
              className={`block w-full bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
              style={{ height: "1.5px" }}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <ul className="flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-black hover:opacity-50 transition-opacity duration-200"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "52px",
                    fontWeight: 400,
                    lineHeight: "100%",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}