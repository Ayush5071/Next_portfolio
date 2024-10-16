import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Image from 'next/image'

const Experience = () => {
  return (
<div id="acheivement" className="py-7">
      <h1 className="heading">
        Hackathon and Events{" "}
        <span className="text-purple">Acheivement</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grids-cols-1 gap-10">
        {workExperience.map(({thumbnail,id,title,desc}) => (
            <Button duration={Math.floor(Math.random() * 10000) + 10000} key={id} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <Image
              width="100"
              height="100" src={thumbnail} alt={thumbnail} className='lg:w-32 md:w-20 w-16' />
                </div>
                <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">{title}</h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">{desc}</p>
                </div>
            </Button>
        ))}
      </div>
</div>
  )
}

export default Experience
