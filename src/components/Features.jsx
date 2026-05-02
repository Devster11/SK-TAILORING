import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M14 6L6 14M21 3L14 10M17 10L21 14M3 21l3.5-3.5M6 18l4-4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="6" r="3"/>
          <circle cx="18" cy="18" r="3"/>
        </svg>
      ),
      title: "BESPOKE DESIGNS",
      desc: "Made exclusively for you"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M6 3h12l4 6-10 12L2 9l4-6z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 9h20M12 21V9M6 3l6 6M18 3l-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "PREMIUM QUALITY",
      desc: "Finest fabrics & finishes"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M12 3c-1.5 0-2.5 1-2.5 2 0 1.5-1.5 2-3.5 2-1 0-2 1-2 2v2c0 1 1 2 2 2h1.5v6c0 1 1 2 2 2h3c1 0 2-1 2-2v-6H18c1 0 2-1 2-2v-2c0-1-1-2-2-2-2 0-3.5-.5-3.5-2 0-1-1-2-2.5-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11h6" strokeLinecap="round"/>
        </svg>
      ),
      title: "PERFECT FIT",
      desc: "Designed for comfort & style"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.9 7.9 7.9-7.9 1-1a5.5 5.5 0 000-7.8z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "MADE WITH LOVE",
      desc: "Passion in every stitch"
    }
  ];

  return (
    <section className="w-full border-y border-accent/20 bg-[#F5F2EC]/50 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col lg:flex-row items-center lg:justify-center text-center lg:text-left gap-4 p-8
                ${index === 0 ? 'border-r border-b lg:border-b-0 border-accent/20' : ''}
                ${index === 1 ? 'border-b lg:border-b-0 lg:border-r border-accent/20' : ''}
                ${index === 2 ? 'border-r lg:border-b-0 border-accent/20' : ''}
                ${index === 3 ? '' : ''}
              `}
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-body text-[0.7rem] font-bold tracking-widest text-text-main mb-1">
                  {feature.title}
                </h3>
                <p className="text-[0.75rem] text-text-muted">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
