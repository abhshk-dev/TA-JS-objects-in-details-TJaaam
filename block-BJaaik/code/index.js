class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(food){
        this.food=food;
        return console.log(`${this.name} likes to Eat ${this.food}`);
    }
    sleep(){
        return console.log(`${this.name} sleeps 8 hours a Day`);
    }
    walk(){
        return console.log(`${this.name} can walk 3 kms at a time`);
    }
}


class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName=sportsName;
    }
    
    play(){
        return console.log(`${this.name} can Play`);
    }
}

class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName=instituteName;
    }
    teach(subjects=[]){
        this.subjects=subjects;
        return console.log(`${this.name} teaches these subjects ${this.subjects}`);
    }
}

class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind=kind;
    }
    createArt(){
        return console.log(`${this.name} creates Amazing Rap Music`);
    }
}


class Cricketer extends Player{
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender,sportsName);
        this.teamName=teamName;
    }
    playCricket(){
        return console.log(`${this.name} play cricket `);
    }
}

let cricketer1= new Cricketer('Rahul Dravid',45,'male','Cricket','India');
let artist1= new Artist('Eminem',50,'male','Hip-Hop');