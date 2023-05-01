import { useForm } from '@inertiajs/inertia-react';
import { toFormData } from "./../../utils";

import React from 'react';

const Advanced = ({locations, types}) => {
    const { data, setData, post, processing, errors } = useForm({
        price: "",
        location: "",
        property_id: "",
      
    });
    
    function handleSubmit(e) {
    e.preventDefault();
        const formData = toFormData(data);
    
        post(route('search.submit'), {
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

      const options = locations.map(option => {
        return (
            <option key={option.id} value={option.id}>
              {option.location_name}
            </option>
        );
    });

    const typedata = types.map(option => {
        return (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
        );
    });
    return (
        <>
            <div class="mt-5 ">
				<div class="form">
				<form onSubmit={handleSubmit}>
						<div class="flex gap-1 md:flex flex-row md:space-x-4 w-full text-xs">
                        <div class="mb-3 space-y-2 text-xs w-2/4  md:w-3/6">
							<div class="flex flex-wrap items-stretch w-full mb-4 relative">
								<div class="flex">
									<span class="flex items-center leading-normal bg-white border-1 rounded-r-none border border-r-0 border-[#00aeef] px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-[#00aeef] justify-center items-center  text-xl rounded-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='white'  viewBox="0 0 24 24" id="search"><path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038Z"></path></svg>
                                   </span>
								</div>
								<input type="text" onChange={(e) => setData("property_id", e.target.value)} class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" name='property_id' placeholder="Property ID"/>
                  </div>
							</div>
                            <div class="w-1/4 md:w-1/6 flex flex-col mb-3">
										<select class="block w-full bg-white text-grey-darker border border-white rounded-lg h-10 px-4 md:w-full "  name="location" id="location" onChange={(e) => setData("location", e.target.value)}>
                  <option value="">Seleted location</option>
                  {options}
                </select>
									</div>

                                  
                                    <div class="w-1/4 md:w-1/6 flex flex-col mb-3">
										<select class="block w-full bg-white text-grey-darker border border-white rounded-lg h-10 px-4 md:w-full "  name="price" id="price" onChange={(e) => setData("price", e.target.value)}>
                  <option value="">Seleted Price</option>
                  <option value="100000">50000-100000</option>
                  <option value="150000">100001-150000</option>
                  <option value="200000">150001-200000</option>
                  <option value="250000">200001-250000</option>
                  <option value="300000">250001-300000</option>
                  <option value="350000">300001-350000</option>
                  <option value="400000">350001-400000</option>
                  <option value="450000">400001-450000</option>
                  <option value="500000">450001-500000</option>
                  <option value="550000">500001-550000</option>
                  <option value="600000">550001-600000</option>
                  {/* {options} */}
                </select>
									</div>
                            <div class="w-1/4 mb-3 space-y-2 md:w-1/6 text-xs">
                            <button class="w-full mb-2 md:mb-0 bg-[#00aeef] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white hover:shadow-lg rounded-lg hover:bg-[#]">Search</button>
							</div>
                          
						</div>
                        </form>
							</div>
						</div>
        </>
    );
}

export default Advanced;
