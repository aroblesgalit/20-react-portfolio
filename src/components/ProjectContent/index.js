import React from "react";
import "./projectContent.css";
import Brainstorm from "../Brainstorm";

export default function ProjectContent({ type, heading, description, name, notes, words, combinations, images }) {
    return (
        <div className="proj-content uk-flex uk-flex-column uk-width-100 uk-flex-middle">
            <h4>{heading}</h4>
            <p>{description}</p>
            {
                type === "brainstorm" ?
                    <Brainstorm
                        key={name}
                        name={name}
                        notes={notes}
                        words={words}
                        combinations={combinations}
                    /> : (
                            images.map(image => (
                                <img key={image.url} src={image.url} alt={images.alt} />
                            ))
                    )
            }
        </div>
    )
}
