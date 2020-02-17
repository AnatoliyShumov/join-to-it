import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/actions";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom'
import Loader from "react-loader-spinner";

const Users = ({ actions, usersData, loading }) => {
    const getData = actions.getData;
    
    useEffect(() => {
        getData(true);
    }, [getData]);
    
    const renderData = usersData.map( (el, key) => {
        return (
            <div key={key}>
                <Link to={`user/${el.id}`}><p>{el.username}</p></Link>
                <p>{el.email}</p>
            </div>
        );
    })

    return (
        <OuterWrapper>
            <InnerWrapper>
                {loading ? <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={200}
                    width={200}
                    //3 secs

                /> : renderData}
            </InnerWrapper>
        </OuterWrapper>
    );
};



function mapStateToProps(state, props) {

    return {
        usersData: state.dataUsers.data,
        loading: state.dataUsers.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  height: inherit;
  align-items: center;
  div{
    width: calc(100% / 3);
    text-align: center;
    padding: 10px; 
    @media (min-width: 769px) and (max-width: 1200px) {
       width: calc(100% / 2);
    }
     @media (max-width: 768px) {
       width: calc(100% / 1);
    }  
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Users);

