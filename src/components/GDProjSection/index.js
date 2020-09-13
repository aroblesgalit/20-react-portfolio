import React from "react";
import "./gdProjSection.css";
import indigoBallBg from "../../assets/images/gdproj_indigoBall_bg.jpg";

export default function GDProjSection() {
    return (
        <section className="uk-inline">
            <img src={indigoBallBg} alt="Indigo Ball" />
            <div className="uk-overlay uk-light uk-position-top">
                <p className="uk-text-small uk-margin-remove">Logo Design, Print</p>
                <h3 className="uk-margin-remove">Indigo Ball</h3>
                <button type="button" className="uk-button uk-button-default uk-margin">See project</button>
            </div>
        </section>
    )
}
