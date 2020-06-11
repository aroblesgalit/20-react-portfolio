import React from "react";
import "./style.css";

function CreditCard(props) {
    return (
        <a className="credit-link" href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
    );
}

export default CreditCard;