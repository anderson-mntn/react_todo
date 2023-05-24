import React from "react"

function List(props){
    return(
        <ul>
            {props.items.map((item, index) =><li key={index}>{item}</li>)} {/*Cada item retorna uma linha */}
        </ul>
    )
}

export default List;