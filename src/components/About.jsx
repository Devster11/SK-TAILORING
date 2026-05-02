import React from 'react';

// ==========================================
// REPLACE THESE IMAGES WITH YOUR OWN ASSETS
// ==========================================
const IMAGES = {
  // Recommended: landscape image showing someone working or crafting
  storyImage: "https://images.unsplash.com/photo-1595341505325-0ce1486df896?auto=format&fit=crop&q=80&w=800",
  // Recommended: close-up detail shot of embroidery or fabric
  craftsmanshipImage: "https://images.unsplash.com/photo-1588636400030-97db3370f6e9?auto=format&fit=crop&q=80&w=800"
};

const About = () => {
  return (
    <section id="about" className="relative z-10 w-full pt-20 pb-0 overflow-hidden bg-[#FAF8F5]">
      
      {/* 1. Top Section: Our Atelier */}
      <div className="relative w-full px-6 flex flex-col items-center text-center mb-24">
        {/* Decorative Silk Fabric (Left) */}
        <div className="absolute top-[-80px] left-0 w-[500px] h-[400px] pointer-events-none -z-10 opacity-60 mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=600" 
            alt="Silk texture" 
            className="w-full h-full object-cover object-right"
            style={{ maskImage: 'linear-gradient(to bottom right, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom right, black, transparent)' }}
          />
        </div>

        {/* Decorative Rose (Right) */}
        <div className="absolute top-[-50px] right-0 w-[400px] h-[400px] pointer-events-none -z-10 opacity-30 text-accent">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current" strokeWidth="1.5">
            <path d="M256,400 C256,400 350,300 400,200 C450,100 256,50 256,150 C256,50 62,100 112,200 C162,300 256,400 256,400 Z" strokeLinejoin="round"/>
            <path d="M256,150 C300,150 350,200 350,250 C350,300 256,350 256,350 C256,350 162,300 162,250 C162,200 212,150 256,150 Z" strokeLinejoin="round"/>
            <path d="M256,220 C280,220 300,240 300,260 C300,280 256,300 256,300 C256,300 212,280 212,260 C212,240 232,220 256,220 Z" strokeLinejoin="round"/>
            <path d="M256,400 C250,450 200,500 150,512" strokeLinecap="round"/>
            <path d="M230,440 C180,430 140,400 120,380 C140,380 180,390 230,440 Z" strokeLinejoin="round"/>
            <path d="M280,450 C330,450 380,430 410,400 C390,390 340,410 280,450 Z" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="flex items-center justify-center w-full mb-4">
          <div className="w-6 h-[1px] bg-accent opacity-50"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
          <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mx-2">
            Our Atelier
          </h3>
          <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
          <div className="w-6 h-[1px] bg-accent opacity-50"></div>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] text-text-main leading-tight mb-8">
          Where Tradition<br />Meets Artistry
        </h2>

        <div className="flex items-center justify-center w-full mb-8">
          <div className="w-6 h-[1px] bg-accent opacity-50"></div>
          <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
          <div className="w-6 h-[1px] bg-accent opacity-50"></div>
        </div>

        <p className="text-text-muted text-[1.05rem] max-w-lg leading-relaxed">
          A blend of timeless craftsmanship and modern elegance, tailored to celebrate individuality.
        </p>
      </div>

      {/* 2. Our Story */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm h-[400px]">
          <img 
            src={IMAGES.storyImage} 
            alt="Crafting garment" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase">
              Our Story
            </h3>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent ml-3"></div>
            <div className="w-8 h-[1px] bg-accent opacity-50 ml-2"></div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-6">
            Crafted with Passion
          </h2>
          
          <p className="text-text-muted text-[0.95rem] leading-relaxed mb-6">
            Rooted in tradition and inspired by contemporary design, our atelier is dedicated to creating bespoke blouse and saree designs that reflect elegance and individuality.
          </p>
          <p className="text-text-muted text-[0.95rem] leading-relaxed">
            Every piece is thoughtfully crafted with attention to detail, ensuring a perfect balance of comfort, precision, and timeless beauty.
          </p>
        </div>
      </div>

      {/* 3. Feature Banner */}
      <div className="w-full bg-[#F5F2EC]/60 py-12 px-6 mb-24 border-y border-accent/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full border border-accent flex items-center justify-center text-accent flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21.5c-4.686 0-8.5-3.814-8.5-8.5 0-4.686 3.814-8.5 8.5-8.5 4.686 0 8.5 3.814 8.5 8.5" strokeLinecap="round"/>
                <path d="M12 4v4m0 0l-1.5-1.5M12 8l1.5-1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11.5c-1.38 0-2.5 1.12-2.5 2.5 0 1.667 2.5 4 2.5 4s2.5-2.333 2.5-4c0-1.38-1.12-2.5-2.5-2.5z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-lg text-text-main mb-1">Bespoke Craftsmanship</h4>
              <p className="text-text-muted text-[0.8rem]">Every design is tailored exclusively for you.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full border border-accent flex items-center justify-center text-accent flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9h20M12 21V9M6 3l6 6M18 3l-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-lg text-text-main mb-1">Premium Materials</h4>
              <p className="text-text-muted text-[0.8rem]">Only the finest fabrics and finishes are used.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full border border-accent flex items-center justify-center text-accent flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 3c-1.5 0-2.5 1-2.5 2 0 1.5-1.5 2-3.5 2-1 0-2 1-2 2v2c0 1 1 2 2 2h1.5v6c0 1 1 2 2 2h3c1 0 2-1 2-2v-6H18c1 0 2-1 2-2v-2c0-1-1-2-2-2-2 0-3.5-.5-3.5-2 0-1-1-2-2.5-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11h6" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-lg text-text-main mb-1">Perfect Fit</h4>
              <p className="text-text-muted text-[0.8rem]">Designed to enhance comfort and confidence.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Our Craftsmanship */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <div className="w-8 h-[1px] bg-accent opacity-50 mr-2"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent mr-3"></div>
            <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase">
              Our Craftsmanship
            </h3>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl text-text-main mb-6 leading-tight">
            Details that Define<br />Excellence
          </h2>
          
          <p className="text-text-muted text-[0.95rem] leading-relaxed mb-6">
            From intricate hand embroidery to flawless finishing, each creation goes through a meticulous process by skilled artisans who pour their heart into every stitch.
          </p>
          <p className="text-text-muted text-[0.95rem] leading-relaxed">
            Because true luxury lies in the details.
          </p>
        </div>
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm h-[350px]">
          <img 
            src={IMAGES.craftsmanshipImage} 
            alt="Gold embroidery detail" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 5. Our Philosophy */}
      <div className="relative w-full py-20 px-6 flex flex-col items-center text-center bg-[#FDFCF8] border-t border-accent/10">
        {/* Subtle floral left */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-[0.03] text-black -scale-x-100 rotate-45">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current" strokeWidth="2">
            <path d="M256,400 C256,400 350,300 400,200 C450,100 256,50 256,150 C256,50 62,100 112,200 C162,300 256,400 256,400 Z" strokeLinejoin="round"/>
            <path d="M256,150 C300,150 350,200 350,250 C350,300 256,350 256,350 C256,350 162,300 162,250 C162,200 212,150 256,150 Z" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="flex items-center justify-center w-full mb-4 z-10">
          <div className="w-4 h-[1px] bg-accent opacity-50"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
          <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mx-2">
            Our Philosophy
          </h3>
          <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
          <div className="w-4 h-[1px] bg-accent opacity-50"></div>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[3rem] text-text-main leading-tight mb-8 z-10">
          More Than Just Clothing,<br />It's an Experience
        </h2>

        <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl leading-relaxed z-10">
          We believe that every garment should tell a story—of craftsmanship, culture, and individuality. Our designs are not just stitched, but thoughtfully created to make every moment feel extraordinary.
        </p>
      </div>

      {/* 6. CTA Footer */}
      <div className="w-full bg-[#EBE4D5]/80 py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/>
          </svg>
          <span className="font-heading text-lg text-text-main">
            Let us create something uniquely yours.
          </span>
        </div>
        <a 
          href="https://wa.me/1234567890?text=Hello%20Saaj%20Atelier!%20I%20would%20like%20to%20enquire%20about%20a%20custom%20design." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent text-white text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-full shadow-md hover:bg-accent-hover transition-all duration-300 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span>Enquire Now</span>
        </a>
      </div>

    </section>
  );
};

export default About;
