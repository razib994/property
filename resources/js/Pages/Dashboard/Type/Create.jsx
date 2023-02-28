import React from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toFormData } from "./../../../utils";
import LayoutDashboard from '../LayoutDashboard';

const Create = () => {
      
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    description: "",
    image: "",
});


function handleSubmit(e) {
e.preventDefault();
    const formData = toFormData(data);

    post(route('type.submit'), {
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
            <div classNameName="pt-6 px-4 ">
            <div className="p-10">
    <div className='flex  w-[65%] bg-white shadow-md rounded-lg overflow-hidden mx-auto p-6'>

        <div className='flex items-center px-2 py-3'>
            <form className="w-full " onSubmit={handleSubmit} enctype="multipart/form-data">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
        Title
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" name="title" placeholder=" Title" errors={errors.email}
												// value={data.email}
												onChange={(e) => setData("title", e.target.value)}/>
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    {errors && errors.title ? <div className="text-[red] py-2">{errors.title}</div> : null}

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image">
        Image
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="image" type="file" name="image" errors={errors.image}
												// value={data.email}
												onChange={(e) => setData("image", e.target.value)}/>
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    {errors && errors.image ? <div className="text-[red] py-2">{errors.image}</div> : null}

  </div>
  <div className="flex flex-wrap -mx-3 mb-6">

  <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description">
     Description
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="Description" name='description' errors={errors.description}
												// value={data.email}
												onChange={(e) => setData("description", e.target.value)}/>
    </div>
    {errors && errors.description ? <div className="text-[red] py-2">{errors.description}</div> : null}

  </div>
  <button className="p-3 bg-green-600 text-white px-10 rounded-lg hover:bg-green-500 "> Save </button>
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