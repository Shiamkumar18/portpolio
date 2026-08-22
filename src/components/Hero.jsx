import React from 'react';
import Navbar from './Navbar';
import github from '/github.png'
import linkedin from '/linkedin.png'
import leetcode from '/leetcode.png'
import instagram from '/instagram.png'
import shivamkumar from '/shivam_kumar_resume_.pdf'
import spid from '/spid.png';
import { motion } from 'framer-motion';


export default function Hero() {
    return (
        <div className='relative overflow-hidden min-h-[500px] sm:min-h-[600px] flex flex-col item-center '>
            <div> <div className='md:h-[550px] h-[500px] w-[150px] md:w-[450px] bg-gradient-to-r absolute from-[#FF0000]
             transform  z-0  top-28 rounded-3xl ' 
            ></div>
                <div
                    className='md:h-[550px] h-[500px] w-[150px] md:w-[450px] bg-gradient-to-r absolute from-[#FF0000]
                              transform scale-x-[-1] z-0 right-2 top-28 rounded-3xl'
                ></div>
            </div>
            <Navbar />
            <main id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 
            md:px-52 pb-4 md:pb-24 pt-24 mt-14 md:mt-0 z-10 '>
                <section className='flex-1 mr-28 md:text-left mt-10 md:mt-10 relative '
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <div className='absolute -z-10 w-60 h-60 bg-[#800000] rounded-full blur-3xl opacity-55 -top-5 -left-12  '></div>
                    <header>
                        {/* <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 '>
                            Shivam kumar
                        </h1> */}
                        <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#05a72b] mb-2 ' >
                            Full Stcak Devloper
                        </h2>
                    </header>
                    <p className='text-base sm:text-lg text-gray-200 mb-6'>
                         Passionate about transforming ideas into reliable, scalable, and impactful digital solutions.
                    </p>

                    <div className='flex items-center space-x-4 mb-6 '>
                        <a href="https://github.com/Shiamkumar18">
                            <img src={github}  alt="github"  className='w-11 h-11 hover:scale-110 transition-transform duration-400' />
                        </a>
                        <a href="https://www.linkedin.com/in/shivam-kumar-19a000320/ ">
                            <img src={linkedin} alt="Linkedin" className='w-11 h-11 hover:scale-110 transition-transform duration-400' />
                        </a>
                        <a href="https://leetcode.com/u/Shivam_kumar_18/">
                            <img src={leetcode} alt="leetcode" className='w-10 h-10 hover:scale-110 transition-transform duration-300' />
                        </a>
                        {/* <a href="">
                            <img src={instagram} alt="facebook" className='w-11 h-11' />
                        </a> */}
                    </div>
                    <a href={shivamkumar} download>
                        <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#F4D331]
                                 hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg '>
                            Download CV
                        </button>
                    </a>
                </section>
                <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-0'>
                    <motion.img
                        src={spid}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 3 }}
                        transition={{ duration: 3 }}
                        className='float-animation h-[100%] sm:h-[400px] md:h-[485px] w-[100%] sm:w-[480px] object-cover bg-transparent rounded-lg'
                    />

                </figure>
            </main>
        </div>
    )
}
