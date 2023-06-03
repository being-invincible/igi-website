import { useState } from 'react';
import { useTranslation } from "react-i18next";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { MdSegment, MdClear } from "react-icons/md";
import { FaHome, FaInfoCircle, FaCartPlus, FaHandsHelping, FaPhoneSquareAlt } from "react-icons/fa"

import { FaBackward } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

import { SlGlobe } from "react-icons/sl";


const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-toddy-gold" : "text-magic-potion"}
            hover:text-toddy-gold transition-all`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar02 = ({ selectedPage, setSelectedPage, home, about, products, contact, services }) => {

    const { t, i18n } = useTranslation();
    let navigate = useNavigate();

    // Language Dropdown
    const options = ['English', 'Arabic'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
        i18n.changeLanguage(event.target.value)
    }

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className='z-40 w-full fixed top-0 bg-alabaster shadow-md'>
            <div >

                {/* Desktop Nav */}
                {isAboveSmallScreens ? (
                    <div className='w-full py-4 flex items-center justify-between mx-auto px-20'>

                        <button
                            className="text-magic-potion hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold gap-2"
                            onClick={() => navigate(-1)}
                        >
                            <FaBackward />
                            Back
                        </button>

                        <a href='/'>
                            <img className='w-12 lg:w-14' src="logo_footer.jpg" alt="Logo" />
                        </a>
                        
                        <select onChange={onOptionChangeHandler} className="bg-magic-potion px-2 py-1 rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                            {options.map((option, index) => {
                                return <option className='py-2' key={index} >
                                    {option}
                                </option>
                            })}
                        </select>
                    </div>

                ) : (

                    <div className='p-4 flex items-center justify-between gap-16'>
                        <a href='/'><img className='w-12 lg:w-14' src="logo_footer.jpg" alt="Logo" /></a>
                        <select onChange={onOptionChangeHandler} className="bg-magic-potion px-2 h-[25px] rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                            {options.map((option, index) => {
                                return <option className='py-2' key={index} >
                                    {option}
                                </option>
                            })}
                        </select>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar02;