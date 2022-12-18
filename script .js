class Animal{
    constructor(){
      this.alive = true;
    }
    breath(){
        console.log("This Animal breathes");
    }
}

class WithoutBackbone extends Animal {
    constructor(){
        this.alive = true;
    }
    noBackbone() {
        console.log("It includes arthropoda");
    }
}

class Arthropoda extends WithoutBackbone {
    constructor(){
        this.alive = true;
    }
    noBackbone() {
        console.log(`${this.name} have backbone`);
    }
}

class WithBackbone extends Animal {
    constructor() {
        this.alive = true;
    }
    withBackbone() {
        console.log("It includes Fish, Amphibian, Reptiles, Aves, Mammals");
    }
}

class Fish extends WithBackbone {
    constructor() {
        this.alive = true;
    }
    withBackbone() {
        console.log(`${this.name} have backbone`);
    }
}
class ColdBlooded extends WithoutBackbone, WithBackbone {
    constructor() {
        this.alive = true;
    }
    withoutBackbone(){
        alert("it includes Arthropoda");
    }
    withBackbone(){
        alert("It includes Fish, Amphibian and Reptiles");
    }
}

class WarmBlooded extends WithBackbone {
    constructor() {
        this.alive = true;
    }
    withBackbone() {
        alert("it includes Aves, Mammals");
    }
}

