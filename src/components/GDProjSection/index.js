import React from "react";
import "./gdProjSection.css";
import { Link } from "react-router-dom";

export default function GDProjSection({ title, type, image, link }) {
    return (
        <section className="uk-flex uk-position-relative">
            <img src={image} alt={title} />
            <div className="uk-position-absolute">
                <p className="uk-light uk-text-small uk-margin-remove">
                    {type.join(", ")}
                </p>
                <h3 className="uk-light uk-margin-remove-top">{title}</h3>
                <Link to={link}>
                    <button className="ctaBtn uk-button uk-button-default uk-margin">
                        See project
                    </button>
                </Link>
            </div>
        </section>
    )
}
