import { Brand_girl_edited } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  // REPLACE THESE IMAGES WITH YOUR OWN ASSETS
  // Recommended aspect ratio: 4:5 for both mobile and desktop hero images

  return (
    <section
      id="home"
      className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pt-4 lg:pt-10 pb-16"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
      >
        {/* Mobile Image (Shows on top for mobile, hidden on desktop) */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="w-full max-w-[500px] mx-auto lg:hidden rounded-xl overflow-hidden h-[400px] sm:h-[490px] md:h-[540px] shadow-sm relative"
        >
          <img
            src={Brand_girl_edited}
            alt="Elegant Saree Design"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="font-heading text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-text-main mb-6 text-center"
          >
            Timeless Elegance,
            <br />
            Tailored to Perfection
          </motion.h2>

          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
            className="flex items-center justify-center w-full mb-6"
          >
            <div className="w-8 h-[1px] bg-accent opacity-50"></div>
            <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
            <div className="w-8 h-[1px] bg-accent opacity-50"></div>
          </motion.div>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="text-text-muted text-[1.05rem] md:text-lg mb-10 max-w-[400px] mx-auto text-center"
          >
            Bespoke blouse and saree designs crafted to celebrate your
            individuality.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="flex justify-center w-full"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery"
              className="bg-accent text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-full shadow-md hover:bg-accent-hover transition-all duration-300 inline-block"
            >
              Explore Designs
            </motion.a>
          </motion.div>
        </div>

        {/* Desktop Image (Hidden on mobile) */}
        <motion.div 
          variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } }}
          className="hidden lg:block w-full lg:w-1/2 relative"
        >
          <div className="relative z-10 rounded-sm overflow-hidden h-[600px] xl:h-[700px] shadow-sm">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              src={Brand_girl_edited}
              alt="Elegant Saree Design"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
