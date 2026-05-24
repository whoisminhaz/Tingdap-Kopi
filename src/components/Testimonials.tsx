import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  { text: "Feels like home. The atmosphere perfectly balances modern design with a deep sense of nostalgia.", author: "Ahmad R." },
  { text: "The coziest café in Butterworth. Perfect for a rainy afternoon with a cup of Kopi Susu.", author: "Sarah L." },
  { text: "Coffee and atmosphere are unforgettable. It’s a beautifully crafted experience from start to finish.", author: "Jian W." },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-cafe-800 py-32 relative overflow-hidden">
      {/* Background blurred element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Quote className="w-12 h-12 text-accent/30 mx-auto mb-12" />
        
        <div className="h-[200px] md:h-[150px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-serif text-2xl md:text-4xl text-cafe-100 leading-tight mb-8 font-light italic">
                "{testimonials[current].text}"
              </p>
              <p className="text-accent tracking-widest uppercase text-xs">
                — {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-accent w-4' : 'bg-cafe-600 hover:bg-cafe-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
