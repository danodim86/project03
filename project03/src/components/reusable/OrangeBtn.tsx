import { OrangeBtnProps } from '@/interfaces/types';
import Link from 'next/link';
import React from 'react';

const OrangeBtn: React.FC<OrangeBtnProps> = ({text, href}) => {
  return href ? (
    <Link href={href} passHref>
      <button className='orangeButtonContainer'>
        {text}
      </button>
    </Link>
  ) : (
    <button className='orangeButtonContainer'>
      {text}
    </button>
  );
}

export default OrangeBtn;
