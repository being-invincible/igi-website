import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


const Landing = ({setselectedPage, companyName, slogan, button01, button02}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060p)");

    return (
        <div>
            <section id='services'
                class="min-h-screen relative bg-hero-image bg-cover bg-center bg-no-repeat"
                >
                
                <div
                    class="absolute inset-0 bg-black/25"
                ></div>

                {/* <div
                    class="relative mx-auto max-w-screen-xl pt-60 lg:flex min-h-screen lg:items-center lg:px-8"
                > */}
                    <div class="relative px-20 font-montserrat text-start sm:text-left pt-[150px] lg:pt-[250px]">
                    <motion.div
                        class=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >
                        <h1 class="text-3xl leading-snug tracking-[1.5px] font-extrabold sm:text-5xl">
                            <strong class="block font-extrabold text-white">
                            {companyName}
                            </strong>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >

                        <p class="mt-4 font-semibold text-md text-md sm:text-xl">
                        {slogan}
                        </p>
                    </motion.div>

                    <motion.div class="mt-5 flex flex-wrap gap-4 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.75 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >
                        {/* <a
                        href="https://wa.me/966594161652"
                        class="block w-full rounded bg-russian-violet px-5 py-3 text-sm font-medium text-white shadow hover:bg-mettalic-gold focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        {button01}
                        </a> */}

                        <a
                        href="/catalog.pdf"
                        download
                        class="block w-full rounded-full bg-white px-5 py-3 text-sm font-medium text-magic-potion border-2 border-magic-potion hover:border-toddy-gold shadow hover:text-toddy-gold focus:outline-2 focus:ring active:text-rose-500 sm:w-auto"
                        >
                        {button02}
                        </a>
                    </motion.div>
                    </div>
                {/* </div> */}
            </section>
            <section
                class="h-auto relative text-magic-potion bg-cover bg-center bg-no-repeat pt-20 px-5 lg:px-20">
                    <motion.div
                        class=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >
                        <h1 className="text-xl lg:text-3xl font-bold mb-5 lg:mb-8 ">
                            Your Factory-Direct Source for Wholesale Textiles and Hotel Beddings in Bulk
                        </h1>
                        <p className="text-md mb-8 lg:mb-10" >Imran Gulf Industries F. Co. is a hotel bedding supplier in Saudi Arabia for bed, bath and hotel hospitality needs. Supplying commercial quality products to the hospitality and healthcare industries with fast shipping to commercial business. Every order and customer request, large or small, is handled with timely offer and suggestion.</p>
                        <h1 className="text-xl lg:text-3xl font-bold mb-5 lg:mb-8 ">
                            Hospitality Quality Bedding, Linens & Towels for Commercial Business
                        </h1>
                        <p>Our products are ideal for Hotels, Lodges, Resort and Day Spas, Furniture Rental Companies, Healthcare Hospitality Homes, Nursing Homes, Camps, Colleges, Universities, Property Management Companies, and many other businesses that need commercial hospitality quality linens, beddings, towels, table linens, and accessories in bulk quantities at low wholesale prices. Whether you are a seasoned buyer searching for a new source or a hotel housekeeping manager looking for purchasing wholesale textiles for commercial use, we welcome and thank you for the opportunity to help you with your hospitality, healthcare, and textiles raw material supplies.</p>
                    </motion.div>
            </section>
        </div>
    )
}

export default Landing