import React from "react"
import ListItem from "./ListItem";

function List(props){
    return(
        <ul className="listUl">
            {props.items.map((item, index) => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>)}
        </ul>
    )
}

export default List;