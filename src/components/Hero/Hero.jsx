import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

function Hero() {
  return (
    <section className="hero-wrapper text-white relative pb-0 z-10">
      <div className="paddings flex flex-col md:flex-row items-end flexCenter hero-container w-full md:w-[90%] md:mx-auto -mt-32 md:mt-0">

        {/* lEFT SIDE */}
        <div className="hero-left flex flex-col gap-12">

          <div className="hero-title relative z-10 text-[2.5rem] md:text-6xl leading-[3rem] md:leading-[4rem]">
          <div className="orange-circle h-16 w-16 rounded-full absolute right-[30%] top-[-10%] -z-10"/>
            <h1 className=' font-black'>Discover<br/> More Suitable<br/> Property</h1>
          </div>
          <div className="hero-des flexColStart text-gray-500 text-[0.9rem]">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar bg-white rounded-md border-solid border-3 border-[rgba(120,120,120,0.374)] py-2 px-4 justify-between  w-[90%] md:w-full gap-2 mx-auto flex flex-row">
            <HiLocationMarker color="var(--blue)" size={25} className=' my-auto'/>
            <input type="text" className=' border-none outline-none text-black font-bold w-full'/>
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats w-full gap-[1.5rem] md:gap-4">
            <div className="flexColCenter stat">
              <span className=' text-[2rem]'>
                <CountUp start={8800} end={9000} duration={4}/>
                <span className=' text-orange-500'>+</span>
              </span>
              <span className=' text-gray-500 text-[0.9rem]'>Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span className=' text-[2rem]'>
                <CountUp start={1950} end={2000} duration={4}/>
                <span className=' text-orange-500'>+</span>
              </span>
              <span className=' text-gray-500 text-[0.9rem]'>Satisfied Cusstomers</span>
            </div>
            <div className="flexColCenter stat">
              <span className=' text-[2rem]'>
                <CountUp end={28}/>
                <span className=' text-orange-500'>+</span>
              </span>
              <span className=' text-gray-500 text-[0.9rem]'>Award Winnings</span>
            </div>
          </div>
        </div>
 
        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right my-auto">
          <div className="image-container w-[95%] h-25rem md:w-[30rem] md:h-[35rem] mt-0 md:-mt-24 overflow-hidden rounded-t-[15rem] border-8 border-solid border-[rgba(255,255,255,0.12)]">
            <img src="./hero-image.png" alt="" className=' h-full w-full'/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
