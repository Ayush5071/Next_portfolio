import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Image from 'next/image'

const Achievement = () => {
  return (
<div id="achievements" className="py-7 mt-2">
      <h1 className="heading">
        Hackathon and Events{" "}
        <span className="text-purple">Acheivement</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-6 md:grid-cols-4 grids-cols-1 gap-10">
        {workExperience.map(({id, title, desc, link}) => (
            <Button  
                duration={Math.floor(Math.random() * 10000) + 10000} 
                key={id} 
                borderRadius='1.75rem' 
                className='flex-1 text-white border-neutral-200 dark:border-slate-800 px-2 py-1'
                onClick={() => window.open(link, '_blank')}
            >
                <div className="lg:ms-5">
                    <h1 className="text-center text-xl md:text-2xl font-bold">{title}</h1>
                    <p className="text-center text-white-100 mt-3 font-semibold">{desc}</p>
                </div>
            </Button>
        ))}
      </div>
</div>
  )
}

export default Achievement
