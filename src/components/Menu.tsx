import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils';

const categories = ['coffee', 'iced', 'pastries', 'desserts', 'signature'] as const;
type Category = typeof categories[number];

const menuItems = [
  { id: '1', name: 'Tingkap Classic Hot', desc: 'Our timeless traditional brew, reimagined.', price: 'RM 12', cat: 'coffee', picks: true },
  { id: '2', name: 'Artisan Latte', desc: 'Silky microfoam over double ristretto.', price: 'RM 14', cat: 'coffee' },
  { id: '3', name: 'Pour Over V60', desc: 'Seasonal single-origin beans, clean and bright.', price: 'RM 18', cat: 'coffee' },
  { id: '4', name: 'Iced Gula Melaka Latte', desc: 'Local palm sugar, rich espresso, milk.', price: 'RM 16', cat: 'iced', picks: true },
  { id: '5', name: 'Kopi Ais', desc: 'Nostalgic local iced coffee.', price: 'RM 10', cat: 'iced' },
  { id: '6', name: 'Matcha Iced', desc: 'Ceremonial grade matcha from Uji, Japan.', price: 'RM 15', cat: 'iced' },
  { id: '7', name: 'Butter Croissant', desc: 'Flaky, buttery, baked fresh daily.', price: 'RM 9', cat: 'pastries' },
  { id: '8', name: 'Pain au Chocolat', desc: 'Dark chocolate wrapped in layers of pastry.', price: 'RM 11', cat: 'pastries' },
  { id: '9', name: 'Pandan Chiffon', desc: 'Light, airy, infused with fresh pandan.', price: 'RM 12', cat: 'desserts', picks: true },
  { id: '10', name: 'Burnt Cheesecake', desc: 'Creamy center with a caramelized top.', price: 'RM 18', cat: 'desserts' },
  { id: '11', name: 'Hojicha Cloud', desc: 'Roasted green tea topped with sweet foam.', price: 'RM 17', cat: 'signature', picks: true },
  { id: '12', name: 'Rose Bandung Latte', desc: 'A sophisticated take on the local classic.', price: 'RM 16', cat: 'signature' },
];

export default function Menu() {
  const [activeCat, setActiveCat] = useState<Category>('coffee');

  const filteredItems = menuItems.filter(item => item.cat === activeCat);

  return (
    <section id="menu" className="bg-cafe-800 py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.2em] text-xs uppercase mb-4 inline-block">Digital Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cafe-50">Handcrafted Offerings</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={cn(
                "uppercase tracking-widest text-xs md:text-sm transition-all duration-300 pb-2 relative",
                activeCat === cat ? "text-accent" : "text-cafe-400 hover:text-cafe-200"
              )}
            >
              {cat}
              {activeCat === cat && (
                <motion.div 
                  layoutId="menu-cat-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {filteredItems.map(item => (
                <div key={item.id} className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-serif text-[18px] italic text-cafe-100 flex items-center gap-3">
                      {item.name}
                      {item.picks && <span className="text-[10px] tracking-widest uppercase text-accent border border-accent/30 px-2 py-0.5 rounded-sm not-italic mt-1">Chef Pick</span>}
                    </h3>
                    <span className="text-cafe-300 text-[12px] font-sans ml-4">{item.price}</span>
                  </div>
                  <p className="text-cafe-300 opacity-60 text-sm font-light">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
