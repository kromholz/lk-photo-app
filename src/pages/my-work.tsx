// src/pages/my-work.tsx
import React from 'react';
import Header from '../components/Header';
import Slider from 'react-slick';
import Image from 'next/image';

const MyWork: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const images = [
    'https://your-image-url-1',
    'https://your-image-url-2',
    'https://your-image-url-3',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-center text-4xl mb-8">My Work</h1>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <Image
                src={image}
                alt={`Portfolio Image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto mx-auto"
              />
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
};

export default MyWork;
