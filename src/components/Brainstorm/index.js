import React from "react";
import "./brainstorm.css";

export default function Brainstorm({ name, about, words, combinations }) {
    return (
        <div className="brainstorm uk-flex uk-flex-column">
            <div className="description">
                <h5>{name}</h5>
                <ul>
                    <li>{about}</li>
                </ul>
            </div>
            <div className="uk-flex uk-flex-around uk-flex-wrap uk-width-100">
                {
                    words.map(item => (
                        <div className="word uk-text-center">
                            <h6>{item.word}</h6>
                            <ul>
                                {
                                    item.graphics.map(graphic => (
                                        <li>{graphic}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <div className="word possible-combos uk-text-center">
                    <h6>possible combinations</h6>
                    <ul>
                        {
                            combinations.map(items => (
                                <li>{items.join(" + ")}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
