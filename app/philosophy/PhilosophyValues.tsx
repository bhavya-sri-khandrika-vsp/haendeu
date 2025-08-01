'use client';

import { useState, useEffect, useRef } from 'react';

export default function PhilosophyValues() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      title: "Authenticity",
      description: "We remain true to our vision, never compromising on quality or values for market trends.",
      detail: "In a world of fast fashion and disposable luxury, we choose the harder path of authentic craftsmanship.",
      icon: "ri-shield-check-line",
      color: "from-amber-600 to-amber-500"
    },
    {
      title: "Excellence", 
      description: "Every piece must meet our exacting standards before it bears the Haendeu name.",
      detail: "Our pursuit of perfection means that mediocrity has no place in our workshop.",
      icon: "ri-star-line",
      color: "from-stone-600 to-stone-500"
    },
    {
      title: "Innovation",
      description: "We honor tradition while embracing new techniques that enhance our craft.",
      detail: "Progress without losing sight of the timeless principles that define true luxury.",
      icon: "ri-lightbulb-flash-line",
      color: "from-amber-700 to-amber-600"
    },
    {
      title: "Responsibility",
      description: "Our commitment to ethical sourcing and sustainable practices shapes every decision.",
      detail: "Luxury should enhance lives, not compromise the world we leave for future generations.",
      icon: "ri-leaf-line",
      color: "from-green-600 to-green-500"
    },
    {
      title: "Intimacy",
      description: "We create personal connections between our artisans, our products, and our customers.",
      detail: "Every bag carries the soul of its maker and becomes part of its owner's story.",
      icon: "ri-heart-line",
      color: "from-rose-600 to-rose-500"
    },
    {
      title: "Legacy",
      description: "We build for generations, creating pieces that become treasured heirlooms.",
      detail: "Our work today becomes the antique luxury of tomorrow.",
      icon: "ri-time-line",
      color: "from-stone-700 to-stone-600"
    }
  ];

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

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-px bg-amber-600"></div>
            <span className="mx-6 text-sm uppercase tracking-widest text-stone-600">Our Values</span>
            <div className="w-16 h-px bg-amber-600"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-light mb-8 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            What Drives Us
          </h2>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            These core values are more than words—they are the principles that guide every stitch, 
            every decision, and every relationship we build.
          </p>
        </div>

        {/* Values Grid - Hexagonal Layout */}
        <div className="relative">
          {/* Central Hub */}
          <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}>
            <div className="w-32 h-32 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <i className="ri-heart-fill text-3xl mb-1 block"></i>
                <span className="text-xs font-medium uppercase tracking-wider">Core</span>
              </div>
            </div>
          </div>

          {/* Values arranged in circular pattern */}
          <div className="relative h-[800px]">
            {values.map((value, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180); // Convert to radians, start from top
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 cursor-pointer ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    transitionDelay: `${600 + index * 150}ms`
                  }}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-500 group ${
                    hoveredValue === index 
                      ? 'border-amber-600 shadow-2xl scale-110 z-20' 
                      : 'border-stone-200 hover:border-stone-300'
                  }`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}>
                      <i className={`${value.icon} text-2xl text-white`}></i>
                    </div>

                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h3 className="text-2xl font-light mb-3 text-stone-800">{value.title}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed mb-4">
                        {value.description}
                      </p>
                      
                      {/* Expandable Detail */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        hoveredValue === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="border-t border-stone-200 pt-4 mt-4">
                          <p className="text-xs text-stone-500 italic leading-relaxed">
                            {value.detail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connection Line to Center */}
                    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                      hoveredValue === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <svg className="absolute inset-0 w-full h-full">
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`${50 - (x / radius) * 50}%`}
                          y2={`${50 - (y / radius) * 50}%`}
                          stroke="#d97706"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic text-stone-700 leading-relaxed mb-8">
              "Values are like fingerprints. Nobody's are the same, but you leave them all over everything you do."
            </blockquote>
            <cite className="text-amber-600 text-sm uppercase tracking-widest">
              — Our Founding Principle
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}