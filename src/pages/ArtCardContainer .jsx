import React from 'react';
import Card from '../components/Card';


const ArtCardContainer = () => {
    const cardInfo = [
      {
        id: 1,
        imageSrc: "src/assets/images/PendhapaArt.jpg",
        title: "Pendhapa Art Space",
        description:
          "Pendhapa Art Space atau lebih dikenal dengan sebutan PAS awalnya adalah bangunan perluasan",
      },
      {
        id: 2,
        imageSrc: "src/assets/images/LeksaGaneshaBatik2.jpg",
        title: "Leksa Ganesha Batik Gallery",
        description: "Benteng Vredeburg adalah saksi sejarah betapa kuatnya pengaruh Belanda dalam menjajah Indonesia.",
      },
      {
        id: 3,
        imageSrc: "src/assets/images/GajahGalleryYogyakarta.jpg",
        title: "Gajah Gallery Yogyakarta and Yogya Art Lab",
        description: "Sejak 1996, Gajah Gallery telah menjadi badan pelopor di ranah seni rupa Asia Tenggara, mewakilkan seniman kawakan seperti Yunizar",
      },
      {
        id: 4,
        imageSrc: "src/assets/images/LanggengArt Foundation.jpg",
        title: "Langgeng Art Foundation",
        description: "Langgeng Art Foundation adalah sebuah Yayasan yang bergerak di bidang seni. Didirikan oleh seorang kolektor karya seni yang cukup kondang di Yogyakarta.",
      },
      {
        id: 5,
        imageSrc: "src/assets/images/YantoCraft.jpg",
        title: "Yanto Craft",
        description: "Yanto Craft adalah Toko Seni & Kerajinan",
      },
      {
        id: 6,
        imageSrc: "src/assets/images/SemarGallery.jpg",
        title: "Semar Gallery",
        description: "Galeri Semar yang mengkhususkan diri dalam pembangunan kembali dan perbaikan rumah kayu tradisional khususnya rumah Jawa.",
      },
      {
        id: 7,
        imageSrc: "src/assets/images/JogjaGallery.jpg",
        title: "Jogja Gallery",
        description: "Jogja Gallery adalah sebuah galeri seni visual di Yogyakarta yang berdiri sejak 19 September 2006, diresmikan oleh Sri",
      },
      {
        id: 8,
        imageSrc: "src/assets/images/LanaGallery.jpg",
        title: "Lana Gallery",
        description: "Lana Gallery. Galeri seni yang terletak di Jl. Menukan, dan menghadirkan beragam koleksi seni yang menarik",
      },
      {
        id: 9,
        imageSrc: "src/assets/images/BatikMasterClass.jpg",
        title: "Batik Master Class with Full Process",
        description: "Batik Master Class with Full Process by Alga Lova Tour",
      },

    
      
      
      
    ];

    return (
      <div className="w-full h-screen bg-primarybg">
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto sm:px-10'>
      <div className='flex flex-wrap flex-col justify-center md:items-start w-full py-8'>
        <hr id='dividerhr'/>
        <h1 className=' mt-5 max-w-2x1 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1 dark:text-white'>Art Activity</h1> 
          <a href="#" className="flex flex-wrap">
          Explore places
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
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
          {cardInfo.map((card, index) => (
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
      
    </div>
    );
}

export default ArtCardContainer;
