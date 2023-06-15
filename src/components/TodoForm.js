import React, { useState } from "react";

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
        <form className="modalForm">
            <p>Add a new task or item</p>
            <input onChange={handleChange} type="text" value={text}></input>
            { <button onClick={addItem} className="BtnAddForm">Add</button>}
            {/* Este onClick no form tenta enviar o form/action.
            Vamos evitar esse comportamento com preventDefault() dentro da função addItem */}
        </form> 
    )
}

export default TodoForm;