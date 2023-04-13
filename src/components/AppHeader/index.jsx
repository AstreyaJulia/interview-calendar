import React from 'react';
import styled from 'styled-components';

const AppHeader = () => {

    const AppHeaderContainer = styled.header`
      padding: 49px;
      border-bottom: 2px solid #ebebeb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #ffffff;
    `

    const AppHeaderTitle = styled.h1`
      color: #000000;
      font-weight: 400;
      padding: 0;
      margin: 0;
      font-size: 28px;
      line-height: 1;
    `
    const AppHeaderAddEventButton = styled.button`
      border: none;
      background: none;
      color: #ff3131;
      font-size: 28px;
      padding: 0;
    `

    return <AppHeaderContainer><AppHeaderTitle>Interview
        Calendar</AppHeaderTitle><AppHeaderAddEventButton onClick={() => prompt('Enter event time: YYYY-MM-DD HH:mm:ss')}>+</AppHeaderAddEventButton></AppHeaderContainer>;
};

export default AppHeader;
