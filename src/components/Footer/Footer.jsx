import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080812]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm font-semibold text-indigo-400 mb-3">
              <span className="text-slate-600">{'<'}</span>
              AnshitaSoni
              <span className="text-slate-600">{' />'}</span>
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Full Stack Developer building scalable, user-focused web applications with the MERN stack.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:sonianshit@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors"
              >
                <HiOutlineMail size={15} />
                sonianshit@gmail.com
              </a>
              <a
                href="https://github.com/Anshitasoni816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors"
              >
                <FaGithub size={15} />
                github.com/Anshitasoni816
              </a>
              <a
                href="https://www.linkedin.com/in/anshitasoni/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors"
              >
                <FaLinkedin size={15} />
                linkedin.com/in/anshitasoni
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-slate-600">
            © 2026 Anshita Soni. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
