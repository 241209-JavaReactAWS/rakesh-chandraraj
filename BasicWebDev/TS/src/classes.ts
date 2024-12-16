/*
TS is an OOP language, so it has classes 

NOTE: Classes also exist exist in JS, but the TS classes are more robust and offer solutions for the 
different pillars of OOP 
*/

class Animal {

    // Fields 

    readonly name: string 
    private species: string
    // We NEED to have a constructor for these values 
    // readonly is like final in Java, so once it's set, it cannot be changed 

    // Static Variables 
    static sampleVariable = 3
    // Static members belong to the class, and not the object 
    static readonly sampleReadOnlyVariable = 34;


    // Constructors 

    constructor(name: string, species: string) {
        this.name = name
        this.species = species
    }


    /* Getters and Setters 
    With classes in Java, we use ENCAPSULATION to protect our variables by marking them as private and 
    creating getters and setters. 
    TS has 3 access modifiers: public, protected, and private. 
    */

    getSpecies(): string {
        return this.species;
    }

    setSpecies(sp: string) {
        this.species = sp;
    }

    getName(): string  {
        return this.name;
    }

    // setName(n: string) {
    //     this.name = n;
    // }
    // Won't work since name is a readonly attribute


    // Methods 
    move(feet: number) {
        console.log(`${this.name} moved a total of ${feet} feet`);
    }
}

// Let's create an object of that type 
let perry = new Animal("Perry", "Platypus");

// Check the variables 
console.log(perry.name);
console.log(perry.getSpecies()); // Getters are called like variables (but NOT Setters) 
perry.move(5)
console.log(Animal.sampleVariable);
Animal.sampleVariable = 4;
console.log(Animal.sampleVariable);


// PILLARS OF OOP 

// INHERITANCE
// We're going to inherit the Animal class and make a child class called Dog 
class Dog extends Animal {
    // Dogs are Animals, which means that they have access to the fields and methods from the Animal class

    bark(): void {
        console.log("ARF ARF ARF")
    }

    // POLYMORPIHSM
    // Generaly happens in extended classes (2 ways to do it is Overriding and Overloading)
    // Overriding 
    move(feet: number) {
        console.log(`The dog, ${this.name}, moved a total of ${feet} feet! What a good doggo!`);
    }
    // Overloading 
    someMethod(a: string): void
    someMethod(a: number): void
    someMethod(a: number, b: string): void
    someMethod(a: number | string, b ?: string): void {
        // So this might work for overloading, but not entirely sure 
    }
    // Accounts for all possible possibilities 
}

// Expects 2 arguments, since the Dog class is using the Animal constructor, which needs 2 arguments
let cash = new Dog("Cash", "Pit Bull")
cash.bark()
cash.move(0)

cash.someMethod("String")
cash.someMethod(10)
cash.someMethod(2, "Test")


// ABSTRACTION  

abstract class Car {
    // This can contain both abstract and concrete methods 
    abstract drive(): void; 
    // Implementing class must provide the drive method itself 

    alarm(): void {
        console.log("BEEP BEEP BEEP") 
    }
}

class Jeep extends Car {
    drive(): void {
        console.log("Fuel Burns, Pistons Turn, Exhaust is Created, Jeep moves forward!")
    }
}

class Tesla extends Car {
    drive(): void {
        console.log("Drains electricity from the battery, car moves forward!")
    }
}

let greenJeep: Car = new Jeep();
// Here, a Jeep is a type of car
greenJeep.drive();
// Car is the type, but the Jeep part is the implementing part, so this car will drive like a Jeep 
// This is why the greenJeep.drive() function returns the jeep version of drice 

let whiteTesla: Car = new Tesla()
whiteTesla.drive();