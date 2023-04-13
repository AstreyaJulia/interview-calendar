import './App.css';
import AppHeader from "./components/AppHeader";
import WeekCalendarHeader from "./components/WeekCalendarHeader";
import {useState} from "react";
import TimelineGird from "./components/TimelineGird";
import AppFooter from "./components/AppFooter";

function App() {

    const [selectedEvent, setSelectedEvent] = useState(null);

    const EventsData = [
        '2019-03-25 12:00:00',
        '2019-03-26 12:00:00',
        '2019-03-27 12:00:00',
        '2019-03-28 12:00:00',
        '2019-03-28 15:00:00',
        '2019-03-29 12:00:00',
        '2019-03-29 19:00:00',
        '2019-03-30 12:00:00',
        '2019-03-30 08:00:00',
        '2019-03-31 12:00:00'
    ]

    const weekDays = [
        {date: '2019-03-25', current: false},
        {date: '2019-03-26', current: false},
        {date: '2019-03-27', current: false},
        {date: '2019-03-28', current: false},
        {date: '2019-03-29', current: true},
        {date: '2019-03-30',  current: false},
        {date: '2019-03-31', current: false}
    ]

    return (
        <div className="App">
            <AppHeader/>
            <WeekCalendarHeader data={weekDays}/>
            <TimelineGird events={EventsData} week={weekDays} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />
            <AppFooter selectedEvent={selectedEvent}/>
        </div>
    );
}

export default App;
