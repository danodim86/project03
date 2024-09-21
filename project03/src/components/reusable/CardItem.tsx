import { CardItemProps } from "@/interfaces/types";
import Link from "next/link";
import React from "react";

const CardItem: React.FC<CardItemProps> = ({id, title, description, image, type }) => {
  const uniqueClassName = `cardNum${id}`;

  const linkPath = type === "blog" ? `/blogs/${id}` : `/events/${id}`;

  return (
    <div className={`cardItemOuterContainer ${uniqueClassName}`}>
      <div className="cardItemInnerContainer">
        <div
          className="cardImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="cardContentContainer">
          <h3>{title}</h3>
          <p>{description}</p> 
          <Link  href={linkPath} prefetch={false}>Прочитај повеќе {type}</Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
