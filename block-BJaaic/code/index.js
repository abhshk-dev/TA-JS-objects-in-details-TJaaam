
let animalMethods={
    eat(){
        return `I live in ${location} and I can eat`;
    },
}



function createAnimal(location,numberOfLegs){
    let animal=Object.create({});
    animal.location=location;
    animal.numberOfLegs=numberOfLegs;
    
}