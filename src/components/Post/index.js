import React, { useState } from "react";
import "./post.css";

export default function Post({ id, date, title, copy, image }) {

    const [readMore, setReadMore] = useState(false);
    const [height, setHeight] = useState("200px");

    const postUrl = `https://www.alvingalit.com/posts#${id}`;
    const href = `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${title}&summary=${copy.substr(0, 100)}&source=${postUrl}`

    function handleView() {
        if (readMore) {
            setReadMore(false);
            setHeight("200px");
        } else {
            setReadMore(true);
            setHeight("100%");
        }
    }

    return (
        <div className="post-card uk-card uk-card-default uk-position-relative" id={id.toString()}>
            <div className="uk-card-body">
                <p className="date">{date}</p>
                <h3 className="uk-card-title uk-text-truncate">{title}</h3>
                <p className={`post-copy ${readMore === false && "less"} uk-text-break`}>
                    {copy}
                </p>
                <div style={{maxHeight: height, overflow: "hidden"}}>
                    {image && <img src={image} alt={title} />}
                </div>
                <span onClick={handleView}>{readMore ? "...see less." : "See more..."}</span>
                <a href={href} target="_blank" rel="noopener noreferrer" className="share-btn uk-position-absolute">
                    <span uk-icon="icon: linkedin" className="uk-icon" />
                </a>
            </div>
        </div>
    )
}
