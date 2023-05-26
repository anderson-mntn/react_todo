import React from "react"

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
            <li key={item.id} className={item.done? "done" : ""}>
                {item.text}
                <button onClick={()=>{props.onDone(item)}}><DoneIcon done={item.done}></DoneIcon></button>
                <button onClick={()=>{props.onItemDeleted(item)}}>X</button>
            </li>)} {/*Cada item retorna uma linha */}

        </ul>
    )
}

export default List;