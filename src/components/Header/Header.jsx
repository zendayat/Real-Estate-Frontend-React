import React from 'react'
// import logo from './'

function Header() {
  return (
    <section className='h-wrapper text-white' >
        <div className='h-container flexCenter innerWidth paddings  py-4' >
            <img src='./logo.png'/>
            <div className='h-menu gap-10 flexCenter'>
                <a href="" className=' font-medium'>Residencies</a>
                <a href="" className=' font-medium'>Our Values</a>
                <a href="" className=' font-medium'>Contact Us</a>
                <a href="" className=' font-medium'>Get Started</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>
            </div>
        </div>
    </section>
  );
};

export default Header