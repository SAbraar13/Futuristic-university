'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Aditya Sharma',
    role: 'Software Engineer @ Google',
    batch: 'CSE 2021',
    stars: 5,
    text: 'JG University gave me the foundation and confidence to crack FAANG interviews. The faculty mentorship and project-based learning are truly world-class. I still remember the late-night hackathons and coding labs that shaped who I am as an engineer today.',
    initial: 'A',
    color: '#8B5CF6',
  },
  {
    name: 'Priya Nair',
    role: 'Product Manager @ Microsoft',
    batch: 'MBA 2022',
    stars: 5,
    text: 'The MBA program at JG University completely transformed my perspective on business. The case studies, industry speakers, and placement support are outstanding. Within 3 months of graduation, I had 4 offers — and chose Microsoft!',
    initial: 'P',
    color: '#06B6D4',
  },
  {
    name: 'Rohan Mehta',
    role: 'Data Scientist @ Amazon',
    batch: 'CSE 2020',
    stars: 5,
    text: 'The research culture at JG University is phenomenal. I published two papers during my undergrad and got direct referrals from faculty. The AI and ML labs are equipped with the latest hardware — I literally trained my first deep learning model here.',
    initial: 'R',
    color: '#A78BFA',
  },
  {
    name: 'Sneha Patel',
    role: 'UX Designer @ Adobe',
    batch: 'Design 2022',
    stars: 5,
    text: 'The Design program is truly ahead of its time. We worked with real clients, built real portfolios, and got critiqued by professionals from the industry. That real-world exposure is what landed me my dream job at Adobe.',
    initial: 'S',
    color: '#22D3EE',
  },
  {
    name: 'Karthik Reddy',
    role: 'Consultant @ Deloitte',
    batch: 'MBA 2021',
    stars: 5,
    text: "The MBA here isn't just theoretical — it's deeply practical. The case competitions, consulting simulations, and mentorship programs prepared me for day one at Deloitte. The alumni network has been invaluable throughout my career.",
    initial: 'K',
    color: '#F59E0B',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  }
  const next = () => {
    setDirection(1)
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-accent/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-accent/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="text-xs font-mono font-medium text-cyan-light tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-cyan-accent/20 bg-cyan-accent/5">
            — Alumni Stories —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-14 leading-tight"
        >
          What Our <span className="gradient-text">Alumni Say</span>
        </motion.h2>

        {/* Featured testimonial slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative glass-strong border border-white/10 rounded-3xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} className="text-purple-accent" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}88)` }}
                  >
                    {testimonials[current].initial}
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-lg">{testimonials[current].name}</div>
                    <div className="text-slate-400 text-sm">{testimonials[current].role}</div>
                    <div className="text-slate-500 text-xs">{testimonials[current].batch}</div>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <Stars count={testimonials[current].stars} />
                  </div>
                </div>

                <div className="sm:hidden mb-4">
                  <Stars count={testimonials[current].stars} />
                </div>

                <p className="text-slate-300 text-base leading-relaxed relative z-10">
                  "{testimonials[current].text}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-6 bg-purple-accent' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:border-purple-accent/50 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:border-purple-accent/50 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass border border-white/8 rounded-2xl p-5 card-hover hover:border-white/15"
            >
              <Stars count={t.stars} />
              <p className="text-slate-400 text-sm leading-relaxed my-3 line-clamp-3">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-white text-xs font-medium">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
