import React from 'react'
import { useTranslation } from 'react-i18next';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar02 from '../components/Navbar02';
import ProductCard from '../components/ProductCard'

import en from '../lng/en.json'
import ar from '../lng/ar.json'
import EachProducts from '../scenes/EachProducts';
import Footer from '../components/Footer';

const Categories = () => {

    const { t, i18n } = useTranslation();
    let navigate = useNavigate();

    const { category } = useParams();

    // Converting JSON Object to Array Map for multiple product card mapping
    const products = i18n.language === 'Arabic' ? ar[category].products : en[category].products;

    return (
        <>

        <Navbar02 />

        <section className='bg-alabaster mt-20 px-5 md:px-20 py-10'>

            {/* Brand Heading */}
            <div class="lg:w-1/2 w-full mb-5 lg:mb-8">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-tulip-yellow">{t(`${category}.title`)}</h1>
                <div class="h-1 w-20 bg-tulip-yellow rounded"></div>
            </div>

            {/* About the Brand */}
            <div class="lg:w-full w-full mb-5 lg:mb-8">
                <p class="leading-relaxed text-base text-magic-potion">{t(`${category}.description`)}</p>
            </div>

            {/* Divider with Title */}
            <div class="mb-5">
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <h1 class="w-1/4 lg:w-2/12 sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">{t("products")}</h1>
                        <div class="h-0.5 w-3/4 lg:w-10/12 bg-gray-400 rounded"></div>
                    </div>
            </div>

            {/* Products Grid */}
            <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >
            {Object.keys(products).map(key => <ProductCard link={products[key].link} img={products[key].img[0]} title={products[key].title} />)}
            </div> 
        </section>

        <Footer />

        </>
    )
}

export default Categories;