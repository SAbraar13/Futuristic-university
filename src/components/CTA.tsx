'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const perks = [
  'No application fee',
  'Quick 24hr response',
  'Scholarship eligible',
  'Dedicated counsellor',
]

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cta" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/30 via-purple-dark/20 to-cyan-accent/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />

          {/* Orbs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-accent/25 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-cyan-accent/25 blur-[100px]" />

          {/* Border */}
          <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />

          <div className="relative z-10 p-10 sm:p-14 lg:p-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6"
              >
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-sm text-white font-medium">Admissions Open for 2024–25</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
              >
                Your Future Starts
                <br />
                <span className="gradient-text">Right Here</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-slate-300 text-lg leading-relaxed mb-8"
              >
                Don't wait. Thousands of students have already begun their journey 
                at JG University. Join a community that shapes futures.
              </motion.p>

              {/* Perks */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3 mb-10"
              >
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-1.5 text-sm text-slate-300">
                    <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
                    {perk}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="btn-primary text-base px-10 py-4 flex items-center justify-center gap-2">
                  Apply Now — It's Free <ArrowRight size={17} />
                </button>
                <button className="btn-ghost text-base px-10 py-4">
                  Download Brochure
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.65 }}
                className="mt-6 text-slate-500 text-sm"
              >
                By applying, you agree to our Terms & Privacy Policy. No spam, ever.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
