import React, { useState } from "react";
import "./post.css";

export default function Post({ date, title, copy, image }) {

    const [readMore, setReadMore] = useState(false);
    const [height, setHeight] = useState("200px");

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
        <div className="post-card uk-card uk-card-default">
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
            </div>
        </div>
    )
}
