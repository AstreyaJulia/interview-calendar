import React from 'react';
import styled from "styled-components";
import {format, parse} from 'date-fns';

const DayItem = ({day}) => {

    const Day = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    `
    const DayOfWeek = styled.p`
      color: #000000;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    `

    const DayNumber = styled.p(
        ({day}) => `
      color: ${!day.current ? "#000000" : "#ffffff"};
      font-size: 20px;
      line-height: 1;
      background-color: ${!day.current ? "transparent" : "#ff3131"};
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    `)


    return <Day>
        <DayOfWeek>{format(parse(day?.date, 'yyyy-MM-dd', new Date()), 'EEEEE') || ''}</DayOfWeek>
        <DayNumber day={day}>{format(parse(day?.date, 'yyyy-MM-dd', new Date()), 'dd') || ''}</DayNumber>
    </Day>;
};

export default DayItem;
