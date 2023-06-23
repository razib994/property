import React from 'react';
import Layout from './master/Layout';

const SiteMap = () => {
    return (
        <>
         <section class="bg-white dark:bg-gray-900 border-t-2">
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex lg:items-center">
                    <div class="w-full space-y-12 my-16 ">
                        <div>
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Sitemap</h1>
                        <p className='mt-2 text-xl'>Find quick access to all apartments and content about Tabas</p>
                            <div class="mt-2">
                                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">
                            <div class="mt-4 md:mx-4 md:mt-0">
                                <p class="text-3xl font-semibold text-gray-700 capitalize dark:text-white">General Link</p>
<hr className='my-4'/>
<p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/" >Home</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/about" >About Us</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/contact" >Contact Us</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/faq">FAQ</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/privacy-policy" >Privacy Policy</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/terms-conditions" >Terms and Conditions</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/cookies" >Cookies Policy</a></p>
                            </div>
                        </div>

                       

                    </div>

                   
                </div>

                
            </div>
        </section>    
        </>
    );
}
SiteMap.layout=(page) => <Layout title="SiteMap" children={page}/>;
export default SiteMap;

