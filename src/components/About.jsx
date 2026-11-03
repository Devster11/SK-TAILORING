import { about_imgage,bespoke_image,Bespoke_design, premium,perfect_fit } from '../assets/assets';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// ==========================================
// REPLACE THESE IMAGES WITH YOUR OWN ASSETS
// ==========================================
const IMAGES = {
  // Recommended: landscape image showing someone working or crafting
  storyImage: about_imgage,
  // Recommended: close-up detail shot of embroidery or fabric
  craftsmanshipImage: bespoke_image,
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imgYReverse = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={containerRef} id="about" className="relative z-10 w-full pt-20 pb-0 overflow-hidden bg-[#FAF8F5]">
      
      {/* 1. Top Section: Our Atelier */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative w-full px-6 flex flex-col items-center text-center mb-24"
      >
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

        <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl leading-relaxed">
          Every creation at SK Tailoring is more than just a garment—it is a celebration of heritage, patience, and bespoke craftsmanship designed exclusively for you.
        </p>
      </motion.div>

      {/* 2. Side-by-side Story: Heritage & Modernity */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            The Craft
          </span>
          <h3 className="font-heading text-3xl md:text-4xl text-text-main mb-6 leading-snug">
            Honoring the Ancient Art of Needlework
          </h3>
          <p className="text-text-muted leading-relaxed mb-6">
            In an era of fast fashion, we take pride in the slow, meticulous process of hand embroidery. From delicate zardosi work to intricate aari embroidery, our master artisans bring decades of generational knowledge to every stitch.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            Each pattern is thoughtfully drawn, each bead hand-placed, creating blouses and garments that feel truly one-of-a-kind.
          </p>
          
          <div className="flex items-center gap-8 border-t border-black/5 pt-6 w-full">
            <div>
              <span className="block font-heading text-2xl text-accent">100%</span>
              <span className="text-[0.7rem] uppercase tracking-wider text-text-muted">Handcrafted</span>
            </div>
            <div className="w-[1px] h-8 bg-black/10"></div>
            <div>
              <span className="block font-heading text-2xl text-accent">Custom</span>
              <span className="text-[0.7rem] uppercase tracking-wider text-text-muted">Fitted to You</span>
            </div>
          </div>
        </motion.div>

        {/* Parallax Image 1 */}
        <motion.div 
          style={{ y: imgY }}
          className="relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-sm"
        >
          <img 
            src={IMAGES.storyImage} 
            alt="Artisan embroidering silk blouse" 
            loading="lazy"
            className="w-full h-full object-cover origin-center"
          />
        </motion.div>
      </div>

      {/* 3. Three Craft Highlights */}
      <div className="bg-[#FAF8F5] py-20 px-6 border-y border-black/5 mb-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/>
              </svg>
            </div>
            <h4 className="font-heading text-xl text-text-main mb-3">Intricate Detailing</h4>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Every curve, cut, and motif is designed with intention, enhancing the natural beauty of the fabric.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"/>
              </svg>
            </div>
            <h4 className="font-heading text-xl text-text-main mb-3">Pure Silk & Thread</h4>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              We source premium raw silks, zari threads, and crystals to ensure your garment lasts for generations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h4 className="font-heading text-xl text-text-main mb-3">Tailored Experience</h4>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              From the initial sketch to the final fitting, we collaborate closely with you to realize your vision.
            </p>
          </motion.div>

        </div>
      </div>

      {/* 4. Craftsmanship in Action */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left order-2 lg:order-1"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Uncompromising Quality
          </span>
          <h3 className="font-heading text-3xl md:text-4xl text-text-main mb-6 leading-snug">
            Fit That Feels Like a Second Skin
          </h3>
          <p className="text-text-muted leading-relaxed mb-6">
            A beautiful blouse is incomplete without the perfect fit. Our pattern-making process accounts for posture, comfort, and movement—ensuring that you feel confident and poised throughout your special occasions.
          </p>
          <p className="text-text-muted leading-relaxed">
            Every seam is reinforced, every border cleanly finished, reflecting our commitment to quiet luxury and timeless elegance.
          </p>
        </motion.div>

        {/* Parallax Image 2 */}
        <motion.div 
          style={{ y: imgYReverse }}
          className="relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2"
        >
          <img 
            src={IMAGES.craftsmanshipImage} 
            alt="Gold embroidery detail" 
            loading="lazy"
            className="w-full h-full object-cover origin-center"
          />
        </motion.div>
      </div>

      {/* 5. Our Philosophy */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full pt-20 pb-0 flex flex-col items-center text-center bg-[#FDFCF8] border-t border-accent/10"
      >
        {/* Subtle floral left */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-[0.03] text-black -scale-x-100 rotate-45">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current" strokeWidth="2">
            <path d="M256,400 C256,400 350,300 400,200 C450,100 256,50 256,150 C256,50 62,100 112,200 C162,300 256,400 256,400 Z" strokeLinejoin="round"/>
            <path d="M256,150 C300,150 350,200 350,250 C350,300 256,350 256,350 C256,350 162,300 162,250 C162,200 212,150 256,150 Z" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Text Content */}
        <div className="px-6 flex flex-col items-center text-center w-full z-10 mb-6 sm:mb-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center w-full mb-4"
          >
            <div className="w-4 h-[1px] bg-accent opacity-50"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
            <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mx-2">
              Our Philosophy
            </h3>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
            <div className="w-4 h-[1px] bg-accent opacity-50"></div>
          </motion.div>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-3xl md:text-4xl lg:text-[3rem] text-text-main leading-tight mb-8"
          >
            More Than Just Clothing,<br />It's an Experience
          </motion.h2>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl leading-relaxed"
          >
            We believe that every garment should tell a story—of craftsmanship, culture, and individuality. Our designs are not just stitched, but thoughtfully created to make every moment feel extraordinary.
          </motion.p>
        </div>

        {/* Seamless, expansive luxury fluid gradient blend */}
        <div 
          aria-hidden="true"
          className="w-full h-56 sm:h-72 md:h-[320px] lg:h-[400px] pointer-events-none select-none relative z-10"
          style={{
            background: `linear-gradient(to bottom,
              rgb(253, 252, 248) 0.0%,
              rgb(252, 250, 247) 6.2%,
              rgb(246, 245, 242) 12.5%,
              rgb(236, 235, 232) 18.8%,
              rgb(222, 220, 219) 25.0%,
              rgb(204, 201, 201) 31.2%,
              rgb(182, 179, 180) 37.5%,
              rgb(158, 154, 158) 43.8%,
              rgb(134, 130, 135) 50.0%,
              rgb(111, 106, 112) 56.2%,
              rgb(90, 84, 92) 62.5%,
              rgb(71, 65, 74) 68.8%,
              rgb(56, 49, 60) 75.0%,
              rgb(45, 38, 49) 81.2%,
              rgb(38, 31, 42) 87.5%,
              rgb(34, 27, 38) 93.8%,
              rgb(33, 26, 37) 100.0%)`,
          }}
        />
      </motion.div>

    </section>
  );
};

export default About;
