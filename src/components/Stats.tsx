'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Briefcase, Building2, Trophy, Star, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: 12000, suffix: '+', label: 'Students Enrolled', color: 'from-purple-accent to-purple-light', desc: 'Across all programs' },
  { icon: Briefcase, value: 94, suffix: '%', label: 'Placement Rate', color: 'from-cyan-accent to-cyan-light', desc: 'Within 6 months' },
  { icon: Building2, value: 200, suffix: '+', label: 'Recruiting Companies', color: 'from-green-400 to-emerald-500', desc: 'MNCs & startups' },
  { icon: Trophy, value: 50, suffix: '+', label: 'Programs Offered', color: 'from-yellow-400 to-orange-500', desc: 'UG, PG & PhD' },
  { icon: Star, value: 25, suffix: ' yrs', label: 'Years of Excellence', color: 'from-pink-400 to-rose-500', desc: 'Est. 1998' },
  { icon: Globe, value: 30, suffix: '+', label: 'Global Partnerships', color: 'from-indigo-400 to-blue-500', desc: 'Universities worldwide' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-accent/5 blur-[120px] pointer-events-none" />

      {/* Top marquee brand line */}
      <div className="overflow-hidden mb-16 border-y border-white/5 py-4">
        <div className="marquee-inner">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex items-center gap-12 px-6">
              {['TCS', 'Infosys', 'Wipro', 'Google', 'Microsoft', 'Amazon', 'Deloitte', 'KPMG', 'Accenture', 'IBM', 'Oracle', 'Cognizant'].map((c) => (
                <span key={c} className="text-slate-600 font-display font-bold text-xl whitespace-nowrap hover:text-slate-400 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="text-xs font-mono font-medium text-purple-light tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-purple-accent/20 bg-purple-accent/5">
            — Numbers Speak —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-14 leading-tight"
        >
          Our Impact in <span className="gradient-text">Numbers</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative glass border border-white/8 rounded-2xl p-6 text-center card-hover group hover:border-white/15 overflow-hidden"
              >
                {/* Gradient background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                <div className="font-display font-bold text-3xl sm:text-4xl text-white mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.desc}</div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass border border-white/8 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">Ready to be part of these numbers?</h3>
            <p className="text-slate-400 text-sm">Join thousands of successful alumni who started right here.</p>
          </div>
          <button
            onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex-shrink-0 px-8 py-3"
          >
            Apply Today →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
