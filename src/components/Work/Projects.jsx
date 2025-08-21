import React from 'react'
const Work = () => {

  // projects data
  const Projects = [

    {
      id: 1,
      title: "News Project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel fugit quidem quod repudiandae tempore",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCYEVIaqIz-_VsZmeNtrAgQ7yfns4qLbwxw&s",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQH41aVG76krM8axGOxgeE0cd6L9TXvCwoAw&s",
      webapp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKzgKu_S78alxgArbJ_z_yaxZ-wae0xWZUg&s",
    },

    {
      id: 2,
      title: "News Project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel fugit quidem quod repudiandae tempore",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0L4BZXZS6GeIdKyuMqMhhWYBkqRN_oo4Meg&s",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MiBflN17NfMjCKamD-u31XZFSWnelPtYKQ&s",
      webapp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZS2PdAUh0e8f9o0vcX6vQrQuP5YSMt0nMw&s",
    },

    {
      id: 3,
      title: "News Project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel fugit quidem quod repudiandae tempore",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0L4BZXZS6GeIdKyuMqMhhWYBkqRN_oo4Meg&s",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwigO2yqCNDP0ib29mJFk5GWutNVNKTPlXoQ&s",
      webapp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbN5hosYaRNx_mf7pI_HY69br03G-hG1wnQ&s",
    },

    {
      id: 4,
      title: "News Project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel fugit quidem quod repudiandae tempore",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCYEVIaqIz-_VsZmeNtrAgQ7yfns4qLbwxw&s",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7LkgE1ln5gSNCrQ6Fb6eQsOTzxkHKA7Sg&s",
      webapp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMdw0bfJ3IkUBRMM7zDU5lpkJRbKz-v-tUA&s",
    },

  ]

  return (

    <section
      id="Projects"
      className='py-24 px-[10vw] md:px-[7vw] lg:px-[20vw] bg-[#0f0b4a] pb-24'>

      {/* section's title and paragraph */}

      <div className='text-center mb-8'>

        <h2 className='font-bold text-3xl md:text-4xl bg-gradient-to-b from-[#ff00cc]  to-[#3333ff] bg-clip-text text-transparent tracking-wider'>PROJECTS</h2>

        <p className='text-lg leading-relaxed text-[#c6b9b9]  mt-8 mb-10 tracking-wide'>
          My projects are currently under development. These cards are temporary placeholders and will be updated soon with real project showcases
        </p>

{/* Showcasing the projects I’ve built, reflecting my skills and technical experience */}

      </div>

      {/* Project grid Part*/}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 group'>

        {

          Projects.map((project) => (

            <div key={project.id}
              className='border  border-white 400 rounded-xl bg-[#292288] cursor-pointer overflow-hidden shadow-2xl hover:shadow-blue-400/60 hover:-translate-y-3 transition-transform duration-300'>

              <div className='p-4'>
                <img src={project.image} alt={project.title}
                  className='object-cover rounded-xl w-full' />
              </div>

              <div className='p-6'>

                <h3 className='text-white font-bold text-xl mb-2'>{project.title}</h3>
                <p className='text-[#c6b9b9] hover:text-white '>{project.description}</p>

              </div>

              <div className='pl-6'>

                <h4 className='font-bold text-sm text-white mb-3'>TECHNOLOGIES USED</h4>
                <div>

                  {

                    project.tags.map((tag, index) => (

                      <span
                        key={index}
                        className='inline-block text-[#e5d9eb] font-semibold bg-purple-950 rounded-lg px-3 py-1 mr-2.5 mb-2 text-xs hover:text-white'>
                        {tag}
                      </span>

                    ))

                  }

                </div>

              </div>

              <div className='flex flex-col md:flex-row gap-4 mt-2 px-6 pb-3'>

                <a href={project.github} target='_blank' rel='noopener noreferrer'
                  className='text-center bg-blue-500 text-[#e5d9eb]  hover:text-white rounded px-2 py-1 lg:px-6 lg:py-3  lg:w-1/2 font-bold opacity-0 group-hover:opacity-100 trasition-opacity duration-300'>View Code</a>

                <a href={project.webapp} target='_blank' rel='noopener noreferrer'
                  className='text-center bg-blue-400 text-[#e5d9eb] hover:text-white rounded px-2 py-1 lg:px-6 lg:py-2 lg:w-1/2 font-bold opacity-0 group-hover:opacity-100 trasition-opacity duration-300'>Live Preview</a>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  )
}

export default Work
