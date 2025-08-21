import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMailOpen } from "react-icons/hi";//<HiOutlineMailOpen />

const Footer = () => {

  const menuItems = [
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
  ]

  const [activeSection, setActiveSection] = useState();

  const ScrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }

  }
  return (

    <footer className='text-white flex flex-col justify-center items-center gap-5 py-8 mt-3 tracking-wide'>

      <div>
        <h2 className='font-bold text-2xl text-[#ff00ff]'>Let's Connect</h2>
      </div>

      <div className='flex gap-4'>

        <div className='flex justify-center items-center gap-4 group'>

          <p className='italic text-indigo-200 opacity-0 group-hover:opacity-100 transition-opcacity duration-800 text-sm'>connect on github</p>

          <a href="https://github.com/Anshitasoni816"
            target='_blank'
            className='hover:text-[#8245ec] hover:scale-110 font-medium transition duration-300'><FaGithub size={24} />
          </a>

        </div>

        <div className='flex justify-center items-center gap-4 group'>

          <a href="https://www.linkedin.com/in/anshitasoni/"
            target='_blank'
            className='hover:text-[#8245ec] hover:scale-110 font-medium transition duration-300'> <FaLinkedin size={24} />
          </a>
          <p className='italic text-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-800 text-sm'>connect on linkedin</p>
        </div>
         </div>
        <nav className='flex gap-5 justify-center items-center'>

          {

            menuItems.map((items, index) => (
              <button
                key={index}
                className='hover:text-[#ff00ff] hover:scale-110 font-medium transition duration-300'
                onClick={() => ScrollToSection(items.id)}>
                {items.label}</button>
            ))

          }

        </nav>


        <div>
          <p>© 2025 Anshita Soni. All rights reserved.</p>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <a href="mailto:sonianshit76@gmail.com">
            <HiOutlineMailOpen
              className='text-[#ff00ff]' />
          </a>
          <a href="mailto:sonianshit76@gmail.com">
            sonianshit76@gmail.com
          </a>
        </div>
        <p className='text-center text-lg italic bg-gradient-to-r from-[#ff00cc]  to-[#3333ff] bg-clip-text text-transparent tracking-wider'>" Always open to oppourtunities, collaborations and feedback."</p>

    </footer>

  )

}

export default Footer
