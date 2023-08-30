import React from 'react'
import CaraouselCard from './ArtActivities/CaraouselCard'
import artActivitiesData from './Data/ArtActivities.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ArtCaraousel = () => {
  return (
    <div className='mt-20 flex flex-row px-20 justify-between'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {artActivitiesData.map(activity => (
        <SwiperSlide key={activity.id}>
          <CaraouselCard
          imageSrc={activity.imageSrc}
          title={activity.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default ArtCaraousel