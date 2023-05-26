import React from "react"
import Card from "./Card"

function List(props){

    function DoneIcon(props){
        if(props.done){
            console.log('done')
            return (<img alt="done" src="./assets/done.png"></img>)
        } else {
            console.log('undone')
            return (<img alt="undone" src="./assets/undone.png"></img>)
        }
    }

    return(
        <ul>
            {props.items.map((item, index) =>
            <li key={item.id} >
                <Card>
                <p className={item.done? "done item" : "item"}>{item.text}</p>
                <div className="ul-btn">
                <button onClick={()=>{props.onDone(item)}}><DoneIcon done={item.done}></DoneIcon></button>
                <button onClick={()=>{props.onItemDeleted(item)}}><img alt="bin" src="./assets/bin.png"></img></button>
                </div>
                </Card>
            </li>)} {/*Cada item retorna uma linha */}

        </ul>
    )
}

export default List;