export class Creneau {
id :number = 0;
date : Date ;
available:boolean = true;

 constructor(date:Date){
    this.date = date;
}
setId(id:number){
    this.id= id;
}

getId():number{
    return this.id;
}
makeItNoAvailable():void{
    this.available = false ;
}

isAvailable():boolean{
    return this.available;
}
}