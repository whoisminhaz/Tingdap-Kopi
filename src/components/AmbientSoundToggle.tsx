import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function AmbientSoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // using a public domain relaxing rain + jazz ambient track if possible, 
    // or just a placeholder rain sound.
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=rain-and-thunder-16705.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={toggleSound}
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-cafe-800/80 backdrop-blur-md border border-cafe-700/50 text-cafe-200 hover:text-accent hover:border-accent/50 transition-all duration-300 group"
      aria-label="Toggle ambient sound"
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase whitespace-nowrap">
        {isPlaying ? 'Pause Ambient' : 'Play Ambient'}
      </span>
    </motion.button>
  );
}
