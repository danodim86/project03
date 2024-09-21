import AgendaComponent from "@/components/annualConference/AgendaComponent";
import MapOfLocation from "@/components/annualConference/MapOfLocation";
import PacketsComponent from "@/components/annualConference/PacketsComponent";
import SectionOneAnnualCon from "@/components/annualConference/SectionOneAnnualCon";
import SectionTwoAnnualCon from "@/components/annualConference/SectionTwoAnnualCon";
import SpeakersQuotes from "@/components/annualConference/SpeakersQuotes";
import SpecialGuests from "@/components/annualConference/SpecialGuests";
import CardsComponent from "@/components/reusable/CardsComponent";
import Carousel from "@/components/reusable/Carousel";
import HeroSection from "@/components/reusable/HeroSection";
import { CarouselItemData, ConferenceInfo } from "@/interfaces/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

interface AnnualConfProps {
  carouselItems: CarouselItemData[];
  conferenceInfo: ConferenceInfo;
}

const AnnualConference: NextPage<AnnualConfProps> = ({
  carouselItems,
  conferenceInfo,
}) => {
  const { backgroundImage, title, date } = conferenceInfo.heroSection;
  const {
    sectionOneTitle,
    sectionOneDate,
    location,
    sectionOneDescription,
    sectionOneImageOne,
    sectionOneImageTwo,
  } = conferenceInfo.sectionOne;
  const { days, speakers, restaurants, books } = conferenceInfo.sectionTwo;

  return (
    <>
      <HeroSection>
        <div
          className="heroTextContainerAnnualCon"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <p>Настан</p>
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
      </HeroSection>
      <Carousel carouselItems={carouselItems} />

      <div className="breadCrumbsAnnualConContainer">
        <Link href="/">Почетна</Link> &gt;{" "}
        <Link href="/annualConference">
          <span>Годишна конференција</span>
        </Link>
        <div className="dottedPattern"></div>
      </div>

      <SectionOneAnnualCon
        sectionOneTitle={sectionOneTitle}
        sectionOneDate={sectionOneDate}
        location={location}
        sectionOneDescription={sectionOneDescription}
        sectionOneImageOne={sectionOneImageOne}
        sectionOneImageTwo={sectionOneImageTwo}
      />

      <SectionTwoAnnualCon
        days={days}
        speakers={speakers}
        restaurants={restaurants}
        books={books}
      />
      <SpecialGuests specialGuests={conferenceInfo.specialGuests} />

      <div className="dottedPatternAfterSpeakers"></div>
      <AgendaComponent day1={conferenceInfo.day1} day2={conferenceInfo.day2} />
      <div className="dottedPatternAfterSpeakers"></div>
      <SpeakersQuotes specialGuests={conferenceInfo.specialGuests} />
      <PacketsComponent packets={conferenceInfo.packets} />
      <MapOfLocation />

      <CardsComponent
        title="Најнови блогови"
        data={conferenceInfo.annualConCardsSetOne}
        disableAnimation={true}
      />
      <div className="spaceDivision"></div>
      <CardsComponent
        title="Слични настани"
        data={conferenceInfo.annualConCardsSetTwo}
        disableAnimation={true}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<AnnualConfProps> = async () => {
  const [carouselResponse, conferenceInfoResponse] = await Promise.all([
    fetch("http://localhost:3031/carousel"),
    fetch("http://localhost:3031/conferencePage"),
  ]);

  const carouselItems: CarouselItemData[] = await carouselResponse.json();
  const conferenceInfo: ConferenceInfo[] = await conferenceInfoResponse.json();
  return {
    props: {
      carouselItems: carouselItems,
      conferenceInfo: conferenceInfo[0],
    },
    revalidate: 10,
  };
};

export default AnnualConference;
