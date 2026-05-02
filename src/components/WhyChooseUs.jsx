import React from 'react';

// ==========================================
// REPLACE THESE IMAGES WITH YOUR OWN ASSETS
// ==========================================
const IMAGES = {
  // Recommended: square headshots for client avatars
  avatar1: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100',
  avatar2: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100&h=100',
  avatar3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
  avatar4: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=100&h=100'
};

const WhyChooseUs = () => {
  const cards = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent mb-6 mx-auto">
          {/* Needle with heart and thread circle placeholder */}
          <path d="M12 21.5c-4.686 0-8.5-3.814-8.5-8.5 0-4.686 3.814-8.5 8.5-8.5 4.686 0 8.5 3.814 8.5 8.5" strokeLinecap="round"/>
          <path d="M12 4v4m0 0l-1.5-1.5M12 8l1.5-1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11.5c-1.38 0-2.5 1.12-2.5 2.5 0 1.667 2.5 4 2.5 4s2.5-2.333 2.5-4c0-1.38-1.12-2.5-2.5-2.5z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Bespoke\nCraftsmanship",
      desc: "Every design is tailored exclusively for you."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent mb-6 mx-auto">
          <path d="M6 3h12l4 6-10 12L2 9l4-6z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 9h20M12 21V9M6 3l6 6M18 3l-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Premium\nFinishes",
      desc: "Attention to detail in every stitch and pattern."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent mb-6 mx-auto">
          <path d="M12 3c-1.5 0-2.5 1-2.5 2 0 1.5-1.5 2-3.5 2-1 0-2 1-2 2v2c0 1 1 2 2 2h1.5v6c0 1 1 2 2 2h3c1 0 2-1 2-2v-6H18c1 0 2-1 2-2v-2c0-1-1-2-2-2-2 0-3.5-.5-3.5-2 0-1-1-2-2.5-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11h6" strokeLinecap="round"/>
        </svg>
      ),
      title: "Perfect Fit\nGuarantee",
      desc: "Designed to enhance comfort and confidence."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent mb-6 mx-auto">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="7" y1="7" x2="7.01" y2="7" strokeLinecap="round" strokeWidth="2"/>
        </svg>
      ),
      title: "Affordable\nPrice Range",
      desc: "Luxury designs that respect your budget."
    }
  ];

  return (
    <section className="relative z-10 w-full pt-16 pb-24 px-6 overflow-hidden">
      
      {/* Decorative Silk Fabric (Left) */}
      <div className="absolute top-0 left-0 w-64 md:w-[450px] h-[500px] pointer-events-none -z-10 opacity-60 mix-blend-multiply">
        <img 
          src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=600" 
          alt="Silk texture" 
          className="w-full h-full object-cover object-right"
          style={{ maskImage: 'linear-gradient(to bottom right, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom right, black, transparent)' }}
        />
      </div>

      {/* Decorative Rose (Right) */}
      <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 pointer-events-none -z-10 opacity-30 text-accent">
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current" strokeWidth="1.5">
          <path d="M256,400 C256,400 350,300 400,200 C450,100 256,50 256,150 C256,50 62,100 112,200 C162,300 256,400 256,400 Z" strokeLinejoin="round"/>
          <path d="M256,150 C300,150 350,200 350,250 C350,300 256,350 256,350 C256,350 162,300 162,250 C162,200 212,150 256,150 Z" strokeLinejoin="round"/>
          <path d="M256,220 C280,220 300,240 300,260 C300,280 256,300 256,300 C256,300 212,280 212,260 C212,240 232,220 256,220 Z" strokeLinejoin="round"/>
          <path d="M256,400 C250,450 200,500 150,512" strokeLinecap="round"/>
          <path d="M230,440 C180,430 140,400 120,380 C140,380 180,390 230,440 Z" strokeLinejoin="round"/>
          <path d="M280,450 C330,450 380,430 410,400 C390,390 340,410 280,450 Z" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <div className="text-center mb-12">
          <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mb-4">
            Why Choose Us
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] text-text-main leading-tight mb-6">
            Crafted with care,<br className="hidden md:block" /> chosen for you.
          </h2>
          
          <div className="flex items-center justify-center w-full mb-6">
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
            <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
          </div>
          
          <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
            Every stitch reflects our passion for perfection<br className="hidden md:block" /> 
            and your trust in us.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-black/5 p-8 md:p-10 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
              <div className="mb-2">
                {card.icon}
              </div>
              <h4 className="font-heading text-xl text-text-main mb-4 whitespace-pre-line">{card.title}</h4>
              <div className="w-8 h-[1px] bg-accent opacity-30 mb-4"></div>
              <p className="text-text-muted text-[0.8rem] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner Card / 5th Card */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-black/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-start max-w-4xl mx-auto mb-16 gap-6 md:gap-12 hover:shadow-md transition-shadow duration-300">
          
          {/* Mobile Title (shows on top for mobile, hidden on desktop) */}
          <h4 className="md:hidden font-heading text-lg font-semibold text-text-main text-center">
            Trusted by 10K+ Clients
          </h4>

          {/* Avatars */}
          <div className="flex items-center justify-center">
            {/* 4 Overlapping Avatar Images */}
            {[IMAGES.avatar1, IMAGES.avatar2, IMAGES.avatar3, IMAGES.avatar4].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt="Client" 
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white object-cover ${i !== 0 ? '-ml-4 md:-ml-5' : ''}`}
              />
            ))}
            {/* 10K+ Circle */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent bg-[#FDFBF7] flex items-center justify-center -ml-4 md:-ml-5 z-10 text-accent font-semibold text-xs md:text-sm shadow-sm">
              10K+
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h4 className="hidden md:block font-heading text-xl text-text-main mb-1">
              Trusted by 10K+ Clients
            </h4>
            <p className="text-text-muted text-[0.8rem] md:text-[0.9rem]">
              Loved by thousands of happy customers.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <a 
          href="https://wa.me/1234567890?text=Hello%20Saaj%20Atelier!%20I%20would%20like%20to%20connect%20with%20you."
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full shadow-md hover:bg-accent-hover transition-all duration-300 flex items-center gap-3"
        >
          <span>Connect With Us</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

      </div>
    </section>
  );
};

export default WhyChooseUs;
