import React from 'react';

const Hero = () => {
  // REPLACE THESE IMAGES WITH YOUR OWN ASSETS
  // Recommended aspect ratio: 4:5 for both mobile and desktop hero images
  const IMAGES = {
    hero: "https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <section id="home" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pt-4 lg:pt-10 pb-16">
      {/* Decorative floral SVG left */}
      <div className="absolute top-20 left-0 hidden lg:block opacity-40 pointer-events-none -z-10 w-80 h-80">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent stroke-current fill-none" strokeWidth="0.5">
           <path d="M100,20 C120,50 180,60 190,100 C180,140 120,150 100,180 C80,150 20,140 10,100 C20,60 80,50 100,20 Z"/>
           <path d="M100,40 C110,60 150,70 160,100 C150,130 110,140 100,160 C90,140 50,130 40,100 C50,70 90,60 100,40 Z" opacity="0.6"/>
           <circle cx="100" cy="100" r="15"/>
         </svg>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Mobile Image (Shows on top for mobile, hidden on desktop) */}
        <div className="w-full lg:hidden rounded-sm overflow-hidden h-[450px] shadow-sm relative">
           <img 
              src={IMAGES.hero} 
              alt="Elegant Saree Design" 
              className="w-full h-full object-cover object-center"
           />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center space-x-3 mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent opacity-60">
               <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/>
            </svg>
            <span className="text-[0.65rem] tracking-[0.25em] font-semibold text-accent uppercase">Handcrafted with passion</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-text-main mb-6">
            Timeless Elegance,<br/>Tailored to Perfection
          </h2>

          <div className="flex items-center justify-center lg:justify-start w-full mb-6">
            <div className="w-8 h-[1px] bg-accent opacity-50"></div>
            <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
            <div className="w-8 h-[1px] bg-accent opacity-50"></div>
          </div>

          <p className="text-text-muted text-[1.05rem] md:text-lg mb-10 max-w-[400px]">
            Bespoke blouse and saree designs crafted to celebrate your individuality.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#gallery" className="bg-accent text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-full shadow-md hover:bg-accent-hover transition-all duration-300">
              Explore Designs
            </a>
            <a href="#gallery" className="group flex items-center space-x-3 text-accent hover:text-accent-hover transition-colors">
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                  <path d="M5 3l14 9-14 9V3z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase">See Our Work</span>
            </a>
          </div>
        </div>

        {/* Desktop Image (Hidden on mobile) */}
        <div className="hidden lg:block w-full lg:w-1/2 relative">
           <div className="relative z-10 rounded-sm overflow-hidden h-[600px] xl:h-[700px] shadow-sm">
             <img 
                src={IMAGES.hero} 
                alt="Elegant Saree Design" 
                className="w-full h-full object-cover object-top"
             />
           </div>
           
           {/* Decorative background shape/shadow */}
           <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#F2EDE4] -z-10 rounded-sm"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
