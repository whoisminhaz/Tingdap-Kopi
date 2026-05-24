import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="bg-cafe-900 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-1 flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-cafe-50 leading-tight mb-8">
            Preserving nostalgic coffee culture, <br/>
            <span className="italic text-cafe-300">one cup at a time.</span>
          </h2>
          
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-cafe-300 border-l-2 border-accent pl-6 italic">
            <p className="mb-6">
              Inspired by the timeless charm of traditional Malaysian kopitiams, 
              Tingkap Kopi was created as a space where modern café culture and 
              nostalgic comfort could exist beautifully together.
            </p>
            <p className="mb-6">
              The "Tingkap" (window) represents more than just our unique ordering 
              style—it is a frame into the past, a connection to the neighborhood, 
              and a warm greeting to every passerby in Butterworth.
            </p>
            <p>
              We source our beans with immense respect for the farmers, and brew 
              every cup with an artisan's dedication. Here, coffee is not a rush; 
              it is a ritual.
            </p>
          </div>

          {/* Signature/Handwritten touch */}
          <div className="mt-12 text-accent">
            <p className="font-serif italic text-2xl">The Tingkap Family</p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="pt-12"
          >
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" 
              alt="Barista brewing coffee" 
              className="w-full h-[400px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
              alt="Retro kopitiam vibes" 
              className="w-full h-[400px] object-cover rounded-sm sepia-[.3] hover:sepia-0 transition-all duration-700"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
