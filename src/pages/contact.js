import React from 'react'
import ContactSection from '../scenes/ContactSection';
import Navbar02 from '../components/Navbar02';
import Footer from '../components/Footer';

const Contact = () => {

    
  return (
    <div>
        <Navbar02 />
        <ContactSection />

        <div className="md:justify-between md:items-center">
        <div className="mx-5 lg:mx-20">
          <Footer />
        </div>
      </div>
    </div>
    
  )
}

export default Contact