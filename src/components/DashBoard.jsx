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
import Detail from "./Detail";
import {useNavigate} from "react-router-dom"

function DashBoard() {
  const navigate = useNavigate()
  const [emojis, setEmojis] = useState([]);
  const [active, setActive] = useState(0)
  const [detail, setDetail] = useState(false)
  const [detailData, setDetailData] = useState({})
  const [copy, setcopy] = useState(false)
  const [deviceDropDownActive, setDeviceDropDownActive] = useState(false)
  const ind = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const endPoint = [
    "smileys-emotion",
    "people-body",
    "animals-nature",
    "food-drink",
    "activities",
    "travel-places",
    "objects",
    "symbols",
    "flags"]
  const options = [
    "My Operating System",
    "WhatsApp / Apple",
    "Facebook",
    "Samsung",
    "Twitter",
    "Google",
    "Windows",
    "JoyPixels"
  ];
  const categories = [
    { id: 0, img: smile, label: "Smile & Emotion" },
    { id: 1, img: people, label: "People & Body" },
    { id: 2, img: animal, label: "Animal & Nature" },
    { id: 3, img: food, label: "Food & Drink" },
    { id: 4, img: activites, label: "Activities" },
    { id: 5, img: travel, label: "Travel & Places" },
    { id: 6, img: object, label: "Objects" },
    { id: 7, img: symbol, label: "Symbols" },
    { id: 8, img: flag, label: "Flags" },
  ];
  useEffect(() => {
    ind.forEach((num) => {
      if (num == active) {
        setEmojis([])
        axios.get(`https://emoji-api.com/categories/${endPoint[num]}?access_key=86aabdbdaeb9e764821ce74a5f10900f5de41c7a`).then((response) => {
          setEmojis(response.data);  // Set emojis from response
        })
          .catch((error) => {
            console.log("error", error.message)
          });
      }
    })
  }, [active]);

  const copyToClipboard = async (char) => {
    try {
      await navigator.clipboard.writeText(char);
      setcopy(true)
      setTimeout(() => {
        setcopy(false)
      }, 2000)
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
            {categories.map((el, i) => {
              return (<div className={`mb-3 text-sm font-medium tracking-tight  flex gap-1 rounded-lg ${active == i ? "bg-yellow-400" : ""}`} onClick={(() => {
                setActive(ind[i])
                setDetail(false)
              })}>
                <img src={el.img} className="object-contain pl-2" alt="" />
                <p className="pl-2 py-2">{el.label}</p>
              </div>)
            })}
          </div>

        </div>
        <div className={'border-b-4 bg-gray-100 shadow-custom'}>
          <div className="ml-8 mr-16  pt-5 flex gap-3 items-center "
          
          >
            <img src={fav} className="object-contain pl-2 pt-1" alt="" />
            <p className={"font-bold text-3xl font-century-old"}
            onClick={(()=>{
              navigate("/fav")
            })}
            >Favourite</p>
          </div>
          <div className="ml-8 mr-16  py-5 flex gap-3 items-center ">
            <img src={about} className="object-contain pl-2 pt-1" alt="" />
            <p className={"font-bold text-3xl font-century-old"}>About</p>
          </div>
        </div>
      </div>
      {/* top nav */}
      {detail ? <Detail detail={detailData}/> :
        <div className="w-fit">
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
                    {options.map((option, index) => (
                      <p
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        {option}
                      </p>
                    ))}
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
            <div className={`py-5 px-6 box-bg-grad rounded-xl ${copy ? "block" : "hidden"}`}><div className="flex gap-2 text-2xl pt-1"><p className="rotate-180">👎</p><p className="text-2xl font-bold">Copied</p></div></div>
          </div>
          {/* emojis */}
          <div className={`ml-12 mr-5 w-contain items-stretch flex flex-wrap gap-6 mt-12`}>
            {emojis.length == 0 ? <div>Loading...</div> : emojis?.map((el) => {
              return (<div key={el.codePoint} className="relative w-[10%] h-[109px] bg-yellow-50 rounded-lg flex flex-col items-center justify-center shadow-md transition-transform transform hover:scale-125">
                {/* Three dots at the top center */}
                <div className="absolute flex space-x-0.5 mt-1 -top-2 bg-gray-300 px-2 py-1 rounded"
                  onClick={((e) => {
                    setDetailData(el)
                    setDetail(true)
                  })}
                >
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                </div>
                {/* Emoji face */}
                <div className="text-4xl mt-4"
                  onClick={(() => { copyToClipboard(el.character) })}
                >{el.character}</div>
              </div>
              )
            })}

          </div>
        </div>}
    </div>
  );
}
export default DashBoard