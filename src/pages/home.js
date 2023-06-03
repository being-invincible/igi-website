import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import useMediaQuery from "../hooks/useMediaQuery";

import Navbar from "../components/Navbar";
import Landing from "../scenes/Landing";
import About from "../scenes/About";
import Footer from "../components/Footer";
import Product from "../scenes/Product";
import CarouselBG from "../scenes/CarouselBG";
import ContactSection from "../scenes/ContactSection";
import { useState } from "react";
import Fabric from "../scenes/Fabric";
import Carousel from "../scenes/Carousel";

const Home = () => {

  const { t, i18n } = useTranslation();

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboutMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} home={t("home")} about={t("about")} products={t("products")} contact={t("contact")} services={t("services")} lang={t("lang")}  />
      <CarouselBG autoSlide="true" />

      {/* <Carousel /> */}
      
      {/* About */}
      <About setSelectedPage={setSelectedPage} aboutTitle={t("aboutTitle")} 
      aboutContent="Imran Gulf Industries F. Co. is a leading provider of tailor-made solutions and premium quality products, founded in Saudi Arabia with a decade-long track record of excellence. We understand the importance of providing our customers with the very best in terms of quality, comfort, and style. Our specialization in supplying hotel linens to the hospitality industry and luxury bed linens to discerning households reflects our commitment to meeting the highest standards of elegance, luxury, and beauty. Whether you are a hotelier looking to elevate your guests' experience, or a household with an eye for luxury and comfort, we have the perfect solutions for you."
       button02={t("button02")} button03={t("button03")} />
      
      <Product products={t("products")} />

      <Landing setSelectedPage={setSelectedPage} companyName={`“20 Years In Hospitality Field, Dedicated To The Best
      Hotel Linen Supplier In Saudi Arabia”`} 
      slogan="Find the Products You’re Looking For" button01={t("button01")} button02="Download Catalogue" />

      <Fabric />

      <ContactSection />

      <div className="md:justify-between md:items-center">
        <div className="mx-5 lg:mx-20">
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home