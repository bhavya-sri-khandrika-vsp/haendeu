
'use client';

import { useState, useEffect, useRef } from 'react';

export default function AtelierSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: "ri-star-line",
      title: "Premium Italian Leather",
      description: "Sourced from the finest tanneries in Tuscany, each hide tells a story of generations."
    },
    {
      icon: "ri-time-line",
      title: "56 Hours of Handwork",
      description: "Every bag requires meticulous attention over 56+ hours of dedicated craftsmanship."
    },
    {
      icon: "ri-award-line",
      title: "Gold-Treated Hardware",
      description: "Hardware forged in 18k gold plating, ensuring lasting beauty and durability."
    },
    {
      icon: "ri-leaf-line",
      title: "Sustainability Promise",
      description: "Committed to ethical sourcing and sustainable practices in every step of creation."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20leather%20texture%20close-up%20with%20intricate%20stitching%20details%2C%20premium%20handbag%20craftsmanship%20macro%20photography%2C%20warm%20golden%20lighting%20highlighting%20leather%20grain%20and%20quality%2C%20artistic%20workshop%20atmosphere%20with%20sophisticated%20tools&width=1920&height=1080&seq=atelier-bg&orientation=landscape')`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Crafted in Silence
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            In the heart of Europe, our artisans shape every stitch with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-amber-600 rounded-full">
                <i className={`${feature.icon} text-2xl text-amber-600`}></i>
              </div>
              <h3 className="text-xl font-light mb-4">{feature.title}</h3>
              <p className="text-stone-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <h3 className="text-3xl font-light mb-6">The Anatomy of Excellence</h3>
            <p className="text-stone-300 leading-relaxed mb-8">
              Each Haendeu bag undergoes a transformative journey from raw leather to finished masterpiece. 
              Our artisans employ techniques passed down through generations, ensuring every detail meets 
              our exacting standards of luxury and longevity.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-stone-300">Hand-selected leather cutting</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-stone-300">Traditional edge painting techniques</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-stone-300">Precise hardware installation</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-stone-300">Final quality inspection</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Detailed%20exploded%20view%20diagram%20of%20luxury%20handbag%20construction%20showing%20leather%20pieces%2C%20hardware%20components%2C%20stitching%20patterns%2C%20and%20assembly%20stages%2C%20technical%20yet%20elegant%20illustration%20with%20golden%20accents%20on%20dark%20background&width=600&height=400&seq=atelier-diagram&orientation=landscape"
              alt="Bag Construction"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
