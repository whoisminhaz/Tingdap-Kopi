import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="experience" className="bg-cafe-900 py-32 md:py-48 relative overflow-hidden">
      {/* Decorative large text behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] flex flex-col leading-none">
        <span className="font-serif text-[15vw] whitespace-nowrap">SLOW LIVING</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <motion.div 
          style={{ opacity, y }}
          className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop" 
            alt="Handcrafted coffee pouring slowly" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-cafe-900/20 group-hover:bg-transparent transition-colors duration-1000" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <span className="text-accent tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-accent"></span>
            The Tingkap Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cafe-50 leading-tight mb-8">
            A peaceful escape where <span className="italic text-cafe-200">modern café culture</span> meets classic Nostalgia.
          </h2>
          <div className="space-y-6 text-cafe-300 font-light leading-relaxed text-lg">
            <p>
              More than just coffee, Tingkap Kopi is a sanctuary. Inspired by the traditional Kopitiam "window-style" 
              ordering of our childhood, we've reimagined the experience for the modern soul.
            </p>
            <p>
              Step away from the noise. Listen to the rain against our windows, feel the warmth of our artisanal 
              brews in your hands, and let time slow down in Butterworth's coziest corner.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-cafe-800 pt-8">
            <div>
              <h3 className="text-cafe-100 font-serif text-xl mb-2">Artisan Roasts</h3>
              <p className="text-cafe-400 text-sm">Carefully selected beans, brewed with precision and passion.</p>
            </div>
            <div>
              <h3 className="text-cafe-100 font-serif text-xl mb-2">Warm Conversations</h3>
              <p className="text-cafe-400 text-sm">A space designed for connection, comfort, and quiet reflection.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
