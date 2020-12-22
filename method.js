class PenDrive{
    // constuctor
    constructor(capacity,color,price){
        this.capacity=capacity;
        this.color=color;
        this.price=price;
    }

    // method with return statement
    getInfo(){
        return "Pendrive size : "+this.capacity+" Color is :"+this.color+" Price :"+this.price;
    }

    // normal method
    getMessage(){
        console.log("Let's go and buy a Computer");
    }

    // conditional method
    getConfirmation(flag){
        if(flag){
            console.log("We have already a computer")
        }else{
            console.log("No I don't have ... let's go")
        }
    }
}

// constructor setting up
const ignite=new PenDrive(360,"blue",120);

// method is  calling
var information=ignite.getInfo();
console.log(information)

// another method is calling;
ignite.getMessage();

// a method is calling with inside if-else
console.log(ignite.getConfirmation(true));