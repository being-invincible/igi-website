import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CarouselBG = ({autoSlide = false}) => {

    const autoSlideInterval = 8000;

    const [currentSlide, setCurrentSlide] = useState(0)

    const sliderData = [
        {
            image: "/411.jpg",
            heading: "IMRAN GULF INDUSTRIES. F. CO",
            desc: "Experience the luxury of premium quality with IGI. The trusted source for hotels and home utility linen made with world class fabrics",
            id: "#about"
          },
          {
            image: "/bg-02.jpg",
            heading: "100% World Class Fabric",
            desc: "Experience the opulent allure of Farbrics, where lavish elegance intertwines with a blissful embrace.",
            id: "#fabrics"
          },
          {
            image: "/hero.jpg",
            heading: "Factory-Direct Source",
            desc: "Every order and customer request, large or small, is handled with timely offer and suggestion.",
            id: "#offering"
          },
    ];

    const prevSlide = () => {
        const isFirst = currentSlide === 0
        const newIndex = isFirst ? sliderData.length - 1 : currentSlide - 1
        setCurrentSlide(newIndex)
    }

    const nextSlide = () => {
        const isLast = currentSlide === sliderData.length - 1
        const newIndex = isLast ? 0 : currentSlide + 1
        setCurrentSlide(newIndex)
    }
    
    useEffect(() => {
        if (!autoSlide) return
        let slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
      }, [currentSlide])

  return (
    <div id='home' className="min-w-full lg:min-h-screen relative group snap-x snap-mandatory">
        <div style={{backgroundImage: `url(${sliderData[currentSlide].image})`}} className="h-[50vh] lg:min-h-screen bg-center bg-cover duration-500 z-10 flex items-center snap-center">
            
            <motion.div className='text-start w-full py-60 lg:py-60 font-serif px-[60px] lg:px-[350px]'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        hidden: {opacity:0, y:+50},
                        visible: {opacity:1, y:0}
                    }}
            >
                <div className='bg-black/25 p-5 rounded-xl'>
                <h1 className='text-xl lg:text-3xl font-semibold text-center mb-2 lg:mb-4 font-lato'>{sliderData[currentSlide].heading}</h1>
                <p className='text-sm lg:text-md lg:text-lg font-normal mb-2.5 lg:mb-5'>{sliderData[currentSlide].desc}</p>
                <div className="w-full flex place-content-center">
                <a href={sliderData[currentSlide].id} className='text-md py-1 px-3 lg:px-5 lg:py-1 text-magic-potion bg-white border-magic-potion border-2 rounded-full justify-center block place-content-center' >Learn More</a>
                </div>
                </div>
                
            </motion.div>
            
            
        </div>
        
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 p-2 bg-black/20 rounded-full cursor-pointer">
            <AiOutlineArrowLeft onClick={prevSlide} width={40} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 p-2 bg-black/20 rounded-full cursor-pointer">
            <AiOutlineArrowRight onClick={nextSlide} width={40} />
        </div>
        <div className="absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
                {sliderData.map((_, i) => (
                    <div 
                    onClick={(i)=>{setCurrentSlide(i)}}
                    className={`
                    transition-all w-3 h-3 bg-white rounded-full
                    ${currentSlide === i ? "p-2" : "bg-opacity-50"}
                  `} ></div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default CarouselBG