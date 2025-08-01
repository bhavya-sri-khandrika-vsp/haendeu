'use client';

import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const testimonials = [
    {
      quote: "Every Haendeu piece I own has become a cherished part of my story. The craftsmanship is unparalleled, and the design transcends time.",
      author: "Isabella Chen",
      title: "Art Curator, New York",
      image: "https://readdy.ai/api/search-image?query=Elegant%20professional%20woman%20with%20sophisticated%20style%20holding%20premium%20leather%20handbag%2C%20natural%20portrait%20photography%20with%20soft%20lighting%2C%20modern%20urban%20background%2C%20refined%20and%20confident%20expression&width=400&height=500&seq=testimonial-1&orientation=portrait"
    },
    {
      quote: "Haendeu understands that luxury is not about excess, but about perfection in every detail. Their bags are wearable sculptures.",
      author: "Victoria Montrose",
      title: "Fashion Editor, Paris",
      image: "https://readdy.ai/api/search-image?query=Stylish%20fashion%20editor%20woman%20in%20chic%20Parisian%20setting%20with%20luxury%20handbag%2C%20sophisticated%20portrait%20with%20artistic%20composition%2C%20warm%20natural%20lighting%20highlighting%20elegant%20features%20and%20premium%20accessories&width=400&height=500&seq=testimonial-2&orientation=portrait"
    },
    {
      quote: "When I carry a Haendeu bag, I feel connected to something timeless. It's not just an accessory – it's an extension of my identity.",
      author: "Elena Rossi",
      title: "Interior Designer, Milan",
      image: "https://readdy.ai/api/search-image?query=Creative%20Italian%20woman%20designer%20with%20refined%20taste%20holding%20artisan%20leather%20handbag%2C%20natural%20portrait%20in%20design%20studio%20environment%2C%20sophisticated%20lighting%20showcasing%20personal%20style%20and%20craftsmanship%20appreciation&width=400&height=500&seq=testimonial-3&orientation=portrait"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Voices of Excellence
          </h2>
        </div>

        <div className="relative">
          {/* Diagonal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Rotating Testimonials */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative h-96">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeTestimonial === index 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-stone-700 mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <div className="font-light text-lg text-stone-800">{testimonial.author}</div>
                        <div className="text-sm text-amber-600 uppercase tracking-wide">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonial === index 
                        ? 'bg-amber-600 scale-125' 
                        : 'bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Floating Images */}
            <div className={`relative h-96 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="absolute top-0 right-0 w-48 h-64 transform rotate-12">
                <img 
                  src="https://readdy.ai/api/search-image?query=Luxury%20handbag%20collection%20arranged%20artistically%20on%20marble%20surface%20with%20dramatic%20shadow%20play%2C%20high-end%20product%20photography%20with%20sophisticated%20lighting%2C%20minimalist%20composition%20highlighting%20craftsmanship%20and%20premium%20materials&width=400&height=600&seq=testimonial-bg-1&orientation=portrait"
                  alt="Luxury Collection"
                  className="w-full h-full object-cover object-top rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute bottom-0 left-8 w-40 h-52 transform -rotate-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Elegant%20woman%20hands%20holding%20premium%20leather%20handbag%20with%20soft%20natural%20lighting%2C%20intimate%20product%20photography%20showing%20human%20connection%20with%20luxury%20craftsmanship%2C%20warm%20tones%20and%20sophisticated%20styling&width=350&height=500&seq=testimonial-bg-2&orientation=portrait"
                  alt="Craftsmanship Detail"
                  className="w-full h-full object-cover object-top rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}