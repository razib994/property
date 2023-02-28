import React from 'react';

const ImageGallery = () => {
    return (
        <>
           <section className="py-16">
           <div className="text-center items-center w-[92%] mx-auto pt-5">
                <h2 className="text-4xl mb-3">Featured Property Types </h2>
                <p className="mb-5">Find All Type in Property </p>
            </div>
           {/* <div className="masonry  w-[82%] mx-auto ">
  <div className="grid">
    <img src="https://source.unsplash.com/random/1"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/2"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/3"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/4"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/5"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/6"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/7"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/8"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <img src="https://source.unsplash.com/random/9"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
 

  
</div> */}
<div className="bg-blue-300 max-h-96 rounded-xl hover:shadow-xl overflow-hidden relative">
        <div className="absolute p-4 z-20 h-full w-full justify-between flex flex-col">
            <button className="p-2 backdrop-blur-sm bg-gray-800/30 w-12 h-12 justify-center items-center flex self-end rounded-xl border-gray-400/50 border hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
            </button>
            <div className="p-4 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-800/30 self-end border-gray-400/50 border">
                <h1 className="text-white font-bold text-3xl mb-10">
                    Dubai
                </h1>
                <div className="flex justify-between">
                    <h3 className="text-white font-bold text-lg capitalize">
                        From $788
                    </h3>
                    <h3 className="text-white font-bold text-lg capitalize">
                        63 tours
                    </h3>
                </div>
            </div>
        </div>
        <img className="w-full" src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
    </div>
            </section> 
        </>
    );
}

export default ImageGallery;
