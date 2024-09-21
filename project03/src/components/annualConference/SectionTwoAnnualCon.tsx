import { AnnualConSectionOneProps, AnnualConSectionTwoProps } from '@/interfaces/types';
import Image from 'next/image';
import React from 'react';
import calendar from "../../../public/images/annualConSec2Calendar.png";
import user from "../../../public/images/annualConSec2User.png";
import cup from "../../../public/images/annualConSec2Cup.png";
import book from "../../../public/images/annualConSec2Book.png";



const SectionTwoAnnualCon: React.FC<AnnualConSectionTwoProps> = ({ days,
  speakers,
  restaurants,
  books}) => {
  return (
    <section className='annualConSectionTwo'>
      <div className="contentContainer">
        <div className="daysContainer">
          <Image src={calendar} alt='calendar icon' width={50} height={50}></Image>
          <div className="content">
            <h3>{days}</h3>
            <p>Дена</p>
          </div>
        </div>

        <div className="userContainer">
          <Image src={user} alt='user icon' width={50} height={50}></Image>
          <div className="content">
            <h3>{speakers}</h3>
            <p>Неверојатни Спикери</p>
          </div>
        </div>

        <div className="restaurantContainer">
          <Image src={cup} alt='cup icon' width={50} height={50}></Image>
          <div className="content">
            <h3>{restaurants}</h3>
            <p>Ресторани</p>
          </div>
        </div>

        <div className="bookContainer">
          <Image src={book} alt='book icon' width={50} height={50}></Image>
          <div className="content">
            <h3>{books}</h3>
            <p>Едукативни Книги</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwoAnnualCon;
