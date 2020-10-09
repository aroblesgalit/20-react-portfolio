import React from "react";
import "./buttonSecondary.css";

export default function ButtonSecondary({ text, path }) {
    return (
        <a className="btn-secondary" href={path}>{text}</a>
    )
}
