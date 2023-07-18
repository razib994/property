import Address from './Address';
import Details from './Details';
import Feature from './Feature';
import Overview from './Overview';
import RequestFrom from './RequestFrom';
import SimilerProperty from './SimilerProperty';
import SliderImage from './SliderImage';
import React, { useState, useEffect } from "react";

const TopDetailsProperty = ({property, similarProperty, message, errors}) => {
    const [showTopBtn, setShowTopBtn] = useState("");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200 ) {
                setShowTopBtn("fixed w-[30%] top-[150px]");
            } else {
              setShowTopBtn("");
            }
        });
    }, []);
   
    return (
        <>
          
            <div className="grid grid-cols-2 md:grid-cols-2 w-[90%] mx-auto  pt-8">
                <div class='w-full max-w-lg  bg-white rounded-lg '>
                <div className="pt-0">
                    <nav aria-label="breadcrumb"> 
                        <ol className="flex space-x-3">
                        <li><a href="#" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700 text-sm">Home</a></li>
                        <li><a href="#" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700 text-sm">property</a></li>
                        <li className="text-purple-700 mt-1 text-sm" aria-current="page">{property.title}</li> 
                        </ol>
                    </nav>
                    </div>
                </div>
                <div className="px-0 md:px-10 pt-2 text-right md:text-right">
                    <a className="rounded bg-blue-700 mx-1 p-2 text-xl text-white hover:bg-blue-500" href={`https://www.facebook.com/sharer.php?u=${property.share_link}`}><i className="uil uil-facebook-f"></i></a>
                    <a className="rounded bg-emerald-700 mx-1 p-2 text-xl text-white hover:bg-emerald-600" href={`https://www.facebook.com/sharer.php?u=${property.whatsapp_number}`}><i className="uil uil-whatsapp"></i></a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
                <div>
                    <h2 className="text-3xl font-bold mt-4">{property.title}</h2>
                    {/* <span className="bg-black text-white p-2">{property.type.title}</span> */}
                    <p className="my-1"><i className="uil uil-map-marker"></i> {property.location.location_name}</p>
                </div>
                <div className="md:px-10 text-left md:text-right my-3">
                <h2 className="text-2xl font-bold"> {property.price} BDT</h2> 
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto ">
                <div className="col-span-2">
                    <SliderImage image_galleries = {property.image_galleries} />
                    <Overview property = {property}/>
                    {/* <Description description = {property.description}/> */}
                    <Address property = {property}/>
                    <Details property = {property}/>
                    <Feature features = {property.features} />
                    {/* <MapSection map_link = {property.map_link}/> */}
                    <RequestFrom id={property.id} errors={errors} location={property.location} title={property.title}/>
                   
                   
                    {/* <VideoSection video_link={property.video_link}/> */}
                   
                    {/* <Index/> */}
                </div>
                <div className="px-2 md:px-10 hidden mb:block lg:block xl:block">
                    <div className={`text-gray-900 ${showTopBtn ? showTopBtn :""}`}>
                <RequestFrom id={property.id} errors={errors} location={property.location} title={property.title}/>
                {message.success && <span className='bg-green-700 text-white p-4 rounded-lg font-bold ml-4'> {message.success}</span>}
                
                </div>
                </div>
            </div>
            <SimilerProperty similarProperty={similarProperty}/>
            <section class=" fixed md:hidden lg:hidden xl:hidden z-50 inset-x-0 bottom-0 bg-white px-4 py-4">
      <div className='grid grid-cols-4 gap-1 w-full border-t-2 p-2'>
        <div className='my-3 col-span-3'>
            <h2 className='text-lg font-bold '>Need Personal Assistance</h2>
            <p className='text-sm text-gray-600'>We are just a call away!</p>
            </div>
        <div className='py-5 col-span-1'> 
        <div className="grid grid-cols-1 gap-2 ">
<a  href={`https://api.whatsapp.com/send?phone=+8801616171171&text=https://furhouz.com/area/${property.location.location_name}/${property.id}`}  className=" text-center  text-white "><i className="uil uil-whatsapp  text-4xl bg-emerald-600 rounded-full  hover:text-white py-2 px-2.5 hover:bg-emerald-700"></i> </a>
                </div>
        </div>
      </div>
   
  </section>
             
        </>
    );
}

export default TopDetailsProperty;
