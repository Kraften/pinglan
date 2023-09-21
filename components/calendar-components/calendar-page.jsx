import React, { useEffect, useState, useContext } from "react";
import moment from "moment";
import styles from "./calendar.module.scss";
// import OptionsMenuComponent from '../../components/options-menu-component';
// import AddEventPanel from '../../components/calendar-add-event-panel-component';

// import FirebaseEventsService from '../../services/firebase/events.service';
// import CalendarMonthComponent from '../../components/calendar-month-component';
// import TopMenuComponent from '../../components/top-menu-component.react';
// import AuthContext from '../../store/auth-context';
import useBooleanToggle from "../../hooks/useBooleanToggle";
import CalendarMonthComponent from "./calendar-month/calendar-month-component";

const CalendarComponent = () => {
  // const authCtx = useContext(AuthContext);
  const today = moment(new Date());
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [eventsBeforeToday, setEventsBeforeToday] = useState([]);
  const [eventsTodayOrAfter, setEventsTodayOrAfter] = useState([
    {
      comment: "",
      date: "2022-08-25T13:15",
      id: "9f5b3ebb-4979-41ba-b70a-8ed4a305409a",
      title: "Trondheim Festival",
    },
    {
      comment: "",
      date: "2022-07-25T20:15",
      id: "9f5b3ebb-4979-41ba-b70a-8edac305409a",
      title: "Plan B Malmö",
    },
    {
      comment: "",
      date: "2022-09-25T13:15",
      id: "9f5b3ebb-4979-41ba-b7aa-8ed4c305409a",
      title: "New York Jazz festival",
    },
    {
      comment: "",
      date: "2022-09-25T10:15",
      id: "9f5b3ebb-4979-41ba-b70a-8ed4c3a5409a",
      title: "Beddinge Jazz festival",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [showHistory, toggleHistory] = useBooleanToggle(false);

  // useEffect(() => {
  //   const unsubscribe = FirebaseEventsService.getAllQuery((querySnapshot) => {
  //     const eventsList = querySnapshot.docs.map((docSnapshot) => {
  //       return docSnapshot.data();
  //     });
  //     setIsLoading(false);
  //     const b = addIsBeforeBooleanToEvent(eventsList);
  //     splitOldAndNewEvents(b);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const handleOptionsMenuChildToggle = () => {
  //   handleOptionsMenuToggle();
  // };

  // const handleOptionsMenuToggle = () => {
  //   setIsOptionsMenuOpen(!isOptionsMenuOpen);
  // };

  // const handleAddEventPanelToggle = () => {
  //   setIsPanelOpen(!isPanelOpen);
  // };

  // const addIsBeforeBooleanToEvent = (events) => {
  //   if (events) {
  //     const eventsWithBeforeBoolean = events.map((e) => {
  //       const newEvent = {
  //         ...e,
  //         isBeforeToday: !today.isSameOrBefore(e.date, "day"),
  //       };
  //       return newEvent;
  //     });
  //     return eventsWithBeforeBoolean;
  //   }
  // };

  // /**
  //  * Split elements by before today, today and beyond.
  //  * @param {*} events
  //  */
  // const splitOldAndNewEvents = (events) => {
  //   const eventsBefore = [];
  //   const eventsAfter = [];
  //   events.forEach((e) => {
  //     if (e.isBeforeToday) {
  //       eventsBefore.push(e);
  //     } else if (!e.isBeforeToday) {
  //       eventsAfter.push(e);
  //     }
  //   });
  //   setEventsBeforeToday(eventsBefore);
  //   setEventsTodayOrAfter(eventsAfter);
  // };

  const eventsIntoYearBuckets = (events) => {
    if (events) {
      const yearBucketList = events.reduce((acc, item) => {
        acc[moment(item.date).format("YYYY")] = [
          ...(acc[moment(item.date).format("YYYY")] || []),
          item,
        ];
        return acc;
      }, {});
      return yearBucketList;
    }
  };

  const listElementsByYear = () => {
    const eventsInYearBuckets = eventsIntoYearBuckets(eventsTodayOrAfter);
    const litsElementsByYear = [];
    for (const [year, eventList] of Object.entries(eventsInYearBuckets)) {
      litsElementsByYear.push(
        <li key={year}>
          {/* {today.format("YYYY") !== year ? (
            <div className={styles.year}>{year}</div>
          ) : null} */}
          <ul className={styles.calendarList}>
            {showHistory ? eventsIntoMonthBuckets(eventsBeforeToday) : null}
            {eventsIntoMonthBuckets(eventList)}
          </ul>
        </li>
      );
    }
    return litsElementsByYear;
  };

  const eventsIntoMonthBuckets = (events) => {
    console.log("asdasd");

    const monthList = moment.months();
    let eventsByMonth = [];
    const eventsListIsEmpty = events.length == 0;
    if (eventsListIsEmpty) return nothingToDoElement;
    return monthList.map((month) => {
      events.map((event) => {
        const monthOfEvent = moment(event.date).format("MMMM");
        if (month === monthOfEvent) eventsByMonth.push(event);
      });
      return (
        <li key={month}>
          <CalendarMonthComponent
            monthName={month.toString()}
            events={eventsByMonth}
          ></CalendarMonthComponent>
        </li>
      );
    });
  };

  // const calendarElement = () => {
  //   // if (isLoading) return <h1>Loading</h1>;
  //   return (
  //     <div>
  //       <button onClick={toggleHistory}>
  //         {showHistory ? "Hide history" : "Show history"}
  //       </button>
  //       <div>
  //         <li>asdasd</li>
  //         {/* <ul>{listElementsByYear()}</ul> */}
  //       </div>
  //     </div>
  //   );
  // };

  // const coverElement = () => {
  //   // if (!authCtx.isLoggedIn) return null;
  //   return (
  //     <div className="cover">
  //       <button onClick={handleAddEventPanelToggle}>
  //         <span
  //           className={`add-event-button-text  ${
  //             isPanelOpen ? "clicked add-event-button-text" : ""
  //           }`}
  //         >
  //           +
  //         </span>
  //       </button>
  //       {/* <AddEventPanel isOpen={isPanelOpen}></AddEventPanel> */}
  //     </div>
  //   );
  // };

  const nothingToDoElement = (
    <div>
      <span>NOTHING</span>
      <span> TO DO </span>
    </div>
  );

  return (
    <div className={styles.calendarWrapper}>
      {<ul className={styles.calendarList}>{listElementsByYear()}</ul>}
    </div>
  );
};
export default CalendarComponent;
