'use client';

import { useState, useEffect, useRef } from 'react';

export default function PhilosophyHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-stone-900">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 scale-110 transform"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Ethereal%20luxury%20workshop%20with%20floating%20leather%20pieces%20and%20golden%20light%20rays%20streaming%20through%20tall%20windows%2C%20mystical%20atmosphere%20with%20craftsmanship%20tools%20suspended%20in%20air%2C%20sophisticated%20artistic%20composition%20with%20warm%20amber%20lighting%20and%20dreamy%20workshop%20environment&width=1920&height=1200&seq=philosophy-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-amber-400/40 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white px-6">
        <div className="text-center max-w-6xl">
          {/* Animated Top Line */}
          <div className={`mb-8 transition-all duration-2000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto animate-pulse"></div>
          </div>

          {/* Main Heading with Staggered Animation */}
          <div className="mb-12 overflow-hidden">
            <h1 className={`text-8xl md:text-9xl font-light tracking-tight transition-all duration-1500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ fontFamily: 'var(--font-pacifico)' }}>
              <span className={`inline-block transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>Our</span>{' '}
              <span className={`inline-block transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>Philosophy</span>
            </h1>
          </div>

          {/* Subtitle with Typewriter Effect */}
          <div className={`mb-16 transition-all duration-1500 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-stone-200 max-w-4xl mx-auto">
              Where ancient wisdom meets modern sophistication,{' '}
              <span className="text-amber-400">every stitch tells a story</span> of dedication, 
              passion, and the pursuit of timeless beauty.
            </p>
          </div>

          {/* Animated Quote */}
          <div className={`mb-20 transition-all duration-1500 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <i className="ri-double-quotes-l text-6xl text-amber-400/40 absolute -top-8 -left-8"></i>
              <blockquote className="text-xl md:text-2xl font-light italic text-stone-300 max-w-3xl mx-auto leading-relaxed">
                True luxury is not about owning the most expensive things, 
                but about appreciating the beauty in every carefully considered detail.
              </blockquote>
              <i className="ri-double-quotes-r text-6xl text-amber-400/40 absolute -bottom-8 -right-8"></i>
            </div>
            <cite className="block mt-8 text-amber-400 text-sm uppercase tracking-widest">
              — Master Artisan, Haendeu Atelier
            </cite>
          </div>

          {/* Interactive Scroll Indicator */}
          <div className={`transition-all duration-1500 delay-1200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex flex-col items-center cursor-pointer group">
              <p className="text-sm uppercase tracking-widest mb-4 text-stone-400 group-hover:text-amber-400 transition-colors duration-300">
                Discover Our Beliefs
              </p>
              <div className="w-px h-16 bg-gradient-to-b from-amber-400 via-stone-400 to-transparent animate-pulse group-hover:h-20 transition-all duration-300"></div>
              <div className="mt-2 animate-bounce group-hover:animate-pulse">
                <i className="ri-arrow-down-line text-2xl text-amber-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className={`transform -rotate-90 transition-all duration-2000 delay-800 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <p className="text-xs uppercase tracking-widest text-stone-400">Crafted with Purpose</p>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className={`transform rotate-90 transition-all duration-2000 delay-800 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <p className="text-xs uppercase tracking-widest text-stone-400">Heritage & Innovation</p>
        </div>
      </div>
    </section>
  );
}