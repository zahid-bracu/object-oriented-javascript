class PenDrive{
    // constructor
    constructor(capacity,color,price){
        this.capacity=capacity;
        this.color=color;
        this.price=price;
    }
}

// constructor is setting up
const ignite=new PenDrive(360,"blue",120);
console.log(ignite);