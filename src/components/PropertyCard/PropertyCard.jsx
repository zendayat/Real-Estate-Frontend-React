import React from 'react'
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'

const PropertyCard = ({card}) => {
  return (
    <div className="r-card gap-[0.6rem] flexColStart p-4 rounded-[10px] max-w-max m-auto transition-all duration-300 ease-in hover:scale-[1.025] hover:cursor-pointer hover:">
      <img src={card.image} alt="home" className=" w-full max-w-64" />
      <AiFillHeart size ={24} color="white" className=' absolute top-[25px] right-[35px] z-10'/>
      <span className="secondaryText r-price text-[1.2rem] font-semibold">
        <span className=" text-orange-500">$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText text-[1.5rem]">{card.name}</span>
      <span className="secondaryText text-[0.7rem] w-[15rem]">
        {card.detail}
      </span>
    </div>
  );
}

export default PropertyCard
