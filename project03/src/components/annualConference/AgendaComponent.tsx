import { DaySchedule } from "@/interfaces/types";
import React, { useState } from "react";

interface AgendaComponentProps {
  day1: DaySchedule;
  day2: DaySchedule;
}

const AgendaComponent: React.FC<AgendaComponentProps> = ({ day1, day2 }) => {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");
  console.log(day1);

  return (
    <section className="agendaContainer">
      <h2>Агенда на конференцијата</h2>

      <div className="scheduleContainer">
        <div className="daysContainer">
          <button
            className={selectedDay === "day1" ? "activeDay" : ""}
            onClick={() => setSelectedDay("day1")}
          >
            Ден 1
          </button>
          <button
            className={selectedDay === "day2" ? "activeDay" : ""}
            onClick={() => setSelectedDay("day2")}
          >
            Ден 2
          </button>
        </div>

        <div className="firstHalf">
          <ul>
            {(selectedDay === 'day1' ? day1.dayFirstHalf : day2.dayFirstHalf).map((event, index) => (
              <li key={index}>
                <div className="timeContainer">{event.time}</div>
                <div className="eventContent">
                  <h3>{event.description}</h3>
                  {event.featuresList && (
                    <ul>
                      {event.featuresList.map((feature, index) => (
                        <li key={index}>
                          <p
                            dangerouslySetInnerHTML={{ __html: feature  }}
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
            {(selectedDay === 'day1' ? day1.daySecondHalf : day2.daySecondHalf).map((event, index) => (
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
    </section>
  );
};

export default AgendaComponent;
