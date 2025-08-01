'use client';

import { useState, useEffect, useRef } from 'react';

export default function AtelierHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Dynamic Background with Mouse Parallax */}
      <div 
        className="absolute inset-0 scale-110 transform transition-transform duration-300"
        style={{
          transform: `translateY(${parallaxOffset}px) translateX(${mousePosition.x * 0.1 - 5}px) scale(1.1)`,
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%), 
                          url('https://readdy.ai/api/search-image?query=Spectacular%20luxury%20leather%20workshop%20with%20dramatic%20lighting%2C%20master%20craftsman%20hands%20working%20on%20premium%20handbag%2C%20golden%20hour%20light%20streaming%20through%20industrial%20windows%20creating%20magical%20atmosphere%2C%20tools%20and%20leather%20pieces%20elegantly%20arranged%2C%20cinematic%20depth%20of%20field&width=1920&height=1200&seq=atelier-main-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: `${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%`
        }}
      />

      {/* Animated Geometric Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-amber-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-white/10 transform rotate-45 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-600/10 rounded-full animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-random opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-${Math.floor(Math.random() * 3) + 1} h-${Math.floor(Math.random() * 3) + 1} bg-amber-400 rounded-full blur-sm`}></div>
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center h-full px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left Content - Text */}
            <div className="col-span-12 lg:col-span-7">
              {/* Animated Badge */}
              <div className={`inline-flex items-center space-x-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-amber-400/30 mb-8 transition-all duration-1500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm uppercase tracking-widest">Crafted by Hand</span>
              </div>

              {/* Main Heading with Morphing Effect */}
              <div className="mb-8 overflow-hidden">
                <h1 className={`text-7xl md:text-8xl font-light leading-tight text-white transition-all duration-2000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`} style={{ fontFamily: 'var(--font-pacifico)' }}>
                  <span className={`inline-block transition-all duration-1000 delay-300 ${
                    isLoaded ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'
                  }`}>The</span>{' '}
                  <span className={`inline-block bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text text-transparent transition-all duration-1000 delay-600 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>Atelier</span>
                </h1>
              </div>

              {/* Subtitle with Revealing Animation */}
              <div className={`mb-12 transition-all duration-1500 delay-900 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-stone-200 max-w-2xl">
                  Step into our sacred workshop where tradition meets innovation. 
                  <span className="block mt-4 text-amber-300">Every masterpiece begins with a single stitch.</span>
                </p>
              </div>

              {/* Interactive CTA Section */}
              <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1500 delay-1200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <button className="group relative overflow-hidden bg-amber-600 text-white px-8 py-4 text-sm font-light uppercase tracking-widest hover:bg-amber-700 transition-all duration-500 cursor-pointer whitespace-nowrap">
                  <span className="relative z-10">Book Atelier Tour</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
                
                <button className="group flex items-center space-x-3 text-white hover:text-amber-300 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:border-amber-300 group-hover:scale-110 transition-all duration-300">
                    <i className="ri-play-fill text-lg group-hover:translate-x-0.5 transition-transform duration-300"></i>
                  </div>
                  <span className="text-lg font-light">Watch Our Story</span>
                </button>
              </div>
            </div>

            {/* Right Content - Floating Workshop Preview */}
            <div className="col-span-12 lg:col-span-5">
              <div className={`relative transition-all duration-2000 delay-1000 ${
                isLoaded ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-6'
              }`}>
                {/* Main Workshop Image */}
                <div className="relative group cursor-pointer">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Close-up%20of%20artisan%20hands%20crafting%20luxury%20leather%20handbag%2C%20detailed%20stitching%20work%20in%20progress%2C%20premium%20tools%20and%20golden%20thread%2C%20warm%20workshop%20lighting%2C%20masterful%20craftsmanship%20focus%2C%20intimate%20workshop%20scene%20with%20shallow%20depth%20of%20field&width=600&height=700&seq=workshop-preview&orientation=portrait"
                    alt="Workshop Preview"
                    className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl group-hover:from-black/30 transition-all duration-500"></div>
                  
                  {/* Floating Workshop Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl transform group-hover:scale-110 transition-all duration-500">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                        <i className="ri-time-line text-white text-xl"></i>
                      </div>
                      <div>
                        <p className="text-2xl font-light text-black">72h</p>
                        <p className="text-sm text-stone-600 uppercase tracking-wide">Avg. Creation</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Artisan Count */}
                  <div className="absolute -top-6 -right-6 bg-black/90 backdrop-blur-md p-4 rounded-full shadow-xl transform group-hover:rotate-12 transition-all duration-500">
                    <div className="text-center">
                      <p className="text-xl font-light text-amber-400">12</p>
                      <p className="text-xs text-white uppercase">Masters</p>
                    </div>
                  </div>
                </div>

                {/* Floating Mini Gallery */}
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 space-y-4 hidden xl:block">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-16 h-16 rounded-full overflow-hidden border-2 border-white/50 shadow-lg hover:scale-125 transition-all duration-300 cursor-pointer`}
                         style={{ animationDelay: `${i * 200}ms` }}>
                      <img 
                        src={`https://readdy.ai/api/search-image?query=Luxury%20leather%20crafting%20detail%20$%7Bi%7D%2C%20premium%20handbag%20construction%2C%20artisan%20workshop%20tools%2C%20golden%20lighting%2C%20professional%20craftsmanship%20focus&width=100&height=100&seq=mini-gallery-${i}&orientation=squarish`}
                        alt={`Workshop Detail ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`flex flex-col items-center cursor-pointer group transition-all duration-1500 delay-1500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4 group-hover:text-amber-400 transition-colors duration-300">
            Explore Workshop
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-pulse"></div>
          <div className="mt-2 animate-bounce group-hover:animate-pulse transition-all duration-300">
            <i className="ri-arrow-down-line text-xl text-amber-400"></i>
          </div>
        </div>
      </div>
    </section>
  );
}