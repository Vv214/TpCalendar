import { Component, Input } from '@angular/core';
import { Client } from 'src/model/Client';
import { LesRendezVousService } from 'src/app/Service/LesRendezVousService';
import { Creneau } from 'src/model/Creneau';
import { lesRendezVous } from 'src/model/lesRendezVous';
import { rendezVous } from 'src/model/rendez_vous';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  idClient:number = 0;
  idRendezVous:number = 0;
  idCreneau :number = 0;

  @Input()
  afficheCreneau: boolean = false;

  client: Client = new Client('', '', '', '',false, '');
  creneau: Creneau = new Creneau(new Date());

 
  lst: lesRendezVous = new lesRendezVous();
  listeRDV:rendezVous[] = this.lst.listeRendezVous;
  // in jection du servive 
  constructor(private rendezVousService: LesRendezVousService) {}
  ngOnInit(): void {}

  onSubmit() {
    const client: Client = new Client(this.client.prenom, this.client.nom, this.client.message, this.client.telephone,false, this.client.email);
    client.setId(this.idClient);
    this.idClient++;
    const creneau: Creneau = new Creneau(new Date());
    creneau.setId(this.idCreneau);
    this.idCreneau++;
    const rdv: rendezVous = new rendezVous(creneau, client);
    rdv.setId(this.idRendezVous);
    this.idRendezVous++;
  
    // Ajouter le rdv  à la liste dans le service partagé
    this.rendezVousService.listeRendezVous.push(rdv);
  
    // rein,istialiser le formulaire 
    this.client = new Client('', '', '','',false, '');
    this.creneau = new Creneau(new Date());
  }

  
  addCrenaux(){
  }
  // client: Client = new Client('', '', '', '', '');
  // constructor() { }
  // onSubmit() {
  //   console.log('nouveau rendez-vous' + this.client.prenom + '  '
  //     + this.client.nom + '  '
  //     + this.client.message + '  '
  //     + this.client.email + ' '
  //     + this.client.telephone + ' '
  //   );
  // }

  // @Input()
  // afficheCreneau: boolean = false;

  appelAffichageCreneau(afficheCreneau: boolean): boolean {
    console.log('afficheCreneau', afficheCreneau);
    return !afficheCreneau;
  }


}
