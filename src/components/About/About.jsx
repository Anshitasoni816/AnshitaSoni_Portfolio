import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
// import Tilt from 'react-parallax-tilt';
import profolioImage from '../../assets/anshuImageLinkedin.png'

const About = () => {
  return (

    <section
      id='About'
      className='py-4 px-[6vw] md:px-[7vw] mt-12 md:mt-20 lg:mt-24'>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">



        <div className='w-full md:w-[60%] text-center md:text-left'>

          <h1 className='text-4xl md:text-5xl text-white leading-tight mb-5 font-extrabold tracking-wider'>

            Hello!, I am

          </h1>

          <h2 className='text-xl text-center md:text-3xl font-bold text-[#ff00ff] leading-tight italic tracking-wider'>

            <Typewriter
              words={[
                'Anshita Soni',
                'A Software Engineer',
              ]}
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={500}
              loop={0}
              cursor
              cursorStyle='_'
            />
          </h2>

          <p className='text-lg lg:text-xl font-medium leading-relaxed text-[#e0e0e0] mt-8 mb-10 '>

            {/* I’m a Software Engineer with a strong passion for crafting elegant and efficient solutions. I specialize in developing full-stack applications using the */}
            I'm an aspiring
            <span className='text-[#dda5fc] font-bold underline underline-offset-4 ms-2 me-2 tracking-wider'>
              <Typewriter
                words={[
                  ' Full-stack developer,'
                ]}
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={500}
                loop={1}

              />
            </span>
            applying my skills to design and build modern, user friendly web applications.
            My goal is to master every technology I learn while growing through real-world projects, continuous learning, and meaningful collaborations.
            Beyond full-stack development, I’m a curious explorer who loves diving into new and exciting technologies.
          </p>


          <p className='text-lg lg:text-xl font-medium leading-relaxed text-[#e0e0e0] mb-10 tracking-wider'>

            Currently, I’m pursuing my Master’s in Computer Applications (MCA) at
            <span className='text-[#dda5fc] font-bold underline underline-offset-4 ms-2 me-2'>
              <Typewriter
                words={[
                  'MITS,'
                ]}
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={500}
                loop={1}

              />
            </span>

            where I’m in my second year.
          </p>


          <a
            href=""
            target='_blank'
            rel='noopener noreferrer'
            className="inline-block text-white py-3 px-8 rounded-lg outline-2 outline-offset-2  mt-5 text-lg font-bold transition duration-500 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            View Resume
          </a>

        </div>


        <div className='w-full md:w-[40%] flex justify-center md:justify-end'>

          <img src={profolioImage} alt="Anshita Soni"
            className='rounded object-cover h-50 w-50
md:h-70 md:w-70 mb-10 drop-shadow-[0_15px_20px_rgba(104,55,189,0.7)] transition duration-500 transform hover:scale-105 outline-2 outline-white'/>

        </div>

      </div>

    </section>
  )
}

export default About
