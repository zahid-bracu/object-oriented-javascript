class PenDrive{
    constructor(capacity,color,price){
        this.capacity=capacity;
        this.color=color;
        this.price=price;
    }

    getInfo(){
        return "Pendrive size : "+this.capacity+" Color is :"+this.color+" Price :"+this.price;
    }

    getMessage(){
        console.log("Let's go and buy a Computer");
    }

    getConfirmation(flag){
        if(flag){
            console.log("We have already a computer")
        }else{
            console.log("No I don't have ... let's go")
        }
    }
}


const ignite=new PenDrive(360,"blue",120);
var information=ignite.getInfo();
console.log(information);
ignite.getMessage();
console.log(ignite.getConfirmation(true));