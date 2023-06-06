import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react'

const Footer =({data})=> {
  const formWrapper = document.querySelector(".formbold-form-wrapper");
  const crossIcon = document.querySelector(".cross-icon");
  const chatIcon = document.querySelector(".chat-icon");
  function chatboxToogleHandler() {
    formWrapper.classList.toggle("hidden");
    crossIcon.classList.toggle("hidden");
    chatIcon.classList.toggle("hidden");
  }
  return (
    <>
    

  <footer className="text-gray-600 body-font bg-stone-100 rounded-t-3xl border-[#064d83] border-2">
 
  
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col " style={{borderBottom:"1px solid #064d83"}}>
     
      <div className="w-[80%] md:w-[30%] lg:w-[20%] xl:w-[20%] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={data.logo_image} alt=""/>
        </a>
        <p className="mt-4 text-lg text-[#064d83]">Expat Accommodation Provider</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
     
      <div className=" md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-[#064d83] tracking-widest text-md mb-3 text-2xl">General Link
</h2>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/" >Home</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/about" >About Us</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/contact" >Contact Us</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/faq">FAQ</a></p>
              {/* <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/privacy-policy" >Privacy Policy</a></p> */}
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/terms-conditions" >Terms and Conditions</a></p>
              {/* <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/cookies" >Cookies Policy</a></p>
              <p className=" mt-1 text-[#064d83]"> <a className='text-md' href="/sitemap_page" >Site Map</a></p> */}
             
        </div>
        <div className=" md:w-1/2 w-full px-4 mt-10 md:mt-0 lg:mt-0 xl:mt-0">
          <h2 className="title-font font-bold text-[#064d83] tracking-widest text-md mb-3 text-2xl">Contact Us
</h2>
              <p className=" mt-1 text-[#064d83] text-lg"><i className="uil uil-map-marker"></i> Plot: 19 & 20, Road: 113/A, Gulshan, Dhaka 1212</p>
              <p className=" mt-1 text-[#064d83]  text-lg"><i className="uil uil-envelope-alt"></i>  nasrullah@rentsincorporation.com</p>
              {/* <p className=" mt-1 text-[#064d83]"><i className="uil uil-envelope-alt"></i> support@domain.com</p> */}
              <p className=" mt-1 text-[#064d83]  text-lg"><i className="uil uil-phone-alt"></i> +88 01616 171 171</p>
        </div>
        
      </div>
    </div>
    <div className="py-6">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-[#064d83] text-md text-center sm:text-left">Made ❤️ with Dhaka. Copyright © 2023 FurHouz, All rights reserved
          {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">Rents.com.bd</a> */}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-[#064d83]" href='https://www.facebook.com/furhouzes?_rdc=1&_rdr'>
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          {/* <a className="ml-3 text-[#064d83]">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a> */}
          {/* <a className="ml-3 text-[#064d83]">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a> */}
          {/* <a className="ml-3 text-[#064d83]">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a> */}
        </span>
      </div>
    </div>
  </footer>
  <div class="flex items-center  right-0 bottom-0 fixed justify-center p-12">
  
  <div class="w-full">
    <div
      class="formbold-form-wrapper mx-auto hidden w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white"
    >
      <div
        class="flex items-center justify-between rounded-t-lg bg-[#6A64F1] py-4 px-9"
      >
        <h3 class="text-xl font-bold text-white">Let's chat? - Online</h3>
        <button onClick={chatboxToogleHandler} class="text-white">
          <svg width="17" height="17" viewBox="0 0 17 17" class="fill-current">
            <path
              
              d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
            />
            <path
              
              d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
            />
          </svg>
        </button>
      </div>
      <form
        action="https://formbold.com/s/FORM_ID"
        method="POST"
        class="py-6 px-9"
      >
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="ENter your name"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Explain your queries"
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div>
          <button
            class="hover:shadow-form w-full rounded-md bg-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Start Chat
          </button>
        </div>
      </form>
    </div>
    <div
      class="mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5 message-button"
    >
      <a href='https://api.whatsapp.com/send?phone=+8801616171171&text='
        class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-600 text-white"
       // onClick={chatboxToogleHandler}
      >
        <span class="cross-icon hidden">
          <svg
            width="14"
            height="14"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              
              d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
              fill="white"
            />
            <path
              
              d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
              fill="white"
            />
          </svg>
        </span>
        <span class="chat-icon">
        <i class="uil uil-whatsapp mx-4 text-4xl"></i>
        </span>
        <p className='absolute w-52 right-14 rounded-xl shadow-md py-2 bg-white px-2'>
       <span className='text-black'>  Need Help? Chat with us </span>
       </p>
      </a>
    </div>
  </div>
</div>
{/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
@-webkit-keyframes fadeIn {
  from { opacity:0 }
  to { opacity:1 }
}
@keyframes fadeIn {
  from { opacity:0 }
  to { opacity:1 }
}
@-webkit-keyframes fadeInUp {
  from { opacity:0; transform:translate3d(0,10%,0) }
  to { opacity:1; transform:translate3d(0,0,0) }
}
@keyframes fadeInUp {
  from { opacity:0; transform:translate3d(0,10%,0) }
  to { opacity:1; transform:translate3d(0,0,0) }
}

dialog[open] { -webkit-animation-duration:0.3s; animation-duration:0.3s; -webkit-animation-fill-mode:both; animation-fill-mode:both; -webkit-animation-name:fadeInUp; animation-name:fadeInUp }
dialog::backdrop { background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(3px); -webkit-animation-duration:0.3s; animation-duration:0.3s; -webkit-animation-fill-mode:both; animation-fill-mode:both; -webkit-animation-name:fadeIn; animation-name:fadeIn  }
</style>

<div class="w-screen h-screen bg-gray-100 flex items-center justify-center px-5 py-5 relative" x-data="{showCookieBanner:true}">
    <section class="w-full p-5 lg:px-24 absolute top-0 bg-gray-600" x-show="showCookieBanner">
        <div class="md:flex items-center -mx-3">
            <div class="md:flex-1 px-3 mb-5 md:mb-0">
                <p class="text-center md:text-left text-white text-xs leading-tight md:pr-12">We and selected partners and related companies, use cookies and similar technologies as specified in our Cookies Policy. You agree to consent to the use of these technologies by clicking Accept, or by continuing to browse this website. You can learn more about how we use cookies and set cookie preferences in Settings.</p>
            </div>
            <div class="px-3 text-center">
                <button id="btn" class="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl mr-3" @click.prevent="document.getElementById('cookiesModal').showModal()">Cookie settings</button>
                <button id="btn" class="py-2 px-8 bg-green-400 hover:bg-green-500 text-white rounded font-bold text-sm shadow-xl" @click.prevent="showCookieBanner=!showCookieBanner">Accept cookies</button>
            </div>
        </div>
    </section>
    <dialog id="cookiesModal" class="h-auto w-11/12 md:w-1/2 bg-white overflow-hidden rounded-md p-0">
        <div class="flex flex-col w-full h-auto">
            <div class="flex w-full h-auto items-center px-5 py-3">
                <div class="w-10/12 h-auto text-lg font-bold">
                    Cookie settings
                </div>
                <div class="flex w-2/12 h-auto justify-end">
                    <button @click.prevent="document.getElementById('cookiesModal').close();" class="cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800">
                        <i class="mdi mdi-close-circle-outline text-2xl"></i>
                    </button>
                </div>
            </div>
            <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                <div class="flex-1">
                    <p>Strictly necessary cookies</p>
                </div>
                <div class="w-10 text-right">
                    <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                </div>
            </div>
            <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                <div class="flex-1">
                    <p>Cookies that remember your settings</p>
                </div>
                <div class="w-10 text-right">
                    <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                </div>
            </div>
            <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                <div class="flex-1">
                    <p>Cookies that measure website use</p>
                </div>
                <div class="w-10 text-right">
                    <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                </div>
            </div>
            <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                <div class="flex-1">
                    <p>Cookies that help with our communications and marketing</p>
                </div>
                <div class="w-10 text-right">
                    <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                </div>
            </div>
            <div class="flex w-full px-5 py-3 justify-end">
                <button @click.prevent="document.getElementById('cookiesModal').close();" class="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl">Save settings</button>
            </div>
        </div>
    </dialog>
</div>

<!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div> */}

  

    </>
  )
}
export default Footer;