
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Static particle positions to avoid hydration mismatch
  const particles = [
    { left: 15, top: 25, delay: 0.5, duration: 3.5 },
    { left: 85, top: 45, delay: 1.2, duration: 4.1 },
    { left: 25, top: 75, delay: 2.1, duration: 3.8 },
    { left: 75, top: 15, delay: 0.8, duration: 4.5 },
    { left: 45, top: 85, delay: 1.8, duration: 3.2 },
    { left: 65, top: 35, delay: 2.5, duration: 4.2 },
    { left: 35, top: 55, delay: 1.5, duration: 3.9 },
    { left: 55, top: 25, delay: 3.2, duration: 3.6 },
    { left: 15, top: 65, delay: 0.9, duration: 4.3 },
    { left: 85, top: 75, delay: 2.8, duration: 3.4 },
    { left: 25, top: 45, delay: 1.6, duration: 4.0 },
    { left: 75, top: 65, delay: 3.1, duration: 3.7 },
    { left: 45, top: 15, delay: 0.7, duration: 4.4 },
    { left: 65, top: 85, delay: 2.3, duration: 3.3 },
    { left: 35, top: 25, delay: 1.9, duration: 4.1 },
    { left: 55, top: 75, delay: 2.7, duration: 3.8 },
    { left: 15, top: 45, delay: 1.1, duration: 4.2 },
    { left: 85, top: 25, delay: 3.4, duration: 3.5 },
    { left: 25, top: 65, delay: 0.6, duration: 4.0 },
    { left: 75, top: 45, delay: 2.0, duration: 3.9 }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://readdy.ai/api/search-image?query=Elegant%20luxury%20handbag%20on%20marble%20surface%20with%20golden%20studio%20lighting%2C%20premium%20leather%20texture%20with%20soft%20shadows%2C%20minimalist%20background%20with%20warm%20ambient%20glow%2C%20high-end%20fashion%20photography%20with%20artistic%20lighting%20and%20sophisticated%20composition&width=1920&height=1080&seq=hero-poster&orientation=landscape"
        >
          <source src="https://readdy.ai/api/search-video?query=luxury handbag rotating in golden studio lighting with premium leather texture and elegant shadows, cinematic fashion advertisement with smooth rotation and sophisticated background&width=1920&height=1080&seq=hero-video1" type="video/mp4" />
          <source src="https://readdy.ai/api/search-video?query=premium leather handbag showcase with soft lighting, elegant rotation and luxury fashion presentation with minimal background&width=1920&height=1080&seq=hero-video2" type="video/mp4" />
        </video>
        
        {/* Fallback animated background if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <div 
            className="absolute inset-0 opacity-40 animate-float"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20handbag%20floating%20in%20golden%20studio%20lighting%20with%20premium%20leather%20texture%2C%20elegant%20minimalist%20background%20with%20warm%20ambient%20glow%20and%20soft%20shadows%2C%20high-end%20fashion%20photography%20with%20sophisticated%20artistic%20composition%20and%20cinematic%20quality&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
        
        {/* Fixed floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>

        {/* Animated handbag element */}
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-20 hidden lg:block">
          <div className="w-64 h-64 animate-float">
            <img 
              src="https://readdy.ai/api/search-image?query=Elegant%20luxury%20handbag%20silhouette%20in%20golden%20lighting%2C%20premium%20leather%20texture%20with%20sophisticated%20design%2C%20minimalist%20style%20with%20clean%20lines%20and%20refined%20details%2C%20high-end%20fashion%20accessory%20with%20timeless%20appeal%20and%20artistic%20shadows&width=300&height=300&seq=floating-bag&orientation=squarish"
              alt=""
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 flex items-center justify-center h-full text-white transition-all duration-2000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center max-w-4xl px-6">
          <div className="mb-8">
            <div className="w-24 h-px bg-white/60 mx-auto mb-6 animate-pulse"></div>
          </div>
          
          <h1 className={`text-7xl md:text-8xl font-light mb-6 tracking-tight transition-all duration-1500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ fontFamily: 'var(--font-pacifico)' }}>
            An Icon Reimagined
          </h1>
          
          <p className={`text-xl md:text-2xl font-light mb-12 leading-relaxed opacity-90 transition-all duration-1500 delay-300 ${
            isLoaded ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Luxury, handcrafted to perfection. Where fashion meets legacy.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1500 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button className="relative overflow-hidden group bg-white text-black px-8 py-4 text-sm font-light tracking-wide uppercase hover:bg-amber-600 hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </button>
            
            <button className="relative overflow-hidden group border border-white text-white px-8 py-4 text-sm font-light tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 cursor-pointer whitespace-nowrap">
              <span className="relative z-10 flex items-center gap-2">
                <i className="ri-play-circle-line w-4 h-4 flex items-center justify-center"></i>
                Watch the Film
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </button>
          </div>

          <div className="mt-16">
            <div className="w-px h-8 bg-white/60 mx-auto mb-2 animate-pulse"></div>
            <p className="text-xs uppercase tracking-widest text-white/70">Discover More</p>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div className="flex flex-col items-center animate-bounce cursor-pointer group">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent mb-2 group-hover:h-16 transition-all duration-300"></div>
          <div className="w-6 h-10 border-2 border-white rounded-full flex flex-col items-center justify-start py-2 group-hover:border-amber-400 transition-colors duration-300">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce group-hover:bg-amber-400 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Luxury brand elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white/40 hidden lg:block">
        <div className="transform -rotate-90">
          <p className="text-xs uppercase tracking-widest">Luxury Craftsmanship</p>
        </div>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white/40 hidden lg:block">
        <div className="transform rotate-90">
          <p className="text-xs uppercase tracking-widest">Since 2024</p>
        </div>
      </div>
    </section>
  );
}
