import React from 'react'
import Bspid from '/Bspid.png'
import facespid from '/facespid.png'
import slogo from '/slogo.png'

export default function About() {
  return (
    <section
      id='about'
      className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 '>

      <div
        className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center '>
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="relative flex flex-wrap justify-center items-center gap-4"
        >
          {/* Gradient background shape */}
          <div
            className="absolute right-6 sm:right-10 top-4 md:top-10 h-[220px] sm:h-[320px] w-[320px] sm:w-[440px] lg:h-[340px] lg:w-[520px]
    bg-gradient-to-tr from-[#FF0000]
    opacity-90 blur-2xl rotate-12 rounded-full z-0 shadow-[0_0_60px_rgba(109,40,151,0.4)]"
          ></div>

          {/* Top-left floating image */}
          <img
            src={slogo}
            alt="about picture 1"
            className="absolute -top-6 left-6 sm:left-12 transform -rotate-3 z-20 w-24 h-24 sm:w-32 sm:h-32
    rounded-2xl border object-cover border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
          />

          {/* Main central image */}
          <img
            src={Bspid}
            alt="about picture 2"
            className="relative z-10 w-40 h-48 sm:w-48 sm:h-56 md:w-72 md:h-96
    rounded-3xl object-cover shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
          />

          {/* Bottom-right image */}
          <img
            src={facespid}
            alt="about picture 3"
            className="absolute bottom-0 right-6 sm:right-12 transform translate-y-10 z-10
    w-20 h-20 sm:w-28 sm:h-28 rounded-2xl object-cover border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </figure>


        <article
          data-aos='fade-left'
          data-aos-delay='500'
          className=' text-center lg:text-left relative'  >
          <div
            className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#FF0000] rounded-full blur-3xl opacity-50 -top-5 left-10 ' ></div>
          <header>
            <h1
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6 text-opacity-100'>
              About Me
            </h1>
          </header>
          <p className='text-base sm:text-lg md:text-xl  text-gray-300 mb-6 sm:mb-8 landing-relaxed '>
            I’m a passionate Full Stack Developer specializing in the MERN stack, focused on building scalable, responsive, and user-friendly web applications. Alongside development, I actively practice Data Structures and Algorithms using Java to strengthen my problem-solving and programming skills.
          </p>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 landing-relaxed'>
            I also have experience in video editing and visual content creation, which allows me to combine technical expertise with creativity. I’m always eager to learn new technologies, solve challenging problems, and create meaningful digital experiences.
          </p>
          {/* <footer>
            <button className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
               hover:bg-[#FF0000] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm-text-lg  '>
              Learn More
            </button>
          </footer> */}
        </article>
      </div>
    </section>
  )
}
