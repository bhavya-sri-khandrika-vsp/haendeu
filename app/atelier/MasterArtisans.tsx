'use client';

import { useState, useEffect, useRef } from 'react';

export default function MasterArtisans() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArtisan, setSelectedArtisan] = useState(0);
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

  const artisans = [
    {
      name: 'Elena Marchetti',
      role: 'Master Stitcher',
      experience: '28 Years',
      specialization: 'Hand-stitching & Edge finishing',
      philosophy: 'Every stitch carries the soul of the craftsperson. I stitch not just leather, but dreams into reality.',
      achievements: ['International Leather Guild Award 2019', 'Master Artisan Certification', 'Apprentice Mentor of 15+ craftspeople'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20female%20master%20leather%20artisan%20in%20her%2050s%2C%20elegant%20workshop%20setting%2C%20premium%20craftsmanship%20tools%20in%20background%2C%20warm%20professional%20lighting%2C%20sophisticated%20craftswoman%20in%20leather%20apron&width=400&height=500&seq=elena-artisan&orientation=portrait',
      signature: 'https://readdy.ai/api/search-image?query=Close-up%20of%20intricate%20hand-stitching%20work%20on%20luxury%20leather%2C%20detailed%20needle%20and%20thread%20work%2C%20golden%20silk%20thread%2C%20masterful%20stitching%20technique%2C%20artistic%20craftsmanship%20focus&width=300&height=200&seq=elena-work&orientation=landscape'
    },
    {
      name: 'Marco Rosselini',
      role: 'Leather Curator',
      experience: '35 Years',
      specialization: 'Leather selection & Treatment',
      philosophy: 'The leather speaks to those who listen. I help it tell its story through careful selection and preparation.',
      achievements: ['Tuscany Leather Master Guild Member', 'Heritage Craftsman Award 2021', 'Published author on leather techniques'],
      image: 'https://readdy.ai/api/search-image?query=Distinguished%20male%20master%20leather%20artisan%20in%20his%2060s%2C%20examining%20premium%20leather%20hides%2C%20professional%20workshop%20environment%2C%20experienced%20craftsman%20with%20years%20of%20expertise%2C%20authoritative%20presence&width=400&height=500&seq=marco-artisan&orientation=portrait',
      signature: 'https://readdy.ai/api/search-image?query=Hands%20of%20master%20artisan%20examining%20premium%20leather%20texture%20and%20grain%2C%20professional%20leather%20selection%20process%2C%20quality%20assessment%20techniques%2C%20expert%20craftsmanship%20evaluation&width=300&height=200&seq=marco-work&orientation=landscape'
    },
    {
      name: 'Sofia Benedetti',
      role: 'Pattern Architect',
      experience: '22 Years', 
      specialization: 'Design & Pattern creation',
      philosophy: 'Form follows function, but beauty transcends both. I create templates that honor tradition while embracing innovation.',
      achievements: ['European Design Excellence Award', 'Featured in Craftsmanship Quarterly', 'Designer of 50+ iconic patterns'],
      image: 'https://readdy.ai/api/search-image?query=Creative%20female%20pattern%20designer%20in%20her%2040s%20at%20drafting%20table%20with%20leather%20templates%2C%20modern%20design%20workspace%2C%20innovative%20pattern%20creation%20tools%2C%20artistic%20craftswoman%20focused%20on%20design%20work&width=400&height=500&seq=sofia-artisan&orientation=portrait',
      signature: 'https://readdy.ai/api/search-image?query=Detailed%20leather%20pattern%20templates%20and%20cutting%20guides%20on%20drafting%20table%2C%20precision%20measuring%20tools%2C%20innovative%20pattern%20design%20process%2C%20technical%20craftsmanship%20documentation&width=300&height=200&seq=sofia-work&orientation=landscape'
    },
    {
      name: 'Alessandro Conti',
      role: 'Hardware Master',
      experience: '31 Years',
      specialization: 'Metal work & Hardware installation',
      philosophy: 'Metal and leather must dance together in perfect harmony. I ensure every clasp, every buckle sings in unison.',
      achievements: ['Metalworking Excellence Certificate', 'Innovation in Hardware Design 2020', 'Collaborated with luxury brands globally'],
      image: 'https://readdy.ai/api/search-image?query=Skilled%20male%20metalworking%20artisan%20in%20his%2050s%20working%20with%20luxury%20hardware%2C%20professional%20metalworking%20tools%2C%20precision%20hardware%20installation%2C%20expert%20craftsman%20focused%20on%20detailed%20work&width=400&height=500&seq=alessandro-artisan&orientation=portrait',
      signature: 'https://readdy.ai/api/search-image?query=Precision%20installation%20of%20gold-plated%20hardware%20on%20luxury%20handbag%2C%20detailed%20metalwork%20and%20leather%20integration%2C%20professional%20hardware%20assembly%20process%2C%20expert%20craftsmanship%20technique&width=300&height=200&seq=alessandro-work&orientation=landscape'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-amber-200/50 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <span className="text-amber-800 text-sm uppercase tracking-widest font-light">Master Craftspeople</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-stone-900 mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Hands of Heritage
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Meet the master artisans whose decades of expertise and passion shape every Haendeu creation with unparalleled skill and dedication.
          </p>
        </div>

        {/* Artisan Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Artisan Selector */}
          <div className="lg:col-span-4">
            <div className={`space-y-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              {artisans.map((artisan, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedArtisan(index)}
                  className={`group cursor-pointer transition-all duration-500 ${
                    selectedArtisan === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className={`p-6 rounded-2xl transition-all duration-500 ${
                    selectedArtisan === index 
                      ? 'bg-amber-600 text-white shadow-2xl' 
                      : 'bg-white text-stone-900 border border-stone-200 hover:border-amber-300 hover:shadow-xl'
                  }`}>
                    <div className="flex items-center space-x-4">
                      {/* Profile Image */}
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                          selectedArtisan === index ? 'border-white shadow-lg scale-110' : 'border-amber-300'
                        }`}>
                          <img 
                            src={artisan.image}
                            alt={artisan.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {selectedArtisan === index && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <i className="ri-star-fill text-amber-600 text-sm"></i>
                          </div>
                        )}
                      </div>

                      {/* Artisan Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-light mb-1">{artisan.name}</h3>
                        <p className={`text-sm mb-2 transition-colors duration-300 ${
                          selectedArtisan === index ? 'text-amber-100' : 'text-stone-600'
                        }`}>
                          {artisan.role}
                        </p>
                        <div className="flex items-center space-x-2">
                          <i className={`ri-time-line text-sm transition-colors duration-300 ${
                            selectedArtisan === index ? 'text-amber-200' : 'text-amber-600'
                          }`}></i>
                          <span className={`text-xs transition-colors duration-300 ${
                            selectedArtisan === index ? 'text-amber-200' : 'text-stone-500'
                          }`}>
                            {artisan.experience}
                          </span>
                        </div>
                      </div>

                      {/* Selection Indicator */}
                      <div className={`transition-all duration-300 ${
                        selectedArtisan === index ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90 group-hover:opacity-50 group-hover:rotate-0'
                      }`}>
                        <i className={`ri-arrow-right-line text-xl ${
                          selectedArtisan === index ? 'text-white' : 'text-amber-600'
                        }`}></i>
                      </div>
                    </div>

                    {/* Expanded Info for Selected */}
                    {selectedArtisan === index && (
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-sm text-amber-100 leading-relaxed">
                          {artisan.specialization}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Artisan Profile */}
          <div className="lg:col-span-8">
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Portrait & Signature Work */}
                  <div className="relative">
                    {/* Main Portrait */}
                    <div className="h-96 overflow-hidden">
                      <img 
                        src={artisans[selectedArtisan].image}
                        alt={artisans[selectedArtisan].name}
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                      />
                    </div>

                    {/* Signature Work Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 mb-3">
                        <img 
                          src={artisans[selectedArtisan].signature}
                          alt="Signature Work"
                          className="w-full h-20 object-cover rounded"
                        />
                      </div>
                      <p className="text-white text-xs uppercase tracking-widest">Signature Work</p>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full">
                      <span className="text-sm font-light">{artisans[selectedArtisan].experience}</span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-8">
                    <div className="h-96 flex flex-col justify-between">
                      {/* Header */}
                      <div>
                        <h3 className="text-3xl font-light text-stone-900 mb-2">
                          {artisans[selectedArtisan].name}
                        </h3>
                        <p className="text-amber-600 text-lg mb-6">
                          {artisans[selectedArtisan].role}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm uppercase tracking-widest text-stone-500 mb-2">Specialization</h4>
                          <p className="text-stone-700 leading-relaxed">
                            {artisans[selectedArtisan].specialization}
                          </p>
                        </div>
                      </div>

                      {/* Philosophy Quote */}
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-widest text-stone-500 mb-3">Philosophy</h4>
                        <blockquote className="text-stone-700 italic leading-relaxed text-lg relative">
                          <i className="ri-double-quotes-l text-2xl text-amber-400/40 absolute -top-2 -left-2"></i>
                          <span className="relative z-10">{artisans[selectedArtisan].philosophy}</span>
                          <i className="ri-double-quotes-r text-2xl text-amber-400/40 absolute -bottom-2 -right-2"></i>
                        </blockquote>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-stone-500 mb-3">Achievements</h4>
                        <div className="space-y-2">
                          {artisans[selectedArtisan].achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-stone-600 text-sm leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {artisans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedArtisan(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === selectedArtisan 
                        ? 'bg-amber-600 scale-125' 
                        : 'bg-stone-300 hover:bg-stone-400 hover:scale-110'
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