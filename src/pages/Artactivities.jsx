import React from 'react'
import ArtCardContainer from './ArtCardContainer '


const ArtActivities = () => {
  return (
    <div className='w-full h-[400px] bg-primarybg flex flex-col justify-between my-[70px]'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto sm:px-10'>
      <div className='flex flex-col justify-center md:items-start w-full py-8'>
        <h1 className='font-primary max-w-2x1 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1 dark:text-white'>Art Activity</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iure? Accusantium quas quod necessitatibus optio assumenda deleniti quis illum nobis explicabo harum obcaecati minima eveniet tempora, provident natus, consequuntur iure?</p>
      </div>
    </div>
            <ArtCardContainer  />
        </div>
  )
}

export default ArtActivities