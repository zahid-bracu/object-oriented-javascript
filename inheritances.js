class smartDevice{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    charging(){
        console.log("I am charging");
    }
}


class Phone extends smartDevice{
    constructor(name,price,camera){
        super(name,price);
        this.camera=camera;
    }
     
}


class Watch extends smartDevice{
    constructor(name,price,distance){
        super(name,price);
        this.distance=distance;
    }
     
}


class Tablet extends smartDevice{
    constructor(name,price,wifi){
        super(name,price);
        this.wifi=wifi;
    }
     
}

const newPhone=new Phone('Oppo',12000,'16megapixel');
console.log(newPhone);
newPhone.charging();


const newWatch=new Watch('Casio',15000,'16km');
console.log(newWatch);
newWatch.charging();


const newTab=new Watch('Samsung',22000,'Available');
console.log(newTab);
newTab.charging();