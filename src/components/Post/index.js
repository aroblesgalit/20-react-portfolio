import React, { useState } from "react";
import "./post.css";

export default function Post({date, title, copy}) {

    const [readMore, setReadMore] = useState(false);

    function handleView() {
        if (readMore) {
            setReadMore(false);
        } else {
            setReadMore(true);
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
                <span onClick={handleView}>{readMore ? "...see less." : "See more..."}</span>
            </div>
        </div>
    )
}
