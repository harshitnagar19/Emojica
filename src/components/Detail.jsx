import React, { useEffect, useState } from 'react'
import search from "../assests/Dashboard/search.png"
import fav from "../assests/detail/fav.png"
import favGold from "../assests/detail/favGold.png"
import dots from "../assests/detail/dots.png"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import datamuse from 'datamuse';
const Detail = ({detail}) => {
    const [copy, setCopy] = useState(false)
    const [word, setWord] = useState('node');
    const [relatedWords, setRelatedWords] = useState([]);

    const im = detail.character
    const lastNumberIndex = detail.unicodeName.search(/\d(?!.*\d)/);
    const name = detail.unicodeName.slice(lastNumberIndex + 1).trim() ;
    const group = detail.group
    console.log(detail)
    
    useEffect(()=>{
        const getRelatedWords = async (word) => {
            const response = await datamuse.request(`/words?rel_syn=${word}`);
            setRelatedWords(response);
          };
    },[])


    return (
        <div className="w-full">
            {/* top (search and copy) */}
            <div className=' flex justify-between mx-16 my-12'>
                <div className="flex">
                    <div><img src={search} alt="" className="bg-custom-gray pl-3 focus:ring-0 focus:outline-none focus:border-transparent py-[0.70rem] rounded-l-lg" /></div>
                    <div><input type="text" placeholder="Search" className="bg-custom-gray px-4 py-2 rounded-r-lg" /></div>
                </div>
                <div>
                    <div
                        className={`pt-3 px-7 rounded border border-black font-lg font-semibold
               transition-colors duration-500 ease-in-out
               ${copy ? "bg-yellow-400" : "bg-transparent"}`}
                        onClick={() => {
                            setCopy(true);
                            setTimeout(() => {
                                setCopy(false);
                            }, 2500);
                        }}
                    >
                        {/* Copy Text */}
                        <div
                            className={`text-center transition-all duration-500 transform origin-bottom-right 
                ${copy ? "opacity-0 rotate-45" : "opacity-100 rotate-0 translate-y-1"}`}
                        >
                            <p>😇 Copy</p>
                        </div>

                        {/* Copied Text */}
                        <div
                            className={`transition-all duration-500 transform text-white z-20 origin-bottom-right
                ${copy ? "opacity-100 -translate-y-4 " : "opacity-0 -translate-y-4 "}`}
                        >
                            🤩 Copied
                        </div>
                    </div>

                </div>
            </div>
            {/* center detail card*/}
            <div className="w-[85%] rounded-lg mx-auto flex gap-32 bg-[rgba(251,248,246,1)] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.15)]">
                <div className="ml-20">
                    <div className="text-[9rem] py-[5rem]">{im}</div>
                </div>
                <div className="mt-9 w-[30%] font-nunito text-[18px] font-medium leading-[26px] tracking-[0.01em] text-left ">
                    <h2 className="font-medium">Name</h2>
                    <p className="pb-8 pt-2 text-xl font-bold leading-6 tracking-[0.01em] text-left">{name}</p>
                    <h2 className="font-medium">Category</h2>
                    <p className="pb-8 pt-2 text-xl font-bold leading-6 tracking-[0.01em] text-left">{group}</p>
                    <h2 className="font-medium">Keywords</h2>
                    <p className=" pt-2 text-xl font-bold leading-6 tracking-[0.01em] text-left">Grinning Face, Face, Smile, Happy, Joy, D, Grin</p>
                </div>
                <div className="self-start mt-9">
                    <img src={fav} alt="" />
                    <img src={favGold} alt="" />
                </div>
            </div>
            <div className='w-[85%] ml-20 my-9'>
                <h1 className='font-century-old text-[26px] font-normal leading-[33.8px] 
                tracking-[0.01em] text-left mb-9'>Emoji on Different Platforms</h1>

                <div className='flex flex-wrap gap-20'>
                <div class="relative inline-block text-left px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                    <Menu as="div" className="relative inline-block text-left w-full">
                        <div>
                            <MenuButton className="inline-flex w-full justify-end gap-x-1.5 px-3 py-2  ">
                                <img src={dots} alt="" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute right-[-222px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Downloads
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Add to Favrioute
                                    </a>
                                </MenuItem>
                                
                                
                            </div>
                        </MenuItems>
                    </Menu>


                    <div className='text-center px-5 '>
                        <p className='text-7xl'>{im}</p>
                        <p className='pt-5 font-century-old text-2xl font-medium leading-8 tracking-[0.01em]'>Apple</p>
                    </div>
                </div>
                <div class="relative inline-block text-left px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                    <Menu as="div" className="relative inline-block text-left w-full">
                        <div>
                            <MenuButton className="inline-flex w-full justify-end gap-x-1.5 px-3 py-2  ">
                                <img src={dots} alt="" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute right-[-222px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Downloads
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Add to Favrioute
                                    </a>
                                </MenuItem>
                                
                                
                            </div>
                        </MenuItems>
                    </Menu>


                    <div className='text-center px-5 '>
                        <p className='text-7xl'>{im}</p>
                        <p className='pt-5 font-century-old text-2xl font-medium leading-8 tracking-[0.01em]'>Apple</p>
                    </div>
                </div>
                <div class="relative inline-block text-left px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                    <Menu as="div" className="relative inline-block text-left w-full">
                        <div>
                            <MenuButton className="inline-flex w-full justify-end gap-x-1.5 px-3 py-2  ">
                                <img src={dots} alt="" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute right-[-222px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Downloads
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Add to Favrioute
                                    </a>
                                </MenuItem>
                                
                                
                            </div>
                        </MenuItems>
                    </Menu>


                    <div className='text-center px-5 '>
                        <p className='text-7xl'>{im}</p>
                        <p className='pt-5 font-century-old text-2xl font-medium leading-8 tracking-[0.01em]'>Apple</p>
                    </div>
                </div>
                <div class="relative inline-block text-left px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                    <Menu as="div" className="relative inline-block text-left w-full">
                        <div>
                            <MenuButton className="inline-flex w-full justify-end gap-x-1.5 px-3 py-2  ">
                                <img src={dots} alt="" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute right-[-222px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Downloads
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    >
                                        Add to Favrioute
                                    </a>
                                </MenuItem>
                                
                                
                            </div>
                        </MenuItems>
                    </Menu>


                    <div className='text-center px-5 '>
                        <p className='text-7xl'>{im}</p>
                        <p className='pt-5 font-century-old text-2xl font-medium leading-8 tracking-[0.01em]'>Apple</p>
                    </div>
                </div>
                </div>


            </div>
        </div>
    )
}

export default Detail
