import { motion } from 'framer-motion'

const features = [
  {
    title: "Creative Design",
    description: "We craft visually stunning, user-centric designs that elevate your brand and captivate your audience from the first glance.",
  },
  {
    title: "Strategic Marketing",
    description: "Our data-driven marketing strategies help your business reach the right audience with precision and impactful results.",
  },
  {
    title: "Tech Solutions",
    description: "From web development to custom software, we build robust technological solutions tailored to your business needs.",
  },
]

export const Features = () => {
  return (
    <section id="about" className="bg-black section-padding px-4">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 flex flex-col gap-1 pt-28">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-[48px] font-normal leading-[1.2] tracking-tight"
              >
                Why{' '}
                <span className="text-gradient-blue">Choose Us</span>
              </motion.h2>
              <p className="text-white/50 text-base leading-[1.7] mt-4">
                We combine creativity, technology, and strategy
              </p>
            </div>

            {/* Feature Items */}
            <div className="flex-1 flex flex-col gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-[var(--blue)] pb-8 flex flex-row items-end gap-3"
                >
                  <span className="text-white/30 text-sm shrink-0">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-[1.7]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
