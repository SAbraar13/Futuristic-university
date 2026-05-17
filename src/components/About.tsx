'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Lightbulb, Globe2, Users2, Sparkles } from 'lucide-react'

const features = [
  { icon: CheckCircle2, text: 'NAAC A+ Grade Accreditation' },
  { icon: Globe2, text: 'International Academic Partnerships' },
  { icon: Lightbulb, text: 'Innovation & Research Centres' },
  { icon: Users2, text: '200+ Expert Faculty Members' },
]

const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovation-First',
    desc: 'A curriculum designed with industry leaders to keep you ahead of the curve.',
    color: 'from-purple-accent to-purple-light',
  },
  {
    icon: Globe2,
    title: 'Global Exposure',
    desc: 'Exchange programs and international partnerships spanning 30+ countries.',
    color: 'from-cyan-accent to-cyan-light',
  },
  {
    icon: Sparkles,
    title: 'Research Excellence',
    desc: 'State-of-the-art labs, funded research projects, and publication support.',
    color: 'from-purple-glow to-cyan-accent',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-accent/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-accent/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="text-xs font-mono font-medium text-purple-light tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-purple-accent/20 bg-purple-accent/5">
            — Who We Are —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-16 leading-tight"
        >
          A Legacy of <span className="gradient-text">Excellence</span> &<br className="hidden sm:block" /> Innovation
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image placeholder — layered card */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/20 via-transparent to-cyan-accent/20" />
              {/* Campus visual mockup */}
              <div className="w-full h-full glass-strong border border-white/10 flex flex-col items-center justify-center gap-4 p-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: 'Est.', value: '1998' },
                    { label: 'Campus Area', value: '50 Acres' },
                    { label: 'Departments', value: '15+' },
                    { label: 'Clubs', value: '40+' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center"
                    >
                      <div className="font-display font-bold text-2xl gradient-text">{item.value}</div>
                      <div className="text-slate-400 text-sm mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-slate-400 text-sm text-center leading-relaxed">
                  "Ranked among the top universities in the region, JG University has been a beacon of knowledge and innovation for over 25 years."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['#8B5CF6', '#06B6D4', '#A78BFA'].map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-bg flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-400 text-xs">Join 12,000+ students</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl glass border border-white/8 flex items-center justify-center rotate-6">
              <div className="text-center">
                <div className="font-display font-bold text-2xl gradient-text">A+</div>
                <div className="text-slate-500 text-xs">NAAC Grade</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Founded in 1998, JG University has grown into a premier institution known for academic rigor, 
              industry integration, and a vibrant campus culture. We nurture critical thinkers, innovators, 
              and leaders who make a real difference in the world.
            </motion.p>

            {/* Features list */}
            <div className="space-y-3 mb-10">
              {features.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl glass border border-white/6 hover:border-purple-accent/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-accent to-cyan-accent flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-white" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                  </motion.div>
                )
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="btn-primary text-sm px-6 py-3"
            >
              Learn More About Us
            </motion.button>
          </div>
        </div>

        {/* Pillars section */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                className="glass border border-white/8 rounded-2xl p-6 card-hover hover:border-purple-accent/30 group"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
