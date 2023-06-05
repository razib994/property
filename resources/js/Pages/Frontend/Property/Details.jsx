import React from 'react';

const Details = ({property}) => {
    return (
        <>
        <div className="shadow-lg my-5 border border-sky-500 p-8 bg-blue-50">
             <h2 className="text-2xl font-bold border-b-2 pb-3">Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Property ID:</strong></div>
                    <div> {property.property_id}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Apartment Size:</strong></div>
                    <div> {property.sqf}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Bedroom:</strong></div>
                    <div> {property.bed}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Bathroom:</strong></div>
                    <div> {property.bath}</div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Balcony:</strong></div>
                    <div> {property.balcony}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Floor:</strong></div>
                    <div> {property.floor == 1 ? "1st": property.floor == 2 ? "2nd":property.floor == 3 ? "3rd":property.floor+'th' }  </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Unit No:</strong></div>
                    <div>  {property.unit_no} </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Unit Per Floor:</strong></div>
                    <div>  {property.unit_per_floor} </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Maid Room:</strong></div>
                    <div> {property.maid_room == 1 ? "Yes":"No" }</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Parking:</strong></div>
                    <div> {property.grage}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Year Built:</strong></div>
                    <div> {property.date}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Monthly Rent:</strong></div>
                    <div> {property.price}</div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <div> <strong>Service Charge:</strong></div>
                    <div> {property.service_charge}</div>
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
