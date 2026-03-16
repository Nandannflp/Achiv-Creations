export const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Achiv Creations" className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">Achiv Creations</span>
          </div>
          <p className="text-white/50 leading-relaxed">
            Building the foundations of tomorrow, today. Join us in our journey to redefine the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Platform</h4>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">About</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Company</h4>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Social</h4>
            <a href="#" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
        <p>© 2026 Achiv Creations. All rights reserved.</p>
        <p>Made with ❤️ for the future.</p>
      </div>
    </footer>
  )
}
