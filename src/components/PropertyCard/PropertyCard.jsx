import React from 'react'
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'

const PropertyCard = ({card}) => {
  return (
    <div className="r-card gap-[0.6rem] flexColStart p-4 rounded-[10px] max-w-max m-auto transition-all duration-300 ease-in hover:scale-[1.025] hover:cursor-pointer z-0">
      <img src={card.image} alt="home" className=" w-[15rem] h-[10rem] rounded-[10px]" />
      <AiFillHeart size ={24} color="white" className=' absolute top-[25px] right-[35px] z-10'/>
      <span className="secondaryText r-price text-[1.2rem] font-semibold">
        <span className=" text-orange-500">$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText text-[1.5rem]">{truncate(card.title, {length:15})}</span>
      <span className="secondaryText text-[0.7rem] w-[15rem]">
        {truncate(card.description, {length:80})}
      </span>
    </div>
  );
}

export default PropertyCard
