'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Cpu, FlaskConical, BarChart3, Palette, Scale, Heart, BookOpen, ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: Code2,
    title: 'Computer Science & Engineering',
    desc: 'Master algorithms, AI, cloud computing, and full-stack development with industry-led curriculum.',
    color: 'from-purple-accent to-purple-light',
    glow: 'rgba(139,92,246,0.3)',
    duration: '4 Years',
    seats: '120',
    badge: 'Most Popular',
  },
  {
    icon: Cpu,
    title: 'Electronics & Communication',
    desc: 'Dive into embedded systems, IoT, VLSI design and wireless communication technologies.',
    color: 'from-cyan-accent to-cyan-light',
    glow: 'rgba(6,182,212,0.3)',
    duration: '4 Years',
    seats: '60',
    badge: null,
  },
  {
    icon: FlaskConical,
    title: 'Biotechnology & Life Sciences',
    desc: 'Explore the intersection of biology and technology through research and applied science.',
    color: 'from-green-400 to-emerald-600',
    glow: 'rgba(74,222,128,0.25)',
    duration: '4 Years',
    seats: '60',
    badge: null,
  },
  {
    icon: BarChart3,
    title: 'Business Administration (MBA)',
    desc: 'Leadership, strategy, finance and entrepreneurship for tomorrows business leaders.',
    color: 'from-yellow-400 to-orange-500',
    glow: 'rgba(251,191,36,0.25)',
    duration: '2 Years',
    seats: '90',
    badge: 'High Demand',
  },
  {
    icon: Palette,
    title: 'Design & Creative Arts',
    desc: 'Hone creative skills in UI/UX, visual communication, motion design, and branding.',
    color: 'from-pink-400 to-rose-600',
    glow: 'rgba(244,114,182,0.25)',
    duration: '4 Years',
    seats: '45',
    badge: null,
  },
  {
    icon: Scale,
    title: 'Law & Legal Studies',
    desc: 'Build expertise in corporate law, human rights, intellectual property, and judiciary.',
    color: 'from-indigo-400 to-blue-600',
    glow: 'rgba(99,102,241,0.25)',
    duration: '5 Years',
    seats: '60',
    badge: null,
  },
  {
    icon: Heart,
    title: 'Medical Sciences',
    desc: 'Comprehensive medical education with clinical exposure in our affiliated hospitals.',
    color: 'from-red-400 to-rose-600',
    glow: 'rgba(248,113,113,0.25)',
    duration: '5.5 Years',
    seats: '100',
    badge: null,
  },
  {
    icon: BookOpen,
    title: 'Humanities & Social Sciences',
    desc: 'Explore human experience through sociology, psychology, history, and economics.',
    color: 'from-teal-400 to-cyan-600',
    glow: 'rgba(45,212,191,0.25)',
    duration: '3 Years',
    seats: '80',
    badge: null,
  },
]

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="programs" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="text-xs font-mono font-medium text-cyan-light tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-cyan-accent/20 bg-cyan-accent/5">
            — Academic Programs —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-4 leading-tight"
        >
          Find Your <span className="gradient-text">Perfect Program</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-xl mx-auto mb-14"
        >
          50+ undergraduate, postgraduate, and doctoral programs designed with industry collaboration.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((prog, i) => {
            const Icon = prog.icon
            return (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                style={{
                  boxShadow: hovered === i ? `0 20px 60px ${prog.glow}` : 'none',
                }}
                className="relative glass border border-white/8 rounded-2xl p-5 card-hover group cursor-pointer transition-all duration-300 hover:border-white/15"
              >
                {prog.badge && (
                  <span className="absolute -top-2.5 right-4 text-xs px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-accent to-cyan-accent text-white font-medium">
                    {prog.badge}
                  </span>
                )}

                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="font-display font-bold text-white text-sm leading-snug mb-2 group-hover:gradient-text transition-all">
                  {prog.title}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">{prog.desc}</p>

                <div className="flex items-center justify-between pt-3 border-t border-white/6">
                  <div>
                    <div className="text-slate-500 text-xs">Duration</div>
                    <div className="text-white text-xs font-medium">{prog.duration}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs text-right">Seats</div>
                    <div className="text-white text-xs font-medium text-right">{prog.seats}</div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={hovered === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 flex items-center gap-1 text-xs font-medium gradient-text"
                >
                  Learn More <ArrowRight size={12} />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button className="btn-ghost flex items-center gap-2 text-sm px-8 py-3">
            View All Programs <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
