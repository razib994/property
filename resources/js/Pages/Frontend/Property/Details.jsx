import React from 'react';

const Details = ({property}) => {
    return (
        <>
        <h2 className="text-2xl font-bold">Details</h2>
             <div className="shadow-lg my-5 border border-sky-500 p-8 bg-blue-50">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Property ID:</strong></div>
                    <div> {property.id}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Garage:</strong></div>
                    <div> {property.grage}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Price:</strong></div>
                    <div> {property.price}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Garage Size:</strong></div>
                    <div> Laundry</div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Property Size:</strong></div>
                    <div> {property.sqf}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Year Built:</strong></div>
                    <div> {property.date}</div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Bedrooms:</strong></div>
                    <div> {property.bed}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Property Type:</strong></div>
                    <div> {property.type.title}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Bathrooms:</strong></div>
                    <div> {property.bath}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Property Status:</strong></div>
                    <div> {property.publisher_status == 1 ? "Active":"Deactive"}</div>
                    </div>
                    
                   
     
                </div>
            </div>
        </>
    );
}

export default Details;
