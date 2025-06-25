import React, { useState } from "react";
import CloseIcon from "./Icons/CloseIcon";
import MenuIcon from "./Icons/MenuIcon";

interface NavLink {
  text: string;
  url: string;
}

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { text: 'Inicio', url: '#' },
    { text: 'Sobre nosotros', url: '#' },
    { text: 'Contactanos', url: '#' },
  ];

  return (
    <header className="bg-white text-gray-900 shadow-sm font-sans">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-3xl font-black tracking-wider">
            SANAT
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.text} href={link.url} className="text-lg font-bold hover:text-gray-600 transition-colors">
                {link.text}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <a href="tel:+19855518386" className="hidden md:block bg-gray-900 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-700 transition-colors">
            +19 855 518 386
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a key={link.text} href={link.url} className="text-lg font-bold hover:text-gray-600 transition-colors">
                  {link.text}
                </a>
              ))}
              <a href="tel:+19855518386" className="w-full text-center bg-gray-900 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-700 transition-colors">
                +19 855 518 386
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}