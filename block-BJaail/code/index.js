
let form =document.querySelector('.form');
let bookListRoot=document.querySelector('.book-list');

const titleElm=form.elements.title;
const authorElm=form.elements.author;
const numberElm=form.elements.number;


class BookList{
    constructor(books=[]){
        this.books=books;
    }
    addBook(title,author,number){
        let book=new Book(title,author,number);
        this.books.push(book);
        this.createUI();
    }
    createUI(){
        bookListRoot.innerHTML="";

        this.books.forEach((book) =>{
        let li=document.createElement('li');
        let h2=document.createElement('h2');
        let h3=document.createElement('h3');
        let p=document.createElement('p');
        let span=document.createElement('span');

        h2.innerText=book.title;
        h3.innerText=book.author;
        p.innerText=book.number;
        span.innerHTML="X"; 
        
        span.addEventListener('click',()=>{
            this.removeBook(book.number);
            this.createUI();
        });

        li.append(h2,h3,p,span);

        li.classList.add('flex');

        bookListRoot.append(li);
    
        });
        
    }
    removeBook(number){
        this.books=this.books.filter(book=>book.number !== number);
        this.createUI();
    }
}

let library=new BookList();

class Book{
    constructor(title,author,number){
        this.title=title;
        this.author=author;
        this.number=number;
        this.id=`id-${Date.now()}`;
    }
    toggleClick(){
        this.title = "";
        this.author = "";
        this.number = "";
    }
}

function handleSubmit(event){
    event.preventDefault();

    const title=titleElm.value;
    const author=authorElm.value;
    const number=numberElm.value;
    library.addBook(title,author,number);
    titleElm.value="";
    authorElm.value="";
    numberElm.value="";
    //console.log(title,author,number);

}

form.addEventListener('submit',handleSubmit);
