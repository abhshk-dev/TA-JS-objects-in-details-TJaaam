class Square{
    constructor(side){
        this.width=side;
        this.height=side;
        this.noOfTimes=0;
    }
     description(){
         alert`The square is ${width} x ${height}`;
    }
    calcArea(){
        let area=this.width*this.height;
        return area;;
        
    }
    get area(){
        this.noOfTimes++;
        if(this.noOfTimes>=4){
            alert(`Upper limit reached`)
        }else{
            return this.width*this.height;
        }
    }
    set area(value){
        let side=Math.sqrt(value);
        this.width=side;
        this.height=side;
    }
    static isEqual(a,b){
        return (a.width*a.height)===(b.width*b.height);
    }
}

/*------ User class -----*/

class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`; 
    }
    set fullName(name){
        if(name.length<5){
            alert(`Full name should be more than 5 characters`);
        }else{
            let firstName=name.split(' ')[0];
            let lastName=name.split(' ')[1];
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }
    nameContains(str){
        return `${this.firstName} ${this.lastName}`.includes(str);
    }
}