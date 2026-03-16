import { motion } from 'framer-motion'

const tiers = [
  {
    name: "Basic",
    price: "₹199",
    period: "/month",
    description: "Perfect for individuals and small projects getting started.",
    features: ["1 Website", "Basic Support", "1 Revision", "Standard Design"],
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    description: "Ideal for growing businesses that need more features and support.",
    features: ["5 Websites", "Priority Support", "5 Revisions", "Custom Design", "SEO Optimization"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹999",
    period: "/month",
    description: "For large organizations requiring comprehensive solutions.",
    features: ["Unlimited Websites", "24/7 Support", "Unlimited Revisions", "Premium Design", "SEO + Marketing", "Dedicated Manager"],
  },
]

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-black section-padding px-4">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-20">
        <div className="text-center flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[48px] font-normal leading-[1.2] tracking-tight"
          >
            Our{' '}
            <span className="text-gradient-blue">Pricing</span>
          </motion.h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">Choose the plan that fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border-card rounded-2xl p-8 flex flex-col gap-6 ${tier.popular ? 'bg-gradient-to-b from-[rgba(97,63,231,0.15)] to-transparent ring-1 ring-[var(--purple)]/30' : 'bg-black'}`}
            >
              {tier.popular && (
                <span className="text-xs bg-[var(--purple)] text-white px-3 py-1 rounded-full w-fit font-medium">Most Popular</span>
              )}
              <div>
                <h3 className="text-xl font-medium mb-1">{tier.name}</h3>
                <p className="text-white/40 text-sm">{tier.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium">{tier.price}</span>
                <span className="text-white/40 text-sm">{tier.period}</span>
              </div>

              <button className="w-full bg-white text-black py-3 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                Get Started
              </button>

              <ul className="flex flex-col gap-3 mt-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/60">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3 4L6 11.3 2.7 8" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
