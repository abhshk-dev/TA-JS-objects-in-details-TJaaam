

class BookList{
    constructor(){

    }
}


class Book{
    constructor(title,category,author,isRead=false,finishedDate){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=isRead;
        this.finishedDate=finishedDate;
    }
}