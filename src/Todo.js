import React, { useState, useEffect } from "react";
import './Todo.css'
import List from './components/List'
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
import Modal from "./components/Modal";

const SAVED_ITEMS = "savedItems"


function Todo(){

    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    // Pegando itens salvos no LS (se existir) e monta a lista
    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems.length <= 0){
            console.log("empty list")
        } else {
            console.log("s", savedItems)
            setItems(savedItems)
        }
    }, []);
    
    // Salvando cada item no LS quando o estado "listener" items for alterado
    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items]);


    function onAddItem(text){
        let listItem = new Item(text)
        setItems([...items, listItem])

        onHideModal();
    }

    function onItemDeleted(item){
        let filteredItems = items.filter(it=> it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item){
        let updatedItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done; // recebe o contrario dele
            }
            return it;
        })
        setItems(updatedItems)
    }

    function onHideModal(){
        setShowModal(false)
    }

    return (
        <div className="container">
            <header><h1>Todo</h1><button onClick={()=>{setShowModal(true)}} className="addButton">+</button></header>
            {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}

export default Todo;