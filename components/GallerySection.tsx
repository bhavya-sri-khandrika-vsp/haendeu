'use client';

import { useState, useEffect, useRef } from 'react';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
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

  const galleryItems = [
    {
      category: 'runway',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20model%20walking%20luxury%20fashion%20runway%20carrying%20black%20Haendeu%20handbag%2C%20sophisticated%20fashion%20show%20lighting%20with%20dramatic%20shadows%2C%20premium%20fashion%20week%20atmosphere%20with%20minimalist%20backdrop%20and%20professional%20photography&width=600&height=800&seq=gallery-runway-1&orientation=portrait',
      title: 'Paris Fashion Week 2024'
    },
    {
      category: 'studio',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20handbag%20floating%20in%20minimalist%20studio%20setting%20with%20soft%20dramatic%20lighting%2C%20premium%20fashion%20photography%20with%20cream%20background%20and%20elegant%20shadows%2C%20sophisticated%20product%20styling%20with%20artistic%20composition&width=600&height=600&seq=gallery-studio-1&orientation=squarish',
      title: 'Studio Portrait Series'
    },
    {
      category: 'lifestyle',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20woman%20in%20sophisticated%20outfit%20holding%20luxury%20handbag%20while%20walking%20through%20European%20cobblestone%20streets%2C%20golden%20hour%20lighting%20with%20architectural%20backdrop%2C%20lifestyle%20fashion%20photography%20with%20natural%20elegance&width=600&height=800&seq=gallery-lifestyle-1&orientation=portrait',
      title: 'European Streets'
    },
    {
      category: 'runway',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20model%20on%20luxury%20runway%20showcasing%20cream%20colored%20Haendeu%20handbag%2C%20high-end%20fashion%20show%20with%20dramatic%20lighting%20and%20sophisticated%20staging%2C%20professional%20fashion%20photography%20with%20elegant%20composition&width=600&height=800&seq=gallery-runway-2&orientation=portrait',
      title: 'Milan Fashion Week'
    },
    {
      category: 'studio',
      image: 'https://readdy.ai/api/search-image?query=Artistic%20close-up%20of%20luxury%20handbag%20details%20showing%20premium%20leather%20texture%20and%20gold%20hardware%2C%20macro%20fashion%20photography%20with%20soft%20lighting%20highlighting%20craftsmanship%20quality%20and%20elegant%20design%20elements&width=600&height=600&seq=gallery-studio-2&orientation=squarish',
      title: 'Craftsmanship Details'
    },
    {
      category: 'lifestyle',
      image: 'https://readdy.ai/api/search-image?query=Sophisticated%20business%20woman%20in%20elegant%20attire%20carrying%20luxury%20handbag%20in%20modern%20office%20setting%2C%20professional%20lifestyle%20photography%20with%20natural%20lighting%20and%20contemporary%20architectural%20elements&width=600&height=800&seq=gallery-lifestyle-2&orientation=portrait',
      title: 'Modern Professional'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'runway', label: 'Runway' },
    { key: 'studio', label: 'Studio' },
    { key: 'lifestyle', label: 'Lifestyle' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section ref={sectionRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Haendeu in Focus
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-12">
            A celebration of form, detail, and fashion's finest moments.
          </p>

          <div className="flex justify-center space-x-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 text-sm font-light uppercase tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === filter.key
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-stone-600 hover:text-amber-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-80 object-cover object-top transition-all duration-700 ${
                    hoveredImage === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  hoveredImage === index ? 'opacity-30' : 'opacity-0'
                }`}></div>
                
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredImage === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="text-center text-white">
                    <h3 className="text-lg font-light mb-2">{item.title}</h3>
                    <i className="ri-zoom-in-line text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-black text-white px-12 py-4 text-sm font-light tracking-wide uppercase hover:bg-amber-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}