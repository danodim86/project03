import { EventItem } from "@/interfaces/types";
import React from "react";

interface EventAgendaProps {
  eventInfo: EventItem;
}

const EventAgenda: React.FC<EventAgendaProps> = ({ eventInfo }) => {
  return (
    <section className="eventAgendaContainer">
      <h2>{eventInfo.eventAgenda[0].agendaTitle}</h2>

      <div className="contentAndPatternContainer">
        <div className="contentContainer">
          <p className="agendaDate">{eventInfo.eventAgenda[0].agendaDate}</p>

          <div className="firstHalf">
            <ul>
              {eventInfo.eventAgenda[0].firstHalf.map((event, index) => (
                <li key={index}>
                  <div className="timeContainer">{event.time}</div>
                  <div className="eventContent">
                    <h3>{event.description}</h3>
                    {event.featuresList && (
                      <ul>
                        {event.featuresList.map((feature, index) => (
                          <li key={index}>
                            <p
                              dangerouslySetInnerHTML={{ __html: feature }}
                            ></p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="redLine"></div>

          <div className="secondHalf">
            <ul>
              {eventInfo.eventAgenda[0].secondHalf.map((event, index) => (
                <li key={index}>
                  <div className="timeContainer">{event.time}</div>
                  <div className="eventContent">
                    <h3>{event.description}</h3>
                    {event.featuresList && (
                      <ul>
                        {event.featuresList.map((feature, index) => (
                          <li key={index}>
                            <p
                              dangerouslySetInnerHTML={{ __html: feature }}
                            ></p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dottedPatternAgendaContainer"></div>
      </div>
    </section>
  );
};

export default EventAgenda;
