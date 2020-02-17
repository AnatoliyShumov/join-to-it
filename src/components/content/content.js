import React from "react";
import styled from 'styled-components';

const Content = () => {
    return (
        <HeaderWrapper>
            <InnerWrapper>
                <MenuItem>
                    <a href="#">My Profile</a>
                    <a href="#">My Story</a>
                    <a href="#">My Shop</a>
                </MenuItem>
            </InnerWrapper>
        </HeaderWrapper>
    );
};


const HeaderWrapper = styled.div`
  width: 497px;
`;

const InnerWrapper = styled.div`
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  a{
    font-size: 18px;
    color: #2087c2;
    font-weight: 600;
    padding: 5px;
    &:hover{
      color:#59a3d1;
    }
  }
`;


export default Content ;