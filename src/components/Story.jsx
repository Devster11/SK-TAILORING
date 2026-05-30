import React from "react";
import {
  Bespoke_design,
  premium_fabrics,
  perfect_fit_1,
  bespoke_image,
  premium,
  perfect_fit,
} from "../assets/assets";



const Story = () => {
  const cards = [
    {
      imgUrl: bespoke_image,
      icon: (
        <img src={Bespoke_design} alt="" className="w-10 h-10 object-contain" />
      ),
      title: "Timeless Craftsmanship",
      desc: "Handcrafted with precision and passion.",
    },
    {
      imgUrl: premium_fabrics,
      icon: <img src={premium} alt="" className="w-10 h-10 object-contain" />,
      title: "Premium Fabrics",
      desc: "We use only the finest materials for every creation.",
    },
    {
      imgUrl: perfect_fit_1,
      icon: (
        <img src={perfect_fit} alt="" className="w-10 h-10 object-contain" />
      ),
      title: "Perfect Fit",
      desc: "Designed to celebrate your unique silhouette.",
    },
  ];

  return (
    <section
      id="story"
      className="relative z-10 w-full pt-16 pb-24 px-6 overflow-hidden"
    >
      {/* Decorative Silk Fabric (Left) */}
      <div className="absolute top-0 left-0 w-64 md:w-[450px] h-[500px] pointer-events-none -z-10 opacity-60 mix-blend-multiply">
        <img
          src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=600"
          alt="Silk texture"
          className="w-full h-full object-cover object-right"
          style={{
            maskImage: "linear-gradient(to bottom right, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom right, black, transparent)",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mb-4">
            At Our Atelier
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] text-text-main leading-tight mb-6">
            Every stitch tells a story.
          </h2>

          <div className="flex items-center justify-center w-full mb-6">
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
            <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
          </div>

          <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
            Our creations are a blend of tradition, artistry and attention
            <br className="hidden md:block" />
            to detail - crafted to make you feel extraordinary.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col relative group hover:shadow-md transition-shadow duration-300"
            >
              {/* Desktop Image (Hidden on Mobile) */}
              <div className="hidden md:block w-full h-[220px] lg:h-[260px] relative">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Icon Badge (Desktop & Mobile) */}
              <div
                className="md:absolute md:top-[250px] lg:top-[290px] lg:left-56/100 md:left-56/100  md:-translate-x-1/2 md:-translate-y-1/2 
                              bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm 
                              mx-auto mt-8 md:mt-0 border border-black/5 z-10"
              >
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="p-8 md:pt-12 text-center flex-1 flex flex-col justify-center">
                <h4 className="font-heading text-[1.35rem] text-text-main mb-3">
                  {card.title}
                </h4>
                <p className="text-text-muted text-[0.85rem] leading-relaxed px-2">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <a
          href="https://wa.me/9840147173?text=Hello%20SK%20Tailoring!%20I%20would%20like%20to%20connect%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full shadow-md hover:bg-accent-hover transition-all duration-300 flex items-center gap-3"
        >
          <span>Connect With Us</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Story;
