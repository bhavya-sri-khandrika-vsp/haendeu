'use client';

import { useState, useEffect, useRef } from 'react';

export default function MaterialsJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollPosition(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const materials = [
    {
      name: 'Tuscany Leather',
      origin: 'Florence, Italy',
      journey: 'From the rolling hills of Tuscany to our atelier',
      description: 'Full-grain leather from heritage tanneries, aged naturally using traditional methods passed down through generations.',
      characteristics: ['Natural grain patterns', 'Vegetable tanned', 'Ages beautifully', 'Sustainable sourcing'],
      image: 'https://readdy.ai/api/search-image?query=Premium%20Tuscany%20leather%20hides%20in%20traditional%20Italian%20tannery%2C%20natural%20leather%20textures%20with%20beautiful%20grain%20patterns%2C%20warm%20golden%20lighting%2C%20artisanal%20leather%20processing%20environment&width=600&height=400&seq=tuscany-leather&orientation=landscape',
      color: 'amber',
      icon: 'ri-leaf-line'
    },
    {
      name: 'Swiss Hardware',
      origin: 'Geneva, Switzerland',
      journey: 'Precision-crafted in Swiss workshops',
      description: 'Premium hardware components manufactured with Swiss precision, featuring 18k gold plating and corrosion-resistant finishes.',
      characteristics: ['18k gold plated', 'Precision engineered', 'Corrosion resistant', 'Swiss quality'],
      image: 'https://readdy.ai/api/search-image?query=Precision%20Swiss%20hardware%20manufacturing%2C%20gold-plated%20luxury%20bag%20components%2C%20detailed%20metalwork%20and%20engineering%2C%20professional%20Swiss%20craftsmanship%20workshop%20environment&width=600&height=400&seq=swiss-hardware&orientation=landscape',
      color: 'yellow',
      icon: 'ri-settings-3-line'
    },
    {
      name: 'Silk Thread',
      origin: 'Lyon, France',
      journey: 'Woven by French silk masters',
      description: 'Hand-spun silk threads from Lyon\'s historic silk district, known for their strength, luster, and durability in luxury craftsmanship.',
      characteristics: ['Hand-spun quality', 'Superior strength', 'Natural luster', 'Heritage craftsmanship'],
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20silk%20thread%20spools%20in%20French%20workshop%2C%20golden%20silk%20threads%20with%20natural%20luster%2C%20traditional%20French%20silk%20manufacturing%2C%20detailed%20textile%20craftsmanship%20scene&width=600&height=400&seq=silk-thread&orientation=landscape',
      color: 'purple',
      icon: 'ri-thread-line'
    },
    {
      name: 'Artisan Tools',
      origin: 'Various Masters',
      journey: 'Crafted by generations of toolmakers',
      description: 'Hand-forged tools passed down through generations of master craftsmen, each tool perfectly balanced and honed for specific techniques.',
      characteristics: ['Hand-forged steel', 'Ergonomic design', 'Lifetime durability', 'Master crafted'],
      image: 'https://readdy.ai/api/search-image?query=Collection%20of%20traditional%20leather%20crafting%20tools%2C%20hand-forged%20artisan%20implements%2C%20detailed%20craftsmanship%20tools%20arrangement%2C%20professional%20workshop%20tool%20display%20with%20warm%20lighting&width=600&height=400&seq=artisan-tools&orientation=landscape',
      color: 'slate',
      icon: 'ri-hammer-line'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: 'from-amber-400 to-amber-600',
      yellow: 'from-yellow-400 to-yellow-600', 
      purple: 'from-purple-400 to-purple-600',
      slate: 'from-slate-400 to-slate-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${getColorClasses(materials[i % materials.length].color)} blur-xl`}></div>
          </div>
        ))}

        {/* Journey Path */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-amber-900/20 backdrop-blur-md px-6 py-2 rounded-full border border-amber-600/30 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-300 text-sm uppercase tracking-widest font-light">Material Origins</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Journey of Excellence
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            From the finest workshops across Europe, each material travels a path of heritage and craftsmanship to create Haendeu masterpieces.
          </p>
        </div>

        {/* Materials Map Layout */}
        <div className="relative">
          {/* Central Hub */}
          <div className="flex justify-center mb-16">
            <div className={`relative transition-all duration-1500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}>
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <i className="ri-home-heart-line text-3xl text-white mb-1"></i>
                  <p className="text-xs text-amber-100 uppercase tracking-wide">Atelier</p>
                </div>
              </div>
              
              {/* Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Material Cards in Circular Layout */}
          <div className="relative">
            {materials.map((material, index) => {
              const angle = (index * 90) - 45; // Position cards in corners
              const radius = 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  }}
                >
                  <div
                    onClick={() => setActiveMaterial(index)}
                    className={`group cursor-pointer transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } ${
                      activeMaterial === index ? 'scale-110 z-10' : 'hover:scale-105'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-80 bg-black/60 backdrop-blur-md rounded-2xl p-6 border-2 transition-all duration-500 ${
                      activeMaterial === index 
                        ? 'border-amber-400 shadow-2xl shadow-amber-400/20' 
                        : 'border-stone-700 hover:border-stone-500'
                    }`}>
                      {/* Material Image */}
                      <div className="relative overflow-hidden rounded-xl mb-4 h-32">
                        <img 
                          src={material.image}
                          alt={material.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${
                          activeMaterial === index ? 'from-transparent via-transparent to-amber-900/30' : 'from-black/40 to-transparent'
                        } transition-all duration-500`}></div>
                        
                        {/* Material Icon */}
                        <div className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeMaterial === index ? 'bg-amber-400 text-black' : 'bg-black/50 text-white'
                        }`}>
                          <i className={`${material.icon} text-sm`}></i>
                        </div>
                      </div>

                      {/* Material Info */}
                      <div>
                        <h3 className={`text-xl font-light mb-2 transition-colors duration-300 ${
                          activeMaterial === index ? 'text-amber-400' : 'text-white'
                        }`}>
                          {material.name}
                        </h3>
                        <p className="text-stone-400 text-sm mb-3">{material.origin}</p>
                        <p className="text-stone-300 text-sm leading-relaxed mb-4">{material.description}</p>
                        
                        {/* Characteristics */}
                        <div className="flex flex-wrap gap-2">
                          {material.characteristics.slice(0, 2).map((char, idx) => (
                            <span 
                              key={idx}
                              className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${
                                activeMaterial === index 
                                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                                  : 'bg-stone-800 text-stone-400'
                              }`}
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Connection Line to Center */}
                      <div className={`absolute top-1/2 left-1/2 w-1 bg-gradient-to-r ${getColorClasses(material.color)} transition-all duration-500 ${
                        activeMaterial === index ? 'opacity-60 h-20' : 'opacity-20 h-12'
                      }`} 
                      style={{
                        transform: `rotate(${angle + 180}deg)`,
                        transformOrigin: 'center top'
                      }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Material Details */}
        <div className="mt-20">
          <div className={`max-w-4xl mx-auto bg-stone-800/50 backdrop-blur-md rounded-3xl p-8 border border-stone-700 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getColorClasses(materials[activeMaterial].color)} flex items-center justify-center`}>
                    <i className={`${materials[activeMaterial].icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white">{materials[activeMaterial].name}</h3>
                    <p className="text-amber-400 text-sm">{materials[activeMaterial].origin}</p>
                  </div>
                </div>
                
                <p className="text-stone-300 leading-relaxed mb-6">{materials[activeMaterial].description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm uppercase tracking-widest text-stone-400 mb-3">Key Characteristics</h4>
                  {materials[activeMaterial].characteristics.map((char, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="text-stone-300 text-sm">{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img 
                  src={materials[activeMaterial].image}
                  alt={materials[activeMaterial].name}
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Material Navigator */}
        <div className="flex justify-center space-x-2 mt-12">
          {materials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveMaterial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeMaterial 
                  ? 'bg-amber-400 scale-125' 
                  : 'bg-stone-600 hover:bg-stone-500 hover:scale-110'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}