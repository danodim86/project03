import React, { useState } from 'react';
import dynamic from "next/dynamic";


// Utility function to get the number of days in a month
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// Utility to get the day of the week the month starts on
const getStartDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const Calendar: React.FC = () => {
  const today = new Date();
  
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0 = January
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const startDay = getStartDayOfMonth(currentMonth, currentYear);
  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const macedonianMonths = [
    'Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 
    'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
  ];
  
  // Inside Calendar component
  const monthName = `${macedonianMonths[currentMonth]} ${currentYear}`;

  // Render the grid of days
  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = today.getDate() === i && today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    
    days.push(
      <div 
        key={i} 
        className={`day ${isToday ? 'today' : ''}`}
      >
        {i}
        {isToday && <div className="dot"></div>}
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <span>{monthName}</span>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>
      <div className="calendar-grid">
        {["НЕД", "ПОН", "ВТО", "СРЕ", "ЧЕТ", "ПЕТ", "САБ"].map((day, index) => (
          <div key={index} className="weekday">{day}</div>
        ))}
        {days}
      </div>
    </div>
  );
};

// export default Calendar;
export default dynamic (() => Promise.resolve(Calendar), {ssr: false})

