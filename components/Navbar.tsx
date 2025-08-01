
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`text-3xl font-bold tracking-tight transition-all duration-500 hover:scale-105 ${
            isScrolled ? 'text-black' : 'text-white drop-shadow-lg'
          }`} style={{ fontFamily: 'var(--font-pacifico)' }}>
            Haendeu
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Philosophy', href: '/philosophy' },
              { name: 'Collection', href: '/collection' },
              { name: 'Atelier', href: '/atelier' },
              { name: 'Editorial', href: '/editorial' },
              { name: 'Gallery', href: '/gallery' },
              { name: 'Stores', href: '/stores' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`text-sm font-light tracking-wide uppercase transition-all duration-300 relative group cursor-pointer ${
                  isScrolled 
                    ? 'text-black hover:text-amber-600' 
                    : 'text-white drop-shadow-sm hover:text-amber-400'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-amber-600' : 'bg-amber-400'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className={`hidden md:flex px-6 py-2 text-sm font-light tracking-wide uppercase transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer whitespace-nowrap ${
            isScrolled 
              ? 'bg-black text-white hover:bg-amber-600 shadow-md' 
              : 'bg-white/90 text-black hover:bg-amber-500 hover:text-white backdrop-blur-sm'
          }`}>
            Shop Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-6 h-6 flex flex-col justify-center items-center cursor-pointer group">
            <div className={`w-5 h-0.5 mb-1 transition-all duration-300 ${
              isScrolled ? 'bg-black' : 'bg-white drop-shadow-sm'
            } group-hover:w-6`}></div>
            <div className={`w-5 h-0.5 mb-1 transition-all duration-300 ${
              isScrolled ? 'bg-black' : 'bg-white drop-shadow-sm'
            } group-hover:w-6`}></div>
            <div className={`w-5 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-black' : 'bg-white drop-shadow-sm'
            } group-hover:w-6`}></div>
          </button>
        </div>
      </div>

      {/* Elegant bottom border */}
      <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 transition-opacity duration-700 ${
        isScrolled ? 'opacity-20' : 'opacity-0'
      }`}></div>
    </nav>
  );
}
