// pages/index.tsx

import { GetStaticProps } from "next";
import Head from "next/head";
import Image1 from "../../public/images/image1.png";
import Image2 from "../../public/images/image2.png";
import OrangeBtn from "@/components/reusable/OrangeBtn";
import Carousel from "@/components/reusable/Carousel";
import HeroSection from "@/components/reusable/HeroSection";
import HomepageSec1 from "@/components/index/HomepageSec1";
import HomepageSec2 from "@/components/index/HomepageSec2";
import CardsComponent from "@/components/reusable/CardsComponent";
import HomepageSec3 from "@/components/index/HomepageSec3";
import HomepageSec4 from "@/components/index/HomepageSec4";
import { BlogsCardData, CarouselItemData } from "@/interfaces/types";
import { useEffect, useState } from "react";
import Popup from "@/components/index/Popup";


interface Props {
  carouselItems: CarouselItemData[];
  homepageCards: BlogsCardData[];
  homepageCardsSet1: BlogsCardData[];
}

export default function Home({
  carouselItems,
  homepageCards,
  homepageCardsSet1,
}: Props) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupDate, setPopupDate] = useState("");

  useEffect(() => {
    // Trigger popup after 3 seconds
    const timer = setTimeout(async () => {
      try {
        const randomId = Math.floor(Math.random() * 16) + 1; 
        const response = await fetch(
          `https://json-server-project03.onrender.com/eventsPosts/${randomId}`
        );
        const eventData = await response.json();
        console.log("Fetched data:", eventData);

        const eventTitle = `${eventData.categories[0]}: ${eventData.title}`;
        const eventDate = eventData.date; 

        setPopupTitle(eventTitle);
        setPopupDate(eventDate);

        setShowPopup(true);
        console.log("bidelo e");
      } catch (error) {
        console.error("Failed to fetch event post:", error);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);
  return (
    <>
      <Head>
        <title>
          МАЧР - Луѓето пред се!
        </title>
        <meta
          name="description"
          content="Придружете ни се на Македонската Асоцијација за Човечки Ресурси и останете во чекор со најновите трендови, истражувања и настани од областа на HR."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="author"
          content="Македонска Асоцијација за Човечки Ресурси"
        />
        <meta
          name="keywords"
          content="HR, Македонија, човечки ресурси, асоцијација, истражувања, настани"
        />
        <link rel="canonical" href="https://www.mhra.mk/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Македонска Асоцијација за Човечки Ресурси - Луѓето пред се!"
        />
        <meta
          property="og:description"
          content="Придружете ни се на Македонската Асоцијација за Човечки Ресурси и останете во чекор со најновите трендови, истражувања и настани од областа на HR."
        />
        <meta
          property="og:image"
          content="https://www.mhra.mk/images/og-image.png"
        />
        <meta property="og:url" content="https://www.mhra.mk/" />
        <meta
          property="og:site_name"
          content="Македонска Асоцијација за Човечки Ресурси"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Македонска Асоцијација за Човечки Ресурси",
            url: "https://www.mhra.mk/",
            logo: "https://www.mhra.mk/images/logo.png",
            sameAs: [
              "https://www.linkedin.com/in/mhumanresourceassociation/",
              "https://www.facebook.com/mhra.mk/",
              "https://www.instagram.com/mhramk/",
              "https://www.youtube.com/@macedonianhumanresourcesas2263",
            ],
          })}
        </script>
      </Head>

      <HeroSection imageOne={Image2} imageTwo={Image1}>
        <div className="heroTextContainer">
          <h1>Луѓето пред се!</h1>
          <p>Македонска Асоцијација за Човечки Ресурси</p>
        </div>
        <div className="heroLoginContainer">
          <p>Придружи ни се:</p>
          <OrangeBtn text="Зачлени се" href="/signup" />
        </div>
      </HeroSection>
      <Carousel carouselItems={carouselItems} />
      <HomepageSec1 />
      <HomepageSec2 />
      <CardsComponent title="Актуелни настани" data={homepageCards} />
      <HomepageSec3 />
      <CardsComponent title="Популарни истражувања" data={homepageCardsSet1} />
      <HomepageSec4 />

      {showPopup && (
        <Popup title={popupTitle} date={popupDate} onClose={closePopup} />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [carouselResponse, cardsResponse, cardsResponseSet1] =
    await Promise.all([
      fetch("https://json-server-project03.onrender.com/carousel"),
      fetch("https://json-server-project03.onrender.com/homepageCards"),
      fetch("https://json-server-project03.onrender.com/homepageCardsSet1"),
    ]);

  const carouselItems: CarouselItemData[] = await carouselResponse.json();
  const homepageCards: BlogsCardData[] = await cardsResponse.json();
  const homepageCardsSet1: BlogsCardData[] = await cardsResponseSet1.json();

  return {
    props: {
      carouselItems,
      homepageCards,
      homepageCardsSet1,
    },
    revalidate: 10,
  };
};
