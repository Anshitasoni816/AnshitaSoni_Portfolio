import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import netflixgptImage from '../../assets/netflixgptImage.png'
import EMSImage from '../../assets/EMSImage.png'

const PROJECTS = [
  {
    id: 1,
    badge: 'Featured · AI-Powered',
    title: 'Netflix-GPT',
    subtitle: 'Full Stack Movie Discovery App',
    description:
      'A production-deployed, Netflix-inspired platform that lets users discover movies in any language via AI-powered search. Integrates the Gemini API for natural-language queries and TMDB for real-time movie data — all wrapped in a smooth, authenticated experience.',
    highlights: [
      'AI search via Gemini API with multilingual support',
      'TMDB integration for live movie, trailer & rating data',
      'Firebase Auth with fully protected routing',
      'Deployed on Firebase with global CDN delivery',
    ],
    image: netflixgptImage ,
    tags: ['React', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Firebase', 'Gemini API', 'TMDB API'],
    github: 'https://github.com/Anshitasoni816/netflix_gpt',
    webapp: 'https://netflixgpt-b8cae.web.app',
  },
  {
    id: 2,
    badge: 'Full Stack · MERN',
    title: 'Employee Management System',
    subtitle: 'Enterprise HR & Attendance Platform',
    description:
      'A role-based MERN application built for managing employee records, attendance, and leave workflows. Implements JWT authentication, secure password hashing, and role-specific dashboards for admins and employees.',
    highlights: [
      'JWT auth + bcrypt password hashing for security',
      'Role-based access control (Admin / Employee)',
      'RESTful APIs for attendance, leave & employee CRUD',
      'Optimized MongoDB queries for fast data retrieval',
    ],
    image: EMSImage,
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: '',
    webapp: '',
  },
  // {
  //   id: 3,
  //   badge: 'Frontend · Open Source',
  //   title: 'Developer Portfolio',
  //   subtitle: 'This Portfolio — Built from Scratch',
  //   description:
  //     'A modern, responsive portfolio built with React 19, Tailwind CSS v4, Vite, and Framer Motion. Designed with recruiter-focused UX: fast load times, accessible markup, smooth scroll navigation, and animated section reveals.',
  //   highlights: [
  //     'Scroll-triggered Framer Motion animations',
  //     'Active section detection via IntersectionObserver',
  //     'SEO meta tags, OG tags, and structured markup',
  //     'Dark-first design with Inter typography system',
  //   ],
  //   image: portfolioProjectCoverImage,
  //   tags: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Netlify'],
  //   github: 'https://github.com/Anshitasoni816/AnshitaSoni_Portfolio',
  //   webapp: 'https://anshita-soni-portfolio.netlify.app/',
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a14]">
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
            What I've built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            End-to-end applications solving real problems — from AI-powered search to enterprise HR platforms.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white/2 border border-white/8 hover:border-indigo-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-[44%] xl:w-[46%] shrink-0 overflow-hidden bg-slate-950/60">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full aspect-video lg:h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <HiOutlineSparkles className="text-indigo-400" size={14} />
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-6">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="mt-1 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags + links */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-indigo-500/8 text-indigo-300 border border-indigo-500/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code on GitHub`}
                          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors px-3 py-1.5 rounded-lg border border-white/8 hover:border-white/15 hover:bg-white/5"
                        >
                          <FaGithub size={14} />
                          Code
                        </a>
                      )}
                      {project.webapp && (
                        <a
                          href={project.webapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors px-3 py-1.5 rounded-lg"
                        >
                          <FaExternalLinkAlt size={11} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Anshitasoni816"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            <FaGithub size={16} />
            See all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
