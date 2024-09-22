import Image from 'next/image';
import React from 'react';

import popupImage from "../../../public/images/notificationPopupImage.png";
import closeIcon from "../../../public/images/closeIcon.png";

interface PopupProps{
  title: string;
  date: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, date, onClose }) => {
  return (
    <div className='indexPopup'>
      <div className="indexPopupInner">
        <div className="imageContainer">
          <Image src={popupImage} alt='notification icon' layout='fill' objectFit='cover'></Image>
        </div>
        <div className="contentContainer">
          <p>Уште само 5 дена до:</p>
          <h2>{title}</h2>
          <p>{date} Лабораториум, Скопје</p>
        </div>
        <div className="closeIconContainer" onClick={onClose}>
          <Image src={closeIcon} alt='close icon' width={30} height={30}></Image>
        </div>
      </div>
    </div>
  )
}

export default Popup;
