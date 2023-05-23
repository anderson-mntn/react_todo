import React, { useState } from "react";
import './Todo.css'

function Todo(){

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();

        if(!text){
            window.alert("Type something to add on the list.")
        } else {
            setItems([...items, text]);
            setText("");
        }

        /*
            Um modo de printar um array dos itens ou conseguir manusear, sem o [] printa apenas um.

            [items].forEach(element => {
                console.log(element)
            });
        */
    
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <form>
                <input onChange={handleChange} type="text" value={text}></input>
                { <button onClick={addItem}>Add</button>}
                {/* Este onClick no form tenta enviar o form/action.
                Vamos evitar esse comportamento com preventDefault() dentro da função addItem */}
            </form> 
            <ul>
                 {items.map((item, index) =><li key={index}>{item}</li>)} {/*Cada item retorna uma linha */}
            </ul>
        </div>
    )
}

export default Todo;