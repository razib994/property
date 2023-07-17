import React from 'react';

const Feature = ({featurese}) => {
    return (
        <>
            <div className="shadow-lg my-5 border border-sky-500 p-8">
                <h2 className="text-2xl font-bold">Features & Amenites</h2>
                <p className='py-2'>The FurHouz standard
Working, relaxing, and living. Our spaces have all the
essentials you need for your stay</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                    {featurese && featurese.map((item, key) => 
                     <div className='flex'> <img className='mr-2 my-2' src={item.ferature.icon} width={20} height={20} />  {item.ferature.feature_name}</div>
                    )}
                   
                    {/* <div><i className="uil uil-check-circle"></i> Laundry</div>
                    <div><i className="uil uil-check-circle"></i> Lawn</div>
                    <div><i className="uil uil-check-circle"></i> Microwave</div>
                    <div><i className="uil uil-check-circle"></i> Sauna</div>
                    <div><i className="uil uil-check-circle"></i> Swimming Pool</div>
                    <div><i className="uil uil-check-circle"></i> WiFi</div>
                    <div><i className="uil uil-check-circle"></i> Window Coverings</div> */}
     
                </div>
            </div>
        </>
    );
}

export default Feature;
