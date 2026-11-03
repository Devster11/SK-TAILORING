import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    "https://wa.me/9840147173?text=Hello%20SK%20Tailoring!%20I%20would%20like%20to%20enquire%20about%20a%20custom%20design.";

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        background: "#211a25",
        color: "#f3ece0",
        fontFamily: "'Lato', sans-serif",
      }}
      className="w-full"
    >
      {/* 1. Large outlined "SK" watermark for screens > 425px (remains untouched: centered on tablet/laptop, all the way to right on desktop) */}
      <span
        aria-hidden="true"
        className="z-0 pointer-events-none select-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-[1200px]:left-auto min-[1200px]:right-0 min-[1200px]:translate-x-0 hidden min-[426px]:block"
        style={{
          fontFamily: "'Italiana', serif",
          fontSize: "clamp(200px, 34vw, 420px)",
          lineHeight: 1,
          letterSpacing: "0.05em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(217, 179, 106, 0.2)",
          whiteSpace: "nowrap",
        }}
      >
        SK
      </span>

      {/* Inner container */}
      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "56px 20px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
        className="z-10 sm:py-16 sm:px-6 sm:gap-[26px]"
      >
        {/* 2. Tagline Wrapper: Houses mobile watermark so it centers directly to the text on <= 425px */}
        <div className="relative w-full flex items-center justify-center">
          {/* Mobile watermark (<= 425px): Exactly centered behind the text */}
          <span
            aria-hidden="true"
            className="z-0 pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-[426px]:hidden"
            style={{
              fontFamily: "'Italiana', serif",
              fontSize: "clamp(180px, 50vw, 220px)",
              lineHeight: 1,
              letterSpacing: "0.05em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(217, 179, 106, 0.2)",
              whiteSpace: "nowrap",
            }}
          >
            SK
          </span>

          <p
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: "clamp(44px, 6.5vw, 82px)",
              lineHeight: 1.2,
              color: "#d9b36a",
              margin: 0,
            }}
            className="relative z-10 text-center font-normal tracking-wide select-none"
          >
            Let us create something uniquely yours.
          </p>
        </div>

        {/* 3. Gold WhatsApp button: Perfectly sized and padded, stays on a sleek single line */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#d9b36a",
            color: "#2b2030",
            borderRadius: "9999px",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          className="group shadow-md hover:shadow-[0_10px_25px_rgba(217,179,106,0.45)] hover:bg-[#e5c37e] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9b36a] gap-2 sm:gap-2.5 py-3 px-6 sm:py-4 sm:px-9 text-[11.5px] sm:text-[13px] tracking-[0.11em] sm:tracking-[0.14em]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: "currentColor" }}
            aria-hidden="true"
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0 whatsapp-wiggle-icon transform transition-transform duration-300"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          <span>Enquire on WhatsApp</span>
        </motion.a>

        {/* 4. Copyright line and Developer credit */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "#b9b0a2",
            letterSpacing: "normal",
            textTransform: "none",
          }}
        >
          <p style={{ margin: 0 }}>© {currentYear} SK Tailoring. All rights reserved.</p>
          <p style={{ margin: 0 }}>Developed with love by Srikresh & Pradeep G</p>
        </div>
      </div>
    </footer>
  );
}
