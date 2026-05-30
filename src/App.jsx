import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Story from './components/Story';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
  return (
    <HelmetProvider>
      <div className="app-container relative">
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
