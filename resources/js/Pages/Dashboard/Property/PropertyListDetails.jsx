import React from 'react';
import LayoutDashboard from '../LayoutDashboard';
import Overview from '../../Frontend/Property/Overview';
import Address from '../../Frontend/Property/Address';
import Feature from '../../Frontend/Property/Feature';
import Details from '../../Frontend/Property/Details';
const PropertyListDetails = ({property}) => {
    return (
        <>
            <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
           
            <div class="w-full md:w-3/12 md:mx-2">
            
                <div class="bg-white p-3 border-t-4 border-green-400">
                    {/* <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src={property.image}
                            alt=""/>
                    </div> */}
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{property.title}  </h1>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1"> {property.price} BDT </h1>
                    
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">{property.description}</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto">
                                {property.status == 1 ? ( <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>):( <span class="bg-red-500 py-1 px-2 rounded text-white text-sm">Deactive</span>) }
                               
                            </span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Publisher Date: </span>
                            <span class="ml-auto">{property.date}</span>
                        </li>
                    </ul>
                </div>
               
                <div class="my-4"></div>
               
                <div class="bg-white p-3 hover:shadow">
                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span class="text-green-500">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>Gallery Image</span>
                    </div>
                    <div class="grid grid-cols-3">
                        {property.image_galleries && property.image_galleries.map((i, k) =>
                        <div class="text-center my-2" key={k}>
                        <img class="h-16 w-16 rounded-full mx-auto"
                            src={i.images}
                            alt=""/>
                   
                    </div>
                        )}
                        
                        
                    </div>
                </div>
               
            </div>
            
            <div class="w-full md:w-9/12 md:mx-2">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  W-[100%] ">
                <div className="col-span-2">
                    <Overview property = {property}/>
                    {/* <Description description = {property.description}/> */}
                    <Address property = {property}/>
                    <Details property = {property}/>
                    <Feature features = {property.features} />
                    {/* <MapSection map_link = {property.map_link}/> */}
                    {/* <RequestFrom id={property.id} errors={errors} location={property.location} title={property.title}/> */}
                   
                   
                    {/* <VideoSection video_link={property.video_link}/> */}
                   
                    {/* <Index/> */}
                </div>
                <div className="px-2 md:px-10 hidden mb:block lg:block xl:block">
                    {/* <div className={`text-gray-900 ${showTopBtn ? showTopBtn :""}`}> */}
                {/* <RequestFrom id={property.id} errors={errors} location={property.location} title={property.title}/>
                {message.success && <span className='bg-green-700 text-white p-4 rounded-lg font-bold ml-4'> {message.success}</span>}
                 */}
                {/* </div> */}
                </div>
            </div>
              
            </div>
        </div>
    </div>
        </>
    );
}
PropertyListDetails.layout = (page) => <LayoutDashboard children={page} />;
export default PropertyListDetails;
