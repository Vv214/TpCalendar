import { Component, Input } from '@angular/core';
import { Client } from 'src/app/Service/Client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  client: Client = new Client('', '', '', '', '');
  constructor() { }
  onSubmit() {
    console.log('nouveau rendez-vous' + this.client.prenom + '  '
      + this.client.nom + '  '
      + this.client.message + '  '
      + this.client.email + ' '
      + this.client.telephone + ' '
    );
  }

  @Input()
  afficheCreneau: boolean = false;

  appelAffichageCreneau(afficheCreneau: boolean): boolean {
    console.log('afficheCreneau', afficheCreneau);
    return !afficheCreneau;
  }
}
