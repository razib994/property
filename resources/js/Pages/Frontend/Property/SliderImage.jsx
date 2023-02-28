import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const SliderImage = ({image_galleries}) =>{
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    {}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
       {image_galleries && image_galleries.map((item, key) => 
       <SwiperSlide key={key}> 
       <img src={item.images} />
     </SwiperSlide>
       )}
          
        
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {image_galleries && image_galleries.map((item, key) => 
        <SwiperSlide key={key}>
           <img src={item.images} />
        </SwiperSlide>
        )}
        
      </Swiper>
    </>
  );
}
export default SliderImage;

