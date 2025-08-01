'use client';

import { useState, useEffect, useRef } from 'react';

export default function PhilosophyCraftsmanship() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const craftSteps = [
    {
      title: "Selection",
      subtitle: "The Perfect Hide",
      description: "Each piece begins with the careful selection of premium Italian leather, chosen for its grain, texture, and potential for beauty.",
      techniques: ["Hand-feel assessment", "Grain pattern analysis", "Thickness measurement", "Color matching"],
      visual: "https://readdy.ai/api/search-image?query=Master%20craftsman%20examining%20premium%20Italian%20leather%20hides%20with%20magnifying%20glass%2C%20luxury%20tannery%20with%20golden%20lighting%2C%20detailed%20inspection%20of%20leather%20grain%20and%20texture%2C%20sophisticated%20quality%20control%20process&width=800&height=600&seq=craft-1&orientation=landscape"
    },
    {
      title: "Design",
      subtitle: "Form Meets Function", 
      description: "Our designers create templates that balance aesthetic beauty with practical functionality, ensuring every curve serves a purpose.",
      techniques: ["Pattern drafting", "Ergonomic planning", "Hardware placement", "Stress point analysis"],
      visual: "https://readdy.ai/api/search-image?query=Luxury%20handbag%20design%20sketches%20on%20drafting%20table%20with%20golden%20rulers%20and%20precise%20measurements%2C%20elegant%20technical%20drawings%20with%20artistic%20flair%2C%20warm%20studio%20lighting%20highlighting%20creative%20design%20process&width=800&height=600&seq=craft-2&orientation=landscape"
    },
    {
      title: "Cutting",
      subtitle: "Precision in Every Line",
      description: "Using traditional cutting techniques passed down through generations, each piece is cut to exact specifications.",
      techniques: ["Pattern alignment", "Blade angle control", "Edge preparation", "Waste minimization"],
      visual: "https://readdy.ai/api/search-image?query=Skilled%20artisan%20precisely%20cutting%20premium%20leather%20with%20traditional%20tools%2C%20workshop%20atmosphere%20with%20focused%20craftsmanship%2C%20golden%20lighting%20highlighting%20expert%20cutting%20technique%20and%20careful%20precision&width=800&height=600&seq=craft-3&orientation=landscape"
    },
    {
      title: "Assembly",
      subtitle: "Where Magic Happens",
      description: "Master artisans bring the pieces together using time-honored techniques, creating strong and beautiful connections.",
      techniques: ["Hand stitching", "Hardware attachment", "Edge finishing", "Quality inspection"],
      visual: "https://readdy.ai/api/search-image?query=Expert%20hands%20stitching%20luxury%20leather%20handbag%20with%20golden%20thread%2C%20traditional%20assembly%20process%20in%20warm%20atelier%20lighting%2C%20detailed%20craftsmanship%20showing%20careful%20attention%20to%20every%20stitch%20and%20connection&width=800&height=600&seq=craft-4&orientation=landscape"
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % craftSteps.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, craftSteps.length]);

  return (
    <section ref={sectionRef} className="py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20luxury%20craftsmanship%20pattern%20with%20golden%20tools%20and%20leather%20textures%2C%20premium%20workshop%20elements%20floating%20in%20artistic%20composition%2C%20warm%20ambient%20lighting%20with%20sophisticated%20craft%20details&width=1920&height=1080&seq=craft-bg&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center mb-8">
            <div className="w-20 h-px bg-amber-600"></div>
            <span className="mx-8 text-sm uppercase tracking-widest text-stone-400">The Process</span>
            <div className="w-20 h-px bg-amber-600"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Craftsmanship Unveiled
          </h2>
          <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
            Behind every Haendeu bag lies a meticulous process that transforms raw materials into objects of desire.
          </p>
        </div>

        {/* Process Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Steps Navigation */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-6">
              {craftSteps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-xl border cursor-pointer transition-all duration-500 group ${
                    activeStep === index 
                      ? 'border-amber-600 bg-amber-600/10 shadow-lg' 
                      : 'border-stone-700 hover:border-stone-600'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      activeStep === index 
                        ? 'border-amber-600 bg-amber-600 text-black' 
                        : 'border-stone-600 text-stone-400 group-hover:border-stone-500'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className={`text-xl font-light transition-colors duration-300 ${
                      activeStep === index ? 'text-amber-400' : 'text-white group-hover:text-stone-300'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-sm transition-colors duration-300 ${
                    activeStep === index ? 'text-amber-200' : 'text-stone-500 group-hover:text-stone-400'
                  }`}>
                    {step.subtitle}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-4 h-1 bg-stone-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-amber-600 transition-all duration-500 ${
                        activeStep === index ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Visual */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Image Container */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
                {craftSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeStep === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img 
                      src={step.visual}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Floating Step Indicator */}
                <div className="absolute top-8 left-8">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-black text-sm font-medium">
                      Step {activeStep + 1} of {craftSteps.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {craftSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeStep === index 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4 absolute'
                    }`}
                  >
                    <h3 className="text-3xl font-light mb-3">{step.title}</h3>
                    <h4 className="text-amber-400 text-lg mb-4">{step.subtitle}</h4>
                    <p className="text-stone-300 leading-relaxed mb-6 text-lg">
                      {step.description}
                    </p>
                    
                    {/* Techniques */}
                    <div className="grid grid-cols-2 gap-3">
                      {step.techniques.map((technique, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          <span className="text-stone-400 text-sm">{technique}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-8">
                {craftSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === index 
                        ? 'bg-amber-600 scale-125' 
                        : 'bg-stone-600 hover:bg-stone-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-800 pt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { number: "56+", label: "Hours per bag" },
            { number: "18", label: "Skilled artisans" },
            { number: "127", label: "Quality checkpoints" },
            { number: "∞", label: "Attention to detail" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light mb-2 text-amber-400">{stat.number}</div>
              <div className="text-stone-500 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}