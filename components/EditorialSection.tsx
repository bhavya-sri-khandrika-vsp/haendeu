'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function EditorialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);
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

  const articles = [
    {
      title: "Designing for the Decades",
      subtitle: "The Philosophy Behind Timeless Luxury",
      excerpt: "How we create pieces that transcend fleeting trends and become heirlooms for future generations.",
      image: "https://readdy.ai/api/search-image?query=Elegant%20design%20studio%20with%20vintage%20and%20modern%20handbag%20sketches%20spread%20across%20marble%20table%2C%20designer%20tools%20and%20inspiration%20boards%2C%20warm%20natural%20lighting%20highlighting%20creative%20process%20and%20timeless%20design%20evolution&width=800&height=600&seq=editorial-1&orientation=landscape",
      readTime: "5 min read",
      date: "December 15, 2024"
    },
    {
      title: "Leather: A Living Material",
      subtitle: "Understanding the Soul of Craftsmanship",
      excerpt: "Exploring the journey from raw hide to finished luxury, and why the finest leather tells its own story.",
      image: "https://readdy.ai/api/search-image?query=Artistic%20close-up%20of%20premium%20Italian%20leather%20in%20various%20stages%20of%20treatment%2C%20rich%20textures%20and%20natural%20grains%20highlighted%20by%20warm%20studio%20lighting%2C%20sophisticated%20craftsmanship%20photography%20showing%20leather%20quality%20and%20beauty&width=800&height=600&seq=editorial-2&orientation=landscape",
      readTime: "7 min read",
      date: "December 10, 2024"
    },
    {
      title: "Inside the Atelier",
      subtitle: "Where Masters Create Magic",
      excerpt: "An intimate look at our Florence workshop, where tradition meets innovation in the hands of master artisans.",
      image: "https://readdy.ai/api/search-image?query=Traditional%20European%20leather%20workshop%20with%20master%20artisan%20hands%20carefully%20working%20on%20luxury%20handbag%2C%20warm%20golden%20lighting%20highlighting%20traditional%20tools%20and%20techniques%2C%20authentic%20craftsmanship%20atmosphere%20with%20premium%20materials&width=800&height=600&seq=editorial-3&orientation=landscape",
      readTime: "6 min read",
      date: "December 5, 2024"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-stone-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Stories from Haendeu
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Design journeys, timeless style, and behind-the-scenes from our atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredArticle(index)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  src={article.image}
                  alt={article.title}
                  className={`w-full h-64 object-cover object-top transition-all duration-700 ${
                    hoveredArticle === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  hoveredArticle === index ? 'opacity-20' : 'opacity-0'
                }`}></div>

                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs text-stone-600 font-light uppercase tracking-wide">
                    {article.readTime}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-500 uppercase tracking-wide">
                  <span>{article.date}</span>
                  <span className="text-amber-600">Editorial</span>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-2 text-stone-800 group-hover:text-amber-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <h4 className="text-sm text-amber-600 uppercase tracking-wide mb-3">
                    {article.subtitle}
                  </h4>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center text-stone-800 text-sm font-light group-hover:text-amber-600 transition-colors duration-300">
                  <span className="mr-2">Read Article</span>
                  <i className={`ri-arrow-right-line transition-transform duration-300 ${
                    hoveredArticle === index ? 'translate-x-1' : 'translate-x-0'
                  }`}></i>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link href="/editorial">
            <button className="bg-black text-white px-12 py-4 text-sm font-light tracking-wide uppercase hover:bg-amber-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap">
              Read the Journal
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}