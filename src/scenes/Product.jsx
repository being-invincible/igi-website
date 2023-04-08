import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


const Product = ({products}) => {
  return (

        <section  class="text-gray-600 mx-5 lg:mx-20">
        <div id='products' class="container py-10 lg:pb-10 lg:pt-28">
            <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{products}</h1>
                <div class="h-1 w-20 bg-magic-potion rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Welcome to a world of luxurious elegance, softness, and comfort. Indulge in the sumptuousness of IGI's elegant, cozy and soft linens, curated to elevate your living and sleeping experience.</p>
            </div>
            {/* <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
                
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                
                <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-150" src="https://dummyimage.com/723x403" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                
            </div>
            
            </div> */}

            <div class="grid gap-5 grid-cols-1 md:grid-cols-3" >
                    
                
                <div class="">
                    
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/bs.jpeg"
                        />   
                    </div>
                    
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bed Sheet</h2>
                    
                    
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/duvet.jpg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Duvet</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/bedrunner.jpg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bed Runner</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/pillow.jpeg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Pillow</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/mattress.jpg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Mattress Protectors</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/bed-skirt.jpeg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bed Skirt</h2>
                    
                </div>

            </div>
        </div>
        <div id='best-selling' class="container py-10 lg:py-20">
            <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Best Selling</h1>
                <div class="h-1 w-20 bg-magic-potion rounded"></div>
            </div>
            {/* <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Welcome to a world of luxurious elegance, softness, and comfort. Indulge in the sumptuousness of IGI's elegant, cozy and soft linens, curated to elevate your living and sleeping experience.</p> */}
            </div>
            
            <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >
                    
                
                <div class="">
                    
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/bs.jpeg"
                        />   
                    </div>
                    
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bed Sheet</h2>
                    
                    
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/duvet.jpg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Duvet</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/pillow.jpeg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Pillow</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/mattress.jpg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Mattress Protectors</h2>
                    
                </div>

            </div>
        </div>
    </section>

    
  )
}

export default Product