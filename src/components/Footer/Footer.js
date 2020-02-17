import React from "react";
import styled from 'styled-components';

const Footer = () => {
    return (
        <HeaderWrapper>
            <InnerWrapper>
                <p>footer</p>
            </InnerWrapper>

        </HeaderWrapper>
    );
};


const HeaderWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 86px;
  background: ${({ theme }) => theme.topBarBackground};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;
  p{
    font-size: 14px;
    color:  ${({ theme }) => theme.pageText};
    text-align: center
  }
`;


export default Footer ;