import React, { useEffect, useState } from 'react';
import search from "../assests/Dashboard/search.png";
import fav from "../assests/detail/fav.png";
import favGold from "../assests/detail/favGold.png";
import dots from "../assests/detail/dots.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const Detail = ({ detail }) => {
    const navigate = useNavigate();
    const [copy, setCopy] = useState(false);
    const [existingData, setExistingData] = useState([]);
    const [favourite, setFavourite] = useState(false);
    const im = detail.character;
    const lastNumberIndex = detail.unicodeName.search(/\d(?!.*\d)/);
    const name = detail.unicodeName.slice(lastNumberIndex + 1).trim();
    let keyWords = name.split(" ");
    const group = detail.group;
    const unicodeName = detail.unicodeName;

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("fav"));
        if (storage == null) {
            setFavourite(false);
        } else {
            let result = storage.filter((el) => im === el);
            setFavourite(result.length !== 0);
        }
    }, [existingData]);

    const removeDataFromLocalStorage = () => {
        setExistingData(prevData => {
            const newData = prevData.filter(item => item !== im);
            localStorage.setItem("fav", JSON.stringify(newData));
            setFavourite(false);
            return newData;
        });
    };

    function saveDataToLocalStorage() {
        const storage = JSON.parse(localStorage.getItem("fav")) || [];
        setExistingData(storage);
        setExistingData(prevData => {
            const newData = [...prevData];
            if (!newData.includes(im)) {
                newData.push(im);
                localStorage.setItem("fav", JSON.stringify(newData));
            }
            return newData;
        });
        localStorage.setItem("fav", JSON.stringify(existingData));
    }

    const copyToClipboard = async (char) => {
        try {
            await navigator.clipboard.writeText(char);
            setCopy(true);
            setTimeout(() => {
                setCopy(false);
            }, 2500);
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    };

    const downloadIm = () => {
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

    return (
        <div className="w-full">
            {/* top (search and copy) */}
            <div className='flex justify-between mx-16 my-12'>
                <div className="flex">
                    <div><img src={search} alt="" className="bg-custom-gray pl-3 py-[0.70rem] rounded-l-lg" /></div>
                    <div><input type="text" placeholder="Search" className="bg-custom-gray px-4 py-2 rounded-r-lg" /></div>
                </div>
                <div>
                    <div
                        className={`pt-3 px-7 rounded border transition-all duration-500 border-black font-lg font-semibold ${copy ? "bg-yellow-400" : "bg-transparent"}`}
                        onClick={() => copyToClipboard(detail.character)}
                    >
                        <div className={`text-center transition-all duration-500 origin-bottom-right ${copy ? "opacity-0 rotate-90" : "opacity-100 rotate-0 translate-y-2"}`}>
                            <p>😇 Copy</p>
                        </div>
                        <div className={`text-white transition-all duration-500 ${copy ? "opacity-100 -translate-y-4 " : "opacity-0 -translate-y-4 "}`}>
                            🤩 Copied
                        </div>
                    </div>
                </div>
            </div>
            {/* center detail card*/}
            <div className="w-[85%] rounded-lg mx-auto flex gap-32 bg-[rgba(251,248,246,1)] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.15)]">
                <div className="ml-20 text-[9rem] py-[5rem]">{im}</div>
                <div className="mt-9 w-[30%] font-nunito text-[18px] font-medium">
                    <h2 className="font-medium">Name</h2>
                    <p className="pb-8 pt-2 text-xl font-bold">{name}</p>
                    <h2 className="font-medium">Category</h2>
                    <p className="pb-8 pt-2 text-xl font-bold">{group}</p>
                    <h2 className="font-medium">Keywords</h2>
                    <p className="pt-2 text-xl font-bold">{keyWords.join(", ")}</p>
                </div>
                <div className="self-start mt-9">
                    <img src={favourite ? favGold : fav} alt="" onClick={favourite ? removeDataFromLocalStorage : saveDataToLocalStorage} />
                </div>
            </div>
            <div className='w-[85%] ml-20 my-9'>
                <h1 className='font-century-old text-[26px] mb-9'>Emoji on Different Platforms</h1>
                <div className='flex flex-wrap gap-20'>
                    <div className="relative inline-block px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                        <Menu as="div" className="relative inline-block w-full">
                            <MenuButton className="inline-flex w-full justify-end px-3 py-2">
                                <img src={dots} alt="" />
                            </MenuButton>
                            <MenuItems className="absolute right-[-222px] z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={downloadIm}>
                                        Downloads
                                    </p>
                                </MenuItem>
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={saveDataToLocalStorage}>
                                        Add to Favourite
                                    </p>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                        <div className='text-center px-5'>
                            <p className='text-7xl'>{im}</p>
                            <p className='pt-5 font-century-old text-2xl font-medium'>Apple</p>
                        </div>
                    </div>
                    {/* Repeat above div for other platforms */}
                    <div className="relative inline-block px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                        <Menu as="div" className="relative inline-block w-full">
                            <MenuButton className="inline-flex w-full justify-end px-3 py-2">
                                <img src={dots} alt="" />
                            </MenuButton>
                            <MenuItems className="absolute right-[-222px] z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={downloadIm}>
                                        Downloads
                                    </p>
                                </MenuItem>
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={saveDataToLocalStorage}>
                                        Add to Favourite
                                    </p>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                        <div className='text-center px-5'>
                            <p className='text-7xl'>{im}</p>
                            <p className='pt-5 font-century-old text-2xl font-medium'>Apple</p>
                        </div>
                    </div>
                    <div className="relative inline-block px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                        <Menu as="div" className="relative inline-block w-full">
                            <MenuButton className="inline-flex w-full justify-end px-3 py-2">
                                <img src={dots} alt="" />
                            </MenuButton>
                            <MenuItems className="absolute right-[-222px] z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={downloadIm}>
                                        Downloads
                                    </p>
                                </MenuItem>
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={saveDataToLocalStorage}>
                                        Add to Favourite
                                    </p>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                        <div className='text-center px-5'>
                            <p className='text-7xl'>{im}</p>
                            <p className='pt-5 font-century-old text-2xl font-medium'>Apple</p>
                        </div>
                    </div>
                    <div className="relative inline-block px-6 py-5 rounded-lg bg-[rgba(251,248,246,1)]">
                        <Menu as="div" className="relative inline-block w-full">
                            <MenuButton className="inline-flex w-full justify-end px-3 py-2">
                                <img src={dots} alt="" />
                            </MenuButton>
                            <MenuItems className="absolute right-[-222px] z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={downloadIm}>
                                        Downloads
                                    </p>
                                </MenuItem>
                                <MenuItem>
                                    <p className="block px-4 py-2 text-sm text-gray-700" onClick={saveDataToLocalStorage}>
                                        Add to Favourite
                                    </p>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                        <div className='text-center px-5'>
                            <p className='text-7xl'>{im}</p>
                            <p className='pt-5 font-century-old text-2xl font-medium'>Apple</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
