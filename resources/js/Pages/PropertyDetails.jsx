import React from 'react';
import Layout from './master/Layout';
import TopDetailsProperty from './Frontend/Property/TopDetailsProperty'
import { usePage } from '@inertiajs/inertia-react';

const PropertyDetails = ({property, similarProperty}) => {
    return (
        <>
        <section className='border-t-2'>
           <TopDetailsProperty property={property} similarProperty={similarProperty}/> 
           </section>
        
        </>
    );
}
PropertyDetails.layout = (page) => <Layout children={page} />;
export default PropertyDetails;
