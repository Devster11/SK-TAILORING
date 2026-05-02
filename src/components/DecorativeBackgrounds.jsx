import React from 'react';

const DecorativeBackgrounds = () => {
  return (
    <>
      {/* Silk fabric drape on the left */}
      <div className="absolute top-[40%] left-0 w-64 md:w-96 h-[800px] pointer-events-none -z-10 overflow-hidden opacity-50 mix-blend-multiply">
        <img 
          src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=600" 
          alt="Silk texture" 
          className="w-full h-full object-cover object-right"
          style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }}
        />
      </div>

      {/* Line art rose on the right */}
      <div className="absolute top-[60%] right-0 w-64 md:w-80 h-64 md:h-80 pointer-events-none -z-10 opacity-30 text-accent">
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current" strokeWidth="2">
          {/* A stylized rose/flower outline */}
          <path d="M256,400 C256,400 350,300 400,200 C450,100 256,50 256,150 C256,50 62,100 112,200 C162,300 256,400 256,400 Z" strokeLinejoin="round"/>
          <path d="M256,150 C300,150 350,200 350,250 C350,300 256,350 256,350 C256,350 162,300 162,250 C162,200 212,150 256,150 Z" strokeLinejoin="round"/>
          <path d="M256,220 C280,220 300,240 300,260 C300,280 256,300 256,300 C256,300 212,280 212,260 C212,240 232,220 256,220 Z" strokeLinejoin="round"/>
          <path d="M256,400 L256,500" strokeLinecap="round"/>
          <path d="M256,450 C300,430 350,450 350,450" strokeLinecap="round"/>
          <path d="M256,470 C200,450 150,470 150,470" strokeLinecap="round"/>
        </svg>
      </div>
    </>
  );
};

export default DecorativeBackgrounds;
