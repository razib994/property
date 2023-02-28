import React from 'react';

const PropertyTypeCard = () => {
    return (
        <>
             <div className="card w-96 bg-base-100 shadow-md mx-5 my-5">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-24 rounded-full bg-red-300 flex justify-center items-center mx-auto">
  <i className="uil uil-home text-5xl"></i>
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
        </>
    );
}

export default PropertyTypeCard;
