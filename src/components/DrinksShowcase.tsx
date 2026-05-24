import { motion } from 'motion/react';

const signatureDrinks = [
  {
    id: 'kopi-susu',
    name: 'Kopi Susu',
    description: 'Rich, smooth, and deeply comforting — brewed with traditional Malaysian coffee soul and modern artisan precision.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    tag: 'Bestseller'
  },
  {
    id: 'gula-apong',
    name: 'Gula Apong Latte',
    description: 'A smoky caramel sweetness layered into velvety handcrafted espresso.',
    image: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80&w=800',
    tag: 'Signature'
  },
  {
    id: 'spanish-iced',
    name: 'Spanish Latte Iced',
    description: 'Perfectly balanced sweetness with our signature chilled espresso pour. Ideal for warm afternoons.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
    tag: 'Seasonal'
  },
  {
    id: 'almond-croissant',
    name: 'Twice-Baked Almond Croissant',
    description: 'Flaky, buttery perfection filled with rich almond frangipane.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
    tag: 'Chef Pick'
  }
];

export default function DrinksShowcase() {
  return (
    <section className="bg-cafe-800 py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-accent tracking-[0.2em] text-xs uppercase mb-4 inline-block">Our Signatures</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cafe-50">Handcrafted Perfection</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureDrinks.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-cafe-900 rounded-sm mb-6">
                <img 
                  src={drink.image} 
                  alt={drink.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-900 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4 backdrop-blur-md bg-cafe-900/40 border border-cafe-700/50 px-3 py-1 rounded-full">
                  <span className="text-xs text-accent uppercase tracking-widest">{drink.tag}</span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-cafe-100 mb-3 group-hover:text-accent transition-colors duration-300">{drink.name}</h3>
                <p className="text-cafe-400 text-sm leading-relaxed font-light">{drink.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
