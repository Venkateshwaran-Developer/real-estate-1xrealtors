import React from 'react';

function SideBanner() {
  return (
    <div className='w-full h-full overflow-hidden'>
        <section className="earlybird w-[100%] bg-white">
            <div className=" grid sm:grid-cols-1 lg:grid-cols-2 md:pb-20 items-center">
                <div className='flex '>
                    <img
                        src="/Images/featureImageBg2.png"
                        alt="featureImageBg1.svg"
                        className=" sm:h-[380px] md:h-[480px] rotate-180   "
                    /> 
                    <img
                        src="/Images/featuresImage1.png"
                        alt="featuresImage1.png"
                        className=" sm:w-[290px] sm:h-[280px]  md:w-[405px] md:h-[380px] sm:mt-[78px] sm:ml-[80px] md:mt-[102px] absolute md:ml-[100px] mb-5 rounded-[50px]  "
                    />
                     
                </div>
                <div className='p-10'>
                    <h1 className='text-5xl mb-[30px] font-bold'>Modern, Trendy, Affordable</h1>
                    <p className='text-xl mb-[40px] '>
                    Our furniture is designed to be both stylish and affordable. We believe that everyone deserves to have a
                    beautiful home, regardless of their budget. That's why we offer a wide range of stylish and
                    affordable furniture options.
                    
                    </p>
                    <button className='bg-[#6864ec] rounded-xl px-4 py-2 font-bold '>Early Bird Book</button>
                </div>
            </div>
            <div className=" grid sm:grid-cols-1 lg:grid-cols-2 items-center">
                <div className='p-10'>
                    <h1 className='text-5xl mb-[30px] font-bold'>Unique House for Long Term!</h1>
                    <p className='text-xl mb-[40px] '>
                    Our house is designed to be both stylish and affordable. We believe that everyone deserves to have a
                    beautiful home, regardless of their budget. That's why we offer a wide range of stylish and
                    affordable furniture options.
                    </p>
                    <button className='bg-[#6864ec] rounded-xl px-4 py-2 font-bold '>Early Bird Book</button>
                </div>
                <div className='flex justify-end '>
                    <img
                        src="/Images/featureImageBg2.png"
                        alt="featureImageBg2.png"
                        className=" sm:h-[380px] md:h-[480px]   "
                    />
                    <img
                        src="/Images/featuresImage2.png"
                        alt="featuresImage2.png"
                        className=" sm:w-[290px] sm:h-[280px] md:mt-[0px] sm:mt-[20px] sm:mr-[77px] md:mr-[100px]  md:w-[405px] md:h-[380px]   absolute  mb-5 rounded-[50px]  "
                  
                    />
                </div>
            </div>
        </section>
        
       
    
    </div>
  )
}

export default SideBanner;
