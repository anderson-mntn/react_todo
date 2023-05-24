import React from "react"

function List(props){

    return(
        <ul>
            {props.items.map((item, index) =>
            <li key={item.id}>
                {item.text}
                <button onClick={()=>{props.onItemDeleted(item)}}>X</button>
            </li>)} {/*Cada item retorna uma linha */}

        </ul>
    )
}

export default List;