
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'


const Navigration = ({data}) => {
    const {url} =  usePage();
    const [isActive, setActive] = useState(false);
    function onToggleMenu(e) {
      setActive(current => !current);
    }
    
  return (
    <> <header className="sticky top-0 z-50" >
      <nav className={`  z-10 w-full  ${url == '/' ? 'bg-transparent mt-[-80px]':'bg-white h-24'}`}>
        <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden"/>
                <div className="w-full px-2 flex justify-between lg:w-max md:px-0 z-30">
                   <div><a href="/" aria-label="logo" className="flex space-x-2 items-center">
                        <img src="/logo/logo.png" className="w-16 md:w-40 mt-2 mr-2" alt="tailus logo" width="144" height="133"/>
                    </a>
                    </div> 
                    <div className='search hidden'>
      <form action="" className=" w-[80%] m-auto  ">
                        <div className="relative flex p-1 rounded-full bg-white dark:bg-gray-800 dark:border-gray-600 border border-yellow-200 shadow-md md:p-2 ">
                            <div id="" className=" pt-2 pl-3 rounded-full bg-transparent w-70 md:w-80 relative md:p-2 md:flex justify-between items-center select-none ">
                                <input type="text" name="catName" id="catName" value="EXPLORE A PLACE" className="pl-0 md:pl-3 w-full bg-white text-xs font-medium cursor-pointer dark:bg-transparent dark:text-gray-50" />
                                <input type="checkbox" name="toggleLstCatSearch" id="toggleLstCatSearch" className="peer hidden outline-none"/>
                                <label role="button" for="toggleLstCatSearch" className="absolute top-0 left-0 w-full h-full"></label>
                                <span className="min-w-max hidden md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-700 dark:fill-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                        <path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </span>
                                <div id="categorieLst" className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white border border-yellow-200 shadow-md rounded-lg py-2">
                                    <ul className="flex flex-col w-full">
                                        {data.locations && data.locations.map((item, i) =>
                                      <a  key={i}  href={route("frontend.area", {
                                        location: item.slug == 'gulshan' ? 'furnished-apartment-for-rent-in-gulshan' : item.slug == 'banani' ? 'furnished-apartment-for-rent-in-banani':item.slug == 'baridhara'? 'furnished-apartment-for-rent-in-baridhara-diplomatic-zone':item.slug =='bashundhara' ? 'furnished-apartment-for-rent-in-bashundhara':'luxury-apartment-rent-in-dhaka',
                                    })}>  <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2"> {item.location_name} </li></a>
                                        )}
                                        
                                    </ul>
                                </div>
                            </div>
                            {/* <input placeholder="Your favorite food" className="w-full p-4 rounded-full outline-none bg-transparent dark:text-white dark:placeholder-gray-300" type="text"/> */}
                            <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-[#064d83] md:px-12">
                                
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="5" stroke="#FEFEFE" stroke-width="1.5"/>
<path d="M14.9998 15L13.6665 13.6667L12.9998 13L11.6665 11.6667" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 12.3333C11.9754 12.216 12.278 11.9288 12.3333 11" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
</svg>
                            </button>
                        </div>
                    </form>
      </div>
                    <div className="flex items-center lg:hidden max-h-10">
                        <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" className="relative w-10 h-auto p-2">
                            <div id="line"
                                className={`m-auto h-0.5 w-6 rounded bg-black transition duration-300 ${url == '/' ? 'bg-white':'bg-black'}`}></div>
                            <div id="line2"
                                className={`m-auto mt-2 h-0.5 w-6 rounded  bg-black transition duration-300 ${url == '/' ? 'bg-white':'bg-black'}`}>
                            </div>
                        </label>
                    </div>
                </div>

                <label role="button" for="toggle_nav" className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 dark:bg-black dark:bg-opacity-80 bg-opacity-30 backdrop-blur backdrop-filter"></label>
                
                <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-8/12">
                    <div className="text-gray-600 lg:pr-4 w-full">
                        <ul className="tracking-wide font-medium  text-sm 
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                            <li>
                                <a href="/property" className={`block  md:px-4  ${url == '/' ? 'md:text-white menu-link':''} transition dark:text-gray-600 dark:hover:text-yellow-300 hover:text-white-700 text-lg`}>
                                    <span>APARTMENTS</span>
                                </a>
                            </li>
                            <li>
                                <a href="/property-owner" className={`block  md:px-4 ${url == '/' ? 'md:text-white menu-link1':''} transition dark:text-gray-600 dark:hover:text-yellow-300 hover:text-white-700 text-lg`}>
                                    <span>PROPERTY OWNER</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="/about" className={`block  md:px-4 transition  ${url == '/' ? 'md:text-white menu-link2':''} dark:text-gray-300 dark:hover:text-yellow-300 hover:text-white-700`}>
                                    <span>ABOUT</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className={`block md:px-4  ${url == '/' ? 'md:text-white menu-link3':''} transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-white-700`}>
                                    <span>CONTACT</span>
                                </a>
                            </li> */}
                            <li>
                                <a href="/faq" className={`block md:px-4  ${url == '/' ? 'md:text-white menu-link2':''} transition dark:text-gray-600 dark:hover:text-yellow-300 hover:text-white-700 text-lg`}>
                                    <span>SUPPORT</span>
                                </a>
                            </li>
                            <li>
                                <a href="/corporates" className={`block md:px-4 transition ${url == '/' ? 'md:text-white menu-link3':''} dark:text-gray-600 dark:hover:text-yellow-300 hover:text-white-700 text-lg`}>
                                    <span>CORPORATE</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full min-w-max space-y-2  
                   lg:space-y-0 sm:w-max  dark:lg:border-gray-700 mx-2">
                        {/* <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 dark:active:bg-gray-700 dark:focus:bg-gray-800 focus:bg-yellow-100 sm:w-max">
                            <span className="block text-yellow-800 dark:text-white font-semibold text-sm">
                                Sign up
                            </span>
                        </button> */}
                        {/* <InertiaLink href='tel:01616171171' type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-[#064d83]  active:bg-[#064d83] focus:bg-[#064d83] sm:w-max">
                            <span className=" text-white  font-semibold text-md">
                            <i className="fa fa-phone mr-2"></i> 01616 171 171
                            </span>
                        </InertiaLink> */}
                        {/* <a href='/client-registration' type="button" title="Start buying" className="w-full mr-2 py-3 px-6 text-center rounded-full transition bg-[#064d83]  active:bg-[#064d83] focus:bg-[#064d83] sm:w-max">
                            <span className=" text-white  font-semibold text-lg">
                             Sign Up
                            </span>
                        </a>
                        <a href='/login' type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-[#064d83]  active:bg-[#064d83] focus:bg-[#064d83] sm:w-max">
                            <span className=" text-white  font-semibold text-lg">
                            Sign In
                            </span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    </nav>
    {/* <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <InertiaLink href="/"> <img className="w-24 md:w-32" src={`http://localhost:8000/${topheader.logo_image}`} alt="logo"/></InertiaLink> 
        </div>
        <div className={` md:static absolute bg-white md:min-h-fit min-h-[60vh] duration-700 left-0 ${isActive ?`top-[12%] navbar__top`:`top-[-100%]`} md:w-auto w-full flex md:items-center px-5`} >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mt-8 md:mt-0" >
                <li><InertiaLink className="hover:text-gray-500 text-2xl" href="/">Home </InertiaLink></li>
                <li><InertiaLink className="hover:text-gray-500 text-2xl" href="/about">About </InertiaLink></li>
                <li><InertiaLink className="hover:text-gray-500 text-2xl" href="/property">Property </InertiaLink></li>
                <li><InertiaLink className="hover:text-gray-500 text-2xl" href="/contact">Contact </InertiaLink></li>
            </ul>
        </div>
        <div>
        <div className="hover:text-[#094770]"><i className="uil uil-phone-volume text-xl md:text-2xl hover:text-[#094770]"></i><a className="mx-2 text-xl md:text-2xl font-bold " href={`tel:${topheader.phone}`}>{topheader.phone}</a> </div>
        </div>
        <div className="flex items-center gap-6 md:hidden">
           
        <i onClick={onToggleMenu}  className={ `uil uil-${isActive? `times`:`align-justify`} text-3xl cursor-pointer md:hidden`}></i>
        </div>
    </nav> */}
</header>
</>
  )
}

export default Navigration;
