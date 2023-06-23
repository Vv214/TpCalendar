import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/model/Client';
import { rendezVous } from 'src/model/rendez_vous';
import { lesRendezVous } from 'src/model/lesRendezVous';
import { LesRendezVousService } from 'src/app/Service/LesRendezVousService';
import { Creneau } from 'src/model/Creneau';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  listeRendezVous: rendezVous[] = [];
  nameClient:string ='';
  rdvselectione:boolean = true;
  rdvSelectionne:boolean = true;
  rdvCourant: rendezVous  = new rendezVous( new Creneau(new Date()), new Client('','','','',false,''));
  RDVtrouve :boolean = false;
  
  constructor( private rendezVousService: LesRendezVousService){}
  ngOnInit(): void {
     // Récupérer la liste de rendez-vous du service partagé
     this.listeRendezVous = this.rendezVousService.listeRendezVous;
  }
  
  // afficher les rdv apres click du bouton
  afficherRendezVous: boolean = false;
  listerLesRendezVous(){
    this.afficherRendezVous = !this.afficherRendezVous;
  }

  consulterRendezVous(rdv: rendezVous) {
    console.log("Détails du rendez-vous : ", rdv);
  }
  
  findRDVbyClientName(){
      const rdv1 = this.listeRendezVous.find(rdv => rdv.client.nom === this.nameClient ) as rendezVous;

      if (rdv1.id != -1){
        this.rdvCourant = rdv1;
        this.RDVtrouve = true;
    }
  }

  editerRDV(rdvId:number):void{
    const rendezvous = this.listeRendezVous.find(rdv =>rdv.id === rdvId);
    if(rendezvous){
        this.rdvCourant = rendezvous ;
    }
  }

  supprimerRDV(rdvId: number):void {
      const index = this.listeRendezVous.findIndex(rdv => rdv.id == rdvId);
      if(index != -1){
          this.listeRendezVous.splice(index, 1);
      }
    }

    detailRDV(rdvId: number):void{
      const rdv:rendezVous = (this.listeRendezVous.find(rdv => rdv.id === rdvId)) as rendezVous;
      this.rdvCourant = rdv;
    }
    // sauvegarderRDV(): void {
      
    // }
}
