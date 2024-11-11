import { useEffect, useState } from "react";
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
import search from "../assests/Dashboard/search.png"
import aero from "../assests/hero/aero.png"
import axios from "axios";

function DashBoard() {
  // const BASE_URL = `https://emoji-api.com`
  // const key = '86aabdbdaeb9e764821ce74a5f10900f5de41c7a'

  const [emojis, setEmojis] = useState([]);
  const [active, setActive] = useState(0)
  const [copy, setcopy] = useState(false)
  const [deviceDropDownActive, setDeviceDropDownActive] = useState(false)
  const ind = [0,1,2,3,4,5,6,7,8]
  const endPoint = ["smileys-emotion","people-body","animals-nature"
                    ,"food-drink","activities","travel-places","objects","symbols","flags"]
  useEffect(() => {
    ind.forEach((num)=>{
      if(num == active){
        setEmojis([])
        axios.get(`/categories/${endPoint[num]}?access_key=86aabdbdaeb9e764821ce74a5f10900f5de41c7a`).then((response) => {
          setEmojis(response.data);  // Set emojis from response
        })
        .catch((error) => {
          console.log("error",error.message)
        });
      }
    })
  }, [active]);

  const copyToClipboard = async (char) => {
    try {
      await navigator.clipboard.writeText(char);
      setcopy(true)
      setTimeout(()=>{
        setcopy(false)
      },2000)
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };


  return (
    <div className="flex">
      {/* sidebar */}
      <div className="">
        <div className=' border-b-2 border-slate-300 bg-gray-100 shadow-custom'>
          <div className='ml-8 mr-12  py-5 '>
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
      <div className="w-full">
        <div className="ml-12 mt-12 mr-12 flex justify-between ">
          {/* drop down */}
          <div className="max-w-fit">
            <div class="relative text-left z-40">
              <button
                className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border-b border-gray-300 focus:outline-none"
                onClick={(() => {
                  setDeviceDropDownActive(prev => !prev)
                })}
              >
                Select Device
                <svg className="w-5 h-5 ml-2 -mr-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>

              <div className={`${deviceDropDownActive ? "block" : "hidden"} absolute right-[-124px] w-56 mt-2 origin-top-right bg-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}>
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
          <div className="flex gap-5">
            <div className="flex">
              <div><img src={search} alt="" className="bg-custom-gray pl-3 focus:ring-0 focus:outline-none focus:border-transparent py-[0.70rem] rounded-l-lg" /></div>
              <div><input type="text" placeholder="Search" className="bg-custom-gray px-4 py-2 rounded-r-lg" /></div>
            </div>
            <div className="flex gap-1 mt-1.5">
              <p>All Emoji's</p>
              <div><img src={aero} alt="" /></div>
            </div>
          </div>
        </div>
        {/* copy */}
        <div className="my-5 w-full flex justify-center">
          <div className={`py-5 px-6 box-bg-grad rounded-xl ${copy?"block":"hidden"}`}><div className="flex gap-2 text-2xl pt-1"><p className="rotate-180">👎</p><p className="text-2xl font-bold">Copied</p></div></div>
        </div>
        {/* emojis */}
        <div className={`ml-12 mr-12 w-full flex flex-wrap gap-5 mt-12`}>
          {emojis.length==0?<div>Loading...</div>:emojis?.map((el) => {
            return (<div key={el.codePoint} className="relative w-[100px] h-[104px] bg-yellow-50 rounded-lg flex flex-col items-center justify-center shadow-md transition-transform transform hover:scale-125"
              onClick={(()=>{copyToClipboard(el.character)})}
            >
                {/* Three dots at the top center */}
                <div className="absolute flex space-x-0.5 mt-1 -top-2 bg-gray-300 px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                </div>
                {/* Emoji face */}
                <div className="text-4xl mt-4">{el.character}</div>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
}
export default DashBoard