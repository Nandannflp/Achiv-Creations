export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 section-padding px-8">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-[42%]">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Achiv Creations" className="w-7 h-7" />
              <span className="text-lg font-medium tracking-tight">Achiv Creations</span>
            </div>
            <p className="text-white/40 text-sm leading-[1.7]">
              Unlock Your Online Potential with Achiv Creations! We specialize in guiding clients through the ever-evolving digital landscape, empowering them to achieve their marketing goals with precision and impactful results.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-sm">Platform</h4>
              <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Home</a>
              <a href="#about" className="text-white/40 text-sm hover:text-white/70 transition-colors">About</a>
              <a href="#services" className="text-white/40 text-sm hover:text-white/70 transition-colors">Services</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-sm">Company</h4>
              <a href="#pricing" className="text-white/40 text-sm hover:text-white/70 transition-colors">Pricing</a>
              <a href="#contact" className="text-white/40 text-sm hover:text-white/70 transition-colors">Contact</a>
              <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Terms</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-sm">Social</h4>
              <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">LinkedIn</a>
              <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Instagram</a>
              <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>&copy; {new Date().getFullYear()} Achiv Creations. All rights reserved.</p>
          <p>Made with ❤️ for the future.</p>
        </div>
      </div>
    </footer>
  )
}
