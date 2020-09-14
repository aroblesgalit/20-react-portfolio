import React from "react";
import "./gdProjSection.css";

export default function GDProjSection({ title, type, image, link }) {
    return (
        <section className="uk-flex uk-position-relative">
            <img src={image} alt={title} />
            <div className="uk-light uk-position-absolute">
                <p className="uk-text-small uk-margin-remove">
                    {type.join(", ")}
                </p>
                <h3 className="uk-margin-remove">{title}</h3>
                <button 
                    type="button" 
                    className="uk-button uk-button-default uk-margin"
                    onClick={() => window.location.href=link}
                >
                    See project
                </button>
            </div>
        </section>
    )
}
