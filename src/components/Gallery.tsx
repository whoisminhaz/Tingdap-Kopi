import { motion } from 'motion/react';

const galleryImages = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop', // Cafe interior
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop', // Kopitiam coffee
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop', // Pour
  'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=600&auto=format&fit=crop', // Rain window
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=600&auto=format&fit=crop', // Barista
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop', // Pastry
];

export default function Gallery() {
  return (
    <section className="bg-cafe-900 py-32 px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-cafe-50 italic">Moments in Time</h2>
      </div>

      <div className="mx-auto max-w-[1600px] grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: (idx % 3) * 0.2 }}
            className="relative group overflow-hidden bg-cafe-800 aspect-[3/4]"
          >
            <img 
              src={src} 
              alt="Tingkap Kopi moment" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-cafe-900/10 group-hover:bg-transparent transition-colors duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
