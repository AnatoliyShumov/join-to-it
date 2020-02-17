import React from "react";
import {Link} from "react-router-dom";


const Contact = (props) => {
    return (
        <li>
            <Link to={`user:${props.id}`}><span>{props.name}</span></Link>
        </li>
    );
};

export default Contact;