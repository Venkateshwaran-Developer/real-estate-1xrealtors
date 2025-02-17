import { useEffect, useRef } from "react";
import { motion,useAnimation, useInView, useTransform, useScroll } from "framer-motion";

function Banner() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  
  return (
    <div className="w-full h-auto overflow-hidden">
      {/* <img className=' object-cover h-[50vh] w-full    bg-fixed' src={banner}>
     </img> */}

      <div
        className={`w-full  text-white bg-[url('/Images/banner2.webp')] bg-cover  bg-fixed flex flex-col justify-end`}
      >
       <div className="  flex ">
          <img className="w-full  " src="/Images/wavetop.png" />
        </div>

        <div className="  flex justify-end items-end">
          <img className="w-full  " src="/Images/wave.png" />
        </div>

        {/* <motion.div
          style={{ translateX: paragraphOneValue }}
         
          className="  col-span-2 flex flex-col space-y-5 justify-center items-start sm:px-10 md:px-28 font-bold font-Chau text-[30px]"
        >
          <h1 className="text-red-500">
            Book Your Home It&apos;s Simple And Affordable
          </h1>
          <h1 className="">
            With competitive pricing and fare building structures, we make
            sure affordability meets convenience in every day.
          </h1>
        </motion.div>
        <motion.div
          style={{ translateX: paragraphTwoValue }}
          className=" flex flex-col space-y-5 justify-center sm:items-center md:items-start sm:px-10 sm:py-10 lg:px-20 font-bold font-Chau text-[30px]"
        >
          <h1 className="text-black">+91 76395 91469</h1>
          <div>
            <a
              href="#booking"
              className=" relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Book Your Home
              </span>
            </a>
          </div> 
        </motion.div>*/}
      </div>
    </div>
  );
}

export default Banner;
