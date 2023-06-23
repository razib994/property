import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

const RentApartments = () => {
    return (
        <>
        <section className='py-16 '>
           	<div class="bg-cover bg-center w-[86%]  md:w-[80%] mx-auto rounded-md" style={{backgroundImage: `url('/images/banner.jpeg')` }}>
		<div class=" mx-auto text-left">
			<div class="grid grid-cols-1 md:grid-cols-2 ">
				<div class=" cover w-full py-24 px-6 md:px-10 text-center md:text-left lg:text-left xl:text-left">
                    <p className='text-xl font-bold py-4'>BUSINESS</p>
					<h2 class="text-3xl md:text-5xl font-medium mb-6 text-gray">Rent apartments for your company</h2>
					<p class="text-xl mb-12 text-gray">Manage easily all your corporate apartments needs with flexibility and exclusive support. Save time and money. Ideal for you and your team.</p>
					<a href="/corporates" class="bg-[#064d83] text-white py-4 px-12 rounded-lg hover:bg-[#064d83]">Get to know us</a>
				</div>
				<div class=" hidden pl-16">
					{/* <img src="https://source.unsplash.com/random?ux" class="h-64 w-full object-cover rounded-xl" alt="Layout Image"/> */}
      </div>
				</div>
			</div>
	</div> 
    </section>
        </>
    );
}

export default RentApartments;
