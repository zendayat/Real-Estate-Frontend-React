import React from 'react'
import './SearchBar.css'
import { HiLocationMarker } from 'react-icons/hi'

const SearchBar = () => {
  return (
    <div className="search-bar bg-white rounded-md border-solid border-3 border-[rgba(0,0,0,0.37)] py-2 px-4 justify-between  w-[90%] md:w-full gap-2 mx-auto flex flex-row">
        <HiLocationMarker color="var(--blue)" size={25} className=' my-auto'/>
        <input type="text" className=' border-none outline-none text-black font-bold w-full'/>
        <button className="button">Search</button>
    </div>
  )
}

export default SearchBar