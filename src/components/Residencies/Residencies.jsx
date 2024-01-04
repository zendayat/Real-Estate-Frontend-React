import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import '../Residencies/Residencies.css'
import { sliderSettings } from '../../utils/common'

function Residencies() {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container w-[90%] mx-auto overflow-hidden relative">
            <div className="r-head flexColStart mb-8">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residences</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className="r-card gap-[0.6rem] flexColStart p-4 rounded-[10px] max-w-max m-auto transition-all duration-300 ease-in hover:scale-[1.025] hover:cursor-pointer hover:">
                                 <img src={card.image} alt="home" className=' w-full max-w-64'/>
                                 <span className="secondaryText r-price text-[1.2rem] font-semibold">
                                    <span className=' text-orange-500'>$</span><span>{card.price}</span>
                                 </span>
                                 <span className="primaryText text-[1.5rem]">{card.name}</span>
                                 <span className="secondaryText text-[0.7rem] w-[15rem]">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="r-buttons absolute gap-4 flexCenter -top-16 right-0">
            <button onClick={()=> swiper.slidePrev()} className=' text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 border-none bg-gray-400/50 cursor-pointer rounded-md'>&lt;</button>
            <button onClick={()=> swiper.slideNext()} className=' text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 border-none bg-gray-200/30 cursor-pointer rounded-md shadow-xl'>&gt;</button>
        </div>
    )
}