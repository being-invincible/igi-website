import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProductCard = ({link, img, title} ) => {
    // console.log(img,title,link)
    return (
        <div class="">
            <Link to={link}>
                <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                >
                    <img
                        alt="First Product"
                        class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                        src={img}
                    />
                </div>
            </Link>
            <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{title}</h2>
        </div>
    )
}

export default ProductCard