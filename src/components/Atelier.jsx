import React from 'react';

const Atelier = () => {
  return (
    <section className="relative z-10 py-20 lg:py-32 w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Decorative floral background element bottom right */}
      <div className="absolute -bottom-20 -right-20 lg:-bottom-32 lg:-right-32 opacity-20 pointer-events-none -z-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent stroke-current fill-none" strokeWidth="0.5">
           <path d="M100,0 C120,40 180,50 200,100 C180,150 120,160 100,200 C80,160 20,150 0,100 C20,50 80,40 100,0 Z"/>
           <circle cx="100" cy="100" r="40"/>
           <path d="M100,20 C110,50 150,60 180,100 C150,140 110,150 100,180 C90,150 50,140 20,100 C50,60 90,50 100,20 Z" opacity="0.5"/>
         </svg>
      </div>

      <div className="flex flex-col items-center max-w-3xl mx-auto">
        
        {/* Top divider */}
        <div className="flex items-center justify-center w-full mb-6">
          <div className="w-12 h-[1px] bg-accent opacity-50"></div>
          <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
          <div className="w-12 h-[1px] bg-accent opacity-50"></div>
        </div>

        <h3 className="text-[0.65rem] tracking-[0.25em] font-semibold text-accent uppercase mb-6">
          Our Atelier
        </h3>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.2] text-text-main mb-6">
          Where Tradition Meets Artistry
        </h2>

        <p className="text-text-muted text-[1.05rem] md:text-lg max-w-[650px] leading-relaxed">
          At Sk tailoring, we blend timeless craftsmanship with modern elegance to create pieces that are as unique as you are.
        </p>

      </div>
    </section>
  );
};

export default Atelier;
