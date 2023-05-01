import React from 'react';
import RequestFrom from './Frontend/Property/RequestFrom';
import Layout from './master/Layout';

const Request = () => {
    return (
        <>
        <div className='w-[90%] md:w-[35%] xl:w-[35%] lg:w-[35%] mx-auto grid grid-cols-1 py-16 '>
           
            <div><RequestFrom/></div>
            
        </div>
            
        </>
    );
}
Request.layout = (page) => <Layout title="Request" children={page} />;
export default Request;
