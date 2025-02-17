import React from 'react';

function Features() {
  return (
    <div id='ourservices' className='overflow-hidden pt-28'>
    <h1 className='sm:text-3xl flex justify-center md:text-6xl px-10 font-bold'>
       Our Services
    </h1>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 place-content-center place-items-center">
            <div className="shadow-2xl hover:bg-[#6864ec] w-[340px] p-6 rounded-2xl h-[200px] ">
            <box-icon name='world'></box-icon>
                <h4 className="text-xl font-bold  text-black ">Buy & Sell Property</h4>
                <p className="feature__text">Whether you’re seeking to buy or sell, our expert team in trade are with you every step of the process, ensuring a seamless procedure.</p>
            </div>

            <div className="shadow-2xl hover:bg-[#6864ec] w-[340px] p-6 rounded-2xl h-[200px] ">

            <box-icon name='trophy' type='solid' color='#000000' ></box-icon>
                <h4 className="text-xl font-bold text-black ">Real Estate Investment</h4>
                <p className="feature__text">Based on our real estate expertise and leading market intelligence, we provide our clients with solutions to their Real Estate Investments.</p>
            </div>

            <div className="shadow-2xl hover:bg-[#6864ec] w-[340px] p-6 rounded-2xl h-[200px] ">


            <box-icon name='location-plus' type='solid' color='#000000' ></box-icon>
                <h4 className="text-xl font-bold text-black">Marketing & Management</h4>
                <p className="feature__text">Our team of qualified professionals will efficiently execute a project right from the ground up and give the best desired results.</p>
            </div>

            <div className="shadow-2xl hover:bg-[#6864ec] w-[340px] p-6 rounded-2xl h-[200px] ">


            <box-icon name='key' type='solid' color='#000000' ></box-icon>
                <h4 className="text-xl font-bold text-black">Construction & Development</h4>
                <p className="feature__text">Our endeavor is to deploy a quality team of construction workers in view of delivering on a stipulated time frame.</p>
            </div>

            <div className="shadow-2xl hover:bg-[#6864ec] w-[340px] p-6 rounded-2xl h-[200px] ">


            <box-icon name='objects-vertical-top' type='solid' color='#000000' ></box-icon>
                <h4 className="text-xl font-bold text-black ">Rent a Home</h4>
                <p className="feature__text">We are creating a seamless online experience - from the largest rental chain to shopping, applying and paying rent.</p>
            </div>

            <div className=" shadow-2xl hover:bg-[#6864ec] w-[340px] p-6 rounded-2xl h-[200px] ">

            <box-icon name='lock' type='solid' color='#000000' ></box-icon>
                <h4 className="text-xl font-bold text-black">Personalised for You</h4>
                <p className="feature__text">We know how important it is to be ahead of the market. Delivering thousands of personalised alerts everyday.</p>
            </div>

        </section>
    </div>
  )
}

export default Features
