import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toFormData } from "./../../../utils";
import LayoutDashboard from '../LayoutDashboard';
import Select from "react-select";
// import ProductImages from './ProductImages';
const PORODUCTIMAGE_PACKAGE = () => {
	return {
		image_path: "",
	};
};

const Create = ({locations, types, features}) => {
  const [checked, setChecked] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState();

  const { data, setData, post, processing, errors, progress } = useForm({
    'title':"",
    'slug':"",
    'location_id':[],
    'price':"",
    'type_id':"",
    'bed':"",
    'bath':"",
    'grage':"",
    'sqf':"",
    'balcony':"",
    'floor':"",
    'unit_no':"",
    'unit_per_floor':"",
    'maid_room':"",
    'service_charge':"",
    'phone':"",
    'date':"",
    // 'description':"",
    'address':"",
    'zip_code':"",
    'country':"",
    'city':"",
    // 'user_id':"",
    // 'details':"",
    'map_link':"",
    'whatsapp_number':"",
    'created_by':"",
    'rating':"",
    'share_link':"",
    'share_count':"",
    'call_count':"",
    'feature_id':[],
    'image_gallery':[],
    'visitor_count':"",
    'status':"",
    'publisher_status':"",
    'recived_count':"",
    'image':"",
    'video_link':"",
    'meta_title':"",
    'meta_description':"",
    'meta_tag':"",
    'meta_keyword':"",
    });

    function handleSelect(data) {
      setSelectedOptions((e) => setData("location_id", [...data]));
    }
// Add/Remove checked item from list
const handleCheck = (e) => {
    let id = e.target.value;
        if (e.target.checked) {
            setData("feature_id", [...data.feature_id, id]);
        } else {
            setData(
                "feature_id",
                data.feature_id.filter((item) => {
                    return item !== id;
                })
            );
        }
};
function handleSubmit(e) {
e.preventDefault();
    const formData = toFormData(data);

    post(route('property.submit'), {
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
            <div className="pt-6 px-4 ">
            <div className="p-10">
    <div className='flex  w-[65%] bg-white shadow-md rounded-lg overflow-hidden mx-auto p-6'>

        <div className='flex items-center px-2 py-3'>
            <form className="w-full " onSubmit={handleSubmit} >
            <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
        Title
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="title" type="text" name="title" placeholder="Property Title" 
                          errors={errors.title}
												// value={data.email}
												onChange={(e) => setData("title", e.target.value)}/>
      {errors && errors.title ? <div className="text-[red] py-2">{errors.title}</div> : null}
    </div>
  
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
        Price
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="price" type="text" placeholder="Enter Price" name='price'
      errors={errors.price}
      // value={data.email}
      onChange={(e) => setData("price", e.target.value)}/>
       {errors && errors.price ? <div className="text-[red] py-2">{errors.price}</div> : null}
    </div>
   
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="location_id">
        Location
      </label>
      <div className="relative">
      <Select
      className="block"
       id="location_id" 
       name='location_id' 
          options={locations}
          placeholder="Select Locations"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
        {/* <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="location_id" name='location_id' 
        errors={errors.location_id}
       value={data.email}
      onChange={(e) => setData("location_id", e.target.value)}>
          <option value=""> Select Your Location </option>
          {locations && locations.map((location, index) =>
           <option key={index} value={location.id}> {location.location_name} </option>
          )}
         
        </select> */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>  
      {errors && errors.location_id ? <div className="text-[red] py-2">{errors.location_id}</div> : null}   
    </div>
    
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type_id">
        Type
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="type_id" name='type_id'
        errors={errors.type_id}
        // value={data.email}
        onChange={(e) => setData("type_id", e.target.value)}>
          <option value="">Select Type </option>
          {types && types.map((i, index) => 
          <option key={index} value={i.id}>{i.title}</option>
          )}
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      {errors && errors.type_id ? <div className="text-[red] py-2">{errors.type_id}</div> : null}
    </div>
    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bed">
        Bed
      </label>
      <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="bed" name='bed'
        errors={errors.bed}
        // value={data.email}
        onChange={(e) => setData("bed", e.target.value)}>
          <option value="">Select Bed </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
     
    </div>
    {errors && errors.bed ? <div className="text-[red] py-2">{errors.bed}</div> : null}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bath">
        Bath
      </label>
      <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="bath" name='bath'
        errors={errors.bath}
        // value={data.email}
        onChange={(e) => setData("bath", e.target.value)}>
          <option value="0">Select Bath </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
      
    </div>
    {errors && errors.bath ? <div className="text-[red] py-2">{errors.bath}</div> : null}
  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="city" type="text" placeholder="City" name='city'
       errors={errors.city}
       // value={data.email}
       onChange={(e) => setData("city", e.target.value)}
       />
    </div>
    {errors && errors.city ? <div className="text-[red] py-2">{errors.city}</div> : null}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="zip_code">
        ZIP/POSTAL CODE
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="zip_code" type="text" placeholder="Zip Code" name='zip_code'
       errors={errors.zip_code}
       // value={data.email}
       onChange={(e) => setData("zip_code", e.target.value)}
       />
    </div>
    {errors && errors.zip_code ? <div className="text-[red] py-2">{errors.zip_code}</div> : null}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="country">
      Country
      </label>
      <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="country" name='country'
        errors={errors.country}
        // value={data.email}
        onChange={(e) => setData("country", e.target.value)}>
          <option value='Bangladesh' selected>Bangladesh</option>
          <option value='Others'>Others</option>
        
        </select>
     
    </div>
    {errors && errors.country ? <div className="text-[red] py-2">{errors.country}</div> : null}
  </div>

  {/* Data start */}
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="balcony">
      Balcony

      </label>
      <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="balcony" name='balcony'
        errors={errors.balcony}
        // value={data.email}
        onChange={(e) => setData("balcony", e.target.value)}>
          <option value="0">Select Balcony </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
     
    </div>
    {errors && errors.balcony ? <div className="text-[red] py-2">{errors.balcony}</div> : null}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="floor">
      Floor

      </label>
      <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="floor" name='floor'
        errors={errors.floor}
        // value={data.email}
        onChange={(e) => setData("floor", e.target.value)}>
          <option value="0">Select Floor </option>
          <option value='1'>1st</option>
          <option value='2'>2nd</option>
          <option value='3'>3rd</option>
          <option value='4'>4th</option>
          <option value='5'>5th</option>
          <option value='6'>6th</option>
          <option value='7'>7th</option>
          <option value='8'>8th</option>
          <option value='9'>9th</option>
          <option value='10'>10th</option>
          <option value='11'>11th</option>
          <option value='12'>12th</option>
          <option value='13'>13th</option>
          <option value='14'>14th</option>
          <option value='15'>15th</option>
          <option value='16'>16th</option>
          <option value='17'>17th</option>
          <option value='18'>18th</option>
          <option value='19'>19th</option>
          <option value='20'>20th</option>
        </select>
     
    </div>
    {errors && errors.floor ? <div className="text-[red] py-2">{errors.floor}</div> : null}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="unit_no">
      Unit No

      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="unit_no" type="text" placeholder="unit_no" name='unit_no'
       errors={errors.unit_no}
       // value={data.email}
       onChange={(e) => setData("unit_no", e.target.value)}
       />
    </div>
    {errors && errors.unit_no ? <div className="text-[red] py-2">{errors.unit_no}</div> : null}
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="unit_per_floor">
      Unit Per Floor

      </label>
      <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="unit_per_floor" name='unit_per_floor'
        errors={errors.unit_per_floor}
        // value={data.email}
        onChange={(e) => setData("unit_per_floor", e.target.value)}>
          <option value="0">Select Unit Per Floor </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
     
    </div>
    {errors && errors.unit_per_floor ? <div className="text-[red] py-2">{errors.unit_per_floor}</div> : null}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="maid_room">
      Maid Room
      </label>
      <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="maid_room" name='maid_room'
        errors={errors.maid_room}
        // value={data.email}
        onChange={(e) => setData("maid_room", e.target.value)}>
          <option value="0">Select Maid Room </option>
          <option value='1'>Yes</option>
          <option value='0'>No</option>
      
        </select>
     
    </div>
    {errors && errors.maid_room ? <div className="text-[red] py-2">{errors.maid_room}</div> : null}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="service_charge">
      Service Charge
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" name='service_charge' id="service_charge" type="text" placeholder="Service Charge"
       errors={errors.service_charge}
       // value={data.email}
       onChange={(e) => setData("service_charge", e.target.value)}
       />
    </div>
    {errors && errors.service_charge ? <div className="text-[red] py-2">{errors.service_charge}</div> : null}
  </div>
  {/* Data End */}




  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grage">
      Grage
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="grage" type="text" placeholder="Grage" name='grage'
       errors={errors.grage}
       // value={data.email}
       onChange={(e) => setData("grage", e.target.value)}
       />
    </div>
    {errors && errors.grage ? <div className="text-[red] py-2">{errors.grage}</div> : null}
    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sqf">
      Size
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="sqf" type="text" placeholder="Area of Size" name='sqf'
       errors={errors.sqf}
       // value={data.email}
       onChange={(e) => setData("sqf", e.target.value)}
       />
    </div>
    {errors && errors.sqf ? <div className="text-[red] py-2">{errors.sqf}</div> : null}
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">

  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
      Mobile Number
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="phone" type="text" placeholder="Mobile Number" name='phone'
       errors={errors.phone}
       // value={data.email}
       onChange={(e) => setData("phone", e.target.value)}
       />
    </div>
    {errors && errors.phone ? <div className="text-[red] py-2">{errors.phone}</div> : null}
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sqf">
      Date
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none f focus:border-gray-500" id="date" type="date" placeholder="Date" name='date'
       errors={errors.date}
       // value={data.email}
       onChange={(e) => setData("date", e.target.value)}
       />
        {errors && errors.date ? <div className="text-[red] py-2">{errors.date}</div> : null}
    </div>
   
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
    

<label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Address</label>
    <textarea id="address" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" name='address' errors={errors.address}
       // value={data.email}
       onChange={(e) => setData("address", e.target.value)}></textarea>
    </div>
    {errors && errors.address ? <div className="text-[red] py-2">{errors.address}</div> : null}
  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="map_link">
      Map Link
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="map_link" type="text" placeholder="Map Link" name='map_link'
       errors={errors.map_link}
       // value={data.email}
       onChange={(e) => setData("map_link", e.target.value)}
       />
    </div>
    {errors && errors.map_link ? <div className="text-[red] py-2">{errors.map_link}</div> : null}
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="whatsapp_number">
      Whatsapp Number
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="whatsapp_number" type="text" placeholder="Whatsapp Number" name='whatsapp_number'
       errors={errors.whatsapp_number}
       // value={data.email}
       onChange={(e) => setData("whatsapp_number", e.target.value)}
       />
    </div>
    {errors && errors.whatsapp_number ? <div className="text-[red] py-2">{errors.whatsapp_number}</div> : null}
  </div>
  <div className="flex flex-wrap  mb-6 text-2xl font-bold">
 Feature
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  {features && features.map((feature, i) => 
  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0" key={i}>

  <input type="checkbox" className="form-checkbox h-4 w-5 text-gray-600 mb-4"  name='feature_id' value={feature.id}  errors={errors.feature_id}
        // value={data.email}
        onChange={handleCheck} /><span className="ml-2 text-gray-700 text-2xl">{feature.feature_name}</span>
   </div>
  )}
  </div>
  {errors && errors.feature_id ? <div className="text-[red] py-2">{errors.feature_id}</div> : null}


  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="video_link">
      Video Link 
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="video_link" type="text" placeholder="Video Link" name='video_link'  
      errors={errors.video_link}
        // value={data.email}
        onChange={(e) => setData("video_link", e.target.value)}/>
    </div>
    {errors && errors.video_link ? <div className="text-[red] py-2">{errors.video_link}</div> : null}
  </div>



  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image">
        Image
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="image" type="file" name="image" placeholder="image"  
      errors={errors.image}
         //value={data.image}
        onChange={(e) => setData("image",  e.target.files[0])}
        />
    {progress && (
      <progress value={progress.percentage} max="100">
        {progress.percentage}%
      </progress> )}
      {errors && errors.image ? <div className="text-[red] py-2">{errors.image}</div> : null}
    </div>
  
    <div className="w-full md:w-1/2 px-3">
    {/* <ProductImages
											handleChange={handleChange}
											errors={errors}
											values={values}
											setValues={setValues}
											extraData={extraData}
											template={PORODUCTIMAGE_PACKAGE()}
										/> */}

      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image_gallery">
        Property Images (<small style={{ color : "red"}}> Main Image absolute one number  </small>)
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="image_gallery" multiple type="file" placeholder="Image Gallery" name='image_gallery'
       errors={errors.image_gallery}
       // value={data.email}
       onChange={(e) => setData("image_gallery", [...e.target.files])}
       />
         {errors && errors.image_gallery ? <div className="text-[red] py-2">{errors.image_gallery}</div> : null}
    </div>
  
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type">
        Publisher
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500" id="publisher_status" name='publisher_status'
         errors={errors.publisher_status}
         // value={data.email}
         onChange={(e) => setData("publisher_status", e.target.value)}
         >
          <option value=""> Select Publisher Status</option>
          <option value="1">Active</option>
          <option value="0">Deactive</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      {errors && errors.publisher_status ? <div className="text-[red] py-2">{errors.publisher_status}</div> : null}
    </div>
  
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
       Meta Title
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="meta_title" type="text" name="meta_title" placeholder="Enter Meta Title" 
                          errors={errors.meta_title}
												// value={data.email}
												onChange={(e) => setData("meta_title", e.target.value)}/>
      {errors && errors.meta_title ? <div className="text-[red] py-2">{errors.meta_title}</div> : null}
    </div>
  
    <div className="w-full md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
        Meta Keywords
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="meta_keyword" type="text" placeholder="Enter Meta Keyword" name='meta_keyword'
      errors={errors.meta_keyword}
      // value={data.email}
      onChange={(e) => setData("meta_keyword", e.target.value)}/>
       {errors && errors.meta_keyword ? <div className="text-[red] py-2">{errors.meta_keyword}</div> : null}
    </div>
    <div className="w-full md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
        Meta Description
      </label>
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="meta_description" type="text" placeholder="Enter Meta Description" name='meta_description'
      errors={errors.meta_description}
      // value={data.email}
      onChange={(e) => setData("meta_description", e.target.value)}/>
       {errors && errors.meta_description ? <div className="text-[red] py-2">{errors.meta_description}</div> : null}
    </div>
   
  </div>

  <button className="p-3 bg-green-600 text-white px-10 rounded-lg hover:bg-green-500"  type='submit'> Save </button>
</form>
        </div>
    </div>
</div>
            </div>
            
        </>
    );
}
Create.layout = (page) => <LayoutDashboard children={page} />;
export default Create;
