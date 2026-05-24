import { motion } from 'motion/react';
import { MapPin, Clock, MessageCircle } from 'lucide-react';

export default function VisitLocation() {
  return (
    <section id="visit" className="bg-cafe-900 py-32 position-relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-cafe-50 mb-6">Find Your Sanctuary</h2>
            <p className="text-cafe-300 font-light leading-relaxed mb-12 text-lg">
              Step away from the noise and discover one of Butterworth’s most comforting coffee experiences.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="text-cafe-100 font-medium tracking-wide uppercase text-sm mb-1">Address</h4>
                  <p className="text-cafe-400 font-light text-sm leading-relaxed">
                    123 Nostalgia Street, Butterworth, <br/>
                    12000 Penang, Malaysia.
                  </p>
                  <p className="text-cafe-500 text-xs mt-2 italic">*Street parking available nearby</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="text-cafe-100 font-medium tracking-wide uppercase text-sm mb-1">Operating Hours</h4>
                  <p className="text-cafe-400 font-light text-sm">Mon – Sun: 10:00 AM – 10:00 PM</p>
                  <p className="text-cafe-400 font-light text-sm">Closed on Tuesdays</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="#" className="px-6 py-4 bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors rounded-sm flex justify-center items-center gap-2 font-medium tracking-wide text-sm">
                <MessageCircle className="w-4 h-4" />
                Reserve via WhatsApp
              </a>
              <a href="#" className="px-6 py-4 border border-cafe-700 text-cafe-200 hover:border-accent hover:text-accent transition-colors rounded-sm flex justify-center items-center text-sm uppercase tracking-wide">
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-[4/3] lg:aspect-auto bg-cafe-800 border border-cafe-800 p-2 overflow-hidden rounded-sm"
        >
          {/* Aesthetic map placeholder or actual google map embed */}
          <div className="w-full h-full relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
              alt="Map area style" 
              className="w-full h-full object-cover sepia-[.4] opacity-70 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-cafe-900/80 backdrop-blur-md rounded-full flex items-center justify-center border border-accent/50 shadow-2xl">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
