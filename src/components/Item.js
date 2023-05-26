
class Item{
    static lastId = 0; // variavel de classe
    constructor(text){
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }
}

export default Item;