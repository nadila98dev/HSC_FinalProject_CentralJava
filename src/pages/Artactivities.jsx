import React from 'react'
import HeroComponent from '../components/ArtActivities/HeroComponent'
import ArtCardContainer from '../components/ArtCardContainer'


const ArtActivities = () => {
  return (
    <div className='w-full h-[400px] bg-primarybg flex flex-col justify-between my-[70px]'>
            
          <HeroComponent />

         <ArtCardContainer />
            
        </div>
  )
}

export default ArtActivities