import { Bespoke_design, perfect_fit, premium, Affordable_price } from '../assets/assets';
import { motion } from 'framer-motion';

// ==========================================
// REPLACE THESE IMAGES WITH YOUR OWN ASSETS
// ==========================================
const IMAGES = {
  // Recommended: square headshots for client avatars
  avatar1: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100',
  avatar2: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100&h=100',
  avatar3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
  avatar4: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=100&h=100'
};

const WhyChooseUs = () => {
  const cards = [
    {
      icon: (
       <img src={Bespoke_design} alt="" className="object-contain bg-white w-14 h-14 rounded-full shadow-sm mx-auto mt-8 md:mt-0 border border-black/5"/>
      ),
      title: "Bespoke\nCraftsmanship",
      desc: "Every design is tailored exclusively for you."
    },
    {
      icon: (
        <img src={premium} alt="" className="object-contain bg-white w-14 h-14 rounded-full shadow-sm mx-auto mt-8 md:mt-0 border border-black/5"/>
      ),
      title: "Premium\nFinishes",
      desc: "Attention to detail in every stitch and pattern."
    },
    {
      icon: (
        <img src={perfect_fit} alt="" className="object-contain bg-white w-14 h-14 rounded-full shadow-sm mx-auto mt-8 md:mt-0 border border-black/5" />
      ),
      title: "Perfect Fit\nGuarantee",
      desc: "Designed to enhance comfort and confidence."
    },
    {
      icon: (
        <img src={Affordable_price} alt="" className="object-contain bg-white w-14 h-14 rounded-full shadow-sm mx-auto mt-8 md:mt-0 border border-black/5" />
      ),
      title: "Affordable\nPrice Range",
      desc: "Luxury designs that respect your budget."
    }
  ];

  return (
    <section className="relative z-10 w-full pt-16 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-[0.65rem] tracking-[0.25em] font-bold text-accent uppercase mb-4">
            Why Choose Us
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] text-text-main leading-tight mb-6">
            Crafted with care,<br className="hidden md:block" /> chosen for you.
          </h2>
          
          <div className="flex items-center justify-center w-full mb-6">
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
            <div className="w-2 h-2 rotate-45 bg-accent mx-3"></div>
            <div className="w-12 h-[1px] bg-accent opacity-50"></div>
          </div>
          
          <p className="text-text-muted text-[0.95rem] md:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
            Every stitch reflects our passion for perfection<br className="hidden md:block" /> 
            and your trust in us.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-sm border border-black/5 p-8 md:p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-2">
                {card.icon}
              </div>
              <h4 className="font-heading text-xl text-text-main mb-4 whitespace-pre-line">{card.title}</h4>
              <div className="w-8 h-[1px] bg-accent opacity-30 mb-4"></div>
              <p className="text-text-muted text-[0.8rem] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner Card / 5th Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white rounded-2xl shadow-sm border border-black/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-start max-w-4xl mx-auto mb-16 gap-6 md:gap-12 hover:shadow-md transition-shadow duration-300"
        >
          {/* Mobile Title (shows on top for mobile, hidden on desktop) */}
          <h4 className="md:hidden font-heading text-lg font-semibold text-text-main text-center">
            Trusted by 200+ Clients
          </h4>

          {/* Avatars */}
          <div className="flex items-center justify-center">
            {/* 4 Overlapping Avatar Images */}
            {[IMAGES.avatar1, IMAGES.avatar2, IMAGES.avatar3, IMAGES.avatar4].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt="Client" 
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white object-cover ${i !== 0 ? '-ml-4 md:-ml-5' : ''}`}
              />
            ))}
            {/* 10K+ Circle */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent bg-[#FDFBF7] flex items-center justify-center -ml-4 md:-ml-5 z-10 text-accent font-semibold text-xs md:text-sm shadow-sm">
              200+
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h4 className="hidden md:block font-heading text-xl text-text-main mb-1">
              Trusted by 200+ Clients
            </h4>
            <p className="text-text-muted text-[0.8rem] md:text-[0.9rem]">
              Loved by thousands of happy customers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
