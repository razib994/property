import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

const HomeHeroBanner = ({locations}) => {
    return (
        <>
    <div className="hidden md:block lg:block xl:block relative bg-white  md:bg-gray-800 lg:bg-gray-800 xl:bg-gray-800 h-screen mt-[-10px]" style={{backgroundImage:`url('images/hero.jpeg')`, backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
        <div className=" m-auto px-2 pt-40 md:pt-52 md:px-12 lg:pt-[4.8rem] lg:px-7 bg-gray-800 bg-opacity-10 h-screen ">
            <div className="flex flex-col md:flex-row  items-center  text-center px-6 md:px-0 w-[100%] md:w-[75%] m-auto">
                <div className="relative  lg:w-full  lg:py-48 xl:py-72 pt-10">
                    <h2 className="font-bold text-3xl text-white  md:text-4xl ">Your furnished apartment ready to move</h2>
                    <p className="mt-4 text-md text-white dark:text-white-200 text-lg">Beautifully designed, fully furnished apartments in Gulshan, Banani, Baridhara and Bashundhara to make you feel at home</p>
                    <form action="" className=" md:w-[100%] lg:w-[60%] m-auto mt-4 md:mt-12 lg:mt-12 xl-mt-12 ">
                        <div className="relative flex p-1 rounded-full bg-white dark:bg-gray-800 dark:border-gray-600 border border-yellow-200 shadow-md md:p-2 ">
                            <div id="categories" className=" pt-3 pl-3 rounded-full bg-transparent w-70 md:w-80 relative md:p-4 md:flex justify-between items-center select-none ">
                                <input type="text" name="catName" id="catName" value="EXPLORE A PLACE" className="pl-0 md:pl-3 w-full bg-white text-base font-medium cursor-pointer dark:bg-transparent dark:text-gray-50" />
                                <input type="checkbox" name="toggleLstCat" id="toggleLstCat" className="peer hidden outline-none"/>
                                <label role="button" for="toggleLstCat" className="absolute top-0 left-0 w-full h-full"></label>
                                <span className="min-w-max hidden md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-700 dark:fill-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                        <path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"  />
                                    </svg>
                                </span>
                                <div id="categorieLst" className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white border border-yellow-200 shadow-md rounded-lg py-2">
                                    <ul className="flex flex-col w-full">
                                        {locations && locations.map((item, i) =>
                                       <a href={route("frontend.area", {
                                        location: item.slug == 'gulshan' ? 'furnished-apartment-for-rent-in-gulshan' : item.slug == 'banani' ? 'furnished-apartment-for-rent-in-banani':item.slug == 'baridhara'? 'furnished-apartment-for-rent-in-baridhara-diplomatic-zone':item.slug =='bashundhara' ? 'furnished-apartment-for-rent-in-bashundhara':'luxury-apartments',
                                    })}> <li key={i} className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2 text-lg"> {item.location_name} </li></a>
                                        )}
                                        
                                    </ul>
                                </div>
                            </div>
                            {/* <input placeholder="Your favorite food" className="w-full p-4 rounded-full outline-none bg-transparent dark:text-white dark:placeholder-gray-300" type="text"/> */}
                            <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-[#064d83] md:px-12">
                                <span className=" text-white font-semibold md:block">
                                    Search
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-yellow-900 hidden" fill="currentColor" viewBox="0 0 16 16" >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                    
                </div>
                {/* <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                    <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative w-full h-auto" alt="food illustration" loading="lazy" width="100" height="450"/>
                </div> */}
            </div>
        </div>
    </div>   
    <div className="md:hidden lg:hidden xl:hidden  relative bg-white  md:bg-gray-800 lg:bg-gray-800 xl:bg-gray-800 h-screen mt-[-10px]" style={{backgroundImage:`url('images/mobile-banner.jpg')`, backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
        <div className=" m-auto px-2 pt-40 md:pt-52 md:px-12 lg:pt-[4.8rem] lg:px-7 bg-gray-800 bg-opacity-10 h-screen ">
            <div className="flex flex-col md:flex-row  items-center  text-center px-6 md:px-0 w-[100%] md:w-[75%] m-auto">
                <div className="relative  lg:w-full  lg:py-48 xl:py-72 pt-10">
                    <h2 className="font-bold text-3xl text-white  md:text-4xl ">Your furnished apartment ready to move</h2>
                    <p className="mt-4 text-md text-white dark:text-white-200 text-lg">Beautifully designed, fully furnished apartments in Gulshan, Banani, Baridhara and Bashundhara to make you feel at home</p>
                    <form action="" className=" md:w-[100%] lg:w-[60%] m-auto mt-4 md:mt-12 lg:mt-12 xl-mt-12 ">
                        <div className="relative flex p-1 rounded-full bg-white dark:bg-gray-800 dark:border-gray-600 border border-yellow-200 shadow-md md:p-2 ">
                            <div id="categories" className=" pt-3 pl-3 rounded-full bg-transparent w-70 md:w-80 relative md:p-4 md:flex justify-between items-center select-none ">
                                <input type="text" name="catName" id="catName" value="EXPLORE A PLACE" className="pl-0 md:pl-3 w-full bg-white text-base font-medium cursor-pointer dark:bg-transparent dark:text-gray-50" />
                                <input type="checkbox" name="toggleLstCat" id="toggleLstCat1" className="peer hidden outline-none"/>
                                <label role="button" for="toggleLstCat1" className="absolute top-0 left-0 w-full h-full"></label>
                                <span className="min-w-max hidden md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-700 dark:fill-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                        <path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"  />
                                    </svg>
                                </span>
                                <div id="categorieLst" className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white border border-yellow-200 shadow-md rounded-lg py-2">
                                    <ul className="flex flex-col w-full">
                                        {locations && locations.map((item, i) =>
                                       <a href={route("frontend.area", {
                                        location: item.slug == 'gulshan' ? 'furnished-apartment-for-rent-in-gulshan' : item.slug == 'banani' ? 'furnished-apartment-for-rent-in-banani':item.slug == 'baridhara'? 'furnished-apartment-for-rent-in-baridhara-diplomatic-zone':item.slug =='bashundhara' ? 'furnished-apartment-for-rent-in-bashundhara':'luxury-apartments',
                                    })}> <li key={i} className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2 text-lg"> {item.location_name} </li></a>
                                        )}
                                        
                                    </ul>
                                </div>
                            </div>
                            {/* <input placeholder="Your favorite food" className="w-full p-4 rounded-full outline-none bg-transparent dark:text-white dark:placeholder-gray-300" type="text"/> */}
                            <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-[#064d83] md:px-12">
                                <span className=" text-white font-semibold md:block">
                                    Search
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-yellow-900 hidden" fill="currentColor" viewBox="0 0 16 16" >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                    
                </div>
                {/* <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                    <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative w-full h-auto" alt="food illustration" loading="lazy" width="100" height="450"/>
                </div> */}
            </div>
        </div>
    </div>                       
        </>
    );
}

export default HomeHeroBanner;

