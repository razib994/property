import React from 'react';
import Advanced from './Frontend/Advanced';
import PropertyCard from './Frontend/PropertyCard';
import Layout from './master/Layout';
import Gulshan from './Frontend/location/Gulshan';
import Banani from './Frontend/location/Banani';
import Baridhara from './Frontend/location/Baridhara';

const LocationProperty = ({properties, locations, types, location_name=""}) => {
    return (
        <>
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
