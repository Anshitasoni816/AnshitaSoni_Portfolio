import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { SiMongodb } from "react-icons/si";//<SiMongodb />
import { SiExpress } from "react-icons/si";//<SiExpress />
import { FaReact } from "react-icons/fa";//<FaReact />
import { FaNodeJs } from "react-icons/fa";//<FaNodeJs />
import { GrMysql } from "react-icons/gr";//
import { GrHtml5 } from "react-icons/gr";//<GrHtml5 />
import { TbBrandCss3 } from "react-icons/tb";//<TbBrandCss3 />
import { FiGithub } from "react-icons/fi";//<FiGithub />
import { RiTailwindCssFill } from "react-icons/ri";//<RiTailwindCssFill />
import { AiOutlineJavaScript } from "react-icons/ai";//<AiOutlineJavaScript />
import { BsBootstrap } from "react-icons/bs";//<BsBootstrap />
import { IoIosArrowRoundUp } from "react-icons/io";




const Skills = () => {
  return (

    <section


      id="Skills"
      className='py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0e0c25] mt-24'>

      <div className='text-center'>

        <h2 className='text-3xl md:text-4xl bg-gradient-to-b from-[#ff00cc]  to-[#3333ff] bg-clip-text text-transparent font-bold tracking-wider'>SKILLS</h2>

        <h4 className='text-md md:text-xl font-bold text-[#ff00ff] leading-tight italic mt-5 tracking-wider'>

          <Typewriter
            words={[
              'Programming Languages 💻',
              'Databases 🗄️',
              'Frameworks 🧱',
              'Tools 🛠️'
            ]}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={500}
            loop={0}
            cursor
            cursorStyle='|'
          />
        </h4>

        <p className='text-lg leading-relaxed text-[#e0e0e0] mt-6 tracking-wide'>A showcase of my technical skills and knowledge shaped by projects, challenges, and continuous learning.</p>


      </div>

      <div>

        <div className='mt-10 md:py-14 py-10 border-2 rounded-2xl border-gray-400 shadow-[inset_0_0_30px_#8732b5] shadow-[#c007b0] px-10 '>

          <div className='flex flex-wrap
        justify-center items-center md:gap-10 gap-8 text-white'>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                HTML5
              </p>
              <GrHtml5 size={70} className="shadow-[0_0_10px_#8732b5]  shadow-amber-400 p-2  text-amber-600 hover:shadow-[inset_0_0_15px_#8732b5] transition-all duration-1000 transform hover:rotate-y-360 rounded-xl  border border-amber-600 filter contrast-100" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                CSS3
              </p>
              <TbBrandCss3 size={70} className="shadow-[0_0_10px_#8732b5] shadow-blue-500 p-2  text-blue-600 hover:shadow-[inset_0_0_15px_#8732b5] transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-blue-600" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                JavaScript
              </p>
              <AiOutlineJavaScript size={70} className="shadow-[0_0_10px_#8732b5] shadow-yellow-300 p-2  text-yellow-400 hover:shadow-[inset_0_0_15px_#8732b5]transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-yellow-400" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                React
              </p>
              <FaReact size={70} className="shadow-[0_0_10px_#8732b5] shadow-cyan-400 p-2 text-cyan-600 hover:shadow-[inset_0_0_15px_#8732b5] transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-cyan-600" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                Node.js
              </p>
              <FaNodeJs size={70} className="shadow-[0_0_10px_#8732b5] shadow-green-400 p-2  text-green-600 hover:shadow-[inset_0_0_15px_#8732b5]  transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-green-600" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                MySQL
              </p>
              <GrMysql size={70} className="shadow-[inset_0_0_10px_#8732b5] shadow-cyan-400 p-2  text-cyan-300  hover:shadow-[inset_0_0_15px_#8732b5] transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-cyan-500" />
            </div>

            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                Tailwind CSS
              </p>
              <RiTailwindCssFill size={70} className="shadow-[inset_0_0_10px_#8732b5] shadow-sky-300 text-sky-500 p-2 hover:shadow-[0_0_15px_#8732b5] transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-sky-500" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                MongoDB
              </p>
              <SiMongodb size={70} className="shadow-[inset_0_0_10px_#8732b5]  shadow-lime-700 p-2  text-lime-600  hover:shadow-lg transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-lime-600" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                Bootstrap
              </p>
              <BsBootstrap size={70} className="shadow-[inset_0_0_10px_#8732b5]  shadow-purple-400 p-2  text-purple-500  hover:shadow-lg transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-purple-500" />
            </div>


            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                GitHub
              </p>
              <FiGithub size={70} className="shadow-[insest_0_0_10px_#8732b5]  shadow-gray-600 p-2  text-neutral-300  hover:shadow-lg transition-all duration-1000 transform hover:rotate-y-360 rounded-xl border border-neutral-300" />
            </div>

            <div className='group inline-block text-center'>
              <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                Express.js
              </p>
              <SiExpress size={70} className="shadow-[inset_0_0_10px_#8732b5] shadow-purple-700 p-2  text-purple-600  hover:shadow-lg transition duration-1000 transform hover:rotate-y-360 rounded-xl border border-purple-600" />
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Skills
