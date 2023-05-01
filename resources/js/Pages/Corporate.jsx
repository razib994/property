import Layout from './master/Layout';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
const Corporate = () => {
    return (
        <>
           <section class="text-gray-600 body-font  py-16 border-t-2">
  <div class="w-[75%] px-5 py-24 bottom-0 relative mx-auto flex flex-wrap items-center justify-center bg-cover bg-no-repeat min-h-screen rounded-lg" style={{backgroundImage:`url('https://tabas.com/packs/media/images/corporate/hero/sm-e5fe53759284cbaca4d0619f2bb68088.webp')`}}>
    <div class="lg:w-4/5 lg:pr-0 pr-0 absolute bottom-24 bg-[rgba(196,188,188,0.82)] p-4 rounded-lg">
      <h1 class="title-font  font-bold text-2xl md:text-5xl text-white"><span className='text-[#064d83]'> Rent corporate apartments </span> saving time and money
</h1>
      <p class="leading-relaxed mt-4 mb-3 text-white">Your business travellers will love them. Because there is nothing better than living in a FurHouz
</p>
      <a href='/get-request' class="text-white bg-[#064d83] border-0 py-2 px-8 focus:outline-none hover:bg-[#064d83] rounded-lg text-lg">Request a quote</a>

    </div>
    
  </div>

  <div class="mx-auto w-[75%] mb-10">
  
    <p class="leading-relaxed mt-24 text-left md:text-center text-xl mb-4 "><strong>CORPORATE BENEFITS</strong></p>
      <h1 class="title-font  font-bold text-3xl md:text-5xl text-left md:text-center"><span className='text-[#064d83]'> Benefits of renting </span> corporate apartments
</h1>
      <p class="leading-relaxed mt-4 mb-3 text-xl text-left md:text-center">Corporates save time and money and employees feel at home
</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto w-[75%]'>
        <div className='hover:border-2 p-8 hover:rounded-md hover:shadow-lg'>
          <img src='/corporate/account-manager.png' width={60} height={60}/>
        {/* <i class="uil uil-user text-4xl bg-gray-300 rounded-full p-4 "></i> */}
        <h2 className='text-2xl font-bold mt-10 my-2'>Account manager</h2>
        <p>A fully-dedicated account manager to provide personalized support</p>
           </div>
           <div className='hover:border-2 p-8 hover:rounded-md hover:shadow-lg'>
           <img src='/corporate/savew-money.png' width={60} height={60}/>
        <h2 className='text-2xl font-bold mt-10 my-2'>Save money</h2>
        <p>Save money and provide an exclusive home experience to your corporate employees</p>
           </div>
           <div className='hover:border-2 p-8 hover:rounded-md hover:shadow-lg'>
           <img src='/corporate/interior.png' width={60} height={60}/>
        <h2 className='text-2xl font-bold mt-10 my-2'>Rent with flexibility</h2>
        <p>Rent our apartments from 1 month or more with flexibility and without guarantor</p>
           </div>
           <div className='hover:border-2 p-8 hover:rounded-md hover:shadow-lg'>
           <img src='/corporate/central-neighborhood.png' width={60} height={60}/>
        <h2 className='text-2xl font-bold mt-10 my-2'>Central neighbourhoods</h2>
        <p>Our properties are located in central areas, close to the major corporate offices</p>
           </div>
           <div className='hover:border-2 p-8 hover:rounded-md hover:shadow-lg'>
           <img src='/corporate/interior.png' width={60} height={60}/>
        <h2 className='text-2xl font-bold mt-10 my-2'>Beautiful interior design</h2>
        <p>Our apartments are highly-curated and beautifully-designed</p>
           </div>
           <div className='hover:border-2 p-8 hover:rounded-md hover:shadow-lg'>
           <img src='/corporate/Equipped-to-work.png' width={60} height={60}/>
        <h2 className='text-2xl font-bold mt-10 my-2'>Equipped to work</h2>
        <p>Our apartments are fully-equipped for you to work from home</p>
           </div>
      </div>
    
      <div class="mx-auto w-[75%] mb-10">
  
  <p class="leading-relaxed mt-24 text-left md:text-center text-md mb-4 "><strong>CORPORATE BENEFITS</strong></p>
    <h1 class="title-font  font-bold text-3xl md:text-5xl text-left md:text-center">Corporate customers from different companies and roles
</h1>
<div class="flex gap-4 bg-white my-10 w-full" style={{height:"600px"}}>
<div class="w-[100%] mx-auto">



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
        loop={true}
      >
        <SwiperSlide>
        <img src='https://tabas.com/packs/media/images/corporate/apartments/first_slide_sm-14f932ffc0a07da46f6c12cc5814bdfd.png' style={{height:"600px"}} />

            </SwiperSlide>
            <SwiperSlide>
        <img src='https://tabas.com/packs/media/images/corporate/apartments/second_slide_sm-ce7cc95a6f91ece4710ff05100da5c03.png' style={{height:"600px"}}/>

            </SwiperSlide>
            <SwiperSlide>
        <img src='https://tabas.com/packs/media/images/corporate/apartments/first_slide_sm-14f932ffc0a07da46f6c12cc5814bdfd.png' style={{height:"600px"}}/>

           </SwiperSlide>
           
        
      </Swiper>


    
   
</div>  </div>
</div>
  {/* <div class="mx-auto w-[75%] mb-10">
  
  <p class="leading-relaxed mt-24 text-left md:text-center text-md mb-4 "><strong>LOCATION</strong></p>
      <h1 class="title-font  font-bold text-3xl md:text-5xl text-left md:text-center"><span className='text-[#064d83]'> Well located apartments</span> in upstanding areas
</h1>
      <p class="leading-relaxed mt-4 mb-3 text-xl text-left md:text-center">FurHouz apartments are located in key central neighbourhoods

</p>
<div class="flex gap-4 bg-white my-10 shadow-lg" style={{height:"600px"}}>
<img src='/images/b.png'/>

       
    </div>
  </div> */}

</section>
        </>
    );
}
Corporate.layout = (page) => <Layout title="Corporate" children={page} />;
export default Corporate;
