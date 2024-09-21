import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import chainIcon from "../../../public/images/chainIcon.png";
import OrangeBtn from "../reusable/OrangeBtn";
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
    <section className="homePageSec4Container" ref={sectionRef}>
      <div className="leftSideContainer">
        <div
          className="imageContainer"
          style={{ backgroundImage: `url("/images/image2.png")` }}
        >
          <div className="imageContentContainer">
            <p>
              Сакаш да бидеш во тек со нас и најновите содржини што ги
              споделуваме?
            </p>
          </div>
        </div>
        <div className="leftSideContent">
          <h2>Дознај повеќе за нас и нашите цели и задачи!</h2>
          <p>
            Нашиот огранок за коучинг е формиран 22 Април 2019 година и е првата
            мрежа за професионални ментори во земјава.
          </p>
          <OrangeBtn text="Повеќе за нас" href="/about" />
        </div>
      </div>

      <div className="rightSideContainer">
        <div
          className="imageContainer"
          style={{ backgroundImage: `url("/images/image4.png")` }}
        >
          <div className="imageContentContainer">
            <p>
              Претплати се на нашиот информативен билет и никогаш повеќе не
              пропуштај важни настани и известувања
            </p>
          </div>
          <LinkButton
            title="МАЧР билтен"
            content="contact@mhra.mk"
            href="/"
            image={chainIcon}
          />
        </div>
      </div>

      <div className="dottedPatternNum1"></div>
      <div className="dottedPatternNum2"></div>
    </section>
  );
};

export default HomepageSec3;
