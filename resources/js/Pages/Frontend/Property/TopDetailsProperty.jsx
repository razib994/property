import React from 'react';
import Address from './Address';
import Description from './Description';
import Details from './Details';
import Feature from './Feature';
import MapSection from './MapSection';
import Overview from './Overview';
import RequestFrom from './RequestFrom';
import SimilerProperty from './SimilerProperty';
import SliderImage from './SliderImage';
import VideoSection from './VideoSection';
// import slideImage from './../../../public/image/019.jpg';

const TopDetailsProperty = ({property, similarProperty}) => {
    // const {bed, bath, grage, date, sqf, type_id, id } = property
    return (
        <>
          
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto  pt-8">
            
  <div class='w-full max-w-lg  bg-white rounded-lg '>
  <div className="pt-0">
      <nav aria-label="breadcrumb"> 
        <ol className="flex space-x-3">
          <li><a href="#" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700 text-2xl">Home</a></li>
          <li><a href="#" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700 text-2xl">property</a></li>
          <li className="text-purple-700 text-2xl" aria-current="page">{property.slug}</li> 
        </ol>
      </nav>
    </div>
  </div>

                <div className="px-0 md:px-10 pt-6 text-left md:text-right hidden md:block">
                    <a className="rounded bg-gray-700 mx-1 p-2 text-xl text-white hover:bg-gray-500" href={`tel:${property.phone}`}><i className="uil uil-phone"></i></a>
                    <a className="rounded bg-blue-700 mx-1 p-2 text-xl text-white hover:bg-blue-500" href={`https://www.facebook.com/sharer.php?u=${property.share_link}`}><i className="uil uil-facebook-f"></i></a>
                    <a className="rounded bg-emerald-700 mx-1 p-2 text-xl text-white hover:bg-emerald-600" href={`https://www.facebook.com/sharer.php?u=${property.whatsapp_number}`}><i className="uil uil-whatsapp"></i></a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
                <div>
                    <h2 className="text-3xl font-bold my-4">{property.title}</h2>
                    <span className="bg-black text-white p-2">{property.type.title}</span>
                    <p className="my-3"><i className="uil uil-map-marker"></i> {property.location.location_name}</p>
                </div>
                <div className="md:px-10 text-left md:text-right my-2">
                <h2 className="text-2xl font-bold">TK. {property.price} BDT</h2> 
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto ">
                <div className="col-span-2">
                    <SliderImage image_galleries = {property.image_galleries} />
                    <Overview property = {property}/>
                    <Description description = {property.description}/>
                    <Address property = {property}/>
                    <Details property = {property}/>
                    <MapSection map_link = {property.map_link}/>
                    <Feature features = {property.features} />
                    <VideoSection video_link={property.video_link}/>
                   
                    {/* <Index/> */}
                </div>
                <div className="px-2 md:px-10">
                <h2 className="text-3xl font-bold pb-6"> Request From</h2>
                <RequestFrom/>
               
                

                </div>
            </div>
            <SimilerProperty similarProperty={similarProperty}/>
            <section class=" fixed md:hidden lg:hidden xl:hidden z-50 inset-x-0 bottom-0 bg-white px-4 py-4">
      <div className='grid grid-cols-2 gap-1 w-full'>
        <div className='text-xl font-bold my-3'>Description</div>
        <div>
        <div className="grid grid-cols-2 gap-2 ">
                <a href={`tel:${property.phone}`} className="bg-slate-800 text-white text-center rounded-md py-2 hover:text-white hover:bg-emerald-700"><i className="uil uil-phone  text-xl"></i></a>
<a  href={`https://www.facebook.com/sharer.php?u=${property.whatsapp_number}`} className="bg-emerald-600 text-center  text-white rounded-md  hover:text-white py-2 hover:bg-emerald-700"><i className="uil uil-whatsapp  text-xl"></i> </a>
                </div>
        </div>
      </div>
   
  </section>
             
        </>
    );
}

export default TopDetailsProperty;
