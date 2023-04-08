import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
  return (
    <footer id="#Footer"className="">
          <div className=" mb-0 max-h-screen max-w-screen-xl">
              
              <hr class="my-5 lg:mt-10 lg:mb-5 border-black/75 sm:mx-auto lg:my-7.5" />
              <div className="sm:flex text-blacks sm:items-center sm:justify-between">
                  
                <div className='flex items-center md:justify-between mx-auto w-full'>
                    <div className='items-center'>
                    <img className='w-20 lg:w-20' src="logo_footer.jpg" alt="Logo" />
                    </div>
                <span className="invisible md:visible font-montserrat text-justify text-xs sm:text-sm sm:text-center text-gray-800">© 2023 <a href="#home" class="hover:underline">Ahattah law & legal consultations Co.</a> - All Rights Reserved.
                </span>
                <SocialMediaIcons className="place-items-start" />
                </div>
                
              </div>
                <p className="mb-3 sm:invisible w-full visible font-montserrat text-xs text-center text-gray-800">© 2023 <a href="#home" class="hover:underline">Ahattah law & legal consultations Co.</a>
                </p>
                <p className="p-2 sm:invisible w-full visible font-montserrat text-xs text-center text-gray-500"> All Rights Reserved
                </p> 
              
          </div>
      </footer>
  )
}

export default Footer