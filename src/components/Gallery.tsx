'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Camera } from 'lucide-react'

const galleryItems = [
  { label: 'Main Library', span: 'col-span-2', bg: 'from-purple-accent/30 to-purple-dark/30', emoji: '📚', size: 'row-span-2' },
  { label: 'Science Lab', span: '', bg: 'from-cyan-accent/30 to-cyan-dark/30', emoji: '🔬', size: '' },
  { label: 'Sports Complex', span: '', bg: 'from-green-400/20 to-emerald-600/20', emoji: '🏋️', size: '' },
  { label: 'Tech Centre', span: '', bg: 'from-yellow-400/20 to-orange-500/20', emoji: '💻', size: '' },
  { label: 'Auditorium', span: 'col-span-2', bg: 'from-pink-400/20 to-rose-600/20', emoji: '🎭', size: '' },
  { label: 'Cafeteria', span: '', bg: 'from-indigo-400/20 to-blue-500/20', emoji: '☕', size: '' },
  { label: 'Innovation Hub', span: '', bg: 'from-teal-400/20 to-cyan-600/20', emoji: '🚀', size: '' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gallery" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purple-accent/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="text-xs font-mono font-medium text-purple-light tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-purple-accent/20 bg-purple-accent/5">
            — Campus Life —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-4 leading-tight"
        >
          Life on <span className="gradient-text">Campus</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-xl mx-auto mb-12"
        >
          A vibrant, modern campus built for learning, collaboration, and growth.
        </motion.p>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`gallery-item relative rounded-2xl overflow-hidden group cursor-pointer ${item.span} ${item.size}`}
              style={{ gridColumn: item.span === 'col-span-2' ? 'span 2' : 'span 1', gridRow: item.size === 'row-span-2' ? 'span 2' : 'span 1' }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} transition-all duration-500 group-hover:scale-110`} />

              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-50" />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-bg/40 group-hover:bg-bg/20 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                <span className="text-4xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <span className="font-display font-bold text-white text-sm sm:text-base text-center">
                  {item.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Camera icon on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera size={14} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile simplified grid (shown below sm) */}
        <div className="sm:hidden mt-4 grid grid-cols-2 gap-3">
          {galleryItems.slice(0, 4).map((item) => (
            <div key={`mob-${item.label}`} className="gallery-item relative rounded-xl overflow-hidden h-32 group cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
              <div className="absolute inset-0 bg-bg/40 flex flex-col items-center justify-center gap-2">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-white text-xs font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
