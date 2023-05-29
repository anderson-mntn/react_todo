import React from "react"
import Card from "./Card"
import List from "./List"

function DoneIcon(props){
    if(props.done){
        console.log('done')
        return (<img alt="done" src="./assets/done3.png"></img>)
    } else {
        console.log('undone')
        return (<img alt="undone" src="./assets/undone2.png"></img>)
    }
}


function ListItem(props){
    return(
        <li>
        <Card>
        <p className={props.item.done? "done item" : "item"}>{props.item.text}</p>
        <div className="ul-btn">
        <button onClick={()=>{props.onDone(props.item)}}><DoneIcon done={props.item.done}></DoneIcon></button>
        <button onClick={()=>{props.onItemDeleted(props.item)}}><img alt="bin" src="./assets/bin2.png"></img></button>
        </div>
        </Card>
        </li>
    ) 
    
}

export default ListItem;