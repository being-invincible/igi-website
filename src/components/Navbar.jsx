import { useState } from 'react';
import { useTranslation } from "react-i18next";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { MdSegment, MdClear } from "react-icons/md";

import { SlGlobe } from "react-icons/sl";


const Link = ({ page, selectedPage, setSelectedPage}) => {
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

const Navbar = ({ selectedPage, setSelectedPage, home, about, products, contact, services }) => {

    const { t, i18n } = useTranslation();

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
                        <img className='w-12 lg:w-14' src="logo_footer.jpg" alt="Logo" />
                        <div className='flex justify-between gap-16 font-montserrat text-md font-semibold'>
                        <AnchorLink className={`${selectedPage === Object.keys({home})[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all`}
                            href={`#${Object.keys({home})[0]}`}
                            onClick={() => setSelectedPage(home)}
                            >
                                {home}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({about})[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all`}
                            href={`#${Object.keys({about})[0]}`}
                            onClick={() => setSelectedPage(about)}
                            >
                                {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({products})[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all`}
                            href={`#${Object.keys({products})[0]}`}
                            onClick={() => setSelectedPage(products)}
                            >
                                {products}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({services})[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all`}
                            href={`#${Object.keys({services})[0]}`}
                            onClick={() => setSelectedPage(services)}
                            >
                                {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({contact})[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all`}
                            href={`#${Object.keys({contact})[0]}`}
                            onClick={() => setSelectedPage(contact)}
                            >
                                {contact}
                        </AnchorLink>
                        
                    </div>
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
                        <img className='w-12 lg:w-14' src="logo_footer.jpg" alt="Logo" />
                        <select onChange={onOptionChangeHandler} className="bg-magic-potion px-2 h-[25px] rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                        {options.map((option, index) => {
                            return <option className='py-2' key={index} >
                                {option}
                            </option>
                        })}
                        </select>
                        <button className='rounded-full p-1'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <MdSegment className='fill-magic-potion' size={30} />
                    </button>
                    </div>
                )}

                {/* Mobile Menu Popup */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-satin-linen w-[300px]'>
                        {/* Close Icon */}
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <MdClear size={30} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className='flex flex-col gap-10 ml-[33%] pt-10 text-2xl'>
                        <Link 
                            page={home}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page={about}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Services"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Packages"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;