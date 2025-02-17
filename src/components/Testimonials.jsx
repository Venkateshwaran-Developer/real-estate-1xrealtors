// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

export default function Testimonials() {
  const [setSwiperRef] = useState(null);
  return (
    <div id="reviews" className=" sm:px-10 sm:pt-28 md:pb-20 md:px-30 lg:px-48 overflow-hidden">
    <div className="flex flex-col items-center justify-center md:pt-28 ">
    <h1 className="text-[20px] text-green">Testimonials</h1>
    <h1 className="sm:text-[30px] sm:pb-10 md:text-[50px] font-bold  ">What Our Client Say&apos;s</h1>

    </div>
  
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        freeMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
                }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper flex justify-center items-center  w-full h-auto "

      >
        <SwiperSlide className=" p-10 rounded-3xl bg-black text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white ">Mitul Thakar</h1>
            <p className="text-gray-500">Ahmedabad North</p>
            <p className="text-gray-500">
            I want to express my heartfelt gratitude for the exceptional support your platform provided in helping me successfully sell my property. </p>
            <div className="flex">
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-black text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">PINTO</h1>
            <p className="text-gray-500">Mangalore</p>
            <p className="text-gray-500">
            I had posted my residential property on 1xRealty a few months ago. I found the staff managing the portal very friendly and helpful.			
            </p>
            <div className="flex">
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-black text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Vivek Rangnath Khedgaonkar</h1>
            <p className="text-gray-500">Karjat</p>
            <p className="text-gray-500">
            I sold my property at kirawali karjat through 1xRealty There response was good.
            </p>
            <div className="flex">
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-black text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Dr. Bhagavan</h1>
            <p className="text-gray-500">Pune</p>
            <p className="text-gray-500">
            My office space at Pune got leased out through 1xRealty & My RM Shivam Bathala cooperated me very nicely.
            </p>
            <div className="flex">
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-black text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Ankit</h1>
            <p className="text-gray-500">Dehradun</p>
            <p className="text-gray-500">
            I purchased Assist Plus package from 1xRealty. "Sree Harshini Vadakattu" as RM helped me to find a genuine buyer.</p>
            <div className="flex ">
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-black text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Lavanya</h1>
            <p className="text-gray-500">Patna</p>
            <p className="text-gray-500">
            Support is very good. They updating every week with detail of leads. The quality of Site is very good to find the detail of property and Lead Management.

            </p>
            <div className="flex ">
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
              <img className="w-10 h-10" src='/Images/star.svg'></img>
            </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
}
