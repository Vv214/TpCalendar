import { of } from "rxjs";
import { rendezVous } from "./rendez_vous";
import { Injectable } from "@angular/core";


//  @Injectable({
//      providedIn: 'root'
//    })
export class lesRendezVous {
  listeRendezVous: rendezVous[] ;

  constructor(){
    this.listeRendezVous = [];
  }

  addRedendezVous(rdv:rendezVous):void {
    this.listeRendezVous.push(rdv);
  }

  deleteRedendezVous(rdv1: rendezVous ) :void {

    const index = this.listeRendezVous.findIndex(rdv => rdv === rdv1);
    if(index != -1) {
        this.listeRendezVous.splice(index,1);
        window.alert("rendez vous supprimé"); 
    }else{
        window.alert("rendez-vous non trouvé");
    }
  }

  findRendezVousByName(name: string): rendezVous[]{
    const rendezVousTrouves: rendezVous[] = [];
    for(const rendezVous of this.listeRendezVous){
        if(rendezVous.client.nom === name){
            rendezVousTrouves.push(rendezVous);
        }
    }
    return rendezVousTrouves;
  }

 listerRendezVous():rendezVous[]{
    return this.listeRendezVous;
 }

 listerRendezVousByDateAndName():void{
    for(const rendezVous of this.listeRendezVous){
            console.log(rendezVous.creneau+' '+rendezVous.client.nom);
    }

 }
 clearAllRendezVous(){
    this.listeRendezVous.length = 0;
 }

}