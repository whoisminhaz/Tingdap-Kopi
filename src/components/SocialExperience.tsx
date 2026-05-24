import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function SocialExperience() {
  return (
    <section className="bg-cafe-900 py-24 border-t border-cafe-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="max-w-md">
          <h2 className="font-serif text-3xl md:text-4xl text-cafe-50 mb-6">Join Our Story</h2>
          <p className="text-cafe-300 font-light leading-relaxed mb-8">
            Share your cozy moments and aesthetic captures with us. Tag your rainy day coffees and aesthetic corners.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-cafe-800 text-cafe-100 hover:bg-cafe-700 hover:text-accent transition-all duration-300 rounded-sm text-sm tracking-wide"
          >
            <Instagram className="w-4 h-4" />
            @TINGKAPKOPI
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {/* Simulated Instagram Feed */}
          {[
            'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=400&auto=format&fit=crop',
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square bg-cafe-800 relative group overflow-hidden"
            >
              <img src={src} alt="Instagram post" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-cafe-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
