
'use client';

import { useState, useEffect, useRef } from 'react';

export default function PhilosophySection() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            The Art of Quiet Luxury
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We believe in understated elegance, time-honored craftsmanship, and eternal design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className={`text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Designer%20sketching%20luxury%20handbag%20designs%20on%20paper%20with%20golden%20pencil%2C%20artistic%20workspace%20with%20leather%20samples%20and%20fabric%20swatches%2C%20warm%20natural%20lighting%2C%20elegant%20studio%20environment%20with%20craft%20tools%20and%20inspiration%20boards&width=400&height=300&seq=philosophy-1&orientation=landscape"
                alt="Designer Sketches"
                className="w-full h-72 object-cover object-top hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-light mb-4 text-stone-800">Designer Vision</h3>
            <p className="text-stone-600 leading-relaxed">
              Every creation begins with inspiration, translated through careful sketches and thoughtful design.
            </p>
          </div>

          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Master%20artisan%20hands%20carefully%20stitching%20premium%20leather%20handbag%20with%20golden%20thread%2C%20detailed%20close-up%20of%20traditional%20craftsmanship%2C%20warm%20workshop%20lighting%20highlighting%20expert%20leather%20working%20techniques%20and%20precision%20tools&width=400&height=300&seq=philosophy-2&orientation=landscape"
                alt="Artisan at Work"
                className="w-full h-72 object-cover object-top hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-light mb-4 text-stone-800">Master Craftsmanship</h3>
            <p className="text-stone-600 leading-relaxed">
              Each piece is lovingly crafted by skilled artisans who understand the language of leather.
            </p>
          </div>

          <div className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Elegant%20European%20atelier%20workshop%20with%20luxury%20leather%20handbags%20displayed%20on%20marble%20tables%2C%20Florence%20architectural%20details%20with%20warm%20golden%20hour%20lighting%20streaming%20through%20tall%20windows%2C%20sophisticated%20craftsmanship%20environment&width=400&height=300&seq=philosophy-3&orientation=landscape"
                alt="Atelier Environment"
                className="w-full h-72 object-cover object-top hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-light mb-4 text-stone-800">Sacred Spaces</h3>
            <p className="text-stone-600 leading-relaxed">
              Our ateliers in Florence provide the perfect environment for timeless creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
