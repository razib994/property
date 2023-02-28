import React from 'react';

const Overview = ({property}) => {
    return (
        <div>
            <div className="shadow-lg my-5 border border-sky-500 p-8">
            <div className="grid grid-cols-2 py-3">
                <div><h2 className="text-xl md:text-2xl font-bold"> Overview </h2></div>
                <div><h2 className="text-right text-xl md:text-2xl font-bold"> Property ID - {property.id} </h2></div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-6 w-full md:mx-auto md:items-center md:justify-center">
                <div className="basis-2/6 md:basis-1/6">
                <strong className="text-xl">Studio</strong><br/>{property.type.title}
                </div>
                <div className="basis-2/6 md:basis-1/6">
                <strong className="text-xrightl"><i className="uil uil-bed"></i> {property.bed}</strong><br/>Bedrooms
                </div>
                <div className="basis-2/6 md:basis-1/6">
                <strong className="text-xl"><i className="uil uil-bath"></i> {property.bath}</strong><br/>Bathroom
                </div>
                <div className="basis-2/6 md:basis-1/6">
                <strong className="text-xl"><i className="uil uil-car"></i> {property.grage}</strong><br/>Garage
                </div>
                <div className="md:basis-2/6">
                <strong className="text-xl"><i className="uil uil-0-plus"></i> {property.sqf} </strong><br/>Sq Ft
                </div>
                <div className="basis-2/6 md:basis-1/6">
                <strong className="text-xl"><i className="uil uil-calendar-alt"></i> {property.date}</strong><br/>Year Built

                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Overview;
