import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What services does Achiv Creations offer?",
    answer: "We offer a comprehensive range of digital services including website development, UI/UX design, digital marketing, branding, and custom software solutions tailored to your business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity. A typical website takes 2-4 weeks, while more complex solutions may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we provide ongoing maintenance and support packages to ensure your digital solutions continue to perform optimally after launch.",
  },
  {
    question: "Can I request revisions during the project?",
    answer: "Absolutely. Depending on your plan, you'll have a set number of revisions included. We work closely with you to ensure the final product meets your vision.",
  },
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="contact" className="bg-black section-padding px-4">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-20">
        <div className="text-center flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[48px] font-normal leading-[1.2] tracking-tight"
          >
            Frequently Asked{' '}
            <span className="text-gradient-blue">Questions</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto w-full flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="text-base font-medium">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}
                >
                  <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/50 text-sm leading-[1.7]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
