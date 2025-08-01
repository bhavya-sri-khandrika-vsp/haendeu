
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer ref={footerRef} className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Haendeu
            </h3>
            <p className="text-stone-400 leading-relaxed italic">
              "Crafted in silence, carried in style."
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light mb-6 uppercase tracking-wide">Navigation</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                Home
              </Link>
              <Link href="/philosophy" className="block text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                Philosophy
              </Link>
              <Link href="/collection" className="block text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                Collection
              </Link>
              <Link href="/atelier" className="block text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                Atelier
              </Link>
              <Link href="/editorial" className="block text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                Editorial
              </Link>
              <Link href="/gallery" className="block text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                Gallery
              </Link>
            </div>
            
            <div className="mt-8 space-y-3">
              <h5 className="text-sm font-light uppercase tracking-wide text-stone-500">Quick Links</h5>
              <Link href="/care" className="block text-stone-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                Care Guide
              </Link>
              <Link href="/shipping" className="block text-stone-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                Shipping
              </Link>
              <Link href="/returns" className="block text-stone-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                Returns
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-light mb-6 uppercase tracking-wide">Stay Inspired</h4>
            <form onSubmit={handleNewsletterSubmit} className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="flex-1 bg-transparent border-b border-stone-600 py-2 px-0 text-white placeholder-stone-500 focus:border-amber-600 focus:outline-none transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="ml-4 bg-amber-600 text-white px-6 py-2 text-sm font-light tracking-wide uppercase hover:bg-amber-700 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-stone-600 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-all duration-300 group cursor-pointer">
                <i className="ri-instagram-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-stone-600 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-all duration-300 group cursor-pointer">
                <i className="ri-pinterest-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-stone-600 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-all duration-300 group cursor-pointer">
                <i className="ri-youtube-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t border-stone-800 pt-8 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-stone-500 text-sm">
            © 2024 Haendeu. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
