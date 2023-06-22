import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/model/Client';
import { rendezVous } from 'src/model/rendez_vous';
import { lesRendezVous } from 'src/model/lesRendezVous';
import { LesRendezVousService } from 'src/app/Service/LesRendezVousService';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  listeRendezVous: rendezVous[] = [];
  constructor( private rendezVousService: LesRendezVousService){}
  ngOnInit(): void {
     // Récupérer la liste de rendez-vous du service partagé
     this.listeRendezVous = this.rendezVousService.listeRendezVous;
  }
  // afficher les rdv apres clqiue du bouton
  afficherRendezVous: boolean = false;
  listerLesRendezVous(){
    this.afficherRendezVous = !this.afficherRendezVous;
  }

  consulterRendezVous(rdv: rendezVous) {
    console.log("Détails du rendez-vous : ", rdv);
    // Implémentez ici la logique pour afficher les détails du rendez-vous ou le modifier/supprimer
  }
}
