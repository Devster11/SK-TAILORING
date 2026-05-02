import React from 'react';

// ==========================================
// REPLACE THESE IMAGES WITH YOUR OWN ASSETS
// ==========================================
const IMAGES = {
  // Recommended: landscape orientation images showcasing your craftsmanship
  card1: "https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?auto=format&fit=crop&q=80&w=800",
  card2: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
  card3: "https://images.unsplash.com/photo-1596464518120-21b6a3782b12?auto=format&fit=crop&q=80&w=800"
};

const Story = () => {
  const cards = [
    {
      imgUrl: IMAGES.card1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M14 6L6 14M21 3L14 10M17 10L21 14M3 21l3.5-3.5M6 18l4-4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="6" r="3"/>
          <circle cx="18" cy="18" r="3"/>
        </svg>
      ),
      title: "Timeless Craftsmanship",
      desc: "Handcrafted with precision and passion."
    },
    {
      imgUrl: IMAGES.card2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M6 3h12l4 6-10 12L2 9l4-6z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 9h20M12 21V9M6 3l6 6M18 3l-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Premium Fabrics",
      desc: "We use only the finest materials for every creation."
    },
    {
      imgUrl: IMAGES.card3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M12 3c-1.5 0-2.5 1-2.5 2 0 1.5-1.5 2-3.5 2-1 0-2 1-2 2v2c0 1 1 2 2 2h1.5v6c0 1 1 2 2 2h3c1 0 2-1 2-2v-6H18c1 0 2-1 2-2v-2c0-1-1-2-2-2-2 0-3.5-.5-3.5-2 0-1-1-2-2.5-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11h6" strokeLinecap="round"/>
        </svg>
      ),
      title: "Perfect Fit",
      desc: "Designed to celebrate your unique silhouette."
    }
  ];

  return (
    <section id="story" className="relative z-10 w-full pt-16 pb-24 px-6 overflow-hidden">
      
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
          {/* Stylized Rose */}
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
        <div className="text-center mb-16">
          <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mb-4">
            At Our Atelier
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] text-text-main leading-tight mb-6">
            every stitch<br />tells a story.
          </h2>
          
          <div className="flex items-center justify-center w-full mb-6">
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
            <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
          </div>
          
          <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
            Our creations are a blend of tradition, artistry and attention<br className="hidden md:block" /> 
            to detail - crafted to make you feel extraordinary.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col relative group hover:shadow-md transition-shadow duration-300">
              
              {/* Desktop Image (Hidden on Mobile) */}
              <div className="hidden md:block w-full h-[220px] lg:h-[260px] relative">
                <img src={card.imgUrl} alt={card.title} className="w-full h-full object-cover" />
              </div>

              {/* Overlapping Icon Badge (Desktop & Mobile) */}
              <div className="md:absolute md:top-[220px] lg:top-[260px] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                              bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm 
                              mx-auto mt-8 md:mt-0 border border-black/5 z-10">
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="p-8 md:pt-12 text-center flex-1 flex flex-col justify-center">
                <h4 className="font-heading text-[1.35rem] text-text-main mb-3">{card.title}</h4>
                <p className="text-text-muted text-[0.85rem] leading-relaxed px-2">{card.desc}</p>
              </div>
            </div>
          ))}
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

export default Story;
