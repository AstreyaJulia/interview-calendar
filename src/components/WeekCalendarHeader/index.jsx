import React from 'react';
import styled from "styled-components";
import DayItem from "../DayItem";

const WeekCalendarHeader = ({data}) => {

    const WeekCalendarHeaderContainer = styled.div`
      background-color: #f6f6f6;
      padding: 18px 0 20px 0;
      border-bottom: 2px solid #ebebeb;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `

    const WeekDaysContainer = styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    `

    return <WeekCalendarHeaderContainer>
        <WeekDaysContainer>
            <div/>
            {/* Пустая ячейка */}
            {data.map((day, key) => <DayItem key={key} day={day}/>)}
        </WeekDaysContainer>

    </WeekCalendarHeaderContainer>;
};

export default WeekCalendarHeader;
