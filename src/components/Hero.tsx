import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end items-center overflow-hidden pt-48 pb-28 px-4">
      {/* Background blur gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-15%] w-[70%] h-[90%] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1320px] mx-auto w-full flex flex-col gap-20 z-10">
        {/* Top hero content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-normal tracking-tight leading-[1.15] w-full lg:w-[60%]">
              Welcome to the{' '}
              <span className="text-gradient-blue">Achiv Creations</span>
            </h1>
          </div>

          <a href="#contact" className="w-fit bg-[#6366F1] hover:bg-[#5558E5] text-white px-7 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20">
            Apply Now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </motion.div>

        {/* Bottom glassmorphism bar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass rounded-[20px] px-8 py-6 flex flex-col md:flex-row items-start md:items-end gap-12"
        >
          <h2 className="flex-1 text-3xl md:text-[42px] font-normal tracking-tight leading-[1.15]">
            Transforming Businesses with{' '}
            <span className="text-gradient-blue">Cutting-Edge Solutions</span>
          </h2>
          <p className="flex-1 text-white/60 text-base leading-[1.7]">
            Achiv Creations©, a pioneer in the tech industry, excels in delivering groundbreaking IT services and software solutions
          </p>
        </motion.div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-[-52px] left-[-520px] right-0 w-[1784px] h-[calc(100%+52px)] gradient-blue-bottom opacity-20 blur-[15px] rounded-[72px] pointer-events-none" />
    </section>
  )
}
