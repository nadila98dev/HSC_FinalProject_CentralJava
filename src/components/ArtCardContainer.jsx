import React from 'react';

import ArtCaraousel from './ArtCaraousel';
import artActivitiesData from './Data/ArtActivities.json'
import Card from './ArtActivities/Card';


const ArtCardContainer = () => {

    return (
      <div className="w-full h-screen bg-primarybg font-poppins">
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto sm:px-10'>
      <div className='flex flex-wrap flex-col justify-center md:items-start w-full py-8'>
        <hr id='dividerhr'/>
        <h1 className=' mt-5 max-w-2x1 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1 dark:text-white font-lora'>Art Activity</h1> 
          <a href="#" className="flex flex-wrap">
          Explore places
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a> 
        </div>
      <div className='flex flex-col justify-center md:items-start w-full py-8'>
          <p>Yogyakarta have unique characteristics, and cultural attraction such as workshop that based on handmade stuff or paintings also any other art work that based on traditional way</p>
      </div>
    </div>
      <div className="flex flex-col justify-center md:items-start w-full">
        <div className="flex flex-row md:justify-between max-w-3x1 mb-4 px-20">
          <h3 className="font-secondary mt-8 text-3xl">9 Things to do</h3>
        </div>

        <div
          id="section_card"
          className="grid-cols-1 sm:grid md:grid-cols-3 gap-4 px-20"
        >
          {artActivitiesData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className='flex items-center justify-center mx-auto'>
        <button type='button' className='bg-transparent hover:bg-green-200 text-black font-semibold hover:text-btn_color py-2 px-4 border border-black hover:border-btn_color rounded'>Load More</button>
      </div>
      
      </div>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto sm:px-10'>
        <div className='flex flex-wrap flex-col justify-center md:items-start w-full py-8'>
          <hr id='dividerhr'/>
          <h1 className=' mt-5 max-w-2x1 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1 dark:text-white font-lora'>Things to do in regions</h1> 
        </div>
        <div className='flex flex-col justify-center md:items-start w-full py-8'>
          <p>Here are some suggestions of things to do in Yogyakarta</p>
      </div>
        
          
      </div>
      <ArtCaraousel />
    </div>
    );
}

export default ArtCardContainer;
