import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Properties.css'
import useProperties from '../../hooks/useProperties'

const Properties = () => {
  const{data, isError, isLoading} = useProperties()
  return (
    <div className="wrapper w-[80vw] mx-auto">
        <div className="flexColCenter paddings innerWidth properties-container">
          <SearchBar/>
        </div>
    </div>
  )
}

export default Properties