import React from 'react'
import { FaLocationArrow, FaGithub, FaLinkedin, FaInstagram, FaGlobe, FaYoutube } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className="flex flex-col items-center">
            <h1 className='heading lg:max-w-[45vw] '>Excited to collaborate <span className='text-purple'>and</span> bring your ideas to life?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me, and let&apos;s explore how I can contribute to your projects and help achieve your goals.</p>
            <a href="mailto:ayusht5071@gmail.com" aria-label="Contact via email">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='left'
              />
            </a>
        </div>

        <div className="flex mt-5 md:flex-row flex-col justify-between items-center">
            <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
                <a href="https://github.com/Ayush5071" target='_blank'>
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ">
                        <FaGithub />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ayush-tiwari-84a823281/" target='_blank'>
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ">
                        <FaLinkedin />
                    </div>
                </a>
                <a href="https://www.instagram.com/ayushtiwari5071" target='_blank'>
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ">
                        <FaInstagram />
                    </div>
                </a>
                <a href="https://quantsprogrammer.vercel.app" target='_blank'>
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ">
                        <FaGlobe />
                    </div>
                </a>
                <a href="https://www.youtube.com/@AYUSHTIWARINITA" target='_blank'>
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ">
                        <FaYoutube />
                    </div>
                </a>
            </div>
            <p className='md:text-base text-xs md:font-normal font-light mt-5 md:mt-0 text-center'>
                Copyright © 2024 Ayush Tiwari x <a href="https://quantsprogrammer.vercel.app" target='_blank' className='underline'>QuantsProgrammer</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer
