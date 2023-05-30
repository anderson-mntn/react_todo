import React from "react";
import Card from "./Card";
import { useState } from "react";

function Modal(props){

    const [show, setShow] = useState(true)

    function hideModal(e){
        let target = e.target;
        if(target.id === 'modal'){
            setShow(false)
        }
    }

    return(
        <div id="modal" 
        onClick={hideModal} 
        className={show ? "modal" : "modal hide"}
        >
            <Card className="cardModal">
                {props.children}
            </Card>

        </div>
    )
}

export default Modal;