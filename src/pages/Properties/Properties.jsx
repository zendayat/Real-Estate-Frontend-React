import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Properties.css'
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import data from '../../utils/accordion'

const Properties = () => {
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
    <div className="wrapper w-[80vw] mx-auto">
        <div className="flexColCenter paddings innerWidth properties-container">
          <SearchBar/>
          {/* ALL RESIDENCIES */}
          <div className="paddings flexCenter properties">
            {
              data.map((card, i)=>(<PropertyCard card={card} key={i}/>))
            }
          </div>
        </div>
    </div>
  )
}

export default Properties