import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { useTranslation } from 'react-i18next'


const Product = ({ products }) => {

    const { t, i18n } = useTranslation();

    return (

        <section class="text-gray-600 mx-5 lg:mx-20">
            <div id='products' class="container py-10 lg:pb-10 lg:pt-28">
                <div class="flex flex-wrap w-full mb-10">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-tulip-yellow">{products}</h1>
                        <div class="h-1 w-20 bg-tulip-yellow rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-magic-potion">Welcome to a world of luxurious elegance, softness, and comfort. Indulge in the sumptuousness of IGI's elegant, cozy and soft linens, curated to elevate your living and sleeping experience.</p>
                </div>

                <div class="mb-5">
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <h1 class="w-1/4 lg:w-2/12 sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">Bed Linen</h1>
                        <div class="h-0.5 w-3/4 lg:w-10/12 bg-gray-400 rounded"></div>
                    </div>
                </div>

                <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >


                    <div class="">
                        <Link to="/bed sheet">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"bed sheet"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"bed sheet"}.title`)}</h2>
                    </div>

                    <div class="">
                        <Link to="/fitted bed sheet">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"fitted bed sheet"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"fitted bed sheet"}.title`)}</h2>
                    </div>

                    <div class="">
                    <Link to="/duvet">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"duvet"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"duvet"}.title`)}</h2>

                    </div>

                    <div class="">
                    <Link to="/duvet covers">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"duvet covers"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"duvet covers"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/bed runner">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Bed Runner"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"bed runner"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"bed runner"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/pillow">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"pillow"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"pillow"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/pillow cases">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Pillow Cases"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"pillow cases"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"pillow cases"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/pillow protectors">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Pillow Protectors"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"pillow protectors"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"pillow protectors"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/mattress protectors">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Mattress Protectors"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"mattress protectors"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"mattress protectors"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/mattress encasement protectors">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Mattress Encasement Protectors"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"mattress encasement protectors"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"mattress encasement protectors"}.title`)}</h2>

                    </div>

                    <div class="">
                    <Link to="/bed skirt">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Bed Skirt"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"bed skirt"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"bed skirt"}.title`)}</h2>

                    </div>

                </div>

                <div class="mt-10 mb-8">
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <h1 class="w-1/4 lg:w-2/12 sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">Bath Linen</h1>
                        <div class="h-0.5 w-3/4 lg:w-10/12 bg-gray-400 rounded"></div>
                    </div>
                </div>

                <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >


                    <div class="">

                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://images.unsplash.com/photo-1574421233376-06f2ccf017f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                            />
                        </div>

                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bath Towel</h2>



                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/free-photo/close-up-towels-held-hands_23-2148223773.jpg?w=740&t=st=1682854464~exp=1682855064~hmac=33e36da94a76d0ce7bac85ba2bc687ff5d7aa8774ed2766b76dd2d0dd28d8cdd"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Hand Towel</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://images.pexels.com/photos/3872899/pexels-photo-3872899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Face Towel</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/free-photo/luxury-pool-poolside-outdoor-blue_1203-5577.jpg?w=740&t=st=1682854987~exp=1682855587~hmac=fe3f4af6d1d76ff86b86b8088361412ad9c824e3574fd9ff6fd24390b0cd2a94"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Pool Towel</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/free-photo/white-cotton-bathroom-mat-home-decor_53876-133338.jpg?w=740&t=st=1682855024~exp=1682855624~hmac=cf378488a675fad58a5f752f6f4b7d85c7c43b0ee24a32729ad8f58f485d7f32"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bath Mat</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://images.pexels.com/photos/306739/pexels-photo-306739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bathrobe</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/premium-photo/white-home-slippers-lying-blue-rug_537415-92.jpg?w=740"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Hotel Slippers</h2>

                    </div>

                </div>

            </div>

        {/* Best Selling
        <div id='best-selling' class="container py-10 lg:py-10">
        <div class="mb-8">
            <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                <h1 class="w-1/4 lg:w-2/12 sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">Best Selling</h1>
                <div class="h-0.5 w-3/4 lg:w-10/12 bg-gray-400 rounded"></div>
            </div>
            </div>
            
            <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >
                    
                
            <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="https://img.freepik.com/free-photo/luxury-pool-poolside-outdoor-blue_1203-5577.jpg?w=740&t=st=1682854987~exp=1682855587~hmac=fe3f4af6d1d76ff86b86b8088361412ad9c824e3574fd9ff6fd24390b0cd2a94"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Pool Towel</h2>
                    
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
                            src="https://images.unsplash.com/photo-1574421233376-06f2ccf017f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                        />   
                    </div>
                    
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bath Towel</h2>
                    
                    
                    
                </div>

            </div> 
        </div>*/}
        </section>


    )
}

export default Product