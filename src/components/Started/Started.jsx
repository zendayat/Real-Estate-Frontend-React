import React from 'react'
import './Started.css'

function Started() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter gap-[1.5rem] bg-blue-800/85 p-8 rounded-[10px] border-[3px] border-blue-400 inner-container">
          <span className='primaryText'>Get Started With Homyz</span>
          <div className='text-[rgba(255,255,255,0.587)] text-[0.9rem] w-[35%] text-center font-bold'>Twipsum is a dummy text generator that differentiates itself from others.</div>
          <span className=' font-medium'>Find you residence with us</span>
          <button className="button border-[2px] border-white shadow-lg">
            <a href='mailto:justmeagaincraizee@gmail.com'>Get Started</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Started
