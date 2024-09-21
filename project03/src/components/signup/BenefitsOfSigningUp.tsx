import Image from 'next/image';
import React from 'react';

interface BenefitsOfSigningUpProps{
  image1: string;
  image2: string;
  corporate: string[];
  individual: string[];
}

const BenefitsOfSigningUp: React.FC<BenefitsOfSigningUpProps> = ({image1, image2, corporate, individual}) => {
  return (
    <section className='benefitsOfSigningContainer'>
      <div className="dottedContainerBenefitsOne"></div>
      <div className="dottedContainerBenefitsTwo"></div>
      <div className="dottedContainerBenefitsThree"></div>

      <div className="image1Container">
        <Image src={image1} alt='image of a person' layout="fill" objectFit="cover"></Image>
      </div>

      <div className="image2Container">
        <Image src={image2} alt='image of a person' layout="fill" objectFit="cover"></Image>
      </div>

      <div className="corporateListContainer">
        <h2>Бенефити од корпоративно зачленување</h2>
        <ul>
          {corporate.map((corporateBenefit, index) => (
            <li key={index}>
              {corporateBenefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="individualListContainer">
        <h2>Бенефити од индивидуално зачленување</h2>
        <ul>
          {individual.map((individualBenefit, index) => (
            <li key={index}>
              {individualBenefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default BenefitsOfSigningUp;
