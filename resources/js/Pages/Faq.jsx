import React from 'react';
import Layout from './master/Layout';

const Faq = () => {
    return (
        <>
         <section className="py-16 border-t-2">
        <div class="w-[80%] mx-auto  bg-gray-500  bg-no-repeat h-screen rounded-lg contain" style={{
  backgroundBlendMode: "multiply",
  BackgrounPosition: "center center",
  backgroundSize:"cover",
  backgroundImage: `url('https://tabas.com/packs/media/images/faq/hero1920-72611d9fa549023e13fa1783c256c669.webp')`
}}>
  <div class="text-center py-96">
	<p className='text-white py-4 text-md md:text-xl'>Frequently asked questions</p>
    <h2 class=" m-0  p-0 text-2xl md:text-5xl font-bold text-white  antialiased">What can we help you with?</h2>
    <p className='text-white py-4 text-md md:text-xl'>Check out our FAQ; your answer might already be here for you!</p>
  </div>
</div>




{/* Faq */}
<div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-xl md:text-4xl mt-5 py-10 tracking-tight">
		YOU HAVE QUESTIONS? WE HAVE ANSWERS!
		</h2>
		
	</div>
	<div class="grid divide-y divide-neutral-200 w-[85%] md:w-[60%] mx-auto mt-8">
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center  md:text-2xl text-lg font-bold cursor-pointer list-none">
					<span> What is FurHouz?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				FurHouz Is a real estate technology startup that offers fully furnished expat house accommodation with comfort and full of amenities.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span> Where are FurHouz apartments located?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Our units are located in the prime areas of Dhaka city (Gulshan, Banani, Baridhara Diplomatic Zone, Bashundhara & Uttara).
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span> What set FurHouz apart from traditional accommodation company, Quinto Andar and Airbnb?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				FurHouz is a fully furnished expat house accommodation company that offers you and your family apartments for rent without the need to offer a guarantee, ready to live, with the assurance that everything will be in perfect working order. In a FurHouz apartment you don't have to worry and spend on moving furniture to your new residence. Unlike Airbnb, FurHouz does not do lodging in its apartments, but only renting for residential purposes.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span> Can I visit the apartment?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Yes, of course. You can schedule a visit with our team.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span> What documentation it is necessary to rent the apartment?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				The documentation required for booking your apartment is: Driver’s License or Passport.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span> What is the minimum stay?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				1 year, based on availability.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span> Can I rent today and move in tomorrow?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Yes, if you choose an apartment that is available and already furnished, you can rent it on the day and move in the next day.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>What is the type of contract that we are going to sign?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Lease contract under the tenancy law of Bangladesh.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>How can I pay for a FurHouz apartment rental?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				You can pay for your apartment through wire transfer, Check or Cash.
				</p>
			</details>
		</div>



		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>Do I have to pay monthly or everything in full?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				At the time of signing you have to pay few months security deposit and then you can choose to pay monthly or the full amount of your stay.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>What is included in the rent?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Almost everything fully furnishing, apartment rent, water, common electricity, building management fees, property tax, TV cable fees, Internet, property tax, parking.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>How does the key receive process work?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				The building staff receive an authorization with your information, and we send to you the apartment information.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>Can I extend my lease?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Yes, according to the rules established in the lease contract (30/60 days before the end of the contract).
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>Who should I talk to if there is any problem inside the apartment?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				The facilities team is ready to attend your requests.
				</p>
			</details>
		</div>


		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>Need guarantor?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Not necessary, with FurHouz is simple.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>What is the procedure for returning keys?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				The return of keys is done until 12:00 noon of the scheduled date.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>How the contract termination policy works?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Termination requests must be made 60/90 days before the beginning or end of the contract, as the case may be.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>What is excluded in the rent?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Few things, like gas, apartment electricity, internet, tv (all personal consumption).
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>How fast is the internet in the property?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				All of our apartments have a high-speed Wi-Fi network up to 50mbps;
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-bold md:text-2xl text-lg cursor-pointer list-none">
					<span>Can I bring my pet?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Your pet is always welcome, as long as it is provided for and approved by the condominium's convention.
				</p>
			</details>
		</div>
	</div>
</div>

<div className='w-[85%] md:w-[55%]  mx-auto my-16 md:text-left text-center'>
  <h2 className=' md:text-4xl py-2 font-bold  text-xl'> Do you have any doubts?</h2>
  <p className='py-2 text-lg mb-10'>Fill up form to get in contact with a member of the Support Team</p>
<a href='/contact' className='w-full  border-2 px-20 py-3 md:px-30 lg:px-40 xl:px-50 md:py-5 text-xl rounded-md'> Contact Us</a>
</div>
          </section> 
        </>
    );
}
Faq.layout=(page) => <Layout title="Faq" children={page}/>;
export default Faq;
