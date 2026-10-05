import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="relative z-20 py-6 px-6 lg:px-16 w-full flex justify-between items-center max-w-[1400px] mx-auto">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center space-y-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent"
        >
          <path
            d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
        <h1 className="font-heading text-2xl tracking-[0.2em] text-text-main leading-none uppercase text-center">
          SK
        </h1>
        <span className="text-[0.55rem] tracking-[0.3em] text-text-muted uppercase">
          Tailoring
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-12">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          className="text-xs font-semibold tracking-widest text-text-main uppercase hover:text-accent transition-colors"
        >
          Home
        </a>
        <a
          href="#gallery"
          onClick={(e) => handleScroll(e, '#gallery')}
          className="text-xs font-semibold tracking-widest text-text-muted uppercase hover:text-accent transition-colors"
        >
          Gallery
        </a>
        <a
          href="#about"
          onClick={(e) => handleScroll(e, '#about')}
          className="text-xs font-semibold tracking-widest text-text-muted uppercase hover:text-accent transition-colors"
        >
          About
        </a>
      </nav>

      {/* Right side (Enquire Button) / Mobile Menu */}
      <div className="flex items-center">
        {/* Desktop Enquire - Redirects to WhatsApp */}
        <a
          href="https://wa.me/9840147173?text=Hello%20SK%20Tailoring!%20I%20would%20like%20to%20enquire%20about%20your%20designs."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center space-x-2 border border-accent rounded-full px-6 py-2 text-xs font-semibold tracking-wider text-accent uppercase hover:bg-accent hover:text-white transition-all duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          <span>Enquire Now</span>
        </a>

        {/* Mobile Hamburger */}
        <button 
          onClick={toggleMenu}
          className="md:hidden relative z-[60] flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        >
          <motion.span 
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 0 : -6 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[1.5px] bg-text-main absolute block"
          ></motion.span>
          <motion.span 
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[1.5px] bg-text-main absolute block"
          ></motion.span>
          <motion.span 
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : 6 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[1.5px] bg-text-main absolute block"
          ></motion.span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col items-center justify-center space-y-8"
          >
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              href="#home"
              onClick={(e) => handleScroll(e, '#home')}
              className="text-2xl font-heading tracking-[0.2em] text-text-main uppercase"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="#gallery"
              onClick={(e) => handleScroll(e, '#gallery')}
              className="text-2xl font-heading tracking-[0.2em] text-text-muted hover:text-text-main uppercase"
            >
              Gallery
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="#about"
              onClick={(e) => handleScroll(e, '#about')}
              className="text-2xl font-heading tracking-[0.2em] text-text-muted hover:text-text-main uppercase"
            >
              About
            </motion.a>
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://wa.me/9840147173?text=Hello%20SK%20Tailoring!%20I%20would%20like%20to%20enquire%20about%20your%20designs."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-accent rounded-full px-8 py-3 text-sm font-semibold tracking-wider text-accent uppercase"
            >
              Enquire Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
