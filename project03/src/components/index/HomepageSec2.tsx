import Link from "next/link";
import React, { useEffect, useRef } from "react";

const HomepageSec2 = () => {
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         // @ts-ignore
  //         sectionRef.current.classList.add("animate");
  //       } else {
  //         // @ts-ignore
  //         sectionRef.current.classList.remove("animate");
  //       }
  //     },
  //     {
  //       threshold: 0.3,
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

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
    <section className="homePageSec2Container" ref={sectionRef}>
      <div className="benefitsListContainer">
        <ul>
          <li className="firstBenefit">
            <div className="benefitNumberContainer">01</div>
            <div className="benefitHeadingContainer">
              <h2>Едукативни настани</h2>
              <Link href="/">Прочитај повеќе</Link>
            </div>
          </li>

          <li>
            <div className="benefitNumberContainer">02</div>
            <div className="benefitHeadingContainer">
              <h2>Најнови настани и случувања</h2>
              <Link href="/">Прочитај повеќе</Link>
            </div>
          </li>
          <li>
            <div className="benefitNumberContainer">03</div>
            <div className="benefitHeadingContainer">
              <h2>Ширење на мрежата на контакти</h2>
              <Link href="/">Прочитај повеќе</Link>
            </div>
          </li>
          <li>
            <div className="benefitNumberContainer">04</div>
            <div className="benefitHeadingContainer">
              <h2>Вклучување во работење на МАЧР</h2>
              <Link href="/">Прочитај повеќе</Link>
            </div>
          </li>
          <li>
            <div className="benefitNumberContainer">05</div>
            <div className="benefitHeadingContainer">
              <h2>HR огласи за работа</h2>
              <Link href="/">Прочитај повеќе</Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="benefitsContentContainer">
        <h2>Бенефити од зачленување на МАЧР</h2>
        <p>
          Македонската асоцијација за човечки ресурси - МАЧР како невладино,
          непрофитно и непартиско здружение на граѓани, продолжува со
          остварување на својата мисија за промоција и унапредување на
          професијата управување со човечките ресурси, како и создавање и
          имплементирање на највисоките професионални стандарди и развој на
          човечкиот капитал во Република Македонија како единствен ентитет од
          овој вид во земјава.
        </p>
      </div>
    </section>
  );
};

export default HomepageSec2;
