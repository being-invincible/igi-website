import { useState } from "react";
import { useTranslation } from "react-i18next";

import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";

import Landing from "./scenes/Landing";
import About from "./scenes/About";

import Footer from "./components/Footer";

import Product from "./scenes/Product";
import CarouselBG from "./scenes/CarouselBG";
import ContactSection from "./scenes/ContactSection";


function App() {

  const { t, i18n } = useTranslation();

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboutMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app">

      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} home={t("home")} about={t("about")} products={t("products")} contact={t("contact")} services={t("services")} />

      <CarouselBG autoSlide="true" />
      {/* <Landing setSelectedPage={setSelectedPage} companyName={t("companyName")} slogan={t("slogan")} button01={t("button01")} button02={t("button02")} /> */}
      
      {/* About */}
      
      <About setSelectedPage={setSelectedPage} aboutTitle={t("aboutTitle")} 
      aboutContent="Imran Gulf Industries F. Co. is a leading provider of tailor-made solutions and premium quality products, founded in Saudi Arabia with a decade-long track record of excellence. We understand the importance of providing our customers with the very best in terms of quality, comfort, and style. Our specialization in supplying hotel linens to the hospitality industry and luxury bed linens to discerning households reflects our commitment to meeting the highest standards of elegance, luxury, and beauty. Whether you are a hotelier looking to elevate your guests' experience, or a household with an eye for luxury and comfort, we have the perfect solutions for you."
       button02={t("button02")} button03={t("button03")} />
      
      <Product products={t("products")} />

      <Landing setSelectedPage={setSelectedPage} companyName={`“20 Years In Hospitality Field, Dedicated To The Best
      Hotel Linen Supplier In Saudi Arabia”`} 
      slogan="Find the Products You’re Looking For" button01={t("button01")} button02="Download Catalogue" />
      
      {/* Nav Floating Dots */}
      {/* <div className="">
        {isAboutMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
      </div> */}

      {/* Services */}
      {/* <div className="bg-gradient-to-tr from-coyote to-arylide-yellow">
        <div className="w-5/6 mx-auto">
        <Services services={t("services")} 
        serviceTitle01={t("serviceTitle01")} serviceContent01={t("serviceContent01")}
        serviceTitle02={t("serviceTitle02")} serviceContent02={t("serviceContent02")} 
        serviceTitle03={t("serviceTitle03")} serviceContent03={t("serviceContent03")} 
        serviceTitle04={t("serviceTitle04")} serviceContent04={t("serviceContent04")} 
        serviceTitle05={t("serviceTitle05")} serviceContent05={t("serviceContent05")}
        serviceTitle06={t("serviceTitle06")} serviceContent06={t("serviceContent06")}
        serviceTitle07={t("serviceTitle07")} serviceContent07={t("serviceContent07")}
        serviceTitle08={t("serviceTitle08")} serviceContent08={t("serviceContent08")}
        serviceTitle09={t("serviceTitle09")} serviceContent09={t("serviceContent09")}
        />
        </div>
      </div> */}
      
      {/* Packages */}
      {/* <div className="bg-olive">
        <div className="w-5/6 mx-auto md:h-full">
        <Packages packages={t("packages")} />
        </div>
      </div> */}

      {/* <div className="bg-olive md:justify-between md:items-center md:h-full">
        <div className="w-5/6 mx-auto">
        <Contact contact={t("contact")} contactContent={t("contactContent")} />
        </div>
      </div> */}

      <ContactSection />

      <div className="md:justify-between md:items-center">
        <div className="mx-5 lg:mx-20">
        <Footer />
        </div>
      </div>

      

    </div>
  );
}

export default App;

