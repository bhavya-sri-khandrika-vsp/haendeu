
'use client';

import { useState, useEffect, useRef } from 'react';

export default function CraftsmanshipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
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

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Selection",
      description: "Only the finest Italian leather makes it to our atelier",
      detail: "Our master craftsmen select each hide by hand, ensuring perfect grain and texture."
    },
    {
      number: "02", 
      title: "Design",
      description: "Every curve and line is drawn with intention",
      detail: "Sketches are refined through generations of expertise and modern innovation."
    },
    {
      number: "03",
      title: "Construction",
      description: "280 individual steps bring each bag to life",
      detail: "Traditional techniques passed down through artisan families meet precision tools."
    },
    {
      number: "04",
      title: "Finishing",
      description: "Hand-polished details create the final masterpiece",
      detail: "Every stitch, every edge is perfected before earning the Haendeu signature."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric Header */}
        <div className={`flex flex-col lg:flex-row items-start justify-between mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
        }`}>
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-7xl font-light mb-6 text-white" style={{ fontFamily: 'var(--font-pacifico)' }}>
              The Making
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed">
              Behind every Haendeu creation lies a symphony of skill, 
              tradition, and unwavering dedication to perfection.
            </p>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Master%20craftsman%20hands%20working%20on%20luxury%20leather%20handbag%20in%20dimly%20lit%20traditional%20workshop%2C%20dramatic%20chiaroscuro%20lighting%20highlighting%20skilled%20artisan%20techniques%2C%20premium%20leather%20texture%20and%20traditional%20tools%2C%20atmospheric%20craftsmanship%20photography&width=400&height=300&seq=craftsmanship-hero&orientation=landscape"
                alt="Master Craftsman"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Zigzag Process Layout */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-6xl font-thin text-amber-500">{step.number}</span>
                  <div className="w-24 h-px bg-amber-500"></div>
                </div>
                <h3 className="text-4xl font-light text-white">{step.title}</h3>
                <p className="text-xl text-stone-300 leading-relaxed">{step.description}</p>
                <p className="text-stone-400 leading-relaxed">{step.detail}</p>
              </div>

              {/* Image Side */}
              <div 
                className="lg:w-1/2 relative group cursor-pointer"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=${
                      index === 0 ? 'Premium Italian leather hides being carefully examined and selected by expert hands, luxury material selection process with dramatic lighting, professional craftsmanship photography showing quality assessment and premium texture details' :
                      index === 1 ? 'Designer sketching elegant handbag designs on paper with precision tools, creative process in luxury atelier, artistic composition showing design development and careful planning of luxury accessories' :
                      index === 2 ? 'Skilled artisan hands constructing luxury handbag with traditional tools and techniques, detailed craftsmanship photography showing precise construction methods, workshop atmosphere with premium materials and expert assembly' :
                      'Final polishing and finishing touches being applied to completed luxury handbag, master craftsman hands perfecting every detail, premium product photography highlighting exceptional quality and meticulous attention to detail'
                    }&width=600&height=400&seq=craft-step-${index}&orientation=landscape`}
                    alt={step.title}
                    className={`w-full h-80 object-cover object-top transition-all duration-700 ${
                      hoveredStep === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-amber-500 transition-opacity duration-500 ${
                    hoveredStep === index ? 'opacity-20' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Floating Number */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
                  <span className="text-black font-bold text-lg">{step.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-32 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
        }`}>
          <button className="bg-amber-500 text-black px-16 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white transition-all duration-500 hover:scale-105 cursor-pointer whitespace-nowrap">
            Visit Our Atelier
          </button>
        </div>
      </div>
    </section>
  );
}
