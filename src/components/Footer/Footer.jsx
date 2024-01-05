import React from 'react'

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* LEFT SIDE */}
        <div className="align-middle text-center inline-block justify-center f-left">
          <img src="./logo2.png" alt="" className="mx-auto w-[120px]" />
          <div className=" flex flex-col">
            <span className="secondaryText font-thin text-black/75">
              22nd Feet Street, Calimornia
            </span>
            <span className="secondaryText font-thin text-black/85">
              Your Trusted Residence Agency
            </span>
          </div>
          <div className="links mx-auto gap-4 w-fit flex">
            <a href="" className=" text-xs font-semibold">
              Property
            </a>
            <a href="" className=" text-xs font-semibold">
              Services
            </a>
            <a href="" className=" text-xs font-semibold">
              Product
            </a>
            <a href="" className=" text-xs font-semibold">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
