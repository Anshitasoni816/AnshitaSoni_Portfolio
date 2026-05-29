import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import profileImage from '../../assets/profileImage.png'

const STATS = [
  { value: '<1', label: 'Year of\nExperience' },
  { value: '2', label: 'Projects\nShowcased' },
  { value: 'MCA', label: '2024 -\n2026' },
  { value: '8.02', label: 'MCA\nCGPA' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function About() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities · Open to relocate
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Anshita Soni
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-xl sm:text-2xl font-medium text-slate-400 mb-6"
          >
            Full Stack Developer &mdash; MERN Stack
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            I build{' '}
            <span className="text-slate-200 font-medium">responsive, user-focused web applications</span>{' '}
            using React, Node.js, and MongoDB. I am currently gaining hands-on full-stack experience at{' '}
            <span className="text-indigo-400 font-medium">Career Mantra</span>. Outside my professional
            work, I build personal MERN projects, including an AI-powered movie discovery app using the
            Gemini API.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
          >
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              View My Work
            </button>
            <a
              href="/Updated_Rsume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-indigo-500/5 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/Anshitasoni816"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href="https://www.linkedin.com/in/anshitasoni/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Profile image + stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex flex-col items-center gap-6"
        >
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 blur-2xl opacity-30 scale-110" />
            <img
              src={profileImage}
              alt="Anshita Soni — Full Stack Developer"
              className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {STATS.map(({ value, label }) => (
              <div
                key={value}
                className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-center backdrop-blur-sm"
              >
                <p className="text-xl font-bold text-indigo-400">{value}</p>
                <p className="text-xs text-slate-500 leading-tight mt-0.5 whitespace-pre-line">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center mt-12"
      >
        <button
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors"
          aria-label="Scroll to skills"
        >
          <span className="text-xs">Scroll</span>
          <HiArrowDown size={16} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}
