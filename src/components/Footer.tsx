export default function Footer() {
  return (
    <footer className="bg-cafe-900 pt-20 pb-10 border-t border-cafe-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl text-cafe-100 mb-6">Tingkap Kopi.</h3>
            <p className="text-cafe-400 font-light text-sm leading-relaxed max-w-sm">
              A cinematic love letter to Malaysian coffee culture. Where aesthetic 
              slow-living meets artisanal brewing in the heart of Butterworth.
            </p>
          </div>
          
          <div>
            <h4 className="text-cafe-100 font-medium tracking-widest uppercase text-xs mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Experience', 'Menu', 'Story', 'Visit'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-cafe-400 hover:text-accent font-light text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cafe-100 font-medium tracking-widest uppercase text-xs mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-cafe-400 hover:text-accent font-light text-sm transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-cafe-400 hover:text-accent font-light text-sm transition-colors">TikTok</a>
              </li>
              <li>
                <a href="#" className="text-cafe-400 hover:text-accent font-light text-sm transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cafe-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 uppercase tracking-wider text-[11px] text-cafe-300">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full shadow-[0_0_8px_#4CAF50]"></span>
            Open Until 10:00 PM
          </p>
          <div className="flex gap-6">
            <p>© {new Date().getFullYear()} Tingkap Kopi. Butterworth, MY</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
