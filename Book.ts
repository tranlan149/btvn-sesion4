class Book{
    private id:number;
    private title:string;
    private author:string;
    private year:number;

    constructor(id:number, title:string, author:string, year:number){
        this.id = id;
        this.author = author;
        this.title = title;
        this.year = year;
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.getAuthor;
    }
    getYear(){
        return this.year;
    }
}
class LibraryManager{
    private books : Book[];

    constructor(books:Book[]){
        this.books = [];
    }
    addBook(title:string, author:string, year:number):void{
        let id:number = Math.random();
        let book = new Book(id, title, author, year);
        this.books.push(book);
    }
    listBook():void{
        if(this.books.length==0){
            console.log("không có sách để hiển thị");
        }
        else{
            this.books.forEach((item, index)=>{
                console.log(`${item.getId} + " "+ ${item.getTitle} + " "+${item.getAuthor}+" "+${item.getYear}`);
            })
        }
    }
    removeBook(id:number):void{
        if(this.books.length<=0){
            console.log("danh sách rỗng");
    
        }
        else{
            this.books.forEach((item, index)=>{
                if(item.getId() === id){
                    this.books.splice(index, 1);
                }
            })
        }
    }
    searchBook(title:string):void{
        this.books.forEach((item, index)=>{
            if(item.getTitle()===title){
                console.log(`${item.getId} + " "+ ${item.getTitle} + " "+${item.getAuthor}+" "+${item.getYear}`);
            }
        })
    }
}