export class Cat {
    constructor (name, color, breed){
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    getData(){
        return `The name: ${this.name} The color: ${this.color} The breed: ${this.breed}`
    }

    changeName(newName){
        this.name = newName;
    }

}