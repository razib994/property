import React from 'react';
import PropertyTypeCard from './PropertyTypeCard';

const FeaturePropertyType = ({types}) => {
    return (
        <>
        <section className="bg-gray-50 py-5">
        <div className="text-center items-center w-[92%] mx-auto pt-5">
                <h2 className="text-4xl mb-3">Featured Property Types </h2>
                <p className="mb-5">Find All Type in Property </p>
            </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-[92%] mx-auto py-5 mb-5">
          {types && types.map((item, i) => 
        <div className="bg-blue-300 max-h-96 rounded-xl hover:shadow-xl overflow-hidden relative m-6" key={i}>
        <div className="absolute p-4 z-20 h-full w-full justify-between flex flex-col">
            <button className="p-2 backdrop-blur-sm bg-gray-800/30 w-12 h-12 justify-center items-center flex self-end rounded-xl border-gray-400/50 border hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
            </button>
            <div className="p-4 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-800/30 self-end border-gray-400/50 border">
                <h1 className="text-white font-bold text-3xl mb-10">
                    {item.title}
                </h1>
                <div className="flex justify-between">
                    <h3 className="text-white font-bold text-lg capitalize">
                        From $788
                    </h3>
                    <h3 className="text-white font-bold text-lg capitalize">
                        63 Property
                    </h3>
                </div>
            </div>
        </div>
        <img className="w-full" src={item.image} />
    </div>
)}  



</div>
</section>
        </>
    );
}

export default FeaturePropertyType;
