import React from 'react';

const RequestFrom = () => {
    return (
        <>
           <div className="container  bg-gray-50 rounded-2xl pb-8">
  <div className="font-sans">
  <div className="">
    <div className="relative flex flex-wrap">
      <div className="w-full relative">
        <div className="mt-6">
          <form className="mt-8">
            <div className="px-6">
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Name</span>
                <input placeholder="" type="text"
                  className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Email</span>
                <input placeholder="" type="text"
                  className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Phone</span>
                <input placeholder="" type="text"
                  className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Message</span>
                <textarea placeholder="" type="text"
                  className="text-md block px-3 py-20  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
              </div>
              
              <div className="flex justify-between"><label className="block text-gray-500 font-bold my-4"><input type="checkbox"
                    className="leading-loose text-pink-600"/> <span className="py-2 text-sm text-gray-600 leading-snug"> Remember
                    Me </span></label></div> <button className="mt-3 text-lg font-semibold 
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                Send Message
              </button>
            </div>
          </form>
       
        </div>
      </div>
    </div>
  </div>
</div>
<div className="grid grid-cols-2 gap-4 py-4 px-6">
                <button className="bg-slate-800 text-white rounded-md py-2 hover:text-white hover:bg-emerald-700"><i className="uil uil-phone mx-4 text-2xl"></i>Call</button>
<button className="bg-emerald-600 text-white rounded-md  hover:text-white py-2 hover:bg-emerald-700"><i className="uil uil-whatsapp mx-4 text-2xl"></i> Whatsapp</button>
                </div>
</div> 
        </>
    );
}

export default RequestFrom;
