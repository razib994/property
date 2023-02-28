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
       <h2 className="text-2xl md:text-3xl pb-2"> Every Stay Has A Story</h2>
<p className="pb-10">It’s hard to explain what makes FurHouz so special. Unless, of course, you’re one of our guests.</p>
        </div>
      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
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
            <div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div>            
        </SwiperSlide>
        <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div>  </SwiperSlide>
        <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
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
        <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div> </SwiperSlide>
                <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div> </SwiperSlide>
                <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div> </SwiperSlide>
                <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div> </SwiperSlide>
                <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div> </SwiperSlide>
                <SwiperSlide><div>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate in, expedita necessitatibus consequuntur dolorem est quae veniam libero tempore nobis numquam eligendi, quas illo error. Itaque minus tenetur aliquam?"
                <h3 className="text-xl font-bold pt-2">Name</h3>
                <p>Dhaka</p>
                </div> </SwiperSlide>
        
       
      </Swiper>
      </section>
    </>
  );
}
export default Testimonils;