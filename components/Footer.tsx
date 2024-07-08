import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'

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
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Ayush Tiwari</p>
        <div className="flex items-center md:gap-3 gap-6 mt">
            {socialMedia.map((profile)=>(
              <a href={profile.link} target='_blank'>
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ">
                    <img src={profile.img} alt="" />
                </div>
                </a>
            ))}
        </div>
        </div>

    </footer>
  )
}

export default Footer
