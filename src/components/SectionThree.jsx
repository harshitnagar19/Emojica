import React, { useState, useEffect } from 'react'
import one from "../assests/sectionThree/imageone.png"
import popOne from "../assests/sectionThree/pop1.png"
import faceOne from "../assests/sectionThree/face1.png"

import two from "../assests/sectionThree/imagetwo.png" //three
import popTwo from "../assests/sectionThree/pop2.png"
import faceTwo from "../assests/sectionThree/face2.png"

import three from "../assests/sectionThree/imagethree.png"
import popThree from "../assests/sectionThree/popthree.png"
import faceThree from "../assests/sectionThree/facethree.png"

import four from "../assests/sectionThree/imagefour.png"

import google from "../assests/sectionThree/google.png"
import twitter from "../assests/sectionThree/twitter.png"
import facebook from "../assests/sectionThree/facebook.png"
import apple from "../assests/sectionThree/apple.png"

const SectionThree = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % 4); // Cycle through 0, 1, and 2,3
    }, 2000);
    const intervaltwo = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3); // Cycle through 0, 1, and 2
    }, 2000);

    return () => {
      clearInterval(interval)
      clearInterval(intervaltwo)
    
    }; // Clear interval on component unmount
  }, []);
  return (
    <div className='bg-black'>
      <div className='p-28 flex w-full '>
        <div className='text-white  w-[50%] self-center'>
          <h2 className='text-4xl pb-10 font-century-old'>Pick Your Emoji Look & Explore Styles from Different Platforms</h2>
          <p className='leading-9 text-xl font-light w-[70%]'>Personalize your emoji experience by selecting styles from different platforms like Apple, Google, Twitter, and more. Choose the design that suits your taste or matches your device for a consistent look.</p>
        </div>
        <div className='w-[50%] px-20'>
          <div className='flex justify-between'>
            <div className='relative px-20 py-24 grad rounded-2xl rotate-[-12deg]'>
            <img
                src={four}
                alt="Image 1"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 2 */}
              <img
                src={popTwo}
                alt="Image 2"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 1 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 3 */}
              <img
                src={faceOne}
                alt="Image 3"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 2 ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            </div>
            <div className='relative px-20 py-24 grad rounded-2xl rotate-12 -translate-y-6 translate-x-6'>
            <img
                src={one}
                alt="Image 1"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 2 */}
              <img
                src={popOne}
                alt="Image 2"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 1 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 3 */}
              <img
                src={faceOne}
                alt="Image 3"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 2 ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              </div>
          </div>
          <div className='flex justify-center pt-5 '>
            {currentMedia==0?<img src={google} alt="" />:""}
            {currentMedia==1?<img src={apple} alt="" />:""}
            {currentMedia==2?<img src={facebook} alt="" />:""}
            {currentMedia==3?<img src={twitter} alt="" />:""}
          </div>
          <div className='flex justify-between'>
            <div className='relative px-20 py-24 grad rounded-2xl rotate-[-12deg] -translate-y-9 -translate-x-5'>
              <img
                src={two}
                alt="Image 1"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 2 */}
              <img
                src={popTwo}
                alt="Image 2"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 1 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 3 */}
              <img
                src={faceTwo}
                alt="Image 3"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 2 ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            </div>

            <div className='relative px-20 py-24 grad rounded-2xl rotate-[12deg] translate-x-10 -translate-y-1'>
            <img
                src={three}
                alt="Image 1"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 2 */}
              <img
                src={popThree}
                alt="Image 2"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 1 ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Image 3 */}
              <img
                src={faceThree}
                alt="Image 3"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${currentImage === 2 ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
