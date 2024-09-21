// components/CarouselItem.tsx

import { CarouselItemData, CarouselItemProps } from '@/interfaces/types';
import React from 'react';

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <div
      className="carousel-item"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p className='month'>{item.month}</p>
      <p className="day">{item.day}</p>
    </div>
  );
};

export default CarouselItem;
