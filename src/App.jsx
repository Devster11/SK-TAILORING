import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Story from './components/Story';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <div className="app-container relative">
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] bg-[#FAF8F5] flex flex-col items-center justify-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent mb-2"
                >
                  <path
                    d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <h1 className="font-heading text-4xl tracking-[0.2em] text-text-main leading-none uppercase text-center">
                  SK
                </h1>
                <span className="text-[0.65rem] tracking-[0.3em] text-text-muted uppercase">
                  Tailoring
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Helmet>
          <title>SK tailoring</title>
          <meta name="description" content="Sk tailoring offers bespoke blouse and saree designs crafted to celebrate your individuality. Experience premium quality, perfect fit, and handcrafted elegance." />
          <meta name="keywords" content="Sk tailoring, bespoke sarees, custom blouses, Indian traditional wear, elegant fashion, tailor-made sarees" />
          <meta property="og:title" content="Sk tailoring | Timeless Elegance" />
          <meta property="og:description" content="Bespoke blouse and saree designs crafted to celebrate your individuality." />
          <meta property="og:type" content="website" />
          
        </Helmet>

        <Header />
        
        <main>
          <Hero />
          <Features />
          <Story />
          <WhyChooseUs />
          <Gallery />
          <About />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
