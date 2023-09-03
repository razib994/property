import React from "react";
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toFormData } from "./../../../utils";
//http://localhost:8000/area/Gulshan/3
const RequestFrom = ({property_id="", slug="", location="", title=""}) => {
  
  const {url} =  usePage();
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    phone: "",
    property_slug: slug||"",
    message: `Hello, I am interested in [${property_id}]`,
    date: "",
    status: "",
    title: title,
    property_id: property_id,
    location: location.location_name,
});

function handleSubmit(e) {
e.preventDefault();
    const formData = toFormData(data);

    post(route('requestFrom.submit'), {
        data: formData,
        onFinish: () => {
            //
        },
        onSuccess: () => {
   
            // if (document.querySelector("#createDialog")) {
            // 	document.querySelector("#createDialog").click();
            // }
        },
    });
  }
    return (
        <>
  <div className="container bg-gray-50 rounded-2xl pb-8">
  <div className="font-sans" > 
  <div className="">
    <div className="relative z-1 flex flex-wrap">
      <div className="w-full relative mx-auto bg-gray-50">
        <img className='p-4' src="/logo/logo.png"  width={250} height={1000}/>
        <p className="px-5">Enquery About this Property.</p>
        <div className="mt-6">
          <form className="mt-8" onSubmit={handleSubmit}  method='post'>
            <div className="px-6">
              <div className="py-2">
                <input placeholder="Full Name" type="text" name='name' onChange={(e) => setData("name", e.target.value)}
                  className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
              {errors.name && <span className='text-red-700'>{errors.name}</span>}
              </div>
              <div className="py-2">
                <input placeholder="Enter Your Email" type="text" name='email' onChange={(e) => setData("email", e.target.value)}
                  className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
              </div>
              <div className="py-2">
                <input placeholder="Enter Your Phone Number" type="text" name='phone' onChange={(e) => setData("phone", e.target.value)}
                  className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
            {errors.phone && <span className='text-red-700'>{errors.phone}</span>}
              </div>
              <div className="py-2">
                <textarea placeholder="Message" type="text" name='message' value={property_id ? `Hello, I am interested in [${property_id}]`:''}  onChange={(e) => setData("message", e.target.value)}
                  className="text-md block px-3 py-20  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
             {errors.message && <span className='text-red-700'>{errors.message}</span>}
              </div>
             <input type="hidden" onChange={(e) => setData("title", e.target.value)} name="title"/>
             <input type="hidden" onChange={(e) => setData("location", e.target.value)} name="location"/>
              <div className='flex gap-2'>
               <button className="mt-3 text-sm md:text-md lg:text-lg xl:text-lg  font-semibold 
                bg-gray-800  text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black" loading={processing}>
                Send Message
              </button>
  {/* <a href='tel:8801616171171' className="bg-slate-800 text-white rounded-md py-2 hover:text-white hover:bg-emerald-700"><i className="uil uil-phone mx-4 text-2xl"></i>Call</a> */}
              {title ? (<a href={`https://api.whatsapp.com/send?phone=+8801616171171&text=https://furhouz.com/area/${location.location_name}/property/${property_id}`} className="bg-emerald-600 mt-3 text-sm md:text-md lg:text-lg xl:text-lg font-semibold 
                text-white rounded-lg 
                px-6 py-3 block shadow-xl hover:text-white  hover:bg-emerald-700"> Whatsapp</a>) : null }

              </div>
              
            </div>
          </form>
       
        </div>
      </div>
    </div>
  </div>
</div>


</div> 
        </>
    );
}

export default RequestFrom;
