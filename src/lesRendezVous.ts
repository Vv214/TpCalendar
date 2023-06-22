// import { of } from "rxjs";
// import { rendezVous } from "./rendez_vous";

// export class lesRendezVous {
//   listeRendezVous: rendezVous[] = [];

//   addRedendezVous(rdv:rendezVous):void {
//     this.listeRendezVous.push(rdv);
//   }

//   deleteRedendezVous(rdv1: rendezVous ) :void {

//     const index = this.listeRendezVous.findIndex(rdv => rdv === rdv1);
//     if(index != -1) {
//         this.listeRendezVous.splice(index,1);
//         window.alert("redez vous supprimé"); 
//     }else{
//         window.alert("rendez-vous non trouvé");
//     }
//   }

//   findRendezVousByName(name: string): rendezVous[]{
//     const rendezVousTrouves: rendezVous[] = [];
//     for(const rendezVous of this.listeRendezVous){
//         if(rendezVous.client.nom === name){
//             rendezVousTrouves.push(rendezVous);
//         }
//     }
//     return rendezVousTrouves;
//   }

//  listerRendezVous():rendezVous[]{
//     return this.listeRendezVous;
//  }

//  listerRendezVousByDateAndName():void{
//     for(const rendezVous of this.listeRendezVous){
//             console.log(rendezVous.date +' '+rendezVous.client.nom);
//     }

//  }

// }