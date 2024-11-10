import React from 'react'
import hero_section  from "../assests/hero/Hero_section.png"
import aero  from "../assests/hero/aero.png"
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='bg-black pt-6 rounded-b-[999px]'>
        <div className='flex justify-center'>
        <div className='px-5 py-1.5  flex gap-4 w-fit bg-white text-black rounded-md font-medium fixed z-10'>
            <div className='mr-11 px-3 py-0.5 bg-slate-300 rounded'></div>
            <div className='flex '
            onClick={(()=>{
              navigate('dashboard')
            })}
            ><p>Emoji's</p> <img src={aero} alt="->" /></div>
            <div>About</div>
        </div>
        </div>
        <div className='pt-52'>
            <img src={hero_section} alt="Loading" />
        </div>
      </div>
    </div>
  )
}

export default Hero
