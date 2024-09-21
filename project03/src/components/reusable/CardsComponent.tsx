import React, { useEffect, useRef } from "react";
import CardItem from "./CardItem";
import { BlogsCardData, CardsComponentProps } from "@/interfaces/types";


const CardsComponent: React.FC<CardsComponentProps> = ({ title, data,  disableAnimation = false }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (disableAnimation){
      // @ts-ignore
      sectionElement.classList.add("animate");
      return;
    }


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionElement?.classList.add("animate");
        } else {
          sectionElement?.classList.remove("animate");
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, [disableAnimation]);
  
  return (
    <section className="cardsComponentContainer" ref={sectionRef}>
      <h2>{title}</h2>
      <div className="cardsGrid">
        {data.map((card) => (
          <CardItem
            key={card.id}
            id={Number(card.id)}
            title={card.title}
            description={card.description}
            image={card.image}
            type={card.type} 
          />
        ))}
      </div>
    </section>
  );
};

export default CardsComponent;
