import EventAboutComponent from "@/components/eventItem/EventAboutComponent";
import EventAgenda from "@/components/eventItem/EventAgenda";
import EventPricesComponent from "@/components/eventItem/EventPricesComponent";
import EventSpeakersComponent from "@/components/eventItem/EventSpeakersComponent";
import CardsComponent from "@/components/reusable/CardsComponent";
import Carousel from "@/components/reusable/Carousel";
import HeroSection from "@/components/reusable/HeroSection";
import { CarouselItemData, EventCardInfo, EventItem } from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

interface EventItemPageProps {
  carouselItems: CarouselItemData[];
  eventInfoData: EventItem;
  similarEvents: EventCardInfo[];
}

const EventItemPage: NextPage<EventItemPageProps> = ({
  carouselItems,
  eventInfoData,
  similarEvents,
}) => {
  return (
    <>
      <HeroSection>
        <div
          className="heroTextContainerEventItem"
          style={{ backgroundImage: `url(${eventInfoData.image})` }}
        >
          <p>Настан</p>
          <h1>{eventInfoData.categories[0]}</h1>
          <p>{eventInfoData.date}</p>
        </div>
      </HeroSection>
      <Carousel carouselItems={carouselItems} />

      <div className="breadCrumbsEventItemContainer">
        <Link href="/">Почетна </Link> &gt;{" "}
        <Link href="/events"> Настани </Link> &gt;{" "}
        <p>
          {" "}
          {eventInfoData.categories[0]} &gt; <span>Информации за настан</span>
        </p>
      </div>

      <div className="topicContainer">
        <h2>{eventInfoData.categories[0]}</h2>
        <p>Тема: {eventInfoData.topic}</p>
      </div>

      <EventAboutComponent eventInfo={eventInfoData} />

      <EventAgenda eventInfo={eventInfoData} />

      <EventSpeakersComponent eventInfo={eventInfoData} />

      <EventPricesComponent eventInfo={eventInfoData} />

      <CardsComponent
        title="Слични настани"
        data={similarEvents}
        disableAnimation={true}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const [carouselResponse, eventInfoResponse] = await Promise.all([
    fetch("http://localhost:3031/carousel"),
    fetch(`http://localhost:3031/eventsPosts/${id}`),
  ]);

  if (!carouselResponse.ok) {
    console.error(`Error fetching carousel: ${carouselResponse.statusText}`);
    return {
      notFound: true,
    };
  }

  if (!eventInfoResponse.ok) {
    console.log("here its a problem");
    console.error(
      `Error fetching event info for ID ${id}: ${eventInfoResponse.statusText}`
    );
    return {
      notFound: true,
    };
  }

  const carouselItems: CarouselItemData[] = await carouselResponse.json();
  const eventInfoData: EventItem = await eventInfoResponse.json();

  const similarEventIds = eventInfoData.similarEvents;

  const similarEventsPromises = similarEventIds.map(async (blogId: string) => {
    const response = await fetch(`http://localhost:3031/eventsPosts/${blogId}`);

    if (!response.ok) {
      console.error(
        `Error fetching event data for ID ${blogId}: ${response.statusText}`
      );
      return null;
    }

    try {
      const eventData = await response.json();

      return {
        id: eventData.id,
        title: eventData.title,
        description: eventData.description,
        image: eventData.image,
        categories: eventData.categories,
        type: eventData.type,
      };
    } catch (error) {
      console.error(`Error parsing JSON for event ID ${blogId}:`, error);
      return null;
    }
  });

  const similarEvents: EventCardInfo[] = (
    await Promise.all(similarEventsPromises)
  ).filter((event) => event !== null);

  return {
    props: {
      carouselItems,
      eventInfoData,
      similarEvents,
    },
  };
};

export default EventItemPage;
