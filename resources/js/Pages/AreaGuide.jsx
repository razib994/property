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

  
  
const  AreaGuide = ({ locations}) =>{
  return (
    <>
    <Head>
  <title>Furnished Apartment for Rent in Dhaka | Furhouz </title>
  <meta name="title" content="Furnished Apartment for Rent in Dhaka | Furhouz"/>
  <meta name="description" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
  <meta name="keywords" content="Furnished Apartment for Rent in Dhaka, Furhouz, Furnished Apartment Rent in Dhaka, Furnished Apartment for Rent in BD, Furnished Apartment for Rent in Bangladesh, Furnished Apartment in dhaka"/>
  
  <meta property="og:title" content="Furnished Apartment for Rent in Dhaka | Furhouz"/>
<meta property="og:description" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
<meta property="og:image" content="https://furhouz.com/logo/logo.png"/>
<meta property="og:url" content="https://furhouz.com/"/>
<meta name="twitter:title" content="Furnished Apartment for Rent in Dhaka | Furhouz"/>
<meta name="twitter:description" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
<meta name="twitter:url" content="https://furhouz.com/log/o/logo.png"/>
<meta name="twitter:card" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}></script>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}></script>

</Head>
   <OurLocations check={1} locations={locations}/>
   <RentApartments/>
  
  
  </>
  )
}
AreaGuide.layout = (page) => <Layout title="Area Guide" children={page}  />;
export default AreaGuide;