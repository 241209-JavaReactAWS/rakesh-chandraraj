"use strict";
/*
TS is an OOP language, so it has classes

NOTE: Classes also exist exist in JS, but the TS classes are more robust and offer solutions for the
different pillars of OOP
*/
class Animal {
    // Constructors 
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    /* Getters and Setters
    With classes in Java, we use ENCAPSULATION to protect our variables by marking them as private and
    creating getters and setters.
    TS has 3 access modifiers: public, protected, and private.
    */
    getSpecies() {
        return this.species;
    }
    setSpecies(sp) {
        this.species = sp;
    }
    getName() {
        return this.name;
    }
    // setName(n: string) {
    //     this.name = n;
    // }
    // Won't work since name is a readonly attribute
    // Methods 
    move(feet) {
        console.log(`${this.name} moved a total of ${feet} feet`);
    }
}
// We NEED to have a constructor for these values 
// readonly is like final in Java, so once it's set, it cannot be changed 
// Static Variables 
Animal.sampleVariable = 3;
// Static members belong to the class, and not the object 
Animal.sampleReadOnlyVariable = 34;
// Let's create an object of that type 
let perry = new Animal("Perry", "Platypus");
// Check the variables 
console.log(perry.name);
console.log(perry.getSpecies()); // Getters are called like variables (but NOT Setters) 
perry.move(5);
console.log(Animal.sampleVariable);
Animal.sampleVariable = 4;
console.log(Animal.sampleVariable);
// PILLARS OF OOP 
// INHERITANCE
// We're going to inherit the Animal class and make a child class called Dog 
class Dog extends Animal {
    // Dogs are Animals, which means that they have access to the fields and methods from the Animal class
    bark() {
        console.log("ARF ARF ARF");
    }
    // POLYMORPIHSM
    // Generaly happens in extended classes (2 ways to do it is Overriding and Overloading)
    // Overriding 
    move(feet) {
        console.log(`The dog, ${this.name}, moved a total of ${feet} feet! What a good doggo!`);
    }
    someMethod(a, b) {
        // So this might work for overloading, but not entirely sure 
    }
}
// Expects 2 arguments, since the Dog class is using the Animal constructor, which needs 2 arguments
let cash = new Dog("Cash", "Pit Bull");
cash.bark();
cash.move(0);
cash.someMethod("String");
cash.someMethod(10);
cash.someMethod(2, "Test");
// ABSTRACTION  
class Car {
    // Implementing class must provide the drive method itself 
    alarm() {
        console.log("BEEP BEEP BEEP");
    }
}
class Jeep extends Car {
    drive() {
        console.log("Fuel Burns, Pistons Turn, Exhaust is Created, Jeep moves forward!");
    }
}
class Tesla extends Car {
    drive() {
        console.log("Drains electricity from the battery, car moves forward");
    }
}
let greenJeep = new Jeep();
// Here, a Jeep is a type of car
greenJeep.drive();
// Car is the type, but the Jeep part is the implementing part, so this car will drive like a Jeep 
// This is why the greenJeep.drive() function returns the jeep version of drice 
let whiteTesla = new Tesla();
whiteTesla.drive();
