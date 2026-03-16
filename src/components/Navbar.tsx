import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Achiv Creations" className="w-6 h-6" />
        <span className="text-xl font-medium tracking-tight text-white">Achiv Creations</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-white/90">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Services</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>

      <button className="border border-white/20 hover:border-white/40 text-white px-5 py-2.5 rounded-full text-[13px] font-medium flex items-center gap-2 transition-all">
        Apply Now
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  )
}
