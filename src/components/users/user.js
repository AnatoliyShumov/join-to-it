import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions/actions";
import connect from "react-redux/es/connect/connect"
import Loader from 'react-loader-spinner'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const User = ({ actions, userData, match, loading }) => {
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [street, setStreet] = useState([]);
    const [city, setCity] = useState([]);
    const [geo, setGeo] = useState([0,0]);
    const trimMatch = match.params.id.slice(1);

    useEffect(() => {
        actions.getDataUser(trimMatch).then(data=>{
            const {id, name, email, address:{street, city, geo:{lat,lng}}} = data.data;
            setId(id); setName(name); setEmail(email); setStreet(street);
            setCity(city); setGeo([+lat,+lng])
        });
    }, [trimMatch]);

    return (
        <OuterWrapper loading={loading ? '24% 0' : '5%'}>
            <InnerWrapper>
                {loading ? <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={200}
                    width={200}
                    display='flex'
                    flex-direction='center'
                    align-items='center'
                /> : <Wrap>
                    <Content>
                        <div>
                            <p>Id: {id}</p>
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                        </div>
                        <div>
                            <p>City: {city}</p>
                            <p>Street: {street}</p>
                        </div>
                    </Content>
                    <Map center={geo} zoom={8}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={geo}>
                            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                        </Marker>
                    </Map>
                </Wrap>}
            </InnerWrapper>
        </OuterWrapper>
    );
};

function mapStateToProps(state, props) {
    return {
        userData: state.user.data,
        loading: state.user.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const OuterWrapper = styled.div`
   margin: ${props =>  props.loading};
   text-align: center;
`;

const InnerWrapper = styled.div`

`;

const Wrap = styled.div`

`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin:20px auto;
    width: 60%; 
    border: ${({ theme }) => theme.border};
    @media (max-width: 768px) {
      width: 100%; 
    }
    div{
      :nth-child(1){
      
      }
      :nth-child(2){
        display: flex;
        p{
          &:first-child{
            padding-right: ${({ theme }) => theme.spacingBetween};
          }
        }
      }
    }
`;



export default connect(mapStateToProps, mapDispatchToProps)(User);

