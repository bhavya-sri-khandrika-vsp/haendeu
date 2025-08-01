'use client';

import { useState, useEffect, useRef } from 'react';

export default function PhilosophyLegacy() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const legacyElements = [
    {
      title: "Timeless Design",
      description: "Creating pieces that transcend generations, becoming treasured heirlooms.",
      icon: "ri-time-line",
      visual: "https://readdy.ai/api/search-image?query=Vintage%20luxury%20handbag%20passed%20down%20through%20generations%2C%20family%20heirloom%20with%20patina%20and%20character%2C%20warm%20nostalgic%20lighting%20highlighting%20timeless%20elegance%20and%20enduring%20beauty%20across%20decades&width=400&height=300&seq=legacy-1&orientation=landscape"
    },
    {
      title: "Sustainable Luxury",
      description: "Commitment to responsible practices that honor our planet and future.",
      icon: "ri-leaf-line", 
      visual: "https://readdy.ai/api/search-image?query=Eco-friendly%20luxury%20leather%20workshop%20with%20sustainable%20materials%20and%20green%20practices%2C%20natural%20lighting%20with%20organic%20elements%2C%20responsible%20craftsmanship%20highlighting%20environmental%20consciousness%20and%20ethical%20production&width=400&height=300&seq=legacy-2&orientation=landscape"
    },
    {
      title: "Artisan Heritage",
      description: "Preserving traditional craftsmanship techniques for future generations.",
      icon: "ri-hand-heart-line",
      visual: "https://readdy.ai/api/search-image?query=Master%20artisan%20teaching%20young%20apprentice%20traditional%20leather%20working%20techniques%2C%20generational%20knowledge%20transfer%20in%20warm%20workshop%2C%20golden%20lighting%20capturing%20the%20preservation%20of%20craftsmanship%20heritage%20and%20skills&width=400&height=300&seq=legacy-3&orientation=landscape"
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

  const parallaxOffset = scrollY * 0.3;

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20luxury%20heritage%20pattern%20with%20golden%20threads%20weaving%20through%20time%2C%20elegant%20artistic%20composition%20showing%20continuity%20and%20legacy%2C%20sophisticated%20textile%20design%20with%20flowing%20organic%20shapes&width=1920&height=1080&seq=legacy-pattern&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center mb-8">
            <div className="w-20 h-px bg-amber-600"></div>
            <span className="mx-8 text-sm uppercase tracking-widest text-stone-600">Our Legacy</span>
            <div className="w-20 h-px bg-amber-600"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-light mb-8 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Building Tomorrow
          </h2>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Our philosophy extends beyond the present moment. We create with the future in mind, 
            building a legacy that honors both tradition and innovation.
          </p>
        </div>

        {/* Legacy Showcase */}
        <div className="relative mb-20">
          {/* Central Timeline */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-amber-600 via-amber-400 to-transparent opacity-30"></div>

          {/* Legacy Elements */}
          <div className="space-y-32">
            {legacyElements.map((element, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 400}ms` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      {/* Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mb-8 shadow-xl">
                        <i className={`${element.icon} text-3xl text-white`}></i>
                      </div>

                      {/* Content */}
                      <h3 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">
                        {element.title}
                      </h3>
                      <p className="text-xl text-stone-600 leading-relaxed mb-8">
                        {element.description}
                      </p>

                      {/* Decorative Quote */}
                      <div className="relative pl-8 border-l-4 border-amber-600/30">
                        <p className="text-lg italic text-stone-500 leading-relaxed">
                          {index === 0 && "Every bag tells a story, and every story deserves to be preserved for generations to come."}
                          {index === 1 && "Luxury that respects the earth is the only luxury worth creating in our time."}
                          {index === 2 && "In teaching, we ensure that the soul of craftsmanship lives on beyond our own hands."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative group">
                      <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={element.visual}
                          alt={element.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-amber-100">
                        <span className="text-amber-600 font-medium text-lg">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl p-16 border border-amber-100 shadow-lg">
            <h3 className="text-4xl md:text-5xl font-light mb-8 text-stone-800">
              The Next Chapter
            </h3>
            <p className="text-xl text-stone-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              As we look to the future, our commitment remains unchanged: to create luxury that honors the past, 
              serves the present, and inspires the future. Every bag we craft today becomes part of tomorrow's heritage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-amber-600 text-white px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer whitespace-nowrap">
                Join Our Story
              </button>
              <button className="border-2 border-stone-800 text-stone-800 px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-stone-800 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap">
                Explore Heritage
              </button>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light italic text-stone-700 leading-relaxed mb-8">
              "We are not just making bags. We are weaving dreams, crafting memories, and building bridges between generations."
            </blockquote>
            <cite className="text-amber-600 text-sm uppercase tracking-widest">
              — The Haendeu Philosophy
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}