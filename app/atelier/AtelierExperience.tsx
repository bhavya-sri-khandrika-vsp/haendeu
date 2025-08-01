'use client';

import { useState, useEffect, useRef } from 'react';

export default function AtelierExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [bookingStep, setBookingStep] = useState(0);
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

  const experiences = [
    {
      title: 'Master Class',
      subtitle: 'Learn from the Masters',
      duration: '4 Hours',
      groupSize: 'Max 6 people',
      price: '€850',
      description: 'Immerse yourself in the art of leather crafting alongside our master artisans. Learn traditional techniques, work with premium materials, and create your own small leather accessory.',
      includes: ['Personal leather kit', 'Traditional tools', 'Master guidance', 'Certificate', 'Lunch included'],
      image: 'https://readdy.ai/api/search-image?query=Intimate%20leather%20crafting%20workshop%20with%20small%20group%20of%20students%20learning%20from%20master%20artisan%2C%20hands-on%20leather%20working%20experience%2C%20traditional%20workshop%20setting%20with%20premium%20tools&width=600&height=400&seq=master-class&orientation=landscape',
      icon: 'ri-graduation-cap-line',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Private Tour',
      subtitle: 'Behind the Scenes',
      duration: '2 Hours',
      groupSize: 'Up to 8 people',
      price: '€350',
      description: 'Exclusive access to our workshop spaces, meet our artisans, witness the creation process, and discover the secrets behind Haendeu craftsmanship.',
      includes: ['Expert guide', 'Workshop access', 'Artisan meetings', 'Welcome refreshments', 'Exclusive insights'],
      image: 'https://readdy.ai/api/search-image?query=Exclusive%20private%20tour%20of%20luxury%20leather%20workshop%2C%20visitors%20observing%20master%20craftsmen%20at%20work%2C%20behind-the-scenes%20access%20to%20premium%20atelier%2C%20elegant%20guided%20experience&width=600&height=400&seq=private-tour&orientation=landscape',
      icon: 'ri-eye-line',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Bespoke Creation',
      subtitle: 'Your Vision, Our Craft',
      duration: '6 Weeks',
      groupSize: 'Individual',
      price: 'From €3,500',
      description: 'Collaborate with our masters to design and create a completely bespoke piece. From concept to completion, witness your vision transform into a timeless masterpiece.',
      includes: ['Design consultation', 'Premium materials', 'Master craftsmanship', 'Regular updates', 'Lifetime warranty'],
      image: 'https://readdy.ai/api/search-image?query=One-on-one%20consultation%20for%20bespoke%20luxury%20handbag%20creation%2C%20client%20and%20master%20artisan%20discussing%20custom%20design%2C%20exclusive%20personalized%20craftsmanship%20experience&width=600&height=400&seq=bespoke-creation&orientation=landscape',
      icon: 'ri-palette-line',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Heritage Journey',
      subtitle: 'Full Day Experience',
      duration: '8 Hours',
      groupSize: 'Max 4 people',
      price: '€1,250',
      description: 'The ultimate craftsmanship experience. From leather selection to final stitching, participate in creating a complete accessory while learning our century-old techniques.',
      includes: ['Full day mentoring', 'Premium leather selection', 'Complete creation process', 'Gourmet lunch', 'Take-home piece'],
      image: 'https://readdy.ai/api/search-image?query=Full%20day%20leather%20crafting%20experience%2C%20comprehensive%20workshop%20journey%20from%20start%20to%20finish%2C%20immersive%20luxury%20craftsmanship%20education%2C%20complete%20artisan%20experience&width=600&height=400&seq=heritage-journey&orientation=landscape',
      icon: 'ri-compass-3-line',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const bookingSteps = [
    { title: 'Select Experience', icon: 'ri-cursor-line' },
    { title: 'Choose Date', icon: 'ri-calendar-line' },
    { title: 'Personal Details', icon: 'ri-user-line' },
    { title: 'Confirmation', icon: 'ri-check-line' }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-amber-200/50 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <span className="text-amber-800 text-sm uppercase tracking-widest font-light">Immersive Experiences</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-stone-900 mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Visit Our Atelier
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Step into our world of craftsmanship. From intimate workshops to bespoke creations, discover the perfect way to experience Haendeu artistry.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => setActiveExperience(index)}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                activeExperience === index ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`relative h-full bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-500 ${
                activeExperience === index 
                  ? 'border-amber-400 shadow-2xl shadow-amber-400/20' 
                  : 'border-transparent hover:border-stone-200 hover:shadow-2xl'
              }`}>
                {/* Experience Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    activeExperience === index ? experience.color : 'from-black/40 via-transparent to-transparent'
                  } opacity-60 transition-all duration-500`}></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeExperience === index ? 'bg-white text-stone-900 scale-110' : 'bg-black/50 text-white'
                  }`}>
                    <i className={`${experience.icon} text-xl`}></i>
                  </div>

                  {/* Price Tag */}
                  <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-light transition-all duration-300 ${
                    activeExperience === index ? 'bg-white/90 text-stone-900' : 'bg-black/50 text-white'
                  }`}>
                    {experience.price}
                  </div>
                </div>

                {/* Experience Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className={`text-2xl font-light mb-2 transition-colors duration-300 ${
                      activeExperience === index ? 'text-amber-600' : 'text-stone-900'
                    }`}>
                      {experience.title}
                    </h3>
                    <p className="text-stone-600 text-sm italic">{experience.subtitle}</p>
                  </div>

                  {/* Quick Info */}
                  <div className="flex justify-between items-center mb-4 text-sm text-stone-500">
                    <span className="flex items-center space-x-1">
                      <i className="ri-time-line"></i>
                      <span>{experience.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <i className="ri-group-line"></i>
                      <span>{experience.groupSize}</span>
                    </span>
                  </div>

                  <p className="text-stone-700 text-sm leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-1 mb-6">
                    {experience.includes.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-stone-600">
                        <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                    {experience.includes.length > 3 && (
                      <p className="text-xs text-stone-500 mt-2">+{experience.includes.length - 3} more includes</p>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className={`w-full py-3 text-sm font-light uppercase tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeExperience === index
                      ? 'bg-amber-600 text-white shadow-lg hover:bg-amber-700'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}>
                    {activeExperience === index ? 'Book Now' : 'Select Experience'}
                  </button>
                </div>

                {/* Active Indicator */}
                {activeExperience === index && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-600"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Experience Details */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Experience Deep Dive */}
            <div className="p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${experiences[activeExperience].color} flex items-center justify-center shadow-lg`}>
                  <i className={`${experiences[activeExperience].icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-3xl font-light text-stone-900">{experiences[activeExperience].title}</h3>
                  <p className="text-amber-600">{experiences[activeExperience].subtitle}</p>
                </div>
              </div>

              <p className="text-stone-700 leading-relaxed text-lg mb-8">
                {experiences[activeExperience].description}
              </p>

              {/* Full Includes List */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-widest text-stone-500 mb-4">What's Included</h4>
                <div className="space-y-3">
                  {experiences[activeExperience].includes.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-amber-600 text-sm"></i>
                      </div>
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-stone-50 rounded-2xl">
                <div className="text-center">
                  <p className="text-2xl font-light text-stone-900">{experiences[activeExperience].duration}</p>
                  <p className="text-xs uppercase tracking-widest text-stone-500">Duration</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light text-stone-900">{experiences[activeExperience].groupSize}</p>
                  <p className="text-xs uppercase tracking-widest text-stone-500">Group Size</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light text-amber-600">{experiences[activeExperience].price}</p>
                  <p className="text-xs uppercase tracking-widest text-stone-500">Investment</p>
                </div>
              </div>
            </div>

            {/* Booking Interface */}
            <div className="bg-stone-900 text-white p-12">
              <h4 className="text-2xl font-light mb-8">Reserve Your Experience</h4>

              {/* Booking Steps */}
              <div className="flex items-center justify-between mb-8">
                {bookingSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      idx <= bookingStep ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400'
                    }`}>
                      <i className={`${step.icon} text-sm`}></i>
                    </div>
                    <p className="text-xs mt-2 text-center text-stone-400">{step.title}</p>
                  </div>
                ))}
              </div>

              {/* Progressive Booking Form */}
              <div className="space-y-6">
                {bookingStep === 0 && (
                  <div>
                    <p className="text-stone-300 mb-4">Experience Selected:</p>
                    <div className="p-4 bg-stone-800 rounded-xl">
                      <p className="text-white font-light">{experiences[activeExperience].title}</p>
                      <p className="text-amber-400 text-sm">{experiences[activeExperience].price}</p>
                    </div>
                  </div>
                )}

                {bookingStep === 1 && (
                  <div>
                    <label className="block text-stone-300 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-stone-800 text-white p-3 rounded-xl border border-stone-700 focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-stone-300 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-stone-800 text-white p-3 rounded-xl border border-stone-700 focus:border-amber-600 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-stone-800 text-white p-3 rounded-xl border border-stone-700 focus:border-amber-600 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-white"></i>
                    </div>
                    <p className="text-white">Booking confirmed!</p>
                    <p className="text-stone-400 text-sm">We'll contact you within 24 hours.</p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex space-x-4 pt-4">
                  {bookingStep > 0 && bookingStep < 3 && (
                    <button 
                      onClick={() => setBookingStep(bookingStep - 1)}
                      className="flex-1 py-3 bg-stone-800 text-white rounded-xl hover:bg-stone-700 transition-colors duration-300 cursor-pointer"
                    >
                      Back
                    </button>
                  )}
                  {bookingStep < 3 && (
                    <button 
                      onClick={() => setBookingStep(bookingStep + 1)}
                      className="flex-1 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors duration-300 cursor-pointer"
                    >
                      {bookingStep === 2 ? 'Confirm Booking' : 'Continue'}
                    </button>
                  )}
                  {bookingStep === 3 && (
                    <button 
                      onClick={() => setBookingStep(0)}
                      className="w-full py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors duration-300 cursor-pointer"
                    >
                      Book Another Experience
                    </button>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-stone-800">
                <p className="text-stone-400 text-sm mb-4">Need assistance?</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <i className="ri-phone-line text-amber-400"></i>
                    <span className="text-stone-300">+33 1 42 60 34 56</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-mail-line text-amber-400"></i>
                    <span className="text-stone-300">atelier@haendeu.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}