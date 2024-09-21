import { EventItem } from "@/interfaces/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import facebookIcon from "../../../public/images/boardFacebook.png";
import twitterIcon from "../../../public/images/boardTwitter.png";
import instagramIcon from "../../../public/images/boardInstagram.png";
import linkedinIcon from "../../../public/images/boardLinkedin.png";

interface EventSpeakersComponentProps {
  eventInfo: EventItem;
}

const EventSpeakersComponent: React.FC<EventSpeakersComponentProps> = ({
  eventInfo,
}) => {
  return (
    <section className="eventSpeakersContainer">
      <div className="titleContainer">
        <h2>Говорници на настанот:</h2>
        <div className="eventSpeakersDottedPattern"></div>
      </div>

      <div className="speakersContainer">
        {eventInfo.eventSpeakers.map((speaker, index) => (
          <div className="speakerItem" key={index}>
            <div className="imageContainer">
              <Image
                src={speaker.image}
                alt="image of speaker"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <h3>{speaker.name}</h3>
            <p>{speaker.role}</p>
            <div className="socialMediaSpeaker">
              <Link href={speaker.socialMedia[0]}>
                {" "}
                <Image
                  src={facebookIcon}
                  alt="facebook Item"
                  width={15}
                  height={15}
                ></Image>
              </Link>
              <Link href={speaker.socialMedia[1]}>
                <Image
                  src={twitterIcon}
                  alt="twitter Item"
                  width={15}
                  height={15}
                ></Image>
              </Link>
              <Link href={speaker.socialMedia[2]}>
                <Image
                  src={instagramIcon}
                  alt="instagram Item"
                  width={30}
                  height={30}
                ></Image>
              </Link>
              <Link href={speaker.socialMedia[3]}>
                <Image
                  src={linkedinIcon}
                  alt="linkedin Item"
                  width={15}
                  height={15}
                ></Image>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSpeakersComponent;
