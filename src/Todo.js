import React from "react";
import './Todo.css'

function Todo(){

    function handleChange(event){
        let text = event.target.value;
        console.log(text)
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <form>
                <input onChange={handleChange} type="text"></input>
                <button>Add</button>
            </form>
            <ul>
                <li>Item 1</li>
            </ul>
        </div>
    )
}

export default Todo;