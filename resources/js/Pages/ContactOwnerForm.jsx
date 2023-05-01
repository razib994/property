import React from 'react';
import Layout from './master/Layout';

const ContactOwnerForm = () => {
    return (
        <>
            <div class="min-h-screen bg-purple-400 flex justify-center items-center">
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 w-[90%] md:w-[60%]">
        <h2 className='text-3xl font-bold text-[#064d83]'>Partner with us</h2>
    <p className='pt-2'>Enquire About This Property</p>
             <form class="py-3 justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <input type="name" name="name" id="name" placeholder="Full Name" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <input type="text" name="phone" id="phone" placeholder="Phone" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                         <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <input type="email" name="email" id="email" placeholder="Email" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <input type="text" name="city" id="city" placeholder="City" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                         <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <input type="text" name="area" id="area" placeholder="Area" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <input type="text" name="address" id="address" placeholder="Address" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                         <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <input type="text" name="zip_code" id="zip_code" placeholder="Zip Code" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <input type="text" name="total_sql" id="total_sql" placeholder="Total Sqm*" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                         <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <input type="text" name="bedrooms" id="bedrooms" placeholder="Bed Rooms" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <input type="text" name="bathrooms" id="bathrooms" placeholder="Bath Rooms" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                         <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <input type="text" name="parking" id="parking" placeholder="Parking" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <input type="text" name="rental_value" id="rental_value" placeholder="Rental Value" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                        

                        <div class="flex flex-col mt-2">
                            <textarea placeholder='Remark' name='remark' className=' mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'></textarea>
                        </div>

                        <button type="submit" class=" bg-[#064d83] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                        Get in Touch
                        </button>
                    </form>
		</div>
		<div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
        </>
    );
}
ContactOwnerForm.layout=(page) => <Layout title="Contact Us" children={page}/>;
export default ContactOwnerForm;
