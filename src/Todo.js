import React, { useState } from "react";
import './Todo.css'
import List from './List'

function Todo(){

    const [items, setItems] = useState([]);

    function onAddItem(item){
        setItems([...items, item])
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List items={items}></List>
        </div>
    )
}

function TodoForm(props){
    const [text, setText] = useState("");

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();

        if(!text){
            window.alert("Type something to add on the list.")
        } else {
            // setItems([...items, text]);
            props.onAddItem(text);
            setText("");
        }

        /*
            Um modo de printar um array dos itens ou conseguir manusear, sem o [] printa apenas um.

            [items].forEach(element => {
                console.log(element)
            });
        */
    
    }

    return(
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            { <button onClick={addItem}>Add</button>}
            {/* Este onClick no form tenta enviar o form/action.
            Vamos evitar esse comportamento com preventDefault() dentro da função addItem */}
        </form> 
    )
}


export default Todo;