import React from "react";
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 

function Icon({ id, open }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired
};

 

export default function Faq() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
 
  return (
    <div id="faq" className=" font-Josefin grid sm:px-5 md:px-28 sm:grid-cols-1 lg:grid-cols-2 pt-28 gap-10">
    <div data-aos="fade-right"
    >
        <h1 className="text-xl text-orange-800">FAQ&apos;s</h1>
        <h1 className="sm:text-[40px] md:text-[60px] font-Josefin">
        General frequently asked questions
        </h1>
        <p className="text-lg">We&apos;ve compiled a comprehensive list of commonly asked queries to provide you with quick and informative responses. Whether you&apos;re curious about booking check here.</p>
        <img src="/Images/faq.svg "></img>
    </div>
    <div data-aos="fade-left"
     className="flex flex-col  space-y-10 px-10 ">

      <Accordion  open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="font-Josefin font-medium" onClick={() => handleOpen(1)}>How much time does it take to find a Property?</AccordionHeader>
        <AccordionBody className="font-Josefin text-lg">
        Finding your dream property in and around Coimbatore through 1xRealty is never a lengthy process. Based on your requirements, a list of suitable properties will be provided to short list. The entire process will take only a couple of weeks.  </AccordionBody>
      </Accordion>
      <Accordion  open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="font-Josefin font-medium" onClick={() => handleOpen(2)}>
        What is the right way to start this process?
        </AccordionHeader>
        <AccordionBody className="font-Josefin text-lg ">
        Scheduling an appointment with us is just a click away. Use our Whatsapp chat through our website to discuss with our executive right now!   </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="font-Josefin font-medium" onClick={() => handleOpen(3)}>
        Can you guarantee that you will find my next property?
        </AccordionHeader>
        <AccordionBody className="font-Josefin text-lg">
        Our core function is all about delivering services as per your requirement and our full-fledged data base is our strength to assure you that we will be able to find what you need, and we are committed to fulfill the same.  </AccordionBody>
      </Accordion>
      <Accordion  open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="font-Josefin font-medium" onClick={() => handleOpen(4)}>
        Is The Agency Planning To Open More Offices?
        </AccordionHeader>
        <AccordionBody className="font-Josefin text-lg">
        There is always a scope for expansion.  </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className="font-Josefin font-medium" onClick={() => handleOpen(5)}>
        What Modes Of Payments Are Accepted?
        </AccordionHeader>
        <AccordionBody className="font-Josefin text-lg">
        Presently we accepts payment in cash and online with Bank Transfer which is accepted in our gateway.
        </AccordionBody>
      </Accordion>
   
   </div>
    </div>
  );
}