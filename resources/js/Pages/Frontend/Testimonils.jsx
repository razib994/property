import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import './../../../../public/css/custom.css';



// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper';


   
const Testimonils = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <>
    <section className="pb-24 mx-auto w-[80%] testimonils">
        <div>
       <h2 className="text-2xl md:text-3xl pb-2 text-[#064d83]"> Every Stay Has A Story</h2>
<p className="pb-10">It’s hard to explain what makes FurHouz so special. Unless, of course, you’re one of our guests.</p>
        </div>
      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        freeMode={true}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper hidden md:block lg:block xl:block"
      >
           
        <SwiperSlide>
            <div >
            “FurHouz’s management is very good, professional and very accommodating. As for the apartment, they provided good options according to my preference and choice of locations, and I got a great apartment by the way. Overall, their service is wonderful, I’m really happier”.
                <h3 className="text-xl font-bold pt-2">Hamzari Sabil,</h3>
                <p>Brunei Embassy, Dhaka.</p>
                </div>            
        </SwiperSlide>
        <SwiperSlide><div className="h-25vh">
               “Loved everything about FurHouz. The staff made me feel at home. Would definitely recommend to everyone looking for a home away from home”
                <h3 className="text-xl font-bold pt-2">Wubin,</h3>
                <p>Staller Technology PTE.</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
        “Very clean, spacious and modern furnished apartment, with everything you need for a trouble-free stay. Reliable and comfortable stay here”.
                <h3 className="text-xl font-bold pt-2">Christian Muller,</h3>
                <p>Germany, Businessman.</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
        “Apartments are comfortable, staff is very friendly and helpful. Whenever we had a specific request, the response was positive and swift. Highly recommended for your business trips or long term stay in Dhaka”.

                <h3 className="text-xl font-bold pt-2">Johanne Eriksen Saltnes,</h3>
                <p>Intern – Norway Embassy, Dhaka</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
        "Clean, well-maintained, condo in a professionally run building. Everything you need is here. I had a very nice stay here and would recommend it to anyone"
                <h3 className="text-xl font-bold pt-2">Uma Devi,</h3>
                <p>Indian, Fichtner Consulting Engineers.</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
                "I had a great stay at FurHouz’s apartment. Apartment is very clean, pics are accurate. Would happily stay there again or recommend to others. Great central location in Dhaka, secure building with very helpful concierge staff, and easy to communicate with and always replied very quickly"
                <h3 className="text-xl font-bold pt-2">Raja Sockalingan,</h3>
                <p>Singapore, IE – MRT 5.</p>
                </div>  </SwiperSlide>
                
        
      </Swiper>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper md:hidden lg:hidden xl:hidden"
      >
        <SwiperSlide><div >
            “FurHouz’s management is very good, professional and very accommodating. As for the apartment, they provided good options according to my preference and choice of locations, and I got a great apartment by the way. Overall, their service is wonderful, I’m really happier”.
                <h3 className="text-xl font-bold pt-2">Hamzari Sabil,</h3>
                <p>Brunei Embassy, Dhaka.</p>
                </div>    </SwiperSlide>
                <SwiperSlide><div className="h-25vh">
               “Loved everything about FurHouz. The staff made me feel at home. Would definitely recommend to everyone looking for a home away from home”
                <h3 className="text-xl font-bold pt-2">Wubin,</h3>
                <p>Staller Technology PTE.</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
        “Very clean, spacious and modern furnished apartment, with everything you need for a trouble-free stay. Reliable and comfortable stay here”.
                <h3 className="text-xl font-bold pt-2">Christian Muller,</h3>
                <p>Germany, Businessman.</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
        “Apartments are comfortable, staff is very friendly and helpful. Whenever we had a specific request, the response was positive and swift. Highly recommended for your business trips or long term stay in Dhaka”.

                <h3 className="text-xl font-bold pt-2">Johanne Eriksen Saltnes,</h3>
                <p>Intern – Norway Embassy, Dhaka</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
        "Clean, well-maintained, condo in a professionally run building. Everything you need is here. I had a very nice stay here and would recommend it to anyone"
                <h3 className="text-xl font-bold pt-2">Uma Devi,</h3>
                <p>Indian, Fichtner Consulting Engineers.</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
                "I had a great stay at FurHouz’s apartment. Apartment is very clean, pics are accurate. Would happily stay there again or recommend to others. Great central location in Dhaka, secure building with very helpful concierge staff, and easy to communicate with and always replied very quickly"
                <h3 className="text-xl font-bold pt-2">Raja Sockalingan,</h3>
                <p>Singapore, IE – MRT 5.</p>
                </div>  </SwiperSlide>
        
       
      </Swiper>
      </section>
    </>
  );
}
export default Testimonils;