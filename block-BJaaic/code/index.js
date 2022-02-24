
let animalMethods={
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(){
        this.location=newLocation;
        return this.location;
    },
    summary(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs} legs`)
    }
};



function createAnimal(location,numberOfLegs){
    let obj=Object.create(animalMethods);
    obj.location=location;
    obj.numberOfLegs=numberOfLegs;
    return obj;
}

let dogsMethod={
    bark(){
        alert(`I am ${this.name} and i can bark`);
    },
    changeName(name){
        this.name=name;
        return this.name;
    },
    changeColor(newColor){
        this.color=newColor;
        return this.color;
    },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
};
Object.setPrototypeOf(dogsMethod,animalMethods);

function createDog(location,numberOfLegs,name,color){
    let obj=createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(obj,dogsMethod);
    obj.name=name;
    obj.color=color;
    return obj;
}


let catMethods={
    meow(){
       alert  `I am ${this.name} and I can do mewo meow 😹`
    },
    changeName(name){
        this.name=name;
        return this.name;
    },
    changeColorOfEyes(newColor){
        this.colorOfEyes=newColor;
        return this.colorOfEyes;
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
};

Object.setPrototypeOf(catMethods,animalMethods);

function createCat(location,numberOfLegs,name,color){
    let obj=createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(obj,catMethods);
    obj.name=name;
    obj.colorOfEyes=color;
    return obj;
}
