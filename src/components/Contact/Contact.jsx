import React from 'react'
import { MdCall } from 'react-icons/md';
import './Contact.css'

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* LEFT SIDE */}
        <div className="c-left flexColStart flex-1 gap-2">
          <span className=" orangeText">Our Contacts</span>
          <span className="primaryText">Just A Click Away</span>
          <span className=" secondaryText">
            The Big Oxmox advised her not to do so, because there
            <br /> were thousands of bad Commas, wild Question Marks
            <br /> and devious Semikoli, but the Little Blind Text
            <br /> didn’t listen.
          </span>

          <div className="flexColStart contactModes mt-8 gap-4">
            {/* FIRST ROW */}
            <div className="flexColStart row gap-6">
              <div className="flexColCenter mode w-64 p-4 border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4 transition-all duration-300 ease-in">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall
                      size={35}
                      className="p-[8px] bg-gray-200 rounded-[5px]"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter bg-red-700 button w-full text-blue-500/75 text-[0.9rem] font-black">
                  Call Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="c-right flex-1">
          <div className="image-container w-[20rem] h-[25rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-[rgba(255,255,255,0.12)]">
            <img src="./contact.jpg" alt="" className=" w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
