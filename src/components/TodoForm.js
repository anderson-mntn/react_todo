import React, { useState } from "react";
import { addItem } from "../actions/listActions";
import { useDispatch } from "react-redux";

function TodoForm(props){
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItemLocal(event){
        event.preventDefault();

        if(!text){
            window.alert("Type something to add in the list.")
        } else {
            // setItems([...items, text]);
            dispatch(addItem(text))
            setText("");
            props.onHideModal();
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
            { <button onClick={addItemLocal} className="BtnAddForm">Add</button>}
            {/* Este onClick no form tenta enviar o form/action.
            Vamos evitar esse comportamento com preventDefault() dentro da função addItem */}
        </form> 
    )
}

export default TodoForm;