import React from "react";
import "./post.css";

export default function Post() {
    return (
        <div className="postCard uk-card uk-card-default">
            <div className="uk-card-body">
                <p className="date">10/8/2020 9:58PM</p>
                <h3 className="uk-card-title uk-text-truncate">LeetCode Challenge</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a className="repoLink" href="/">READ MORE</a>
            </div>
        </div>
    )
}
