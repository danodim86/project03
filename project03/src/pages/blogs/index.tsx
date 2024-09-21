import Carousel from "@/components/reusable/Carousel";
import HeroSection from "@/components/reusable/HeroSection";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import image1 from "../../../public/images/image1.png";
import image6 from "../../../public/images/image6.png";
import OrangeBtn from "@/components/reusable/OrangeBtn";
import Link from "next/link";
import NewestBlogsSection from "@/components/blogs/NewestBlogsSection";
import CardsComponent from "@/components/reusable/CardsComponent";
import { useRouter } from "next/router";
import {
  AllBlogsProps,
  BlogsCardData,
  CarouselItemData,
  MostPopularBlog,
  NewestBlogData,
} from "@/interfaces/types";

const AllBlogs: NextPage<AllBlogsProps> = ({
  carouselItems,
  mostPopularBlog,
  filters,
  newestBlog,
  blogsCardsSetOne,
  blogsCardsSetTwo,
}) => {
  const router = useRouter();
  const { query } = router;

  const [activeFilter, setActiveFilter] = useState<string>(() => {
    return (query.filter as string) || filters?.[0] || "Сите";
  });
  const [searchTerm, setSearchTerm] = useState<string>(() => {
    return (query.search as string) || "";  
  });
  const [filteredBlogsSetOne, setFilteredBlogsSetOne] = useState<BlogsCardData[]>(blogsCardsSetOne);
  const [filteredBlogsSetTwo, setFilteredBlogsSetTwo] = useState<BlogsCardData[]>(blogsCardsSetTwo);

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

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    router.push(
      {
        pathname: router.pathname,
        query: { filter: activeFilter, search }, 
      },
      undefined,
      { scroll: false }
    );
  };

  useEffect(() => {
    const currentFilter = (query.filter as string) || filters[0];
    const currentSearch = (query.search as string) || "";

    setActiveFilter(currentFilter);
    setSearchTerm(currentSearch);

    const filterAndSearchCards = (cards: BlogsCardData[]) => {
      return cards.filter((card) => {
        const matchesFilter = currentFilter === "Сите" || card.categories.includes(currentFilter);
        const matchesSearch = card.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                               card.description.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesFilter && matchesSearch;
      });
    };

    setFilteredBlogsSetOne(filterAndSearchCards(blogsCardsSetOne));
    setFilteredBlogsSetTwo(filterAndSearchCards(blogsCardsSetTwo));
  }, [query.filter, query.search, filters, blogsCardsSetOne, blogsCardsSetTwo]);

  return (
    <>
      <Head>
        <title>Сите блогови | МАЧР</title>
        <meta
          name="description"
          content="Прелистајте ја нашата збирка на информативни блогови за HR практики, иднината на работата, и многу повеќе. Останете информирани со најновите трендови и истражувања во човечки ресурси."
        />
        <meta
          name="keywords"
          content="HR блогови, човечки ресурси, HR практики, трендови на работното место, далечинска работа, инклузија, диверзитет, ангажираност на вработените, лидерство"
        />
        <meta
          name="author"
          content="Македонска Асоцијација за Човечки Ресурси"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <HeroSection imageOne={image1} imageTwo={image6}>
        <div className="heroTextContainerBlogs">
          <p className="firstPar">{mostPopularBlog.paragraph1}</p>
          <h1>{mostPopularBlog.mainTitle}</h1>
          <p
            className="secondPar"
            dangerouslySetInnerHTML={{ __html: mostPopularBlog.paragraph2 }}
          />
          <div className="heroBlogsButton">
            <OrangeBtn text={mostPopularBlog.buttonText} href="/login" />
          </div>
        </div>
      </HeroSection>

      <Carousel carouselItems={carouselItems} />

      <div className="breadCrumbsNavigation">
        <p>
          <Link href="/">Почетна</Link> &gt; <span>Блогови</span>
        </p>
      </div>

      <div className="getPointsInfoContainer">
        <div
          className="imageContainer"
          style={{ backgroundImage: `url("images/image2.png")` }}
        >
          <div className="dottedPattern"></div>
        </div>
        <div className="contentContainer">
          <h2>
            Биди <span>активен/на</span>, споделувај настани на социјалните
            медиуми, собирај поени, добивај значки и рамки, кани пријатели на
            настани и освојувај попусти за следанта купена карта
          </h2>
          <p>
            Доколу овој месец си најактивен/а во форумот добиваш награди за да
            го направиш твојот профил уникатен, а ако каниш пријатели и тие
            купат карти преку товјот линк за покана добиваш попуст на следната
            купена карта за настан.
          </p>
        </div>
      </div>

      <div className="filtersContainer">
        <ul>
          {filters.map((filter, index) => (
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

      <NewestBlogsSection
        newestBlog={newestBlog}
        onSearchChange={handleSearchChange}
        searchValue = {searchTerm}
      />
       {filteredBlogsSetOne.length > 0 && (
        <>
          <CardsComponent
            title="Тема: Култура во компанијата"
            data={filteredBlogsSetOne}
            disableAnimation={true}
          />
          <div className="dottedPatternContainerBlogs">
            <div className="dottedPatternOne"></div>
            <div className="dottedPatternTwo"></div>
          </div>
        </>
      )}
      {filteredBlogsSetTwo.length > 0 && (
        <CardsComponent
          title="Тема: Култура во компанијата"
          data={filteredBlogsSetTwo}
          disableAnimation={true}
        />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<AllBlogsProps> = async () => {
  const [carouselResponse, blogsResponse] = await Promise.all([
    fetch("http://localhost:3031/carousel"),
    fetch("http://localhost:3031/blogsPage"),
  ]);

  const carouselItems: CarouselItemData[] = await carouselResponse.json();
  const blogsData = await blogsResponse.json();
  const mostPopularBlog: MostPopularBlog = blogsData.mostPopularBlog;
  const filters: string[] = blogsData.filters;
  const newestBlog: NewestBlogData = blogsData.newestBlog;
  const blogsCardsSetOne: BlogsCardData[] = blogsData.blogsCardsSetOne;
  const blogsCardsSetTwo: BlogsCardData[] = blogsData.blogsCardsSetTwo;
  return {
    props: {
      carouselItems,
      mostPopularBlog,
      filters,
      newestBlog,
      blogsCardsSetOne,
      blogsCardsSetTwo,
    },
    revalidate: 10,
  };
};

export default AllBlogs;
