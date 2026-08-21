import React from 'react'
import GTA from '/GTA.png'
import Thirtysixstudio from '/Thirtysixstudio.png'
import ochi from '/ochi.png'

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article  className='relative max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg group'>
      {/* Background glow */}
      <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#800000]  rounded-full blur-3xl opacity-50 -top-5 left-10'></div>

      <div className='relative z-10'>
        <figure className='relative'>
          <img
            src={image}
            alt={title}
            className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute inset-0 flex items-center justify-center bg-[#800000] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          >
            <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#800000]'>
              Live Preview
            </button>
          </a>
        </figure>

        <div className='px-6 py-4'>
          <header>
            <h3 className='text-white font-bold text-xl mb-2'>{title}</h3>
          </header>
          <p className='text-gray-200 text-base'>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const projects = [
    {
      image: GTA,
      title: 'A Frontend Project 1',
      description: 'A GTA Web page with React and TailwindCSS.',
      link: 'https://gtawebsitee.netlify.app'
    },
    {
      image: ochi,
      title: 'A Frontend Project 2',
      description: 'Modern UI design focused on animation and interactivity.',
      link: 'https://ochiclone234.netlify.app'
    },
    {
      image: Thirtysixstudio,
      title: 'A Frontend Project 3',
      description: 'Clean and minimal portfolio concept for a design studio.',
      link: ''
    }
  ]

  return (
    <main className='p-4' id='projects'>
      <section data-aos='fade-up' data-aos-delay='300'>
        <header className='text-center'>
          <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
            My <span className='text-[#5E040C]'>Projects</span>
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            A collection of some of my favorite works and design experiments.
          </p>
        </header>
      </section>

      <section
        data-aos='fade-up'
        data-aos-delay='500'
        className='flex flex-wrap gap-6 justify-center mt-8'
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  )
}
