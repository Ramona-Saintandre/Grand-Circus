 'use strict'

class DomesticMammals {
    constructor(lives, babyName, behavior,annoyance){
    this.lives = lives;
    this.babyName = babyName;
    this.behavior = behavior;
    this.annoyance =annoyance;
    }
    }

class Cat extends DomesticMammals {
    
    constructor(lives, babyName, behavior,annoyance,sound){
        super(lives, babyName, behavior,annoyance)
        
        this.sound = sound;
}
//need to instanciate the class by using new
eats(){
    console.log('They love to eat fish and chicken.')
}
procreate(){
    console.log('It is very annoying when a cat is in heat.')
}
}

class wildCat extends DomesticMammals{
    constructor(lives, babyName, behavior,annoyance,social){
        super(lives, babyName, behavior,annoyance);
               
        this.social = social;
    }

danger(){
   console.log ('Wild cats are very dangerous');
}
}
let myCat = new Cat(9, 'mimzy', 'cuddly', 'water', 'screah');
let secondCat = new Cat(9, 'muttsy', 'loner', 'water', 'meow');
myCat.eats();
console.log(myCat.babyName, secondCat.babyName)

let wildCat2 = new wildCat('none','cubby','scary','fierce','loner');
wildCat2.danger();