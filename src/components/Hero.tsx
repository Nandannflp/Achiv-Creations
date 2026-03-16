import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-12 overflow-hidden bg-black">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-blue-600/20 blur-[150px] rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]">
              Welcome to the <br />
              <span className="text-[#00A3FF]">Achiv Creations</span>
            </h1>
          </div>
          
          <div className="flex flex-col gap-6">
            <button className="w-fit bg-[#6366F1] hover:bg-[#5558E5] text-white px-8 py-3 rounded-full font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20">
              Apply Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative flex justify-center"
        >
          <div className="relative w-full max-w-[650px]">
            <img 
              src="https://framerusercontent.com/images/Nmn7NzPdcc4xAOzb7Nmte32xRc.webp" 
              alt="Achiv Creations Glass Asset" 
              className="w-full h-auto drop-shadow-[0_0_80px_rgba(0,163,255,0.2)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Content Bar at the bottom */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto w-full mt-24"
      >
        <div className="glass-card rounded-[32px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 border-white/5 overflow-hidden">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
              Transforming Businesses with <br />
              <span className="text-[#00A3FF]">Cutting-Edge Solutions</span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
              Achiv Creations©, a pioneer in the tech industry, excels in delivering groundbreaking IT services and software solutions
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
