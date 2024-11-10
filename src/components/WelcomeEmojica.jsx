import React, { useEffect, useState } from 'react'
import mike from "../assests/welcomeEmojica/mike.png"
import emoji from "../assests/welcomeEmojica/Emoji_carausel.png"
import emojione from "../assests/welcomeEmojica/Emoji_carausel(1).png"
import emojitwo from "../assests/welcomeEmojica/Emoji_carausel(2).png"
import emojithree from "../assests/welcomeEmojica/Emoji_carausel(3).png"
import spring from "../assests/welcomeEmojica/Cone_01 2.png"
import cone from "../assests/welcomeEmojica/Cone_01 2(1).png"
import drag from "../assests/welcomeEmojica/Group 17.png"
import emojica from "../assests/welcomeEmojica/Emojica.png"
const WelcomeEmojica = () => {
  const [hoverone , setHoverone] = useState(false)
  const [hovertwo , setHovertwo] = useState(false)
  const [hoverthree , setHoverthree] = useState(false)
  const [hoverfour , setHoverfour] = useState(false)
  const [blur , setBlur] = useState(false)
  useEffect(()=>{
   
  },[hoverone,hovertwo])

  return (
    <div>
      <div className='flex items-center justify-center'>
        <h1 className='font-century-old text-5xl '>Welcome To <span className='text-gradient'>Emojica</span></h1>
        <img src={mike} alt="" />
      </div>
      <div className='flex justify-between w-[80%] mx-auto gap-10 pb-20'>
        <div className='w-[30%] flex justify-center py-20 rounded-2xl box-bg-grad'>
           <div>
           <img src={emoji} alt="" className='transition-transform duration-500 ease-in-out transform hover:scale-110' 
           onMouseEnter={()=>{
              setHoverone(true)
              setBlur(true)
              setTimeout(() => {
                setBlur(false);
              }, 500);
           }}
           onMouseLeave={()=>{
            setHoverone(false)
           }}
           />
           <p className={hoverone?`transition-all duration-2000 ease-in-out transform ${blur?"blur-sm":"blur-0"} scale-205 opacity-70`:""}>Grining Face</p> 
           </div>       
        </div>
        <div className='w-[30%] flex justify-center  py-20 rounded-2xl box-bg-grad -translate-y-8'>
            <div className=''>
            <img src={emojione} alt="" className='mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110'
            onMouseEnter={()=>{
              setHovertwo(true)
              setBlur(true)
              setTimeout(() => {
                setBlur(false);
              }, 500);
           }}
           onMouseLeave={()=>{
            setHovertwo(false)
           }}
            />
            <p className={hovertwo?`transition-all duration-2000 ease-in-out transform ${blur?"blur-sm":"blur-0"} scale-205 opacity-70`:""}>Money-Mouth Face</p> 
            </div>       
        </div>
        <div className='w-[30%] flex justify-center py-20 rounded-2xl box-bg-grad'>
           <div>
           <img src={emojitwo} alt="" className='transition-transform duration-500 ease-in-out transform hover:scale-110'
           onMouseEnter={()=>{
            setHoverthree(true)
            setBlur(true)
              setTimeout(() => {
                setBlur(false);
              }, 500);
         }}
         onMouseLeave={()=>{
          setHoverthree(false)
         }}
           />
           <p className={hoverthree?`transition-all duration-2000 ease-in-out transform ${blur?"blur-sm":"blur-0"} scale-205 opacity-70`:""}>Disguised Face</p>  
           </div>      
        </div>
        <div className='w-[30%] flex justify-center py-20 rounded-2xl box-bg-grad -translate-y-8'>
           <div>
           <img src={emojithree} alt="" className='transition-transform duration-500 ease-in-out transform hover:scale-110'
           onMouseEnter={()=>{
            setHoverfour(true)
            setBlur(true)
              setTimeout(() => {
                setBlur(false);
              }, 500);
         }}
         onMouseLeave={()=>{
          setHoverfour(false)
         }}
           />
           <p className={hoverfour?`transition-all duration-2000 ease-in-out transform ${blur?"blur-sm":"blur-0"} scale-205 opacity-70`:""}>Caring Face</p>  
           </div>      
        </div>
      </div>
      <div>
      <div className='flex justify-between items-center'>
        <div className='relative top-20'>
            <img src={spring} alt="" />
        </div>
        <div>
            <img src={drag} alt="" />
        </div>
        <div>
            <img src={cone} alt="" />
        </div>
      </div>
      <div className='bg-black flex justify-center'>
        <img src={emojica} alt="" className='pt-12'/>
      </div>
      </div>
    </div>
  )
}

export default WelcomeEmojica
