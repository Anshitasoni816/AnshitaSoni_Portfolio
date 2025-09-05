import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Projects from './components/Work/Projects'
import Certificates from './components/Certificates/Certificates'



function App() {


  return (
    
    //bg-[url(https://cdn.wallpapersafari.com/52/54/xm6fAD.jpg)]
<div className=' bg-[#050414]'>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#c4a7e7_1px,transparent_1px),linear-gradient(to_bottom,#a7c7e7_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,110,0.7)_0%,transparent_45%)] blur-4xl"></div>
      

            <div className='relative pt-10'>

                <Navbar />
                <About />
                <Skills />
                <Projects />
                <Certificates /> 
                <Footer />


            </div>

         </div>
  
  )
}

export default App
