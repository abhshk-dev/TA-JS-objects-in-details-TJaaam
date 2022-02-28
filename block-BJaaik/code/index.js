class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(food){
        this.food=food;
        return console.log(`I like to Eat ${this.food}`);
    }
    sleep(){
        return console.log(`I sleep 8 hours a Day`);
    }
    walk(){
        return console.log(`I can walk 3 kms at a time`);
    }
}