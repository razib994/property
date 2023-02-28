import React from 'react'
import ListingCount from './Frontend/ListingCount';
import RequestFrom from './Frontend/Property/RequestFrom';
import Layout from './master/Layout';

const  About = ({totalCount}) =>{
  return (
    <>
    <section className="bg-gray-200">
        <div className="py-28">
        <div className="w-[82%] mx-auto">
            <h2 className="text-3xl font-bold pb-2">About Us</h2>
            <p> Home / About </p>
        </div>
        </div>
</section>

<section className='bg-slate-50'>
<div className="grid grid-cols-1 md:grid-cols-5 mx-auto w-[85%] py-20">
  <div className="col-span-3">
<h2 className="text-3xl py-2">Headling</h2>
<p className="text-xl text-justify whitespace-pre-line">Home is where the heart is and we hope to transform your search for your perfect home into one of joy. Our company offers exquisitely designed, modern living villas in unique locations to suit your tastes and budget. We aim at offering a fresh new take on living spaces that are unparalleled by any other developer. Our apartments are completed with the latest in contemporary architecture, luxurious fittings and fixtures, contemporary interiors that will make your home feel like a luxury hotel suite, at a price that you can afford. We have an extensive portfolio of modern living villas found in unique locations and offer a quality, contemporary design to suit your tastes and budget. This makes us the perfect choice for those who are looking for high-end quality in an easy yet affordable way. Our company will work with you throughout the process, from initial discussions to finalizing your purchase and even after your move as we are always available to answer any questions that may arise.Home is where the heart is and we hope to transform your search for your perfect home into one of joy. Our company offers exquisitely designed, modern living villas in unique locations to suit your tastes and budget. We aim at offering a fresh new take on living spaces that are unparalleled by any other developer. Our apartments are completed with the latest in contemporary architecture, luxurious fittings and fixtures, contemporary interiors that will make your home feel like a luxury hotel suite, at a price that you can afford. We have an extensive portfolio of modern living villas found in unique locations and offer a quality, contemporary design to suit your tastes and budget. This makes us the perfect choice for those who are looking for high-end quality in an easy yet affordable way. Our company will work with you throughout the process, from initial discussions to finalizing your purchase and even after your move as we are always available to answer any questions that may arise.</p>
  </div>
  <div className="col-span-2 justify-center items-center mt-20">
    <img src="/image/banner.jpg" className="px-20" />
  </div>
</div>
</section>
<section className=" py-20">
<div className="w-[80%] md:w-[40%] mx-auto">
  <h2 className="text-3xl font-bold text-center py-4"> Request From </h2>
<RequestFrom/>
</div>
</section>
<ListingCount totalCount={totalCount}/>
    </>
  )
}
About.layout = (page) => <Layout children={page} />;
export default About;