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
    `

    const WeekDaysContainer = styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    `

    const MonthSelectContainer = styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 7fr;
    `

    const MonthSelect = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
    `
    const MonthSelectButton = styled.button`
      border: none;
      background: none;
      color: #ff3131;
      font-size: 28px;
      padding: 0;
    `

    const MonthSelectTitle = styled.h2`
      color: #000000;
      font-weight: 600;
      padding: 0;
      margin: 0;
      font-size: 16px;
      line-height: 1;
    `

    return <WeekCalendarHeaderContainer>
        <WeekDaysContainer>
            <div/>
            {/* Пустая ячейка */}
            {data.map((day, key) => <DayItem key={key} day={day}/>)}
        </WeekDaysContainer>

        <MonthSelectContainer>
            <div/>
            {/* Пустая ячейка */}
            <MonthSelect>
                <MonthSelectButton>{'<'}</MonthSelectButton>
                <MonthSelectTitle>March 2019</MonthSelectTitle>
                <MonthSelectButton>{'>'}</MonthSelectButton>
            </MonthSelect>
        </MonthSelectContainer>

    </WeekCalendarHeaderContainer>;
};

export default WeekCalendarHeader;
