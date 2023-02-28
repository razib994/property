import React from 'react';

const Feature = ({features}) => {
    return (
        <>
            <div className="shadow-lg my-5 border border-sky-500 p-8">
                <h2 className="text-2xl font-bold">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                    {features && features.map((item, key) => 
                     <div><i className="uil uil-check-circle"></i> {item.ferature.feature_name}</div>
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
