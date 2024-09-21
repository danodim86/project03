import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import chainIcon from "../../../public/images/chainIcon.png";
import LinkButton from "../reusable/LinkButton";

const HomepageSec3 = () => {
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
    <section className="homePageSec3Container" ref={sectionRef}>
      <div className="contentLeftSideContainer">
        <h2>
          Најголемиот HR настан во нашите простори - Годишната HR конференција
          на МАЧР
        </h2>
        <p>
          Меѓународна размена на искуства во полето на човечки ресурси и
          константно движење во чекор со светските трендови
        </p>
        <div className="presidentContainer">
          <div
            className="presidentImageContainer"
            style={{ backgroundImage: `url("images/image2.png")` }}
          ></div>
          <div className="presidentInfoContainer">
            <h3>м-р Дарко Петровски</h3>
            <p>Претседател на МАЧР</p>
          </div>
        </div>
      </div>

      <div className="dottedPatternContainer"></div>

      <div
        className="contentRightSideContainer"
        style={{ backgroundImage: `url("images/image1.png")` }}
      >
        <div className="imageContainerOuter">
          <div
            className="imageContainerInner"
            style={{ backgroundImage: `url("images/image3.png")` }}
          ></div>
        </div>
        <LinkButton
          title="Купи карта"
          content="mhraconference.com"
          href="/"
          image={chainIcon}
        />
      </div>
    </section>
  );
};

export default HomepageSec3;
