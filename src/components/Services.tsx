import { motion } from 'framer-motion'

const services = [
  {
    title: "Website Development",
    description: "Custom-built, responsive websites that drive conversions and deliver exceptional user experiences across all devices.",
    gradient: "card-gradient-purple",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces and seamless user experiences designed to engage, convert, and retain your target audience.",
    gradient: "card-gradient-blue-solid",
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that amplify your brand presence and drive measurable business growth.",
    gradient: "card-gradient-purple",
  },
]

export const Services = () => {
  return (
    <section id="services" className="bg-black section-padding px-4">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[48px] font-normal leading-[1.2] tracking-tight"
          >
            What We{' '}
            <span className="text-gradient-blue">Offer</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-10">
          {/* Row 1: Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.slice(0, 2).map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-card bg-black rounded-2xl overflow-hidden"
              >
                {/* Gradient top */}
                <div className={`${service.gradient} rounded-t-2xl h-[200px] flex items-center justify-center`}>
                  <div className="icon-gradient-purple rounded-full w-24 h-24 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 9l3 3-3 3" />
                      <path d="M15 15h-3" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-[1.7]">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Full width card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-card bg-black rounded-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className="flex-1 p-8 md:p-12 flex flex-col gap-6 justify-center">
              <h3 className="text-2xl md:text-3xl font-medium">{services[2].title}</h3>
              <p className="text-white/50 text-base leading-[1.7]">{services[2].description}</p>
            </div>
            <div className={`flex-1 ${services[2].gradient} rounded-r-2xl min-h-[250px] flex items-center justify-center`}>
              <div className="icon-gradient-blue rounded-full w-28 h-28 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
