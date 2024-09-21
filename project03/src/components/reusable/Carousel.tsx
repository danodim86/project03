import React from 'react';
import CarouselItem from './CarouselItem';
import { CarouselItemData, CarouselProps } from '@/interfaces/types';

const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  const items = [...carouselItems, ...carouselItems];

  return (
    <div className="carousel">
      <div className='dottedPattern'></div>
      <div className="carousel-track">
        {items.map((item, index) => (
          <CarouselItem key={`${item.id}-${Date.now()}-${index}`}  item={item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
