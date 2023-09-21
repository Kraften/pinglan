import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./calendar-event.module.scss";
import moment from "moment";
// import AuthContext from '../store/auth-context';
// import FirebaseEventsService from '../services/firebase/events.service';

// Destructed prop { event } is an object containing information that this component renders.
const CalendarEventComponent = ({ event, eventIsToday }) => {
  const eventDateTime = moment(event.date);
  // const authCtx = useContext(AuthContext);

  // const handleEventDelete = (id) => {
  //   FirebaseEventsService.deleteEventById(id);
  // };

  return (
    <li
      className={
        styles.event
        // (
        // event.isBeforeToday
        //   ? "eventIsOld"
        //   : "null" && eventIsToday
        //   ? "event flex-column eventIsToday"
        //   : "event flex-column")
      }
      key={event.id}
    >
      <div className="flex-column">
        <span className={styles.eventName}>{event.title}</span>
        {/* {authCtx.isLoggedIn ? (
          <span className="x" onClick={() => handleEventDelete(event.id)}>
            X
          </span>
        ) : (
          ""
        )} */}
      </div>
      <span className={styles.eventTime}>{eventDateTime.format("HH:mm")}</span>
      <span>{event.comment}</span>
    </li>
  );
};

CalendarEventComponent.propTypes = {
  listItemClick: PropTypes.any,
  eventIsToday: PropTypes.bool,
  event: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    comment: PropTypes.string,
    isBeforeToday: PropTypes.bool,
  }),
};

export default CalendarEventComponent;
