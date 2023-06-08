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

const SimilerProperty = ({similarProperty}) => {
    return (
        <>
        <section className="py-4 ">
            <p className="text-center pt-2 font-bold text-md">Related properties</p>
            <h3 className="text-center pb-6 font-bold text-4xl">Other apartmentsyou might like</h3>
       
                    <div className="grid w-[90%] mb-10 mx-auto grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{similarProperty && similarProperty.map((item, index) => 
  <div className="relative mx-auto w-full">
  <InertiaLink href={route("frontend.propertyDetails", {
                    location:item.location.location_name,
										itemId: item.id,
									})}> 
    <div className="z-[-1] relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <div className="rounded-lg bg-white p-4 shadow">
        <div className="relative  justify-center overflow-hidden rounded-lg">
          <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
            <div className="absolute inset-0 bg-black bg-opacity-80">
              {/* <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" /> */}
            </div>
          </div>
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
         {item.image_galleries && item.image_galleries.map((i, l) =>
                <SwiperSlide><img src={i.images} alt={item.title} /></SwiperSlide>

        )}
        {/* <SwiperSlide><img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" /></SwiperSlide>
        */}
      </Swiper>
          <div className="absolute bottom-0 left-5 mb-3 flex">
            <p className="flex items-center font-medium text-white shadow-sm">
              <i className="fa fa-camera mr-2 text-xl text-white"></i>
              10
            </p>
          </div>
          <div className="absolute bottom-0 right-5 mb-3 flex">
            <p className="flex items-center font-medium text-gray-800">
              <i className="fa fa-heart mr-2 text-2xl text-white"></i>
            </p>
          </div>

          <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-gray-900 px-2 py-1 text-xs font-semibold text-white"> {item.type.title} </span>
          <span className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i className="fa fa-star"></i> </span>
        </div>
        
        <div className="mt-4">

          <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
            <span className="text-2xl">{item.price}</span> BDT
          </p>
        </div>
        <div className="mt-4">
          <p className="line-clamp-1 mt-2 text-lg text-gray-800">{item.address}</p>
        </div>
        <div className="justify-center">
          <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
            <p className="flex items-center font-medium text-gray-800">
              <i className="fa fa-bed mr-2 text-blue-900"></i>
            {item.bed}
            </p>

            <p className="flex items-center font-medium text-gray-800">
              <i className="fa fa-bath mr-2 text-blue-900"></i>
              {item.bath}
            </p>
            <p className="flex items-center font-medium text-gray-800">
              <i className="fa fa-home mr-2 text-blue-900"></i>
              {item.sqf} /Sqf
            </p>
          </div>
        </div>
       
        <div className="mt-8 grid grid-cols-1">
          {/* <div className="flex items-center">
            <div className="relative">
              <div className="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
              <span className="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
            </div>

            <p className="line-clamp-1 ml-2 text-gray-800">Salman Ghouri Dev</p>
          </div> */}

          <div className="">
          <a href={`https://api.whatsapp.com/send?phone=+8801616171171&text=https://furnished.free-blood.com/area/${item.location.location_name}/${item.id}`}><i className="fab fa-whatsapp mx-1 rounded-md bg-green-600 py-2 px-2 text-lg md:text-xl text-white"> Whatsapp</i> </a>
          <InertiaLink href={route("frontend.propertyDetails", {
                    location:item.location.location_name,
										itemId: item.id,
									})}> <button><i className="fas fa-envelope rounded-md bg-[#064d83] py-2  mx-1 px-1 text-lg md:text-xl text-white"> Email</i>  </button> </InertiaLink>
            {/* <button><i className="fa fa-phone rounded-md bg-[#064d83] py-2 px-2 text-lg md:text-xl text-white"> Call</i> </button> */}
           
            
          </div>
          {/* <div className="">
          
           <h2 className="text-xl py-3">{item.title}</h2> 
         
        </div> */}
        </div>
        
       
      </div>
      
    </div>
   
    </InertiaLink>
  </div>
)}
          

    </div>
    </section>
        </>
    );
}

export default SimilerProperty;
