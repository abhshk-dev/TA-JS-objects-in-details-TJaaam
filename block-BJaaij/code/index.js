



class Book{
    constructor(title,category,author){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=false;
        this.finishedDate=null;
    }
    markBookAsRead(){
        this.isRead=true;
        this.finishedDate=Date.now();
        
    }
}


class BookList{
    constructor(){
        this.books=[];
        this.currentIndexBook=0;
    }
    add(books=[]){
        this.books=this.books.concat(books);
        return this.books;
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        this.currentIndexBook=this.currentIndexBook+1;
        return this.books[this.currentIndexBook];
    }
    getPrevBook(){
        this.currentIndexBook=this.currentIndexBook+1;
        return this.books[this.currentIndexBook];
    }
    changeCurrentBook(index){
        this.currentIndexBook=index;
        return this.currentIndexBook;
    }
}


let book1=new Book('Harry Potter and the Philosophers stone','fiction','J.K Rowling');
let book2= new Book('Harry Potter and the Chamber of secrets','fiction','J.K Rowling');
let book3= new Book('Catch-22','satire-novel','Joseph Heller');
let book4= new Book('Diary of a wimpy kid','fiction','Jeff Kinney');
let book5=new Book('The Jungle Book','fiction','Rudyard Kipling');



let library= new BookList();

library.add([book1,book2,book3,book4,book5]);