'use client';

import { useState, useEffect, useRef } from 'react';

export default function InnovationLab() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const innovations = [
    {
      title: 'Smart Leather Technology',
      category: 'Material Innovation',
      description: 'Revolutionary nano-coating that enhances leather durability while maintaining natural breathability and aging characteristics.',
      features: ['Self-healing micro-scratches', 'Enhanced water resistance', 'UV protection', 'Natural aging preserved'],
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20leather%20technology%20laboratory%2C%20nano-coating%20application%20on%20premium%20leather%2C%20scientific%20leather%20treatment%20process%2C%20modern%20innovation%20workspace%20with%20high-tech%20equipment&width=600&height=400&seq=smart-leather&orientation=landscape',
      icon: 'ri-microscope-line',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: '3D Pattern Modeling',
      category: 'Design Technology',
      description: 'Advanced computer modeling system that optimizes leather usage and predicts stress points for superior durability.',
      features: ['Zero-waste cutting', 'Stress analysis', 'Perfect fit prediction', 'Material optimization'],
      image: 'https://readdy.ai/api/search-image?query=Advanced%203D%20modeling%20laboratory%20for%20leather%20bag%20design%2C%20computer-aided%20pattern%20creation%2C%20digital%20design%20technology%20workspace%2C%20modern%20CAD%20systems%20for%20luxury%20leather%20goods&width=600&height=400&seq=3d-modeling&orientation=landscape',
      icon: 'ri-3d-rotate-line',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Precision Robotics',
      category: 'Crafting Innovation',
      description: 'Collaborative robots assist master artisans in achieving unprecedented precision while preserving the human touch.',
      features: ['Micro-precision stitching', 'Consistent quality', 'Artisan collaboration', 'Error reduction'],
      image: 'https://readdy.ai/api/search-image?query=Collaborative%20robotics%20in%20luxury%20leather%20workshop%2C%20precision%20robotic%20arms%20assisting%20artisan%20craftsmanship%2C%20modern%20technology%20meets%20traditional%20leatherwork%2C%20innovative%20manufacturing%20environment&width=600&height=400&seq=precision-robotics&orientation=landscape',
      icon: 'ri-robot-line',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Sustainability Lab',
      category: 'Environmental Innovation',
      description: 'Research facility developing eco-friendly tanning processes and circular economy solutions for luxury leather goods.',
      features: ['Carbon-neutral processes', 'Biodegradable components', 'Waste reduction', 'Renewable energy'],
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20leather%20research%20laboratory%2C%20eco-friendly%20tanning%20processes%2C%20green%20technology%20for%20luxury%20leather%20production%2C%20environmental%20innovation%20workspace%20with%20natural%20elements&width=600&height=400&seq=sustainability-lab&orientation=landscape',
      icon: 'ri-leaf-line',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-950 via-stone-900 to-slate-950 text-white relative overflow-hidden">
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
      ></div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-tech opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-blue-900/20 backdrop-blur-md px-6 py-2 rounded-full border border-blue-500/30 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm uppercase tracking-widest font-light">Future Forward</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Innovation Lab
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Where traditional craftsmanship meets cutting-edge technology, pushing the boundaries of what's possible in luxury leather goods.
          </p>
        </div>

        {/* Innovation Tabs */}
        <div className="mb-16">
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {innovations.map((innovation, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group px-8 py-4 rounded-2xl transition-all duration-500 cursor-pointer whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25 scale-105'
                    : 'bg-stone-800/50 backdrop-blur-md text-stone-300 hover:bg-stone-700/50 hover:text-white border border-stone-700 hover:border-stone-500'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeTab === index ? 'bg-white/20' : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                  }`}>
                    <i className={`${innovation.icon} text-lg`}></i>
                  </div>
                  <div className="text-left">
                    <p className="font-light text-lg">{innovation.title}</p>
                    <p className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                      activeTab === index ? 'text-blue-200' : 'text-stone-500 group-hover:text-stone-400'
                    }`}>
                      {innovation.category}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Innovation Showcase */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Innovation Details */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Background Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${innovations[activeTab].color} opacity-20 blur-2xl rounded-3xl`}></div>
                
                <div className="relative bg-stone-900/80 backdrop-blur-md p-8 rounded-3xl border border-stone-700">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${innovations[activeTab].color} flex items-center justify-center shadow-lg`}>
                      <i className={`${innovations[activeTab].icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-white">{innovations[activeTab].title}</h3>
                      <p className="text-blue-400 text-sm uppercase tracking-widest">{innovations[activeTab].category}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-stone-300 leading-relaxed text-lg mb-8">
                    {innovations[activeTab].description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {innovations[activeTab].features.map((feature, idx) => (
                      <div key={idx} className="group flex items-center space-x-3 p-3 rounded-xl bg-stone-800/50 hover:bg-stone-800 transition-all duration-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${innovations[activeTab].color} shadow-lg`}></div>
                        <span className="text-stone-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-stone-800">
                    <button className={`group flex items-center space-x-3 text-white hover:text-blue-300 transition-all duration-300 cursor-pointer`}>
                      <span className="text-lg font-light">Learn More</span>
                      <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:border-blue-300 group-hover:scale-110 transition-all duration-300">
                        <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform duration-300"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Showcase */}
            <div className="lg:col-span-6">
              <div className="relative group">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={innovations[activeTab].image}
                    alt={innovations[activeTab].title}
                    className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${innovations[activeTab].color} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  {/* Tech UI Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:from-black/40 transition-all duration-500"></div>
                </div>

                {/* Floating Tech Stats */}
                <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-stone-700 shadow-xl transform group-hover:scale-110 transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${innovations[activeTab].color} animate-pulse`}></div>
                    <div>
                      <p className="text-white text-sm font-light">Active Research</p>
                      <p className="text-stone-400 text-xs">Status: Ongoing</p>
                    </div>
                  </div>
                </div>

                {/* Tech Progress Ring */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-stone-800 bg-black/80 backdrop-blur-md flex items-center justify-center shadow-xl transform group-hover:rotate-180 transition-all duration-1000">
                  <div className="text-center">
                    <p className="text-blue-400 text-xs font-light">R&D</p>
                    <p className="text-white text-lg font-light">{(activeTab + 1) * 23}%</p>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ padding: '2px' }}>
                  <div className="w-full h-full rounded-3xl bg-stone-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="mt-20">
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl font-light text-white mb-4">Innovation Roadmap</h3>
            <p className="text-stone-400">Pioneering the future of luxury craftsmanship</p>
          </div>

          <div className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {['2024', '2025', '2026', '2027'].map((year, idx) => (
              <div key={year} className="group text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-3 transition-all duration-500 ${
                  idx === 0 ? 'bg-blue-400 shadow-lg shadow-blue-400/50' : 'bg-stone-600 group-hover:bg-stone-500'
                }`}></div>
                <p className={`text-sm transition-colors duration-300 ${
                  idx === 0 ? 'text-blue-400' : 'text-stone-500 group-hover:text-stone-400'
                }`}>
                  {year}
                </p>
                <div className="w-px h-8 bg-stone-800 mx-auto mt-3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}