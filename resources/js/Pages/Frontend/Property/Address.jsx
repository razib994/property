import React from 'react';

const Address = ({property}) => {
    return (
        <>
             <div className="shadow-lg my-5 border border-sky-500 p-8">
                <h2 className="text-2xl font-bold">Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                    <div> <strong>Road</strong></div>
                    <div> {property.address}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                    <div> <strong>Postal Code</strong></div>
                    <div> {property.zip_code}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                    <div> <strong>Area</strong></div>
                    <div> {property.location.location_name}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                    <div> <strong>City</strong></div>
                    <div> {property.city }</div>
                    </div>
                    
                    {/* <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                    <div> <strong>State/county</strong></div>
                    <div> {property.country}</div>
                    </div> */}
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                    <div> <strong>Country</strong></div>
                    <div> {property.country}</div>
                    </div>
                    
                   
     
                </div>
            </div>
        </>
    );
}

export default Address;
