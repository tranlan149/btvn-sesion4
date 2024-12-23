class CD{
    private id:number;
    private title:string;
    private artist: string;
    private year : number;

    constructor(id:number, title:string, artist:string, year:number){
        this.id = id;
        this.artist = artist;
        this.title = title;
        this.year = year;
    }
    getId(){
        return this.id;
    }
    getArtist(){
        return this.artist;
    }
    getTitle(){
        return this.title;
    }
    getYear(){
        return this.year;
    }
}
class CDStoreManager{
    private cds : CD[];
    
    constructor(cds:CD[]){
        this.cds = cds;
    }
    addCD(title:string, artist:string, year:number):void{
        let id = Math.random();
        let Cd = new CD (id, title, artist, year);
        this.cds.push(Cd);
    }
    listCDs(){
        if(this.cds.length < 0){
            console.log("danh sách rỗng");
        }
        else{
            this.cds.forEach((item, index)=>{
                console.log(`${item.getId} ${item.getTitle} ${item.getArtist} ${item.getYear}`);
            })
        }
    }
    removeCD(id:number){
        this.cds.forEach((item, index)=>{
            if(item.getId()===id){
                this.cds.splice(index,1);
            }
        })
    }
    searchCD(title:string){
        console.log(this.cds.find(item=>(item.getTitle()===title)));
    }
}