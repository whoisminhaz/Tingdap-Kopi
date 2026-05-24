import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-cafe-900" id="home">
      {/* Background Video / Image */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {/* Fallback image if video fails or loads slowly */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=3000&auto=format&fit=crop")' }}
        />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
        >
          {/* Example cinematic coffee video URL */}
          <source src="https://cdn.pixabay.com/video/2021/04/13/71004-536342417_large.mp4" type="video/mp4" />
        </video>
        {/* Dark cinematic gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(12,11,10,0.2), rgba(12,11,10,0.9)), radial-gradient(circle at 70% 30%, rgba(197, 160, 89, 0.2) 0%, transparent 60%)' }}></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col items-center"
        >
          <span className="text-accent tracking-[0.3em] text-xs md:text-sm uppercase mb-4 inline-block">Butterworth, Penang</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cafe-50 leading-[1.1] tracking-tight">
            Where Nostalgia <br/>
            <span className="italic font-light text-cafe-200">Meets Modern</span> <br/>
            Coffee Culture
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-cafe-300 max-w-2xl text-lg mt-6 leading-relaxed font-light"
        >
          Experience handcrafted coffee, retro Malaysian warmth, and aesthetic slow-living 
          moments inside one of Butterworth's most beloved hidden cafés.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <a href="#menu" className="px-7 py-[14px] bg-cafe-100 text-cafe-900 hover:bg-accent hover:border-accent border border-cafe-100 uppercase text-[11px] tracking-[0.15em] transition-all duration-300 w-full sm:w-auto text-center">
            Explore Menu
          </a>
          <a href="#visit" className="px-7 py-[14px] border border-cafe-100 text-cafe-100 hover:border-accent hover:text-accent uppercase text-[11px] tracking-[0.15em] transition-all duration-300 w-full sm:w-auto text-center">
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-cafe-300 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
