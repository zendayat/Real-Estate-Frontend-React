import React from 'react'
import './Companies.css'

function Companies() {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container justify-around gap-16">
            <img src="./prologis.png" alt="" className=' w-36'/>
            <img src="./tower.png" alt="" className=' w-36'/>
            <img src="./equinix.png" alt="" className=' w-36'/>
            <img src="./realty.png" alt="" className=' w-36'/>
        </div>
    </section>
  )
}

export default Companies
