import React from "react"
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

function List(props){

    const items = useSelector(state => state)

    return(
        <ul className="listUl">
            {items.map(item => <ListItem key={item.id} item={item}></ListItem>)}
        </ul>
    )
}

export default List;