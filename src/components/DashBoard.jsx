import { useState } from "react";
import smile from "../assests/Dashboard/😄.png"
import people from "../assests/Dashboard/🙋_♂️.png"
import animal from "../assests/Dashboard/🍁.png"
import food from "../assests/Dashboard/🍲.png"
import activites from "../assests/Dashboard/⚽.png"
import travel from "../assests/Dashboard/🛩.png"
import object from "../assests/Dashboard/🧰.png"
import symbol from "../assests/Dashboard/⚠.png"
import flag from "../assests/Dashboard/🚩.png"
import fav from "../assests/Dashboard/Vector.png"
import about from "../assests/Dashboard/about.png"
function DashBoard() {
  const [active, setActive] = useState(0)
  const [deviceDropDownActive, setDeviceDropDownActive] = useState(false)
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-[20%]">
        <div className=' border-b-2 border-slate-300 bg-gray-100 shadow-custom'>
          <div className='ml-8 mr-16  py-5 '>
            <div className='border-2 border-black py-7 mt-5 mb-12 '></div>
            <p className={"mb-5 font-bold text-3xl font-century-old"}>Categories</p>
            <div className={`mb-3 text-sm font-medium tracking-tight  flex gap-1 rounded-lg ${active == 0 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(0) })}>
              <img src={smile} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Smiley & Emotions</p>
            </div>
            <div className={`mb-3 text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 1 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(1) })}>
              <img src={people} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">People & Body</p>
            </div>
            <div className={`mb-3 text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 2 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(2) })}>
              <img src={animal} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Animal & Nature </p>
            </div>
            <div className={`mb-3 text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 3 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(3) })}>
              <img src={food} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Food & Drink </p>
            </div>
            <div className={`mb-3 text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 4 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(4) })}>
              <img src={activites} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Activites</p>
            </div>
            <div className={`mb-3 text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 5 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(5) })}>
              <img src={travel} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Travel & Places</p>
            </div>
            <div className={`mb-3 text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 6 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(6) })}>
              <img src={object} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Objects</p>
            </div>
            <div className={`mb-3 text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 7 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(7) })}>
              <img src={symbol} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Symbols</p>
            </div>
            <div className={`mb-3  text-sm font-medium tracking-tight flex gap-1 rounded-lg ${active == 8 ? "bg-yellow-400" : ""}`} onClick={(() => { setActive(8) })}>
              <img src={flag} className="object-contain pl-2" alt="" />
              <p className="pl-2 py-2">Flags</p>
            </div>
          </div>

        </div>
        <div className={'border-b-4 bg-gray-100 shadow-custom'}>
          <div className="ml-8 mr-16  pt-5 flex gap-3 items-center ">
            <img src={fav} className="object-contain pl-2 pt-1" alt="" />
            <p className={"font-bold text-3xl font-century-old"}>Favourite</p>
          </div>
          <div className="ml-8 mr-16  py-5 flex gap-3 items-center ">
            <img src={about} className="object-contain pl-2 pt-1" alt="" />
            <p className={"font-bold text-3xl font-century-old"}>About</p>
          </div>
        </div>
      </div>
      {/* top nav */}
      <div className="w-[80%] ml-12 mt-12">
        {/* drop down */}
        <div>
          <div class="relative inline-block text-left">
            <button 
            className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border-b border-gray-300 focus:outline-none"
            onClick={(()=>{
              setDeviceDropDownActive(prev => !prev)
            })}
            >
              Select Device
              <svg className="w-5 h-5 ml-2 -mr-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <div className={`${deviceDropDownActive?"block":"hidden"} absolute right-[-124px] w-56 mt-2 origin-top-right bg-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}>
              <div className="py-1">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">My Operating System</p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">WhatsApp / Apple</p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Facebook</p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Samsung</p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Twitter</p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Google</p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Windows</p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">JoyPixels</p>
              </div>
            </div>
          </div>
        </div>
        {/* search */}
        <div>
            <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}
export default DashBoard