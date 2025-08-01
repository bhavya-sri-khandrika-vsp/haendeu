'use client';

import { useState, useEffect, useRef } from 'react';

export default function PhilosophyJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const journeySteps = [
    {
      year: "2024",
      title: "The Vision",
      description: "Born from a desire to create accessories that transcend fleeting trends, Haendeu emerged as a beacon of timeless elegance.",
      icon: "ri-lightbulb-line",
      position: "left"
    },
    {
      year: "Present",
      title: "Master Craftsmen",
      description: "We assembled a team of Europe's most skilled artisans, each bringing decades of experience in luxury leather goods.",
      icon: "ri-hand-heart-line",
      position: "right"
    },
    {
      year: "Today",
      title: "Global Recognition",
      description: "Haendeu has become synonymous with quiet luxury, carried by discerning individuals who value authenticity over ostentation.",
      icon: "ri-global-line",
      position: "left"
    },
    {
      year: "Tomorrow",
      title: "Sustainable Future",
      description: "Our commitment to ethical practices and environmental responsibility guides us toward a more sustainable luxury industry.",
      icon: "ri-leaf-line",
      position: "right"
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 transform transition-transform duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20luxury%20pattern%20with%20golden%20geometric%20lines%20and%20flowing%20curves%2C%20premium%20textile%20texture%20with%20sophisticated%20minimal%20design%2C%20warm%20ambient%20lighting%20creating%20elegant%20shadows%20and%20depth&width=1920&height=1080&seq=journey-pattern&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center mb-8">
            <div className="w-20 h-px bg-amber-600"></div>
            <span className="mx-8 text-sm uppercase tracking-widest text-stone-400">Our Story</span>
            <div className="w-20 h-px bg-amber-600"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-pacifico)' }}>
            The Journey Unfolds
          </h2>
          <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
            Every great story begins with a single moment of inspiration. 
            Ours started with the belief that luxury should whisper, not shout.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-amber-600 via-amber-400 to-transparent"></div>

          {/* Journey Steps */}
          <div className="space-y-24">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  step.position === 'right' ? 'lg:text-right' : ''
                }`}>
                  {/* Content */}
                  <div className={`${step.position === 'right' ? 'lg:order-2' : ''}`}>
                    <div className={`max-w-lg ${step.position === 'right' ? 'lg:ml-auto' : ''}`}>
                      {/* Year Badge */}
                      <div className="inline-flex items-center bg-amber-600 text-black px-6 py-2 rounded-full mb-6">
                        <span className="text-sm font-medium uppercase tracking-wide">{step.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-light mb-6">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-lg text-stone-300 leading-relaxed mb-8">
                        {step.description}
                      </p>

                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 border-2 border-amber-600 rounded-full group hover:bg-amber-600 transition-all duration-300 cursor-pointer ${
                        step.position === 'right' ? 'lg:ml-auto lg:mr-0' : ''
                      }`}>
                        <i className={`${step.icon} text-2xl text-amber-600 group-hover:text-black transition-colors duration-300`}></i>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`${step.position === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=${
                          index === 0 ? 'Designer sketching luxury handbag ideas with golden inspiration, creative vision with elegant drawings and warm lighting, artistic workspace showing the birth of timeless design concepts' :
                          index === 1 ? 'Master European leather craftsman working with premium materials, skilled hands demonstrating traditional techniques, warm atelier lighting highlighting expert craftsmanship and dedication' :
                          index === 2 ? 'Elegant luxury handbag being carried in sophisticated urban setting, global recognition with cosmopolitan background, refined lifestyle photography with international appeal' :
                          'Sustainable luxury workshop with eco-friendly materials, green craftsmanship with natural elements, responsible production highlighting environmental consciousness and future-forward thinking'
                        }&width=600&height=400&seq=journey-${index + 1}&orientation=landscape`}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-stone-900 shadow-lg animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h3 className="text-3xl font-light mb-6">Be Part of Our Story</h3>
            <p className="text-stone-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join us on this continuing journey of craftsmanship, innovation, and timeless elegance. 
              Your story becomes part of ours.
            </p>
            <button className="bg-amber-600 text-black px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer whitespace-nowrap">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}