import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./Value.css";
function Value() {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* LEFT SIDE */}
        <div className="v-left flex-1">
          <div className="image-container border-[8px] border-[rgba(232,232,232,0.89)] w-[30rem] h-[35rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-[rgba(255,255,255,0.12)">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flexColStart v-right flex-1 gap-[0.5rem]">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            Far far away, behind the word mountains, far from the countries
            Vokalia
            <br />
            and Consonantia,there live the blind texts. Separated they live in
            <br />
            Bookmarksgrove right at the coast of the Semantics
          </span>
          <Accordion
            className="accordion mt-8 border-none"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {

                const [className, setClassName] = useState(null)
              return (
                <AccordionItem
                  className={`accordionItem ${className}`} className="bg-white border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[8px] overflow-hidden mb-[20px]"
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordionButton bg-white p-4 w-full justify-between cursor-pointer">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon p-[10px] bg-slate-100 rounded-[5px]">
                        {item.icon}
                      </div>
                      <span className=" primaryText">{item.heading}</span>
                      <div className="flexCenter icon p-[10px] bg-slate-100 rounded-[5px]">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
