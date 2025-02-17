import React from "react";

function Card() {
  return (
    <div>
      <section className="w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-36 py-10 pb-20 place-content-center place-items-center">
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
            Beautiful Family House
          </h5>
          <img src="/Images/house-1.jpeg" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>USA</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>5 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$1,200,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
          Modern Glass Villa
          </h5>
          <img src="/Images/house-2.jpeg" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>Canada</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>6 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
              450  m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$2,750,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
          Cozy Country House
          </h5>
          <img src="/Images/house-3.jpeg" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>UK</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>4 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                250 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$85,00,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
          Large Rustic Villa
          </h5>
          <img src="/Images/house-4.jpeg" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>portugal</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>8 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                480 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$18,250,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
          Majestic Palace
          </h5>
          <img src="/Images/house-5.jpeg" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>Germany</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>18 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                4230 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$9,850,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
          Modern Condo
          </h5>
          <img src="/Images/house-6.jpeg" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>USA</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>5 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$1,200,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
            Beautiful Family House
          </h5>
          <img src="/Images/cardImage2.png" alt="Housecard 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>USA</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>5 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$1,200,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
            Big Fancy House
          </h5>
          <img src="/Images/cardImage3.png" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>USA</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>5 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$1,200,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>
        <div className="w-80 h-[400px] ">
          <div className="absolute flex justify-end w-[300px] pt-5 h-full">
            <box-icon type="solid" name="heart"></box-icon>
          </div>

          <h5 className="absolute flex justify-center items-center w-60 mt-[188px]  bg-black p-2 mx-10 text-center text-white ">
            Architech House
          </h5>
          <img src="/Images/cardImage4.png" alt="House 1" className="w-80 h-52 rounded-t-4xl" />

          <div className="grid grid-cols-2 w-80 h-52 bg-purple-200 place-content-center place-items-start p-6 gap-x-4 gap-y-16 ">
            <div className="flex space-x-2">
            <box-icon name='bed' type='solid' color='#000000' ></box-icon>
              <p>USA</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='bed' color='#000000' ></box-icon>
              <p>5 bedrooms</p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='home' type='solid' color='#000000' ></box-icon>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="flex space-x-2">
            <box-icon name='key' color='#000000' ></box-icon>
              <p>$1,200,000</p>
            </div>
          </div>
          <button className="bg-[#6864ec] text-white text-xl p-4 w-80 font-bold rounded-b-4xl">Contact realtor</button>
        </div>

        {/* <div className="home">
                <img src="img/house-2.jpeg" alt="House 2" className="home__img"/>
                <svg className="home__like">
                    <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                </svg>
                <h5 className="home__name">Modern Glass Villa</h5>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p>Canada</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p>6 bedrooms</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p>450 m<sup>2</sup></p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <p>$2,750,000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>
            
            <div className="home">
                <img src="img/house-3.jpeg" alt="House 3" className="home__img"/>
                <svg className="home__like">
                    <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                </svg>
                <h5 className="home__name">Cozy Country House</h5>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p>UK</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p>4 bedrooms</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p>250 m<sup>2</sup></p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <p>$850,000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className="home">
                <img src="img/house-4.jpeg" alt="House 4" className="home__img"/>
                <svg className="home__like">
                    <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                </svg>
                <h5 className="home__name">Large Rustic Villa</h5>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p>portugal</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p>6 bedrooms</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p>480 m<sup>2</sup></p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <p>$1,850,000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className="home">
                <img src="img/house-5.jpeg" alt="House 5" className="home__img"/>
                <svg className="home__like">
                    <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                </svg>
                <h5 className="home__name">Majestic Palace</h5>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p>Germany</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p>18 bedrooms</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p>4230 m<sup>2</sup></p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <p>$9,850,000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className="home">
                <img src="img/house-6.jpeg" alt="House 6" className="home__img"/>
                <svg className="home__like">
                    <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                </svg>
                <h5 className="home__name">Modern Condo</h5>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p>Italy</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p>3 bedrooms</p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p>180 m<sup>2</sup></p>
                </div>
                <div className="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <p>$650,000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>             */}
      </section>
    </div>
  );
}

export default Card;
