import React from "react";
import { Brand_girl_edited } from "../assets/assets";

const Hero = () => {
  // REPLACE THESE IMAGES WITH YOUR OWN ASSETS
  // Recommended aspect ratio: 4:5 for both mobile and desktop hero images

  return (
    <section
      id="home"
      className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pt-4 lg:pt-10 pb-16"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Mobile Image (Shows on top for mobile, hidden on desktop) */}
        <div className="w-full max-w-[500px] mx-auto lg:hidden rounded-xl overflow-hidden h-[400px] sm:h-[490px] md:h-[540px] shadow-sm relative">
          <img
            src={Brand_girl_edited}
            alt="Elegant Saree Design"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* <div className="flex items-center justify-center w-full space-x-3 mb-6">
            <span className="block mx-auto text-center text-[0.65rem] tracking-[0.25em] font-semibold text-accent uppercase bg-">
              Handcrafted with passion
            </span>
          </div> */}

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-text-main mb-6 text-center">
            Timeless Elegance,
            <br />
            Tailored to Perfection
          </h2>

          <div className="flex items-center justify-center w-full mb-6">
            <div className="w-8 h-[1px] bg-accent opacity-50"></div>
            <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
            <div className="w-8 h-[1px] bg-accent opacity-50"></div>
          </div>

          <p className="text-text-muted text-[1.05rem] md:text-lg mb-10 max-w-[400px] mx-auto text-center">
            Bespoke blouse and saree designs crafted to celebrate your
            individuality.
          </p>

          <div className="flex justify-center w-full">
            <a
              href="#gallery"
              className="bg-accent text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-full shadow-md hover:bg-accent-hover transition-all duration-300"
            >
              Explore Designs
            </a>
          </div>
        </div>

        {/* Desktop Image (Hidden on mobile) */}
        <div className="hidden lg:block w-full lg:w-1/2 relative">
          <div className="relative z-10 rounded-sm overflow-hidden h-[600px] xl:h-[700px] shadow-sm">
            <img
              className="rounded-sm"
              src={Brand_girl_edited}
              alt="Elegant Saree Design"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>

          {/* Decorative background shape/shadow */}
          {/* <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#F2EDE4] -z-10 rounded-sm"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
