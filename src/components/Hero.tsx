'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, BookOpen, Award, TrendingUp } from 'lucide-react'

const floatingCards = [
  { icon: Users, label: 'Students Enrolled', value: '12,000+', color: 'from-purple-accent to-purple-dark', delay: 0 },
  { icon: Award, label: 'Placement Rate', value: '94%', color: 'from-cyan-accent to-cyan-dark', delay: 0.2 },
  { icon: TrendingUp, label: 'Industry Partners', value: '200+', color: 'from-purple-accent to-cyan-accent', delay: 0.4 },
]

const badges = [
  '🏆 NAAC A+ Accredited',
  '🌐 Global Partnerships',
  '💼 100% Placement Support',
  '🔬 Research-Led Teaching',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = []
    const colors = ['#8B5CF6', '#06B6D4', '#A78BFA', '#22D3EE']

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      })

      // Draw connections
      ctx.globalAlpha = 1
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#8B5CF6'
            ctx.globalAlpha = 0.08 * (1 - dist / 120)
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background orbs */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-purple-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-glow/5 blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-accent/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">Now Accepting Applications 2024–25</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Shape Your</span>
              <br />
              <span className="gradient-text">Future</span>
              <br />
              <span className="text-white">With Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              JG University offers world-class education with cutting-edge programs, industry-connected faculty, and a thriving research environment that prepares you for tomorrow's challenges.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2 text-base px-7 py-3.5"
              >
                Explore Programs <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost flex items-center gap-2 text-base px-7 py-3.5"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={12} className="ml-0.5" />
                </div>
                Watch Tour
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 rounded-full glass border border-white/8 text-slate-400"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex flex-col items-center justify-center"
          >
            {/* Central visual */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="glass-strong rounded-3xl p-8 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-accent/20 blur-[60px]" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cyan-accent/15 blur-[60px]" />

                {/* University graphic */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-accent to-cyan-accent flex items-center justify-center">
                      <GraduationCapBig />
                    </div>
                    <div>
                      <div className="text-white font-display font-bold text-lg">JG University</div>
                      <div className="text-slate-400 text-xs">Excellence Since 1998</div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-4">
                    {[
                      { label: 'Academic Excellence', val: 96, color: 'from-purple-accent to-purple-light' },
                      { label: 'Research Output', val: 88, color: 'from-cyan-accent to-cyan-light' },
                      { label: 'Industry Connect', val: 94, color: 'from-purple-accent to-cyan-accent' },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-slate-400">{item.label}</span>
                          <span className="text-white font-medium">{item.val}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.val}%` }}
                            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                            className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini stats row */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                      { v: '50+', l: 'Programs' },
                      { v: '180+', l: 'Faculty' },
                      { v: '25yr', l: 'Legacy' },
                    ].map((s) => (
                      <div key={s.l} className="text-center p-3 rounded-xl bg-white/4 border border-white/6">
                        <div className="font-display font-bold text-lg gradient-text">{s.v}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              {floatingCards.map((card, i) => {
                const Icon = card.icon
                const positions = [
                  '-top-6 -left-8',
                  '-bottom-4 -left-12',
                  '-top-2 -right-10',
                ]
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{
                      opacity: { delay: 0.8 + i * 0.15 },
                      scale: { delay: 0.8 + i * 0.15 },
                      y: { repeat: Infinity, duration: 4 + i, ease: 'easeInOut', delay: i * 0.7 },
                    }}
                    className={`absolute ${positions[i]} glass border border-white/10 rounded-2xl p-3 flex items-center gap-3 shadow-xl min-w-[150px]`}
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-sm">{card.value}</div>
                      <div className="text-slate-400 text-xs">{card.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Mobile floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden grid grid-cols-3 gap-3 mt-8"
        >
          {floatingCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.label} className="glass border border-white/8 rounded-xl p-3 text-center">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-2`}>
                  <Icon size={14} className="text-white" />
                </div>
                <div className="font-display font-bold text-white text-sm">{card.value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{card.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}

function GraduationCapBig() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}
