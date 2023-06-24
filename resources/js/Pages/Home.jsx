import Layout from './master/Layout';
import React, {  useEffect, useState, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper React components
import MyApartments from './Frontend/MyApartments';
import OurLocations from './Frontend/OurLocations';
import HomeHeroBanner from './Frontend/HomeHeroBanner';
import LocalExpert from './Frontend/LocalExpert';
import Testimonils from './Frontend/Testimonils';
import RentApartments from './Frontend/RentApartments';
import { Head } from '@inertiajs/inertia-react';
let data = 
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fourhouz | Furnished Apartment Rental Expert in dhaka Bangladesh",
    "alternateName": "Furnished Apartment Rent in Dhaka | Fourhouz",
    "url": "https://furhouz.com/",
    "logo": "https://furhouz.com/logo/logo.png",
    "sameAs": [
      "https://www.facebook.com/furhouzes",
      "https://twitter.com/FurHouz",
      "https://www.instagram.com/furhouz",
      "https://www.youtube.com/channel/UCFyIF2NJM6zrVyPC0FomCCQ",
      "https://www.linkedin.com/in/nashrullahnash",
      "https://www.pinterest.com/furhouzbd",
      "https://soundcloud.com/furhouz"
    ]
  }
  let schema  = {
  

  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Furnished Apartment for Rent in Dhaka | Furhouz",
  "image": "https://furhouz.com/logo/logo.png",
  "@id": "https://furhouz.com/#website",
  "url": "https://furhouz.com/",
  "telephone": "+8801616171171",
  "priceRange": "1500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot: 19 & 20, Road: 113/A, Gulshan, Dhaka 1212",
    "addressLocality": "Dhaka",
    "postalCode": "1212",
    "addressCountry": "BD"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.790083469126188,
    "longitude": 90.41985473799677
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/furhouzes",
    "https://www.linkedin.com/in/nashrullahnash",
    "https://twitter.com/FurHouz",
    "https://www.instagram.com/furhouz",
    "https://www.youtube.com/channel/UCFyIF2NJM6zrVyPC0FomCCQ",
    "https://www.pinterest.com/furhouzbd",
    "https://soundcloud.com/furhouz"
  ] 
}

  
  
