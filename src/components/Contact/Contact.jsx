import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineExternalLink } from 'react-icons/hi'

const CONTACT_INFO = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'sonianshit@gmail.com',
    href: 'mailto:sonianshit@gmail.com',
  },
  {
    icon: HiOutlineLocationMarker,
    label: 'Location',
    value: 'Gwalior, Madhya Pradesh',
    href: null,
  },
]

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Anshitasoni816',
    handle: '@Anshitasoni816',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anshitasoni/',
    handle: 'anshitasoni',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Opens default mail client with prefilled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:sonianshit@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a14]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            I'm open to full-time roles, relocation, freelance projects, and collaborations.
            Whether you have a role in mind or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — info + social */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Contact info */}
            <div className="bg-white/2 border border-white/8 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Contact Info
              </h3>
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <Icon className="text-indigo-400" size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-slate-200 hover:text-indigo-400 transition-colors font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="bg-white/2 border border-white/8 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Find Me Online
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-slate-400 group-hover:text-indigo-400 transition-colors" size={18} />
                      <div>
                        <p className="text-sm font-medium text-slate-200 group-hover:text-slate-100 transition-colors">
                          {label}
                        </p>
                        <p className="text-xs text-slate-500">{handle}</p>
                      </div>
                    </div>
                    <HiOutlineExternalLink
                      className="text-slate-600 group-hover:text-indigo-400 transition-colors"
                      size={14}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-sm text-emerald-400 font-medium">
                Available for new opportunities and open to relocate
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/2 border border-white/8 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
            >
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Send a Message
              </h3>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-slate-400">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Anshita Soni"
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 focus:border-indigo-500/50 focus:bg-white/5 text-slate-100 placeholder-slate-600 text-sm outline-none transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-400">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 focus:border-indigo-500/50 focus:bg-white/5 text-slate-100 placeholder-slate-600 text-sm outline-none transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Anshita, I'd love to discuss a Frontend Developer role..."
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 focus:border-indigo-500/50 focus:bg-white/5 text-slate-100 placeholder-slate-600 text-sm outline-none transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5"
              >
                {status === 'sending' ? 'Opening mail client...' : status === 'sent' ? 'Message sent!' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="text-xs text-center text-emerald-400">
                  Thanks! Your mail client opened with a pre-filled message.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
