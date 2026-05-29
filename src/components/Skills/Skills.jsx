import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineJavaScript } from 'react-icons/ai'
import { FaNodeJs, FaReact, FaGitAlt } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiFirebase, SiMongodb, SiNetlify, SiPostman, SiRedux, SiVite } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    skills: [
      { name: 'JavaScript', Icon: AiOutlineJavaScript, color: 'text-yellow-400' },
      { name: 'React.js', Icon: FaReact, color: 'text-cyan-400' },
      { name: 'Redux Toolkit', Icon: SiRedux, color: 'text-purple-400' },
      { name: 'Tailwind CSS', Icon: RiTailwindCssFill, color: 'text-sky-400' },
    ],
  },
  {
    label: 'Backend & Databases',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    skills: [
      { name: 'Node.js', Icon: FaNodeJs, color: 'text-green-400' },
      { name: 'Express.js', Icon: SiExpress, color: 'text-slate-300' },
      { name: 'MongoDB', Icon: SiMongodb, color: 'text-lime-400' },
      { name: 'MySQL', Icon: GrMysql, color: 'text-cyan-300' },
    ],
  },
  {
    label: 'Tools & Deployment',
    color: 'text-orange-400',
    border: 'border-orange-500/20',
    skills: [
      { name: 'Firebase', Icon: SiFirebase, color: 'text-yellow-500' },
      { name: 'Netlify', Icon: SiNetlify, color: 'text-teal-400' },
      { name: 'Postman', Icon: SiPostman, color: 'text-orange-400' },
      { name: 'Git', Icon: FaGitAlt, color: 'text-red-400' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Tech Stack
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            A focused set of technologies I use daily to ship scalable, production-ready applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map(({ label, color, border, skills }, catIdx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className={`bg-white/3 border ${border} rounded-2xl p-6 backdrop-blur-sm`}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-wider ${color} mb-5`}>
                {label}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map(({ name, Icon, color: iconColor }, i) => (
                  <motion.div
                    key={name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={catIdx * 4 + i}
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-3 bg-white/3 hover:bg-white/6 border border-white/5 hover:border-white/10 rounded-xl px-3 py-2.5 transition-all duration-200 cursor-default"
                  >
                    <Icon size={20} className={iconColor} />
                    <span className="text-sm text-slate-300 font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-600 text-sm mt-8"
        >
          Also comfortable with: HTML5, CSS3, Bootstrap, VS Code, Excel, GitHub
        </motion.p>
      </div>
    </section>
  )
}
