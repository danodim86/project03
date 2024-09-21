import { AnnualConSectionOneProps } from '@/interfaces/types';
import Image from 'next/image';
import React from 'react';
import calendarIcon from "../../../public/images/annualConCalendarIcon.png";
import mapPinIcon from "../../../public/images/annualConMapPinIcon.png";
import chainIcon from "../../../public/images/chainIcon.png";
import LinkButton from '../reusable/LinkButton';

const SectionOneAnnualCon: React.FC<AnnualConSectionOneProps> = ({ sectionOneTitle,
  sectionOneDate,
  location,
  sectionOneDescription,
  sectionOneImageOne,
  sectionOneImageTwo}) => {
  return (
    <section className='annualConSectionOne'>
      <div className="leftSection">
        <h2>{sectionOneTitle}</h2>

        <div className="dateLocation">
          <div className="date">
            <Image src={calendarIcon} alt='calendar icon' width={20} height={20}></Image>
            {sectionOneDate}
          </div>

          <div className="location">
            <Image src={mapPinIcon} alt='map pin icon' width={20} height={20}></Image>
            {location}
          </div>
        </div>

        <div className="description">
          {sectionOneDescription}
        </div>

        <div className="buyTicketContainerAnnualCon">
          <LinkButton title='КУПИ КАРТА' href='/' image={chainIcon} content='mhraconference.com'/>
        </div>
      </div>

      <div className="rightSection">
        <div className="dottedPatternSecOneAnnCon"></div>
        <div className="bigImageContainer">
          <Image src={sectionOneImageOne} alt='image of a person'  layout="fill" objectFit="cover"></Image>
        </div>

        <div className="smallImageOneContainer">
          <div className="innerImageContainer">
            <Image src={sectionOneImageOne} alt='image of a person' layout="fill" objectFit="cover"></Image>
          </div>
        </div>

        <div className="smallImageTwoContainer">
          <div className="innerImageContainer">
            <Image src={sectionOneImageTwo} alt='image of a person' layout="fill" objectFit="cover"></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOneAnnualCon;
