import React from 'react'
import ListingCount from './Frontend/ListingCount';
import RequestFrom from './Frontend/Property/RequestFrom';
import Layout from './master/Layout';

const  About = ({totalCount}) =>{
  return (
    <>
    <section className="py-16 border-t-2">
        <div class="w-[80%] mx-auto  bg-gray-500  bg-no-repeat h-screen" style={{
  backgroundBlendMode: "multiply",
  BackgrounPosition: "center center",
  backgroundSize:"cover",
  backgroundImage: `url('https://tabas.com/packs/media/images/about_us/living-room-def6613a6c9412bd075f5358bf802d03.webp')`
}}>
  <div class=" p-10  py-20 absolute bottom-0  flex  flex-col  flex-wrap  justify-center  content-center">
    <div class=" m-0  p-0 text-xl  md:text-5xl  text-white  antialiased  text-center">Designing the future of living and renting
</div>
<p className='text-white text-xl mt-4'>Our mission is to design - through technology - incredible spaces where people are at home, anywhere in the world.

</p>
    
  </div>
</div>


{/* <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full md:w-[65%] mx-auto'>
<div className='text-center m-5'>
  <img src='https://tabas.com/packs/media/images/series-a-news/brazil-journal-logo-12a979b15e68d223dc8c3ae3a7e82390.png'/>
  <p className='text-lg my-2'>Tabas, a startup de sublocação, faz rodada para chegar a 1,2 mil apartamentos</p>
  <a className='text-red-400 font-bold text-lg mt-2' href=''>See More</a>
</div>
<div className='text-center m-5'>
  <img src='https://tabas.com/packs/media/images/series-a-news/brazil-journal-logo-12a979b15e68d223dc8c3ae3a7e82390.png'/>
  <p className='text-lg my-2'>Tabas, a startup de sublocação, faz rodada para chegar a 1,2 mil apartamentos</p>
  <a className='text-red-400 font-bold text-lg mt-2' href=''>See More</a>
</div>
<div className='text-center m-5'>
  <img src='https://tabas.com/packs/media/images/series-a-news/brazil-journal-logo-12a979b15e68d223dc8c3ae3a7e82390.png'/>
  <p className='text-lg my-2'>Tabas, a startup de sublocação, faz rodada para chegar a 1,2 mil apartamentos</p>
  <a className='text-red-400 font-bold text-lg mt-2' href=''>See More</a>
</div>
<div className='text-center m-5'>
  <img src='https://tabas.com/packs/media/images/series-a-news/brazil-journal-logo-12a979b15e68d223dc8c3ae3a7e82390.png'/>
  <p className='text-lg my-2'>Tabas, a startup de sublocação, faz rodada para chegar a 1,2 mil apartamentos</p>
  <a className='text-red-400 font-bold text-lg mt-2' href=''>See More</a>
</div>
</div> */}


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full md:w-[65%] mx-auto my-24'>
<div className=' m-5'>
  <p className='text-xl text-red-400 my-2 '>FIND OUT MORE</p>
<h2 className='text-4xl font-bold'>Why we are here</h2>
<p className='text-xl my-1'>Finding a place to live most of the time involves long process, lock-in clauses and a lot of bureaucracy. And you need to refurbish your apartment, dealing with internet and the cable guy.</p>
<p className='text-xl my-1'>On the other hand, for landlords, managing properties is also stressful: dealing with brokers, screening tenants, resolving maintenance issues, bearing vacancy risks.</p>
<p className='text-xl my-1'>That’s why we decided to offer a game-changing alternative: FurHouz manages properties, transforming them into beautiful living spaces, ready to live in, at the best places in town.</p>
</div>
<div className=' m-5'>
  <img className='rounded-lg' src='https://tabas.com/packs/media/images/about_us/man-reading-8de904c82128ab226d507a298867ea75.png'/>
  
</div>

</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full md:w-[65%] mx-auto my-24'>
<div className=' m-5'>
  <p className='text-xl text-red-400 my-2 '>WE ARE</p>
<h2 className='text-4xl font-bold'>FurHouz today</h2>
<p className='text-xl my-1'>We never stop growing! We are in Gulshan, Banani and Baridhara, everyday focused on building amazing living experiences for our tenants: A Few Numbers: 3 areas in Dhaka- Gulshan, Banani and Baridhara - More than 300+ apartments - More than 5,000 days rented - More than 1300+ tenants & Still growing.
</p>

</div>
<div className=' m-5'>
  <img className='rounded-lg' src='/about.jpeg'/>
  
</div>

</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full md:w-[65%] mx-auto my-24'>
<div className=' m-5'>
  <img className='rounded-lg' src='https://tabas.com/packs/media/images/about_us/dinner-room-ae990209e8df257a932126199b046b3b.png'/>
  
</div>
<div className=' m-5'>
  <p className='text-xl text-red-400 my-2'> GOING HIGH </p>
<h2 className='text-4xl font-bold'> Where we’re going </h2>
<p className='text-xl my-1'>Our dream is to scale up and create living spaces all across Dhaka and other emerging cities of Bangladesh.</p>
<p className='text-xl my-1'>
With more and more people living as digital nomads, we want to be the go-to brand for the new generation of world travelers & expats that search for a sophisticated and seamless experience of living and working well.
</p>
<p className='text-xl my-1'>And we’re making this dream come true through data, technology, design and operational efficiency.
</p>
</div>

</div>
<div className='w-[80%] mx-auto my-16'>
  <h2 className='text-center text-2xl md:text-4xl py-2 font-bold'>More about    
 <span className='text-[#064d83]'> FurHouz</span> Accommodation</h2>
  <p className='py-2 text-md md:text-lg'>
  Renting a furnished apartment in Dhaka seems like a long process. FurHouz made it easy for you. As people tend to get the best service within their fixed budget, that’s why we design our service to provide such a facility. FurHouz have hundreds of the latest furnished apartments for rent in Gulshan, Banani, and Baridhara Diplomatic Zone, Bashundhara R/A & Uttara. If you are looking for fully furnished or semi-furnished apartments for rent in Gulshan, Baridhara Diplomatic zone, Banani, and Bashundhara we can help you ‌rent both.
  </p>
  <p className='py-2 text-md md:text-lg'>
  For over ten years, we have been conducting our service-giving activities with honesty and dedication. Our served customer’s quantity hit almost 1500+. That tagged us as the popular and renowned corporate housing and relocation service provider renting platform in Bangladesh.  </p>
  <p className='py-2 text-md md:text-lg'>
  Using our service, you can easily find your dreamt fully furnished & serviced apartments rent in Banani, Gulshan, Baridhara and other places in Dhaka. We aim to assist our clients with the latest information on the market available now. Our user-friendly tech platform hopefully makes your searching easier. Plus, our website also allows you to directly checking apartment inside photos in the easiest way. Although Dhaka isn’t a big size, the apartment quantity is indeed high to face hassle while searching for furnished apartment renting. As Dhaka’s largest furnished house accommodation portal, we have designed our system in such a way that the system will provide you with a lot of news about your charming apartment at any time. For your ease, our platform provides you with location-based search facilities.  </p>
  <p className='py-2 text-md md:text-lg'>
  Some renters are concerned about the rental agreements. We protect the transparency of apartment owners and tenants. Overall, our aim is to simplify the rental process.  </p>
  <p className='py-2 text-md md:text-lg'>
  Recognized as Dhaka’s modernized furnished & serviced apartment rental portal, we are constantly evolving to ensure you get the right information for all apartments and eliminate inaccuracies. At every step, we value our honorable customers and provide them with the most accurate information.  </p>

  <p className='py-2 text-md md:text-lg'>
  From the beginning, our aim has been to become the leading, and most trusted furnished house accommodation brand in Bangladesh by giving professional services to our foreign clients with internationally recognized skills. We understand the hassle of finding the perfect property to rent in Dhaka. So we have come up with simple solutions of property management services for property owners as well as providing furnished apartment services for clients.</p>
    <p className='py-2 text-md md:text-lg'>
    In particular, we strive to provide the highest value to our expats. We have already successfully served over a thousand expats. We provide real value to our clients, stylish and comfortable furniture, privacy, and 24×7 Support. </p>
      <p className='py-2 text-md md:text-lg'>
      If you are searching for the best expat accommodation service? Let us be your best partner. We follow strict procedures to facilitate for our respected clients. We offer a physically verified listing, and detailed information on every property. We want to be your one-click solution for corporate housing in Bangladesh.  </p>
  <p className=' py-2 text-md md:text-lg'>
  Finally, you will start a hassle-free and safe journey of renting an furnished apartment with us.   </p>
</div>


          </section> 
    </>
  )
}
About.layout = (page) => <Layout title="About" children={page} />;
export default About;