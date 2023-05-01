import React from 'react';

const ContactInformation = ({property}) => {
    return (
        <>
        <div className="shadow-lg my-5 border border-sky-500 p-8 ">
             <h2 className="text-2xl font-bold border-b-2 pb-3">Contact Information</h2>
             <p className='pt-2'>Enquire About This Property</p>
             <form class="py-3 justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <label for="name" class="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <label for="name" class="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                         <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2 py-1">
                            <div className='w-full'>
                            <label for="name" class="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" class="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                            <div>
                            <label for="name" class="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" class="w-full  mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        
                            </div>
                         </div>
                        

                        <div class="flex flex-col mt-2">
                            <label for="tel" class="hidden">Number</label>
                            <textarea className=' mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'></textarea>
                        </div>

                        <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>
            </div>
        </>
    );
}
export default ContactInformation;
