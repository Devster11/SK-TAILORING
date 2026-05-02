import React, { useState } from 'react';
import CircularGallery from './CircularGallery';

// ==========================================
// REPLACE THESE IMAGES WITH YOUR OWN ASSETS
// ==========================================

// Images for the curved 3D gallery at the top
const CIRCULAR_ITEMS = [
  { image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=600', text: 'Royal' },
  { image: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?auto=format&fit=crop&q=80&w=600', text: 'Heritage' },
  { image: 'https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?auto=format&fit=crop&q=80&w=600', text: 'Minimal' },
  { image: 'https://images.unsplash.com/photo-1605335133649-1dbdb8f47b2c?auto=format&fit=crop&q=80&w=600', text: 'Symphony' },
  { image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=600', text: 'Bridal' },
  { image: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?auto=format&fit=crop&q=80&w=600', text: 'Classic' }
];

// Images for the main grid gallery
const GRID_ITEMS = [
  {
    img: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=800',
    title: 'Royal Bridal',
    desc: 'Exquisite hand embroidery with intricate french knots.'
  },
  {
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?auto=format&fit=crop&q=80&w=800',
    title: 'Heritage Weave',
    desc: 'Traditional motifs woven with timeless craftsmanship.'
  },
  {
    img: 'https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?auto=format&fit=crop&q=80&w=800',
    title: 'Minimal Elegance',
    desc: 'Subtle embroidery for a graceful and elegant look.'
  },
  {
    img: 'https://images.unsplash.com/photo-1605335133649-1dbdb8f47b2c?auto=format&fit=crop&q=80&w=800',
    title: 'Golden Symphony',
    desc: 'Inspired by royalty, crafted to perfection.'
  },
  {
    img: 'https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?auto=format&fit=crop&q=80&w=800',
    title: 'Blush Radiance',
    desc: 'Soft pastels adorned with shimmering zardosi work.'
  },
  {
    img: 'https://images.unsplash.com/photo-1605335133649-1dbdb8f47b2c?auto=format&fit=crop&q=80&w=800',
    title: 'Emerald Dream',
    desc: 'Deep greens matched with rich golden thread details.'
  },
  {
    img: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=800',
    title: 'Classic Vintage',
    desc: 'A nod to the past with exquisite pearl highlights.'
  },
  {
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?auto=format&fit=crop&q=80&w=800',
    title: 'Regal Charm',
    desc: 'Bold patterns designed to make a majestic statement.'
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL DESIGNS');
  
  const filters = ['ALL DESIGNS', 'BRIDAL', 'FESTIVE', 'MINIMAL', 'CONTEMPORARY', 'CUSTOM MADE'];

  return (
    <section id="gallery" className="relative z-10 w-full pt-24 pb-32 px-6 overflow-hidden bg-background">
      
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

      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center w-full mb-4">
            <div className="w-4 h-[1px] bg-accent opacity-50"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
            <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mx-2">
              Our Collection
            </h3>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
            <div className="w-4 h-[1px] bg-accent opacity-50"></div>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-text-main leading-tight mb-6">
            Timeless Designs, Crafted for You
          </h2>
          
          <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of handcrafted blouse designs,<br className="hidden md:block" /> 
            where tradition meets modern elegance.
          </p>
        </div>

        {/* Circular Gallery Section */}
        <div className="w-full h-[400px] md:h-[500px] mb-16 relative">
          <CircularGallery 
             items={CIRCULAR_ITEMS} 
             bend={2.5} 
             textColor="#CBA153" 
             borderRadius={0.08} 
             scrollEase={0.05} 
             font="bold 24px Playfair Display"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 w-full px-4">
          {filters.map((filter, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border
                ${activeFilter === filter 
                  ? 'bg-accent text-white border-accent shadow-md' 
                  : 'bg-transparent text-text-muted border-black/10 hover:border-accent hover:text-accent'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {GRID_ITEMS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-300">
              
              {/* Image Container */}
              <div className="relative w-full h-[320px] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Hover Magnify Button */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-accent shadow-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-accent hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-center flex-1 flex flex-col items-center justify-center bg-white">
                <h4 className="font-heading text-xl text-text-main mb-3">{item.title}</h4>
                <p className="text-text-muted text-[0.8rem] leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="border border-accent text-accent text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2">
          <span>Load More Designs</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>

      </div>
    </section>
  );
};

export default Gallery;
