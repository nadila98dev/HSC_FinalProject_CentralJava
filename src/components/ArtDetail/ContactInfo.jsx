import React from 'react'
import {TiLocation} from 'react-icons/ti'   
import {BsFillSunFill} from 'react-icons/bs'   
import {HiOutlineMailOpen} from 'react-icons/hi'   
import MapPic from '/src/assets/images/map-jogja.jpg'


const ContactInfo = () => {
    return (
      <div className='mt-10 mx-auto px-5 md:px-10 py-2 max-w-[1224px] min-fit'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='flex flex-col items-center p-5 md:p-8 bg-primarybg'>
            <TiLocation size={45} className='mb-3 w-full' />
            <h2 className='mb-3 font-semibold text-2xl'>Where in Jogja?</h2>
            <div className='w-full'>
              <img src={MapPic} alt='Jogja Map' className='w-full' />
            </div>
          </div>
          <div className='flex flex-col gap-6 p-5 md:p-8'>
            <div className='flex flex-col items-center p-5 md:p-8 bg-primarybg'>
              <BsFillSunFill size={45} className='mb-3 w-full' />
              <h2 className='mb-3 font-semibold text-2xl'>Seasons</h2>
              <p>Suitable experience all year</p>
            </div>
            <div className='flex flex-col items-center p-5 md:p-8 bg-green-100'>
              <HiOutlineMailOpen size={45} className='mb-3 w-full' />
              <h2 className='mb-3 font-semibold text-2xl'>Contact</h2>
              <p>Suitable experience all year</p>
              <p className='mt-3'>Address 2</p>
              <button
                type='button'
                className='mt-5 bg-transparent hover:bg-green-200 text-black font-semibold hover:text-btn_color py-2 px-4 border border-black hover:border-btn_color rounded'>
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default ContactInfo