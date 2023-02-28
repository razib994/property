import React from 'react';
import ExplorePropertyCard from './ExplorePropertyCard';

const ExploreLocation = ({locations}) => {
    return (
        <>
             <section className="bg-gray-50 py-6">
             <div className="text-center items-center w-[92%] mx-auto pt-5 pb-6">
                <h2 className="text-4xl mb-3">Explore By Location </h2>
                <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
       
<div className=" gap-8 mx-auto w-[80%] grid grid-cols-1 md:grid-cols-3">
{locations && locations.map((item, i) => 
 <div className="">
 
     <div className='flex items-center justify-center hover:scale-110 overflow-hidden transition duration-700 ease-in-out' key={i}>
     <h2 className='absolute z-10 text-white text-center  bg-slate-600 bg-opacity-[0.5] px-24 py-10 font-bold text-2xl'>{item.location_name}</h2>
      <img className="mb-4" src={item.image} />
      </div>
     
    
     </div>
     )}
   {/* <div className='flex items-center justify-center' >
   <h2 className='absolute z-10 text-white text-center bg-slate-600 bg-opacity-[0.5] px-24 py-10 font-bold text-2xl'>dd</h2>
  <img className="mb-4" src="https://source.unsplash.com/random/2" />
  </div>
  <div className='flex items-center justify-center' >
   <h2 className='absolute z-10 text-white text-center bg-slate-600 bg-opacity-[0.5] px-24 py-10 font-bold text-2xl'>dd</h2>
  <img className="mb-4" src="https://source.unsplash.com/random/3" />
  </div>
  <img className="mb-4" src="https://source.unsplash.com/random/4" />
  <img className="mb-4" src="https://source.unsplash.com/random/5" />
  <img className="mb-4" src="https://source.unsplash.com/random/6" />
  <img className="mb-4" src="https://source.unsplash.com/random/7" />
  <img className="mb-4" src="https://source.unsplash.com/random/7" /> */}

 
</div>

</section>
        </>
    );
}

export default ExploreLocation;
