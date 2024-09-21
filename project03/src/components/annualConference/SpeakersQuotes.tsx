import { SpecialGuest } from "@/interfaces/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SpeakersQuotesProps {
  specialGuests: SpecialGuest[];
}

const SpeakersQuotes: React.FC<SpeakersQuotesProps> = ({ specialGuests }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalGuests = specialGuests.length;

  const nextGuest = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGuests);
  };

  const prevGuest = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalGuests - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextGuest();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [totalGuests]);

  return (
    <section className="speakersQuotesContainer">
      <div className="speakerImageOuterContainer">
        <div className="speakerImageInnerContainer">
          <Image
            src={specialGuests[currentIndex].guestImage}
            alt="speaker image"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="dottedPatternSpeakerQuoteOne"></div>
        <div className="commas">“</div>
      </div>
      
      <div className="dottedPatternSpeakerQuoteTwo"></div>
      
      <div className="content">
        <h2>{specialGuests[currentIndex].guestName}</h2>
        <p className="description">
          {specialGuests[currentIndex].guestDescription}
        </p>
        <p className="quote">{specialGuests[currentIndex].guestQuote}</p>
        <div className="arrowsContainer">
          <div className="arrow leftArrow" onClick={prevGuest}>
            &lt;
          </div>
          <p>{currentIndex + 1} / {specialGuests.length}</p>
          <div className="arrow rightArrow" onClick={nextGuest}>
            &gt;
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersQuotes;
