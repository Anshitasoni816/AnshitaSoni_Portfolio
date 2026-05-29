import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiOutlineExternalLink } from 'react-icons/hi'
import NptelCertificate from '../../assets/NPTEL_Certificate.jpg'
import ReactCertificate from '../../assets/certificate_page-0001.jpg'
import JSCertificate from '../../assets/JavaScriptCertificate.webp'
import NptelBigDataComputing from '../../assets/NPTEL_BIGDATA_COMPUTING_CERTIFICATE_page-0001.jpg'

const CERTIFICATES = [
  {
    image: ReactCertificate,
    title: 'React Developer Certification',
    issuer: 'Namaste React',
    detail: 'Frontend Specialization',
    credentials: 'https://1drv.ms/b/c/4a75efa212f547d5/IQDVJwqCbaMLQqYDlgXMXe5dARCeK6aNKY6QQ_Ixx8QNtBQ?e=7oQhdw',
  },
  {
    image: JSCertificate,
    title: 'JavaScript Certification',
    issuer: 'HackerRank',
    detail: 'Core Language Proficiency',
    credentials: 'https://1drv.ms/b/c/4a75efa212f547d5/IQCGEqgbeUcZQruP0cL-f2GeAQioDjkaqlatGfbX7oXPkG4?e=aNmiaR',
  },
    {
    image: NptelCertificate,
    title: 'Foundation of Cloud IoT Edge ML',
    issuer: 'NPTEL',
    detail: 'Score: 81%',
    credentials: 'https://1drv.ms/b/c/4a75efa212f547d5/ESgbaAQI-2lCtgCrjyipLdsB5qlKEB_ldLhafKCPb3hqxQ?e=eT79ED',
  },
  {
    image: NptelBigDataComputing,
    title: 'Big Data Computing',
    issuer: 'NPTEL',
    detail: 'Data Engineering Track',
    credentials: 'https://1drv.ms/i/c/4a75efa212f547d5/IQBknW_mvhNoSZcK6m4zcuwAATuMZafFYwqdQUfZX8o4Tr8?e=vBcnkX',
  },

]

export default function Certificates() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? CERTIFICATES.length - 1 : c - 1))
  }
  const next = () => {
    setDirection(1)
    setCurrent((c) => (c === CERTIFICATES.length - 1 ? 0 : c + 1))
  }

  const cert = CERTIFICATES[current]

  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Verified credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Continuous learning across cloud, frontend, and data engineering — backed by verified credentials.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="bg-white/2 border border-white/8 rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5">
            {/* Prev button */}
            <button
              onClick={prev}
              className="w-10 h-10 shrink-0 rounded-full border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all duration-200"
              aria-label="Previous certificate"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Image area */}
            <div className="min-w-0 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <a
                    href={cert.credentials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    aria-label={`View credential: ${cert.title}`}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-white/8 bg-slate-950/70 group-hover:border-indigo-500/30 transition-colors duration-300">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full max-h-[58vh] sm:max-h-[66vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-white text-xs font-semibold">
                          <HiOutlineExternalLink size={13} />
                          View Credential
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="w-10 h-10 shrink-0 rounded-full border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all duration-200"
              aria-label="Next certificate"
            >
              <HiChevronRight size={20} />
            </button>
          </div>

          {/* Certificate info */}
          <div className="mt-6 text-center">
            <h3 className="text-base font-semibold text-slate-100">{cert.title}</h3>
            <p className="text-sm text-slate-500 mt-1">
              {cert.issuer} · <span className="text-indigo-400">{cert.detail}</span>
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {CERTIFICATES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                aria-label={`Go to certificate ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  current === i
                    ? 'w-6 h-2 bg-indigo-500'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-xs text-slate-600 mt-3">
            {current + 1} / {CERTIFICATES.length}
          </p>
        </div>
      </div>
    </section>
  )
}
