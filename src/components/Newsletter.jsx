import React from 'react';

function Newsletter() {
  return (
    <div className='w-full h-full flex items-center justify-center sm:p-5 md:px-20 lg:px-40 overflow-hidden'>

     
            <div className="flex flex-col justify-center p-10 items-center bg-[#6864ec] h-auto w-full text-black rounded-4xl">
                <h1 className='text-center sm:text-[30px] md:text-[70px] font-bold'>
                    Subscribe to Our Newsletter 
                </h1>
                <h1 className='text-center sm:text-[20px] text-[30px] font-bold'>
                For Weekly Article Update.
                </h1>
                <p className='text-center p-5'>
                    We have real estate-related blog so we can share our
                    thoughts and rutinity in our blog that updated weekly. We
                    will not spam you, we promise.
                </p>
                <div className=" flex items-center justify-center">
                    <form action="#" className='flex sm:flex-col md:flex-row border-2 border-black '>
                        <div className="flex items-center justify-center">
                             <input
                                type="email"
                                placeholder="Enter your e-mail address"
                                className=' p-2 bg-black text-white font-bold border-black'
                            />
                        </div>
                        <button className='flex items-center p-2 justify-center  cursor-pointer'>Subscribe</button>
                    </form>
                </div>
            </div>
       
        
      
    </div>
  )
}

export default Newsletter
