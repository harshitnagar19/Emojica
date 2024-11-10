import React, { useState, useEffect } from "react";

import chilly from "../assests/emojiColl/chilly.png"
import graps from "../assests/emojiColl/graps.png"

import virus from "../assests/emojiColl/virus.png"
import shark from "../assests/emojiColl/shark.png"

import star from "../assests/emojiColl/star.png"
import hen from "../assests/emojiColl/hen.png"

import duck from "../assests/emojiColl/duck.png"
import rat from "../assests/emojiColl/rat.png"

import tiger from "../assests/emojiColl/tiger.png"
import cow from "../assests/emojiColl/cow.png"

import heart from "../assests/emojiColl/heart.png"
import umbrella from "../assests/emojiColl/umbrella.png"

import sunflower from "../assests/emojiColl/sunflower.png"
import butterfly from "../assests/emojiColl/butterfly.png"

import evil from "../assests/emojiColl/evil.png"
import pop from "../assests/emojiColl/pop.png"

import tigerFrame from "../assests/emojiColl/tigerFrame.png"
import lionFrame from "../assests/emojiColl/lionFrame.png"
import cowFrame from "../assests/emojiColl/cowFrame.png"
import cornerduck from "../assests/emojiColl/cornerduck.png"

const EmojiCollection = () => {
  const [showOriginal, setShowOriginal] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOriginal(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div className="w-[65vw] my-0 mx-auto mt-80 mb-32 shadow-custom-top rounded-t-[60px] border border-solid border-t-[1px] border-r-[1px] border-b-0 border-l-[1px]">
        <div className="px-24 pt-28  containerr">
          <div className="flex justify-center pb-12">
            <div className="text-center text-5xl font-medium font-century-old">
              <p className="pb-4">Build Your Personal</p>
              <p className="text-gradient pb-1" me>Emoji Collection</p>
            </div>
          </div>
          <div className="flex justify-between  items-center my-0 mx-auto pb-12">
            <div className="relative  border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow">
              <img
                src={evil}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={pop}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            
            </div>
            <div className="relative border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow ">
            <img
                src={heart}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={umbrella}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
            <div className="relative border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow">
            <img
                src={chilly}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={graps}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
            <div className="relative border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow">
            <img
                src={tiger}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={cow}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
          </div>
          <div className="flex justify-between items-center my-0 mx-auto pb-12">
            <div className="relative border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow">
            <img
                src={virus}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={shark}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
            <div className="relative border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow">
            <img
                src={duck}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={rat}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
            <div className="relative border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow">
            <img
                src={sunflower}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={butterfly}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
            <div className="relative border-slate-100 rounded-2xl p-16 box-bg-grad shadow-custom-shadow">
            <img
                src={star}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={hen}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
          </div>
        </div>

      </div>
      <div className="w-[60vw] flex my-0 mx-auto justify-between">
        <div className="relative">
          <div className="flex justify-center items-center h-72 w-80 box-bg-grad rounded-2xl border-2 border-slate-100 shadow-custom-shadow">
            <div className="">
            <img
                src={tiger}
                alt="Original"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-100' : 'opacity-0'
                  }`}
              />
              {/* Alternate Image */}
              <img
                src={cow}
                alt="Alternate"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain transition-opacity duration-1000 ease-in-out ${showOriginal ? 'opacity-0' : 'opacity-100'
                  }`}
              />
            </div>
          </div>
          <div className="absolute top-[3.3rem] left-[-98px]">
            <img src={cowFrame} alt="" />
          </div>
          <div className="absolute top-[13.3rem] left-[-98px]">
            <img src={lionFrame} alt="" />
          </div>
          <div className="absolute top-[7.3rem] right-[-98px]">
            <img src={tigerFrame} alt="" />
          </div>
        </div>
        <div className="w-7/12 pl-[7.8rem] ">
          <h2 className="w-[90%] text-3xl pb-2 font-normal font-century-old">
            Search Your Favorite
            Emoji with Keyword
          </h2>
          <p className="text-lg pt-7 font-light leading-8">
            Quickly find and copy your favorite emojis using our simple keyword search feature. Just type a word that describes what you're looking for, and instantly browse through a curated list of emojis.
          </p>
        </div>
      </div>
      <div className="flex justify-end pt-7">
        <img src={cornerduck} alt="" />
      </div>
    </div>
  );
};

export default EmojiCollection;


