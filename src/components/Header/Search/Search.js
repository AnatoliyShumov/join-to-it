import React, { useState } from "react";
import Contact from "./Contact";
import styled from "styled-components";

const List = ({ data }) => {
    const [displayedContacts, setDisplayedContacts] = useState([]);

    const searchHandler = event => {
        event.preventDefault();
        let searcjQery = event.target.value.toLowerCase(),
            displayedContacts = data.filter(el => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
            });
        if (!searcjQery) {
            setDisplayedContacts([]);
        } else {
            setDisplayedContacts(displayedContacts);
        }
    };
    return (
        <Holder display={displayedContacts.length === 0 ? 'none':'flex'}>
            <input
                type="text"
                defaultValue={""}
                className="search"
                onChange={searchHandler}
            />
            <ul>
                {displayedContacts.map((el) => {
                    return (
                        <Contact
                            key={el.id}
                            name={el.name}
                            id={el.id}
                        />
                    );
                })}
            </ul>
        </Holder>
    );
};

const Holder = styled.div`
  width: inherit;
  text-align: end;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    margin-top: 30px;
    max-height: 200px;
    overflow-y: auto;
    padding: 1rem;
    list-style: none;
    background: ${({ theme }) => theme.pageBackground};
    border: ${({ theme }) => theme.border};
    display: ${props => props.display};
    li {
      padding: 5px;
    }
  }
`;


export default List;


