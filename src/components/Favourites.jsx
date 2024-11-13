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
import { useNavigate } from 'react-router-dom';
import search from "../assests/Dashboard/search.png";
import dots from "../assests/detail/dots.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
const Favourites = () => {
    const navigate = useNavigate();
    const [detail, setDetail] = useState(false)
    const [favourite,setFavourite] = useState([])
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
    useEffect(()=>{
       let favData = JSON.parse(localStorage.getItem("fav"))
       if(favData?.length!=0 && favData!=null){
        setFavourite(favData)
       }
    },[])
    const downloadIm = (im) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Set canvas size
        canvas.width = 200; // Adjust width as needed
        canvas.height = 200; // Adjust height as needed

        // Set font and alignment
        context.font = "150px Arial"; // Adjust font size and family as needed
        context.textAlign = "center";
        context.textBaseline = "middle";

        // Fill canvas background (optional, for transparency)
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the character on canvas
        context.fillStyle = "black"; // Adjust color as needed
        context.fillText(im, canvas.width / 2, canvas.height / 2);

        // Convert canvas content to a data URL in PNG format
        const dataUrl = canvas.toDataURL("image/png");

        // Create a link element to download the image
        const element = document.createElement("a");
        element.href = dataUrl;
        element.download = `${im}.png`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    const removeDataFromLocalStorage = (im) => {
        setFavourite(prevData => {
            const newData = prevData.filter(item => item !== im);
            localStorage.setItem("fav", JSON.stringify(newData));
            // setFavourite(false);
            return newData;
        });
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
                            return (<div className={`mb-3 text-sm font-medium tracking-tight  flex gap-1 rounded-lg `} onClick={(() => {
                                // setActive(ind[i])
                                navigate("/dashboard")
                                setDetail(false)
                            })}>
                                <img src={el.img} className="object-contain pl-2" alt="" />
                                <p className="pl-2 py-2">{el.label}</p>
                            </div>)
                        })}
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
            {/* search */}
            <div className="mx-16">
                <div className='flex justify-between  mt-12 mb-24'>
                    <div className="flex">
                        <div><img src={search} alt="" className="bg-custom-gray pl-3 py-[0.70rem] rounded-l-lg" /></div>
                        <div><input type="text" placeholder="Search" className="bg-custom-gray px-4 py-2 rounded-r-lg" /></div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-century-old font-medium">Favourites</h1>
                    <div className="flex gap-10 mt-12">
                        {favourite?.map((el)=>{
                            return (<div className='flex flex-wrap gap-10'>
                                <div className="relative inline-block px-6 pt-5 pb-10 rounded-xl bg-[rgba(251,248,246,1)]">
                                    <Menu as="div" className="relative inline-block w-full">
                                        <MenuButton className="inline-flex w-full justify-end px-3 py-2">
                                            <img src={dots} alt="" />
                                        </MenuButton>
                                        <MenuItems className="absolute right-[-222px] z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                            <MenuItem>
                                                <p className="block px-4 py-2 text-sm text-gray-700" onClick={(()=>{downloadIm(el)})}>
                                                    Downloads
                                                </p>
                                            </MenuItem>
                                            <MenuItem>
                                                <p className="block px-4 py-2 text-sm text-gray-700" onClick={(()=>{removeDataFromLocalStorage(el)})}>
                                                    remove to Favourite
                                                </p>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                    <div className='text-center px-5'>
                                        <p className='text-7xl'>{el}</p>
                                        {/* <p className='pt-5 font-century-old text-2xl font-medium'>Apple</p> */}
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* fav component  */}

        </div>
    )
}

export default Favourites
