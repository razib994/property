import React from 'react';
import PropertyCard from '../PropertyCard';

const Index = () => {
    return (
        <>
        <div className="p-8 shadow my-6 border">
            <h2 className="text-3xl font-bold py-3"> Similar Property</h2>
     
        <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            </div>
            </div>
        </>
    );
}

export default Index;
