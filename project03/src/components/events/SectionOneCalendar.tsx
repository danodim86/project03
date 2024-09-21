import React from 'react';
import Calendar from '../userDashboard/Calendar';

interface SectionOneCalendarProps{
  title: string;
  description: string;
}

const SectionOneCalendar: React.FC<SectionOneCalendarProps> = ({title, description}) => {
  return (
    <section className='eventsSectionOneCalendar'>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="calendarEventsContainer">
        <div className="eventsListContainer"></div>
        <div className="calendarContainer">
          <h3>Избери Дата</h3>
          <Calendar />
        </div>
      </div>
      <div className="dottedPatternEventsCalendar"></div>
    </section>
  )
}

export default SectionOneCalendar;
