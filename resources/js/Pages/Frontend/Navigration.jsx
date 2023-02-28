import { data } from 'autoprefixer';
import { current } from 'daisyui/src/colors';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigration() {
    const [isActive, setActive] = useState(false);
   
    function onToggleMenu(e) {
      setActive(current => !current);
     
      
    }
  return (
    <> <header className="bg-white py-4 shadow-md z-50" >
    <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <a href="/"> <img className="w-25" src="https://rents.com.bd/wp-content/uploads/2022/06/rents2.png" alt="logo"/></a> 
        </div>
        <div className={` md:static absolute bg-white md:min-h-fit min-h-[60vh] duration-700 left-0 ${isActive ?`top-[12%] navbar__top`:`top-[-100%]`} md:w-auto w-full flex md:items-center px-5`} >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mt-8 md:mt-0" >
                <li><Link className="hover:text-gray-500 text-2xl" to="/">Home </Link></li>
                <li><Link className="hover:text-gray-500 text-2xl" to="/about">About </Link></li>
                <li><Link className="hover:text-gray-500 text-2xl" to="/property">Property </Link></li>
                <li><Link className="hover:text-gray-500 text-2xl" to="/contact">Contact </Link></li>
            </ul>
        </div>
        <div>
        <div className="hover:text-[#094770]"><i className="uil uil-phone-volume text-2xl hover:text-[#094770]"></i><a className="mx-2 text-2xl font-bold " href="tel:01737988947">01737988947</a> </div>
        </div>
        <div className="flex items-center gap-6 md:hidden">
           
        <i onClick={onToggleMenu}  className={ `uil uil-${isActive? `times`:`align-justify`} text-3xl cursor-pointer md:hidden`}></i>
        </div>
    </nav>
</header>
</>
  )
}
