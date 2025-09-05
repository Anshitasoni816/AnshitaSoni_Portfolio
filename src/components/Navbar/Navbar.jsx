import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  
  const [isNavOpen, setIsNavOpen] = useState(false); //isNavOpen: For mobile nav toggle (open/close).



  //function for smooth scrolling 
  const scrollToSection = (sectionId) => {
    setIsNavOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "Certificates", label: "Certificates" },
  ]

  return (
    <>

      <nav className='fixed top-0 w-full z-50 px-[6vw] md:px-[7vw] 
      '> 

        <div className='text-white py-5 flex items-center justify-between'>

          <div className='text-lg font-semibold cursor-pointer'>

            <span className='text-[#8345ec]'>&lt;
            </span>

            <span className='text-white'>Anshita Soni</span>

            <span className='text-[#8345ec]'>&gt;
            </span>

          </div>

          {/* Desktop menu */}
          <ul className='hidden md:flex space-x-8 bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent'>

            {

              menuItems.map((items) => (

                <li
                  key={items.id}
                  className='cursor-pointer hover:text-white font-medium transition duration-300 transform hover:scale-105'
                >

                  <button
                  onClick={() => scrollToSection(items.id)}
                  >
                    {items.label}
                  </button>

                </li>

              ))

            }

          </ul>


          {/* Social Media Icons */}

          <div className='hidden md:flex space-x-4'>

            <a href="https://github.com/Anshitasoni816"
              target="_blank" //Opening a door into another room.
              rel="noopener noreferrer"//noopener : Locking the door behind you so the new room can’t mess with your original room., noreferrer: Not leaving a “visiting card” behind that says where you came from.
              className='text-gray-300 hover:text-[#ff00ff] hover:font-medium  transition duration-300 transform hover:scale-110'>
              <FaGithub size={24} />
            </a>

            <a href="https://www.linkedin.com/in/anshitasoni/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-gray-300 hover:text-[#ff00ff] hover:font-medium  transition duration-300 transform hover:scale-110'>
              <FaLinkedin size={24} />
            </a>

          </div>

          {/* Mobile Menu Icon */}

          <div className="md:hidden">
            {isNavOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsNavOpen(true)}
              />
            )}
          </div>

        </div>

        {/* Mobile Menu Items */}

        {
          isNavOpen && (

            <div className="absolute top-16  left-1/2 transform -translate-x-1/2 w-4/5 z-50 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg md:hidden py-2">

              <ul className='flex flex-col items-center space-y-4 text-white'>

                {

                  menuItems.map((items) => (

                    <li key={items.id}
                      className='cursor-pointer hover:text-[#8245ec] hover:font-medium  transition duration-300 transform hover:scale-105'>

                      <button
                       onClick={() => scrollToSection(items.id)}> {items.label} </button>

                    </li>

                  ))

                }

                <div className="flex space-x-5">

                  <a href="https://github.com/Anshitasoni816"
                    target="_blank"
                    rel="noopener noreferrer" //noopener → Security (protects your page from being hijacked)....., noreferrer → Privacy (hides your site info from the destination).
                    className='text-white hover:text-[#ff00ff] transition duration-300 transform hover:scale-110'>
                    <FaGithub size={24} />
                  </a>

                  <a href="https://www.linkedin.com/in/anshitasoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white hover:text-[#ff00ff] transition duration-300 transform hover:scale-110'>
                    <FaLinkedin size={24} />
                  </a>

                </div>

              </ul>

            </div>

          )
        }
      </nav>
    </>
  )
}

export default Navbar
