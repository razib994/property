import React from 'react';
import Advanced from './Frontend/Advanced';
import PropertyCard from './Frontend/PropertyCard';
import Layout from './master/Layout';
import Gulshan from './Frontend/location/Gulshan';
import Banani from './Frontend/location/Banani';
import Baridhara from './Frontend/location/Baridhara';
import { Head } from '@inertiajs/inertia-react';
import Bashundhara from './Frontend/location/Bashundhara';
import Pagination from './Frontend/pagination/Pagination';
import LuxuryApartment from './Frontend/location/LuxuryApartment';

let gulshan = 
{
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Furnished Apartment for Rent in Gulshan Dhaka | Furhouz",
  "image": "https://furhouz.com/location/gulshan.png",
  "description": "Find your ideal furnished apartment for rent in Gulshan. Browse 100+ listings for high-quality, fully equipped apartments with modern amenities in Gulshan area.",
  "brand": {
    "@type": "Brand",
    "name": "Furhouz"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://furhouz.com/area/furnished-apartment-for-rent-in-gulshan",
    "priceCurrency": "USD",
    "price": "1500",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "579"
  }
}
  let banani = 
  {
    "@context": "https://schema.org/", 
    "@type": "Product", 
    "name": "Furnished Apartment for Rent in Banani Dhaka | Furhouz",
    "image": "https://furhouz.com/location/banani.png",
    "description": "Explore furnished apartments for rent in Banani. Discover comfortable living spaces in the desirable Banani area. Start your search for a furnished apartment today!",
    "brand": {
      "@type": "Brand",
      "name": "Furhouz"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://furhouz.com/area/furnished-apartment-for-rent-in-banani",
      "priceCurrency": "USD",
      "price": "1500",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "618"
    }
  }

  let baridhara = 
  {
    "@context": "https://schema.org/", 
    "@type": "Product", 
    "name": "Furnished Apartment for Rent in Baridhara and Baridhara Diplomatic Zone",
    "image": "https://furhouz.com/location/baridhara.png",
    "description": "Find luxurious furnished apartments for rent in Baridhara and Baridhara Diplomatic Zone. Explore our exclusive listings and discover elegant living spaces with modern facilities",
    "brand": {
      "@type": "Brand",
      "name": "Furhouz"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://furhouz.com/area/furnished-apartment-for-rent-in-baridhara-diplomatic-zone",
      "priceCurrency": "USD",
      "price": "1800",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "439"
    }
  }

