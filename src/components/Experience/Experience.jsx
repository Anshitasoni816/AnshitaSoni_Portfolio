import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi'

const EXPERIENCES = [
  {
    type: 'work',
    role: 'Full Stack Developer',
    company: 'Career Mantra',
    location: 'Gwalior, MP',
    duration: 'Mar 2026 — Present',
    tag: 'Current',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    points: [
      'Contributing to responsive web interfaces using React and Tailwind CSS.',
      'Supporting backend feature development with Node.js, Express, and MongoDB.',
      'Working with real product requirements, team feedback, and practical delivery workflows.',
      'Strengthening full-stack development skills through production-oriented tasks.',
    ],
  },
  {
    type: 'work',
    role: 'IT Intern',
    company: 'Career Mantra',
    location: 'Gwalior, MP',
    duration: 'Dec 2025 — Feb 2026',
    tag: '3 months',
    tagColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    points: [
      'Designed and developed responsive landing pages that supported digital advertising and lead-generation campaigns.',
      'Implemented database integration for lead capture forms, enabling automated storage and management of customer information.',
      'Created reusable frontend components to improve development efficiency and maintain UI consistency.',
      'Worked closely with marketing and sales teams to support campaign execution and user acquisition initiatives.',
      'Maintained operational reports and business data using Excel, contributing to performance tracking and decision-making.'
    ],
  },
  {
    type: 'education',
    role: 'Master of Computer Application (MCA)',
    company: 'Madhav Institute of Technology & Science (MITS)',
    location: 'Gwalior, MP',
    duration: '2024 — 2026',
    tag: 'CGPA: 8.02',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    points: [
      'Specialized in full-stack development, data structures, and software engineering principles.',
      'Built academic and personal projects using the MERN stack and modern frontend tools.',
    ],
  },
  {
    type: 'education',
    role: 'Bachelor of Computer Application (BCA)',
    company: 'Kamla Raja Girls Government Post Graduate College',
    location: 'Gwalior, MP',
    duration: 'Graduated 2023',
    tag: 'CGPA: 7.5',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    points: [
      'Completed undergraduate studies with a strong academic foundation.',
      'Built core analytical, problem-solving, and computer fundamentals before pursuing MCA.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Where I've worked
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Experience & Education
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            A practical journey across professional experience, MCA studies, and personal full-stack projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {EXPERIENCES.map((item, idx) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="sm:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-5 w-12 h-12 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                </div>

                {/* Card */}
                <article className="bg-white/2 border border-white/8 hover:border-indigo-500/25 rounded-2xl p-6 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        {item.type === 'education'
                          ? <HiOutlineAcademicCap className="text-indigo-400" size={16} />
                          : <HiOutlineBriefcase className="text-indigo-400" size={16} />
                        }
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-sm text-slate-400 mt-0.5">
                          {item.company} · {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                      <span className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-lg border ${item.tagColor}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{item.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
