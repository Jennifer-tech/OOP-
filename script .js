class Animal {
    classOfAnimal;
    alive;
    speed;
    
    constructor(classOfAnimal, speed) {
        this.classOfAnimal = classOfAnimal
        this.alive = true;
        this.speed = speed
    }

    breath() {
        console.log('This Animal of class ' + this.classOfAnimal + ' breaths and move at a speed of ' + this.speed)
    }
}
const animal = new Animal('Animal', 1)
animal.breath()
console.log('-------------')

class WithoutBackbone extends Animal {
    constructor(classOfAnimal, speed){
        super(classOfAnimal, speed)
    }
    noBackbone() {
        console.log('This Animal of class ' + this.classOfAnimal + ' has no back bone');
    }
}
const noBackbone = new WithoutBackbone('WithoutBackbone', 5)
noBackbone.breath()
noBackbone.noBackbone()
console.log('-------------')

class WithBackbone extends Animal {
    constructor(classOfAnimal, speed, bones) {
        super(classOfAnimal, speed)
        this.noOfBones = bones
    }
    backbone() {
        console.log('This Animal of class ' + this.classOfAnimal + ' has ' + this.noOfBones + ' back bones');
    }
}
const withBackbone = new WithBackbone('WithBackbone', 5, 45)
withBackbone.breath()
withBackbone.backbone()
console.log('-------------')

class Arthropoda extends WithoutBackbone {
    constructor(classOfAnimal, speed) {
        super(classOfAnimal, speed)
        this.coldblooded = true
    }

    isColdblooded() {
        this.coldblooded && console.log('Arthropoda is a cold blooded animal without backbones')
    }
}
const arthropoda = new Arthropoda('Arthropoda', 5)
arthropoda.isColdblooded()
console.log('-------------')

class Fish extends WithBackbone {
    constructor(classOfAnimal, speed, bones) {
        super(classOfAnimal, speed, bones)
        this.coldblooded = true
    }

    isColdblooded() {
        this.coldblooded && console.log('Fish is a cold blooded animal with backbones')
    }
}
const fish = new Fish('Fish', 5)
fish.isColdblooded()
console.log('-------------')

class Amphibia extends WithBackbone {
    constructor(classOfAnimal, speed, bones) {
        super(classOfAnimal, speed, bones)
        this.coldblooded = true
    }

    isColdblooded() {
        this.coldblooded && console.log('Amphibia is a cold blooded animal with backbones')
    }
}
const amphibia = new Amphibia('Amphibia', 5)
amphibia.isColdblooded()
console.log('-------------')

class Reptiles extends WithBackbone {
    constructor(classOfAnimal, speed, bones) {
        super(classOfAnimal, speed, bones)
        this.coldblooded = true
    }

    isColdblooded() {
        this.coldblooded && console.log('Reptiles is a cold blooded animal with backbones')
    }
}
const reptiles = new Reptiles('Reptiles', 5)
reptiles.isColdblooded()
console.log('-------------')

class Aves extends WithBackbone {
    constructor(classOfAnimal, speed, bones) {
        super(classOfAnimal, speed, bones)
        this.warmblooded = true
    }

    isWarmblooded() {
        this.warmblooded && console.log('Aves is a warm blooded animal with backbones')
    }
}
const aves = new Aves('Aves', 5)
aves.isWarmblooded()
console.log('-------------')

class Mammals extends WithBackbone {
    constructor(classOfAnimal, speed, bones) {
        super(classOfAnimal, speed, bones)
        this.warmblooded = true
    }

    isWarmblooded() {
        this.warmblooded && console.log('Mammal is a warm blooded animal with backbones')
    }
}
const mammals = new Mammals('Mammals', 5)
mammals.isWarmblooded()
console.log('-------------')
