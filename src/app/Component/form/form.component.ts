import { Component } from '@angular/core';
import { Client } from 'src/app/Service/Client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  client: Client = new Client('', '', '', 0, '');
  constructor() { }
  onSubmit() {
    console.log('nouveau rendez-vous' + this.client.prenom + '  '
      + this.client.nom + '  '
      + this.client.message + '  '
      + this.client.email + ' '
      + this.client.telephone
    );
  }

}
