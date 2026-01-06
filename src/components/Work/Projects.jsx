import React from "react";
import portfolioProjectCoverImage from "../../assets/portfolioProjectCoverImage.jpg";
import foodWebsiteCoverImage from "../../assets/FoodWebsiteImage.jpg";
import EMSCoverImage from "../../assets/EMSCoverImage.jpg";
const Work = () => {
  // projects data
  const Projects = [
    {
      id: 1,
      title: "Food Ecommerce Website",
      description:
        "A food ordering e-commerce web application where admins manage food items and users can register, log in, add items to the cart, and order food seamlessly.",
      image: foodWebsiteCoverImage,
      tags: [
        "React JS",
        "Node.js",
        "JavaScript",
        "TailwindCss",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/Anshitasoni816/Food-hood-website",
      webapp: "anshita-soni-portfolio.netlify.app/",
    },

    {
      id: 2,
      title: "Employee Managemnt System",
      description:
        "Developed a full-stack Employee Management System (EMS) using the MERN stack to manage employees, departments, roles, and authentication. Implemented role-based access control, soft delete, secure login, and email notifications using Nodemailer.",
      image: EMSCoverImage,
      tags: [
        "React JS",
        "Node.js",
        "JavaScript",
        "TailwindCss",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/Anshitasoni816/AnshitaSoni_Portfolio",
      webapp: "anshita-soni-portfolio.netlify.app/",
    },

    {
      id: 3,
      title: "Portfolio Project",
      description:
        "Personal portfolio website built with React, Vite, and Tailwind CSS to highlight my projects, technical skills, and achievements.",
      image: portfolioProjectCoverImage,
      tags: ["React.js", "Tailwind CSS"],
      github: "https://github.com/Anshitasoni816/AnshitaSoni_Portfolio",
      webapp: "anshita-soni-portfolio.netlify.app/",
    },

    {
      id: 4,
      title: "News Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel fugit quidem quod repudiandae tempore",
      image: portfolioProjectCoverImage,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Anshitasoni816/AnshitaSoni_Portfolio",
      webapp: "anshita-soni-portfolio.netlify.app/",
    },
  ];

  return (
    <section
      id="Projects"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[20vw] bg-[#0f0b4a] pb-24"
    >
      {/* section's title and paragraph */}

      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl md:text-4xl bg-gradient-to-b from-[#ff00cc]  to-[#3333ff] bg-clip-text text-transparent tracking-wider">
          PROJECTS
        </h2>

        <p className="text-lg leading-relaxed text-white  mt-8 mb-10 tracking-wide">
       A curated collection of my projects showcasing skills in frontend and full-stack web development using modern technologies.
        </p>
      </div>

      {/* Project grid Part*/}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Projects.map((project) => (
          <div
            key={project.id}
            className="border  border-white 400 rounded-xl bg-[#292288] cursor-pointer overflow-hidden shadow-2xl hover:shadow-blue-400/60 hover:-translate-y-3 transition-transform duration-300 flex flex-col
    h-[600px]"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover rounded-xl w-full h-48"
              />
            </div>

            <div className="p-6">
              <h3 className="text-purple-300 font-bold text-2xl mb-2 ">
                {project.title}
              </h3>
              <p className="text-white line-clamp-3">{project.description}</p>
            </div>

            <div className="pl-6">
              <h4 className="font-bold text-sm text-purple-300 mb-3">
                TECHNOLOGIES USED
              </h4>

              <div className="max-h-24 overflow-y-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block text-white font-semibold bg-purple-950 rounded-lg px-3 py-1 mr-2.5 mb-2 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

           <div className="mt-auto flex flex-col md:flex-row gap-4 px-6 pb-6">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-blue-500 text-[#e5d9eb]  hover:text-white rounded px-2 py-1 lg:px-6 lg:py-3  lg:w-1/2 font-bold transition duration-500 transform hover:scale-110"
              >
                View Code
              </a>

              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-blue-400 text-[#e5d9eb] hover:text-white rounded px-2 py-1 lg:px-6 lg:py-2 lg:w-1/2 font-bold transition duration-500 transform hover:scale-110"
              >
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
