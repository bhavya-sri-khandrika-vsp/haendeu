'use client';

import { useState, useEffect, useRef } from 'react';

export default function PhilosophyCore() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const principles = [
    {
      title: "Timeless Design",
      subtitle: "Beyond Trends",
      description: "We believe in creating pieces that transcend seasonal fashions, focusing on enduring elegance that becomes more beautiful with time.",
      visual: "https://readdy.ai/api/search-image?query=Minimalist%20luxury%20handbag%20floating%20in%20golden%20void%20with%20geometric%20light%20patterns%2C%20timeless%20elegant%20design%20with%20clean%20lines%2C%20sophisticated%20artistic%20composition%20emphasizing%20eternal%20beauty%20and%20classic%20proportions&width=600&height=400&seq=principle-1&orientation=landscape"
    },
    {
      title: "Conscious Craft",
      subtitle: "Mindful Creation", 
      description: "Every decision in our process is deliberate, from material selection to the final stitch, ensuring each piece honors both tradition and sustainability.",
      visual: "https://readdy.ai/api/search-image?query=Artisan%20hands%20carefully%20selecting%20premium%20leather%20pieces%20with%20natural%20textures%2C%20conscious%20craftsmanship%20with%20sustainable%20materials%2C%20warm%20workshop%20lighting%20highlighting%20mindful%20creation%20process%20and%20eco-friendly%20practices&width=600&height=400&seq=principle-2&orientation=landscape"
    },
    {
      title: "Emotional Connection",
      subtitle: "Stories Worth Carrying",
      description: "We craft more than accessories; we create companions for life's meaningful moments, pieces that hold memories and grow in significance over time.",
      visual: "https://readdy.ai/api/search-image?query=Elegant%20hands%20holding%20luxury%20handbag%20with%20emotional%20warmth%2C%20intimate%20connection%20between%20person%20and%20crafted%20object%2C%20soft%20golden%20lighting%20capturing%20the%20bond%20between%20owner%20and%20treasured%20accessory%20with%20meaningful%20atmosphere&width=600&height=400&seq=principle-3&orientation=landscape"
    }
  ];

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % principles.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, principles.length]);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-px bg-amber-600"></div>
            <span className="mx-6 text-sm uppercase tracking-widest text-stone-600">Core Beliefs</span>
            <div className="w-16 h-px bg-amber-600"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-light mb-8 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            What We Stand For
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide every decision we make, from the first sketch to the final stitch.
          </p>
        </div>

        {/* Dynamic Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side - Morphing Images */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeIndex === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img 
                    src={principle.visual}
                    alt={principle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              ))}
              
              {/* Floating Number Indicator */}
              <div className="absolute top-8 right-8">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-light text-stone-800">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {principles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    activeIndex === index 
                      ? 'w-12 bg-amber-600' 
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Side - Animated Text */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="space-y-8">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    activeIndex === index 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-30 translate-y-4 scale-95'
                  }`}
                >
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
                      {principle.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xl text-stone-600 leading-relaxed">
                    {principle.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="w-12 h-px bg-amber-600"></div>
                    <span className="text-xs uppercase tracking-widest text-stone-500">
                      Principle {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-4 mt-12">
              <button
                onClick={() => setActiveIndex(activeIndex === 0 ? principles.length - 1 : activeIndex - 1)}
                className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-all duration-300 cursor-pointer group"
              >
                <i className="ri-arrow-left-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % principles.length)}
                className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-all duration-300 cursor-pointer group"
              >
                <i className="ri-arrow-right-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}