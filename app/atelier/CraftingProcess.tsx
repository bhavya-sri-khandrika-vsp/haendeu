'use client';

import { useState, useEffect, useRef } from 'react';

export default function CraftingProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
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

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const steps = [
    {
      number: '01',
      title: 'Leather Selection',
      description: 'Master artisans hand-select premium hides, examining grain patterns and natural characteristics.',
      details: ['Full-grain Italian leather', 'Natural tanning process', 'Quality inspection'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20leather%20selection%20process%2C%20premium%20hides%20arranged%20for%20inspection%2C%20artisan%20examining%20leather%20grain%20patterns%2C%20warm%20workshop%20lighting%2C%20professional%20leather%20assessment%20setup&width=700&height=500&seq=leather-selection&orientation=landscape',
      icon: 'ri-leaf-line',
      color: 'emerald'
    },
    {
      number: '02', 
      title: 'Pattern Creation',
      description: 'Precise templates are crafted, ensuring perfect proportions and optimal leather utilization.',
      details: ['Hand-drawn patterns', 'Precision measurements', 'Waste minimization'],
      image: 'https://readdy.ai/api/search-image?query=Leather%20pattern%20making%20workspace%20with%20templates%20and%20cutting%20guides%2C%20measuring%20tools%20and%20pattern%20papers%2C%20artisan%20creating%20handbag%20templates%2C%20organized%20crafting%20environment&width=700&height=500&seq=pattern-creation&orientation=landscape',
      icon: 'ri-rulers-line',
      color: 'blue'
    },
    {
      number: '03',
      title: 'Expert Cutting',
      description: 'Each piece is cut with surgical precision, following grain direction for maximum strength.',
      details: ['Hand-cutting techniques', 'Grain direction analysis', 'Zero tolerance cutting'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20leather%20cutting%20process%2C%20sharp%20cutting%20tools%20on%20premium%20leather%2C%20artisan%20hands%20cutting%20precise%20patterns%2C%20detailed%20craftsmanship%20focus%2C%20workshop%20cutting%20station&width=700&height=500&seq=expert-cutting&orientation=landscape',
      icon: 'ri-scissors-line',
      color: 'red'
    },
    {
      number: '04',
      title: 'Hand Stitching',
      description: 'Traditional saddle stitching creates invisible seams that grow stronger with time.',
      details: ['Saddle stitching method', 'Premium silk thread', 'Hand-waxed finish'],
      image: 'https://readdy.ai/api/search-image?query=Detailed%20hand%20stitching%20of%20luxury%20leather%20handbag%2C%20traditional%20stitching%20techniques%2C%20golden%20silk%20thread%2C%20artisan%20hands%20working%20with%20precision%2C%20intimate%20workshop%20scene&width=700&height=500&seq=hand-stitching&orientation=landscape',
      icon: 'ri-needle-line',
      color: 'amber'
    },
    {
      number: '05',
      title: 'Hardware Assembly',
      description: 'Gold-plated hardware is meticulously installed using time-honored techniques.',
      details: ['18k gold plating', 'Precision installation', 'Durability testing'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20handbag%20hardware%20installation%2C%20gold-plated%20zippers%20and%20buckles%2C%20precision%20tools%20for%20hardware%20assembly%2C%20professional%20craftsmanship%20workspace%2C%20detailed%20metalwork&width=700&height=500&seq=hardware-assembly&orientation=landscape',
      icon: 'ri-settings-3-line',
      color: 'yellow'
    },
    {
      number: '06',
      title: 'Final Inspection',
      description: 'Each completed piece undergoes rigorous quality control before earning the Haendeu seal.',
      details: ['360-degree inspection', 'Quality certification', 'Perfectionist standards'],
      image: 'https://readdy.ai/api/search-image?query=Final%20quality%20inspection%20of%20completed%20luxury%20handbag%2C%20detailed%20examination%20under%20professional%20lighting%2C%20quality%20control%20process%2C%20master%20craftsman%20final%20approval%2C%20premium%20finished%20product&width=700&height=500&seq=final-inspection&orientation=landscape',
      icon: 'ri-search-eye-line',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      emerald: isActive ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
      blue: isActive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      red: isActive ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200',
      amber: isActive ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200',
      yellow: isActive ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
      purple: isActive ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-amber-600/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-amber-900/30 backdrop-blur-md px-6 py-2 rounded-full border border-amber-600/30 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-300 text-sm uppercase tracking-widest font-light">Masterful Process</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
            From Vision to Reality
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Witness the transformation as raw materials become timeless masterpieces through six sacred stages of creation.
          </p>
        </div>

        {/* Process Visualization */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          {/* Left - Step Navigation */}
          <div className="xl:col-span-4">
            <div className={`space-y-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              {/* Auto-play Toggle */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-light">Crafting Steps</h3>
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-light transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    autoPlay ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  <i className={`${autoPlay ? 'ri-pause-line' : 'ri-play-line'}`}></i>
                  <span>{autoPlay ? 'Pause' : 'Play'}</span>
                </button>
              </div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentStep(index);
                    setAutoPlay(false);
                  }}
                  className={`group cursor-pointer transition-all duration-500 ${
                    currentStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className={`p-6 rounded-2xl transition-all duration-500 ${
                    getColorClasses(step.color, currentStep === index)
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep === index ? 'bg-white/20' : 'bg-black/10'
                      }`}>
                        <i className={`${step.icon} text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`text-xs font-light opacity-70`}>{step.number}</span>
                          <h4 className="text-lg font-light">{step.title}</h4>
                        </div>
                        <p className={`text-sm leading-relaxed ${
                          currentStep === index ? 'opacity-90' : 'opacity-70'
                        }`}>
                          {step.description}
                        </p>
                        
                        {/* Progress Indicator */}
                        {currentStep === index && (
                          <div className="mt-4 flex items-center space-x-2">
                            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-white rounded-full transition-all duration-4000"
                                style={{ 
                                  width: autoPlay ? '100%' : '0%',
                                  transition: autoPlay ? 'width 4s linear' : 'width 0.3s'
                                }}
                              ></div>
                            </div>
                            <span className="text-xs opacity-70">
                              {index + 1}/{steps.length}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Showcase */}
          <div className="xl:col-span-8">
            <div className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Step Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-amber-400 text-sm font-light">{steps[currentStep].number}</span>
                      <h4 className="text-2xl font-light text-white">{steps[currentStep].title}</h4>
                    </div>
                    <p className="text-stone-200 leading-relaxed mb-4">{steps[currentStep].description}</p>
                    
                    {/* Detail Tags */}
                    <div className="flex flex-wrap gap-2">
                      {steps[currentStep].details.map((detail, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-full border border-white/20"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Step Number */}
                <div className="absolute top-6 right-6 bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-light shadow-lg">
                  {steps[currentStep].number}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-8">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentStep(index);
                      setAutoPlay(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentStep 
                        ? 'bg-amber-400 scale-125' 
                        : 'bg-stone-600 hover:bg-stone-500 hover:scale-110'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}