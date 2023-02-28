import React from 'react';

const MyApartments = () => {
    return (
        <>
                  <section className=" mt-0 py-16">
        <div className="text-center items-center w-[92%] mx-auto my-10">
                <h2 className="text-4xl mb-3 font-bold space-y-4">Why people choose<br/> <span className='text-[#064d83]'>FurHouz</span></h2>
            </div>
            <div className="grid w-[90%] mx-auto grid-cols-2 gap-1 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className='text-center my-2'>
            <img src='furnished-icon/cities.png' className='w-16  md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Multiple Cities</h3>
                 <p className='text-sm md:text-lg'>With luxury apartments available across several areas, and more in the pipeline, you can be sure you’ll find an apartment close to where you want to be.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            <img src='furnished-icon/experties.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Local Experts</h3>
                 <p className='text-sm md:text-lg'>Our teams know the cities we operate in like the back of their hand. So, no matter how well you know the area, we are on hand to help you feel at home.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            <img src='furnished-icon/furnished.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Fully Furnished</h3>
                 <p className='text-sm md:text-lg'>Our range of apartment types means you can live with us through University and beyond into professional life – always guaranteed of the same quality and service.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            {/* <i class="uil uil-map-marker text-6xl"></i> */}
            <img src='furnished-icon/apartment.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Apartments for Life</h3>
                 <p className='text-sm md:text-lg'>Our range of apartment types means you can live with us through University and beyond into professional life – always guaranteed of the same quality and service.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            <img src='furnished-icon/utility.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>All Utilities Included</h3>
                 <p className='text-sm md:text-lg'>All our apartments come fully furnished to the highest standard, from cozy living furniture to comfy beds and top-brand appliances, all you need to do is move in.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            <img src='furnished-icon/Dedicated-Property-Manager.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Dedicated Property Manager</h3>
                 <p className='text-sm md:text-lg'>Every single tenant will have access to a dedicated property manager who will be available whenever you need help with any issues, or answer any questions.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            <img src='furnished-icon/award.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Award-winning</h3>
                 <p className='text-sm md:text-lg'>Looking to rent apartments that have won multiple awards? Look no further – we’ve won a ton of awards for our customer service and dedication to sustainability.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            <img src='furnished-icon/Quality-guaranteed.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Quality guaranteed</h3>
                 <p className='text-sm md:text-lg'>Whether you rent a studio in Manchester or a two-bed in Newcastle, you can be sure that our apartments are all furnished to the same high standards throughout.</p>
            </div>
            <div className='text-center mx-1 md:mx-5 my-2'>
            <img src='furnished-icon/design.png' className='w-16 md:w-24 m-auto'/>
                             <h3 className='text-xl md:text-2xl font-bold pt-6 pb-1'>Designed by Us</h3>
                 <p className='text-sm md:text-lg'>All of our apartments have been designed and built by our in-house teams based on the feedback we get from our tenants on how they want to live.</p>
            </div>
         
            {/* {properties && properties.map((item, i) => 
          <PropertyCard key={i} item={item}/>
          )} */}
       
           


</div>

</section> 
        </>
    );
}
MyApartments.layout = (page) => <Layout children={page} />;
export default MyApartments;
