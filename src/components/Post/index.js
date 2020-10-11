import React from "react";
import "./post.css";
import ButtonSecondary from "../ButtonSecondary";

export default function Post() {
    return (
        <div className="post-card uk-card uk-card-default">
            <div className="uk-card-body">
                <p className="date">10/8/2020 9:58PM</p>
                <h3 className="uk-card-title uk-text-truncate">LeetCode Challenge</h3>
                <p className="post-copy uk-text-break">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ButtonSecondary text="read more" path="/" />
            </div>
        </div>
    )
}
