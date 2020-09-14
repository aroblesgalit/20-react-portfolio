import React from "react";

export default function Brainstorm({ name, about }) {
    return (
        <div>
            <div>
                <h5>{name}</h5>
                <ul>
                    <li>{about}</li>
                </ul>
            </div>
        </div>
    )
}
