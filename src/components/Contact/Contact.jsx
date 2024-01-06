import React from "react";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
import "./Contact.css";

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="md:paddings innerWidth flexCenter c-container">
        {/* LEFT SIDE */}
        <div className="c-left flex flex-col justify-center md:items-start items-center md:flex-1 gap-2 mr-auto">
          <div className="flex flex-col justify-center md:items-start items-center gap-2">
            <span className=" orangeText">Our Contacts</span>
            <span className="primaryText">Just A Click Away</span>
            <span className=" secondaryText">
              The Big Oxmox advised her not to do so, because there
              <br /> were thousands of bad Commas, wild Question Marks
              <br /> and devious Semikoli, but the Little Blind Text
              <br /> didn't listen.
            </span>
          </div>

          <div className="flex justify-start items-center flex-col md:flex-row contactModes mt-8 gap-4">
            {/* FIRST ROW */}
            <div className="flexColStart row gap-6">
              <div className="flexColCenter mode w-[90vw] md:w-64 p-4 border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4 transition-all duration-300 ease-in hover:scale-[1.1] hover:shadow-lg">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon">
                    <MdCall
                      size={35}
                      className="p-[8px] bg-gray-200 rounded-[5px]"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className=" text-[1.1rem] font-semibold">Call</span>
                    <span className=" secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter bg-gradient-to-r bg-blue-500/75 w-full c-button text-yellow-50 py-[0.6rem] px-[1.4rem] rounded-[4px] transition-all duration-300 ease-in text-[0.9rem] font-black hover:text-blue-700/50 hover:bg-slate-200">
                  Call Now
                </div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode w-[90vw] md:w-64 p-4 border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4 transition-all duration-300 ease-in hover:scale-[1.1] hover:shadow-lg">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill
                      size={35}
                      className="p-[8px] bg-gray-200 rounded-[5px]"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className=" text-[1.1rem] font-semibold">Chat</span>
                    <span className=" secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter bg-gradient-to-r bg-blue-500/75 w-full c-button text-yellow-50 py-[0.6rem] px-[1.4rem] rounded-[4px] transition-all duration-300 ease-in text-[0.9rem] font-black hover:text-blue-700/50 hover:bg-slate-200">
                  Chat Now
                </div>
              </div>
            </div>
            {/* SECOND ROW */}
            <div className="flexColStart row gap-6">
              <div className="flexColCenter mode w-[90vw] md:w-64 p-4 border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4 transition-all duration-300 ease-in hover:scale-[1.1] hover:shadow-lg">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill
                      size={35}
                      className="p-[8px] bg-gray-200 rounded-[5px]"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className=" text-[1.1rem] font-semibold">
                      Video Call
                    </span>
                    <span className=" secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter bg-gradient-to-r bg-blue-500/75 w-full c-button text-yellow-50 py-[0.6rem] px-[1.4rem] rounded-[4px] transition-all duration-300 ease-in text-[0.9rem] font-black hover:text-blue-700/50 hover:bg-slate-200">
                  Video Call Now
                </div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode w-[90vw] md:w-64 p-4 border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4 transition-all duration-300 ease-in hover:scale-[1.1] hover:shadow-lg">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter
                      size={35}
                      className="p-[8px] bg-gray-200 rounded-[5px]"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className=" text-[1.1rem] font-semibold">
                      Message
                    </span>
                    <span className=" secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter bg-gradient-to-r bg-blue-500/75 w-full c-button text-yellow-50 py-[0.6rem] px-[1.4rem] rounded-[4px] transition-all duration-300 ease-in text-[0.9rem] font-black hover:text-blue-700/50 hover:bg-slate-200">
                  Message Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="c-right flex-1">
          <div className="image-container w-[20rem] h-[25rem] md:w-[30rem] md:h-[35rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-[rgba(255,255,255,0.12)] mx-auto">
            <img src="./contact.jpg" alt="" className=" w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