const LocationProperty = ({properties, locations, types, location_name=""}) => {
  
    
    return (
        <>
        {location_name == 'Gulshan' ? ( <Head>
  <title>Furnished Apartment for Rent in Gulshan Dhaka | Furhouz</title>
  <meta name="title" content="Furnished Apartment for Rent in Gulshan Dhaka | Furhouz"/>
  <meta name="description" content="Find your ideal furnished apartment for rent in Gulshan. Browse 100+ listings for high-quality, fully equipped apartments with modern amenities in Gulshan area."/>
  <meta name="keywords" content="Furnished Apartment for Rent in gulshan , Furnished Apartment for Rent in gulshan, Furnished Apartment for Rent in gulshan dhaka, Furnished Apartment Rent in gulshan dhaka, Furnished Apartment in gulshan dhaka"/>
  
  <meta property="og:title" content="Furnished Apartment for Rent in Gulshan Dhaka | Furhouz"/>
<meta property="og:description" content="Find your ideal furnished apartment for rent in Gulshan. Browse 100+ listings for high-quality, fully equipped apartments with modern amenities in Gulshan area."/>
<meta property="og:image" content="https://furhouz.com/location/gulshan.png"/>
<meta property="og:url" content="https://furhouz.com/area/furnished-apartment-for-rent-in-gulshan/"/>

<meta name="twitter:title" content="Furnished Apartment for Rent in Gulshan Dhaka | Furhouz"/>
<meta name="twitter:description" content="Find your ideal furnished apartment for rent in Gulshan. Browse 100+ listings for high-quality, fully equipped apartments with modern amenities in Gulshan area."/>
<meta name="twitter:url" content="https://furhouz.com/location/gulshan.png"/>
<meta name="twitter:card" content="Find your ideal furnished apartment for rent in Gulshan. Browse 100+ listings for high-quality, fully equipped apartments with modern amenities in Gulshan area."/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gulshan) }}></script>
</Head>): location_name == 'Banani' ? ( <Head>
  <title>Furnished Apartment for Rent in Banani Dhaka | Furhouz </title>
  <meta name="title" content="Furnished Apartment for Rent in Banani Dhaka | Furhouz"/>
  <meta name="description" content="Explore furnished apartments for rent in Banani. Discover comfortable living spaces in the desirable Banani area. Start your search for a furnished apartment today!"/>
  <meta name="keywords" content="Furnished Apartment for Rent in banani , Furnished Apartment for Rent in banani, Furnished Apartment for Rent in banani dhaka, Furnished Apartment Rent in banani dhaka, Furnished Apartment in banani dhaka"/>
     
  <meta property="og:title" content="Furnished Apartment for Rent in Banani Dhaka | Furhouz"/>
<meta property="og:description" content="Explore furnished apartments for rent in Banani. Discover comfortable living spaces in the desirable Banani area. Start your search for a furnished apartment today!"/>
<meta property="og:image" content="https://furhouz.com/location/banani.png"/>
<meta property="og:url" content="https://furhouz.com/area/furnished-apartment-for-rent-in-banani"/>

<meta name="twitter:title" content="Furnished Apartment for Rent in Banani Dhaka | Furhouz"/>
<meta name="twitter:description" content="Explore furnished apartments for rent in Banani. Discover comfortable living spaces in the desirable Banani area. Start your search for a furnished apartment today!"/>
<meta name="twitter:url" content="https://furhouz.com/location/banani.png"/>
<meta name="twitter:card" content="Explore furnished apartments for rent in Banani. Discover comfortable living spaces in the desirable Banani area. Start your search for a furnished apartment today!"/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(banani) }}></script>
</Head>) : location_name == 'Baridhara' ? ( <Head>
  <title>Furnished Apartment for Rent in Baridhara and Baridhara Diplomatic Zone</title>
  <meta name="title" content="Furnished Apartment for Rent in Baridhara and Baridhara Diplomatic Zone"/>
  <meta name="description" content="Find luxurious furnished apartments for rent in Baridhara and Baridhara Diplomatic Zone. Explore our exclusive listings and discover elegant living spaces with modern facilities"/>
  <meta name="keywords" content="Furnished Apartment for Rent in Baridhara diplomatic zone  , Furnished Apartment for Rent in Baridhara diplomatic zone , Furnished Apartment for Rent in Baridhara diplomatic zone  dhaka, Furnished Apartment Rent in Baridhara diplomatic zone  dhaka, Furnished Apartment in Baridhara diplomatic zone  dhaka"/>
     
  <meta property="og:title" content="Furnished Apartment for Rent in Baridhara and Baridhara Diplomatic Zone"/>
<meta property="og:description" content="Find luxurious furnished apartments for rent in Baridhara and Baridhara Diplomatic Zone. Explore our exclusive listings and discover elegant living spaces with modern facilities"/>
<meta property="og:image" content="https://furhouz.com/location/baridhara.png"/>
<meta property="og:url" content="https://furhouz.com/area/furnished-apartment-for-rent-in-baridhara-diplomatic-zone"/>

<meta name="twitter:title" content="Furnished Apartment for Rent in Baridhara and Baridhara Diplomatic Zone"/>
<meta name="twitter:description" content="Find luxurious furnished apartments for rent in Baridhara and Baridhara Diplomatic Zone. Explore our exclusive listings and discover elegant living spaces with modern facilities"/>
<meta name="twitter:url" content="https://furhouz.com/location/baridhara.png"/>
<meta name="twitter:card" content="Looking for a furnished apartment for rent in Dhaka? 200+ verified listings available on here. Furhouz is the best Furnished Apartmen Rental Expert in Dhaka"/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(baridhara) }}></script>
</Head>) : location_name == 'Bashundhara' ? ( <Head>
  <title>Furnished Apartment for Rent in Bashundhara </title>
  <meta head-key="description" name="description" content="Discover your dream furnished apartment for rent in Bashundhara. Explore our listings and find the perfect living space in this vibrant community. " />
  <meta name="keywords" content="Furnished Apartment for Rent in Bashundhara , Furnished Apartment for Rent in Bashundhara , Furnished Apartment for Rent in Bashundhara dhaka, Furnished Apartment Rent in Bashundhara dhaka, Furnished Apartment in Bashundhara dhaka"/>

</Head>):(
  <Head>
  <title>Luxury Apartment Rent In Dhaka</title>
  <meta head-key="description" name="description" content="Discover your dream Luxury Apartment Rent In Dhaka. Explore our listings and find the perfect living space in this vibrant community. " />
  <meta name="keywords" content="Luxury Apartment Rent In Dhaka , Luxury Apartment Rent In Dhaka, Luxury Apartment Rent In Dhaka dhaka, Luxury Apartment Rent In Dhaka"/>

</Head>
)}
        
        <section className='bg-[#064d83] py-0.5'>
            <div className='w-[85%] mx-auto'>
         <Advanced locations={locations} types={types}/>
         </div>
         </section> 
            <section className="bg-slate-100  py-16 property">
        <div className="text-center items-center w-[92%] mx-auto pt-5">
                <h2 className="text-4xl mb-3">We've recently added some new properties. </h2>
                <p className="mb-5">
Find the perfect home for you. Search all available properties and find the one that suits your needs.</p>
            </div>
            <div className="grid w-[90%] mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            
            {properties.data.length > 0 ?(properties.data && properties.data.map((item, i) => 
            
          <PropertyCard key={i} item={item}/>
          )):(<div>No Found Result</div>) }
        
       
           


</div>
{console.log(location_name)}
<div className='mx-auto w-[90%] items-end justify-center'><Pagination links={properties.links} /></div>
{/* <div className="text-center items-center w-[92%] mx-auto pt-5">
<button className="p-2 border rounded-md bg-gray-800 text-white">Load More</button>
                
            </div> */}

            {location_name == 'Gulshan' ? (
          <Gulshan/> ):location_name == 'Banani' ? (
          <Banani/>) : location_name == 'Baridhara' ? (<Baridhara/>):location_name == 'bashundhara' ? (<Bashundhara/>):location_name == 'Luxury Apartments' ?(<LuxuryApartment/>): null }
</section>
        </>
    );
}
LocationProperty.layout = (page) => <Layout title="Location Search" children={page} />;
export default LocationProperty;
