import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1320px] flex items-center justify-between px-6 py-3"
      >
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Achiv Creations" className="w-7 h-7" />
          <span className="text-lg font-medium tracking-tight">Achiv Creations</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-normal text-white/80">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <a href="#contact" className="border border-white/20 hover:border-white/40 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all">
          Apply Now
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </motion.div>
    </nav>
  )
}
