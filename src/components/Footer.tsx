'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react'

const footerLinks = {
  Programs: ['B.Tech / BE', 'MBA / PGDM', 'M.Tech', 'BCA / MCA', 'Law (LLB)', 'Medical (MBBS)', 'PhD Programs', 'Certificate Courses'],
  University: ['About JG University', 'Leadership & Faculty', 'Research & Labs', 'Rankings & Awards', 'News & Events', 'Alumni Network', 'Campus Map', 'Media Kit'],
  Admissions: ['How to Apply', 'Eligibility Criteria', 'Scholarships', 'Fee Structure', 'Entrance Exams', 'International Students', 'FAQs', 'Contact Admissions'],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden border-t border-white/6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-purple-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-accent to-cyan-accent flex items-center justify-center">
                <GraduationCap size={18} className="text-white" />
              </div>
              <div>
                <span className="font-display font-800 text-lg text-white">JG</span>
                <span className="font-display font-800 text-lg gradient-text"> University</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
              Shaping futures through innovation, research, and world-class education since 1998. A premier destination for students who dare to dream big.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              {[
                { icon: MapPin, text: 'JG Campus, University Road, Gujarat, India' },
                { icon: Phone, text: '+91 79 2630 0000' },
                { icon: Mail, text: 'admissions@jguni.in' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-start gap-2.5 text-slate-400 text-xs">
                    <Icon size={13} className="text-purple-light mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div className="flex gap-2.5 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-accent/40 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-bold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-200 text-xs transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="glass border border-white/8 rounded-2xl p-5 sm:p-6 mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>
            <div className="font-display font-bold text-white text-base mb-1">Stay in the loop</div>
            <div className="text-slate-400 text-xs">Get the latest updates on admissions, events, and news.</div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-56 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-accent/50 transition-colors"
            />
            <button className="btn-primary text-sm py-2.5 px-5 flex items-center gap-1.5 flex-shrink-0">
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/6">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} JG University. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Accessibility'].map((item) => (
              <a key={item} href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
