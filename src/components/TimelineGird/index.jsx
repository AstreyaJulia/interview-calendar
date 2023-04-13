import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const TimelineGird = ({events, week, selectedEvent, setSelectedEvent}) => {

    const timeGirdHours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

    const TimelineGirdContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    `

    const TimeLineColumn = styled.div`
      display: flex;
      flex-direction: column;
    `

    const TimeLineHour = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      height: 62px;
    `

    const TimeLineEvent = styled.div(
        ({timekey, key, keyslenght}) => `
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      height: 62px;
      border-bottom: ${timekey !== keyslenght - 1 ? "2px solid #e6e6e6" : "2px solid transparent"};
      border-right: ${key !== 0 ? "2px solid #e6e6e6" : "2px solid transparent"};
      padding: 2px;
    `)


    const TimeElement = styled.span`
      position: absolute;
      top: -8px;
      right: 9px;
      font-size: 16px;
      font-weight: 600;
      color: #c0c0c0;
    `

    const EventElement = styled.button(
        ({selectedEvent}) => `
      width: 100%;
      height: 100%;
      background-color: ${selectedEvent ? "#b3b7ff" : "#ebecff"};
      border: none;
    `)

    return <TimelineGirdContainer>
        {/* Колонка с временем */}
        <TimeLineColumn>{timeGirdHours.map((time) => <TimeLineHour key={time}>
            <TimeElement>{time !== '08:00' ? time : ''}</TimeElement>
        </TimeLineHour>)}</TimeLineColumn>

        {week.map((date, key) =>
            /* Колонка */
            <TimeLineColumn key={key}>

                {timeGirdHours.map((time, timekey) => <TimeLineHour key={time}>
                    <TimeLineEvent key={key} timekey={timekey} keyslenght={timeGirdHours.length}>
                        { /* Проверка массива событий */}
                        {events.map((dayEvent) => dayEvent === `${date.date} ${time}:00` ?
                            <EventElement selectedEvent={selectedEvent === `${date.date} ${time}:00`} type='button'
                                          onClick={() => {
                                              setSelectedEvent(`${date.date} ${time}:00`)
                                              console.log(selectedEvent)
                                          }}/> : '')}
                    </TimeLineEvent>
                </TimeLineHour>)}

            </TimeLineColumn>)}

    </TimelineGirdContainer>;
};

TimelineGird.propTypes = {
    /** React Prop Types */
    prop: PropTypes.string,
};

export default TimelineGird;
