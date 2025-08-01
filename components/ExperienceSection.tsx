'use client';

import { useState, useEffect, useRef } from 'react';

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      title: "Bespoke Creations",
      description: "Design your dream bag with our master artisans in private consultation sessions.",
      features: ["Personal design consultation", "Custom materials selection", "Artisan craftsmanship", "Lifetime warranty"],
      image: "https://readdy.ai/api/search-image?query=Luxury%20private%20consultation%20room%20with%20elegant%20interior%20design%2C%20master%20craftsman%20showing%20custom%20leather%20samples%20to%20sophisticated%20client%2C%20premium%20materials%20and%20design%20sketches%20spread%20on%20marble%20table%2C%20warm%20intimate%20lighting%20creating%20exclusive%20experience&width=600&height=400&seq=experience-1&orientation=landscape"
    },
    {
      title: "Restoration Services",
      description: "Breathe new life into cherished pieces with our expert restoration craftsmen.",
      features: ["Expert assessment", "Original materials matching", "Traditional techniques", "Heritage preservation"],
      image: "https://readdy.ai/api/search-image?query=Master%20craftsman%20carefully%20restoring%20vintage%20luxury%20handbag%20in%20traditional%20workshop%2C%20detailed%20restoration%20process%20with%20specialized%20tools%2C%20warm%20workshop%20lighting%20highlighting%20expert%20hands%20working%20on%20precious%20leather%2C%20heritage%20craftsmanship%20atmosphere&width=600&height=400&seq=experience-2&orientation=landscape"
    },
    {
      title: "Concierge Care",
      description: "White-glove service ensuring your Haendeu pieces remain timelessly beautiful.",
      features: ["Professional cleaning", "Conditioning treatments", "Storage guidance", "Seasonal maintenance"],
      image: "https://readdy.ai/api/search-image?query=Elegant%20luxury%20boutique%20service%20area%20with%20professional%20staff%20providing%20white%20glove%20handbag%20care%20service%2C%20sophisticated%20interior%20with%20premium%20leather%20care%20products%20and%20tools%2C%20refined%20atmosphere%20showcasing%20exceptional%20customer%20service&width=600&height=400&seq=experience-3&orientation=landscape"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-stone-100 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Header with Geometric Elements */}
        <div className={`text-center mb-20 relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-8 w-px h-16 bg-gradient-to-b from-transparent to-amber-400"></div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            The Haendeu Experience
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Beyond crafting exceptional bags, we curate experiences that honor 
            the relationship between artisan and owner.
          </p>
        </div>

        {/* Circular/Radial Layout */}
        <div className="relative">
          {/* Central Hub */}
          <div className="flex justify-center mb-16">
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                <i className="ri-star-line text-2xl text-amber-600 w-6 h-6 flex items-center justify-center"></i>
              </div>
              
              {/* Connecting Lines */}
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`absolute w-24 h-px bg-gradient-to-r from-amber-400 to-transparent origin-left transition-opacity duration-500 ${
                    activeService === index ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{
                    transform: `rotate(${120 * index}deg)`,
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'left center'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Service Cards in Triangular Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  index === 1 ? 'lg:mt-16' : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="relative">
                  {/* Image Container with Unique Shape */}
                  <div className={`relative overflow-hidden mb-6 shadow-xl transition-all duration-700 group-hover:shadow-2xl ${
                    index === 0 ? 'rounded-tl-3xl rounded-br-3xl' :
                    index === 1 ? 'rounded-tr-3xl rounded-bl-3xl' :
                    'rounded-full'
                  }`}>
                    <img 
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-64 object-cover object-top transition-all duration-700 ${
                        activeService === index ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 ${
                      activeService === index ? 'opacity-70' : 'opacity-0'
                    }`}></div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeService === index ? 'scale-110' : 'scale-100'
                    }`}>
                      <i className={`text-amber-600 text-lg w-5 h-5 flex items-center justify-center ${
                        index === 0 ? 'ri-paint-brush-line' :
                        index === 1 ? 'ri-tools-line' :
                        'ri-service-line'
                      }`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-stone-800 group-hover:text-amber-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-sm text-stone-500"
                        >
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="text-stone-800 text-sm font-light group-hover:text-amber-600 transition-colors duration-300 flex items-center">
                      Learn More
                      <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1 w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-stone-600">Ready to begin your journey?</span>
            <button className="bg-amber-500 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-amber-600 transition-all duration-300 cursor-pointer whitespace-nowrap rounded-full">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}