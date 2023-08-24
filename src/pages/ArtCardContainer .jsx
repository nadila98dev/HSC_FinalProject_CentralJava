import React from 'react';
import Card from '../components/Card';


const ArtCardContainer  = () => {
    const cardInfo = [
      {
        imageSrc: "src/assets/images/PendhapaArt.jpg",
        title: "Pendhapa Art Space",
        description:
          "Pendhapa Art Space (PAS) is a masterpiece art space founded by Dunadi (sculptor) in Yogyakarta. This facility provides for the implementation of cultural and arts activities for the artists and the public.",
      },
      {
        imageSrc: "src/assets/images/GajahGalleryYogyakarta.jpg",
        title: "Gajah Gallery Yogyakarta and Yogya Art Lab",
        description: "test 2",
      },
      {
        imageSrc: "src/assets/images/GajahGalleryYogyakarta.jpg",
        title: "Gajah Gallery Yogyakarta and Yogya Art Lab",
        description: "test 2",
      },
      // Add more card items here...
    ];

    return (
      <div className="w-full h-screen bg-primarybg">
      <div className="flex flex-col justify-center md:items-start w-full">
        <div className="flex flex-row md:justify-between max-w-3x1 mb-4 px-20">
          <h3 className="font-primary mt-8 text-3xl">4 Things to do</h3>
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
      </div>
    </div>
    );
}

export default ArtCardContainer;
