import React from "react";
import "./projectContent.css";
import Brainstorm from "../Brainstorm";

export default function ProjectContent({ heading, description, name, notes, words, combinations, images }) {
    return (
        <div className="proj-content uk-flex uk-flex-column uk-width-100 uk-flex-middle">
            <h4 className="uk-text-center">{heading}</h4>
            <p className="uk-text-center">{description}</p>
            {
                name &&
                    <Brainstorm
                        key={name}
                        name={name}
                        notes={notes}
                        words={words}
                        combinations={combinations}
                    />
            }
            {
                images && (
                    images.map(image => (
                        <React.Fragment key={image.url}>
                            { image.title && <span className="image-title uk-text-center">{image.title}</span> }
                            <img src={image.url} alt={image.alt} />
                        </React.Fragment>
                    ))
                )
            }
        </div>
    )
}
