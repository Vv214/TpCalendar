import { Injectable } from '@angular/core';
import { rendezVous } from 'src/model/rendez_vous';

@Injectable({
  providedIn: 'root'
})
export class LesRendezVousService {
  listeRendezVous: rendezVous[] = [];

  constructor() { }
}