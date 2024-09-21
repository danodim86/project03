import React, { useEffect, useRef } from "react";
import OrangeBtn from "../reusable/OrangeBtn";

const HomepageSec1 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current; 

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
  }, []);

  return (
    <section className="homePageSec1Container" ref={sectionRef}>
      <div className="homePageSec1Content">
        <h2>Кажи ги своите мислења и поврзи се со останатите HR ентузијасти</h2>
        <p>
          Во нашиот <strong>блог</strong> одсега ке можеш да разменуваш мислења
          на актуелни теми со останатите корисници
        </p>
      </div>
      <div className="homePageSec1BlogContainer">
        <p>Упати се уште сега кон</p>
        <OrangeBtn text="Нашиот блог" href="/blogs" />
      </div>
      <div
        className="homePageSec1Image1"
        style={{ backgroundImage: `url("images/image2.png")` }}
      ></div>
      <div
        className="homePageSec1Image2"
        style={{ backgroundImage: `url("images/image3.png")` }}
      ></div>
      <div
        className="homePageSec1Image3"
        style={{ backgroundImage: `url("images/image4.png")` }}
      ></div>
      <div className="homePageSec1DottedPattern1"></div>
      <div className="homePageSec1DottedPattern2"></div>
      <div className="homePageSec1DottedPattern3"></div>
    </section>
  );
};

export default HomepageSec1;
