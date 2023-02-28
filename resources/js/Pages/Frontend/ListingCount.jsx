import React from 'react';

const ListingCount = ({totalCount}) => {
    return (
        <>
              <section className="bg-slate-100 py-20">
<div className="grid grid-cols-1 md:grid-cols-4 w-[80%] mx-auto text-center ">
  <div className="my-2">
    <h2 className="text-4xl font-bold py-3">{totalCount.totalProperty}+</h2>
    <p className="text-xl">Listing for Property</p>
  </div>
  <div className="my-2">
    <h2 className="text-4xl font-bold py-3">{totalCount.rentCount}+</h2>
    <p className="text-xl">Listing for rent</p>
  </div>
  <div className="my-2">
    <h2 className="text-4xl font-bold py-3">{totalCount.totalResponse}+</h2>
    <p className="text-xl">Total Response</p>
  </div>
  <div className="my-2">
    <h2 className="text-4xl font-bold py-3">{totalCount.total_user}+</h2>
    <p className="text-xl">Affiliate partners</p>
  </div>
</div>
</section> 
        </>
    );
}

export default ListingCount;
