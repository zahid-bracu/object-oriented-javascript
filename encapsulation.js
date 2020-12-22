class Tester{
    #speed=100;
    location="Shundarbon";
    constructor(name){
        this.name=name;
    }

    run(){
        console.log(`The ${this.name} is running at ${this.#speed}mph at ${this.location}`);
    }
}

const object=new Tester("Cheetah");
object.run();