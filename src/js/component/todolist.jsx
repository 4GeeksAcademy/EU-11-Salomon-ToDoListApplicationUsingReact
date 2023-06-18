import React from "react";
import { useState } from "react";

//create your first component

const AnyComponent = () => {
    const [inputValue, setInputValue ] = useState("");
    return (
        <div className="container">
            <h1>My To Do List in React</h1>
            <ul>
                <li>
                    <input 
                        type="text"
                        onChange{(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        placeholder="text1"></input>
                </li>
                <li>
                    <input type="text" placeholder="text2"> </input>
                </li>
                <li>
                    <input type="text" placeholder="text3"> </input>
                </li>
                <li>
                    <input type="text" placeholder="text4"> </input>
                </li>
                <li>
                    <input type="text" placeholder="text5"> </input>
                </li>
            </ul>
        </div>
    );
};


export default AnyComponent;
