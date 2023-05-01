import React from 'react';

const ContactComponent = () => {
    return (
        <>
        <section className="py-16 border-t-2">
        <div class="w-[80%] mx-auto  bg-gray-500  bg-no-repeat h-screen" style={{
  backgroundBlendMode: "multiply",
  BackgrounPosition: "center center",
  backgroundSize:"cover",
  backgroundImage: `url('https://tabas.com/packs/media/images/contact_us/hero_img-cae7d6041e85069050341548edd0229c.webp')`
}}>
  <div class=" p-10  py-20 absolute bottom-0  flex  flex-col  flex-wrap  justify-center  content-center">
    <div class=" m-0  p-0 text-xl  md:text-5xl  text-white  antialiased  text-center">Get in touch with us
</div>
    
  </div>
</div>
<div className='w-[80%] mx-auto my-16'>
  <h2 className='text-center text-2xl md:text-4xl py-2 font-bold'>What would you like to <span className='text-[#064d83]'> contact us </span>about?</h2>
  <p className='text-center py-2 text-md md:text-lg'>Fill up form to get in contact with a member of the Support Team</p>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[95%] mx-auto md:w-[65%] '>

<div class=" mx-auto md:mx-2 lg:mx-2 xl:mx-1 my-4">
    
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
        </a> */}
        <div class="p-5">
        <i className="fas fa-key bg-gray-300 text-5xl p-6 rounded-full mb-6"></i>
            <a href="">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">I’m an Owner</h5>
            </a>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Curious about FurHouz? Have a question about your lease? Call or e-mail us.</p>
           
            <div className='border-t-2 my-4'>
            <p className='mt-4 mb-2'> +55 11 4632 3312</p>
            <p className='my-2'>  +55 11 5039 8601</p>
            <p className='my-2'>  proprietario@furhouz.com</p>
            </div>
            <a href="/contact-owner" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
<div class=" mx-auto md:mx-2 lg:mx-2 xl:mx-1 my-4">
    
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
        </a> */}
        <div class="p-5">
        <i className="fas fa-key bg-gray-300 text-5xl p-6 rounded-full mb-6"></i>
            <a href="">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">I’m a Corporate
</h5>
            </a>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Questions about your stay? Need anything in your home? Call or e-mail us.
</p>
           
            <div className='border-t-2 my-4'>
            <p className='mt-4 mb-2'> +55 11 4632 3312</p>
            <p className='my-2'>  +55 11 5039 8601</p>
            <p className='my-2'>  proprietario@furhouz.com</p>
            </div>
            <a href="/contact-corporate" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
<div class=" mx-auto md:mx-2 lg:mx-2 xl:mx-1 my-4">
    
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
        </a> */}
        <div class="p-5">
        <i className="fas fa-key bg-gray-300 text-5xl p-6 rounded-full mb-6"></i>
            <a href="">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">I’m a Tenant</h5>
            </a>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Do you have any questions about the apartment, need help or would you like to know more about our services? Call us through the channels below.
</p>
           
            <div className='border-t-2 my-4'>
            <p className='mt-4 mb-2'> +55 11 4632 3312</p>
            <p className='my-2'>  +55 11 5039 8601</p>
            <p className='my-2'>  proprietario@furhouz.com</p>
            </div>
            <a href="/contact-tenlent" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
<div class=" mx-auto md:mx-2 lg:mx-2 xl:mx-1 my-4">
    
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
        </a> */}
        <div class="p-5">
        <i className="fas fa-key bg-gray-300 text-5xl p-6 rounded-full mb-6"></i>
            <a href="">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">I want to know more</h5>
            </a>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Contact us with any questions about how to rent an apartment with us, deadlines, payments, contracts and much more.</p>
            <div className='border-t-2 my-4'>
            <p className='mt-4 mb-2'> +55 11 4632 3312</p>
            <p className='my-2'>  +55 11 5039 8601</p>
            <p className='my-2'>  proprietario@furhouz.com</p>
            </div>
            <a href="/contact-want-know" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>

</div>


          </section> 
        </>
    );
}

export default ContactComponent;
