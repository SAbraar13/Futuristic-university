'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What are the admission requirements for undergraduate programs?',
    a: 'Admission to our undergraduate programs requires completion of 10+2 (or equivalent) with a minimum of 60% aggregate marks. Admission is based on merit in qualifying exams, followed by a personal interview. Some programs may require entrance test scores such as JEE, NEET, or our university entrance exam.',
  },
  {
    q: 'Does JG University offer scholarships?',
    a: 'Yes! We offer a range of scholarships including merit-based, need-based, sports excellence, and special category scholarships. The scholarship amount ranges from 25% to 100% tuition fee waiver. Additionally, we assist students in applying for government scholarships like National Scholarship Portal (NSP).',
  },
  {
    q: 'What is the placement support like at JG University?',
    a: 'Our Placement Cell has a dedicated team that connects students with 200+ recruiters from MNCs and top startups. We conduct career fairs, mock interviews, aptitude training, and resume workshops throughout the year. Our placement rate stands at 94% with average packages ranging from ₹4 LPA to ₹24 LPA.',
  },
  {
    q: 'Are hostel facilities available on campus?',
    a: 'Yes, we have separate air-conditioned hostels for boys and girls with 24/7 security, high-speed Wi-Fi, medical facilities, sports facilities, and nutritious meals. The hostels accommodate over 3,000 students and are located within the 50-acre campus.',
  },
  {
    q: 'Does JG University offer online or distance learning programs?',
    a: 'Yes, we offer select programs through online and blended learning modes in collaboration with UGC-approved platforms. These include MBA, MCA, and several postgraduate programs. All online programs carry the same degree value as on-campus programs.',
  },
  {
    q: 'How can I apply to JG University?',
    a: 'Applications can be submitted online through our official website. The process includes filling the application form, uploading required documents, paying the application fee, and appearing for the selection process. Admissions typically open in February for the July intake. Click "Apply Now" to begin your journey.',
  },
  {
    q: 'What international opportunities are available for students?',
    a: 'Through our 30+ global partnerships, students can participate in semester exchange programs, international internships, research collaborations, and study tours. We have tie-ups with universities in the USA, UK, Germany, Australia, Canada, and Singapore.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="text-xs font-mono font-medium text-cyan-light tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-cyan-accent/20 bg-cyan-accent/5">
            — FAQs —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-4 leading-tight"
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-xl mx-auto mb-12"
        >
          Everything you need to know about admissions, programs, and campus life.
        </motion.p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className={`glass border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? 'border-purple-accent/40' : 'border-white/8 hover:border-white/15'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
              >
                <span className={`font-medium text-sm sm:text-base leading-snug pr-4 transition-colors ${
                  open === i ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  open === i
                    ? 'bg-gradient-to-br from-purple-accent to-cyan-accent'
                    : 'glass border border-white/10'
                }`}>
                  {open === i
                    ? <Minus size={13} className="text-white" />
                    : <Plus size={13} className="text-white" />
                  }
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="h-px bg-gradient-to-r from-purple-accent/30 to-cyan-accent/30 mb-4" />
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm mb-3">Still have questions?</p>
          <button className="btn-ghost text-sm px-6 py-2.5">
            Contact Admissions →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
