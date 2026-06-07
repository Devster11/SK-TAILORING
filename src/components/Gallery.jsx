import { useState } from "react";
import CircularGallery from "./CircularGallery";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
} from "../assets/assets";
// ==========================================
// REPLACE THESE IMAGES WITH YOUR OWN ASSETS
// ==========================================

// Images for the curved 3D gallery at the top
const CIRCULAR_ITEMS = [
  { image: img1, text: "Royal" },
  { image: img2, text: "Heritage" },
  { image: img3, text: "Minimal" },
  { image: img4, text: "Symphony" },
  { image: img5, text: "Bridal" },
  { image: img6, text: "Classic" },
];

// Images for the main grid gallery
const GRID_ITEMS = [
  {
    img: img1,
    title: "Royal Bridal",
    desc: "Exquisite hand embroidery with intricate french knots.",
    category: "BRIDAL",
  },
  {
    img: img2,
    title: "Heritage Weave",
    desc: "Traditional motifs woven with timeless craftsmanship.",
    category: "FESTIVE",
  },
  {
    img: img3,
    title: "Minimal Elegance",
    desc: "Subtle embroidery for a graceful and elegant look.",
    category: "MINIMAL",
  },
  {
    img: img4,
    title: "Golden Symphony",
    desc: "Inspired by royalty, crafted to perfection.",
    category: "CONTEMPORARY",
  },
  {
    img: img5,
    title: "Blush Radiance",
    desc: "Soft pastels adorned with shimmering zardosi work.",
    category: "BRIDAL",
  },
  {
    img: img6,
    title: "Emerald Dream",
    desc: "Deep greens matched with rich golden thread details.",
    category: "FESTIVE",
  },
  {
    img: img7,
    title: "Classic Vintage",
    desc: "A nod to the past with exquisite pearl highlights.",
    category: "CUSTOM MADE",
  },
  {
    img: img8,
    title: "Regal Charm",
    desc: "Bold patterns designed to make a majestic statement.",
    category: "CONTEMPORARY",
  },

  // NEW ITEMS FOR LOAD MORE

  {
    img: img9,
    title: "Velvet Grace",
    desc: "Luxury embroidery with royal elegance.",
    category: "BRIDAL",
  },
  {
    img: img10,
    title: "Golden Bloom",
    desc: "Inspired by traditional floral patterns.",
    category: "FESTIVE",
  },
  {
    img: img11,
    title: "Pearl Essence",
    desc: "Clean design with subtle embellishments.",
    category: "MINIMAL",
  },
  {
    img: img12,
    title: "Modern Muse",
    desc: "A contemporary twist on classic tailoring.",
    category: "CONTEMPORARY",
  },
  {
    img: img13,
    title: "Signature Luxe",
    desc: "Custom-crafted masterpiece.",
    category: "CUSTOM MADE",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL DESIGNS");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const filteredItems =
    activeFilter === "ALL DESIGNS"
      ? GRID_ITEMS
      : GRID_ITEMS.filter((item) => item.category === activeFilter);

  const filters = [
    "ALL DESIGNS",
    "BRIDAL",
    "FESTIVE",
    "MINIMAL",
    "CONTEMPORARY",
    "CUSTOM MADE",
  ];
  const isMobile = window.innerWidth < 768;
  const closeModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section
      id="gallery"
      className="relative z-10 w-full pt-24 pb-32 px-6 overflow-hidden bg-background"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Header Text */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center w-full mb-4">
            <div className="w-4 h-[1px] bg-accent opacity-50"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
            <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mx-2">
              Our Collection
            </h3>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent mx-2"></div>
            <div className="w-4 h-[1px] bg-accent opacity-50"></div>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-text-main leading-tight mb-6">
            Timeless Designs, Crafted for You
          </h2>

          <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of handcrafted blouse designs,
            <br className="hidden md:block" />
            where tradition meets modern elegance.
          </p>
        </div>

        {/* Circular Gallery Section */}
        <div className="w-full h-[400px] md:h-[500px] mb-16 relative">
          <CircularGallery
            items={CIRCULAR_ITEMS}
            bend={isMobile ? 0.8 : 2.8}
            borderRadius={isMobile ? 0.12 : 0.08}
            scrollEase={0.05}
            textColor="#CBA153"
            font={
              isMobile
                ? "bold 16px Playfair Display"
                : "bold 24px Playfair Display"
            }
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 w-full px-4">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(8);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border
                ${
                  activeFilter === filter
                    ? "bg-accent text-white border-accent shadow-md"
                    : "bg-transparent text-text-muted border-black/10 hover:border-accent hover:text-accent"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {filteredItems.slice(0, visibleCount).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-[320px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Magnify Button */}
                <button
                  onClick={() => {
                    setIsClosing(false);
                    setSelectedImage(item.img);
                  }}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-accent shadow-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>

              {/* Text Content */}
              <div className="p-6 text-center flex-1 flex flex-col items-center justify-center bg-white">
                <h4 className="font-heading text-xl text-text-main mb-3">
                  {item.title}
                </h4>
                <p className="text-text-muted text-[0.8rem] leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
              isClosing ? "animate-[fadeOut_0.5s_ease_forwards]" : ""
            }`}
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-4xl font-light"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt=""
                className={`w-full max-h-[90vh] object-contain rounded-xl ${
                  isClosing
                    ? "animate-[fadeOut_0.5s_ease_forwards]"
                    : "animate-[zoomIn_0.4s_ease]"
                }`}
              />
            </div>
          </div>
        )}

        {/* Action Button */}
        {visibleCount < filteredItems.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="border border-accent text-accent text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <span>Load More Designs</span>

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
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default Gallery;
