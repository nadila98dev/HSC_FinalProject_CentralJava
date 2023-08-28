import React from 'react'
import ArtCardContainer from './ArtCardContainer '
import HeroComponent from '../components/HeroComponent'


const ArtActivities = () => {
  return (
    <div className='w-full h-[400px] bg-primarybg flex flex-col justify-between my-[70px]'>
            <HeroComponent />
   
            <ArtCardContainer  />
            
            
        </div>
  )
}

export default ArtActivities