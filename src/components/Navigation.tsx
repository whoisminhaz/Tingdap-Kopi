import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Story', href: '#story' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-colors duration-500',
          isScrolled ? 'bg-cafe-900/90 backdrop-blur-md border-b border-cafe-800/50 py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl md:text-3xl tracking-wide text-cafe-100">Tingkap Kopi.</a>
          
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-cafe-200 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#visit"
              className="px-6 py-2.5 border border-accent/30 text-accent hover:bg-accent hover:text-cafe-900 transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Reserve Table
            </a>
          </div>

          <button 
            className="md:hidden text-cafe-100 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-cafe-900 flex flex-col pt-24 px-6 md:hidden">
          <button 
            className="absolute top-6 right-6 text-cafe-100 p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col space-y-8 text-center mt-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-serif text-3xl text-cafe-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#visit"
              className="mt-8 px-8 py-4 border border-accent text-accent uppercase tracking-widest text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reserve Table
            </a>
          </div>
        </div>
      )}
    </>
  );
}
