
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const TextPressure = ()=>{
  

  return (
    <div id='hero' className='grid  bg-gray-200 w-full sm:grid-cols-1 md:grid-cols-2 h-auto py-16  overflow-hidden place-content-center place-items-center'>

    <div className='md:pl-20 sm:px-10 pb-20' >
    <h1 className='sm:text-[30px] md:text-[40px] lg:text-[70px] leading-tight font-bold '>
    Find <span className='text-[#6864ec] '>Better</span> Places to Live, Work and Wonder

    </h1>
    <h6 className='sm:text-md md:text-xl py-10'>
    Explore from Apartments, land, builder floors, villas and more. Our website gives you an easy way to search for and share your home listings with the right people.
    </h6>
    <a  href="#footer" className="relative inline-block w-40 px-4 py-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white">Contact Us</span>
</a>
    </div>
    
    
   
    
    
<div className=' flex justify-center items-center'>
<img className='absolute sm:w-[250px] md:w-[350px] lg:w-[750px] ' src='/Images/blob-haike.png'/>

<div className='relative flex justify-center items-center '>

    <DotLottieReact
      src="https://lottie.host/99ca1c80-0ae2-4537-9cf5-1fe0c9b6c22c/Wj6zStkHwf.lottie"
      loop
      className='sm:w-[700px] md:w[700px] lg:w-[900px]'
      autoplay
    />
</div>

 

  
</div>

    </div>
  );
};

export default TextPressure;
