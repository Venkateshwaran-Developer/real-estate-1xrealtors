import React from 'react'
import 'boxicons';

function Footer() {
  return (
    <section id='footer' className="footer overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6864ec" fill-opacity="1" d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,101.3C560,96,640,128,720,160C800,192,880,224,960,218.7C1040,213,1120,171,1200,138.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

    
    <footer className='grid sm:grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-2 py-10 bg-[#6864ec] place-content-center place-items-center '>
       
            <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-bold">1xRealty</h2>
            <p>Sign up for the latest property and offer news</p>
            <div className="flex  flex-col gap-6">
      <input type='email' className='border-2  p-2 bg-black text-white font-bold' placeholder='you@gmail.com'/>
      <a  href="#_" className="relative inline-block w-40 px-4 py-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white">Subscribe</span>
</a>
      
    </div>
                <div className="flex gap-2">
                <a className='cursor-pointer'><box-icon type='logo' size='lg' border='circle'  name='facebook-circle'></box-icon></a>
                <a className='cursor-pointer'><box-icon name='instagram-alt' size='lg' border='circle'  type='logo' ></box-icon></a>
                <a className='cursor-pointer'><box-icon name='whatsapp' size='lg' border='circle'  type='logo' ></box-icon></a>
                <a className='cursor-pointer'><box-icon type='logo' size='lg' border='circle'  name='linkedin-square'></box-icon></a>
                <a className='cursor-pointer'> <box-icon type='logo' size='lg' border='circle'  name='gmail'></box-icon></a>
                </div>
                
            </div>
            
                <div className="footer-links flex justify-center  items-center w-full h-full text-2xl font-bold">
                    <ul className='space-y-4'>
                        <li className='flex gap-2 justify-start items-center'><box-icon type='solid' name='right-arrow-circle'></box-icon><a href="#header">Home</a></li>
                        <li className='flex gap-2 justify-start items-center'><box-icon type='solid' name='right-arrow-circle'></box-icon><a href="#ourservices">Our Services</a></li>
                        <li className='flex gap-2 justify-start items-center'><box-icon type='solid' name='right-arrow-circle'></box-icon><a href="#gallery">Gallery</a></li>
                        <li className='flex gap-2 justify-start items-center'><box-icon type='solid' name='right-arrow-circle'></box-icon><a href="#reviews">Testimonials</a></li>
                        <li className='flex gap-2 justify-start items-center'><box-icon type='solid' name='right-arrow-circle'></box-icon><a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                

            
       
    </footer>
    <img src='/Images/bg6.png' className='bg-[#6864ec] w-full '/>
    </section>
  )
}

export default Footer
