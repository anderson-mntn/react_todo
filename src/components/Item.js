
class Item{
    // static lastId = 0; // variavel de classe
    constructor(text){
        this.id = Math.random().toFixed(2);
        this.text = text;
        this.done = false;
    }
}

export default Item;