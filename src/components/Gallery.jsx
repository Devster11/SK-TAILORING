import { useState } from "react";
import CircularGallery from "./CircularGallery";

// ==========================================
// DYNAMIC ASSET FOLDERS:
// - Circular Gallery images: src/assets/circular-gallery/
// - Container (Grid) images: src/assets/containers/
// Any images dropped into these folders will automatically be displayed!
// ==========================================

// 1. Load images from circular gallery folder
const circularFiles = import.meta.glob(
  [
    "../assets/circular-gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
    "../assets/circular_gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
  ],
  { eager: true, import: "default" }
);

const DEFAULT_CIRCULAR_TEXTS = ["Royal", "Heritage", "Minimal", "Symphony", "Bridal", "Classic"];

const CIRCULAR_ITEMS =
  Object.keys(circularFiles).length > 0
    ? Object.entries(circularFiles)
        .sort(([pathA], [pathB]) =>
          pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: "base" })
        )
        .map(([path, image], idx) => {
          const filename = path.split("/").pop().replace(/\.[^/.]+$/, "");
          const isNumeric = /^\d+$/.test(filename);
          const text = !isNumeric && filename ? filename : DEFAULT_CIRCULAR_TEXTS[idx] || `Design ${idx + 1}`;
          return { image, text };
        })
    : [];

// 2. Load images from container folder
const containerFiles = import.meta.glob(
  [
    "../assets/containers/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
    "../assets/container/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
  ],
  { eager: true, import: "default" }
);

const DEFAULT_GRID_METADATA = [
  {
    id: 1,
    title: "Emerald Bridal",
    description: "Rich emerald silk with gold beadwork and graceful hanging tassels.",
    category: "BRIDAL",
  },
  {
    id: 2,
    title: "Magenta Jewel",
    description: "Deep magenta silk framed by a jewelled gold and green neckline.",
    category: "FESTIVE",
  },
  {
    id: 3,
    title: "Gilded Magenta",
    description: "Magenta silk with a fine beaded neckline and a rich gold sleeve border.",
    category: "MINIMAL",
  },
  {
    id: 4,
    title: "Copper Radiance",
    description: "Copper-rose silk with a keyhole neckline and delicate gold beadwork.",
    category: "CONTEMPORARY",
  },
  {
    id: 5,
    title: "Coral Blush",
    description: "Soft coral silk with gold bead flowers and a rich woven sleeve.",
    category: "BRIDAL",
  },
  {
    id: 6,
    title: "Forest Cascade",
    description: "Deep green silk with gold beadwork and flowing bead tassels.",
    category: "FESTIVE",
  },
  {
    id: 7,
    title: "Sapphire Heritage",
    description: "Royal blue silk with a gold beaded neckline and woven gold sleeves.",
    category: "CUSTOM MADE",
  },
  {
    id: 8,
    title: "Amethyst Bloom",
    description: "Rich purple silk with golden flower beadwork and a woven border.",
    category: "MINIMAL",
  },
];

const CATEGORIES = ["BRIDAL", "FESTIVE", "MINIMAL", "CONTEMPORARY", "CUSTOM MADE"];

const GRID_ITEMS =
  Object.keys(containerFiles).length > 0
    ? Object.entries(containerFiles)
        .sort(([pathA], [pathB]) =>
          pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: "base" })
        )
        .map(([path, img], idx) => {
          const meta = DEFAULT_GRID_METADATA[idx] || {
            id: idx + 1,
            title: `Bespoke Design ${idx + 1}`,
            description: "Custom-crafted luxury tailored to perfection.",
            category: CATEGORIES[idx % CATEGORIES.length],
          };
          return {
            id: meta.id || idx + 1,
            img,
            title: meta.title,
            desc: meta.description || meta.desc,
            description: meta.description || meta.desc,
            category: meta.category || CATEGORIES[idx % CATEGORIES.length],
          };
        })
    : [];

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
      className="relative z-10 w-full pt-24 pb-32 px-4 sm:px-6 lg:px-2 overflow-hidden bg-background"
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
        <div className="w-full lg:w-[calc(100%+6.5rem)] lg:-mx-[3.25rem] xl:w-[calc(100%+8.5rem)] xl:-mx-[4.25rem] lg:max-w-[1500px] h-[400px] md:h-[500px] mb-16 relative">
          <CircularGallery
            items={CIRCULAR_ITEMS}
            bend={isMobile ? 0.8 : 2.4}
            borderRadius={isMobile ? 0.12 : 0.08}
            scrollEase={0.05}
            textColor="#CBA153"
            font={
              isMobile
                ? "500 16px Inter, sans-serif"
                : "500 22px Inter, sans-serif"
            }
          />
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 mb-10 w-full px-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(8);
              }}
              className={`whitespace-nowrap flex-shrink-0 snap-center px-5 md:px-6 py-2 md:py-2.5 rounded-full text-[0.65rem] md:text-xs font-semibold tracking-widest uppercase transition-all duration-300 border
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
              onClick={() => {
                setIsClosing(false);
                setSelectedImage(item.img);
              }}
              className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-[320px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
            className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 ${
              isClosing ? "animate-[fadeOut_0.4s_ease_forwards]" : "animate-[zoomIn_0.3s_ease]"
            }`}
            onClick={closeModal}
          >
            {/* Modal Content Wrapper: Row on >=1200px, Column on <1200px */}
            <div
              className="relative flex flex-col min-[1200px]:flex-row items-center justify-center gap-4 min-[1200px]:gap-6 max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Full preview"
                  className={`w-auto h-auto max-w-[90vw] min-[1200px]:max-w-[calc(90vw-5.5rem)] max-h-[70vh] sm:max-h-[75vh] min-[1200px]:max-h-[85vh] object-contain rounded-xl shadow-2xl select-none ${
                    isClosing
                      ? "animate-[fadeOut_0.4s_ease_forwards]"
                      : "animate-[zoomIn_0.3s_ease]"
                  }`}
                />
              </div>

              {/* Close Button: Vertically centered on right for >=1200px, Horizontally centered below for <1200px */}
              <button
                onClick={closeModal}
                aria-label="Close image preview"
                className="cursor-pointer w-11 h-11 min-[1200px]:w-12 min-[1200px]:h-12 rounded-full bg-white/10 hover:bg-accent text-white hover:text-white border border-white/20 hover:border-accent shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:rotate-90 hover:shadow-[0_0_20px_rgba(203,161,83,0.5)] active:scale-95 flex-shrink-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
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
