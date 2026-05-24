import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import DrinksShowcase from './components/DrinksShowcase';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import SocialExperience from './components/SocialExperience';
import VisitLocation from './components/VisitLocation';
import Footer from './components/Footer';
import AmbientSoundToggle from './components/AmbientSoundToggle';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative antialiased selection:bg-accent/30 selection:text-cafe-50">
      <div className="film-grain"></div>
      <AmbientSoundToggle />
      
      {/* Floating WhatsApp CTA */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        href="#"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Reserve via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      <Navigation />
      
      <main>
        <Hero />
        <Experience />
        <DrinksShowcase />
        <Story />
        <Menu />
        <Gallery />
        <Testimonials />
        <SocialExperience />
        <VisitLocation />
      </main>
      
      <Footer />
    </div>
  );
}
