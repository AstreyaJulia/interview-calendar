import React from 'react';
import styled from "styled-components";

const AppFooter = ({selectedEvent}) => {

    const AppFooterContainer = styled.header`
      padding: 30px 48px;
      border-top: 2px solid #ebebeb;
      background-color: #f6f6f6;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `

    const AppFooterTodayButton = styled.button`
      border: none;
      background: none;
      color: #ff3131;
      font-size: 28px;
      padding: 0;
    `
    const AppFooterDeleteButton = styled.button`
      border: none;
      background: none;
      color: #ff3131;
      font-size: 28px;
      padding: 0;
    `

    return <AppFooterContainer>
        <AppFooterTodayButton>Today</AppFooterTodayButton>
        {selectedEvent ? <AppFooterDeleteButton>Delete</AppFooterDeleteButton> : ""}
    </AppFooterContainer>;
};


export default AppFooter;
