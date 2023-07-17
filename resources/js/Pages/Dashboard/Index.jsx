import React from 'react';
import LayoutDashboard from './LayoutDashboard';

const Index = ({totalProperty, userCount, requestCount, property, latest_request}) => {
    return (
        <>
           <div>
           <div className="pt-6 px-4">
               <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                  <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{totalProperty}</span>
                           <h3 className="text-base font-normal text-gray-500">Total Property</h3>
                        </div>
                        
                     </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{userCount}</span>
                           <h3 className="text-base font-normal text-gray-500">Total Request Property</h3>
                        </div>
                        
                     </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{requestCount}</span>
                           <h3 className="text-base font-normal text-gray-500">Total Users</h3>
                        </div>
                       
                     </div>
                  </div>
               </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="mb-4 flex items-center justify-between">
                        <div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Property</h3>
                        </div>
                        <div className="flex-shrink-0">
                           <a href="/property-list" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                        </div>
                     </div>
                     <div className="flex flex-col mt-8">
                        <div className="overflow-x-auto rounded-lg">
                           <div className="align-middle inline-block min-w-full">
                              <div className="shadow overflow-hidden sm:rounded-lg">
                                 <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                       <tr>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Property Name
                                          </th>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            SQF
                                            </th>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Price
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    {property && property.map((i, k) => 
                                    
                                    <tr key={k}>
                                        
                                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                          <a href={route('property.list.details', i.id)}>{i.title}</a>   
                                          </td>
                                      
                                        
                                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                          <a href={route('property.list.details', i.id)}>{i.sqf}</a>    
                                          </td>
                                         
                                          
                                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                          <a href={route('property.list.details', i.id)}> {i.price}  </a>
                                          </td>
                                        
                                          
                                       </tr>
                                    )}
                                       
                                       
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                     <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900">Latest Request</h3>
                        <a href="/request-property-list" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                        View all
                        </a>
                     </div>
                     <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                           <thead>
                              <tr>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Name</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Mobile</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">Property Name</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">Date</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100">
                              {latest_request && latest_request.map((i, k) => 
                              <tr className="text-gray-500" key={k}>
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">{i.name}</th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">{i.phone}</td>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">{i.property_title}</td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">{i.date}</td>
                                
                           </tr>
                              )}
                              
                              
                           </tbody>
                        </table>
                     </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Top Visitor of Property Overview</h3>
                     <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                           <thead>
                              <tr>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Property Name</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">sqf</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">Price</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100">
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">30%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             <div className="bg-cyan-600 h-2 rounded-sm" style={{ width:"30%"}}></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">24%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             <div className="bg-orange-300 h-2 rounded-sm" style={{ width: "24%"}}></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">18%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             <div className="bg-teal-400 h-2 rounded-sm" style={{ width: "18%"}}></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">12%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             <div className="bg-pink-600 h-2 rounded-sm" style={{ width: "12%" }}></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">9%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             <div className="bg-indigo-600 h-2 rounded-sm" style={{ width: "9%"}}></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="text-gray-500">
                                 <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                 <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                 <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">7%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             <div className="bg-purple-500 h-2 rounded-sm" style={{ width: "7%"}}></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
   
</div> 
        </>
    );
}
Index.layout = (page) => <LayoutDashboard children={page} />;
export default Index;
