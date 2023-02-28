import React from 'react';

const ContactComponent = () => {
    return (
        <>
        <section className="">
            <div className="bg-gray-200 py-28">
        <div className="w-[82%] mx-auto">
            <h2 className="text-3xl font-bold pb-2">Contact Us</h2>
            <p> Details </p>
        </div>
        </div>
<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 my-10">
<div className="flex  justify-center items-center bg-white space-y-8 my-4">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Get in touch with us</h1>
              <p className="text-sm font-normal text-gray-600 mb-8">Find the best deal on homes in your area. Let us help you.</p>
              <div className="flex items-center  py-2 px-3 rounded-2xl">
                
              <input id="email" className=" pl-2 w-full outline-none border-2 p-4 rounded-2xl mx-2" type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="flex items-center   py-6 px-3 rounded-2xl ">
                
              <input id="email" className=" pl-2 w-full outline-none border-2 p-4 rounded-2xl mx-2" type="email" name="email" placeholder="Email Address" />
                
              </div>
              <div className="grid grid-cols-2 ">
                <div className="mx-2">
                <input id="email" className=" pl-2 w-full outline-none border-2 p-4 rounded-2xl mx-2" type="email" name="email" placeholder="Email Address" />
                </div>
                <div className="mx-2">
                <input id="email" className=" pl-2 w-full outline-none border-2 p-4 rounded-2xl mx-2" type="email" name="email" placeholder="Email Address" />
                </div>
              </div>
              <div className="grid grid-cols-2 py-6">
                <div className="mx-2">
                <input id="email" className=" pl-2 w-full outline-none border-2 p-4 rounded-2xl mx-2" type="email" name="email" placeholder="Email Address" />
                </div>
                <div className="mx-2">
                <input id="email" className=" pl-2 w-full outline-none border-2 p-4 rounded-2xl mx-2" type="email" name="email" placeholder="Email Address" />
                </div>
              </div>
              <div className="flex items-center   py-2 px-3 rounded-2xl ">
                <textarea className="pl-2 w-full outline-none border-2 p-4 rounded-2xl mx-0"></textarea>                
              </div>
              <button type="submit" className="block w-full bg-indigo-600 mt-5 py-4 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-10 ">Submit</button>
              
              
            </form>
            </div>
            
          </div>
          <div className="flex
          justify-around items-center my-16">
            <div 
                  className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
                  >

                  </div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className=" font-bold text-4xl font-sans">Bangladesh Office</h1>
              <p className=" mt-1"><i className="uil uil-map-marker"></i> House- 18/5, Floor - 3rd, Ring Road, Mohammadpur, Dhaka</p>
              <p className=" mt-1"><i className="uil uil-envelope-alt"></i> contact@mediusware.com</p>
              <p className=" mt-1"><i className="uil uil-envelope-alt"></i> sales@mediusware.com</p>
              <p className=" mt-1"><i className="uil uil-phone-alt"></i> +8801750020408</p>
              
            </div>
          </div>
          
      </div>
      <div className="map mt-20 h-screen">
      
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
  </div>
     
    </section> 
        </>
    );
}

export default ContactComponent;
