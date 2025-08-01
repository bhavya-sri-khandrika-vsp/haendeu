'use client';

import { useState, useEffect, useRef } from 'react';

export default function WorkshopSpaces() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSpace, setActiveSpace] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const spaces = [
    {
      id: 'cutting',
      name: 'Cutting Chamber',
      description: 'Where raw leather transforms into precise patterns with centuries-old techniques.',
      stats: { tools: '24', precision: '0.1mm', masters: '3' },
      image: 'https://readdy.ai/api/search-image?query=Professional%20leather%20cutting%20station%20with%20precision%20tools%2C%20large%20cutting%20table%20with%20luxury%20leather%20sheets%2C%20measuring%20instruments%20and%20patterns%2C%20bright%20workshop%20lighting%2C%20organized%20craftsman%20workspace&width=800&height=600&seq=cutting-chamber&orientation=landscape'
    },
    {
      id: 'stitching',
      name: 'Stitching Sanctuary',
      description: 'Hand-stitching perfection where every thread tells a story of dedication.',
      stats: { stitches: '2,400', thread: 'Silk', time: '18h' },
      image: 'https://readdy.ai/api/search-image?query=Intimate%20leather%20stitching%20workspace%20with%20traditional%20hand-stitching%20tools%2C%20golden%20silk%20threads%2C%20luxury%20handbag%20in%20progress%2C%20warm%20focused%20lighting%2C%20artisan%20hands%20working%20with%20precision&width=800&height=600&seq=stitching-sanctuary&orientation=landscape'
    },
    {
      id: 'finishing',
      name: 'Finishing Atelier',
      description: 'Final touches where craftsmanship meets artistry in perfect harmony.',
      stats: { layers: '7', polish: 'Premium', quality: '100%' },
      image: 'https://readdy.ai/api/search-image?query=Luxury%20leather%20finishing%20station%20with%20polishing%20tools%2C%20edge%20painting%20equipment%2C%20nearly%20completed%20premium%20handbags%2C%20professional%20lighting%20setup%2C%20meticulous%20attention%20to%20detail&width=800&height=600&seq=finishing-atelier&orientation=landscape'
    },
    {
      id: 'assembly',
      name: 'Assembly Studio',
      description: 'Where individual components unite to create timeless masterpieces.',
      stats: { components: '47', assembly: '6h', precision: 'Perfect' },
      image: 'https://readdy.ai/api/search-image?query=Clean%20assembly%20workshop%20with%20organized%20components%2C%20luxury%20handbag%20parts%20laid%20out%20systematically%2C%20assembly%20tools%20and%20hardware%2C%20bright%20professional%20lighting%2C%20structured%20craftsman%20environment&width=800&height=600&seq=assembly-studio&orientation=landscape'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #d97706 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-amber-100 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <span className="text-amber-800 text-sm uppercase tracking-widest font-light">Sacred Spaces</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-stone-900 mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Workshop Realms
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Each space in our atelier serves a sacred purpose, designed for specific crafts that demand absolute precision and artistry.
          </p>
        </div>

        {/* Interactive Spaces Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Space Navigation */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {spaces.map((space, index) => (
                <div
                  key={space.id}
                  onClick={() => setActiveSpace(index)}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Space Card */}
                  <div className={`p-8 rounded-2xl border-2 transition-all duration-500 ${
                    activeSpace === index 
                      ? 'bg-amber-600 text-white border-amber-600 shadow-2xl scale-105' 
                      : 'bg-white text-stone-900 border-stone-200 hover:border-amber-300 hover:shadow-xl hover:scale-102'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeSpace === index ? 'bg-white animate-pulse' : 'bg-amber-600'
                        }`}></div>
                        <h3 className="text-2xl font-light">{space.name}</h3>
                      </div>
                      <div className={`text-3xl font-bold opacity-20 transition-all duration-300 ${
                        activeSpace === index ? 'opacity-30 scale-110' : ''
                      }`}>
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                    </div>
                    
                    <p className={`leading-relaxed mb-6 transition-all duration-300 ${
                      activeSpace === index ? 'text-stone-100' : 'text-stone-600'
                    }`}>
                      {space.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(space.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className={`text-lg font-light transition-colors duration-300 ${
                            activeSpace === index ? 'text-white' : 'text-stone-900'
                          }`}>{value}</p>
                          <p className={`text-xs uppercase tracking-wide transition-colors duration-300 ${
                            activeSpace === index ? 'text-stone-200' : 'text-stone-500'
                          }`}>{key}</p>
                        </div>
                      ))}
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      activeSpace === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
                    }`}>
                      <i className={`ri-arrow-right-line text-xl ${
                        activeSpace === index ? 'text-white' : 'text-amber-600'
                      }`}></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Active Space Showcase */}
          <div className="lg:col-span-7">
            <div className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src={spaces[activeSpace].image}
                  alt={spaces[activeSpace].name}
                  className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                
                {/* Floating Space Info */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl transform group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl font-light text-stone-900 mb-2">{spaces[activeSpace].name}</h4>
                    <p className="text-stone-600 leading-relaxed">{spaces[activeSpace].description}</p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute top-6 right-6 flex space-x-2">
                  {spaces.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeSpace ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                      }`}
                    ></div>
                  ))}
                </div>

                {/* 360° View Button */}
                <button className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-light uppercase tracking-wide hover:bg-black/70 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <i className="ri-360-line mr-2"></i>
                  360° View
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border border-amber-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-amber-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}