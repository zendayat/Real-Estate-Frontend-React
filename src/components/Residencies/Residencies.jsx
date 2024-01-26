import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import '../Residencies/Residencies.css'
import { sliderSettings } from '../../utils/common'
import PropertyCard from '../PropertyCard/PropertyCard'
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'

function Residencies() {

    const{data, isError, isLoading} = useProperties()
    if(isError){
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    )

  }
  if(isLoading){
    return(
      <div className="wrapper flexCenter h-[60vh]">
         <PuffLoader
         height="80"
         width = "80"
         radius = {1}
         color = "#4066ff"
         aria-label='puffLoading'
         />
      </div>
    )
  }
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container w-[90%] mx-auto overflow-hidden relative">
            <div className="r-head items-center flex flex-col justify-center md:items-start mb-8">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residences</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.slice(0,8).map((card, i)=> (
                        <SwiperSlide key={i}>
                            <PropertyCard card = {card}/>
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
        <div className="r-buttons ii absolute gap-4 flexCenter -top-16 right-0">
            <button onClick={()=> swiper.slidePrev()} className=' text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 border-none bg-gray-400/50 cursor-pointer rounded-md'>&lt;</button>
            <button onClick={()=> swiper.slideNext()} className=' text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 border-none bg-gray-200/30 cursor-pointer rounded-md shadow-xl'>&gt;</button>
        </div>
    )
}