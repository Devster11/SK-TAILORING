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
    <section ref={containerRef} id="about" className="relative z-10 w-full pt-8 pb-0 overflow-hidden bg-[#FAF8F5]">
      
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

        <h2 className="font-ivy-ora ivy-single-line font-normal text-4xl md:text-5xl lg:text-[4rem] text-text-main leading-tight mb-8">
          Where Tradition Meets Artistry
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
          
          <h2 className="font-ivy-ora ivy-single-line ivy-single-line-narrow font-normal text-3xl md:text-4xl text-text-main mb-6">
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
          
          <h2 className="font-ivy-ora ivy-single-line ivy-single-line-narrow font-normal text-3xl md:text-4xl text-text-main mb-6 leading-tight">
            Details that Define Excellence
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
            className="font-ivy-ora ivy-single-line font-normal text-3xl md:text-4xl lg:text-[3rem] text-text-main leading-tight mb-8 z-10"
          >
            More Than Just Clothing, It's an Experience
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
        </div>

        {/* Seamless luxury fluid gradient blend into dark footer */}
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
