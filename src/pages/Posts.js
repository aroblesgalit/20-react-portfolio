import React, { useEffect, useState } from "react";
import "./pages.css";
import Post from "../components/Post";
import API from "../utils/API";

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        API.getPosts()
            .then(res => setPosts(res))
            .catch(err => console.log(err));
    })

    return (
        <div className="container">
            <div className="posts-wrapper">
                <h2 className="uk-text-center">Posts</h2>
                <div className="uk-flex uk-flex-column uk-flex-middle">
                    {
                        posts.map(post => (
                            <Post
                                key={post.id}
                                id={post.id}
                                date={post.date}
                                title={post.title}
                                copy={post.copy}
                                image={post.image}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Posts;