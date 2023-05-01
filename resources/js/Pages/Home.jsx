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

const  Home = ({types, properties, locations, banners, totalCount}) =>{
  return (
    <>
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
					<h1 class="text-xl md:text-2xl font-bold mb-2 text-center text-gray text-[#064d83]">What Is A Furnished Apartment?</h1>
					<p class=" mb-3 text-gray text-justify">A furnished apartment comes fully equipped with furniture, appliances, and other amenities. Therefore, you don't have to worry about transporting your own furniture. That will save you time and money. Furnished apartments are the best option for people who are moving to Dhaka temporarily. If you don't want to buy new furniture, a furnished apartment will fulfill your needs.  </p>
          <p className='text-justify'>Sometimes property dealers advertise their apartments as furnished apartments but don’t offer proper facilities. "FurHouz" is pretty special on that note. We’re committed to our words. You are going to enjoy all the facilities that you expect from a furnished house. Would you like to get more information on that? Here you go.  </p>
				</div>

        <div class=" cover w-full pt-3 px-6 md:px-5 text-center md:text-left lg:text-left xl:text-left">
					<h1 class="text-xl md:text-2xl font-bold mb-1 text-center text-gray text-[#064d83]">Special Facilities of Furnished Apartment Rent in Dhaka</h1>
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
					<h1 class="text-md md:text-md font-bold mb-6 text-gray text-left md:text-center ">Gym & Fitness</h1>
          <p class="text-sm text-black text-justify">Are you a health-conscious person? Renting a furnished apartment in Dhaka will inspire you to stay fit. Are you wondering how is that possible? Alright, mostly furnished apartments offer fitness facilities. You can expect to have a gym or and swimming pool. These amenities can make it easy to maintain a healthy lifestyle. <br></br><br></br>

Is there still any doubt left in your mind about why you should rent a furnished apartment in Dhaka? If you have any rental queries, feel free to contact us. Our support team will assist you to make the best decision. However, you might be thinking about the location. Let me inform you of 3 prime locations that you can choose according to your convenience. </p>
				</div>

    <div class=" w-full py-1 px-2 md:px-2 text-center md:text-left lg:text-left xl:text-left mt-1">
					<h1 class="text-xl md:text-2xl text-center font-bold mb-2 text-gray text-[#064d83]">Prime Location to Rent Furnished Apartment in Dhaka</h1>
					<p class=" mb-3 text-gray">Fully Furnished apartments are often located in desirable areas. It will be convenient for tourists and foreigners to explore new surroundings. Here’s the list of the 3 most attractive places to rent an apartment in Dhaka city. </p>
				</div>

        <div class="grid grid-cols-12  gap-x-8 gap-y-2">
      
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 shadow-lg p-5 rounded-lg">
        
        <a class="text-lg font-bold sm:text-md md:text-md text-[#064d83]">Furnished Apartment for Rent in Gulshan </a>
        <p class="text-sm text-black text-justify">Gulshan is the most luxurious place to choose when looking for a place to stay in Dhaka. Roads, buildings, and infrastructures are highly developed here. It’s a highly secure place. 29 resident embassies are located in Gulshan. If you are working in an embassy, Gulshan will be the most suitable place for you. Recreation facilities are also available here. Parks and clubs are available to make your leisure moment enjoyable. </p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 shadow-lg p-5 rounded-lg">
        
        <a class="text-lg font-bold sm:text-md md:text-md text-[#064d83]">Furnished Apartment for Rent in Banani </a>
        <p class="text-sm text-black text-justify">Are you looking for a luxurious apartment rent in Dhaka at a comparably lower price than in Gulshan? Banani will be the ideal option for you. You can get all the facilities of living in an elite area. It’s connected with Gulshan. It’s only a matter of a short time to move from Banani to Gulshan. Proper security, planned roads, and convenient transportation have made Banani a demandable place for the tenant. </p>
       
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-1 sm:col-span-6 xl:col-span-4 shadow-lg p-5 rounded-lg">
        
        <a class="text-lg font-bold sm:text-md md:text-md text-[#064d83]">Furnished Apartment for Rent in Baridhara Diplomatic Zone</a>
        <p class="text-sm text-black text-justify">Being a dedicated diplomatic zone, Baridhara is the most secure place to live in Dhaka. If you want to stay in a secure environment, you can choose this place without any hesitation. Moreover, the area is totally free from noise and vehicle horns. The green zone has made it a sustainable area. Parks and clubs are available for recreation. Overall, you can fulfill all of your expectations. It will be best for tourists and foreigners. <br></br><br></br>


 </p>
       
      </div>
      
    </div>
    
    <div class=" w-full py-6 px-2 md:px-2 text-center md:text-left lg:text-left xl:text-left mt-2">
					
          <p class="text-sm text-black text-justify">At this stage, you should have got in-depth knowledge about Furnished Apartment Rent in Dhaka. Now, you know whether you should rent a furnished apartment or not. You can have a look at our rental listings to get the best apartments in your desired area. If you want to rent an apartment, contact our team to get rental assistance. It will be a win-win situation both for tenants and owners. Good luck to you!
           </p>
				</div>

{/* 
    <div class="w-full">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-3xl mt-10 tracking-tight text-[#064d83]">
			FAQ
		</h2>
		<p class="text-neutral-500 text-xl mt-3">
			Frequenty asked questions
		</p>
	</div>
	<div class="grid divide-y divide-neutral-200 mx-auto mt-8">
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What are the benefits of renting a furnished apartment?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
        Initial cost savings, convenient lifestyle, and the ability to move in without having to transport appliances are primary benefits of renting a furnished apartment.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What is the average rent for a furnished apartment in Dhaka?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
        On average, a furnished apartment in Dhaka can cost between BDT 70,000-200,000 per month.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Is the rent for a furnished apartment negotiable in Dhaka city?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
        Yes, the rent can be negotiable. If you are willing to sign a long-term lease, you can negotiate with the property owner.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I find a furnished apartment in Dhaka?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
        “FurHouz'' can assist you in finding a fully furnished apartment for rent in Dhaka. It’s a dedicated rental portal to assist tenants.
				</p>
			</details>
		</div>
	
	</div>
          </div> */}

	</div> 
    </section>
    {/* <Property properties = {properties}/> */}
    {/* <FeaturePropertyType types={types}/>
    <ExploreLocation locations={locations}/> */}
{/* <ImageGallery/> */}
 {/* <ListingCount totalCount={totalCount}/> */}
 {/* <div class="min-w-screen h-screen animated fadeIn faster fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
 <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
                        <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                        <p class="text-sm text-gray-500 px-8">Do you really want to delete your account?
                This process cannot be undone</p>    
        </div>
       
        <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
        </div>
      </div>
    </div> 
    </div> */}
  </>
  )
}
Home.layout = (page) => <Layout title="Home" children={page}  />;
export default Home;