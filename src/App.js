import React, { useState, useEffect } from "react";
import './App.css'
import List from './components/List'
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
import Modal from "./components/Modal";

import { Provider } from "react-redux";
import { createStore } from "redux";
import listReducer from "./reducers/listReducer";

const store = createStore(listReducer)

const SAVED_ITEMS = "savedItems"


function Todo(){

    const [showModal, setShowModal] = useState(false);

    // Pegando itens salvos no LS (se existir) e monta a lista
    // useEffect(()=>{
    //     let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    //     if(savedItems){
    //         if(savedItems.length <= 0){
    //             console.log("empty list")
    //         } else {
    //             console.log("s", savedItems)
    //             setItems(savedItems)
    //         }
    //     }
    // }, []);
    
    // // Salvando cada item no LS quando o estado "listener" items for alterado
    // useEffect(()=>{
    //     localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    // }, [items]);


    // function onAddItem(text){
    //     let listItem = new Item(text)
    //     setItems([...items, listItem])

    //     onHideModal();
    // }

    // function onItemDeleted(item){
    //     let filteredItems = items.filter(it=> it.id !== item.id)
    //     setItems(filteredItems)
    // }

    // function onDone(item){
    //     let updatedItems = items.map(it=>{
    //         if(it.id === item.id){
    //             it.done = !it.done; // recebe o contrario dele
    //         }
    //         return it;
    //     })
    //     setItems(updatedItems)
    // }

    function onHideModal(){
        setShowModal(false)
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header><h1>Todo</h1><button id="btnAddTask" onClick={()=>{setShowModal(true)}} className="addButton">+</button></header>
                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal} ></TodoForm></Modal>
            </Provider>
        </div>
    )
}

export default Todo;