const  Home = ({types, properties, locations, banners, totalCount}) =>{
  return (
    <>
    <Head>
  <title>Furnished Apartment for Rent in Dhaka | Furhouz </title>
  <meta property="og:title" content="Furnished Apartment for Rent in Dhaka | Furhouz"/>
<meta property="og:description" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
<meta name="keywords" content="Furnished Apartment for Rent in Dhaka, Furhouz, Furnished Apartment Rent in Dhaka, Furnished Apartment for Rent in BD, Furnished Apartment for Rent in Bangladesh, Furnished Apartment in dhaka"/>
<meta property="og:image" content="https://furhouz.com/logo/logo.png"/>
<meta property="og:url" content="https://furhouz.com/"/>

<meta name="twitter:title" content="Furnished Apartment for Rent in Dhaka | Furhouz"/>
<meta name="twitter:description" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
<meta name="twitter:url" content="https://furhouz.com/log/o/logo.png"/>
<meta name="twitter:card" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  /> 
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}></script>

</Head>

    {/* <HomeBanner banners={banners}/> */}
    <HomeHeroBanner locations={locations}/>
    <MyApartments/>
   {/* <HelpPeople/> */}
   <OurLocations locations={locations}/>
   <LocalExpert/>
   <Testimonils/>
   <RentApartments/>
   <section className='py-10 '>
           	<div class=" w-[86%]  md:w-[80%] mx-auto rounded-md" >
		<div class=" mx-auto text-left">
			<div class="grid grid-cols-1 ">
				<div class=" cover w-full py-4 px-6 md:px-5 text-center md:text-left lg:text-left xl:text-left">
					<h1 class="text-xl md:text-2xl font-bold mb-1  text-center text-gray text-[#064d83]">Furnished Apartment Rent in Dhaka</h1>
					<p class=" mb-2 text-gray text-justify">Most of the tenants find it difficult to move their furniture and household items while shifting to a new place. You can get rid of this hassle by renting a furnished apartment. In a big city like Dhaka, it’s not that easy to find an apartment that fulfills all of your requirements. </p>
          <p className='text-justify'>Particularly, foreigners, tourists, and embassy people face a lot of difficulties while looking for apartment rent in Dhaka. Thankfully, you have come to the right place. <strong><i>“FurHouz”</i></strong> can make it easy for you. It’s a dedicated Furnished Apartment Rent Provider in Dhaka. We assure you that you are going to find the apartment that you are looking for. Let me take you forward on this. </p>
				</div>
        <div class=" cover w-full py-2 px-6 md:px-5 text-center md:text-left lg:text-left xl:text-left">
					<h2 class="text-xl md:text-2xl font-bold mb-2 text-center text-gray text-[#064d83]">What Is A Furnished Apartment?</h2>
					<p class=" mb-3 text-gray text-justify">A furnished apartment comes fully equipped with furniture, appliances, and other amenities. Therefore, you don't have to worry about transporting your own furniture. That will save you time and money. Furnished apartments are the best option for people who are moving to Dhaka temporarily. If you don't want to buy new furniture, a furnished apartment will fulfill your needs.  </p>
          <p className='text-justify'>Sometimes property dealers advertise their apartments as furnished apartments but don’t offer proper facilities. "FurHouz" is pretty special on that note. We’re committed to our words. You are going to enjoy all the facilities that you expect from a furnished house. Would you like to get more information on that? Here you go.  </p>
				</div>

        <div class=" cover w-full pt-3 px-6 md:px-5 text-center md:text-left lg:text-left xl:text-left">
					<h2 class="text-xl md:text-2xl font-bold mb-1 text-center text-gray text-[#064d83]">Special Facilities of Furnished Apartment Rent in Dhaka</h2>
					<p class=" mb-5 text-gray text-justify">Renting a furnished apartment will be ideal both for short-term and long-term rentals. Here are some special facilities that you can expect to have in a furnished apartment.</p>
				</div>

				</div>
			</div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  md:hidden"
      >
        <SwiperSlide><div class="p-14">
        
        <a class="text-md font-bold sm:text-md md:text-md">Furniture</a>
        <p class="text-sm text-black text-justify">This is the most obvious feature of a furnished apartment. From the living room to the bedroom, you'll find everything you need to live comfortably. This includes sofas, chairs, tables, beds, dressers, and more. Are you thinking about the quality of that furniture? Well, those types of furniture are usually high-quality, functional, and stylish.</p>
       
      </div></SwiperSlide>
        <SwiperSlide>
        <div class="p-14">
        
        <a class="text-md font-bold sm:text-md md:text-md">Appliances</a>
        <p class="text-sm text-black text-justify">Fully Furnished apartments come with a wide range of home appliances. It includes a refrigerator, stove, microwave, dishwasher, washer, and dryer. Having these appliances in your newly rented house will save you a decent amount of money. There is no hassle to buy them yourself.</p>
       
      </div>
        </SwiperSlide>
        <SwiperSlide><div class="p-14">
        
        <a class="text-md font-bold sm:text-md md:text-md">Utilities</a>
        <p class="text-sm text-black text-justify">In a furnished apartment, most of the utility bills are included with the rent. Therefore, you don’t have to worry about paying separate bills for electricity, water, gas, or internet. However, you should check the lease to see which bills are included along with the rental cost. </p>
       
      </div></SwiperSlide>
        <SwiperSlide><div class="p-14">
        
        <a class="text-md font-bold sm:text-md md:text-md">Maid Service</a>
        <p class="text-sm text-black text-justify">Some furnished apartments offer maid services. It offers tenants regular cleaning of the apartment, changing linens, and restocking supplies. It will be a great way to keep your living space tidy. Point to be noted that you may not get this facility as all furnished apartments</p>
       
      </div></SwiperSlide>
        <SwiperSlide><div class="p-14">
        
        <a class="text-md font-bold sm:text-md md:text-md">Security</a>
        <p class="text-sm text-black text-justify">While looking for a new apartment, most tenants are conscious of security. Furnished apartments always offer proper security features to keep you safe. You are going to get secure entrances, surveillance cameras, and alarms. Moreover, many furnished apartment buildings have security staff on-site to monitor the property.</p>
       
      </div></SwiperSlide>
        <SwiperSlide><div class="p-14">
        
        <a class="text-md font-bold sm:text-md md:text-md">Parking</a>
        <p class="text-sm text-black text-justify">Do you have a car? Well, you are going to get car parking facilities. In a furnished apartment, you will get an assigned parking spot in a garage. This facility will give you peace of mind. Also, it will save you from the hassle of searching for parking on the street.</p>
       
      </div></SwiperSlide>
       
        
      </Swiper>
      <div class="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-4">
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 hidden md:block">
        
        <a class="text-md font-bold sm:text-md md:text-md">Furniture</a>
        <p class="text-sm text-black text-justify">This is the most obvious feature of a furnished apartment. From the living room to the bedroom, you'll find everything you need to live comfortably. This includes sofas, chairs, tables, beds, dressers, and more. Are you thinking about the quality of that furniture? Well, those types of furniture are usually high-quality, functional, and stylish.</p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 hidden md:block">
        
        <a class="text-md font-bold sm:text-md md:text-md">Appliances</a>
        <p class="text-sm text-black text-justify">Fully Furnished apartments come with a wide range of home appliances. It includes a refrigerator, stove, microwave, dishwasher, washer, and dryer. Having these appliances in your newly rented house will save you a decent amount of money. There is no hassle to buy them yourself.</p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 hidden md:block">
        
        <a class="text-md font-bold sm:text-md md:text-md">Utilities</a>
        <p class="text-sm text-black text-justify">In a furnished apartment, most of the utility bills are included with the rent. Therefore, you don’t have to worry about paying separate bills for electricity, water, gas, or internet. However, you should check the lease to see which bills are included along with the rental cost. </p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 hidden md:block">
        
        <a class="text-md font-bold sm:text-md md:text-md">Maid Service</a>
        <p class="text-sm text-black text-justify">Some furnished apartments offer maid services. It offers tenants regular cleaning of the apartment, changing linens, and restocking supplies. It will be a great way to keep your living space tidy. Point to be noted that you may not get this facility as all furnished apartments</p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 hidden md:block">
        
        <a class="text-md font-bold sm:text-md md:text-md">Security</a>
        <p class="text-sm text-black text-justify">While looking for a new apartment, most tenants are conscious of security. Furnished apartments always offer proper security features to keep you safe. You are going to get secure entrances, surveillance cameras, and alarms. Moreover, many furnished apartment buildings have security staff on-site to monitor the property.</p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 hidden md:block">
        
        <a class="text-md font-bold sm:text-md md:text-md">Parking</a>
        <p class="text-sm text-black text-justify">Do you have a car? Well, you are going to get car parking facilities. In a furnished apartment, you will get an assigned parking spot in a garage. This facility will give you peace of mind. Also, it will save you from the hassle of searching for parking on the street.</p>
       
      </div>
    </div>
    <div class=" w-full py-6 px-2 md:px-2 text-center md:text-left lg:text-left xl:text-left mt-2">
					<h2 class="text-md md:text-md font-bold mb-6 text-gray text-left md:text-center ">Gym & Fitness</h2>
          <p class="text-sm text-black text-justify">Are you a health-conscious person? Renting a furnished apartment in Dhaka will inspire you to stay fit. Are you wondering how is that possible? Alright, mostly furnished apartments offer fitness facilities. You can expect to have a gym or and swimming pool. These amenities can make it easy to maintain a healthy lifestyle. <br></br><br></br>

Is there still any doubt left in your mind about why you should rent a furnished apartment in Dhaka? If you have any rental queries, feel free to contact us. Our support team will assist you to make the best decision. However, you might be thinking about the location. Let me inform you of 3 prime locations that you can choose according to your convenience. </p>
				</div>

    <div class=" w-full py-1 px-2 md:px-2 text-center md:text-left lg:text-left xl:text-left mt-1">
					<h2 class="text-xl md:text-2xl text-center font-bold mb-2 text-gray text-[#064d83]">Prime Location to Rent Furnished Apartment in Dhaka</h2>
					<p class=" mb-3 text-gray">Fully Furnished apartments are often located in desirable areas. It will be convenient for tourists and foreigners to explore new surroundings. Here’s the list of the 3 most attractive places to rent an apartment in Dhaka city. </p>
				</div>

        <div class="grid grid-cols-12  gap-x-8 gap-y-2">
      
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 shadow-lg p-5 rounded-lg">
      {/* item.slug == 'gulshan' ? '' : item.slug == 'banani' ? '':item.slug == 'baridhara'? '':item.slug =='bashundhara' ? 'furnished-apartment-for-rent-in-bashundhara':'' */}
      <h3><a href={route("frontend.area", {
					location: 'furnished-apartment-for-rent-in-gulshan',
				})}  class="text-lg font-bold sm:text-md md:text-md text-[#064d83]">Furnished Apartment for Rent in Gulshan </a></h3>
        <p class="text-sm text-black text-justify">Gulshan is the most luxurious place to choose when looking for a place to stay in Dhaka. Roads, buildings, and infrastructures are highly developed here. It’s a highly secure place. 29 resident embassies are located in Gulshan. If you are working in an embassy, Gulshan will be the most suitable place for you. Recreation facilities are also available here. Parks and clubs are available to make your leisure moment enjoyable. </p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 shadow-lg p-5 rounded-lg">
        
      <h3><a href={route("frontend.area", {
					location: 'furnished-apartment-for-rent-in-banani',
				})}   class="text-lg font-bold sm:text-md md:text-md text-[#064d83]">Furnished Apartment for Rent in Banani </a></h3>
        <p class="text-sm text-black text-justify">Are you looking for a luxurious apartment rent in Dhaka at a comparably lower price than in Gulshan? Banani will be the ideal option for you. You can get all the facilities of living in an elite area. It’s connected with Gulshan. It’s only a matter of a short time to move from Banani to Gulshan. Proper security, planned roads, and convenient transportation have made Banani a demandable place for the tenant. </p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 shadow-lg p-5 rounded-lg">
        
    <h3> <a href={route("frontend.area", {
					location: 'furnished-apartment-for-rent-in-baridhara-diplomatic-zone',
				})}   class="text-lg font-bold sm:text-md md:text-md text-[#064d83]">Furnished Apartment for Rent in Baridhara Diplomatic Zone</a></h3>
        <p class="text-sm text-black text-justify">Being a dedicated diplomatic zone, Baridhara is the most secure place to live in Dhaka. If you want to stay in a secure environment, you can choose this place without any hesitation. Moreover, the area is totally free from noise and vehicle horns. The green zone has made it a sustainable area. Parks and clubs are available for recreation. Overall, you can fulfill all of your expectations. It will be best for tourists and foreigners. <br></br><br></br>


 </p>
       
      </div>
      
    </div>
    
    <div class=" w-full py-6 px-2 md:px-2 text-center md:text-left lg:text-left xl:text-left mt-2">
					
          <p class="text-sm text-black text-justify">At this stage, you should have got in-depth knowledge about Furnished Apartment Rent in Dhaka. Now, you know whether you should rent a furnished apartment or not. You can have a look at our rental listings to get the best apartments in your desired area. If you want to rent an apartment, contact our team to get rental assistance. It will be a win-win situation both for tenants and owners. Good luck to you!
           </p>
				</div>


	</div> 
    </section>
  
  </>
  )
}
Home.layout = (page) => <Layout title="Home" children={page}  />;
export default Home;