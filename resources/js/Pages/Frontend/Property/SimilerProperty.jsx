import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";


// import required modules
import {  HashNavigation } from "swiper";
import PropertyCard from "../PropertyCard";

const SimilerProperty = ({similarProperty}) => {
    return (
        <>
        <section className="py-4 ">
            <p className="text-center pt-2 font-bold text-md">Related properties</p>
            <h3 className="text-center pb-6 font-bold text-4xl">Other apartmentsyou might like</h3>
       
                    <div className="grid w-[90%] mb-10 mx-auto grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{similarProperty && similarProperty.map((item, index) => 
  <PropertyCard key={index} item={item}/>
 
)}
          

    </div>
    </section>
        </>
    );
}

export default SimilerProperty;
