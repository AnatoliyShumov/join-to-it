import React from "react";
import styled from 'styled-components';
import Toggle from "../tools/toogle";
import OpenCloseBtn from "../buttons/openCloseBtn";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as actions from "../redux/actions/actions";
import List from './search/search'
import logo from '../../logo.svg'
import {Link} from "react-router-dom";


const Header = ({theme, toggleTheme, toggleSidebarState, actions, userData, match:{url}}) => {
     
    return (
        <HeaderWrapper>
            <InnerWrapper>
                <ContentWrap>
                    <div>
                        <OpenCloseBtn open={toggleSidebarState} setOpen={actions.ShowHideSidebar}/>
                    </div>
                    <Logo>
                        <Link to={`/`}><img src={logo} alt="logo"/></Link>
                    </Logo>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                </ContentWrap>
                {url === '/user' ? <List data={userData}/> :''}
            </InnerWrapper>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 110px;
  box-shadow: 0 3px 6px -6px black; 
  background: ${({ theme }) => theme.topBarBackground};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  width: 100%;
  height: inherit;
  align-items: center;
  margin-right: 5%;
  margin-left: 5%;
`;

const Logo = styled.div`
  width: 100px;
  height: auto;
`;
const ContentWrap = styled.div`
    display: flex;
    height: inherit;
    width: inherit;
    justify-content: space-between;
    align-items: center;
`;

function mapStateToProps(state, props) {
    return {
        userData: state.dataUsers.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);