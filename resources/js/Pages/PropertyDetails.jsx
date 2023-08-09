import React from 'react';
import Layout from './master/Layout';
import TopDetailsProperty from './Frontend/Property/TopDetailsProperty'
import { usePage } from '@inertiajs/inertia-react';
import Advanced from './Frontend/Advanced';
import Tabs from './Frontend/Tabs';
var title = "";
const PropertyDetails = ({property, similarProperty, locations}) => {
    
    const {flash, errors} = usePage().props;
    title = property.slug;
    return (
        <>
        <section className='bg-[#064d83] py-0.5'>
        <div className=" w-[85%] mx-auto">
            <Advanced locations={locations} />
            </div>
            </section>
            <section >
               
           <TopDetailsProperty property={property} similarProperty={similarProperty} message={flash} errors={errors}/> 
           </section>
        
        </>
    );
}
PropertyDetails.layout = (page) => <Layout title={title} children={page} />;
export default PropertyDetails;
