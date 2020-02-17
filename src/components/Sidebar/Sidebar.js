import React from "react";
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions/actions";
import connect from "react-redux/es/connect/connect";

const Sidebar = ({openState, actions}) => {
    return (
        <StyledMenu open={openState} >
            <NavLink onClick={()=>actions.ShowHideSidebar()} exact activeClassName="is-active" to={`/`}><span role="img" aria-label="Home">🏠‍️</span>Home</NavLink>
            <NavLink onClick={()=>actions.ShowHideSidebar()} exact activeClassName="is-active" to={`/user`}><span role="img" aria-label="User">👨‍🎓‍️</span>User</NavLink>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.sidebar};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  left: 0;
  transition: transform 0.3s ease-in-out, background 0.25s linear;
  box-shadow: 0 3px 6px -6px black; 
  z-index: 99999;
   .is-active{
      opacity: 0.5;
      pointer-events: none;
    }
  @media (max-width: 768px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.4s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Sidebar);