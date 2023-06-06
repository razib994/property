import React from 'react';
import Advanced from './Frontend/Advanced';
import PropertyCard from './Frontend/PropertyCard';
import Layout from './master/Layout';
import Gulshan from './Frontend/location/Gulshan';
import Banani from './Frontend/location/Banani';
import Baridhara from './Frontend/location/Baridhara';
import { Head } from '@inertiajs/inertia-react';

const LocationProperty = ({properties, locations, types, location_name=""}) => {
    
    return (
        <>
        {location_name == 'Gulshan' ? ( <Head>
  <title>100+ Furnished Apartment for Rent in Gulshan Dhaka</title>
  <meta head-key="description" name="description" content="Find your ideal furnished apartment for rent in Gulshan. Browse 100+ listings for high-quality, fully equipped apartments with modern amenities in Gulshan area." />
  <meta name="keywords" content="Furnished Apartment for Rent in gulshan , Furnished Apartment for Rent in gulshan, Furnished Apartment for Rent in gulshan dhaka, Furnished Apartment Rent in gulshan dhaka, Furnished Apartment in gulshan dhaka"/>

</Head>): location_name == 'Banani' ? ( <Head>
  <title>Furnished Apartment for Rent in Banani Dhaka </title>
  <meta head-key="description" name="description" content="Explore furnished apartments for rent in Banani. Discover comfortable living spaces in the desirable Banani area. Start your search for a furnished apartment today!" />
  <meta name="keywords" content="Furnished Apartment for Rent in banani , Furnished Apartment for Rent in banani, Furnished Apartment for Rent in banani dhaka, Furnished Apartment Rent in banani dhaka, Furnished Apartment in banani dhaka"/>

</Head>) : location_name == 'Baridhara' ? ( <Head>
  <title>Furnished Apartment for Rent in Baridhara and Baridhara Diplomatic Zone</title>
  <meta head-key="description" name="description" content="Find luxurious furnished apartments for rent in Baridhara and Baridhara Diplomatic Zone. Explore our exclusive listings and discover elegant living spaces with modern facilities" />
  <meta name="keywords" content="Furnished Apartment for Rent in Baridhara diplomatic zone , Furnished Apartment for Rent in Baridhara diplomatic zone , Furnished Apartment for Rent in Baridhara diplomatic zone dhaka, Furnished Apartment Rent in Baridhara diplomatic zone dhaka, Furnished Apartment in Baridhara diplomatic zone dhaka"/>

</Head>) :( <Head>
  <title>Furnished Apartment for Rent in Bashundhar a Dhaka </title>
  <meta head-key="description" name="description" content="Discover your dream furnished apartment for rent in Bashundhara. Explore our listings and find the perfect living space in this vibrant community. " />
  <meta name="keywords" content="Furnished Apartment for Rent in Bashundhara , Furnished Apartment for Rent in Bashundhara , Furnished Apartment for Rent in Bashundhara dhaka, Furnished Apartment Rent in Bashundhara dhaka, Furnished Apartment in Bashundhara dhaka"/>

</Head>)}
        
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

            
            {properties.length > 0 ?(properties && properties.map((item, i) => 
          <PropertyCard key={i} item={item}/>
          )):(<div>No Found Result</div>) }
       
           


</div>
<div className="text-center items-center w-[92%] mx-auto pt-5">
<button className="p-2 border rounded-md bg-gray-800 text-white">Load More</button>
                
            </div>

            {location_name == 'Gulshan' ? (
          <Gulshan/> ):location_name == 'Banani' ? (
          <Banani/>) : location_name == 'Baridhara' ? (<Baridhara/>): null }
</section>
        </>
    );
}
LocationProperty.layout = (page) => <Layout title="Location Search" children={page} />;
export default LocationProperty;
