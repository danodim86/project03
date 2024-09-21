import SectionOneCalendar from "@/components/events/SectionOneCalendar";
import CardsComponent from "@/components/reusable/CardsComponent";
import HeroSection from "@/components/reusable/HeroSection";
import OrangeBtn from "@/components/reusable/OrangeBtn";
import { BlogsCardData, EventsPage } from "@/interfaces/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface AllEventsProps {
  eventsInfo: EventsPage;
}

const AllEvents: NextPage<AllEventsProps> = ({ eventsInfo }) => {
  const {
    outstandingEventDescription,
    outstandingEventImage1,
    outstandingEventImage2,
    outstandingEventSubTitle,
    outstandingEventTitle,
    outstnadingEventButtonText,
    outstandingEventDate,
  } = eventsInfo.heroSection;

  const filters: string[] = eventsInfo.filters;
  const HRCafeCards: BlogsCardData[] = eventsInfo.HRCafeCards;
  const HRWeekendCards: BlogsCardData[] = eventsInfo.HRWeekendCards;
  const HRWebinarCards: BlogsCardData[] = eventsInfo.HRWebinarCards;
  const HRConferenceCards: BlogsCardData[] = eventsInfo.HRConferenceCards;

  const { secOneCalDescription, secOneCalTitle } =
    eventsInfo.sectionOneCalendar;

  const router = useRouter();
  const { query } = router;

  const [activeFilter, setActiveFilter] = useState<string>(() => {
    return (query.filter as string) || filters?.[0] || "Сите";
  });
  const [searchTerm, setSearchTerm] = useState<string>(() => {
    return (query.search as string) || ""; 
  });
  const [filteredHRCafeCards, setFilteredHRCafeCards] =
    useState<BlogsCardData[]>(HRCafeCards);
  const [filteredHRWeekendCards, setFilteredHRWeekendCards] =
    useState<BlogsCardData[]>(HRWeekendCards);
  const [filteredHRWebinarCards, setFilteredHRWebinarCards] =
    useState<BlogsCardData[]>(HRWebinarCards);
  const [filteredHRConferenceCards, setFilteredHRConferenceCards] =
    useState<BlogsCardData[]>(HRConferenceCards);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    router.push(
      {
        pathname: router.pathname,
        query: { filter, search: searchTerm },
      },
      undefined,
      { scroll: false }
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    router.push(
      {
        pathname: router.pathname,
        query: { filter: activeFilter, search: newSearchTerm }, 
      },
      undefined,
      { scroll: false }
    );
  };

  useEffect(() => {
    const currentFilter = (query.filter as string) || filters[0];
    const currentSearchTerm = (query.search as string) || "";

    setActiveFilter(currentFilter);
    setSearchTerm(currentSearchTerm);

    const filterAndSearchCards = (cards: BlogsCardData[]) => {
      return cards.filter((card) => {
        const matchesFilter =
          currentFilter === "Сите" || card.categories.includes(currentFilter);
        const matchesSearch =
          card.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
          card.description
            .toLowerCase()
            .includes(currentSearchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
      });
    };

    setFilteredHRCafeCards(filterAndSearchCards(HRCafeCards));
    setFilteredHRWeekendCards(filterAndSearchCards(HRWeekendCards));
    setFilteredHRWebinarCards(filterAndSearchCards(HRWebinarCards));
    setFilteredHRConferenceCards(filterAndSearchCards(HRConferenceCards));
  }, [query.filter, query.search]);

  return (
    <>
      <HeroSection
        imageOne={outstandingEventImage1}
        imageTwo={outstandingEventImage2}
      >
        <div className="eventsHeroSectionContent">
          <h3>{outstandingEventSubTitle}</h3>
          <h1>{outstandingEventTitle}</h1>
          <p>{outstandingEventDescription}</p>
          <p>{outstandingEventDate}</p>
          <div className="eventsHeroSectionButton">
            <OrangeBtn href="/" text={outstnadingEventButtonText} />
          </div>
        </div>
      </HeroSection>

      <div className="eventsBreadCrumbs">
        <Link href="/">Почетна</Link> &gt;{" "}
        <Link href="/events">
          <span>Настани</span>
        </Link>
      </div>

      <SectionOneCalendar
        title={secOneCalTitle}
        description={secOneCalDescription}
      />

      <div className="filtersContainerEvents">
        <ul>
          {eventsInfo.filters.map((filter, index) => (
            <li
              key={index}
              className={activeFilter === filter ? "activeFilter" : ""}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>

      <div className="searchContainerEvents">
        <h2>Сите настани</h2>
        <input
          type="text"
          placeholder="Пребарај..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredHRCafeCards.length > 0 && (
        <div className="CafeCards eventsCards">
          <CardsComponent
            title="HR Кафе"
            data={filteredHRCafeCards}
            disableAnimation={true}
          />
          <p className="seeAllLink">Види ги сите</p>
        </div>
      )}

      {filteredHRWeekendCards.length > 0 && (
        <div className="WeekendCards eventsCards">
          <CardsComponent
            title="HR Викенд"
            data={filteredHRWeekendCards}
            disableAnimation={true}
          />
          <p className="seeAllLink">Види ги сите</p>
        </div>
      )}

      {filteredHRWebinarCards.length > 0 && (
        <div className="WebinarCards eventsCards">
          <CardsComponent
            title="HR Вебинар"
            data={filteredHRWebinarCards}
            disableAnimation={true}
          />
          <p className="seeAllLink">Види ги сите</p>
        </div>
      )}

      {filteredHRConferenceCards.length > 0 && (
        <div className="ConferenceCards eventsCards">
          <CardsComponent
            title="HR Конференции"
            data={filteredHRConferenceCards}
            disableAnimation={true}
          />
          <p className="seeAllLink">Види ги сите</p>
        </div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<AllEventsProps> = async () => {
  const [eventsInfoResponse] = await Promise.all([
    fetch("https://json-server-project03.onrender.com/events"),
  ]);

  const eventsInfo: EventsPage[] = await eventsInfoResponse.json();
  return {
    props: {
      eventsInfo: eventsInfo[0],
    },
    revalidate: 10,
  };
};

export default AllEvents;
