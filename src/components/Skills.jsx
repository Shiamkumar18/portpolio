import React from 'react';
import tailwindcss from '/tailwindcss.png';
import icon_react from '/icon_react.png';
import imghero from '/imghero.png';
import icon_java from '/icon_java.png';

const skillsData = [
  {
    id: 1,
    image: icon_react,
    title: 'React JS',
    description:
      'Experienced in building fast, responsive, and dynamic UIs with React and component-based architecture.',
  },
  {
    id: 2,
    image: tailwindcss,
    title: 'Tailwind CSS',
    description:
      'Proficient in crafting elegant, responsive, and modern designs using Tailwind’s utility-first approach.',
  },
  {
    id: 3, // ✅ duplicate ID fixed
    image: icon_java,
    title: 'Java',
    description:
      'Strong foundation in object-oriented programming and backend logic using Java.',
  },
];

const SkillBox = ({ image, title, description }) => (
  <article className='bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg text-center hover:bg-purple-800 hover:scale-105 transition-all duration-300'>
    <figure className='flex justify-center mb-4'>
      <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
    </figure>
    <header>
      <h3 className='text-white text-lg font-semibold mb-2'>{title}</h3>
    </header>
    <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
  </article>
);

export default function Skills() {
  return (
    <section id='skills' className='relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-16 overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>

      {/* Decorative Image */}
      <img
        src={imghero}
        alt='Left-picture'
        className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 sm:w-32 opacity-70'
      />

      {/* Text + Skill Cards */}
      <div
        data-aos='fade-up'
        data-aos-delay='300'
        className='relative z-20 text-center space-y-6 sm:space-y-10'
      >
        <header>
          <h1 className='text-3xl sm:text-4xl font-bold'>
            My <span className='text-purple-400'>Expertise</span> & Skills
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto'>
            Constantly learning and improving — here are a few technologies and
            tools I’m confident with.
          </p>
        </header>

        <section
          data-aos='fade-up'
          data-aos-delay='500'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8'
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id} // ✅ variable name corrected
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
      <img src={imghero} alt="Right Picture" 
       className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 ' />
    </section>
  );
}
