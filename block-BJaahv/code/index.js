


class CreateUser{
    constructor(name,id,noOfProjects){
    
    this.name=name;
    this.id=id;
    this.noOfProjects=noOfProjects;
    } 
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        return this.name=newName;
    }
    incrementProject(){
        return this.noOfProjects=this.noOfProjects+1;
    }
    decrementProject(){
        return this.noOfProjects=this.noOfProjects-1;
    }
}
let TestData1= new CreateUser('Abhishek','abh_2138',4);

let TestData2= new CreateUser('Kamado Tanjiro','Tanj_@1',10);