import React from "react";
import "./pages.css";
import Post from "../components/Post";

function Posts() {
    return (
        <div className="container">
            <div className="posts-wrapper">
                <h2 className="uk-text-center">Posts</h2>
                <div className="uk-flex uk-flex-column uk-flex-middle">
                    <Post />
                </div>
            </div>
        </div>
    )
};

export default Posts;