export class Creneau {
// date : Date ;
annee: number;
mois: number;
jour:number ;
heure: number;
// constructor(date:Date){
//  this.date = date;
// }
constructor(annee: number,mois: number, jour:number , heure: number){
    this.annee =annee;
    this.mois = mois;
    this.jour = jour;
    this.heure = heure;
}

}