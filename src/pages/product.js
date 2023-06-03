import React from 'react'
import EachProducts from '../scenes/EachProducts'
import Navbar02 from '../components/Navbar02'
import Footer from "../components/Footer";


const Products = () => {
  return (
    <div>
      <Navbar02 />

      <div class="grid min-h-screen items-center mx-10">
        <div class="grid grid-cols-10">
          <div class="col-span-2 bg-blue-500 text-center">Hello</div>
          <div class="col-span-8 bg-red-500 text-center ml-10">
            <EachProducts />
          </div>

        </div>
      </div>


      <div className="md:justify-between md:items-center">
        <div className="mx-5 lg:mx-20">
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Products