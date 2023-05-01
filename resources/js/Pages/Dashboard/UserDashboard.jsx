import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

const Admin = () => {
    return (
        <>
       
<div class="antialiased bg-[#064d83]">
  <header class="lg:px-16 px-6  flex flex-wrap items-center lg:py-0 py-2 w-[80%] mx-auto">
    <div class="flex-1 flex justify-between items-center ">
      <a href="#">
       <svg width="50px" height="50px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M245.23538,153.523831 C259.246873,139.512338 259.246423,116.713014 245.23493,102.70107 C238.447775,95.9134648 229.422873,92.1757746 219.823775,92.1757746 C217.544563,92.1757746 215.300507,92.3835493 213.111887,92.7932394 C222.650141,86.2688451 228.831099,75.2978028 228.831099,63.0985915 C228.831099,43.2829296 212.709859,27.1616901 192.894197,27.1616901 C180.670648,27.1616901 169.680676,33.3674366 163.161239,42.9376901 C165.31831,31.5605634 161.934873,19.4010141 153.291718,10.7578592 C146.504563,3.97025352 137.479662,0.232112676 127.880563,0.232112676 C118.281465,0.232112676 109.256563,3.97025352 102.469408,10.7578592 C93.8258028,19.4010141 90.4428169,31.5610141 92.5998873,42.9381408 C86.0804507,33.3678873 75.0900282,27.1616901 62.8664789,27.1616901 C43.0508169,27.1616901 26.9295775,43.2829296 26.9295775,63.0985915 C26.9295775,75.2982535 33.1100845,86.2688451 42.648338,92.7927887 C40.4597183,92.3835493 38.2165634,92.1757746 35.9369014,92.1757746 C26.3378028,92.1757746 17.3133521,95.9139155 10.5257465,102.701521 C3.73814085,109.489127 0,118.514028 0,128.112676 C0,137.711775 3.73814085,146.736225 10.5257465,153.524282 C17.3133521,160.311437 26.3382535,164.049577 35.9369014,164.049577 C38.2161127,164.049577 40.4592676,163.841803 42.648338,163.432113 C33.1100845,169.956507 26.9295775,180.927549 26.9295775,193.126761 C26.9295775,212.942423 43.0508169,229.063211 62.8664789,229.063211 C75.0900282,229.063211 86.0809014,222.857465 92.5998873,213.287211 C90.4428169,224.664789 93.8262535,236.824789 102.469408,245.467944 C109.257014,252.255099 118.281915,255.993239 127.880563,255.993239 C137.479662,255.993239 146.504563,252.255099 153.291718,245.467493 C161.934873,236.824338 165.317859,224.663887 163.160789,213.286761 C169.680225,222.857014 180.670648,229.063211 192.894197,229.063211 C212.709859,229.063211 228.831099,212.942423 228.831099,193.126761 C228.831099,180.927549 222.650141,169.956507 213.112338,163.432113 C215.300958,163.841803 217.544563,164.049577 219.823775,164.049577 C229.422873,164.049577 238.447775,160.311437 245.23538,153.523831" fill="#000000"></path>
        <path d="M234.391437,113.538254 C226.34231,105.489577 213.292169,105.489577 205.243042,113.538254 L163.05893,113.538254 L192.887887,83.7097465 C204.270873,83.7097465 213.498592,74.4820282 213.498592,63.0985915 C213.498592,51.7156056 204.270873,42.4874366 192.887887,42.4874366 C181.504451,42.4874366 172.276732,51.7156056 172.276732,63.0985915 L142.448225,92.9275493 L142.448225,50.7434366 C150.496901,42.6943099 150.496901,29.644169 142.447775,21.5950423 C134.398648,13.5459155 121.348507,13.5459155 113.29938,21.5950423 C105.250254,29.644169 105.250254,42.6943099 113.29938,50.7434366 L113.29938,92.9275493 L83.4708732,63.0985915 C83.4708732,51.7156056 74.2431549,42.4874366 62.8597183,42.4874366 C51.4767324,42.4874366 42.2485634,51.7156056 42.2485634,63.0985915 C42.2485634,74.4820282 51.4767324,83.7097465 62.8597183,83.7097465 L92.6882254,113.538254 L50.5045634,113.538254 C42.4549859,105.489127 29.4048451,105.489577 21.3557183,113.538704 C13.3065915,121.587831 13.3065915,134.637972 21.3557183,142.687099 C29.4048451,150.736225 42.4554366,150.736225 50.5045634,142.687099 L92.6882254,142.687099 L62.8597183,172.515606 C51.4767324,172.515606 42.2485634,181.743324 42.2485634,193.126761 C42.2485634,204.509746 51.4767324,213.737915 62.8597183,213.737915 C74.2431549,213.737915 83.4708732,204.509746 83.4708732,193.126761 L113.29938,163.298254 L113.29938,205.481915 C105.250254,213.531042 105.250254,226.581634 113.29938,234.630761 C121.348507,242.679887 134.399099,242.679887 142.448225,234.630761 C150.496901,226.581634 150.496901,213.531042 142.448225,205.481915 L142.448225,163.298254 L172.276732,193.126761 C172.276732,204.509746 181.504451,213.737915 192.887887,213.737915 C204.270873,213.737915 213.498592,204.509746 213.498592,193.126761 C213.498592,181.743324 204.270873,172.515606 192.887887,172.515606 L163.05893,142.687099 L205.243042,142.687099 C213.292169,150.736225 226.34231,150.736225 234.391437,142.687099 C242.440563,134.637972 242.440563,121.58738 234.391437,113.538254" fill="#FFB13B"></path>
    </g>
</svg>
    </a>
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full p-6" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-xl" href="#">Home</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-xl" href="#">Property</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-xl" href="#">Setting</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-xl" href="#">Notification</a></li>
        <li><InertiaLink href="/logout" className="hidden sm:inline-flex ml-5  text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center items-center mr-3">
        <i class="uil uil-signout text-xl"></i> 
                  Logout
               </InertiaLink></li>
      </ul>
    </nav>
    

  </div>

  </header>
  </div>
  <div
	class='flex sm:flex-row flex-col space-y-2 sm:space-x-2 flex-row w-[80%] mx-auto py-16 items-center justify-center '>
	<div
		class='border-2 flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-blue-300'>
		<div>
			<div class="font-bold text-5xl">
				4
			</div>
			<div class="font-bold text-sm">
				Total
			</div>
		</div>
	</div>
	<div
		class='border-2 flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-purple-300'>
	
		<div >
			<div class="font-bold text-5xl text-center">
				1
			</div>
			<div class="font-bold text-sm">
				In Progess
			</div>
		</div>
	</div>
	<div
		class='border-2 flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-red-300'>
	
		<div>
			<div class="font-bold text-5xl text-center">
				2
			</div>
			<div class="font-bold text-sm">
				Reject
			</div>
		</div>
	</div>
	<div
		class=' border-2 flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-green-300'>
		
		<div>
			<div class="font-bold text-5xl text-center">
				1
			</div>
			<div class="font-bold text-sm">
				Approve
			</div>
		</div>
	</div>
</div>
      
  <div class="px-4 py-16 w-[80%] mx-auto grid grid-cols-4 bg-gray-50 my-6 gap-6 shadow-lg">
    
    <div className=''>
      
      <img className='rounded-full h-96 w-96' src='https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg'/>
    </div>
    <div className='col-span-2'>
    <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">Jane</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">Doe</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">Female</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">+11 998001001</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Full Information</button>
                </div>
   
    </div>
    <div>
    <div class="max-w-2xl mx-auto">

<div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h3>
      <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
      </a>
 </div>
 <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Neil Sims
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $320
                  </div>
              </div>
          </li>
          <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Bonnie Green
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $3467
                  </div>
              </div>
          </li>
          <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Michael Gough
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $67
                  </div>
              </div>
          </li>
          <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Lana Byrd
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $367
                  </div>
              </div>
          </li>
          <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Thomes Lean
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2367
                  </div>
              </div>
          </li>
      </ul>
 </div>
</div>

</div>
    </div>
 
  </div>
  <div class="w-[80%] mx-auto px-4 sm:px-8 shadow-lg my-10 border-2">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight py-4">Notifications</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Vera Carpenter
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Jan 21, 2020
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Activo</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Blake Bowman
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Jan 01, 2020
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Activo</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Dana Moore
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Jan 10, 2020
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Suspended</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-5 py-5 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Alonzo Cox
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                </td>
                                <td class="px-5 py-5 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                </td>
                                <td class="px-5 py-5 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Inactive</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  <footer className='bg-[#064d83]'>
<div className='w-[80%] mx-auto p-6 text-white'>
<p className='text-center'>@gmail.com</p>
</div>
  </footer>


            
        </>
    );
}

export default Admin;
