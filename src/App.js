import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import useMediaQuery from "./hooks/useMediaQuery";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";

import Landing from "./scenes/Landing";
import About from "./scenes/About";

import Footer from "./components/Footer";

import Product from "./scenes/Product";
import CarouselBG from "./scenes/CarouselBG";
import ContactSection from "./scenes/ContactSection";

import Home from "./pages/home";
import Products from "./pages/product";
import EachProducts from "./scenes/EachProducts";
import Contact from "./pages/contact";


function App() {

  useEffect(() => {
    window.addEventListener('error', e => {
      if (e.message === 'ResizeObserver loop limit exceeded' || e.message === 'Script error.') {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        )
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        )
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    })
  }, [])

  const { t, i18n } = useTranslation();

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboutMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Router>
    <ScrollToTop>
    <div className="app">
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:productId" element={<EachProducts />}></Route>
      </Routes>

    </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;

