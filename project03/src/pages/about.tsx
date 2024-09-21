import AboutSectionOne from '@/components/about/AboutSectionOne';
import AboutSectionThree from '@/components/about/AboutSectionThree';
import AboutSectionTwo from '@/components/about/AboutSectionTwo';
import Carousel from '@/components/reusable/Carousel';
import HeroSection from '@/components/reusable/HeroSection';
import OrangeBtn from '@/components/reusable/OrangeBtn';
import { AboutPage, CarouselItemData } from '@/interfaces/types';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react'

interface AboutProps{
  carouselItems: CarouselItemData[];
  aboutInfo: AboutPage;
}

const About: NextPage<AboutProps> = ({carouselItems, aboutInfo}) => {
  const {aboutHomepageButtonDescription, aboutHomepageButtonText, aboutHomepageDescription, aboutHomepageImage1, aboutHomepageImage2, aboutHomepageTitle} = aboutInfo.heroSection;
  const {boardPeople, sectionThreeTitle} = aboutInfo.aboutPageSectionThree;
  return (
    <>
       <HeroSection imageOne={aboutHomepageImage1} imageTwo={aboutHomepageImage2}>
          <div className="aboutHomepageContent">
            <div className="aboutHeading">
              <h1>{aboutHomepageTitle}</h1>
              <p>{aboutHomepageDescription}</p>
            </div>
            <div className="aboutHomepageButton">
              <p>{aboutHomepageButtonDescription}</p>
              <OrangeBtn text={aboutHomepageButtonText} href='/'/>
            </div>
          </div>
      </HeroSection>
      <Carousel carouselItems={carouselItems} />

      <div className="breadCrumbsAboutContainer">
        <Link href="/">Почетна</Link> &gt;{" "}
        <Link href="/about">
          <span>За нас</span>
        </Link>
      </div>

      <AboutSectionOne sectionOneInfo={aboutInfo.aboutPageSectionOne}/>
      <AboutSectionTwo sectionTwoInfo={aboutInfo.aboutPageSectionTwo}/>
      <AboutSectionThree sectionThreeTitle={sectionThreeTitle} boardPeople={boardPeople}/>
    </>
  )
}


export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const [carouselResponse, aboutInfoResponse] = await Promise.all([
    fetch("http://localhost:3031/carousel"),
    fetch("http://localhost:3031/aboutPage"),
  ]);

  const carouselItems: CarouselItemData[] = await carouselResponse.json();
  const aboutInfo: AboutPage[] = await aboutInfoResponse.json();
  return {
    props: {
      carouselItems: carouselItems,
      aboutInfo: aboutInfo[0],
    },
    revalidate: 10,
  };
};

export default About;
