import React from 'react';
import styled from 'styled-components';



const Home = () => {
    return (
        <HeaderWrapper>
            <InnerWrapper>
               <p>home</p>
            </InnerWrapper>

        </HeaderWrapper>
    );
};


const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const InnerWrapper = styled.div`
`;


export default Home ;