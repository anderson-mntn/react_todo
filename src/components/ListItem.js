import React from "react"
import Card from "./Card"
import { useDispatch } from "react-redux"
import { changeDone, deleteItem } from '../actions/listActions'

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

    const dispatch = useDispatch()

    return(
        <li>
        <Card>
            <p className={props.item.done? "done item" : "item"}>{props.item.text}</p>
            <div className="ul-btn">
                <button onClick={() => { dispatch(changeDone(props.item.id)) }} ><DoneIcon done={props.item.done}></DoneIcon></button>
                <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><img alt="bin" src="./assets/bin2.png"></img></button>
            </div>
        </Card>
        </li>
    ) 
    
}

export default ListItem;