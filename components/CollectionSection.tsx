
'use client';

import { useState, useEffect, useRef } from 'react';

export default function CollectionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const collections = [
    {
      name: "Haendeu No.1",
      subtitle: "Classic Top Handle",
      description: "The original icon, reimagined for the modern woman.",
      image: "https://readdy.ai/api/search-image?query=Luxury%20black%20leather%20top%20handle%20handbag%20with%20gold%20hardware%2C%20minimalist%20design%20floating%20on%20cream%20background%2C%20premium%20fashion%20photography%20with%20soft%20studio%20lighting%20and%20elegant%20shadows%2C%20sophisticated%20product%20styling&width=600&height=800&seq=collection-1&orientation=portrait"
    },
    {
      name: "Haendeu Air",
      subtitle: "Featherlight Carry",
      description: "Weightless luxury that moves with your rhythm.",
      image: "https://readdy.ai/api/search-image?query=Ultra-lightweight%20cream%20leather%20handbag%20with%20delicate%20gold%20chain%20strap%2C%20floating%20ethereally%20on%20soft%20beige%20background%2C%20premium%20fashion%20photography%20emphasizing%20lightness%20and%20elegance%20with%20dreamy%20studio%20lighting&width=600&height=800&seq=collection-2&orientation=portrait"
    },
    {
      name: "Haendeu Nuit",
      subtitle: "Evening Edition",
      description: "Where darkness meets sophistication.",
      image: "https://readdy.ai/api/search-image?query=Elegant%20black%20evening%20clutch%20handbag%20with%20subtle%20gold%20accents%2C%20luxurious%20velvet%20texture%20displayed%20on%20dark%20sophisticated%20background%2C%20premium%20fashion%20photography%20with%20dramatic%20lighting%20and%20rich%20shadows&width=600&height=800&seq=collection-3&orientation=portrait"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            The Signature Series
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Each bag is a statement — bold, pure, and impossibly elegant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collections.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-96 object-cover object-top transition-all duration-700 ${
                    hoveredItem === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  hoveredItem === index ? 'opacity-20' : 'opacity-0'
                }`}></div>
                
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredItem === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="bg-white text-black px-6 py-3 text-sm font-light tracking-wide uppercase hover:bg-amber-600 hover:text-white transition-all duration-300 whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-light mb-2 text-stone-800">{item.name}</h3>
                <p className="text-sm text-amber-600 uppercase tracking-wide mb-3">{item.subtitle}</p>
                <p className="text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-black text-white px-12 py-4 text-sm font-light tracking-wide uppercase hover:bg-amber-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap">
            Shop the Collection
          </button>
        </div>
      </div>
    </section>
  );
}
