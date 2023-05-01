import React, { useEffect, useState } from 'react';
import Layout from './master/Layout';
import PartnerModal from './Frontend/PartnerModal';

const PropertyOwner = () => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false);
	const toggleVideoModal = (data) => {
		setIsOpenVideoModal(!isOpenVideoModal);
	};
	useEffect(() => {
		if (isOpenVideoModal) document.body.classList.add("overflow-hidden");
		else document.body.classList.remove("overflow-hidden");
	}, [isOpenVideoModal]);
    return (
        <>
            <section class="text-gray-600 body-font  py-16 border-t-2">
  <div class="w-[75%] px-5 py-24 bottom-0 relative mx-auto flex flex-wrap items-center justify-center bg-cover bg-no-repeat min-h-screen rounded-lg" style={{backgroundImage:`url('/owner/property-owner-hero-img.jpg')`}}>
  <div class="container mx-auto text-center md:text-left text-black w-5/5 md:w-4/5">
			<h1 class="text-xl   md:text-5xl font-medium mb-6"><sapn className='text-[#064d83]'>Collect rent on time</sapn> and <br/>your apartment renovated</h1>
			<p class="text-md  md:text-xl mb-12 md:w-2/3">We will rent it from you, renovate and transform it into a beautifully designed and fully furnished apartment.</p>
			<a href="/get-request" class="bg-white text-black py-4 px-12 rounded-lg hover:bg-white">Partner With Us</a>    
		</div>
    
  </div>  
  <div className='grid grid-cols-1 md:grid-cols-2 mx-auto w-[75%] py-24 gap-6'>
        <div className='flex flex-col  justify-center mx-auto '>
            <p className='text-md'>BENEFITS FOR PROPERTY OWNERS IN Gulshan, Banani, Baridhara and Basundhara</p>
            <h2 className='text-5xl space-y-2 py-4 '><span className='text-[#064d83]'><b>Hassle-free,</b></span> profitable and no middleman</h2>
            <p className='pb-6'>No need to worry anymore with finding and screening new tenants, property vacancy, renovation or, damage hassles or dealing with brokers, leave it all to us!</p>
            <p>Just relax, sit back and collect your rent!</p>
        </div>
        <div><div class="grid grid-cols-6 col-span-2 gap-2  ">
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                 alt=""/>
          </div>
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img class="h-full w-full object-cover  "
                 src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                 alt=""/>
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                 alt=""/>
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                 alt=""/>
          </div>
          <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                 alt=""/>
          </div>
        </div></div>
  </div>

  <div className='bg-gray-200 rounded-lg mx-auto w-[75%] py-24 gap-6'>
    <div className='text-center pb-10'>
        <p className='text-xl'>STEP-BY-STEP</p>
        <h2 className='text-3xl md:text-5xl p-2'><span className='text-[#064d83]'>How to rent </span> your apartment to FurHouz?</h2>
    </div>
    {/* Start desktop version */}
  <div class="relative wrap overflow-hidden p-10 h-full hidden md:block lg:block xl:block">
    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left:" 50%"}}></div>
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ">
        <h1 class="mx-auto font-semibold text-lg  text-white">1</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Analysis & Screening
</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After our team receives the information about your apartment, we will analyze it and contact you.

</p>
      </div>
    </div>

    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-white text-xl">Visit in the apartment
</h3>
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Our team will visit the apartment and collect the necessary information for our architecture and renovation team.</p>
      </div>
    </div>
    
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Lease contract
</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After analysis and a visit to the apartment, we offer a contract for 60 to 72 months.

</p>
      </div>
    </div>

    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-white text-xl">Renovation & Decor
</h3>
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Our renovation team and designers left the apartment will turn your property into the perfect fir for our selected renters.

</p>
      </div>
    </div>
    <div class="mb-8 flex justify-between items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Guaranteed Payment</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">With or without a tenant in the apartment, you will receive simply and securely the agreed rent every month.



</p>
      </div>
    </div>
  </div>
  {/* End desktop version */}
  {/* Start Mobile version */}
  <div class="md:hidden xl:hidden lg:hidden grid grid-cols-1 mx-auto text-center">
   <div className='px-10 py-6'>
    <span className=" bg-gray-400 text-black p-4 rounded-full font-bold text-2xl">1</span>
    <h3 className='text-3xl py-4 font-medium'>Analysis & Screening
</h3>
    <p>After our team receives the information about your apartment, we will analyze it and contact you.

</p>
   </div>
   <div className='px-10 py-6'>
   <span className=" bg-gray-400 text-black p-4 rounded-full font-bold text-2xl">2</span>
    <h3 className='text-3xl py-4 font-medium'>Visit in the apartment
</h3>
    <p>Our team will visit the apartment and collect the necessary information for our architecture and renovation team.

</p>
   </div>
   <div className='px-10 py-6'>
   <span className=" bg-gray-400 text-black p-4 rounded-full font-bold text-2xl">3</span>
    <h3 className='text-3xl py-4 font-medium'>Lease contract
</h3>
    <p>After analysis and a visit to the apartment, we offer a contract for 60 to 72 months.

</p>
   </div>
   <div className='px-10 py-6'>
   <span className=" bg-gray-400 text-black p-4 rounded-full font-bold text-2xl">4</span>
    <h3 className='text-3xl py-4 font-medium'>Renovation & Decor
</h3>
    <p>Our renovation team and designers left the apartment will turn your property into the perfect fir for our selected renters.

</p>
   </div>
   <div className='px-10 py-6'>
   <span className=" bg-gray-400 text-black p-4 rounded-full font-bold text-2xl">5</span>
    <h3 className='text-3xl py-4 font-medium'>Guaranteed Payment
</h3>
    <p>With or without a tenant in the apartment, you will receive simply and securely the agreed rent every month.

</p>
   </div>
   
  </div>
  {/* End Mobile version */}

  </div>
  <div className=' mx-auto w-[75%] py-16 gap-6 h-screen-min'>
       
          <div class=" overflow-hidden rounded-xl col-span-3 ">
            <img class="h-full w-full object-cover "
                 src="/owner/property-owner-last-img.jpg"
                 alt=""/>
          </div>
          
       
  </div>

  <div class="max-w-screen-xl mx-auto px-10 md:px-40 bg-gray-200 mt-10 min-h-sceen py-16">
	<div class="flex flex-col items-center">
		
		<p class="text-neutral-500 text-xl mt-3">
        Q&A
		</p>
        <h2 class="font-bold text-2xl md:text-5xl mt-5 tracking-tight">
        Common questions from property owners


		</h2>
	</div>
	<div class="grid divide-y mx-auto mt-8">
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='text-xl md:text-3xl'> What are the fees for using FurHouz?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We require an on-boarding period, depending on the status of the property. This will allows us to make any needed repairs or upgrades and furnish the home.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='text-xl md:text-3xl'> Is rent guaranteed?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes. No matter what. If the property is vacant, FurHouz will still pay you on-time every month for your entire contract term. We directly deposit rent into your bank account.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='text-xl md:text-3xl'> What maintenance does FurHouz cover?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutrtext-xl md:al-600 mt-3 group-open:animate-fadeIn">
        FurHouz will cover any resident damage at no cost to the owner. For issues caused by age, deferred maintenance, or catastrophic event, FurHouz will repair or oversee repairs at the expense of the owner.
				</p>
			</details>
		</div>
		
	</div>
</div>

{isOpenVideoModal && <PartnerModal toggleVideoModal={toggleVideoModal} />}
</section> 
        </>
    );
}
PropertyOwner.layout=(page) => <Layout title="Property Owner" children={page}/>;

export default PropertyOwner;
