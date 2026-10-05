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

        <p className="text-text-muted text-[1.05rem] max-w-lg leading-relaxed">
          A blend of timeless craftsmanship and modern elegance, tailored to celebrate individuality.
        </p>
      </motion.div>

      {/* 2. Our Story */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm h-[400px] relative"
        >
          <motion.img 
            style={{ y: imgY, scale: 1.3 }}
            src={IMAGES.storyImage} 
            alt="Crafting garment" 
            loading="lazy"
            className="w-full h-full object-cover origin-center"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
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
        </motion.div>
      </div>

      {/* 3. Feature Banner */}
      <div className="w-full bg-[#F5F2EC]/60 py-12 px-6 mb-24 border-y border-accent/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Bespoke_design, title: "Bespoke Craftsmanship", desc: "Every design is tailored exclusively for you." },
            { icon: premium, title: "Premium Materials", desc: "Only the finest fabrics and finishes are used." },
            { icon: perfect_fit, title: "Perfect Fit", desc: "Designed to enhance comfort and confidence." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-full border border-accent flex items-center justify-center text-accent flex-shrink-0">
                <img src={feature.icon} alt="" className="w-10 h-10 object-contain"/>
              </div>
              <div>
                <h4 className="font-heading text-lg text-text-main mb-1">{feature.title}</h4>
                <p className="text-text-muted text-[0.8rem]">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 4. Our Craftsmanship */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
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
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm h-[350px] relative"
        >
          <motion.img 
            style={{ y: imgYReverse, scale: 1.3 }}
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
        className="relative w-full py-20 px-6 flex flex-col items-center text-center bg-[#FDFCF8] border-t border-accent/10"
      >
        {/* Subtle floral left */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-[0.03] text-black -scale-x-100 rotate-45">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current" strokeWidth="2">
            <path d="M256,400 C256,400 350,300 400,200 C450,100 256,50 256,150 C256,50 62,100 112,200 C162,300 256,400 256,400 Z" strokeLinejoin="round"/>
            <path d="M256,150 C300,150 350,200 350,250 C350,300 256,350 256,350 C256,350 162,300 162,250 C162,200 212,150 256,150 Z" strokeLinejoin="round"/>
          </svg>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center w-full mb-4 z-10"
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
          className="font-heading text-3xl md:text-4xl lg:text-[3rem] text-text-main leading-tight mb-8 z-10"
        >
          More Than Just Clothing,<br />It's an Experience
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl leading-relaxed z-10"
        >
          We believe that every garment should tell a story—of craftsmanship, culture, and individuality. Our designs are not just stitched, but thoughtfully created to make every moment feel extraordinary.
        </motion.p>
      </motion.div>

      {/* 6. CTA Footer */}
      <div className="w-full bg-[#EBE4D5]/80 py-8 px-6 flex flex-col md:flex-col items-center justify-center gap-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/>
          </svg>
          <span className="font-heading text-lg text-text-main">
            Let us create something uniquely yours.
          </span>
        </motion.div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/9840147173?text=Hello%SK%20Tailoring!%20I%20would%20like%20to%20enquire%20about%20a%20custom%20design." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent text-white text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-full shadow-md hover:bg-accent-hover transition-all duration-300 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span>Enquire Now</span>
        </motion.a>
        <p>Developed with Love By <a href="#">Srikresh</a> & <a href="#">Pradeep G</a></p>
        <p>&copy; Sk Tailoring All Rights Reserved</p>
      </div>

    </section>
  );
};

export default About;
