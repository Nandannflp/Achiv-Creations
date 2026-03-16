import { motion } from 'framer-motion'

const stats = [
  { number: "50+", label: "Completed Projects" },
  { number: "30+", label: "Satisfied Clients" },
  { number: "10+", label: "Team Members" },
  { number: "3+", label: "Years Experience" },
]

export const Stats = () => {
  return (
    <section className="bg-black py-4">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-card bg-black rounded-2xl p-8 flex flex-col items-center gap-2 text-center"
            >
              <span className="text-4xl md:text-5xl font-normal text-gradient-blue">{stat.number}</span>
              <span className="text-white/50 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
