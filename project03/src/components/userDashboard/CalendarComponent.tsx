import { UserDashboardInfo } from '@/interfaces/types';
import React from 'react';
import Calendar from './Calendar';

const CalendarComponent: React.FC= () => {
  return (
    <section className='calendarComponent'>
      <div className="heading">
        <h2>Календар со датуми за сите престојни настани</h2>
        <p>Погледни ги сите настани распоредени на календар. Со клик на обележените настани можеш да дознаеш повеќе информации за секој од настаните но за целосни информации упатете се до индивидуалната страна на настанот.</p>
      </div>
      <div className="calendarContainer">
        <div className="eventsContainer"></div>
        <div className="calendarAndDates">
          <h3>Избери Дата</h3>
          <Calendar />
        </div>
      </div>
    </section>
  )
}

export default CalendarComponent;
