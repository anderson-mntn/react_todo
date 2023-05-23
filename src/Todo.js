import React, { useState } from "react";
import './Todo.css'

function Todo(){

    const [text, setText] = useState("")

    function handleChange(event){
        let t = event.target.value;
        setText(t)
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <form>
                <input onChange={handleChange} type="text"></input>
                <button>Add</button>
            </form>
            <ul>
                <li>{text}</li>
            </ul>
        </div>
    )
}

export default Todo;