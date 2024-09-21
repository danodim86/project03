import { SpecialGuest } from "@/interfaces/types";
import Image from "next/image";
import React from "react";
import LinkButton from "../reusable/LinkButton";

import linkedinIcon from "../../../public/images/specialGuestsLinkedinIcon.png";
import OrangeBtn from "../reusable/OrangeBtn";

interface SpecialGuestsProps {
  specialGuests: SpecialGuest[];
}

const SpecialGuests: React.FC<SpecialGuestsProps> = ({ specialGuests }) => {
  return (
    <section className="specialGuestsContainer">
      <h2>Специјални гости</h2>
      <p>
        Ова се луѓе од кои дефенитивно има што да се научи. Нивните достигнувања
        се огромни и со нивна помош секторот на HR успеа да достигне нови
        височини. Не пропуштајте ја оваа прилика да ги слушнете, па и да научете
        нешто од нивната мудрост.
      </p>

      <div className="guestsList">
        <div className="guestOne">
          <Image
            src={specialGuests[0].guestImage}
            alt="guest image"
            layout="fill"
            objectFit="cover"
          ></Image>
          <div className="buttonGuest">
            <LinkButton
              title={specialGuests[0].guestName}
              image={linkedinIcon}
              content={specialGuests[0].guestDescription}
              href="/"
            />
          </div>
        </div>

        <div className="guestTwo">
          <Image
            src={specialGuests[1].guestImage}
            alt="guest image"
            layout="fill"
            objectFit="cover"
          ></Image>
          <div className="buttonGuest">
            <LinkButton
              title={specialGuests[1].guestName}
              image={linkedinIcon}
              content={specialGuests[1].guestDescription}
              href="/"
            />
          </div>
        </div>

        <div className="guestThree">
          <Image
            src={specialGuests[2].guestImage}
            alt="guest image"
            layout="fill"
            objectFit="cover"
          ></Image>
          <div className="buttonGuest">
            <LinkButton
              title={specialGuests[2].guestName}
              image={linkedinIcon}
              content={specialGuests[2].guestDescription}
              href="/"
            />
          </div>
        </div>

        <div className="guestFour">
          <Image
            src={specialGuests[3].guestImage}
            alt="guest image"
            layout="fill"
            objectFit="cover"
          ></Image>
          <div className="buttonGuest">
            <LinkButton
              title={specialGuests[3].guestName}
              image={linkedinIcon}
              content={specialGuests[3].guestDescription}
              href="/"
            />
          </div>
        </div>
      </div>

      <div className="allSpeakersButton">
        <OrangeBtn text="Сите спикери" href="/"/>
      </div>
    </section>
  );
};

export default SpecialGuests;
