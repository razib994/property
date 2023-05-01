import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import LayoutDashboard from '../LayoutDashboard';
const RequestProperty = ({property_request}) => {
    return (
        <>
              <section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700"> Request Property List </h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Title
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Phone
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Message
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Answer
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Status
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Action
                        </th>
          </tr>
        </thead>

        <tbody>
            {property_request && property_request.map((item, i) => 
                <tr key={i}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {item.name}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {item.phone}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
           {item.message}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          <span className='text-green-700 text-xl'>{item.reply_answer}</span> 
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {item.status == 1 ? <span className='bg-emerald-600 text-white p-1 rounded-sm'> active </span>:""}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <a href=''><i className="fas fa-edit text-emerald-500 bg-green-200 p-2 rounded mr-4"></i></a>
              <a href=''><i className="fas fa-trash text-red-500 bg-red-200 p-2 rounded mr-4"></i></a>
              
            </td>
          </tr>
            )}
          
         
        </tbody>

      </table>
    </div>
  </div>
</div>

</section>  
        </>
    );
}
RequestProperty.layout = (page) => <LayoutDashboard children={page} />;
export default RequestProperty;
