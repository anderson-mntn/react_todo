import React from "react";
import Card from "./Card";

function Modal(props){
    return(
        <div className="modal">
            <Card className="cardModal">
                {props.children}
            </Card>

        </div>
    )
}

export default Modal;