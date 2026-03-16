import { motion } from 'framer-motion'

export const Services = () => {
  const services = [
    {
      title: "AI Strategy",
      description: "Harness the power of AI to transform your business operations and decision-making.",
      icon: "🤖"
    },
    {
      title: "Digital Systems",
      description: "Build robust, scalable digital infrastructures designed for the modern age.",
      icon: "⚙️"
    },
    {
      title: "Tech Consulting",
      description: "Expert guidance on your technology journey, from planning to execution.",
      icon: "💡"
    }
  ]

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-white/60">Comprehensive solutions for the digital era.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
