import React from 'react';

const Description = ({description}) => {
    return (
        <div>
            <div className="shadow-lg my-6 border border-sky-500 p-8">
            <h1 className="text-3xl font-bold py-3">Description</h1>
            <p className="text-xl text-justify space-y-2">{description}</p>
            </div>
            
        </div>
    );
}

export default Description;
