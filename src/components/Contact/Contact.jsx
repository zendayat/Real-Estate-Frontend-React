import React from 'react'
import { MdCall } from 'react-icons/md';

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* LEFT SIDE */}
        <div className="c-left flexColStart flex-1">
          <span className=' orangeText'>Our Contacts</span>
          <span className='primaryText'>Just A Second Away</span>
          <span className=' secondaryText'>
            The Big Oxmox advised her not to do so, because there<br/> were thousands
            of bad Commas, wild Question Marks<br/> and devious Semikoli, but the
            Little Blind Text<br/> didn’t listen.
          </span>

          <div className="flexColStart contactModes">
            {/* FIRST ROW */}
            <div className="flexColStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span>
                                Call</span><span></span>
                        </div>
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
