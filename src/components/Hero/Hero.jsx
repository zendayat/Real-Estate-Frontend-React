import React from 'react'

function Hero() {
  return (
    <section className="hero-wrapper text-white relative pb-8">
      <div className="paddings innerWidth flex items-end flexCenter hero-container ">

        {/* lEFT SIDE */}
        <div className="hero-left">
          
          <div className="hero-title">
            
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <div className="image-container w-[20rem] h-[25rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-[rgba(255,255,255,0.12)]">
            <img src="./hero-image.png" alt="" className=' h-full w-full'/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
