import { Bespoke_design, Made_with_love, perfect_fit, premium } from '../assets/assets';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: (
        <img src={Bespoke_design} alt="" className="w-10 h-10 object-contain" />
      ),
      title: "BESPOKE DESIGNS",
      desc: "Made exclusively for you"
    },
    {
      icon: (
        <img src={premium} alt="" className="w-8 h-8 object-contain" />
      ),
      title: "PREMIUM QUALITY",
      desc: "Finest fabrics & finishes"
    },
    {
      icon: (
         <img src={perfect_fit} alt="" className="w-8 h-8 object-contain" />
      ),
      title: "PERFECT FIT",
      desc: "Designed for comfort & style"
    },
    {
      icon: (
         <img src={Made_with_love} alt="" className="w-8 h-8 object-contain" />
      ),
      title: "MADE WITH LOVE",
      desc: "Passion in every stitch"
    }
  ];

  return (
    <section className="w-full border-y border-accent/20 bg-[#F5F2EC]/50 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              key={index} 
              className={`
                flex flex-col lg:flex-row items-center lg:justify-center text-center lg:text-left gap-4 p-8
                ${index === 0 ? 'border-r border-b lg:border-b-0 border-accent/20' : ''}
                ${index === 1 ? 'border-b lg:border-b-0 lg:border-r border-accent/20' : ''}
                ${index === 2 ? 'border-r lg:border-b-0 border-accent/20' : ''}
                ${index === 3 ? '' : ''}
              `}
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-body text-[0.7rem] font-bold tracking-widest text-text-main mb-1">
                  {feature.title}
                </h3>
                <p className="text-[0.75rem] text-text-muted">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
