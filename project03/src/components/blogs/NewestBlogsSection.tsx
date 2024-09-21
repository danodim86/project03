import React from "react";
import CardItem from "../reusable/CardItem";
import Link from "next/link";
import Image from "next/image";

import image3 from "../../../public/images/image3.png";
import { NewestBlogData } from "@/interfaces/types";


interface NewestBlogSectionProps {
  newestBlog: NewestBlogData;
  onSearchChange: (search: string) => void;  
  searchValue: string;
}

const NewestBlogsSection: React.FC<NewestBlogSectionProps> = ({
  newestBlog,
  onSearchChange,
  searchValue
}) => {
  return (
    <section className="newestBlogsSection">
      <div className="topSection">
        <h2>Најнови блогови</h2>
        <input type="text" placeholder="Пребарај" value={searchValue}  onChange={(e) => onSearchChange(e.target.value)}/>
      </div>
      <div className="contentContainer">
        <div className="cardsContainer">
          <div className="rowOne">
            <div className="cardOneContainer">
              <CardItem
                id={Number(newestBlog.card1.id)}
                title={newestBlog.card1.title}
                description={newestBlog.card1.description}
                image={newestBlog.card1.image}
                type={newestBlog.card1.type}
              />
            </div>
            <div
              className="eventOneContainer"
              style={{ backgroundImage: `url("images/image4.png")` }}
            >
              <h3>{newestBlog.event1.title}</h3>
              <p className="description">{newestBlog.event1.description}</p>
              <p className="month">{newestBlog.event1.month}</p>
              <p className="day">{newestBlog.event1.day}</p>
              <Link href="/">Прочитај повеќе</Link>
            </div>
          </div>

          <div className="rowTwo">
            <div
              className="eventTwoContainer"
              style={{ backgroundImage: `url("images/image5.png")` }}
            >
              <h3>{newestBlog.event2.title}</h3>
              <p className="description">{newestBlog.event2.description}</p>
              <p className="month">{newestBlog.event2.month}</p>
              <p className="day">{newestBlog.event2.day}</p>
              <Link href="/">Прочитај повеќе</Link>
            </div>

            <div className="cardTwoContainer">
              <CardItem
                id={Number(newestBlog.card2.id)}
                title={newestBlog.card2.title}
                description={newestBlog.card2.description}
                image={newestBlog.card2.image}
                type={newestBlog.card2.type}
              />
            </div>
          </div>
        </div>

        <div className="jobAdsContainer" style={{ backgroundImage: `url("images/image1.png")` }}>
          <h3>Најнови огласи:</h3>
          <ul>
            {newestBlog.jobAds.map((jobAd, index) => (
              <li className="jobAdItem" key={index}>
                <div className="imageContainer"  style={{ backgroundImage: `url(${jobAd.image})` }}></div>
                <p>{jobAd.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="dottedPatternContainer">
        <div className="dottedPatternOne"></div>
        <div className="dottedPatternTwo"></div>
      </div>
    </section>
  );
};

export default NewestBlogsSection;
