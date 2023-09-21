import React from "react";
import PropTypes from "prop-types";
import styles from "./calendar-day.module.scss";
import moment from "moment";
import CalendarEventComponent from "../calendar-event/calendar-event-component";
import {
  inconsolata,
  montserrat_bold,
  montserrat_medium,
  montserrat_semiBold,
  montserrat_subrayada,
} from "@/utils/font-loader";

/**
 * @param eventList list of events.
 * @returns Bucket named by day and date and holds array of events on that day.
 *
 * example. { Friday 01: [ {…}, {…} ] }
 */
const eventsIntoDayBuckets = (eventList) => {
  var dayBucket = {};
  eventList.map((event) => {
    const today = moment(new Date());
    const eventIsToday = today.isSame(event.date, "day");
    let dayName = `${moment(event.date).format("dddd")} ${moment(
      event.date
    ).format("DD")} ${eventIsToday}`;
    dayBucket[dayName] = dayBucket[dayName] || [];
    return dayBucket[dayName].push(event);
  });
  return dayBucket;
};

const CalendarDayComponent = ({ eventsInMonth }) => {
  var dayBucket = eventsIntoDayBuckets(eventsInMonth);
  const daysInMonth = [];

  Object.entries(dayBucket).map((dayBucket) => {
    const events = dayBucket[1];
    const day = dayBucket[0].split(" ");
    const dayName = day[0];
    const dayNumber = day[1];
    const eventIsToday = String(day[2]) == "true";

    return daysInMonth.push(
      <div
        key={dayNumber}
        className={`${styles.wrapper} ${inconsolata.className}`}
      >
        <div className="flex-column">
          <span className={`${inconsolata.className} ${styles.dateNumber}`}>
            {dayNumber}
          </span>
          <span className={styles.dateName}>{dayName}</span>
        </div>
        <div className="events">
          <ul>
            {events.map((event) => {
              return (
                <CalendarEventComponent
                  eventIsToday={eventIsToday}
                  key={event.id}
                  event={event}
                ></CalendarEventComponent>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return <div>{daysInMonth}</div>;
};

CalendarDayComponent.propTypes = {
  eventsInMonth: PropTypes.array,
};

export default CalendarDayComponent;
